import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles } from 'lucide-react'
import { getActiveFestival } from '../data/festivals'

// Particle component for floating elements
const Particle = ({ delay, duration, startX, startY, emoji, size = 'text-2xl' }) => (
  <motion.div
    className={`absolute ${size} pointer-events-none select-none`}
    initial={{ 
      x: startX, 
      y: startY, 
      opacity: 0, 
      scale: 0,
      rotate: 0 
    }}
    animate={{ 
      y: [startY, startY - 200, startY - 400],
      x: [startX, startX + Math.random() * 100 - 50, startX + Math.random() * 150 - 75],
      opacity: [0, 1, 0],
      scale: [0.5, 1.2, 0.8],
      rotate: [0, 180, 360]
    }}
    transition={{ 
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeOut"
    }}
  >
    {emoji}
  </motion.div>
)

// Snow particle for Christmas
const Snowflake = ({ delay, startX }) => (
  <motion.div
    className="absolute text-white pointer-events-none select-none"
    initial={{ x: startX, y: -20, opacity: 0 }}
    animate={{ 
      y: [0, 600],
      x: [startX, startX + Math.sin(delay * 10) * 50],
      opacity: [0, 1, 1, 0],
      rotate: [0, 360]
    }}
    transition={{ 
      duration: 8 + Math.random() * 4,
      delay: delay,
      repeat: Infinity,
      ease: "linear"
    }}
    style={{ fontSize: `${10 + Math.random() * 15}px` }}
  >
    ❄
  </motion.div>
)

// Diya/lamp for Diwali
const Diya = ({ delay, x, y }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: x, top: y }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ 
      scale: [1, 1.1, 1],
      opacity: 1
    }}
    transition={{ 
      duration: 2,
      delay: delay,
      repeat: Infinity,
      repeatType: "reverse"
    }}
  >
    <div className="relative">
      <span className="text-3xl">🪔</span>
      <motion.div
        className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-6 bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent rounded-full blur-sm"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
    </div>
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
  >
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full"
        style={{ 
          backgroundColor: colors[i % colors.length],
          boxShadow: `0 0 10px ${colors[i % colors.length]}`
        }}
        animate={{
          x: Math.cos((i * 45 * Math.PI) / 180) * 60,
          y: Math.sin((i * 45 * Math.PI) / 180) * 60,
          opacity: [1, 0],
          scale: [1, 0.5]
        }}
        transition={{ duration: 1, delay: delay + 0.3 }}
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

