import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Truck, Search, MapPin, PhoneCall, MessageSquare, ChevronRight, ShieldCheck, Clock, Navigation } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecoveryHero from '../components/recovery/RecoveryHero'
import LiveEmergencyAssist from '../components/recovery/LiveEmergencyAssist'
import RecoveryServiceGrid from '../components/recovery/RecoveryServiceGrid'
import SupportedVehicles from '../components/recovery/SupportedVehicles'
import RecoveryFleet from '../components/recovery/RecoveryFleet'
import RecoveryProcess from '../components/recovery/RecoveryProcess'
import CustomerReviews from '../components/district/CustomerReviews'
import FAQSection from '../components/district/FAQSection'
import FinalCTA from '../components/district/FinalCTA'
import { recoveryMasterDataset } from '../data/recoveryMaster'
import { recoveryServicesDataset } from '../data/recoveryServicesMaster'
import { usePageSeo, SITE_URL } from '../utils/seo'

const VehicleRecoveryDirectoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  // Filter districts dynamically
  const filteredDistricts = recoveryMasterDataset.filter((item) =>
    item.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.slug.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const pageTitle = '24/7 Vehicle Recovery & Roadside Assistance Tamil Nadu | SAMAYAS'
  const pageDescription = 'Emergency 24/7 car recovery, flatbed towing, bike towing & breakdown assistance across 38 districts of Tamil Nadu. 15-30 min fast dispatch. Call hotline now.'

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'EmergencyService',
      name: 'SAMAYAS 24/7 Vehicle Recovery & Towing Network',
      description: pageDescription,
      url: `${SITE_URL}/vehicle-recovery`,
      telephone: '+91-98948-09439',
      areaServed: {
        '@type': 'State',
        name: 'Tamil Nadu'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Tamil Nadu Vehicle Recovery Directory',
      itemListElement: recoveryMasterDataset.map((district, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: `Vehicle Recovery in ${district.district}`,
        url: `${SITE_URL}/vehicle-recovery/${district.slug}`
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Vehicle Recovery', item: `${SITE_URL}/vehicle-recovery` }
      ]
    }
  ]

  usePageSeo({
    title: pageTitle,
    description: pageDescription,
    path: '/vehicle-recovery',
    jsonLd
  })

  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans selection:bg-red-500 selection:text-white">
      <Navbar />

      <main className="relative pt-24 sm:pt-28 pb-16">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-500/10 blur-3xl rounded-full pointer-events-none" />

        {/* Master Directory Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
          <RecoveryHero
            title="24×7 Vehicle Recovery & Roadside Assistance"
            subtitle="Fast, Reliable & Professional Flatbed Towing Across 38 Districts of Tamil Nadu"
          />

          {/* Search Box */}
          <div className="max-w-xl mx-auto relative mt-8">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search your breakdown location (e.g. Chennai, Trichy, Madurai, Highway)..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-dark-800/90 border border-dark-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 shadow-2xl transition-all text-sm font-semibold"
            />
            <Search className="w-5 h-5 text-red-400 absolute left-4 top-4" />
          </div>
        </div>

        {/* Phase 5.4 Live Assistance Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
          <LiveEmergencyAssist />
        </section>

        {/* 11 Emergency Services Grid */}
        <RecoveryServiceGrid districtName="Tamil Nadu" />

        {/* 38 District Recovery Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
          <div className="flex items-center justify-between mb-8 border-b border-dark-800 pb-4">
            <div>
              <h2 className="text-2xl font-extrabold text-white">
                Select Your Breakdown District <span className="text-amber-400">({filteredDistricts.length} Districts)</span>
              </h2>
              <p className="text-xs text-gray-400 mt-1">Instant flatbed towing and roadside assistance across city roads and National Highways.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredDistricts.map((d) => (
              <Link
                key={d.id}
                to={`/vehicle-recovery/${d.slug}`}
                className="bg-dark-900/90 border border-dark-800 hover:border-red-500/50 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-1.5 text-red-400 text-[11px] font-bold mb-1">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{d.district}</span>
                  </div>
                  <h3 className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                    Recovery in {d.district}
                  </h3>
                </div>
                <div className="mt-3 pt-2 border-t border-dark-800 text-[10px] font-semibold text-gray-400 group-hover:text-red-400 flex items-center justify-between">
                  <span>Call Recovery</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Supported Vehicle Types */}
        <SupportedVehicles />

        {/* Towing Fleet */}
        <RecoveryFleet />

        {/* Emergency Recovery Process */}
        <RecoveryProcess />

        {/* Customer Reviews */}
        <CustomerReviews
          reviews={[
            {
              name: 'Gopalakrishnan N.',
              rating: 5,
              text: 'Flatbed tow truck arrived within 20 minutes near Trichy toll plaza. Car transported safely without a scratch. Highly recommended emergency team!',
              route: 'Trichy Highway'
            },
            {
              name: 'Selvakumar M.',
              rating: 5,
              text: 'My SUV suffered an alternator breakdown on GST Road at night. SAMAYAS dispatched a flatbed and mechanic quickly. Superb 24/7 service.',
              route: 'Chennai - Villupuram Highway'
            }
          ]}
          districtName="Vehicle Recovery Network"
          variant="dark"
        />

        {/* FAQs */}
        <FAQSection
          faqs={[
            {
              q: 'How fast will a tow truck arrive at my breakdown location?',
              a: 'In major cities, average dispatch time is 15 to 30 minutes. On National Highways, our response time is 30 to 45 minutes.'
            },
            {
              q: 'Why should I choose hydraulic flatbed towing over normal wheel-lift towing?',
              a: 'Flatbed towing carries your entire vehicle off the ground, eliminating tire, suspension, and gearbox wear. It is essential for automatic, luxury, and EV cars.'
            },
            {
              q: 'How can I share my exact location when broken down on a highway?',
              a: 'Tap our "Share WhatsApp Live Location" button or use the auto-detect GPS button on this page to send exact coordinates to our recovery team.'
            }
          ]}
          districtName="Vehicle Recovery Network"
          variant="dark"
        />

        {/* Final CTA */}
        <FinalCTA districtName="Tamil Nadu Vehicle Recovery Network" />
      </main>

      <Footer />
    </div>
  )
}

export default VehicleRecoveryDirectoryPage
