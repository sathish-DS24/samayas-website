import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'
import DestinationHero from '../components/tour/DestinationHero'
import ItineraryTimeline from '../components/tour/ItineraryTimeline'
import TourPricingOverview from '../components/tour/TourPricingOverview'
import TravelTips from '../components/tour/TravelTips'
import TourFAQ from '../components/tour/TourFAQ'
import TourReviews from '../components/tour/TourReviews'
import BookingCTA from '../components/tour/BookingCTA'
import { usePageSeo } from '../utils/seo'
import { CheckCircle2, XCircle, Clock, Tag, ShieldCheck } from 'lucide-react'

const TourPackagePage = ({ pkg }) => {
  if (!pkg) return null

  usePageSeo({
    title: pkg.seo?.title || `${pkg.title} | SAMAYAS Tour Cab`,
    description: pkg.seo?.description || pkg.overview,
    path: `/tour-packages/${pkg.slug}`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Product',
          name: pkg.title,
          description: pkg.overview,
          offers: {
            '@type': 'Offer',
            price: pkg.startingPrice,
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            seller: { '@type': 'Organization', name: 'SAMAYAS' }
          }
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://samayasorg.in/' },
            { '@type': 'ListItem', position: 2, name: 'Tour Packages', item: 'https://samayasorg.in/tour-packages' },
            { '@type': 'ListItem', position: 3, name: pkg.title, item: `https://samayasorg.in/tour-packages/${pkg.slug}` }
          ]
        }
      ]
    }
  })

  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans">
      <Navbar variant="inner" />

      {/* Hero */}
      <DestinationHero
        title={pkg.title}
        tagline={pkg.subtitle || pkg.overview}
        state={pkg.originCity ? `From ${pkg.originCity} to ${pkg.destination}` : pkg.destination}
        category={pkg.category}
        recommendedVehicle={pkg.recommendedVehicle}
      />

      {/* Overview & Duration Details */}
      <section className="py-12 bg-dark-900 border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="bg-dark-950 border border-dark-800 p-6 rounded-2xl shadow-xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dark-900 pb-4">
              <div>
                <span className="text-xs text-amber-400 font-bold uppercase tracking-widest">Package Overview</span>
                <h2 className="text-xl font-black text-white mt-1">{pkg.title}</h2>
              </div>
              <div className="flex items-center space-x-2 bg-amber-500/10 px-4 py-2 rounded-xl border border-amber-500/20 text-amber-300 font-bold text-sm">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Duration: {pkg.duration}</span>
              </div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{pkg.overview}</p>

            {pkg.idealFor && (
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-semibold text-gray-400">Ideal For:</span>
                {pkg.idealFor.map((item, idx) => (
                  <span key={idx} className="text-xs px-3 py-1 bg-dark-900 text-amber-300 rounded-full border border-dark-700 font-medium">
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Day by Day Itinerary Timeline */}
      <ItineraryTimeline itinerary={pkg.itinerary} />

      {/* Inclusions & Exclusions */}
      <section className="py-12 bg-dark-900 border-t border-b border-dark-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Included */}
            <div className="bg-dark-950 border border-emerald-500/20 p-6 rounded-2xl shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-emerald-400 flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Inclusions (What's Covered)</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                {pkg.included?.map((inc, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Excluded */}
            <div className="bg-dark-950 border border-rose-500/20 p-6 rounded-2xl shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-rose-400 flex items-center space-x-2">
                <XCircle className="w-5 h-5" />
                <span>Exclusions (What's Excluded)</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                {pkg.excluded?.map((exc, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <TourPricingOverview
        pricingList={pkg.pricingOverview}
        startingPrice={pkg.startingPrice}
        recommendedVehicle={pkg.recommendedVehicle}
      />

      {/* Travel Tips */}
      <TravelTips tips={pkg.travelTips} />

      {/* Reviews */}
      <TourReviews reviews={pkg.reviews} />

      {/* FAQ */}
      <TourFAQ faqList={pkg.faq} />

      {/* CTA */}
      <BookingCTA title={`Book ${pkg.title}`} destination={pkg.destination} />

      {/* Booking Form Pre-filled */}
      <section id="booking" className="py-14 bg-dark-900 border-t border-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Pre-filled Package Booking</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Book Tour Package</h2>
          </div>
          <BookingForm
            defaultTab="other"
            defaultServiceType="Tours & Travels"
            defaultDrop={pkg.destination}
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TourPackagePage
