import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, CheckCircle2 } from 'lucide-react'

const DistrictOverview = ({ districtName, overview, overviewHighlights }) => {
  if (!overview) return null

  // Split long paragraphs if string
  const paragraphs = typeof overview === 'string' 
    ? overview.split('\n\n').filter(Boolean)
    : []

  return (
    <section className="py-12 lg:py-16 bg-white border-b border-gray-100" aria-labelledby="district-overview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary-600" />
            </div>
            <h2 id="district-overview-heading" className="text-2xl sm:text-3xl font-bold text-primary-900">
              About {districtName}
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {/* Paragraphs column */}
            <div className="lg:col-span-2 space-y-4 relative pl-4 sm:pl-5 border-l-4 border-accent-500/40">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  {para}
                </p>
              ))}
            </div>

            {/* Structured bullet highlights for fast mobile scanning */}
            {overviewHighlights && overviewHighlights.length > 0 && (
              <div className="bg-gradient-to-br from-primary-50 to-white p-5 rounded-2xl border border-primary-100 shadow-sm space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-600" />
                  Key District Highlights
                </h3>
                <ul className="space-y-2.5">
                  {overviewHighlights.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DistrictOverview
