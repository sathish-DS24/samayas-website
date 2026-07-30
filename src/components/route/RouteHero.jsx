import React from 'react'
import { Phone, MessageCircle, Clock, MapPin, ShieldCheck, CheckCircle2, Award } from 'lucide-react'
import BookingForm from '../BookingForm'

const RouteHero = ({ content }) => {
  return (
    <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-950 overflow-hidden">
      {/* Background Subtle Grid & Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Route Info & Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Route Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>One-Way Taxi Route • {content.from} to {content.to}</span>
            </div>

            {/* H1 Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {content.from} to {content.to} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">One-Way Taxi</span>
            </h1>

            {/* SEO Description */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              {content.heroTagline}
            </p>

            {/* Key Quick Stats Pills */}
            <div className="grid grid-cols-3 gap-3 py-2">
              <div className="bg-dark-800/80 border border-dark-700 p-3 rounded-xl text-center">
                <span className="block text-xs text-gray-400 font-medium uppercase">Distance</span>
                <span className="text-lg font-bold text-amber-400">{content.distanceDisplay}</span>
              </div>
              <div className="bg-dark-800/80 border border-dark-700 p-3 rounded-xl text-center">
                <span className="block text-xs text-gray-400 font-medium uppercase">Travel Time</span>
                <span className="text-lg font-bold text-amber-400">{content.durationDisplay}</span>
              </div>
              <div className="bg-dark-800/80 border border-dark-700 p-3 rounded-xl text-center">
                <span className="block text-xs text-gray-400 font-medium uppercase">Starting Fare</span>
                <span className="text-lg font-bold text-green-400">₹{content.fare?.hatchback?.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Trust Badges Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2.5 text-gray-300 text-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Doorstep pickup across {content.from}</span>
              </div>
              <div className="flex items-center space-x-2.5 text-gray-300 text-sm">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Transparent per-km pricing</span>
              </div>
              <div className="flex items-center space-x-2.5 text-gray-300 text-sm">
                <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Professional & verified drivers</span>
              </div>
              <div className="flex items-center space-x-2.5 text-gray-300 text-sm">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>24/7 service & instant booking</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="tel:+919894809439"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-dark-950 font-bold hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-amber-500/20"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now (+91-98948-09439)
              </a>
              <a
                href={`https://wa.me/919894809439?text=${encodeURIComponent(`Hi SAMAYAS, I would like to book a one-way taxi from ${content.from} to ${content.to}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all duration-300 shadow-lg shadow-emerald-600/20"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Booking
              </a>
            </div>

          </div>

          {/* Right Column: Existing Reused Booking Form */}
          <div className="lg:col-span-5">
            <div className="bg-dark-800/90 border border-dark-700/80 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-md">
              <h2 className="text-xl font-bold text-white mb-4 text-center">
                Book Your <span className="text-amber-400">{content.from} to {content.to}</span> Cab
              </h2>
              <BookingForm initialPickup={content.from} initialDrop={content.to} isSidebar={true} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default RouteHero
