import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HelpCircle, ChevronDown } from 'lucide-react'

const FAQSection = ({ districtFaqs, generalFaqs }) => {
  const [openFaq, setOpenFaq] = useState(null)

  const allFaqs = [...(districtFaqs || []), ...(generalFaqs || [])]

  if (allFaqs.length === 0) return null

  return (
    <section className="py-14 lg:py-16 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-primary-600" />
            </div>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-primary-900">
              Frequently Asked Questions
            </h2>
          </div>
        </motion.div>

        <div className="space-y-3">
          {allFaqs.map((faq, index) => {
            const isOpen = openFaq === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-accent-300 shadow-md' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  className="w-full px-5 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors text-left"
                  onClick={() => {
                    if (!isOpen) {
                      import('../../utils/analytics').then(({ trackEvent }) =>
                        trackEvent('faq_expand', { question: faq.q })
                      )
                    }
                    setOpenFaq(isOpen ? null : index)
                  }}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-900 text-sm pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-accent-500' : 'text-gray-400'
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 pb-4 pt-1">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
