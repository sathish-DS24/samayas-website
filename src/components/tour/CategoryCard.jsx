import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Mountain, Building2, Clock, Users, Heart, Compass, Sun, Landmark } from 'lucide-react'

const iconMap = {
  Mountain,
  Building2,
  Clock,
  Users,
  Heart,
  Compass,
  Sun,
  Landmark
}

const CategoryCard = ({ category }) => {
  if (!category) return null

  const IconComponent = iconMap[category.iconName] || Mountain

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-dark-900 border border-dark-800 hover:border-amber-500/40 rounded-2xl p-6 shadow-xl transition group flex flex-col justify-between"
    >
      <div className="space-y-3">
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-dark-950 transition-colors">
          <IconComponent className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition">
          {category.title}
        </h3>

        <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
          {category.subtitle || category.description}
        </p>

        {category.highlights && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {category.highlights.slice(0, 3).map((hl, i) => (
              <span key={i} className="text-[10px] px-2.5 py-0.5 rounded bg-dark-950 text-gray-300 border border-dark-800">
                ✓ {hl}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-dark-800">
        <Link
          to={`/tour-packages/${category.slug}`}
          className="inline-flex items-center space-x-2 text-xs font-extrabold text-amber-400 hover:text-amber-300 group/link"
        >
          <span>Explore Category</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}

export default CategoryCard
