import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { UserCheck, MapPin, ShieldCheck, Clock, CheckCircle2, Car, PhoneCall, ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'
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
import { usePageSeo, SITE_URL } from '../utils/seo'
import { districts } from '../data/districts.js'

const DistrictDriverPage = ({ districtObj }) => {
  if (!districtObj) return <Navigate to="/acting-driver" replace />

  const districtName = districtObj.district

  // Find nearby district objects for cross internal linking
  const currentDistrictData = districts.find((d) => d.slug === districtObj.slug)
  const nearbySlugs = currentDistrictData?.nearby || ['chennai', 'tiruchirappalli', 'coimbatore', 'madurai']

  // SEO Definitions
  const pageTitle = districtObj.seo?.title || `Acting Driver in ${districtName} | 24x7 Driver on Call | SAMAYAS`
  const pageDescription = districtObj.seo?.description || `Hire 24/7 background-verified acting drivers in ${districtName} for your car. Hourly rates from ₹350, outstation bata ₹900/day. Doorstep pickup in 30 mins.`

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `SAMAYAS Acting Driver Service ${districtName}`,
      description: pageDescription,
      url: `${SITE_URL}/acting-driver/${districtObj.slug}`,
      provider: {
        '@type': 'LocalBusiness',
        name: 'SAMAYAS',
        url: SITE_URL,
        telephone: '+91-98948-09439'
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: districtName
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Acting Driver', item: `${SITE_URL}/acting-driver` },
        { '@type': 'ListItem', position: 3, name: districtName, item: `${SITE_URL}/acting-driver/${districtObj.slug}` }
      ]
    }
  ]

  usePageSeo({
    title: pageTitle,
    description: pageDescription,
    path: `/acting-driver/${districtObj.slug}`,
    jsonLd
  })

  const suitableForList = [
    'Senior Citizens & Medical Appointments',
    'Business Meetings & Corporate Travel',
    'Airport Drop & Pickup Runs',
    'Hospital & Diagnostic Visits',
    'Long Outstation Highway Drives',
    'Shopping & Commercial Markets',
    'Marriage Functions & Family Weddings',
    'Temple Pilgrimages & Religious Tours',
    'Weekend Vacations & Resorts',
    'Tourists & International NRIs'
  ]

  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans selection:bg-amber-500 selection:text-dark-950">
      <Navbar />

      <main className="relative pt-24 sm:pt-28 pb-16">
        
        {/* District Driver Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <DriverHero
                title={districtObj.hero?.title || `Professional Acting Driver in ${districtName}`}
                subtitle={districtObj.hero?.subtitle || `24×7 Driver on Call in ${districtName} • Verified, Experienced Drivers`}
                tagline={districtObj.hero?.tagline}
                districtName={districtName}
              />

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {districtObj.description}
              </p>

              {/* Popular Locations Badges */}
              {districtObj.popularLocations && (
                <div className="bg-dark-900 p-4 rounded-2xl border border-dark-800 space-y-2">
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">Fast 30-Min Doorstep Pickup Coverage in {districtName}:</p>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-300">
                    {districtObj.popularLocations.map((loc, lIdx) => (
                      <span key={lIdx} className="px-2.5 py-1 rounded-lg bg-dark-800 border border-dark-700 font-semibold flex items-center">
                        <MapPin className="w-3 h-3 text-amber-400 mr-1" />
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Booking Form Column */}
            <div className="lg:col-span-5">
              <div className="bg-dark-800/90 border border-dark-700/80 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-md">
                <h2 className="text-xl font-bold text-white mb-4 text-center">
                  Book Acting Driver in <span className="text-amber-400">{districtName}</span>
                </h2>
                <BookingForm
                  initialPickup={`${districtName} Doorstep`}
                  isSidebar={true}
                  isDriver={true}
                  defaultDriverType="Hourly Driver"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Overview & Use Cases */}
        <DriverOverview districtName={districtName} description={districtObj.description} />

        {/* Categories & Packages */}
        <DriverCategories categories={districtObj.driverCategories} districtName={districtName} />

        {/* Suitable For Section */}
        <section className="py-12 bg-dark-900 border-t border-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ideal Use Cases in <span className="text-amber-400">{districtName}</span>
              </h2>
              <p className="text-gray-400 text-sm mt-2">
                Our versatile acting drivers handle every personal and family commuting scenario.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {suitableForList.map((item, idx) => (
                <div key={idx} className="bg-dark-800/80 border border-dark-700/80 p-3.5 rounded-2xl flex items-center space-x-2 text-xs font-semibold text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Driver Verification */}
        <DriverVerification />

        {/* Pricing Matrix */}
        <DriverPricing pricing={districtObj.pricing} districtName={districtName} />

        {/* How Booking Works */}
        <HowBookingWorks />

        {/* Cross Service Banner */}
        <CrossServiceBanner />

        {/* Nearby Districts Internal Links */}
        <section className="py-12 bg-dark-900 border-t border-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-2xl font-extrabold text-white">
                Acting Drivers in <span className="text-amber-400">Nearby Districts</span>
              </h2>
              <p className="text-xs text-gray-400 mt-1">Explore verified acting driver coverage in surrounding regions.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {nearbySlugs.map((slug, idx) => {
                const name = slug.charAt(0).toUpperCase() + slug.slice(1)
                return (
                  <Link
                    key={idx}
                    to={`/acting-driver/${slug}`}
                    className="bg-dark-800/80 border border-dark-700/80 hover:border-amber-500/50 p-4 rounded-2xl transition-all hover:-translate-y-1 shadow-lg flex items-center justify-between group"
                  >
                    <span className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                      Driver in {name}
                    </span>
                    <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <CustomerReviews
          reviews={districtObj.reviews || []}
          districtName={`Acting Driver ${districtName}`}
          variant="dark"
        />

        {/* FAQs */}
        <FAQSection
          faqs={districtObj.faq || []}
          districtName={`Acting Driver ${districtName}`}
          variant="dark"
        />

        {/* Final CTA */}
        <FinalCTA districtName={`Acting Driver ${districtName}`} />
      </main>

      <Footer />
    </div>
  )
}

export default DistrictDriverPage
