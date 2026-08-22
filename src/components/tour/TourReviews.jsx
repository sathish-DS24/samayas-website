import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, UserCheck } from 'lucide-react'

const TourReviews = ({ reviews = [] }) => {
  if (!reviews || reviews.length === 0) return null

  return (
    <section className="py-12 bg-dark-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-1">
            <UserCheck className="w-4 h-4 text-amber-400 mr-1" />
            Verified Customer Feedback
          </span>
          <h2 className="text-2xl sm:text-4xl font-black mt-1">What Travellers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-dark-900 border border-dark-800 rounded-2xl p-6 shadow-xl space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1 text-amber-400">
                    {[...Array(rev.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-amber-500/20" />
                </div>

                <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
                  "{rev.comment || rev.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-dark-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.author || rev.name}</h4>
                  <span className="text-[11px] text-gray-400">{rev.city || rev.location || 'Traveller'}</span>
                </div>
                {rev.packageUsed && (
                  <span className="text-[10px] px-2.5 py-1 bg-amber-500/10 text-amber-300 rounded-lg border border-amber-500/20">
                    {rev.packageUsed}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TourReviews
