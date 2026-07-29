import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView, initSessionAnalytics } from '../utils/analytics'

/**
 * Hook to automatically track SPA page views on route change
 */
const usePageTracking = () => {
  const location = useLocation()

  useEffect(() => {
    // Initialize session data (runs once on first load)
    initSessionAnalytics()
    // Determine a dynamic page title based on the path
    let pageTitle = document.title
    const path = location.pathname

    if (path === '/') pageTitle = 'Home'
    else if (path === '/service-areas') pageTitle = 'Service Areas'
    else if (path.startsWith('/one-way-taxi-')) {
      const district = path.replace('/one-way-taxi-', '')
      // Capitalize first letter
      pageTitle = `Taxi in ${district.charAt(0).toUpperCase() + district.slice(1)}`
    }

    // Trigger virtual page view event in GTM
    trackPageView(location.pathname + location.search, pageTitle)

    // Scroll to top on route change (UX best practice), but NOT for hash links
    if (!location.hash) {
      window.scrollTo(0, 0)
    }
  }, [location])
}

export default usePageTracking
