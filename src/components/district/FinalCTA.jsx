import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'

const FinalCTA = ({ districtName }) => {
  return (
    <section className="py-14 lg:py-16" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 rounded-2xl p-8 sm:p-12 text-center text-white shadow-xl"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-400/10 rounded-full blur-3xl" aria-hidden="true" />

          <div className="relative">
            <h2 id="cta-heading" className="text-2xl sm:text-3xl font-bold mb-3">
              Ready to Book Your Taxi from {districtName}?
            </h2>
            <p className="text-gray-200 mb-8 max-w-xl mx-auto text-base sm:text-lg font-medium">
              Need a taxi from {districtName} today? Book online or call us for instant confirmation.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#booking-form"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all text-base"
              >
                Book Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+919894809439"
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <a
                href="https://wa.me/919894809439"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-green-400/30 text-green-300 font-semibold rounded-full hover:bg-green-500/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA
