import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, MapPin, ArrowRight, Car, Compass, ShieldCheck, Filter, Plane, Mountain } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { routesList, getRouteUrl } from '../data/routes'
import { routeContent } from '../data/routeContent'
import { usePageSeo, SITE_URL } from '../utils/seo'

const RouteIndexPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  // Build merged routes array sorted by popularity
  const allRoutes = routesList
    .map((r) => {
      const detail = routeContent[r.slug] || {}
      return {
        ...r,
        ...detail,
        url: getRouteUrl(r.slug),
      }
    })
    .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))

  // Filter logic
  const filteredRoutes = allRoutes.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.to.toLowerCase().includes(searchQuery.toLowerCase())

    if (!matchesSearch) return false

    if (selectedFilter === 'all') return true
    return r.category === selectedFilter
  })

  // SEO Setup
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'SAMAYAS One-Way Taxi Routes Directory',
      description: 'Directory of all intercity one-way taxi routes across Tamil Nadu and South India.',
      itemListElement: allRoutes.map((r, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: r.name,
        url: `${SITE_URL}${r.url}`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'One-Way Taxi Routes', item: `${SITE_URL}/one-way-taxi` },
      ],
    },
  ]

  usePageSeo({
    title: 'One-Way Taxi Route Directory | Book Intercity Cabs | SAMAYAS',
    description: 'Explore all one-way taxi routes across Tamil Nadu & South India. Hatchbacks ₹10/km, Sedans ₹12/km. Transparent per-km rates with zero return charges. Book 24/7.',
    path: '/one-way-taxi',
    jsonLd,
  })

  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans selection:bg-amber-500 selection:text-dark-950">
      <Navbar />

      <main className="pt-24 pb-16">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-dark-900 via-dark-850 to-dark-950 py-12 border-b border-dark-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
              <Compass className="w-4 h-4" />
              <span>SAMAYAS Intercity Route Directory</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              One-Way Taxi <span className="text-amber-400">Routes Directory</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Find high-demand intercity one-way routes across Tamil Nadu and neighboring states. Pay strictly for one direction with zero return fare charges.
            </p>

            {/* Interactive Search Bar */}
            <div className="max-w-xl mx-auto relative mb-6">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search origin or destination (e.g. Trichy, Chennai, Ooty, Airport)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-dark-800/90 border border-dark-700 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-all shadow-xl text-sm"
              />
            </div>

            {/* Quick Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
              {[
                { id: 'all', label: 'All Routes' },
                { id: 'City', label: 'Major Cities' },
                { id: 'Airport', label: 'Airport Routes' },
                { id: 'Tourist', label: 'Tourist Routes' },
                { id: 'Temple', label: 'Temple & Pilgrimage' },
                { id: 'Interstate', label: 'Interstate Routes' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 border ${
                    selectedFilter === tab.id
                      ? 'bg-amber-500 text-dark-950 border-amber-500 shadow-lg shadow-amber-500/20'
                      : 'bg-dark-800/80 text-gray-300 border-dark-700 hover:border-amber-500/40'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* Route Cards Directory Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span>Available High-Demand Routes ({filteredRoutes.length})</span>
            </h2>
            <span className="text-xs text-gray-400">Zero return fare guaranteed</span>
          </div>

          {filteredRoutes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRoutes.map((r, idx) => (
                <Link
                  key={idx}
                  to={r.url}
                  className="bg-dark-800/80 border border-dark-700 hover:border-amber-500/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold">
                        {r.distanceDisplay || r.distanceKm ? `${r.distanceKm} km` : 'Outstation'}
                      </span>
                      <span className="text-xs font-bold text-green-400">
                        {r.fare?.hatchback ? `From ₹${r.fare.hatchback.toLocaleString('en-IN')}` : 'Best Fare'}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                      {r.name}
                    </h3>

                    <p className="text-xs text-gray-400 line-clamp-2 mb-4">
                      {r.heroTagline || `Direct one-way cab service from ${r.from} to ${r.to}.`}
                    </p>

                    {/* Popular For Tags */}
                    {r.popularFor && r.popularFor.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {r.popularFor.map((tag, tIdx) => (
                          <span key={tIdx} className="px-2 py-0.5 rounded bg-dark-900 text-[10px] text-gray-300 border border-dark-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="border-t border-dark-700/60 pt-3 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                    <span>View Full Route Fares & Map</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-dark-800/40 border border-dark-700 rounded-2xl p-8">
              <Car className="w-12 h-12 text-gray-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-1">No matching routes found</h3>
              <p className="text-xs text-gray-400 max-w-md mx-auto mb-4">
                We provide custom one-way taxi booking to any destination across Tamil Nadu and South India!
              </p>
              <a
                href="tel:+919894809439"
                className="inline-flex items-center px-6 py-2.5 rounded-xl bg-amber-500 text-dark-950 font-bold text-xs"
              >
                Call Support (+91-98948-09439)
              </a>
            </div>
          )}

        </section>

      </main>

      <Footer />
    </div>
  )
}

export default RouteIndexPage
