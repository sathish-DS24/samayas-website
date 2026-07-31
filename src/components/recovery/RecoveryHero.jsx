import React from 'react'
import { Truck, PhoneCall, MessageSquare, ShieldCheck, Clock, Navigation, MapPin } from 'lucide-react'

const RecoveryHero = ({
  title = '24×7 Vehicle Recovery & Roadside Assistance',
  subtitle = 'Fast, Reliable & Professional Vehicle Recovery Across Tamil Nadu',
  districtName = ''
}) => {
  return (
    <div className="relative text-center max-w-4xl mx-auto space-y-6">
      {/* Emergency Badge */}
      <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-black uppercase tracking-wider animate-pulse">
        <Truck className="w-4 h-4 text-red-400" />
        <span>24/7 Emergency Towing & Roadside Rescue</span>
      </div>

      {/* Main Title */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
        {districtName ? (
          <>
            Vehicle Recovery in <span className="text-amber-400">{districtName}</span>
          </>
        ) : (
          title
        )}
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>

      {/* Emergency Hotline Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <a
          href="tel:+919894809439"
          className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-sm shadow-xl shadow-red-900/30 transition-all hover:scale-105"
        >
          <PhoneCall className="w-4 h-4 animate-bounce" />
          <span>Call Emergency Hotline (+91 98948 09439)</span>
        </a>

        <a
          href="https://wa.me/919894809439?text=EMERGENCY%20RECOVERY%20NEEDED!%20Please%20send%20a%20tow%20truck%20to%20my%20location."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-xl shadow-emerald-900/30 transition-all hover:scale-105"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Share WhatsApp Live Location</span>
        </a>
      </div>

      {/* Trust Highlights */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs font-bold text-gray-200">
        <div className="bg-dark-900/90 border border-dark-800 p-3 rounded-2xl flex items-center justify-center space-x-2 shadow-lg">
          <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>15-30 Min Arrival</span>
        </div>
        <div className="bg-dark-900/90 border border-dark-800 p-3 rounded-2xl flex items-center justify-center space-x-2 shadow-lg">
          <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>Zero Damage Flatbed</span>
        </div>
        <div className="bg-dark-900/90 border border-dark-800 p-3 rounded-2xl flex items-center justify-center space-x-2 shadow-lg">
          <Navigation className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>GPS Live Dispatch</span>
        </div>
        <div className="bg-dark-900/90 border border-dark-800 p-3 rounded-2xl flex items-center justify-center space-x-2 shadow-lg">
          <Truck className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>Heavy Crane Winch</span>
        </div>
      </div>
    </div>
  )
}

export default RecoveryHero
