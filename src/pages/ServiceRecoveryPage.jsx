import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Truck, ShieldCheck, Clock, CheckCircle2, ArrowRight, DollarSign, Sparkles, AlertTriangle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'
import RecoveryHero from '../components/recovery/RecoveryHero'
import LiveEmergencyAssist from '../components/recovery/LiveEmergencyAssist'
import SupportedVehicles from '../components/recovery/SupportedVehicles'
import RecoveryFleet from '../components/recovery/RecoveryFleet'
import RecoveryProcess from '../components/recovery/RecoveryProcess'
import CustomerReviews from '../components/district/CustomerReviews'
import FAQSection from '../components/district/FAQSection'
import FinalCTA from '../components/district/FinalCTA'
import { recoveryServicesDataset } from '../data/recoveryServicesMaster'
import { usePageSeo, SITE_URL } from '../utils/seo'

const ServiceRecoveryPage = ({ serviceObj }) => {
  if (!serviceObj) return <Navigate to="/vehicle-recovery" replace />

  // SEO
  const pageTitle = serviceObj.seo?.title || `${serviceObj.serviceName} | SAMAYAS`
  const pageDescription = serviceObj.seo?.description || serviceObj.description

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'EmergencyService',
      name: `SAMAYAS ${serviceObj.serviceName}`,
      description: pageDescription,
      url: `${SITE_URL}/vehicle-recovery/${serviceObj.slug}`,
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
        { '@type': 'ListItem', position: 2, name: 'Vehicle Recovery', item: `${SITE_URL}/vehicle-recovery` },
        { '@type': 'ListItem', position: 3, name: serviceObj.shortName, item: `${SITE_URL}/vehicle-recovery/${serviceObj.slug}` }
      ]
    }
  ]

  usePageSeo({
    title: pageTitle,
    description: pageDescription,
    path: `/vehicle-recovery/${serviceObj.slug}`,
    jsonLd
  })

  const otherServices = recoveryServicesDataset.filter((s) => s.slug !== serviceObj.slug)

  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans selection:bg-red-500 selection:text-white">
      <Navbar />

      <main className="relative pt-24 sm:pt-28 pb-16">
        
        {/* Service Recovery Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <RecoveryHero
                title={serviceObj.serviceName}
                subtitle={serviceObj.tagline}
              />

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {serviceObj.description}
              </p>

              {/* Common Problems Badges */}
              {serviceObj.commonProblems && (
                <div className="bg-dark-900 p-4 rounded-2xl border border-dark-800 space-y-2">
                  <p className="text-xs font-bold text-red-400 uppercase tracking-wider">Common Issues We Resolve:</p>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-300">
                    {serviceObj.commonProblems.map((prob, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-dark-800 border border-dark-700 font-semibold flex items-center">
                        <AlertTriangle className="w-3.5 h-3.5 text-red-400 mr-1.5" />
                        {prob}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Booking Form Column */}
            <div className="lg:col-span-5">
              <div className="bg-dark-800/90 border border-red-500/30 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-md">
                <h2 className="text-xl font-bold text-white mb-4 text-center">
                  Book <span className="text-red-400">{serviceObj.shortName}</span>
                </h2>
                <BookingForm
                  isSidebar={true}
                  isRecovery={true}
                  defaultBreakdownType={serviceObj.shortName}
                />
              </div>
            </div>

          </div>
        </section>

        {/* Phase 5.4 Live Assistance Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <LiveEmergencyAssist />
        </section>

        {/* Benefits Section */}
        {serviceObj.benefits && (
          <section className="py-12 bg-dark-900 border-t border-dark-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Why Choose <span className="text-red-400">{serviceObj.shortName}</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {serviceObj.benefits.map((b, idx) => (
                  <div key={idx} className="bg-dark-800/80 border border-dark-700/80 p-6 rounded-2xl shadow-xl">
                    <div className="p-3 rounded-2xl bg-red-500/10 text-red-400 w-fit mb-3">
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

        {/* Supported Vehicles */}
        <SupportedVehicles />

        {/* Recovery Process */}
        <RecoveryProcess />

        {/* Pricing Card */}
        {serviceObj.pricing && (
          <section className="py-12 bg-dark-950 border-t border-dark-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="text-2xl font-extrabold text-white">
                  Pricing & Rate Structure: <span className="text-red-400">{serviceObj.shortName}</span>
                </h2>
              </div>

              <div className="bg-dark-900/90 border border-red-500/40 p-6 rounded-2xl max-w-2xl mx-auto text-center shadow-2xl space-y-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Base Service Fee</p>
                <p className="text-4xl font-black text-red-400">{serviceObj.pricing.callOutFee}</p>
                
                <div className="grid grid-cols-2 gap-4 text-xs text-gray-300 pt-4 border-t border-dark-800 text-left">
                  <div>
                    <span className="text-gray-400">Towing Distance Charge:</span>
                    <p className="font-bold text-white">{serviceObj.pricing.perKmRate}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Night Shift Charge:</span>
                    <p className="font-bold text-white">{serviceObj.pricing.nightCharges}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Related Recovery Services */}
        <section className="py-12 bg-dark-900 border-t border-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-2xl font-extrabold text-white">
                Explore Other <span className="text-red-400">Recovery Services</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherServices.slice(0, 6).map((s, idx) => (
                <Link
                  key={idx}
                  to={`/vehicle-recovery/${s.slug}`}
                  className="bg-dark-800/80 border border-dark-700/80 hover:border-red-500/50 p-5 rounded-2xl transition-all hover:-translate-y-1 shadow-lg flex items-center justify-between group"
                >
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                      {s.serviceName}
                    </h3>
                    <p className="text-xs text-red-400 font-semibold mt-1">{s.pricing?.callOutFee}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-red-400 group-hover:translate-x-1 transition-transform" />
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

export default ServiceRecoveryPage
