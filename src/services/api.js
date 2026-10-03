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
   * Authoritative Backend Fare Calculation for all 5 SAMAYAS Services
   */
  async calculateFare(payload) {
    return request('/fare/calculate', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
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

  /**
   * Admin Login
   */
  async adminLogin(password) {
    return request('/admin/login', {
      method: 'POST',
      body: JSON.stringify({ password }),
    });
  },

  /**
   * Get Admin Dashboard Overview Statistics
   */
  async getAdminStats(token) {
    return request('/admin/stats', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  /**
   * Get Admin Bookings List with Search & Filtering
   */
  async getAdminBookings(token, params = {}) {
    const queryParts = [];
    if (params.page) queryParts.push(`page=${encodeURIComponent(params.page)}`);
    if (params.limit) queryParts.push(`limit=${encodeURIComponent(params.limit)}`);
    if (params.search) queryParts.push(`search=${encodeURIComponent(params.search)}`);
    if (params.status) queryParts.push(`status=${encodeURIComponent(params.status)}`);
    if (params.serviceType) queryParts.push(`serviceType=${encodeURIComponent(params.serviceType)}`);

    const queryString = queryParts.length > 0 ? `?${queryParts.join('&')}` : '';

    return request(`/admin/bookings${queryString}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  /**
   * Get Admin Leads List with Search & Filtering
   */
  async getAdminLeads(token, params = {}) {
    const queryParts = [];
    if (params.page) queryParts.push(`page=${encodeURIComponent(params.page)}`);
    if (params.limit) queryParts.push(`limit=${encodeURIComponent(params.limit)}`);
    if (params.search) queryParts.push(`search=${encodeURIComponent(params.search)}`);
    if (params.serviceType) queryParts.push(`serviceType=${encodeURIComponent(params.serviceType)}`);
    if (params.source) queryParts.push(`source=${encodeURIComponent(params.source)}`);

    const queryString = queryParts.length > 0 ? `?${queryParts.join('&')}` : '';

    return request(`/admin/leads${queryString}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  /**
   * Update Booking Status (requested, confirmed, assigned, completed, cancelled)
   */
  async updateAdminBookingStatus(token, bookingId, status, notes = '') {
    return request(`/admin/bookings/${encodeURIComponent(bookingId)}/status`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status, notes }),
    });
  },
};
