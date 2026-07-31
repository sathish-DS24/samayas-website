import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserCheck, Search, MapPin, ShieldCheck, ChevronRight, CheckCircle, Car } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DriverHero from '../components/driver/DriverHero'
import DriverOverview from '../components/driver/DriverOverview'
import DriverCategories from '../components/driver/DriverCategories'
import DriverPricing from '../components/driver/DriverPricing'
import DriverVerification from '../components/driver/DriverVerification'
import HowBookingWorks from '../components/driver/HowBookingWorks'
import CrossServiceBanner from '../components/driver/CrossServiceBanner'
import CustomerReviews from '../components/district/CustomerReviews'
import FAQSection from '../components/district/FAQSection'
import FinalCTA from '../components/district/FinalCTA'
import { actingDriversDataset } from '../data/actingDriversMaster'
import { driverServicesDataset } from '../data/driverServicesMaster'
import { usePageSeo, SITE_URL } from '../utils/seo'

const ActingDriverDirectoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  // Filter districts dynamically
  const filteredDistricts = actingDriversDataset.filter((item) =>
    item.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.slug.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const pageTitle = 'Acting Driver Hire in Tamil Nadu | 24/7 Driver on Call | SAMAYAS'
  const pageDescription = 'Hire professional, background-verified acting drivers across all 38 districts of Tamil Nadu for your own car. Hourly rates from ₹350, outstation bata ₹900/day.'

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Tamil Nadu Acting Driver Directory',
      description: pageDescription,
      itemListElement: actingDriversDataset.map((district, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: `Acting Driver in ${district.district}`,
        url: `${SITE_URL}/acting-driver/${district.slug}`
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Acting Driver', item: `${SITE_URL}/acting-driver` }
      ]
    }
  ]

  usePageSeo({
    title: pageTitle,
    description: pageDescription,
    path: '/acting-driver',
    jsonLd
  })

  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans selection:bg-amber-500 selection:text-dark-950">
      <Navbar />

      <main className="relative pt-24 sm:pt-28 pb-16">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

        {/* Directory Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
          <DriverHero
            title="Acting Driver Directory - Tamil Nadu"
            subtitle="Hire 24/7 Background-Verified Professional Drivers for Your Personal Car Across 38 Districts"
          />

          {/* District Search Box */}
          <div className="max-w-xl mx-auto relative mt-8">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search your district (e.g. Chennai, Trichy, Madurai, Coimbatore, Salem)..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-dark-800/90 border border-dark-700 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 shadow-2xl transition-all text-sm font-semibold"
            />
            <Search className="w-5 h-5 text-amber-400 absolute left-4 top-4" />
          </div>
        </div>

        {/* 38 District Cards Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
          <div className="flex items-center justify-between mb-8 border-b border-dark-800 pb-4">
            <div>
              <h2 className="text-2xl font-extrabold text-white">
                Select Your District <span className="text-amber-400">({filteredDistricts.length} Districts)</span>
              </h2>
              <p className="text-xs text-gray-400 mt-1">Book an acting driver for local commuting or outstation travel in your personal vehicle.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredDistricts.map((d) => (
              <Link
                key={d.id}
                to={`/acting-driver/${d.slug}`}
                className="bg-dark-900/90 border border-dark-800 hover:border-amber-500/50 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-1.5 text-amber-400 text-[11px] font-bold mb-1">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{d.district}</span>
                  </div>
                  <h3 className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                    Driver in {d.district}
                  </h3>
                </div>
                <div className="mt-3 pt-2 border-t border-dark-800 text-[10px] font-semibold text-gray-400 group-hover:text-amber-400 flex items-center justify-between">
                  <span>Book Driver</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Driver Services Categories */}
        <DriverCategories districtName="Tamil Nadu" />

        {/* Overview & Benefits */}
        <DriverOverview districtName="Tamil Nadu" />

        {/* 5-Step Verification & Safety */}
        <DriverVerification />

        {/* Pricing Overview */}
        <DriverPricing districtName="Tamil Nadu" />

        {/* How Booking Works */}
        <HowBookingWorks />

        {/* Cross Service Banner */}
        <CrossServiceBanner />

        {/* Customer Reviews */}
        <CustomerReviews
          reviews={[
            {
              name: 'Raghavan Pillai (NRI Malaysia)',
              rating: 5,
              text: 'Booked an acting driver in Trichy for my elderly mother. Driver arrived in 30 mins, was extremely respectful and patient.',
              route: 'Trichy Local'
            },
            {
              name: 'Dr. Anita S.',
              rating: 5,
              text: 'Hired an outstation driver for Chennai to Pondicherry weekend trip in my Honda City. Smooth driving, no rash overtakes.',
              route: 'Chennai to Pondicherry'
            }
          ]}
          districtName="Acting Driver Network"
          variant="dark"
        />

        {/* FAQs */}
        <FAQSection
          faqs={[
            {
              q: 'What is the minimum booking duration for an acting driver?',
              a: 'Our local hourly acting driver package starts at a minimum of 2 hours for ₹350. Outstation driver bata is ₹900 per day.'
            },
            {
              q: 'Are drivers qualified to drive automatic transmission or luxury cars?',
              a: 'Yes, all SAMAYAS acting drivers are tested for manual, automatic, hybrid, and luxury vehicles (BMW, Audi, Mercedes, Fortuner, Hycross).'
            },
            {
              q: 'How are drivers background checked?',
              a: 'All drivers undergo 5-point verification: Commercial Driving License check, Aadhar ID check, Police record verification, road driving test, and etiquette training.'
            }
          ]}
          districtName="Acting Driver Network"
          variant="dark"
        />

        {/* Final CTA */}
        <FinalCTA districtName="Tamil Nadu Acting Driver Network" />
      </main>

      <Footer />
    </div>
  )
}

export default ActingDriverDirectoryPage
