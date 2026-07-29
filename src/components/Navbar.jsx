import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = ({ variant = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const hashBase = isHome ? '' : '/'

  const showSolidBg = variant === 'inner' || isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: 'Home', href: isHome ? '#home' : '/' },
    { name: 'About', href: `${hashBase}#about` },
    { name: 'Services', href: `${hashBase}#services` },
    { name: 'Service Areas', href: '/service-areas', isRoute: true },
    { name: 'Contact', href: `${hashBase}#contact` },
  ]

  const linkClass = `cursor-pointer font-medium transition-colors duration-300 hover:text-accent-500 ${
    showSolidBg ? 'text-gray-700' : 'text-white'
  }`

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidBg
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <img
                src="/logo.webp"
                alt="SAMAYAS Logo"
                className="w-20 h-20 object-contain"
              />
              <span className="text-3xl font-bold" style={{ color: '#D4AF37' }}>
                SAMAYAS
              </span>
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link key={link.name} to={link.href} className={linkClass}>
                  {link.name}
                </Link>
              ) : (
                <a key={link.name} href={link.href} className={linkClass}>
                  {link.name}
                </a>
              )
            )}
            <a href={`${hashBase}#booking`}>
              <motion.button
                onClick={() => import('../utils/analytics').then(({ trackEvent }) => trackEvent('cta_clicked', { button_name: 'Navbar Book Now' }))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                Book Now
              </motion.button>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              showSolidBg ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors cursor-pointer font-medium"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors cursor-pointer font-medium"
                  >
                    {link.name}
                  </a>
                )
              )}
              <a
                href={`${hashBase}#booking`}
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  import('../utils/analytics').then(({ trackEvent }) => trackEvent('cta_clicked', { button_name: 'Mobile Navbar Book Now' }))
                }}
              >
                <button className="w-full px-6 py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg shadow-md">
                  Book Now
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
