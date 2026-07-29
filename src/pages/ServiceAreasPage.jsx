import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, MapPin, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { districts, getDistrictUrl } from '../data/districts'
import { usePageSeo } from '../utils/seo'

const ServiceAreasPage = () => {
  const [query, setQuery] = useState('')

  usePageSeo({
    title: 'One-Way Taxi All Districts Tamil Nadu | SAMAYAS Service Areas',
    description:
      'SAMAYAS one-way taxi & acting driver in all 38 Tamil Nadu districts. Find your district and book online.',
    path: '/service-areas',
  })

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return districts
    return districts.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.slug.includes(q) ||
        (d.alias && d.alias.toLowerCase().includes(q))
    )
  }, [query])

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Navbar variant="inner" />

      <section className="pt-28 pb-12 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              One-Way Taxi Across Tamil Nadu
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              SAMAYAS serves all 38 districts of Tamil Nadu. Select your district to view
              one-way taxi routes, services, and book your ride.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-md mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="search"
            placeholder="Search district (e.g. Chennai, Trichy, Coimbatore)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
          />
        </div>

        <p className="text-gray-500 text-sm mb-6">
          {filtered.length} of {districts.length} districts
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((district, i) => (
            <motion.div
              key={district.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.02, 0.5) }}
            >
              <Link
                to={getDistrictUrl(district.slug)}
                className="group flex items-center justify-between p-4 bg-white rounded-xl shadow-md border border-gray-100 hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                    <MapPin className="w-4 h-4 text-primary-600" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-semibold text-primary-900 block truncate">
                      {district.name}
                    </span>
                    {district.alias && (
                      <span className="text-xs text-gray-500">{district.alias}</span>
                    )}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-accent-500 flex-shrink-0 transition-colors" />
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12">No district found for &ldquo;{query}&rdquo;</p>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800 font-medium"
          >
            ← Back to homepage
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ServiceAreasPage
