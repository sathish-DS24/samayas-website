import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Car, Plane, UserCheck, Wrench, MapPin, Compass } from 'lucide-react'

const Navbar = ({ variant = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
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
    setIsServicesOpen(false)
  }, [location.pathname])

  const serviceItems = [
    { name: 'One-Way Taxi', href: '/one-way-taxi', desc: 'Intercity one-way cab booking', icon: Car },
    { name: 'Airport Taxi', href: '/airport-taxi', desc: '24/7 Airport pickup & drop', icon: Plane },
    { name: 'Acting Driver', href: '/acting-driver', desc: 'Verified driver for your car', icon: UserCheck },
    { name: 'Vehicle Recovery', href: '/vehicle-recovery', desc: '24/7 Towing & roadside rescue', icon: Wrench },
    { name: 'Tour Packages', href: '/tour-packages', desc: 'South India private holiday cabs', icon: Compass },
    { name: 'Service Areas', href: '/service-areas', desc: '38 Tamil Nadu districts', icon: MapPin },
  ]

  const navLinks = [
    { name: 'Home', href: isHome ? '#home' : '/' },
    { name: 'One-Way Taxi', href: '/one-way-taxi', isRoute: true },
    { name: 'Airport Taxi', href: '/airport-taxi', isRoute: true },
    { name: 'Tour Packages', href: '/tour-packages', isRoute: true },
    { name: 'Acting Driver', href: '/acting-driver', isRoute: true },
    { name: 'Vehicle Recovery', href: '/vehicle-recovery', isRoute: true },
    { name: 'Service Areas', href: '/service-areas', isRoute: true },
    { name: 'About', href: `${hashBase}#about` },
    { name: 'Contact', href: `${hashBase}#contact` },
  ]

  const linkClass = `cursor-pointer font-semibold text-xs xl:text-sm whitespace-nowrap transition-colors duration-300 hover:text-accent-500 ${
    showSolidBg ? 'text-gray-800' : 'text-white'
  }`

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidBg
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-1'
          : 'bg-gradient-to-b from-dark-950/90 to-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 flex-nowrap">
          
          {/* Logo Brand */}
          <Link to="/" className="cursor-pointer flex-shrink-0 mr-4">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center space-x-2"
            >
              <img
                src="/logo.webp"
                alt="SAMAYAS Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <span className="text-xl sm:text-2xl font-black tracking-wider whitespace-nowrap" style={{ color: '#D4AF37' }}>
                SAMAYAS
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation Links - Single Line Compact Layout */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-5 flex-shrink-0">
            <Link to="/" className={linkClass}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center space-x-1 ${linkClass}`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-amber-400' : ''}`} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-dark-900/95 border border-dark-700/90 rounded-2xl shadow-2xl p-2 backdrop-blur-xl z-50 space-y-1"
                  >
                    {serviceItems.map((sItem) => {
                      const Icon = sItem.icon
                      return (
                        <Link
                          key={sItem.name}
                          to={sItem.href}
                          className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-dark-800/90 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                              {sItem.name}
                            </p>
                            <p className="text-[10px] text-gray-400 leading-tight">
                              {sItem.desc}
                            </p>
                          </div>
                        </Link>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Quick Links */}
            <Link to="/one-way-taxi" className={linkClass}>
              One-Way Taxi
            </Link>

            <Link to="/airport-taxi" className={linkClass}>
              Airport Taxi
            </Link>

            <Link to="/tour-packages" className={linkClass}>
              Tour Packages
            </Link>

            <Link to="/acting-driver" className={linkClass}>
              Acting Driver
            </Link>

            <Link to="/vehicle-recovery" className={linkClass}>
              Recovery
            </Link>

            <a href={`${hashBase}#about`} className={linkClass}>
              About
            </a>

            <a href={`${hashBase}#contact`} className={linkClass}>
              Contact
            </a>

            {/* Book Now Button */}
            <a href={`${hashBase}#booking`} className="ml-1 xl:ml-2">
              <motion.button
                onClick={() => import('../utils/analytics').then(({ trackEvent }) => trackEvent('cta_clicked', { button_name: 'Navbar Book Now' }))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 xl:px-5 xl:py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-dark-950 font-extrabold text-xs xl:text-sm rounded-full shadow-lg transition-all whitespace-nowrap"
              >
                Book Now
              </motion.button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              showSolidBg ? 'text-gray-800' : 'text-white'
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

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-900 border-t border-dark-800 shadow-2xl"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2.5 text-gray-200 hover:bg-dark-800 hover:text-amber-400 rounded-xl transition-colors font-semibold text-sm cursor-pointer"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2.5 text-gray-200 hover:bg-dark-800 hover:text-amber-400 rounded-xl transition-colors font-semibold text-sm cursor-pointer"
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
                <button className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 font-black rounded-xl shadow-lg text-sm">
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
