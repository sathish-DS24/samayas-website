import React from 'react'
import { Sun, CloudRain, Snowflake } from 'lucide-react'

const WeatherCard = ({ weather }) => {
  if (!weather) return null

  return (
    <div className="bg-dark-900 border border-dark-800 rounded-2xl p-5 shadow-lg space-y-4">
      <h3 className="text-base font-bold text-white flex items-center space-x-2">
        <Sun className="w-5 h-5 text-amber-400" />
        <span>Weather & Climate Overview</span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        {weather.summer && (
          <div className="p-3 bg-dark-950 rounded-xl border border-dark-800 space-y-1">
            <span className="text-gray-400 font-semibold flex items-center"><Sun className="w-3.5 h-3.5 text-amber-400 mr-1" /> Summer</span>
            <p className="text-white font-extrabold">{weather.summer}</p>
          </div>
        )}
        {weather.winter && (
          <div className="p-3 bg-dark-950 rounded-xl border border-dark-800 space-y-1">
            <span className="text-gray-400 font-semibold flex items-center"><Snowflake className="w-3.5 h-3.5 text-blue-400 mr-1" /> Winter</span>
            <p className="text-white font-extrabold">{weather.winter}</p>
          </div>
        )}
        {weather.monsoon && (
          <div className="p-3 bg-dark-950 rounded-xl border border-dark-800 space-y-1">
            <span className="text-gray-400 font-semibold flex items-center"><CloudRain className="w-3.5 h-3.5 text-emerald-400 mr-1" /> Monsoon</span>
            <p className="text-white font-extrabold">{weather.monsoon}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default WeatherCard
