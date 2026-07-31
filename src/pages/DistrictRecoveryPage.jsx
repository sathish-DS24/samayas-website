import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Truck, MapPin, ShieldCheck, Clock, CheckCircle2, PhoneCall, ChevronRight, AlertTriangle, Zap, Fuel, Disc } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'
import RecoveryHero from '../components/recovery/RecoveryHero'
import LiveEmergencyAssist from '../components/recovery/LiveEmergencyAssist'
import CoverageAreas from '../components/recovery/CoverageAreas'
import HighwayCoverage from '../components/recovery/HighwayCoverage'
import SupportedVehicles from '../components/recovery/SupportedVehicles'
import RecoveryFleet from '../components/recovery/RecoveryFleet'
import RecoveryProcess from '../components/recovery/RecoveryProcess'
import CustomerReviews from '../components/district/CustomerReviews'
import FAQSection from '../components/district/FAQSection'
import FinalCTA from '../components/district/FinalCTA'
import { usePageSeo, SITE_URL } from '../utils/seo'
import { districts } from '../data/districts.js'

const DistrictRecoveryPage = ({ districtObj }) => {
  if (!districtObj) return <Navigate to="/vehicle-recovery" replace />

  const districtName = districtObj.district

  // Find nearby districts for cross linking
  const currentDistrictData = districts.find((d) => d.slug === districtObj.slug)
  const nearbySlugs = currentDistrictData?.nearby || ['chennai', 'tiruchirappalli', 'coimbatore', 'madurai']

  // SEO Definitions
  const pageTitle = districtObj.seo?.title || `Vehicle Recovery in ${districtName} | 24x7 Towing Service | SAMAYAS`
  const pageDescription = districtObj.seo?.description || `Emergency 24/7 vehicle recovery, car towing & roadside assistance in ${districtName}. 15-30 min fast arrival. Flatbed towing, jump start & fuel delivery.`

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'EmergencyService',
      name: `SAMAYAS Vehicle Recovery ${districtName}`,
      description: pageDescription,
      url: `${SITE_URL}/vehicle-recovery/${districtObj.slug}`,
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
        { '@type': 'ListItem', position: 2, name: 'Vehicle Recovery', item: `${SITE_URL}/vehicle-recovery` },
        { '@type': 'ListItem', position: 3, name: districtName, item: `${SITE_URL}/vehicle-recovery/${districtObj.slug}` }
      ]
    }
  ]

  usePageSeo({
    title: pageTitle,
    description: pageDescription,
    path: `/vehicle-recovery/${districtObj.slug}`,
    jsonLd
  })

  const commonProblems = [
    { title: 'Engine Overheating & Failure', desc: 'Radiator leaks, head gasket issues, coolant loss.' },
    { title: 'Dead Battery & No Start', desc: 'Drained battery, alternator failure, starter motor click.' },
    { title: 'Flat Tyre & Puncture', desc: 'Sidewall damage, stuck lug nuts, spare stepney fitting.' },
    { title: 'Out of Fuel / Empty Tank', desc: 'Ran out of Petrol/Diesel on highway or city bypass.' },
    { title: 'Accident & Winching Need', desc: 'Collision damage, off-road ditch slip, rollover recovery.' },
    { title: 'Gearbox & Brake Lock', desc: 'Clutch plate burn, transmission lock, stuck handbrake.' }
  ]

  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans selection:bg-red-500 selection:text-white">
      <Navbar />

      <main className="relative pt-24 sm:pt-28 pb-16">
        
        {/* District Recovery Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <RecoveryHero
                title={`Vehicle Recovery in ${districtName}`}
                subtitle={`24×7 Emergency Roadside Assistance & Towing in ${districtName} • Fast 15-30 Min Dispatch`}
                districtName={districtName}
              />

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {districtObj.description}
              </p>

              {/* Coverage Badges */}
              <div className="bg-dark-900 p-4 rounded-2xl border border-dark-800 space-y-2">
                <p className="text-xs font-bold text-red-400 uppercase tracking-wider">Fast 15-30 Min Doorstep & Highway Dispatch in {districtName}:</p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-300">
                  {districtObj.coverageAreas.map((loc, lIdx) => (
                    <span key={lIdx} className="px-2.5 py-1 rounded-lg bg-dark-800 border border-dark-700 font-semibold flex items-center">
                      <MapPin className="w-3 h-3 text-red-400 mr-1" />
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Booking Form Column */}
            <div className="lg:col-span-5">
              <div className="bg-dark-800/90 border border-red-500/30 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-md">
                <h2 className="text-xl font-bold text-white mb-4 text-center">
                  Book Recovery in <span className="text-red-400">{districtName}</span>
                </h2>
                <BookingForm
                  initialPickup={`${districtName} Breakdown Location`}
                  isSidebar={true}
                  isRecovery={true}
                  defaultBreakdownType="Car Recovery"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Phase 5.4 Live Assistance Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <LiveEmergencyAssist />
        </section>

        {/* Common Problems We Handle */}
        <section className="py-12 bg-dark-900 border-t border-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Common Breakdown Issues We Handle in <span className="text-amber-400">{districtName}</span>
              </h2>
              <p className="text-gray-400 text-sm mt-2">
                Our mobile recovery trucks carry diagnostic gear, booster packs, jacks, winches, and fuel cans.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonProblems.map((prob, idx) => (
                <div key={idx} className="bg-dark-800/80 border border-dark-700/80 p-5 rounded-2xl shadow-xl flex items-start space-x-3">
                  <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 flex-shrink-0">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">{prob.title}</h3>
                    <p className="text-xs text-gray-400">{prob.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Areas */}
        <CoverageAreas areas={districtObj.coverageAreas} districtName={districtName} />

        {/* Highway Coverage */}
        <HighwayCoverage highways={districtObj.highways} districtName={districtName} />

        {/* Supported Vehicles */}
        <SupportedVehicles />

        {/* Recovery Fleet */}
        <RecoveryFleet />

        {/* Recovery Process */}
        <RecoveryProcess />

        {/* Pricing Info Section */}
        <section className="py-12 bg-dark-950 border-t border-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-2xl font-extrabold text-white">
                Transparent Recovery Rates: <span className="text-red-400">{districtName}</span>
              </h2>
            </div>

            <div className="bg-dark-900/90 border border-red-500/40 p-6 rounded-2xl max-w-2xl mx-auto text-center shadow-2xl space-y-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Base Call-Out Hook Fee</p>
              <p className="text-4xl font-black text-red-400">{districtObj.pricing?.callOutFee || '₹800 Base Hook Fee'}</p>
              
              <div className="grid grid-cols-2 gap-4 text-xs text-gray-300 pt-4 border-t border-dark-800 text-left">
                <div>
                  <span className="text-gray-400">Towing Distance Rate:</span>
                  <p className="font-bold text-white">{districtObj.pricing?.perKmRate || '₹40 / Km'}</p>
                </div>
                <div>
                  <span className="text-gray-400">Night Allowance (10 PM-6 AM):</span>
                  <p className="font-bold text-white">{districtObj.pricing?.nightCharges || '₹200'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Districts Internal Links */}
        <section className="py-12 bg-dark-900 border-t border-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-2xl font-extrabold text-white">
                Vehicle Recovery in <span className="text-amber-400">Nearby Districts</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {nearbySlugs.map((slug, idx) => {
                const name = slug.charAt(0).toUpperCase() + slug.slice(1)
                return (
                  <Link
                    key={idx}
                    to={`/vehicle-recovery/${slug}`}
                    className="bg-dark-800/80 border border-dark-700/80 hover:border-red-500/50 p-4 rounded-2xl transition-all hover:-translate-y-1 shadow-lg flex items-center justify-between group"
                  >
                    <span className="text-xs font-bold text-white group-hover:text-red-400 transition-colors">
                      Recovery in {name}
                    </span>
                    <ChevronRight className="w-4 h-4 text-red-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <CustomerReviews
          reviews={districtObj.reviews || []}
          districtName={`Vehicle Recovery ${districtName}`}
          variant="dark"
        />

        {/* FAQs */}
        <FAQSection
          faqs={districtObj.faq || []}
          districtName={`Vehicle Recovery ${districtName}`}
          variant="dark"
        />

        {/* Final CTA */}
        <FinalCTA districtName={`Vehicle Recovery ${districtName}`} />
      </main>

      <Footer />
    </div>
  )
}

export default DistrictRecoveryPage