const FestivalBanner = ({ previewDate = null, className = '', persistDismissal = false }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [festival, setFestival] = useState(null)

  useEffect(() => {
    const checkDismissed = () => {
      // If persistDismissal is false, always show banner on refresh
      if (!persistDismissal) return true
      const dismissedDate = localStorage.getItem('festivalBannerDismissed')
      const today = new Date().toDateString()
      return dismissedDate !== today
    }

    const checkDate = previewDate || new Date()
    const activeFestival = getActiveFestival(checkDate)
    
    if (activeFestival && checkDismissed()) {
      setFestival(activeFestival)
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [previewDate, persistDismissal])

  const handleClose = () => {
    // Only store in localStorage if persistDismissal is true
    if (persistDismissal) {
      const today = new Date().toDateString()
      localStorage.setItem('festivalBannerDismissed', today)
    }
    setIsVisible(false)
  }

  // Get theme based on festival ID
  const theme = useMemo(() => {
    if (!festival) return festivalThemes.default
    return festivalThemes[festival.id] || festivalThemes.default
  }, [festival])

  // Generate random particles
  const particles = useMemo(() => {
    if (!theme) return []
    return [...Array(15)].map((_, i) => ({
      id: i,
      delay: i * 0.5,
      duration: 4 + Math.random() * 3,
      startX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
      startY: 400 + Math.random() * 200,
      emoji: theme.particles[Math.floor(Math.random() * theme.particles.length)]
    }))
  }, [theme])

  // Generate snowflakes for Christmas
  const snowflakes = useMemo(() => {
    if (!theme?.hasSnow) return []
    return [...Array(30)].map((_, i) => ({
      id: i,
      delay: i * 0.3,
      startX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)
    }))
  }, [theme])

  // Generate diyas for Diwali
  const diyas = useMemo(() => {
    if (!theme?.hasDiyas) return []
    return [...Array(8)].map((_, i) => ({
      id: i,
      delay: i * 0.2,
      x: `${10 + (i * 12)}%`,
      y: `${70 + Math.random() * 20}%`
    }))
  }, [theme])

  // Generate fireworks
  const fireworks = useMemo(() => {
    if (!theme?.hasFireworks) return []
    return [...Array(5)].map((_, i) => ({
      id: i,
      delay: i * 1.5,
      x: `${15 + (i * 18)}%`,
      y: `${20 + Math.random() * 30}%`,
      colors: ['#FFD700', '#FF6B6B', '#4ECDC4', '#A855F7', '#F97316']
    }))
  }, [theme])

  if (!isVisible || !festival) {
    return null
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100, scale: 0.95 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`relative w-full min-h-[500px] md:min-h-[550px] lg:min-h-[600px] overflow-hidden ${className}`}
        >
          {/* Animated Gradient Background */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${theme.gradient}`}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />

          {/* Animated mesh overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
          </div>

          {/* Animated glow orbs */}
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-white/10 blur-3xl"
            animate={{
              x: ['-10%', '10%', '-10%'],
              y: ['-10%', '20%', '-10%'],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ left: '10%', top: '10%' }}
          />
          <motion.div
            className="absolute w-80 h-80 rounded-full bg-white/10 blur-3xl"
            animate={{
              x: ['10%', '-10%', '10%'],
              y: ['10%', '-20%', '10%'],
              scale: [1.2, 1, 1.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            style={{ right: '10%', bottom: '10%' }}
          />

          {/* Stars/sparkles background */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>

          {/* Festival-specific effects */}
          {/* Snowflakes for Christmas */}
          {theme.hasSnow && snowflakes.map(flake => (
            <Snowflake key={flake.id} delay={flake.delay} startX={flake.startX} />
          ))}

          {/* Diyas for Diwali */}
          {theme.hasDiyas && diyas.map(diya => (
            <Diya key={diya.id} delay={diya.delay} x={diya.x} y={diya.y} />
          ))}

          {/* Fireworks */}
          {theme.hasFireworks && fireworks.map(fw => (
            <Firework key={fw.id} delay={fw.delay} x={fw.x} y={fw.y} colors={fw.colors} />
          ))}

          {/* Floating particles */}
          {particles.map(p => (
            <Particle
              key={p.id}
              delay={p.delay}
              duration={p.duration}
              startX={p.startX}
              startY={p.startY}
              emoji={p.emoji}
            />
          ))}

          {/* Content Container */}
          <div className="relative z-10 h-full min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-24">
            
            {/* Decorative top elements - floating emojis */}
            <motion.div
              className="flex gap-6 mb-6"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-5xl md:text-6xl"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    delay: i * 0.2, 
                    repeat: Infinity 
                  }}
                >
                  {theme.particles[i]}
                </motion.span>
              ))}
            </motion.div>

            {/* Festival Name Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
              className="mb-6"
            >
              <div className={`relative inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border ${theme.borderGlow} shadow-2xl ${theme.glowColor}`}>
                <Sparkles className={`w-5 h-5 ${theme.accentColor}`} />
                <span className="text-white font-bold text-lg tracking-wide">
                  {festival.name}
                </span>
                <Sparkles className={`w-5 h-5 ${theme.accentColor}`} />
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-white/20 blur-xl -z-10" />
              </div>
            </motion.div>

            {/* Main Greeting */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative"
            >
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight ${theme.textGlow}`}>
                {festival.greeting.split('!')[0]}!
              </h1>
              
              {/* Subtitle with remaining greeting text */}
              {festival.greeting.split('!').length > 1 && (
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="mt-4 text-xl sm:text-2xl md:text-3xl text-white/90 font-medium"
                >
                  {festival.greeting.split('!').slice(1).join('!').trim()}
                </motion.p>
              )}
            </motion.div>

            {/* Date Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="mt-8"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-black/30 backdrop-blur-sm rounded-full border border-white/20">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/90 font-medium">
                  {festival.startDate === festival.endDate
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
                      })}`}
                </span>
              </div>
            </motion.div>

            {/* Animated decorative line */}
            <motion.div
              className="mt-8 flex items-center gap-4"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-white/50" />
              <motion.span
                className="text-2xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                {theme.particles[0]}
              </motion.span>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-white/50" />
            </motion.div>

          </div>

          {/* Close Button - positioned outside content container for better accessibility */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.3, type: 'spring' }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClose}
            className="absolute top-24 right-4 sm:top-28 sm:right-6 z-50 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 transition-all duration-300 group shadow-lg cursor-pointer"
            aria-label="Close banner"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </motion.button>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
          
          {/* Corner decorations */}
          <motion.div
            className="absolute bottom-4 left-4 text-5xl opacity-30"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {theme.particles[theme.particles.length - 1]}
          </motion.div>
          <motion.div
            className="absolute bottom-4 right-4 text-5xl opacity-30"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {theme.particles[theme.particles.length - 2]}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FestivalBanner
