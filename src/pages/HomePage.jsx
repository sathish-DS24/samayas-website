import React, { lazy, Suspense } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { usePageSeo } from '../utils/seo'

// Lazy-load below-the-fold components to keep initial bundle ultra-lean for instant FCP/LCP
const About = lazy(() => import('../components/About'))
const Services = lazy(() => import('../components/Services'))
const PopularRoutesSection = lazy(() => import('../components/home/PopularRoutesSection'))
const Contact = lazy(() => import('../components/Contact'))
const BookingForm = lazy(() => import('../components/BookingForm'))
const Footer = lazy(() => import('../components/Footer'))

const SectionFallback = () => <div className="min-h-[100px]" />

const HomePage = () => {
  usePageSeo({
    title: 'SAMAYAS | One-Way Taxi & Acting Driver in Tamil Nadu',
    description:
      'One-way taxi, acting driver & tours across Tamil Nadu. 24/7 recovery. Book online – SAMAYAS.',
    path: '/',
  })

  return (
    <div className="relative">
      <Navbar variant="home" />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Services />
          <PopularRoutesSection />
          <Contact />
          <BookingForm />
          <Footer />
        </Suspense>
      </main>
    </div>
  )
}

export default HomePage
