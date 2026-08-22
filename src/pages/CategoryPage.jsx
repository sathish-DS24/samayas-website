import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'
import DestinationHero from '../components/tour/DestinationHero'
import DestinationCard from '../components/tour/DestinationCard'
import PackageCard from '../components/tour/PackageCard'
import TourFAQ from '../components/tour/TourFAQ'
import TourReviews from '../components/tour/TourReviews'
import BookingCTA from '../components/tour/BookingCTA'
import { usePageSeo } from '../utils/seo'
import { tourDestinationsDataset } from '../data/tourDestinationsMaster'
import { tourPackagesDataset } from '../data/tourPackagesMaster'
import { Compass, CheckCircle2 } from 'lucide-react'

const CategoryPage = ({ category }) => {
  if (!category) return null

  usePageSeo({
    title: category.seo?.title || `${category.title} | SAMAYAS Tour Packages`,
    description: category.seo?.description || category.description,
    path: `/tour-packages/${category.slug}`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: category.title,
      description: category.description,
      itemListElement: category.featuredDestinations ? category.featuredDestinations.map((slug, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `https://samayasorg.in/tour-packages/${slug}`
      })) : []
    }
  })

  // Filter matching destinations
  const matchingDestinations = tourDestinationsDataset.filter(d =>
    d.categorySlug === category.slug ||
    (category.featuredDestinations && category.featuredDestinations.includes(d.slug))
  )

  // Filter matching packages
  const matchingPackages = tourPackagesDataset.filter(pkg =>
    pkg.categorySlug === category.slug ||
    (category.popularPackages && category.popularPackages.includes(pkg.slug))
  )

  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans">
      <Navbar variant="inner" />

      {/* Hero */}
      <DestinationHero
        title={category.title}
        tagline={category.subtitle}
        state="South India"
        category="Tour Category"
        bestTime={category.travelGuide?.bestMonths}
      />

      {/* Category Overview & Highlights */}
      <section className="py-12 bg-dark-900 border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="bg-dark-950 border border-dark-800 p-6 rounded-2xl shadow-xl space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center space-x-2">
              <Compass className="w-5 h-5 text-amber-400" />
              <span>About {category.title}</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{category.description}</p>

            {category.highlights && (
              <div className="pt-3 border-t border-dark-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {category.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-amber-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      {matchingDestinations.length > 0 && (
        <section className="py-12 bg-dark-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-white mb-8">Featured {category.title.replace(' Packages', '')} Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingDestinations.map(dest => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Suggested Packages */}
      {matchingPackages.length > 0 && (
        <section className="py-12 bg-dark-900 border-t border-b border-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-white mb-8">Suggested Tour Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingPackages.map(pkg => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reviews */}
      <TourReviews reviews={category.reviews} />

      {/* FAQ */}
      <TourFAQ faqList={category.faq} />

      {/* CTA */}
      <BookingCTA title={`Book ${category.title} with SAMAYAS Private Cab`} destination={category.title} />

      {/* Booking Form */}
      <section id="booking" className="py-14 bg-dark-900 border-t border-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Instant Booking</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Reserve Your Tour Cab</h2>
          </div>
          <BookingForm defaultTab="other" defaultServiceType="Tours & Travels" />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CategoryPage
