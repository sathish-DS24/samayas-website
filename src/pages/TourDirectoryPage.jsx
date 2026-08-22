import React, { useState, useMemo } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'
import TourHero from '../components/tour/TourHero'
import DestinationCard from '../components/tour/DestinationCard'
import CategoryCard from '../components/tour/CategoryCard'
import PackageCard from '../components/tour/PackageCard'
import TourFAQ from '../components/tour/TourFAQ'
import TourReviews from '../components/tour/TourReviews'
import BookingCTA from '../components/tour/BookingCTA'
import { usePageSeo } from '../utils/seo'
import { tourDestinationsDataset } from '../data/tourDestinationsMaster'
import { tourCategoriesDataset } from '../data/tourCategoriesMaster'
import { tourPackagesDataset } from '../data/tourPackagesMaster'
import { ShieldCheck, Car, Calendar, Compass, PhoneCall } from 'lucide-react'

const TourDirectoryPage = () => {
  const [filterState, setFilterState] = useState({ searchTerm: '', state: '', category: '' })

  usePageSeo({
    title: 'South India Tour Packages & Outstation Cab Directory | SAMAYAS',
    description: 'Explore South India tour packages with private cab. Ooty, Kodaikanal, Munnar, Rameswaram, Coorg, Mysore & Tirupati holiday packages with experienced drivers.',
    path: '/tour-packages',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'South India Tour Packages & Destinations',
      itemListElement: tourDestinationsDataset.map((d, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: d.name,
        url: `https://samayasorg.in/tour-packages/${d.slug}`
      }))
    }
  })

  const statesList = useMemo(() => {
    return Array.from(new Set(tourDestinationsDataset.map(d => d.state)))
  }, [])

  const filteredDestinations = useMemo(() => {
    return tourDestinationsDataset.filter(d => {
      const matchSearch = !filterState.searchTerm ||
        d.name.toLowerCase().includes(filterState.searchTerm.toLowerCase()) ||
        d.tagline.toLowerCase().includes(filterState.searchTerm.toLowerCase())
      const matchState = !filterState.state || d.state === filterState.state
      const matchCategory = !filterState.category || d.categorySlug === filterState.category
      return matchSearch && matchState && matchCategory
    })
  }, [filterState])

  const handleSearch = (searchParams) => {
    setFilterState(prev => ({ ...prev, ...searchParams }))
  }

  const defaultReviews = [
    { author: 'Arun Kumar', city: 'Chennai', rating: 5, comment: 'Booked Ooty 3 days package with SAMAYAS. Clean Innova cab and very polite driver!', packageUsed: 'Ooty 3 Days Tour' },
    { author: 'Sneha Reddy', city: 'Hyderabad', rating: 5, comment: 'Wonderful trip to Coorg and Mysore. The driver took great care of our family.', packageUsed: 'Coorg Family Package' },
    { author: 'Venkatesh Iyer', city: 'Bangalore', rating: 5, comment: 'Rameswaram temple pilgrimage cab was smooth. Driver helped elderly parents at temple gates.', packageUsed: 'Rameswaram Pilgrimage' }
  ]

  const directoryFAQ = [
    { question: 'What is included in SAMAYAS Tour Packages?', answer: 'Our tour packages include a private AC cab (Sedan, SUV, Innova Crysta or Tempo Traveller), dedicated driver allowances, fuel costs, toll fees, and doorstep pickup & drop.' },
    { question: 'Can I customize the tour itinerary?', answer: 'Yes! All SAMAYAS tour cab packages are 100% customizable according to your flight/train timings, preferred hotel stays, and sightseeing spots.' },
    { question: 'Do SAMAYAS drivers have hill and outstation driving experience?', answer: 'Yes! All SAMAYAS drivers are expert hills-certified drivers experienced with mountain hairpin bends in Ooty, Kodaikanal, Munnar, and Coorg.' }
  ]

  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans">
      <Navbar variant="inner" />

      {/* Hero Section */}
      <TourHero onSearch={handleSearch} categories={tourCategoriesDataset} states={statesList} />

      {/* Featured Destinations Section */}
      <section className="py-14 bg-dark-900 border-t border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Popular Destinations</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">Explore South India Destinations</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-md mt-2 md:mt-0">
              Showing {filteredDestinations.length} destination tour hubs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map(dest => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* Tour Categories Section */}
      <section className="py-14 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Browse by Travel Preference</span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">Tour Categories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourCategoriesDataset.map(cat => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages Section */}
      <section className="py-14 bg-dark-900 border-t border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Top Rated Road Trips</span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">Popular Tour Packages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourPackagesDataset.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SAMAYAS Section */}
      <section className="py-14 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Why Travel With Us</span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">Why Choose SAMAYAS Tour Cabs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-dark-900 border border-dark-800 p-6 rounded-2xl space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Private Dedicated Cab</h3>
              <p className="text-xs text-gray-300 leading-relaxed">No sharing with strangers. Clean AC vehicle exclusively for your family or group.</p>
            </div>

            <div className="bg-dark-900 border border-dark-800 p-6 rounded-2xl space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Hills Certified Drivers</h3>
              <p className="text-xs text-gray-300 leading-relaxed">Safe, verified drivers experienced with mountain hairpin bends and long outstation highways.</p>
            </div>

            <div className="bg-dark-900 border border-dark-800 p-6 rounded-2xl space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Transparent All-Inclusive Pricing</h3>
              <p className="text-xs text-gray-300 leading-relaxed">Fuel, tolls, driver allowances and parking included upfront with zero surprise charges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <TourReviews reviews={defaultReviews} />

      {/* FAQ */}
      <TourFAQ faqList={directoryFAQ} />

      {/* CTA */}
      <BookingCTA title="Plan Your South India Tour Today" destination="South India" />

      {/* Embedded BookingForm */}
      <section id="booking" className="py-14 bg-dark-900 border-t border-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Instant Online Reservation</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Book Your Tour Cab</h2>
          </div>
          <BookingForm defaultTab="other" defaultServiceType="Tours & Travels" />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TourDirectoryPage
