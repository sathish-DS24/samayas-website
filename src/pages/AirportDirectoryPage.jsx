import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Plane, Search, MapPin, Building2, ChevronRight, CheckCircle, ShieldCheck, Globe, Star } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQSection from '../components/district/FAQSection'
import FinalCTA from '../components/district/FinalCTA'
import { airportsMasterDataset } from '../data/airportsMaster'
import { usePageSeo, SITE_URL } from '../utils/seo'

const AirportDirectoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedState, setSelectedState] = useState('All')
  const [selectedType, setSelectedType] = useState('All')

  // Filter airports dynamically
  const filteredAirports = airportsMasterDataset.filter((airport) => {
    const matchesSearch =
      airport.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airport.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airport.iata.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airport.state.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesState = selectedState === 'All' || airport.state === selectedState
    const matchesType = selectedType === 'All' || airport.type === selectedType

    return matchesSearch && matchesState && matchesType
  })

  const featuredAirports = airportsMasterDataset.filter((a) => a.featured)

  // SEO & Schemas
  const pageTitle = 'South India Airport Taxi Directory | 24/7 Airport Cabs | SAMAYAS'
  const pageDescription = 'Book 24/7 doorstep airport taxi transfers across South India (Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, Telangana). Live flight tracking & zero return charges.'

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'South India Airport Taxi Directory',
      description: pageDescription,
      itemListElement: airportsMasterDataset.map((airport, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: airport.name,
        url: `${SITE_URL}/airport-taxi/${airport.slug}`
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Airport Taxi', item: `${SITE_URL}/airport-taxi` }
      ]
    }
  ]

  usePageSeo({
    title: pageTitle,
    description: pageDescription,
    path: '/airport-taxi',
    jsonLd
  })

  const states = ['All', 'Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana']
  const types = ['All', 'International', 'Domestic']

  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans selection:bg-amber-500 selection:text-dark-950">
      <Navbar />

      <main className="relative pt-24 sm:pt-28 pb-16">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

        {/* Directory Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Plane className="w-4 h-4 animate-pulse" />
            <span>South India Airport Connectivity Network</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Airport Taxi <span className="text-amber-400">Directory</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            Book 24/7 doorstep airport transfers across all 14 major international & domestic airports in South India. Live flight delay tracking, zero return fees, and Meet & Greet assistance.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Airport Name, City, or IATA Code (e.g. MAA, TRZ, CJB, Ooty)..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-dark-800/90 border border-dark-700 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 shadow-2xl transition-all text-sm"
            />
            <Search className="w-5 h-5 text-amber-400 absolute left-4 top-4" />
          </div>
        </div>

        {/* Filter Controls */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-dark-900/90 border border-dark-800 p-4 rounded-2xl">
            {/* State Filter */}
            <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              <span className="text-xs font-bold text-gray-400 mr-1 uppercase tracking-wider flex-shrink-0">State:</span>
              {states.map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedState(st)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex-shrink-0 ${
                    selectedState === st
                      ? 'bg-amber-400 text-black shadow-md'
                      : 'bg-dark-800 text-gray-300 border border-dark-700 hover:border-amber-500/40'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            {/* Type Filter */}
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-gray-400 mr-1 uppercase tracking-wider">Type:</span>
              {types.map((tp) => (
                <button
                  key={tp}
                  onClick={() => setSelectedType(tp)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedType === tp
                      ? 'bg-amber-400 text-black shadow-md'
                      : 'bg-dark-800 text-gray-300 border border-dark-700 hover:border-amber-500/40'
                  }`}
                >
                  {tp}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Airports Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
          {filteredAirports.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAirports.map((airport) => (
                <Link
                  key={airport.id}
                  to={`/airport-taxi/${airport.slug}`}
                  className="bg-dark-900/90 border border-dark-800 hover:border-amber-500/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-extrabold tracking-wider">
                        {airport.iata} • {airport.type}
                      </span>
                      <span className="text-xs font-semibold text-gray-400 flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-amber-400" />
                        {airport.city}, {airport.state}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                      {airport.name}
                    </h3>

                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
                      {airport.description}
                    </p>

                    {/* Popular Routes Badges */}
                    <div className="space-y-1.5 mb-4">
                      <p className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Popular Airport Transfers:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {airport.popularRoutes.slice(0, 3).map((r, rIdx) => (
                          <span key={rIdx} className="px-2 py-0.5 rounded bg-dark-800 text-[10px] text-gray-300 border border-dark-700">
                            → {r.destination} ({r.distance})
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-dark-800 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                    <span>Explore Airport Hub & Fares</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-dark-900/50 rounded-2xl border border-dark-800">
              <Building2 className="w-12 h-12 text-gray-500 mx-auto mb-3" />
              <p className="text-lg font-bold text-white">No Airports Found</p>
              <p className="text-xs text-gray-400 mt-1">Try adjusting your search query or filter selection.</p>
            </div>
          )}
        </div>

        {/* Directory FAQ */}
        <FAQSection
          faqs={[
            {
              q: 'How does SAMAYAS track delayed flight arrivals?',
              a: 'When booking your airport cab, provide your flight number. Our automated tracking system monitors live flight status and updates driver pickup time automatically with zero delay penalties.'
            },
            {
              q: 'What is the fare calculation method for airport taxis?',
              a: 'All one-way airport taxi fares strictly use our ₹15/km base rate with a standard 130 km minimum calculation limit. Tolls and airport parking are at actuals.'
            },
            {
              q: 'Can NRIs pre-book cabs for relatives landing in South India?',
              a: 'Yes, NRIs can book online via WhatsApp or our booking form. Instant driver details and live trip tracking link are sent to you for safe family transfer.'
            }
          ]}
          districtName="Airport Taxi Network"
          variant="dark"
        />

        {/* Final CTA */}
        <FinalCTA districtName="South India Airport Network" />
      </main>

      <Footer />
    </div>
  )
}

export default AirportDirectoryPage
