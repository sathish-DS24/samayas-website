import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Building2, ArrowRight } from 'lucide-react'

const IndustriesSection = ({ districtName, industries, businessInfo }) => {
  if ((!industries || industries.length === 0) && !businessInfo) return null

  return (
    <section className="py-14 lg:py-16" aria-labelledby="industries-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 id="industries-heading" className="text-2xl sm:text-3xl font-bold text-primary-900">
              Business Travel from {districtName}
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6 lg:gap-8 mt-6">
          {/* Business info text */}
          {businessInfo && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <p className="text-gray-600 leading-relaxed text-base">{businessInfo}</p>
              <a
                href="#booking-form"
                className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary-600 hover:text-accent-600 transition-colors"
              >
                Book a Corporate Trip
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          )}

          {/* Industries list */}
          {industries && industries.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={businessInfo ? 'md:col-span-2' : 'md:col-span-5'}
            >
              <div className="bg-indigo-50/50 rounded-xl p-5 border border-indigo-100">
                <h3 className="text-sm font-bold text-primary-900 mb-3 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-indigo-500" />
                  Major Industries &amp; Institutions
                </h3>
                <ul className="space-y-2">
                  {industries.map((industry) => (
                    <li
                      key={industry}
                      className="text-sm text-gray-700 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-1.5 flex-shrink-0" />
                      {industry}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
