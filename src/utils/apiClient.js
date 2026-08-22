import { trackEvent } from './analytics'

const BACKEND_BASE_URL = 'https://api.samayasorg.in/api/v1'
const API_TIMEOUT_MS = 8000

/**
 * Maps frontend vehicle names to backend vehicle enum strings.
 */
export const mapVehicleToBackend = (vehicleType = '') => {
  const str = String(vehicleType).toUpperCase()
  if (str.includes('HATCH')) return 'HATCHBACK'
  if (str.includes('SEDAN')) return 'SEDAN'
  if (str.includes('HYCROSS')) return 'INNOVA HYCROSS'
  if (str.includes('INNOVA')) return 'INNOVA'
  if (str.includes('TRAVELLER') || str.includes('TEMPO')) return 'TEMPO TRAVELLER'
  if (str.includes('SUV')) return 'SUV'
  return 'SEDAN'
}

/**
 * Fetch wrapper with timeout support
 */
const fetchWithTimeout = async (url, options = {}, timeoutMs = API_TIMEOUT_MS) => {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    })
    clearTimeout(id)
    return response
  } catch (error) {
    clearTimeout(id)
    throw error
  }
}

/**
 * Calculates fare via backend API (https://api.samayasorg.in/api/v1/fare/calculate)
 * Returns { success: true, data: { ... } } or { success: false, error: '...' }
 */
export const fetchBackendFare = async ({
  origin,
  destination,
  vehicleType,
  tripType = 'one-way',
  days = 1,
  serviceType = 'one_way_taxi'
}) => {
  const backendVehicle = mapVehicleToBackend(vehicleType)
  const normalizedTripType = tripType === 'round-trip' ? 'round-trip' : 'one-way'
  
  const payload = {
    origin: origin || 'N/A',
    destination: destination || 'N/A',
    vehicle: backendVehicle,
    tripType: normalizedTripType,
    days: days || 1
  }

  try {
    const response = await fetchWithTimeout(`${BACKEND_BASE_URL}/fare/calculate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const result = await response.json()

    if (response.ok && result.success && result.data) {
      const data = result.data
      trackEvent('backend_fare_success', {
        service_type: serviceType,
        origin: data.origin,
        destination: data.destination,
        vehicle: data.vehicle,
        final_amount: data.finalAmount,
        route_distance: data.routeDistanceKm,
        billable_distance: data.billableDistanceKm,
        source: 'backend_api'
      })
      return { success: true, data, source: 'backend_api' }
    } else {
      const errorMsg = result.error?.message || `HTTP ${response.status}`
      trackEvent('backend_fare_failure', {
        service_type: serviceType,
        origin,
        destination,
        error: errorMsg
      })
      trackEvent('fallback_fare_used', {
        service_type: serviceType,
        origin,
        destination,
        reason: errorMsg
      })
      return { success: false, error: errorMsg, source: 'fallback' }
    }
  } catch (err) {
    const errorMsg = err.name === 'AbortError' ? 'Backend API timeout (8s)' : (err.message || 'Network error')
    trackEvent('backend_fare_failure', {
      service_type: serviceType,
      origin,
      destination,
      error: errorMsg
    })
    trackEvent('fallback_fare_used', {
      service_type: serviceType,
      origin,
      destination,
      reason: errorMsg
    })
    return { success: false, error: errorMsg, source: 'fallback' }
  }
}
