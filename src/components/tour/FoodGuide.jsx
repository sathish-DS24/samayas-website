import React from 'react'
import { motion } from 'framer-motion'
import { Utensils } from 'lucide-react'

const FoodGuide = ({ foods = [] }) => {
  if (!foods || foods.length === 0) return null

  return (
    <section className="py-10 bg-dark-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-amber-400 font-bold mb-6">
          <Utensils className="w-5 h-5" />
          <h2 className="text-xl font-extrabold text-white">Local Food & Cuisine Guide</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {foods.map((food, idx) => (
            <motion.div
              key={food.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-dark-900 border border-dark-800 rounded-xl p-4 flex items-start space-x-3"
            >
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 font-bold text-xs uppercase">
                {food.type || 'Delicacy'}
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{food.name}</h3>
                <p className="text-xs text-gray-300 mt-1">{food.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FoodGuide
