import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Check } from 'lucide-react'

const ItineraryTimeline = ({ itinerary = [] }) => {
  if (!itinerary || itinerary.length === 0) return null

  return (
    <section className="py-12 bg-dark-950 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-1">
            <Calendar className="w-4 h-4 text-amber-400 mr-1" />
            Day-by-Day Travel Schedule
          </span>
          <h2 className="text-2xl sm:text-4xl font-black mt-1">Tour Itinerary</h2>
        </div>

        <div className="relative border-l-2 border-amber-500/40 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
          {itinerary.map((dayItem, idx) => (
            <motion.div
              key={dayItem.day}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-dark-900 border border-dark-800 rounded-2xl p-6 shadow-xl space-y-3"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 font-black text-xs flex items-center justify-center shadow-lg border-2 border-dark-950">
                D{dayItem.day}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-dark-800 pb-3">
                <h3 className="text-lg font-black text-white">{dayItem.title}</h3>
                {dayItem.overnightStay && (
                  <span className="text-xs px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full font-semibold">
                    Stay: {dayItem.overnightStay}
                  </span>
                )}
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                {dayItem.activities.map((act, aIdx) => (
                  <li key={aIdx} className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ItineraryTimeline
