/**
 * Analytics Utility
 * Handles pushing events to Google Tag Manager's dataLayer.
 * During development, it logs events to the console instead to keep analytics clean.
 */

const isDev = import.meta.env.DEV

/**
 * Ensures the dataLayer exists before pushing
 */
const getWindowDataLayer = () => {
  window.dataLayer = window.dataLayer || []
  return window.dataLayer
}

/**
 * Parses and stores UTM parameters, referrer, and landing page on initial load.
 */
export const initSessionAnalytics = () => {
  if (sessionStorage.getItem('_analytics_initialized')) return;

  const urlParams = new URLSearchParams(window.location.search);
  const sessionData = {
    landing_page: window.location.pathname,
    referrer: document.referrer || 'direct',
    traffic_source: urlParams.get('utm_source') || 'direct',
    traffic_medium: urlParams.get('utm_medium') || 'none',
    campaign: urlParams.get('utm_campaign') || 'none',
    gclid: urlParams.get('gclid') || null,
    fbclid: urlParams.get('fbclid') || null,
    device_type: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
    screen_width: window.innerWidth,
    language: navigator.language
  };

  sessionStorage.setItem('_analytics_session', JSON.stringify(sessionData));
  sessionStorage.setItem('_analytics_initialized', 'true');
}

/**
 * Retrieves the stored session data.
 */
export const getSessionAnalytics = () => {
  try {
    return JSON.parse(sessionStorage.getItem('_analytics_session') || '{}');
  } catch {
    return {};
  }
}

/**
 * Push an event to GTM dataLayer
 * Automatically appends session data to every event.
 */
export const trackEvent = (eventName, params = {}) => {
  const sessionData = getSessionAnalytics();
  const payload = {
    event: eventName,
    ...sessionData,
    ...params,
    timestamp: new Date().toISOString()
  };

  if (isDev) {
    console.log(`[Analytics Event]: ${eventName}`, payload)
    return
  }

  try {
    const dl = getWindowDataLayer()
    dl.push(payload)
  } catch (error) {
    console.error('Analytics tracking failed:', error)
  }
}

/**
 * Debounce helper for funnel events (e.g. typing in map inputs)
 */
const debounceTimers = {};
export const debounceEvent = (eventName, params, delay = 1000) => {
  if (debounceTimers[eventName]) {
    clearTimeout(debounceTimers[eventName]);
  }
  debounceTimers[eventName] = setTimeout(() => {
    trackEvent(eventName, params);
  }, delay);
}

/**
 * Specialized helper for formatting booking events consistently
 */
export const trackBookingEvent = (eventName, bookingData) => {
  const {
    pickupLocation,
    dropLocation,
    tripType,
    vehicleType,
    finalAmount,
    distance,
    date,
    returnDate,
    source,
    landingPage,
    referrer,
    pickup_lat,
    pickup_lng,
    destination_lat,
    destination_lng,
    duration_minutes,
    booking_id,
    currency
  } = bookingData

  trackEvent(eventName, {
    pickup_city: pickupLocation,
    destination_city: dropLocation,
    trip_type: tripType,
    vehicle: vehicleType,
    fare: finalAmount,
    distance_km: distance,
    travel_date: date,
    return_date: returnDate || null,
    booking_source: source || 'direct',
    // New exact data points
    pickup_lat: pickup_lat || null,
    pickup_lng: pickup_lng || null,
    destination_lat: destination_lat || null,
    destination_lng: destination_lng || null,
    duration_minutes: duration_minutes || null,
    booking_id: booking_id || null,
    currency: currency || 'INR',
    // Fallbacks if session storage is missing
    landing_page: landingPage || window.location.pathname,
    referrer: referrer || document.referrer,
    current_url: window.location.href
  })
}

/**
 * Track page views dynamically (SPA)
 */
export const trackPageView = (url, pageTitle) => {
  trackEvent('virtual_page_view', {
    page_location: window.location.origin + url,
    page_path: url,
    page_title: pageTitle || document.title,
    current_url: window.location.href
  })
}

/**
 * Push Google Ads Conversion dynamically
 */
export const trackAdsConversion = (conversionLabel, transactionId = null, value = null) => {
  if (isDev) {
    console.log(`[Ads Conversion]: Label: ${conversionLabel}, Value: ${value}`)
    return
  }

  try {
    const dl = getWindowDataLayer()
    const payload = {
      event: 'ads_conversion',
      send_to: `${import.meta.env.VITE_ADS_CONVERSION_ID}/${conversionLabel}`
    }
    if (value) payload.value = value
    if (transactionId) payload.transaction_id = transactionId
    if (value) payload.currency = 'INR'

    dl.push(payload)
  } catch (error) {
    console.error('Ads conversion tracking failed:', error)
  }
}
