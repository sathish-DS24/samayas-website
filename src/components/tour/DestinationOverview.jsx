import React from 'react'
import { motion } from 'framer-motion'
import { Info, History, Sun, CloudRain, Snowflake } from 'lucide-react'

const DestinationOverview = ({ overview, history, bestTime, weather }) => {
  return (
    <section className="py-12 bg-dark-900 border-b border-dark-800 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Overview & History (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-dark-950/70 border border-dark-700/80 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center space-x-2 text-amber-400 font-bold mb-3">
                <Info className="w-5 h-5" />
                <h2 className="text-xl font-extrabold text-white">Destination Overview</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {overview}
              </p>
            </motion.div>

            {history && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-dark-950/70 border border-dark-700/80 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-2 text-amber-400 font-bold mb-3">
                  <History className="w-5 h-5" />
                  <h3 className="text-lg font-extrabold text-white">Historical Heritage</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {history}
                </p>
              </motion.div>
            )}
          </div>

          {/* Weather & Best Time (1 col) */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-dark-950 to-dark-900 border border-amber-500/20 rounded-2xl p-6 shadow-lg space-y-4"
            >
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <Sun className="w-5 h-5 text-amber-400" />
                <span>Best Time to Visit</span>
              </h3>
              <p className="text-amber-300 font-extrabold text-base bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 text-center">
                {bestTime}
              </p>

              {weather && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Seasonal Climate</h4>
                  <div className="space-y-2 text-xs">
                    {weather.summer && (
                      <div className="flex justify-between p-2.5 bg-dark-950 rounded-xl border border-dark-800">
                        <span className="text-gray-400 flex items-center"><Sun className="w-3.5 h-3.5 text-amber-400 mr-1.5" /> Summer</span>
                        <span className="font-semibold text-white">{weather.summer}</span>
                      </div>
                    )}
                    {weather.winter && (
                      <div className="flex justify-between p-2.5 bg-dark-950 rounded-xl border border-dark-800">
                        <span className="text-gray-400 flex items-center"><Snowflake className="w-3.5 h-3.5 text-blue-400 mr-1.5" /> Winter</span>
                        <span className="font-semibold text-white">{weather.winter}</span>
                      </div>
                    )}
                    {weather.monsoon && (
                      <div className="flex justify-between p-2.5 bg-dark-950 rounded-xl border border-dark-800">
                        <span className="text-gray-400 flex items-center"><CloudRain className="w-3.5 h-3.5 text-emerald-400 mr-1.5" /> Monsoon</span>
                        <span className="font-semibold text-white">{weather.monsoon}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default DestinationOverview
