import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin, ArrowUp, Heart } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth',
      block: 'start'
    })
  }

  const quickLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Contact', to: 'contact' },
    { name: 'Book Now', to: 'booking' }
  ]

  const services = [
    'Acting Driver',
    'Tours & Travels',
    'One-Way Taxi',
    'Recovery Services'
  ]

  const socialLinks = [
    {
      icon: Facebook,
      link: '#',
      color: 'hover:bg-blue-600'
    },
    {
      icon: Instagram,
      link: '#',
      color: 'hover:bg-pink-600'
    },
    {
      icon: MessageCircle,
      link: 'https://wa.me/919894809439',
      color: 'hover:bg-green-600'
    }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
      {/* Wave Decoration */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-50"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-6"
            >
              <img 
                src="/logo.png" 
                alt="SAMAYAS Logo" 
                className="w-24 h-24 object-contain"
              />
              <span className="text-3xl font-bold" style={{ color: '#D4AF37' }}>
                SAMAYAS
              </span>
            </motion.div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for reliable transportation services. We're committed to making every journey safe, comfortable, and memorable.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target={social.link.startsWith('http') ? '_blank' : '_self'}
                  rel={social.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={800}
                    offset={-100}
                    className="text-gray-300 hover:text-accent-400 transition-colors cursor-pointer flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-400 rounded-full"></span>
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-300 hover:text-accent-400 transition-colors flex items-center space-x-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent-400 rounded-full"></span>
                  <span>{service}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-300">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent-400" />
                <div>
                  <a href="tel:+919894809439" className="hover:text-accent-400 transition-colors">
                    +91 98948 09439
                  </a>
                  <br />
                  <a href="tel:+917010788781" className="hover:text-accent-400 transition-colors">
                    +91 70107 88781
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent-400" />
                <div>
                  <a href="mailto:samayasprem@gmail.com" className="hover:text-accent-400 transition-colors">
                    samayasprem@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent-400" />
                <div>
                  Chennai, Trichy, Tamil Nadu, India
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm flex items-center">
              <span>© 2025 SAMAYAS. Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-1"
              >
                <Heart className="w-4 h-4 text-red-500 fill-current inline" />
              </motion.span>
              <span>for better journeys.</span>
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <a 
                href="https://www.nabutechnologies.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent-400 transition-colors"
              >
                Powered by Nabu Technologies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:shadow-accent-500/50 transition-all"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  )
}

export default Footer

