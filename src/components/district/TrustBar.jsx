import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Clock, Car, Phone, Award, Star } from 'lucide-react'

const trustItems = [
  { icon: Shield, label: 'Verified Drivers', sublabel: 'Background checked' },
  { icon: Clock, label: '24/7 Available', sublabel: 'Day or night' },
  { icon: Car, label: 'No Return Fare', sublabel: 'Pay one-way only' },
  { icon: Phone, label: 'Instant Confirm', sublabel: 'Call or WhatsApp' },
  { icon: Award, label: '11+ Years', sublabel: 'Trusted since 2013' },
  { icon: Star, label: '4.8★ Rating', sublabel: 'On Google' },
]

const TrustBar = () => {
  return (
    <section className="py-5 bg-gradient-to-r from-primary-50 via-white to-primary-50 border-b border-gray-100" aria-label="Trust signals">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-white hover:shadow-sm transition-all"
            >
              <div className="w-9 h-9 bg-accent-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-4.5 h-4.5 text-accent-600" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-primary-900 leading-tight truncate">{item.label}</p>
                <p className="text-xs text-gray-500 leading-tight">{item.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
