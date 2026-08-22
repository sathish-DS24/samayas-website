import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Tag } from 'lucide-react'

const ShoppingGuide = ({ shopping = [] }) => {
  if (!shopping || shopping.length === 0) return null

  return (
    <section className="py-10 bg-dark-900 border-t border-dark-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-amber-400 font-bold mb-4">
          <ShoppingBag className="w-5 h-5" />
          <h2 className="text-xl font-extrabold text-white">Shopping & Souvenir Specialties</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {shopping.map((item, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="px-4 py-2 bg-dark-950 border border-dark-700 rounded-full text-xs font-semibold text-amber-300 flex items-center space-x-1.5"
            >
              <Tag className="w-3.5 h-3.5 text-amber-400" />
              <span>{item}</span>
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShoppingGuide
