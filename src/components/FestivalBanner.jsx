import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { X, Sparkles } from 'lucide-react'
import { getActiveFestival } from '../data/festivals'

// Performance notes:
// - The active festival is resolved synchronously during the first render so the
//   banner occupies its final space on first paint (no useEffect state flip => no CLS).
// - The greeting text renders fully visible immediately (no opacity fade) so it can be
//   painted as the LCP element as soon as the bundle executes.
// - Decorative elements are capped (~10) and use deterministic positions (no
//   Math.random() during render, so nothing "jumps" on re-render).
// - All looping animations are disabled on mobile viewports and for users who
//   prefer reduced motion.

const MOBILE_QUERY = '(max-width: 767px)'
const STAR_COUNT = 6
const PARTICLE_COUNT = 4

// Deterministic pseudo-random number in [0, 1) derived from an index + salt.
// Stable across renders, unlike Math.random().
const seeded = (i, salt = 1) => {
  const x = Math.sin((i + 1) * 12.9898 * salt + salt * 78.233) * 43758.5453
  return x - Math.floor(x)
}

const getIsMobile = () =>
  typeof window !== 'undefined' && typeof window.matchMedia === 'function'
    ? window.matchMedia(MOBILE_QUERY).matches
    : false

const isDismissedToday = () => {
  try {
    return localStorage.getItem('festivalBannerDismissed') === new Date().toDateString()
  } catch {
    return false
  }
}

// Particle component for floating elements
const Particle = ({ delay, duration, startX, drift, emoji, size = 'text-2xl' }) => (
  <motion.div
    className={`absolute bottom-0 ${size} pointer-events-none select-none`}
    style={{ left: startX }}
    initial={{ y: 0, opacity: 0, scale: 0.5 }}
    animate={{
      y: [0, -200, -400],
      x: [0, drift, drift * 1.5],
      opacity: [0, 1, 0],
      scale: [0.5, 1.2, 0.8],
      rotate: [0, 180, 360]
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeOut'
    }}
    aria-hidden="true"
  >
    {emoji}
  </motion.div>
)

// Snow particle for Christmas
const Snowflake = ({ delay, startX, duration, fontSize, drift }) => (
  <motion.div
    className="absolute top-0 text-white pointer-events-none select-none"
    style={{ left: startX, fontSize }}
    initial={{ y: -20, opacity: 0 }}
    animate={{
      y: [0, 600],
      x: [0, drift],
      opacity: [0, 1, 1, 0],
      rotate: [0, 360]
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'linear'
    }}
    aria-hidden="true"
  >
    ❄
  </motion.div>
)

// Diya/lamp for Diwali
const Diya = ({ delay, x, y, animated }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: x, top: y }}
    animate={animated ? { scale: [1, 1.1, 1] } : undefined}
    transition={animated ? { duration: 2, delay, repeat: Infinity, repeatType: 'reverse' } : undefined}
    aria-hidden="true"
  >
    <span className="text-3xl">🪔</span>
  </motion.div>
)

// Firework burst effect
const Firework = ({ delay, x, y, colors }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: x, top: y }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: [0, 1.5, 2], opacity: [0, 1, 0] }}
    transition={{ duration: 1.5, delay, repeat: Infinity, repeatDelay: 3 }}
    aria-hidden="true"
  >
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 rounded-full"
        style={{
          backgroundColor: colors[i % colors.length],
          transform: `translate(${Math.cos((i * 60 * Math.PI) / 180) * 60}px, ${Math.sin((i * 60 * Math.PI) / 180) * 60}px)`
        }}
      />
    ))}
  </motion.div>
)

// Festival-specific theme configurations
const festivalThemes = {
  'christmas': {
    gradient: 'from-red-900 via-green-900 to-red-900',
    accentColor: 'text-red-400',
    glowColor: 'shadow-red-500/50',
    particles: ['🎄', '⭐', '🎁', '🔔', '❄️', '🦌'],
    hasSnow: true,
    borderGlow: 'border-red-500/30',
    textGlow: 'drop-shadow-[0_0_25px_rgba(239,68,68,0.5)]',
  },
  'diwali': {
    gradient: 'from-orange-900 via-amber-800 to-yellow-900',
    accentColor: 'text-amber-400',
    glowColor: 'shadow-amber-500/50',
    particles: ['✨', '🎆', '🎇', '🪔', '💫', '🌟'],
    hasDiyas: true,
    hasFireworks: true,
    borderGlow: 'border-amber-500/30',
    textGlow: 'drop-shadow-[0_0_25px_rgba(251,191,36,0.5)]',
  },
  'new-year': {
    gradient: 'from-purple-900 via-blue-900 to-indigo-900',
    accentColor: 'text-purple-400',
    glowColor: 'shadow-purple-500/50',
    particles: ['🎉', '🎊', '🥳', '✨', '🍾', '🎆'],
    hasFireworks: true,
    borderGlow: 'border-purple-500/30',
    textGlow: 'drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]',
  },
  'holi': {
    gradient: 'from-pink-600 via-purple-600 to-blue-600',
    accentColor: 'text-pink-300',
    glowColor: 'shadow-pink-500/50',
    particles: ['🎨', '💜', '💙', '💚', '💛', '🧡'],
    borderGlow: 'border-pink-500/30',
    textGlow: 'drop-shadow-[0_0_25px_rgba(236,72,153,0.5)]',
    hasColorSplash: true,
  },
  'eid-al-fitr': {
    gradient: 'from-emerald-900 via-teal-800 to-cyan-900',
    accentColor: 'text-emerald-400',
    glowColor: 'shadow-emerald-500/50',
    particles: ['🌙', '⭐', '🕌', '✨', '🌟', '💫'],
    borderGlow: 'border-emerald-500/30',
    textGlow: 'drop-shadow-[0_0_25px_rgba(52,211,153,0.5)]',
  },
  'eid-al-adha': {
    gradient: 'from-emerald-900 via-teal-800 to-cyan-900',
    accentColor: 'text-emerald-400',
    glowColor: 'shadow-emerald-500/50',
    particles: ['🌙', '⭐', '🕌', '✨', '🌟', '💫'],
    borderGlow: 'border-emerald-500/30',
    textGlow: 'drop-shadow-[0_0_25px_rgba(52,211,153,0.5)]',
  },
  'republic-day': {
    gradient: 'from-orange-600 via-white to-green-600',
    accentColor: 'text-orange-500',
    glowColor: 'shadow-orange-500/50',
    particles: ['🇮🇳', '🎖️', '⭐', '🦚', '✨', '🎗️'],
    borderGlow: 'border-orange-500/30',
    textGlow: 'drop-shadow-[0_0_25px_rgba(249,115,22,0.5)]',
    specialGradient: true,
  },
  'independence-day': {
    gradient: 'from-orange-600 via-white to-green-600',
    accentColor: 'text-orange-500',
    glowColor: 'shadow-orange-500/50',
    particles: ['🇮🇳', '🎖️', '⭐', '🦚', '✨', '🎗️'],
    borderGlow: 'border-orange-500/30',
    textGlow: 'drop-shadow-[0_0_25px_rgba(249,115,22,0.5)]',
    specialGradient: true,
  },
  'pongal': {
    gradient: 'from-amber-700 via-yellow-600 to-orange-700',
    accentColor: 'text-yellow-300',
    glowColor: 'shadow-yellow-500/50',
    particles: ['🌾', '☀️', '🎋', '🍚', '✨', '🪷'],
    borderGlow: 'border-yellow-500/30',
    textGlow: 'drop-shadow-[0_0_25px_rgba(234,179,8,0.5)]',
  },
  'default': {
    gradient: 'from-indigo-900 via-purple-900 to-pink-900',
    accentColor: 'text-indigo-400',
    glowColor: 'shadow-indigo-500/50',
    particles: ['✨', '🎉', '⭐', '💫', '🌟', '🎊'],
    borderGlow: 'border-indigo-500/30',
    textGlow: 'drop-shadow-[0_0_25px_rgba(99,102,241,0.5)]',
  }
}

const formatFestivalDate = (festival) =>
  festival.startDate === festival.endDate
    ? new Date(festival.startDate).toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : `${new Date(festival.startDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      })} - ${new Date(festival.endDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })}`

const FestivalBanner = ({ previewDate = null, className = '', persistDismissal = false }) => {
  // Resolve the festival synchronously so the banner is present on the very first paint.
  const festival = useMemo(
    () => getActiveFestival(previewDate || new Date()) || null,
    [previewDate]
  )

  // Dismissal state is also read synchronously (lazy initializer) to avoid a layout flip.
  // If persistDismissal is false, the banner always shows again on refresh.
  const [isDismissed, setIsDismissed] = useState(() => persistDismissal && isDismissedToday())

  // Animation gating: off on mobile viewports and for prefers-reduced-motion users.
  const prefersReducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(getIsMobile)

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return
    const mql = window.matchMedia(MOBILE_QUERY)
    const onChange = (e) => setIsMobile(e.matches)
    if (mql.addEventListener) mql.addEventListener('change', onChange)
    else mql.addListener(onChange)
    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', onChange)
      else mql.removeListener(onChange)
    }
  }, [])

  const animated = !isMobile && !prefersReducedMotion

  const handleClose = () => {
    // Only store in localStorage if persistDismissal is true
    if (persistDismissal) {
      try {
        localStorage.setItem('festivalBannerDismissed', new Date().toDateString())
      } catch {
        /* storage unavailable - dismiss for this session only */
      }
    }
    setIsDismissed(true)
  }

  // Get theme based on festival ID
  const theme = useMemo(() => {
    if (!festival) return festivalThemes.default
    return festivalThemes[festival.id] || festivalThemes.default
  }, [festival])

  // Static twinkle stars (deterministic positions; twinkle only when animated)
  const stars = useMemo(
    () =>
      [...Array(STAR_COUNT)].map((_, i) => ({
        id: i,
        left: `${Math.round(seeded(i, 3) * 100)}%`,
        top: `${Math.round(seeded(i, 7) * 100)}%`,
        duration: 2 + seeded(i, 11) * 2,
        delay: seeded(i, 13) * 2,
      })),
    []
  )

  // Floating particles (deterministic)
  const particles = useMemo(
    () =>
      [...Array(PARTICLE_COUNT)].map((_, i) => ({
        id: i,
        delay: i * 1.2,
        duration: 5 + seeded(i, 17) * 3,
        startX: `${10 + Math.round(seeded(i, 19) * 80)}%`,
        drift: Math.round(seeded(i, 23) * 100 - 50),
        emoji: theme.particles[i % theme.particles.length],
      })),
    [theme]
  )

  // Snowflakes for Christmas (deterministic)
  const snowflakes = useMemo(() => {
    if (!theme.hasSnow) return []
    return [...Array(6)].map((_, i) => ({
      id: i,
      delay: i * 0.8,
      startX: `${Math.round(seeded(i, 29) * 100)}%`,
      duration: 8 + seeded(i, 31) * 4,
      fontSize: `${10 + Math.round(seeded(i, 37) * 15)}px`,
      drift: Math.round(Math.sin(i * 3) * 50),
    }))
  }, [theme])

  // Diyas for Diwali (deterministic)
  const diyas = useMemo(() => {
    if (!theme.hasDiyas) return []
    return [...Array(4)].map((_, i) => ({
      id: i,
      delay: i * 0.2,
      x: `${10 + i * 24}%`,
      y: `${70 + Math.round(seeded(i, 41) * 20)}%`,
    }))
  }, [theme])

  // Fireworks (deterministic)
  const fireworks = useMemo(() => {
    if (!theme.hasFireworks) return []
    return [...Array(3)].map((_, i) => ({
      id: i,
      delay: i * 1.5,
      x: `${15 + i * 30}%`,
      y: `${20 + Math.round(seeded(i, 43) * 30)}%`,
      colors: ['#FFD700', '#FF6B6B', '#4ECDC4', '#A855F7', '#F97316'],
    }))
  }, [theme])

  if (!festival) {
    return null
  }

  const [greetingHeadline, ...greetingRest] = festival.greeting.split('!')
  const greetingSubtitle = greetingRest.join('!').trim()

  return (
    // initial={false}: render in final state on first paint (no entrance transition),
    // while still allowing the exit animation when the banner is dismissed.
    <AnimatePresence initial={false}>
      {!isDismissed && (
        <motion.div
          key="festival-banner"
          exit={{ opacity: 0, y: -100, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={`relative w-full min-h-[500px] md:min-h-[550px] lg:min-h-[600px] overflow-hidden ${className}`}
        >
          {/* Gradient Background (static) */}
          <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient}`} />

          {/* Mesh overlay */}
          <div className="absolute inset-0 opacity-30" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
          </div>

          {/* Glow orbs (static - animating large blurred layers is expensive to paint) */}
          <div
            className="absolute w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none"
            style={{ left: '10%', top: '10%' }}
            aria-hidden="true"
          />
          <div
            className="absolute w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none"
            style={{ right: '10%', bottom: '10%' }}
            aria-hidden="true"
          />

          {/* Stars/sparkles background */}
          <div className="absolute inset-0" aria-hidden="true">
            {stars.map((s) =>
              animated ? (
                <motion.div
                  key={s.id}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{ left: s.left, top: s.top }}
                  animate={{ opacity: [0.2, 1, 0.2], scale: [0.5, 1.5, 0.5] }}
                  transition={{ duration: s.duration, delay: s.delay, repeat: Infinity }}
                />
              ) : (
                <div
                  key={s.id}
                  className="absolute w-1 h-1 bg-white/60 rounded-full"
                  style={{ left: s.left, top: s.top }}
                />
              )
            )}
          </div>

          {/* Festival-specific effects (desktop + motion allowed only) */}
          {animated && theme.hasSnow && snowflakes.map((flake) => (
            <Snowflake key={flake.id} {...flake} />
          ))}

          {theme.hasDiyas && diyas.map((diya) => (
            <Diya key={diya.id} delay={diya.delay} x={diya.x} y={diya.y} animated={animated} />
          ))}

          {animated && theme.hasFireworks && fireworks.map((fw) => (
            <Firework key={fw.id} delay={fw.delay} x={fw.x} y={fw.y} colors={fw.colors} />
          ))}

          {animated && particles.map((p) => (
            <Particle
              key={p.id}
              delay={p.delay}
              duration={p.duration}
              startX={p.startX}
              drift={p.drift}
              emoji={p.emoji}
            />
          ))}

          {/* Content Container - rendered fully visible on first paint (LCP-friendly) */}
          <div className="relative z-10 h-full min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-24">

            {/* Decorative top elements - floating emojis */}
            <div className="flex gap-6 mb-6" aria-hidden="true">
              {[0, 1, 2].map((i) =>
                animated ? (
                  <motion.span
                    key={i}
                    className="text-5xl md:text-6xl"
                    animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                  >
                    {theme.particles[i]}
                  </motion.span>
                ) : (
                  <span key={i} className="text-5xl md:text-6xl">
                    {theme.particles[i]}
                  </span>
                )
              )}
            </div>

            {/* Festival Name Badge */}
            <div className="mb-6">
              <div className={`relative inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border ${theme.borderGlow} shadow-2xl ${theme.glowColor}`}>
                <Sparkles className={`w-5 h-5 ${theme.accentColor}`} />
                <span className="text-white font-bold text-lg tracking-wide">
                  {festival.name}
                </span>
                <Sparkles className={`w-5 h-5 ${theme.accentColor}`} />

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-white/20 blur-xl -z-10" />
              </div>
            </div>

            {/* Main Greeting - <h2> so the page keeps a single <h1> (in Hero) */}
            <div className="relative">
              <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight ${theme.textGlow}`}>
                {greetingHeadline}!
              </h2>

              {/* Subtitle with remaining greeting text */}
              {greetingSubtitle && (
                <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-white/90 font-medium">
                  {greetingSubtitle}
                </p>
              )}
            </div>

            {/* Date Badge */}
            <div className="mt-8">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-black/30 backdrop-blur-sm rounded-full border border-white/20">
                <div className={`w-2 h-2 rounded-full bg-green-400 ${animated ? 'animate-pulse' : ''}`} />
                <span className="text-white/90 font-medium">
                  {formatFestivalDate(festival)}
                </span>
              </div>
            </div>

            {/* Decorative line */}
            <div className="mt-8 flex items-center gap-4" aria-hidden="true">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-white/50" />
              <span className="text-2xl">{theme.particles[0]}</span>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-white/50" />
            </div>

          </div>

          {/* Close Button - positioned outside content container for better accessibility */}
          <motion.button
            whileHover={animated ? { scale: 1.1, rotate: 90 } : undefined}
            whileTap={{ scale: 0.9 }}
            onClick={handleClose}
            className="absolute top-24 right-4 sm:top-28 sm:right-6 z-50 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 transition-colors duration-300 group shadow-lg cursor-pointer"
            aria-label="Close banner"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </motion.button>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Corner decorations (static) */}
          <div className="absolute bottom-4 left-4 text-5xl opacity-30" aria-hidden="true">
            {theme.particles[theme.particles.length - 1]}
          </div>
          <div className="absolute bottom-4 right-4 text-5xl opacity-30" aria-hidden="true">
            {theme.particles[theme.particles.length - 2]}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FestivalBanner
