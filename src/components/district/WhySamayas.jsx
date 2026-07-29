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

const WhySamayas = ({ districtName, variant = 'light' }) => {
  const isDark = variant === 'dark'

  return (
    <section className={`py-14 lg:py-16 ${isDark ? 'bg-dark-950 border-t border-dark-800 text-white' : 'bg-white'}`} aria-labelledby="why-samayas-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 id="why-samayas-heading" className={`text-2xl sm:text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-primary-900'}`}>
            Why Choose SAMAYAS in <span className="text-amber-400">{districtName}</span>?
          </h2>
          <p className={`mb-8 max-w-2xl text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
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
              className={`flex items-start gap-3.5 p-4 rounded-xl transition-all duration-300 ${
                isDark 
                  ? 'bg-dark-800/80 border border-dark-700 hover:border-amber-500/40' 
                  : 'bg-white hover:bg-gray-50 border border-gray-100 shadow-sm'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                isDark ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-accent-500/10 text-accent-600'
              }`}>
                <feat.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`font-semibold text-sm mb-0.5 ${isDark ? 'text-white' : 'text-primary-900'}`}>{feat.label}</h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhySamayas
