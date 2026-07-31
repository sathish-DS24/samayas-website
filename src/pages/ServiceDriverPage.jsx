import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { UserCheck, Clock, ShieldCheck, CheckCircle, ArrowRight, DollarSign, Sparkles } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'
import DriverHero from '../components/driver/DriverHero'
import DriverVerification from '../components/driver/DriverVerification'
import HowBookingWorks from '../components/driver/HowBookingWorks'
import CrossServiceBanner from '../components/driver/CrossServiceBanner'
import CustomerReviews from '../components/district/CustomerReviews'
import FAQSection from '../components/district/FAQSection'
import FinalCTA from '../components/district/FinalCTA'
import { driverServicesDataset } from '../data/driverServicesMaster'
import { usePageSeo, SITE_URL } from '../utils/seo'

const ServiceDriverPage = ({ serviceObj }) => {
  if (!serviceObj) return <Navigate to="/acting-driver" replace />

  // SEO
  const pageTitle = serviceObj.seo?.title || `${serviceObj.serviceName} | SAMAYAS`
  const pageDescription = serviceObj.seo?.description || serviceObj.description

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `SAMAYAS ${serviceObj.serviceName}`,
      description: pageDescription,
      url: `${SITE_URL}/acting-driver/${serviceObj.slug}`,
      provider: {
        '@type': 'LocalBusiness',
        name: 'SAMAYAS',
        url: SITE_URL,
        telephone: '+91-98948-09439'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Acting Driver', item: `${SITE_URL}/acting-driver` },
        { '@type': 'ListItem', position: 3, name: serviceObj.shortName, item: `${SITE_URL}/acting-driver/${serviceObj.slug}` }
      ]
    }
  ]

  usePageSeo({
    title: pageTitle,
    description: pageDescription,
    path: `/acting-driver/${serviceObj.slug}`,
    jsonLd
  })

  const otherServices = driverServicesDataset.filter((s) => s.slug !== serviceObj.slug)

  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans selection:bg-amber-500 selection:text-dark-950">
      <Navbar />

      <main className="relative pt-24 sm:pt-28 pb-16">
        
        {/* Service Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <DriverHero
                title={serviceObj.serviceName}
                subtitle={serviceObj.tagline}
              />

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {serviceObj.description}
              </p>

              {/* Ideal For Badges */}
              {serviceObj.idealFor && (
                <div className="bg-dark-900 p-4 rounded-2xl border border-dark-800 space-y-2">
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">Ideal For:</p>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-300">
                    {serviceObj.idealFor.map((item, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-dark-800 border border-dark-700 font-semibold flex items-center">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400 mr-1.5" />
                        {item}
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
                  Book <span className="text-amber-400">{serviceObj.shortName}</span>
                </h2>
                <BookingForm
                  isSidebar={true}
                  isDriver={true}
                  defaultDriverType={serviceObj.shortName}
                />
              </div>
            </div>

          </div>
        </section>

        {/* Benefits Section */}
        {serviceObj.benefits && (
          <section className="py-12 bg-dark-900 border-t border-dark-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Key Benefits of <span className="text-amber-400">{serviceObj.shortName}</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviceObj.benefits.map((b, idx) => (
                  <div key={idx} className="bg-dark-800/80 border border-dark-700/80 p-6 rounded-2xl shadow-xl">
                    <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 w-fit mb-3">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{b.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pricing Card */}
        {serviceObj.pricing && (
          <section className="py-12 bg-dark-950 border-t border-dark-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="text-2xl font-extrabold text-white">
                  Pricing & Rate Structure: <span className="text-amber-400">{serviceObj.shortName}</span>
                </h2>
              </div>

              <div className="bg-dark-900/90 border border-amber-500/40 p-6 rounded-2xl max-w-2xl mx-auto text-center shadow-2xl space-y-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Base Package Rate</p>
                <p className="text-4xl font-black text-amber-400">{serviceObj.pricing.baseRate} <span className="text-sm font-semibold text-gray-300">/ {serviceObj.pricing.unit}</span></p>
                
                <div className="grid grid-cols-2 gap-4 text-xs text-gray-300 pt-4 border-t border-dark-800 text-left">
                  <div>
                    <span className="text-gray-400">Minimum Package:</span>
                    <p className="font-bold text-white">{serviceObj.pricing.minimumBooking}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Overtime Rate:</span>
                    <p className="font-bold text-white">{serviceObj.pricing.overtimeRate}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Driver Verification */}
        <DriverVerification />

        {/* How Booking Works */}
        <HowBookingWorks />

        {/* Cross Service Banner */}
        <CrossServiceBanner />

        {/* Related Driver Services */}
        <section className="py-12 bg-dark-900 border-t border-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-2xl font-extrabold text-white">
                Explore Other <span className="text-amber-400">Driver Services</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherServices.slice(0, 6).map((s, idx) => (
                <Link
                  key={idx}
                  to={`/acting-driver/${s.slug}`}
                  className="bg-dark-800/80 border border-dark-700/80 hover:border-amber-500/50 p-5 rounded-2xl transition-all hover:-translate-y-1 shadow-lg flex items-center justify-between group"
                >
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      {s.serviceName}
                    </h3>
                    <p className="text-xs text-amber-400 font-semibold mt-1">{s.pricing?.baseRate}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <CustomerReviews
          reviews={serviceObj.reviews || []}
          districtName={serviceObj.serviceName}
          variant="dark"
        />

        {/* FAQs */}
        <FAQSection
          faqs={serviceObj.faq || []}
          districtName={serviceObj.serviceName}
          variant="dark"
        />

        {/* Final CTA */}
        <FinalCTA districtName={serviceObj.serviceName} />
      </main>

      <Footer />
    </div>
  )
}

export default ServiceDriverPage
