import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Plane, Train, Navigation } from 'lucide-react'

const TravelTips = ({ tips = [], connectivity }) => {
  return (
    <section className="py-12 bg-dark-900 border-t border-b border-dark-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Connectivity info */}
        {connectivity && (
          <div>
            <h2 className="text-xl font-extrabold text-white mb-4 flex items-center space-x-2">
              <Navigation className="w-5 h-5 text-amber-400" />
              <span>How To Reach & Connectivity</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-dark-950 border border-dark-800 p-4 rounded-xl space-y-1">
                <span className="text-xs text-amber-400 font-bold flex items-center"><Plane className="w-3.5 h-3.5 mr-1" /> Nearest Airport</span>
                <p className="text-xs text-gray-200 font-medium">{connectivity.nearestAirport}</p>
              </div>
              <div className="bg-dark-950 border border-dark-800 p-4 rounded-xl space-y-1">
                <span className="text-xs text-amber-400 font-bold flex items-center"><Train className="w-3.5 h-3.5 mr-1" /> Nearest Railway</span>
                <p className="text-xs text-gray-200 font-medium">{connectivity.nearestRailway}</p>
              </div>
              <div className="bg-dark-950 border border-dark-800 p-4 rounded-xl space-y-1">
                <span className="text-xs text-amber-400 font-bold flex items-center"><Navigation className="w-3.5 h-3.5 mr-1" /> Road Connectivity</span>
                <p className="text-xs text-gray-200 font-medium">{connectivity.roadConnectivity}</p>
              </div>
            </div>
          </div>
        )}

        {/* Travel Tips */}
        {tips && tips.length > 0 && (
          <div>
            <h2 className="text-xl font-extrabold text-white mb-4 flex items-center space-x-2">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              <span>Essential Travel Tips</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {tips.map((tip, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-3.5 bg-dark-950/60 border border-dark-800 rounded-xl text-xs sm:text-sm text-gray-300 flex items-start space-x-2"
                >
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{tip}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default TravelTips
