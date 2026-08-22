import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Flame } from 'lucide-react'

const ActivitySection = ({ activities = [] }) => {
  if (!activities || activities.length === 0) return null

  return (
    <section className="py-12 bg-dark-900 border-t border-b border-dark-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-1">
            <Flame className="w-4 h-4 text-amber-400 inline mr-1" />
            Things To Do & Experiences
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-1">Recommended Activities</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {activities.map((act, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-dark-950/80 border border-dark-800 p-4 rounded-xl flex items-center space-x-3"
            >
              <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-200">{act}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ActivitySection
