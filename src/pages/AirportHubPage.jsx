import React from 'react'
import { Link } from 'react-router-dom'
import { Plane, MapPin, Clock, ShieldCheck, CheckCircle, Car, Star, Users, PhoneCall, ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'
import FlightStatus from '../components/airport/FlightStatus'
import AirportOverview from '../components/airport/AirportOverview'
import NRISection from '../components/airport/NRISection'
import AirportDriverPolicy from '../components/airport/AirportDriverPolicy'
import AirportTransfersList from '../components/airport/AirportTransfersList'
import NearbyAmenities from '../components/airport/NearbyAmenities'
import CustomerReviews from '../components/district/CustomerReviews'
import FAQSection from '../components/district/FAQSection'
import FinalCTA from '../components/district/FinalCTA'
import TaxiFareTable from '../components/route/TaxiFareTable'
import { usePageSeo, SITE_URL } from '../utils/seo'

const AirportHubPage = ({ airport }) => {
  if (!airport) return null

  // SEO Definitions
  const pageTitle = airport.seo?.title || `${airport.name} (${airport.iata}) Taxi Booking | SAMAYAS`
  const pageDescription = airport.seo?.description || `Book 24/7 airport taxi from ${airport.name} (${airport.iata}). Transparent rates, doorstep pickup & zero return charges.`

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'TaxiService',
      name: `SAMAYAS ${airport.name} Taxi Service`,
      description: pageDescription,
      url: `${SITE_URL}/airport-taxi/${airport.slug}`,
      telephone: '+91-98948-09439',
      email: 'samayasprem@gmail.com',
      areaServed: [
        { '@type': 'AdministrativeArea', name: airport.city },
        { '@type': 'State', name: airport.state }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Airport Taxi', item: `${SITE_URL}/airport-taxi` },
        { '@type': 'ListItem', position: 3, name: airport.shortName, item: `${SITE_URL}/airport-taxi/${airport.slug}` }
      ]
    }
  ]

  usePageSeo({
    title: pageTitle,
    description: pageDescription,
    path: `/airport-taxi/${airport.slug}`,
    jsonLd
  })

  // Dummy content object for TaxiFareTable
  const fareTableContent = {
    from: airport.shortName,
    to: 'Intercity Destinations',
    fare: {
      hatchback: 1950,
      sedan: 1950,
      suv: 2600,
      innova: 2860,
      hycross: 3250,
      traveller: 3900
    },
    tolls: {
      costRange: 'At actuals'
    }
  }

  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans selection:bg-amber-500 selection:text-dark-950">
      <Navbar />

      <main className="relative pt-24 sm:pt-28 pb-16">
        
        {/* Airport Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Plane className="w-4 h-4 animate-pulse" />
                <span>24/7 Official Airport Taxi Hub</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                {airport.name} <span className="text-amber-400">({airport.iata})</span>
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-300">
                <span className="flex items-center bg-dark-800 px-3 py-1.5 rounded-xl border border-dark-700 font-semibold text-white">
                  <MapPin className="w-4 h-4 text-amber-400 mr-1.5" />
                  {airport.city}, {airport.state}
                </span>
                <span className="flex items-center bg-dark-800 px-3 py-1.5 rounded-xl border border-dark-700 font-semibold text-white">
                  <Clock className="w-4 h-4 text-amber-400 mr-1.5" />
                  {airport.operatingHours}
                </span>
                <span className="flex items-center bg-green-500/10 text-green-400 px-3 py-1.5 rounded-xl border border-green-500/20 font-bold">
                  <ShieldCheck className="w-4 h-4 mr-1.5" />
                  Live Flight Tracking
                </span>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {airport.description}
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-dark-900 p-3 rounded-xl border border-dark-800 flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-xs font-bold text-gray-200">Meet & Greet Signboard</span>
                </div>
                <div className="bg-dark-900 p-3 rounded-xl border border-dark-800 flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-xs font-bold text-gray-200">60-Min Free Wait Time</span>
                </div>
                <div className="bg-dark-900 p-3 rounded-xl border border-dark-800 flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-xs font-bold text-gray-200">Zero Return Charges</span>
                </div>
              </div>

              {/* Live Flight Sync Card */}
              <div className="pt-2">
                <FlightStatus />
              </div>
            </div>

            {/* Right Booking Form Column */}
            <div className="lg:col-span-5">
              <div className="bg-dark-800/90 border border-dark-700/80 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-md">
                <h2 className="text-xl font-bold text-white mb-4 text-center">
                  Book <span className="text-amber-400">{airport.shortName}</span> Taxi
                </h2>
                <BookingForm
                  initialPickup={`${airport.name} (${airport.iata})`}
                  isSidebar={true}
                  isAirport={true}
                />
              </div>
            </div>

          </div>
        </section>

        {/* Airport Overview Section */}
        <AirportOverview airport={airport} />

        {/* International & NRI Transfers Section */}
        <NRISection airportName={airport.name} />

        {/* Driver Waiting & Flight Delay Policy */}
        <AirportDriverPolicy airportName={airport.shortName} />

        {/* Popular Transfers Network */}
        <AirportTransfersList routes={airport.popularRoutes} airportName={airport.name} />

        {/* Tariff Matrix */}
        <TaxiFareTable content={fareTableContent} />

        {/* Nearby Amenities */}
        <NearbyAmenities airport={airport} />

        {/* Customer Reviews */}
        <CustomerReviews
          reviews={[
            {
              name: 'Dr. S. K. Subramanian (NRI UK)',
              rating: 5,
              text: `Pre-booked airport taxi from ${airport.name}. Driver was at arrival gate with my name. Spotless vehicle and safe ride!`,
              route: `${airport.shortName} Pickup`
            },
            {
              name: 'Anand Kumar',
              rating: 5,
              text: `Our flight was delayed by 1 hour. SAMAYAS tracked our flight number and driver was right there when we stepped out. 10/10 service!`,
              route: `${airport.shortName} Transfer`
            }
          ]}
          districtName={airport.name}
          variant="dark"
        />

        {/* FAQs */}
        <FAQSection
          faqs={airport.faq || []}
          districtName={airport.name}
          variant="dark"
        />

        {/* Final CTA */}
        <FinalCTA districtName={airport.name} />
      </main>

      <Footer />
    </div>
  )
}

export default AirportHubPage
