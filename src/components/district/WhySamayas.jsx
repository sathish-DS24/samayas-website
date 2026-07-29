import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Clock, Car, CreditCard, Headphones, ThumbsUp } from 'lucide-react'

const features = [
  { icon: Shield, label: 'Verified Drivers', desc: 'All drivers are background-checked, licensed, and experienced.' },
  { icon: Clock, label: '24/7 Availability', desc: 'Book a taxi anytime — early morning, late night, or holidays.' },
  { icon: Car, label: 'No Return Charges', desc: 'Pay only for one-way. No hidden fees, no return fare.' },
  { icon: CreditCard, label: 'Transparent Pricing', desc: 'Know your fare upfront. No surge pricing, no surprises.' },
  { icon: Headphones, label: 'Dedicated Support', desc: 'Get instant help via phone or WhatsApp — before, during, and after your trip.' },
  { icon: ThumbsUp, label: '11+ Years Trusted', desc: 'Serving Tamil Nadu since 2013 with thousands of satisfied customers.' },
]

const WhySamayas = ({ districtName }) => {
  return (
    <section className="py-14 lg:py-16 bg-white" aria-labelledby="why-samayas-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 id="why-samayas-heading" className="text-2xl sm:text-3xl font-bold text-primary-900 mb-2">
            Why Choose SAMAYAS in {districtName}?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            With over eleven years of experience, SAMAYAS is your trusted partner for reliable, affordable transportation across Tamil Nadu.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => (
            <motion.div
              key={feat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-3.5 p-4 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 bg-accent-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <feat.icon className="w-5 h-5 text-accent-600" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-900 text-sm mb-0.5">{feat.label}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhySamayas
