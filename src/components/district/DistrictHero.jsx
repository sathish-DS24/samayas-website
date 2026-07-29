import React from 'react'
import { motion } from 'framer-motion'
import { Phone, ArrowRight, MessageCircle, Sparkles, Check } from 'lucide-react'
import Breadcrumb from './Breadcrumb'

const DistrictHero = ({ district, displayName, breadcrumbItems, children }) => {
  const quickFacts = [
    '24×7 Service',
    'No Return Charges',
    'Verified Drivers',
    'Instant Booking',
    'All Tamil Nadu Coverage'
  ]

  return (
    <section className="relative pt-24 pb-12 lg:pb-16 bg-primary-900 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white overflow-hidden">
      {/* Background decorations & glow effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 right-10 w-96 h-96 bg-accent-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary-400 rounded-full blur-[100px]" />
        {/* Subtle SVG Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Subtle road path & map landscape SVG watermark */}
      <div className="absolute left-0 bottom-0 w-full lg:w-1/2 h-full opacity-[0.07] pointer-events-none overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 800 600" className="w-full h-full text-white fill-none stroke-current stroke-[2]" preserveAspectRatio="none">
          <path d="M-100,500 C150,450 300,200 450,300 C600,400 700,100 900,50" />
          <path d="M-50,550 C200,500 350,250 500,350 C650,450 750,150 950,100" strokeDasharray="8 8" />
          <polygon points="400,280 415,310 385,310" className="fill-accent-400 stroke-none" />
          <circle cx="400" cy="280" r="16" className="stroke-accent-400 stroke-[2] fill-none" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 [&_span]:text-gray-300 [&_a]:text-gray-300 [&_a:hover]:text-accent-400 [&_span[aria-current]]:text-accent-500 [&_span[aria-current]]:font-semibold">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/30 text-accent-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>District Hub • 24/7 Verified Taxi Dispatch</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              One-Way Taxi Service in{' '}
              <span className="text-accent-400 block sm:inline font-extrabold">
                {displayName}
              </span>
            </h1>

            {district.heroTagline && (
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-xl">
                {district.heroTagline}
              </p>
            )}

            {/* Quick facts check list */}
            <div className="pt-1">
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-w-xl">
                {quickFacts.map((fact) => (
                  <li key={fact} className="flex items-center gap-2 text-xs sm:text-sm text-gray-100 font-medium">
                    <div className="w-4 h-4 rounded-full bg-accent-500/20 border border-accent-400/40 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-accent-400 stroke-[3]" />
                    </div>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#booking-form"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-accent-500 to-accent-600 text-gray-950 font-bold rounded-full shadow-lg shadow-accent-500/20 hover:shadow-accent-500/40 hover:scale-[1.02] transition-all"
              >
                Book One-Way Taxi
                <ArrowRight className="w-4.5 h-4.5" />
              </a>
              <a
                href="tel:+919894809439"
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 98948 09439
              </a>
              <a
                href="https://wa.me/919894809439"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-green-400/40 text-green-300 font-semibold rounded-full hover:bg-green-500/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right column: Booking Form (passed as children) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
            id="booking-form"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 shadow-2xl border border-white/15">
              {children}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DistrictHero
