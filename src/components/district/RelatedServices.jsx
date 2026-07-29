import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CarFront, CircleUserRound, Luggage, Car, Wrench } from 'lucide-react'

const serviceList = [
  {
    icon: CarFront,
    title: 'One-Way Taxi',
    desc: 'Affordable one-way rides with no return fare — across all 38 districts of Tamil Nadu.',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: CarFront,
    title: 'Round Trip Taxi',
    desc: 'Two-way taxi bookings for outstation and intercity travel with competitive rates.',
    color: 'from-sky-500 to-sky-600',
    bgColor: 'bg-sky-50',
    iconColor: 'text-sky-600',
  },
  {
    icon: CircleUserRound,
    title: 'Acting Driver',
    desc: 'Professional drivers for your own vehicle — local trips, outstation, and events.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Car,
    title: 'Tours & Travels',
    desc: 'Custom tour packages for pilgrimage, holidays, and corporate travel across Tamil Nadu.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Wrench,
    title: 'Recovery Services',
    desc: '24/7 vehicle breakdown and recovery assistance — highway rescue and towing.',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
]

const RelatedServices = () => {
  return (
    <section className="py-14 lg:py-16 bg-gradient-to-b from-gray-50 via-slate-100 to-gray-200 border-t-2 border-primary-900/10 shadow-inner" aria-labelledby="related-services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
            <h2 id="related-services-heading" className="text-2xl sm:text-3xl font-bold text-primary-900">
              Explore Our Other Services
            </h2>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-100/80 px-3 py-1 rounded-full">
              Full Tamil Nadu Coverage
            </span>
          </div>
          <p className="text-gray-600 mb-8">
            Beyond one-way taxi, SAMAYAS offers a complete range of transportation services across Tamil Nadu.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {serviceList.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:border-gray-200 transition-all group"
            >
              <div className={`w-10 h-10 ${svc.bgColor} rounded-lg flex items-center justify-center mb-3`}>
                <svc.icon className={`w-5 h-5 ${svc.iconColor}`} />
              </div>
              <h3 className="font-bold text-primary-900 text-sm mb-1">{svc.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedServices
