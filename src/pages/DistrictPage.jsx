import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'
import { districts, getDistrictBySlug, getDistrictUrl } from '../data/districts'
import { getDistrictContent, generalFaqs } from '../data/districtContent'
import { usePageSeo, SITE_URL } from '../utils/seo'

// District-specific components
import DistrictHero from '../components/district/DistrictHero'
import TrustBar from '../components/district/TrustBar'
import DistrictOverview from '../components/district/DistrictOverview'
import PopularRoutes from '../components/district/PopularRoutes'
import FareTable from '../components/district/FareTable'
import PickupDropLocations from '../components/district/PickupDropLocations'
import TransportHubs from '../components/district/TransportHubs'
import TouristAttractions from '../components/district/TouristAttractions'
import IndustriesSection from '../components/district/IndustriesSection'
import NearbyDistricts from '../components/district/NearbyDistricts'
import WhySamayas from '../components/district/WhySamayas'
import CustomerReviews from '../components/district/CustomerReviews'
import FAQSection from '../components/district/FAQSection'
import FinalCTA from '../components/district/FinalCTA'
import RelatedServices from '../components/district/RelatedServices'

const DISTRICT_PREFIX = 'one-way-taxi-'

const DistrictPage = () => {
  const { districtSlug, pageSlug } = useParams()

  // Extract district slug from URL
  const slug = districtSlug
    ? districtSlug
    : pageSlug?.startsWith(DISTRICT_PREFIX)
    ? pageSlug.slice(DISTRICT_PREFIX.length)
    : pageSlug
  const district = slug ? getDistrictBySlug(slug) : null

  // Get enhanced content (may be null for districts not yet enhanced)
  const content = slug ? getDistrictContent(slug) : null

  if (!district) {
    return <Navigate to="/service-areas" replace />
  }

  const displayName = district.alias
    ? `${district.name} (${district.alias})`
    : district.name

  const shortName = district.alias || district.name

  // Merge enhanced routes with basic routes (backward compat)
  const routeData = content?.routes || district.routes

  // Nearby districts
  const nearbyDistricts = district.nearby
    .map((s) => districts.find((d) => d.slug === s))
    .filter(Boolean)

  // ─────────── SEO ───────────

  const pageTitle = content?.metaTitle
    || `One-Way Taxi ${shortName} | SAMAYAS Tamil Nadu`

  const pageDescription = content?.metaDescription
    || `Book one-way taxi in ${district.name}, Tamil Nadu. Acting driver, tours & 24/7 recovery. Call SAMAYAS – reliable rides across TN.`

  // FAQ data for schema (merge district + general)
  const districtFaqs = content?.faqs || [
    {
      q: `What is the one-way taxi fare from ${district.name}?`,
      a: `The one-way taxi fare from ${district.name} depends on the destination and vehicle type (Hatchback, Sedan, SUV). Contact SAMAYAS for the best affordable rates.`,
    },
    {
      q: `How do I book a taxi from ${district.name}?`,
      a: `You can easily book a taxi from ${district.name} by calling us at +91-98948-09439, sending a WhatsApp message, or using the booking form on our website.`,
    },
    {
      q: `Is the acting driver service available in ${district.name}?`,
      a: `Yes, SAMAYAS provides professional acting drivers in ${district.name} for both local and outstation trips in your own vehicle.`,
    },
    {
      q: `What vehicles are available for one-way taxi from ${district.name}?`,
      a: `We offer a wide range of vehicles for one-way trips from ${district.name}, including Hatchbacks (Swift, WagonR), Sedans (Dzire, Amaze), SUVs (Creta, Ertiga), and Premium SUVs (Innova Crysta, Innova Hycross).`,
    },
  ]
  const allFaqsForSchema = [...districtFaqs, ...generalFaqs]

  // Aggregate rating for schema (compute from reviews if available)
  const reviews = content?.reviews || []
  const avgRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : null

  // Build JSON-LD
  const jsonLd = [
    // LocalBusiness
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'SAMAYAS',
      description: `One-way taxi and transportation services in ${district.name}, Tamil Nadu.`,
      url: `${SITE_URL}${getDistrictUrl(district.slug)}`,
      telephone: '+91-98948-09439',
      email: 'samayasprem@gmail.com',
      areaServed: [
        { '@type': 'AdministrativeArea', name: district.name },
        { '@type': 'State', name: 'Tamil Nadu' },
      ],
      priceRange: '$$',
      ...(avgRating && reviews.length > 0
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
      mainEntity: allFaqsForSchema.map((faq) => ({
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
          name: `${district.name} Taxi Service`,
          item: `${SITE_URL}${getDistrictUrl(district.slug)}`,
        },
      ],
    },
    // Service
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Taxi Service',
      provider: {
        '@type': 'LocalBusiness',
        name: 'SAMAYAS',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: district.name,
      },
    },
    // Individual Review schema (if reviews exist)
    ...(reviews.length > 0
      ? reviews.map((r) => ({
          '@context': 'https://schema.org',
          '@type': 'Review',
          reviewBody: r.text,
          author: { '@type': 'Person', name: r.name },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: r.rating,
            bestRating: '5',
          },
          itemReviewed: {
            '@type': 'LocalBusiness',
            name: 'SAMAYAS',
          },
        }))
      : []),
    // TouristAttraction schema (if attractions exist)
    ...(content?.touristAttractions
      ? content.touristAttractions.map((a) => ({
          '@context': 'https://schema.org',
          '@type': 'TouristAttraction',
          name: a.name,
          description: a.description,
          address: {
            '@type': 'PostalAddress',
            addressRegion: district.name,
            addressCountry: 'IN',
          },
        }))
      : []),
  ]

  usePageSeo({
    title: pageTitle,
    description: pageDescription,
    path: getDistrictUrl(district.slug),
    jsonLd,
    summary: `One-way taxi and acting driver services in ${district.name}, Tamil Nadu by SAMAYAS.`,
  })

  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Service Areas', to: '/service-areas' },
    { label: `${district.name} Taxi Service`, to: getDistrictUrl(district.slug) },
  ]

  // ─────────── RENDER ───────────

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col">
      <Navbar variant="inner" />

      <article className="flex-1">

        {/* § 1+2 — Hero with Breadcrumb and Booking Form */}
        <DistrictHero
          district={{
            name: district.name,
            alias: district.alias,
            heroTagline: content?.heroTagline || `Book your one-way taxi from ${district.name} with SAMAYAS. Reliable rides across Tamil Nadu at affordable fares.`,
          }}
          displayName={displayName}
          breadcrumbItems={breadcrumbItems}
        >
          <BookingForm defaultPickup={district.name} />
        </DistrictHero>

        {/* § 3 — Trust Bar */}
        <TrustBar />

        {/* § 4 — District Overview */}
        <DistrictOverview
          districtName={district.name}
          overview={content?.overview}
          overviewHighlights={content?.overviewHighlights}
        />

        {/* § 5 — Popular Routes */}
        <PopularRoutes
          districtName={shortName}
          routes={routeData}
        />

        {/* § 6 — Fare Table */}
        <FareTable
          districtName={shortName}
          fareTable={content?.fareTable}
        />

        {/* § 7 — Pickup & Drop Locations */}
        <PickupDropLocations
          districtName={district.name}
          pickupLocations={content?.pickupLocations}
          dropLocations={content?.dropLocations}
        />

        {/* § 8 — Transport Hubs */}
        <TransportHubs
          districtName={district.name}
          transportHubs={content?.transportHubs}
        />

        {/* § 9 — Tourist Attractions */}
        <TouristAttractions
          districtName={shortName}
          attractions={content?.touristAttractions}
        />

        {/* § 10 — Industries & Business Travel */}
        <IndustriesSection
          districtName={shortName}
          industries={content?.industries}
          businessInfo={content?.businessInfo}
        />

        {/* § 11 — Nearby Districts */}
        <NearbyDistricts nearbyDistricts={nearbyDistricts} />

        {/* § 12 — Why Choose SAMAYAS */}
        <WhySamayas districtName={shortName} />

        {/* § 13 — Customer Reviews */}
        <CustomerReviews reviews={reviews} />

        {/* § 14 — FAQ */}
        <FAQSection
          districtFaqs={districtFaqs}
          generalFaqs={generalFaqs}
        />

        {/* § 15 — Final CTA */}
        <FinalCTA districtName={shortName} />

        {/* § 16 — Related Services */}
        <RelatedServices />

      </article>

      <Footer />
    </div>
  )
}

export default DistrictPage
