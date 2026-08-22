import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const TourFAQ = ({ faqList = [] }) => {
  const [openIdx, setOpenIdx] = useState(null)

  if (!faqList || faqList.length === 0) return null

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section className="py-12 bg-dark-900 border-t border-dark-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-1">
            <HelpCircle className="w-4 h-4 text-amber-400 mr-1" />
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-4xl font-black mt-1">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-dark-950 border border-dark-800 rounded-2xl overflow-hidden shadow-lg"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left p-5 flex items-center justify-between font-bold text-sm sm:text-base text-white hover:text-amber-400 transition cursor-pointer"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-400 transition-transform duration-200 ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-5 pb-5 pt-0 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-dark-900"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TourFAQ
