import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getRouteBySlug, getRouteUrl } from '../data/routes'
import { getRouteContent } from '../data/routeContent'
import { usePageSeo, SITE_URL } from '../utils/seo'

// Route Sections
import RouteHero from '../components/route/RouteHero'
import RouteOverview from '../components/route/RouteOverview'
import RouteSummaryCards from '../components/route/RouteSummaryCards'
import TaxiFareTable from '../components/route/TaxiFareTable'
import RouteMapSection from '../components/route/RouteMapSection'
import PickupDropSection from '../components/route/PickupDropSection'
import RoutePlacesOnWay from '../components/route/RoutePlacesOnWay'
import ExploreAlongRoute from '../components/route/ExploreAlongRoute'
import TollInfoSection from '../components/route/TollInfoSection'
import NearbyRoutesSection from '../components/route/NearbyRoutesSection'

// Reused Existing Components
import WhySamayas from '../components/district/WhySamayas'
import CustomerReviews from '../components/district/CustomerReviews'
import FAQSection from '../components/district/FAQSection'
import FinalCTA from '../components/district/FinalCTA'

const RoutePage = () => {
  const { routeSlug } = useParams()

  const routeObj = getRouteBySlug(routeSlug)
  const content = getRouteContent(routeSlug)

  if (!routeObj || !content) {
    return <Navigate to="/service-areas" replace />
  }

  // ─────────── SEO ───────────
  const pageTitle = content.seoTitle || `${content.from} to ${content.to} One-Way Taxi | SAMAYAS`
  const pageDescription = content.metaDescription || `Book one-way taxi from ${content.from} to ${content.to} with SAMAYAS. Transparent rates, zero return fare, 24/7 service.`
  const routeUrlPath = getRouteUrl(routeObj.slug)

  // FAQ Data for Schema
  const faqsForSchema = content.faqs || []
  
  // Reviews for Schema
  const reviews = content.reviews || []
  const avgRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : '5.0'

  // Build JSON-LD
  const jsonLd = [
    // LocalBusiness / TaxiService
    {
      '@context': 'https://schema.org',
      '@type': 'TaxiService',
      name: `SAMAYAS ${content.from} to ${content.to} Taxi Service`,
      description: content.metaDescription,
      url: `${SITE_URL}${routeUrlPath}`,
      telephone: '+91-98948-09439',
      email: 'samayasprem@gmail.com',
      provider: {
        '@type': 'LocalBusiness',
        name: 'SAMAYAS',
        url: SITE_URL,
        telephone: '+91-98948-09439',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: content.from },
        { '@type': 'AdministrativeArea', name: content.to },
        { '@type': 'State', name: 'Tamil Nadu' },
      ],
      priceRange: '$$',
      ...(reviews.length > 0
        ? {
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: avgRating,
              reviewCount: reviews.length,
              bestRating: '5',
              worstRating: '1',
            },
          }
        : {}),
    },
    // FAQPage
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqsForSchema.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
    // BreadcrumbList
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Service Areas',
          item: `${SITE_URL}/service-areas`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: `${content.from} to ${content.to} Taxi`,
          item: `${SITE_URL}${routeUrlPath}`,
        },
      ],
    },
  ]

  usePageSeo({
    title: pageTitle,
    description: pageDescription,
    path: routeUrlPath,
    jsonLd,
  })

  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans selection:bg-amber-500 selection:text-dark-950">
      <Navbar />

      <main className="relative">
        {/* Section 1: Hero */}
        <RouteHero content={content} />

        {/* Section 2: Route Overview */}
        <RouteOverview content={content} />

        {/* Section 3: Route Summary Cards */}
        <RouteSummaryCards content={content} />

        {/* Section 4: Taxi Fare Table */}
        <TaxiFareTable content={content} />

        {/* Section 5: Google Route Map & Highways */}
        <RouteMapSection content={content} />

        {/* Section 6 & 7: Pickup & Drop Locations */}
        <PickupDropSection content={content} />

        {/* Section 8: Places on the Way */}
        <RoutePlacesOnWay content={content} />

        {/* Dynamic Explore Along This Route Section */}
        <ExploreAlongRoute content={content} />

        {/* Section 9: Toll Information */}
        <TollInfoSection content={content} />

        {/* Section 10: Reused Why Choose SAMAYAS */}
        <WhySamayas districtName={`${content.from} to ${content.to}`} variant="dark" />

        {/* Section 11: Nearby Popular Routes */}
        <NearbyRoutesSection content={content} />

        {/* Section 12: Reused Customer Reviews */}
        <CustomerReviews reviews={content.reviews} districtName={`${content.from} to ${content.to}`} variant="dark" />

        {/* Section 13: Reused FAQs */}
        <FAQSection faqs={content.faqs} districtName={`${content.from} to ${content.to}`} variant="dark" />

        {/* Section 14: Reused Final CTA */}
        <FinalCTA districtName={`${content.from} to ${content.to}`} />
      </main>

      <Footer />
    </div>
  )
}

export default RoutePage
