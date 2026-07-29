import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const CustomerReviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) return null

  return (
    <section className="py-14 lg:py-16 bg-gray-50" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            </div>
            <h2 id="reviews-heading" className="text-2xl sm:text-3xl font-bold text-primary-900">
              Customer Reviews
            </h2>
          </div>
          <p className="text-gray-600 mb-8 ml-[52px]">
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
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col hover:shadow-md transition-shadow"
            >
              {/* Quote icon */}
              <Quote className="w-6 h-6 text-accent-500/30 mb-2 -scale-x-100" />

              {/* Review text */}
              <p className="text-sm text-gray-700 leading-relaxed flex-1 mb-4">
                "{review.text}"
              </p>

              {/* Route badge */}
              {review.route && (
                <span className="inline-block self-start text-[10px] font-medium bg-primary-50 text-primary-700 px-2 py-0.5 rounded-full mb-3">
                  {review.route}
                </span>
              )}

              {/* Reviewer info */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-sm font-bold text-primary-700">
                    {review.name.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-gray-800">{review.name}</span>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`w-3.5 h-3.5 ${
                        j < review.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-200'
                      }`}
                    />
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
