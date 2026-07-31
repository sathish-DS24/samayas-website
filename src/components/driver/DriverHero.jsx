import React from 'react'
import { UserCheck, ShieldCheck, Clock, Award, Star, CheckCircle, Car } from 'lucide-react'

const DriverHero = ({
  title = 'Professional Acting Driver Services',
  subtitle = '24x7 Verified Driver on Call across Tamil Nadu',
  tagline = 'Drive in the comfort of your own car while our verified driver handles traffic, parking, and long highways.',
  districtName = ''
}) => {
  return (
    <div className="relative text-center max-w-4xl mx-auto space-y-6">
      {/* Badge */}
      <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-extrabold uppercase tracking-wider">
        <UserCheck className="w-4 h-4 animate-pulse text-amber-400" />
        <span>24/7 Verified Acting Drivers</span>
      </div>

      {/* Main Title */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
        {title.includes(districtName) && districtName ? (
          <>
            Professional Acting Driver in <span className="text-amber-400">{districtName}</span>
          </>
        ) : (
          <>
            {title}
          </>
        )}
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>

      {/* Trust Highlights */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs font-bold text-gray-200">
        <div className="bg-dark-900/90 border border-dark-800 p-3 rounded-2xl flex items-center justify-center space-x-2 shadow-lg">
          <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>Police Verified</span>
        </div>
        <div className="bg-dark-900/90 border border-dark-800 p-3 rounded-2xl flex items-center justify-center space-x-2 shadow-lg">
          <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>30 Min Arrival</span>
        </div>
        <div className="bg-dark-900/90 border border-dark-800 p-3 rounded-2xl flex items-center justify-center space-x-2 shadow-lg">
          <Car className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>Manual & Auto</span>
        </div>
        <div className="bg-dark-900/90 border border-dark-800 p-3 rounded-2xl flex items-center justify-center space-x-2 shadow-lg">
          <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>10+ Yrs Exp</span>
        </div>
      </div>
    </div>
  )
}

export default DriverHero
