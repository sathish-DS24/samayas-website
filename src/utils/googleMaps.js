// Helper for Google Maps Distance Matrix and Places Autocomplete

// Convert input to a value the Distance Matrix API accepts:
// - If it's a {lat, lng} object, create a google.maps.LatLng
// - Otherwise pass the string as-is
const toLatLngOrString = (input) => {
  if (input && typeof input === 'object' && typeof input.lat === 'number' && typeof input.lng === 'number') {
    if (window.google && window.google.maps) {
      return new window.google.maps.LatLng(input.lat, input.lng)
    }
    return `${input.lat},${input.lng}`
  }
  return input
}

export const getRoadDistance = (origin, destination) => {
  return new Promise((resolve) => {
    if (window.googleMapsFailed || !window.google || !window.google.maps || !window.google.maps.DistanceMatrixService) {
      console.warn('Google Maps API not available or auth failed. Falling back to local calculator.')
      resolve(null)
      return
    }

    // Safety timeout — resolve null after 8 seconds if API hangs
    const timeoutId = setTimeout(() => {
      console.warn('Distance Matrix API timed out after 8s')
      resolve(null)
    }, 8000)

    const service = new window.google.maps.DistanceMatrixService()
    service.getDistanceMatrix(
      {
        origins: [toLatLngOrString(origin)],
        destinations: [toLatLngOrString(destination)],
        travelMode: window.google.maps.TravelMode.DRIVING,
        unitSystem: window.google.maps.UnitSystem.METRIC,
      },
      (response, status) => {
        clearTimeout(timeoutId)
        if (status === 'OK' && response && response.rows && response.rows[0] && response.rows[0].elements[0]) {
          const element = response.rows[0].elements[0]
          if (element.status === 'OK' && element.distance) {
            // Convert meters to kilometers and round
            const distanceInKm = Math.round(element.distance.value / 1000)
            console.log(`Google Maps Road Distance: ${distanceInKm} km`)
            resolve(distanceInKm)
            return
          }
        }
        console.warn('Distance Matrix query returned status:', status, response)
        resolve(null) // Fallback to local matrix if Google status is ZERO_RESULTS or NOT_FOUND
      }
    )
  })
}

export const getRouteInfo = (origin, destination) => {
  return new Promise((resolve) => {
    if (window.googleMapsFailed || !window.google || !window.google.maps || !window.google.maps.DistanceMatrixService) {
      resolve(null)
      return
    }

    // Safety timeout
    const timeoutId = setTimeout(() => {
      console.warn('Route Info API timed out after 8s')
      resolve(null)
    }, 8000)

    const service = new window.google.maps.DistanceMatrixService()
    service.getDistanceMatrix(
      {
        origins: [toLatLngOrString(origin)],
        destinations: [toLatLngOrString(destination)],
        travelMode: window.google.maps.TravelMode.DRIVING,
        unitSystem: window.google.maps.UnitSystem.METRIC,
      },
      (response, status) => {
        clearTimeout(timeoutId)
        if (status === 'OK' && response && response.rows && response.rows[0] && response.rows[0].elements[0]) {
          const element = response.rows[0].elements[0]
          if (element.status === 'OK' && element.distance && element.duration) {
            const distanceInKm = Math.round(element.distance.value / 1000)
            const durationMins = Math.round(element.duration.value / 60)
            resolve({ distance: distanceInKm, durationMins })
            return
          }
        }
        resolve(null)
      }
    )
  })
}

export const reverseGeocode = (lat, lng) => {
  return new Promise((resolve) => {
    if (window.googleMapsFailed || !window.google || !window.google.maps || !window.google.maps.Geocoder) {
      resolve(null)
      return
    }

    const geocoder = new window.google.maps.Geocoder()
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === 'OK' && results && results[0]) {
        resolve({
          formattedAddress: results[0].formatted_address,
          placeId: results[0].place_id,
          lat,
          lng
        })
      } else {
        console.warn('Reverse Geocoder status:', status)
        resolve(null)
      }
    })
  })
}

export const getCurrentGPSLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'))
      return
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude
        const addressData = await reverseGeocode(lat, lng)
        resolve({
          lat,
          lng,
          formattedAddress: addressData?.formattedAddress || `${lat.toFixed(6)}, ${lng.toFixed(6)}`
        })
      },
      (error) => {
        console.warn('Geolocation error:', error)
        reject(error)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    )
  })
}
