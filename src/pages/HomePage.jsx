import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import BookingForm from '../components/BookingForm'
import Footer from '../components/Footer'
import FestivalBanner from '../components/FestivalBanner'
import { usePageSeo } from '../utils/seo'

const HomePage = () => {
  usePageSeo({
    title: 'SAMAYAS | One-Way Taxi & Acting Driver in Tamil Nadu',
    description:
      'One-way taxi, acting driver & tours across Tamil Nadu. 24/7 recovery. Book online – SAMAYAS.',
    path: '/',
  })

  return (
    <div className="relative">
      <FestivalBanner />
      <Navbar variant="home" />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
        <BookingForm />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
