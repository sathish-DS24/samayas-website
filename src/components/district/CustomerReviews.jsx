import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const CustomerReviews = ({ reviews, variant = 'light' }) => {
  if (!reviews || reviews.length === 0) return null
  const isDark = variant === 'dark'

  return (
    <section className={`py-14 lg:py-16 ${isDark ? 'bg-dark-950 border-t border-dark-800 text-white' : 'bg-gray-50'}`} aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              isDark ? 'bg-amber-500/10 border border-amber-500/20 text-amber-400' : 'bg-yellow-100 text-yellow-500'
            }`}>
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h2 id="reviews-heading" className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-primary-900'}`}>
              Customer Reviews
            </h2>
          </div>
          <p className={`mb-8 ml-[52px] text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            What our customers say about their experience with SAMAYAS.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-xl p-5 flex flex-col transition-all duration-300 ${
                isDark
                  ? 'bg-dark-800/80 border border-dark-700 hover:border-amber-500/40'
                  : 'bg-white border border-gray-100 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Quote icon */}
              <Quote className={`w-6 h-6 mb-2 -scale-x-100 ${isDark ? 'text-amber-500/40' : 'text-accent-500/30'}`} />

              {/* Review text */}
              <p className={`text-sm leading-relaxed flex-1 mb-4 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                "{review.text}"
              </p>

              {/* Route badge */}
              {review.route && (
                <span className={`inline-block self-start text-[10px] font-medium px-2 py-0.5 rounded-full mb-3 ${
                  isDark ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-primary-50 text-primary-700'
                }`}>
                  {review.route}
                </span>
              )}

              {/* Reviewer info */}
              <div className={`flex items-center justify-between pt-3 border-t ${isDark ? 'border-dark-700/60' : 'border-gray-50'}`}>
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    isDark ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-primary-100 text-primary-700'
                  }`}>
                    {review.name.charAt(0)}
                  </div>
                  <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>{review.name}</span>
                </div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews
