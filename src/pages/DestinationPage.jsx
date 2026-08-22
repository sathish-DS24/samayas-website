import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'
import DestinationHero from '../components/tour/DestinationHero'
import DestinationOverview from '../components/tour/DestinationOverview'
import AttractionsGrid from '../components/tour/AttractionsGrid'
import ActivitySection from '../components/tour/ActivitySection'
import FoodGuide from '../components/tour/FoodGuide'
import ShoppingGuide from '../components/tour/ShoppingGuide'
import HotelRecommendations from '../components/tour/HotelRecommendations'
import TravelTips from '../components/tour/TravelTips'
import PackageCard from '../components/tour/PackageCard'
import DestinationCard from '../components/tour/DestinationCard'
import TourPricingOverview from '../components/tour/TourPricingOverview'
import TourFAQ from '../components/tour/TourFAQ'
import TourReviews from '../components/tour/TourReviews'
import BookingCTA from '../components/tour/BookingCTA'
import { usePageSeo } from '../utils/seo'
import { tourPackagesDataset } from '../data/tourPackagesMaster'
import { tourDestinationsDataset } from '../data/tourDestinationsMaster'
import { MapPin, Navigation } from 'lucide-react'

const DestinationPage = ({ destination }) => {
  if (!destination) return null

  // Page SEO & JSON-LD Schemas
  usePageSeo({
    title: destination.seo?.title || `${destination.name} Tour Packages | SAMAYAS Cabs`,
    description: destination.seo?.description || `Book ${destination.name} tour packages with private cab and driver. Complete sightseeing itineraries with transparent pricing.`,
    path: `/tour-packages/${destination.slug}`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'TouristDestination',
          name: destination.name,
          description: destination.overview,
          geo: destination.coordinates ? {
            '@type': 'GeoCoordinates',
            latitude: destination.coordinates.lat,
            longitude: destination.coordinates.lng
          } : undefined
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://samayasorg.in/' },
            { '@type': 'ListItem', position: 2, name: 'Tour Packages', item: 'https://samayasorg.in/tour-packages' },
            { '@type': 'ListItem', position: 3, name: destination.name, item: `https://samayasorg.in/tour-packages/${destination.slug}` }
          ]
        },
        destination.faq ? {
          '@type': 'FAQPage',
          mainEntity: destination.faq.map(f => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer }
          }))
        } : null
      ].filter(Boolean)
    }
  })

  // Filter matching tour packages
  const matchingPackages = tourPackagesDataset.filter(pkg =>
    pkg.destinationSlug === destination.slug ||
    (pkg.destination && pkg.destination.toLowerCase().includes(destination.name.toLowerCase()))
  )

  // Filter related destinations in same state
  const relatedDestinations = tourDestinationsDataset.filter(d =>
    d.slug !== destination.slug && d.state === destination.state
  ).slice(0, 3)

  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans">
      <Navbar variant="inner" />

      {/* Hero */}
      <DestinationHero
        title={`${destination.name} Tour Packages`}
        tagline={destination.tagline}
        state={destination.state}
        category={destination.category}
        bestTime={destination.bestTime}
        recommendedVehicle={destination.recommendedVehicle}
      />

      {/* Overview & History */}
      <DestinationOverview
        overview={destination.overview}
        history={destination.history}
        bestTime={destination.bestTime}
        weather={destination.weather}
      />

      {/* Google Map Embed */}
      {destination.googleMapEmbedUrl && (
        <section className="py-8 bg-dark-950 text-white border-b border-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h2 className="text-xl font-extrabold text-white flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span>Location & Google Map</span>
            </h2>
            <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-dark-800 shadow-xl">
              <iframe
                title={`${destination.name} Map`}
                src={destination.googleMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </section>
      )}

      {/* Attractions Grid */}
      <AttractionsGrid attractions={destination.topAttractions} />

      {/* Activities / Things to do */}
      <ActivitySection activities={destination.activities} />

      {/* Local Food Guide */}
      <FoodGuide foods={destination.localFood} />

      {/* Shopping Guide */}
      <ShoppingGuide shopping={destination.shopping} />

      {/* Hotel Recommendations */}
      <HotelRecommendations hotels={destination.hotels} />

      {/* Travel Tips & Connectivity */}
      <TravelTips tips={destination.travelTips} connectivity={destination.connectivity} />

      {/* Suggested Packages */}
      {matchingPackages.length > 0 && (
        <section className="py-12 bg-dark-900 border-t border-b border-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Recommended Itineraries</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">Popular {destination.name} Tour Packages</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingPackages.map(pkg => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reviews */}
      <TourReviews reviews={destination.reviews} />

      {/* FAQ */}
      <TourFAQ faqList={destination.faq} />

      {/* Related Destinations */}
      {relatedDestinations.length > 0 && (
        <section className="py-12 bg-dark-950 border-t border-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-extrabold text-white mb-6">Explore Nearby Destinations in {destination.state}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedDestinations.map(rel => (
                <DestinationCard key={rel.id} destination={rel} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <BookingCTA title={`Book Your Private Cab Tour to ${destination.name}`} destination={destination.name} />

      {/* Booking Form Pre-filled */}
      <section id="booking" className="py-14 bg-dark-900 border-t border-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Pre-filled Booking Form</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Book {destination.name} Tour Cab</h2>
          </div>
          <BookingForm
            defaultTab="other"
            defaultServiceType="Tours & Travels"
            defaultDrop={destination.name}
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DestinationPage
