import React from 'react'
import { Plane, Clock, ShieldCheck, Info } from 'lucide-react'

const FlightStatus = ({ flightNumber = '', airline = '' }) => {
  return (
    <div className="bg-dark-800/90 border border-dark-700/90 rounded-2xl p-5 shadow-xl backdrop-blur-md">
      <div className="flex items-center justify-between border-b border-dark-700/80 pb-3 mb-4">
        <div className="flex items-center space-x-2 text-amber-400">
          <Plane className="w-5 h-5 animate-pulse" />
          <span className="font-bold text-sm uppercase tracking-wider">Automated Flight Delay Sync</span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
          Future API Ready
        </span>
      </div>

      <div className="space-y-3 text-xs text-gray-300">
        {flightNumber ? (
          <div className="flex items-center justify-between bg-dark-900/80 p-3 rounded-xl border border-dark-700/60">
            <div>
              <p className="text-gray-400 text-[11px]">Flight Info</p>
              <p className="font-bold text-white text-sm">{airline ? `${airline} (${flightNumber})` : flightNumber}</p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center text-green-400 font-bold bg-green-500/10 px-2 py-1 rounded-lg border border-green-500/20">
                <ShieldCheck className="w-3.5 h-3.5 mr-1" /> Auto Delay Monitored
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-start space-x-3 bg-dark-900/60 p-3 rounded-xl border border-dark-700/60 text-gray-400">
            <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <p>
              Provide your flight number during booking. Our dispatch system monitors flight arrival status in real-time and adjusts driver pickup automatically if your flight is delayed.
            </p>
          </div>
        )}

        <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
          <span className="flex items-center">
            <Clock className="w-3.5 h-3.5 text-amber-400 mr-1" />
            Complimentary 60-min airport waiting time
          </span>
          <span className="text-amber-400 font-semibold">Zero Delay Penalty</span>
        </div>
      </div>
    </div>
  )
}

export default FlightStatus
