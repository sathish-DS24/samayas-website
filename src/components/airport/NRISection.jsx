import React from 'react'
import { Globe, Plane, Clock, ShieldCheck, Heart, UserCheck, MessageSquare, PhoneCall, CheckCircle } from 'lucide-react'

const NRISection = ({ airportName = 'the airport' }) => {
  const highlights = [
    {
      title: 'Pre-Book Before Traveling to India',
      desc: 'Reserve your cab online or via WhatsApp prior to departure from abroad. Receive instant booking confirmation & driver details.',
      icon: Globe
    },
    {
      title: 'Flight Delay Waiting Guarantee',
      desc: 'Delayed international flight? Our system tracks your flight number live. Driver waits at the concourse with zero delay penalty.',
      icon: Clock
    },
    {
      title: 'Personalized Meet & Greet',
      desc: 'Our courteous driver welcomes you at the arrival exit gate with a clear nameboard and assists with all heavy international baggage.',
      icon: UserCheck
    },
    {
      title: 'Safe Family & Parents Transport',
      desc: 'Booking for your parents, children, or elderly relatives returning home? We ensure 100% verified, safe, direct doorstep drops.',
      icon: Heart
    },
    {
      title: '24/7 International Customer Care',
      desc: 'Dedicated WhatsApp and phone support available 24 hours a day for pre-landing queries and real-time trip coordination.',
      icon: PhoneCall
    },
    {
      title: 'Zero Return Charge & Fixed Billing',
      desc: 'Pay strictly for one-way distance ($15/km base rate). No hidden return charges, night surcharges, or peak pricing.',
      icon: ShieldCheck
    }
  ]

  return (
    <section className="py-16 bg-dark-950 border-t border-dark-800 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>NRI & Overseas Travelers Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            International & NRI <span className="text-amber-400">Airport Transfers</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
            Hassle-free, pre-booked airport pickups for NRIs, international tourists, corporate executives, and family members landing at {airportName}.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((h, idx) => {
            const Icon = h.icon
            return (
              <div key={idx} className="bg-dark-800/90 border border-dark-700/80 hover:border-amber-500/50 rounded-2xl p-6 shadow-xl transition-all duration-300 group">
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {h.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {h.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* NRI WhatsApp Action Box */}
        <div className="mt-12 bg-gradient-to-r from-amber-500/10 via-dark-800 to-dark-900 border border-amber-500/30 rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-2">
            Traveling from Singapore, Malaysia, UAE, USA, or UK?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mb-6 max-w-2xl mx-auto">
            Contact our 24/7 International Dispatch desk on WhatsApp to confirm your pickup details before boarding your flight.
          </p>
          <a
            href="https://wa.me/919894809439?text=Hi%20SAMAYAS%2C%20I%20am%20an%20NRI%20traveler.%20I%20need%20to%20book%20an%20airport%20taxi%20pickup."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-bold text-sm transition-all shadow-xl hover:scale-105"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Pre-Book Overseas Pickup on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default NRISection
