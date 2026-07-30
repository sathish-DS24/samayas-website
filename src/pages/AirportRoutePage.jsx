import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Plane, Navigation, Clock, ShieldCheck, MapPin, CheckCircle, Car, ArrowRight, PhoneCall } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'
import FlightStatus from '../components/airport/FlightStatus'
import AirportDriverPolicy from '../components/airport/AirportDriverPolicy'
import TaxiFareTable from '../components/route/TaxiFareTable'
import ExploreAlongRoute from '../components/route/ExploreAlongRoute'
import CustomerReviews from '../components/district/CustomerReviews'
import FAQSection from '../components/district/FAQSection'
import FinalCTA from '../components/district/FinalCTA'
import { usePageSeo, SITE_URL } from '../utils/seo'

const AirportRoutePage = ({ routeObj }) => {
  if (!routeObj) return <Navigate to="/airport-taxi" replace />

  // SEO
  const pageTitle = routeObj.seo?.title || `${routeObj.airportName} to ${routeObj.destination} Taxi | ₹15/km Cab Booking | SAMAYAS`
  const pageDescription = routeObj.seo?.description || `Book 24/7 one-way airport taxi from ${routeObj.airportName} (${routeObj.airportIata}) to ${routeObj.destination}. Hatchback from ₹${routeObj.vehicleFare?.hatchback?.toLocaleString('en-IN')}, Sedan ₹${routeObj.vehicleFare?.sedan?.toLocaleString('en-IN')}. Live flight delay tracking.`

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'TaxiService',
      name: `SAMAYAS ${routeObj.airportName} to ${routeObj.destination} Taxi`,
      description: pageDescription,
      url: `${SITE_URL}/airport-taxi/${routeObj.slug}`,
      telephone: '+91-98948-09439',
      provider: {
        '@type': 'LocalBusiness',
        name: 'SAMAYAS',
        url: SITE_URL
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: routeObj.airportName },
        { '@type': 'AdministrativeArea', name: routeObj.destination }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Airport Taxi', item: `${SITE_URL}/airport-taxi` },
        { '@type': 'ListItem', position: 3, name: `${routeObj.airportIata} to ${routeObj.destination}`, item: `${SITE_URL}/airport-taxi/${routeObj.slug}` }
      ]
    }
  ]

  usePageSeo({
    title: pageTitle,
    description: pageDescription,
    path: `/airport-taxi/${routeObj.slug}`,
    jsonLd
  })

  // Fare table content prop
  const fareTableContent = {
    from: `${routeObj.airportName} (${routeObj.airportIata})`,
    to: routeObj.destination,
    fare: routeObj.vehicleFare,
    tolls: {
      costRange: routeObj.tollEstimate
    }
  }

  // Google Map Embed URL
  const mapEmbedUrl = routeObj.googleMapEmbedUrl || `https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=${encodeURIComponent(routeObj.airportName)}&destination=${encodeURIComponent(routeObj.destination)}`

  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans selection:bg-amber-500 selection:text-dark-950">
      <Navbar />

      <main className="relative pt-24 sm:pt-28 pb-16">
        
        {/* Airport Route Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Plane className="w-4 h-4 animate-pulse" />
                <span>24/7 Official Airport Intercity Transfer</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                {routeObj.airportName.replace('International Airport', 'Airport')} <span className="text-amber-400">→ {routeObj.destination}</span> Cab
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-300">
                <span className="flex items-center bg-dark-800 px-3 py-1.5 rounded-xl border border-dark-700 font-semibold text-white">
                  <Navigation className="w-4 h-4 text-amber-400 mr-1.5" />
                  Distance: {routeObj.distanceKm} km
                </span>
                <span className="flex items-center bg-dark-800 px-3 py-1.5 rounded-xl border border-dark-700 font-semibold text-white">
                  <Clock className="w-4 h-4 text-amber-400 mr-1.5" />
                  Travel Duration: {routeObj.travelTime}
                </span>
                <span className="flex items-center bg-green-500/10 text-green-400 px-3 py-1.5 rounded-xl border border-green-500/20 font-bold">
                  <ShieldCheck className="w-4 h-4 mr-1.5" />
                  Starting from ₹{routeObj.vehicleFare?.hatchback?.toLocaleString('en-IN')}
                </span>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Direct one-way airport cab service from {routeObj.airportName} ({routeObj.airportIata}) to {routeObj.destination}. 
                Doorstep pickup at terminal arrivals concourse with live flight delay monitoring and zero return charges.
              </p>

              {/* Highway Info */}
              {routeObj.highwayInfo && (
                <div className="bg-dark-900 p-4 rounded-2xl border border-dark-800 flex items-center space-x-3 text-xs text-gray-300">
                  <Navigation className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <p>
                    <strong className="text-white">Route Highway:</strong> Traveling via {routeObj.highwayInfo.join(', ')}. Estimated toll charges: {routeObj.tollEstimate}.
                  </p>
                </div>
              )}

              {/* Flight Sync Widget */}
              <FlightStatus />
            </div>

            {/* Right Booking Form Column */}
            <div className="lg:col-span-5">
              <div className="bg-dark-800/90 border border-dark-700/80 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-md">
                <h2 className="text-xl font-bold text-white mb-4 text-center">
                  Book <span className="text-amber-400">{routeObj.airportIata} → {routeObj.destination}</span> Cab
                </h2>
                <BookingForm
                  initialPickup={`${routeObj.airportName} (${routeObj.airportIata})`}
                  initialDrop={routeObj.destination}
                  isSidebar={true}
                  isAirport={true}
                />
              </div>
            </div>

          </div>
        </section>

        {/* Vehicle Tariff Table */}
        <TaxiFareTable content={fareTableContent} />

        {/* Live Route Map Embed */}
        <section className="py-12 bg-dark-900 border-t border-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-2xl font-extrabold text-white">
                Route Map: <span className="text-amber-400">{routeObj.airportIata} to {routeObj.destination}</span>
              </h2>
              <p className="text-xs text-gray-400 mt-2">
                Live interactive Google Maps route showing travel trajectory, distance ({routeObj.distanceKm} km), and toll highway gates.
              </p>
            </div>

            <div className="bg-dark-800/80 border border-dark-700/80 rounded-2xl overflow-hidden shadow-2xl h-[400px]">
              <iframe
                title={`${routeObj.airportName} to ${routeObj.destination} Route Map`}
                src={routeObj.googleMapEmbedUrl || `https://maps.google.com/maps?q=${encodeURIComponent(routeObj.airportName)}+to+${encodeURIComponent(routeObj.destination)}&t=&z=9&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* Pickup & Drop Instructions */}
        <section className="py-12 bg-dark-950 border-t border-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pickup */}
            <div className="bg-dark-800/80 border border-dark-700/80 p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-base mb-4 border-b border-dark-700 pb-2">
                <Plane className="w-5 h-5" />
                <span>Airport Pickup Instructions</span>
              </div>
              <ul className="space-y-3 text-xs text-gray-300">
                {routeObj.pickupLocations.map((loc, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Drop */}
            <div className="bg-dark-800/80 border border-dark-700/80 p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-base mb-4 border-b border-dark-700 pb-2">
                <MapPin className="w-5 h-5" />
                <span>Destination Drop Locations</span>
              </div>
              <ul className="space-y-3 text-xs text-gray-300">
                {routeObj.dropLocations.map((loc, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Explore Along Route Module Integration */}
        {routeObj.exploreAlongRoute && (
          <ExploreAlongRoute content={{ from: routeObj.airportIata, to: routeObj.destination, exploreAlongRoute: routeObj.exploreAlongRoute }} />
        )}

        {/* Driver Delay & Meet & Greet Policy */}
        <AirportDriverPolicy airportName={routeObj.airportName} />

        {/* Bi-Directional Connectivity / Related Airport Routes */}
        {routeObj.relatedRoutes && routeObj.relatedRoutes.length > 0 && (
          <section className="py-12 bg-dark-900 border-t border-dark-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="text-2xl font-extrabold text-white">
                  Phase 5 Connectivity: <span className="text-amber-400">Related Airport Transfers</span>
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  Connecting airport hub pages directly with your intercity destinations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {routeObj.relatedRoutes.map((rel, idx) => (
                  <Link
                    key={idx}
                    to={`/airport-taxi/${rel.slug}`}
                    className="bg-dark-800/80 border border-dark-700/80 hover:border-amber-500/50 p-5 rounded-2xl transition-all hover:-translate-y-1 shadow-lg flex items-center justify-between group"
                  >
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                        {rel.name}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">{rel.distance} • From ₹{rel.startingFare.toLocaleString('en-IN')}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Customer Reviews */}
        <CustomerReviews
          reviews={routeObj.reviews || []}
          districtName={`${routeObj.airportIata} to ${routeObj.destination}`}
          variant="dark"
        />

        {/* FAQs */}
        <FAQSection
          faqs={routeObj.faq || []}
          districtName={`${routeObj.airportIata} to ${routeObj.destination}`}
          variant="dark"
        />

        {/* Final CTA */}
        <FinalCTA districtName={`${routeObj.airportIata} to ${routeObj.destination}`} />
      </main>

      <Footer />
    </div>
  )
}

export default AirportRoutePage
