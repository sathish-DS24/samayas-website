import { getSessionAnalytics } from '../utils/analytics';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.samayasorg.in/api/v1';

/**
 * Standard HTTP helper with timeout and JSON parsing
 */
async function request(endpoint, options = {}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);

  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  const config = {
    ...options,
    headers,
    signal: controller.signal,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    clearTimeout(timeoutId);

    const data = await response.json().catch(() => ({}));

    if (!response.ok || data.success === false) {
      const errorMessage = data?.error?.message || `HTTP ${response.status}: Request failed`;
      const error = new Error(errorMessage);
      error.status = response.status;
      error.code = data?.error?.code || 'API_ERROR';
      error.details = data?.error?.details;
      throw error;
    }

    return data.data;
  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      throw new Error('Server request timed out. Please try again.');
    }
    throw err;
  }
}

/**
 * Helper to append session attribution parameters (UTMs, GCLID, referrer)
 */
function getAttributionPayload() {
  const session = getSessionAnalytics() || {};
  return {
    source: session.traffic_source || null,
    medium: session.traffic_medium || null,
    campaign: session.campaign || null,
    gclid: session.gclid || null,
    landingPage: session.landing_page || window.location.pathname,
    referrer: session.referrer || document.referrer || null,
  };
}

export const apiClient = {
  /**
   * Health Check
   */
  async getHealth() {
    return request('/health');
  },

  /**
   * Database Health Check
   */
  async getDbHealth() {
    return request('/health/db');
  },

  /**
   * Get Route Distance & Travel Time Metadata
   */
  async getRoute(origin, destination) {
    return request(`/routes/${encodeURIComponent(origin)}/${encodeURIComponent(destination)}`);
  },

  /**
   * Authoritative Backend Fare Calculation for One-Way Taxi
   */
  async calculateOneWayFare(payload) {
    const mapVehicle = (v = '') => {
      const str = String(v).toUpperCase();
      if (str.includes('HATCH')) return 'HATCHBACK';
      if (str.includes('SEDAN')) return 'SEDAN';
      if (str.includes('HYCROSS')) return 'INNOVA HYCROSS';
      if (str.includes('INNOVA')) return 'INNOVA';
      if (str.includes('TRAVELLER') || str.includes('TEMPO')) return 'TEMPO TRAVELLER';
      if (str.includes('SUV')) return 'SUV';
      return 'SEDAN';
    };

    const normalizedPayload = {
      origin: payload.origin || payload.pickupLocation || 'Trichy',
      destination: payload.destination || payload.dropLocation || 'Chennai',
      vehicle: mapVehicle(payload.vehicle || payload.vehicleType)
    };

    const res = await request('/fare/one-way', {
      method: 'POST',
      body: JSON.stringify(normalizedPayload),
    });

    return {
      ...res,
      fareSource: 'backend_success'
    };
  },

  /**
   * Authoritative Backend Fare Calculation for Round-Trip Taxi
   */
  async calculateRoundTripFare(payload) {
    const mapVehicle = (v = '') => {
      const str = String(v).toUpperCase();
      if (str.includes('HATCH')) return 'HATCHBACK';
      if (str.includes('SEDAN')) return 'SEDAN';
      if (str.includes('HYCROSS')) return 'INNOVA HYCROSS';
      if (str.includes('INNOVA')) return 'INNOVA';
      if (str.includes('TRAVELLER') || str.includes('TEMPO')) return 'TEMPO TRAVELLER';
      if (str.includes('SUV')) return 'SUV';
      return 'SEDAN';
    };

    const normalizedPayload = {
      origin: payload.origin || payload.pickupLocation || 'Trichy',
      destination: payload.destination || payload.dropLocation || 'Chennai',
      vehicle: mapVehicle(payload.vehicle || payload.vehicleType),
      days: Math.max(1, parseInt(payload.days) || 1)
    };

    const res = await request('/fare/round-trip', {
      method: 'POST',
      body: JSON.stringify(normalizedPayload),
    });

    return {
      ...res,
      fareSource: 'backend_success'
    };
  },

  /**
   * Universal Calculate Fare router delegating to service-specific endpoints
   */
  async calculateFare(payload) {
    if (payload.tripType === 'round-trip') {
      return this.calculateRoundTripFare(payload);
    }
    return this.calculateOneWayFare(payload);
  },

  /**
   * Authoritative Backend Fare Calculation for Acting Driver
   */
  async calculateActingDriverFare(payload) {
    const res = await request('/fare/acting-driver', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    return {
      ...res,
      fareSource: 'backend_success'
    };
  },

  /**
   * Authoritative Backend Fare Calculation for Tours & Travels
   */
  async calculateToursFare(payload) {
    const res = await request('/fare/tours', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    return {
      ...res,
      fareSource: 'backend_success'
    };
  },

  /**
   * Authoritative Backend Fare Calculation for Recovery Services
   */
  async calculateRecoveryFare(payload) {
    const res = await request('/fare/recovery', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    return {
      ...res,
      fareSource: 'backend_success'
    };
  },

  /**
   * Submit Lead Enquiry (Fare Check / Eligible Lead)
   */
  async createLead(leadData) {
    const attribution = getAttributionPayload();
    return request('/leads', {
      method: 'POST',
      body: JSON.stringify({
        ...leadData,
        ...attribution,
      }),
    });
  },

  /**
   * Submit Booking Request (Creates PostgreSQL Transaction & SAM-YYYYMMDD-XXXX Reference)
   */
  async createBooking(bookingData) {
    const attribution = getAttributionPayload();
    return request('/bookings', {
      method: 'POST',
      body: JSON.stringify({
        ...bookingData,
        ...attribution,
      }),
    });
  },

  /**
   * Get Booking Details by Booking Reference
   */
  async getBooking(bookingReference) {
    return request(`/bookings/${encodeURIComponent(bookingReference)}`);
  },
};
