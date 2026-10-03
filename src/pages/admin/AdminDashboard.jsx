import React, { useState, useEffect } from 'react';
import { apiClient } from '../../services/api';
import {
  Car,
  Users,
  Search,
  RefreshCw,
  Phone,
  MessageSquare,
  CheckCircle2,
  Clock,
  LogOut,
  IndianRupee,
  Calendar,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Tag,
  ShieldCheck,
  TrendingUp,
  MapPin,
  FileText
} from 'lucide-react';

export default function AdminDashboard({ token, onLogout }) {
  const [activeTab, setActiveTab] = useState('bookings');
  const [stats, setStats] = useState(null);
  const [bookingsData, setBookingsData] = useState({ items: [], pagination: {} });
  const [leadsData, setLeadsData] = useState({ items: [], pagination: {} });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Search & Filter State
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [serviceTypeFilter, setServiceTypeFilter] = useState('');
  const [page, setPage] = useState(1);

  // Status Update Modal State
  const [editingBooking, setEditingBooking] = useState(null);
  const [updatingStatus, setUpdatingStatus] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  const fetchStats = async () => {
    try {
      const res = await apiClient.getAdminStats(token);
      setStats(res);
    } catch (err) {
      if (err.status === 401) {
        onLogout();
      } else {
        console.error('Failed to load stats:', err.message);
      }
    }
  };

  const fetchBookings = async () => {
    setIsLoading(true);
    setError('');
    try {
      const res = await apiClient.getAdminBookings(token, {
        page,
        limit: 15,
        search,
        status: statusFilter,
        serviceType: serviceTypeFilter
      });
      setBookingsData(res);
    } catch (err) {
      if (err.status === 401) {
        onLogout();
      } else {
        setError(err.message || 'Failed to load bookings');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const fetchLeads = async () => {
    setIsLoading(true);
    setError('');
    try {
      const res = await apiClient.getAdminLeads(token, {
        page,
        limit: 15,
        search,
        serviceType: serviceTypeFilter
      });
      setLeadsData(res);
    } catch (err) {
      if (err.status === 401) {
        onLogout();
      } else {
        setError(err.message || 'Failed to load leads');
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    if (activeTab === 'bookings') {
      fetchBookings();
    } else {
      fetchLeads();
    }
  }, [activeTab, page, statusFilter, serviceTypeFilter]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    if (activeTab === 'bookings') fetchBookings();
    else fetchLeads();
  };

  const handleUpdateStatus = async () => {
    if (!editingBooking || !updatingStatus) return;
    setIsUpdating(true);
    try {
      await apiClient.updateAdminBookingStatus(token, editingBooking.id, updatingStatus);
      setEditingBooking(null);
      fetchBookings();
      fetchStats();
    } catch (err) {
      alert('Failed to update status: ' + err.message);
    } finally {
      setIsUpdating(false);
    }
  };

  const openWhatsApp = (phone, name, refOrService, origin, dest, fare) => {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hello ${name},\n\nThank you for choosing SAMAYAS Taxi Services!\nReference: ${refOrService}\nTrip: ${origin} -> ${dest}\nEstimated Fare: ₹${fare}\n\nOur support team is confirming your booking details. Reply to this message if you have any questions!`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
  };

  const formatServiceLabel = (service) => {
    switch (service) {
      case 'one_way_taxi': return 'One-Way Taxi';
      case 'round_trip_taxi': return 'Round-Trip Taxi';
      case 'acting_driver': return 'Acting Driver';
      case 'tours_and_travels': return 'Tours & Travels';
      case 'recovery_services': return 'Vehicle Recovery';
      default: return service;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'requested':
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1 w-fit"><Clock className="w-3 h-3" /> Requested</span>;
      case 'confirmed':
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1 w-fit"><CheckCircle2 className="w-3 h-3" /> Confirmed</span>;
      case 'assigned':
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1 w-fit"><Car className="w-3 h-3" /> Assigned</span>;
      case 'completed':
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center gap-1 w-fit"><Sparkles className="w-3 h-3" /> Completed</span>;
      case 'cancelled':
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center gap-1 w-fit"><AlertCircle className="w-3 h-3" /> Cancelled</span>;
      default:
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-800 text-slate-300">{status}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-12">
      {/* Top Header Navigation */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-30 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20">
              S
            </div>
            <div>
              <h1 className="text-lg font-bold text-white tracking-tight">SAMAYAS Operations Control</h1>
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live PostgreSQL Production System
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => { fetchStats(); if (activeTab === 'bookings') fetchBookings(); else fetchLeads(); }}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700"
              title="Refresh Data"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/20 font-medium text-xs transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Metric Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Total Bookings</span>
              <Car className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">{stats ? stats.totalBookings : '...'}</div>
            <div className="text-xs text-amber-400/80 mt-2 font-medium">
              {stats ? `${stats.todayBookings} created today` : ''}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Total Lead Enquiries</span>
              <Users className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">{stats ? stats.totalLeads : '...'}</div>
            <div className="text-xs text-cyan-400/80 mt-2 font-medium">
              {stats ? `${stats.todayLeads} leads today` : ''}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Total Estimated Revenue</span>
              <IndianRupee className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">
              ₹{stats ? stats.totalEstimatedRevenue.toLocaleString() : '...'}
            </div>
            <div className="text-xs text-emerald-400/80 mt-2 font-medium">
              Active non-cancelled trips
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Pending Requests</span>
              <Clock className="w-5 h-5 text-amber-500" />
            </div>
            <div className="text-3xl font-extrabold text-white">
              {stats ? stats.statusBreakdown.requested : '...'}
            </div>
            <div className="text-xs text-slate-400 mt-2 font-medium">
              Needs confirmation
            </div>
          </div>
        </div>

        {/* Tab Selection & Search Filters Header */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 w-fit">
              <button
                onClick={() => { setActiveTab('bookings'); setPage(1); }}
                className={`px-5 py-2 rounded-lg font-bold text-xs transition-all flex items-center gap-2 ${
                  activeTab === 'bookings'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Car className="w-4 h-4" />
                Bookings Management ({stats ? stats.totalBookings : 0})
              </button>
              <button
                onClick={() => { setActiveTab('leads'); setPage(1); }}
                className={`px-5 py-2 rounded-lg font-bold text-xs transition-all flex items-center gap-2 ${
                  activeTab === 'leads'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Users className="w-4 h-4" />
                Leads & Enquiries ({stats ? stats.totalLeads : 0})
              </button>
            </div>

            <form onSubmit={handleSearchSubmit} className="flex flex-wrap items-center gap-3">
              <div className="relative flex-1 min-w-[220px]">
                <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-500" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by Name, Phone, SAM-Ref..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              {activeTab === 'bookings' && (
                <select
                  value={statusFilter}
                  onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="">All Statuses</option>
                  <option value="requested">Requested</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="assigned">Assigned</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              )}

              <select
                value={serviceTypeFilter}
                onChange={(e) => { setServiceTypeFilter(e.target.value); setPage(1); }}
                className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
              >
                <option value="">All Services</option>
                <option value="one_way_taxi">One-Way Taxi</option>
                <option value="round_trip_taxi">Round-Trip Taxi</option>
                <option value="acting_driver">Acting Driver</option>
                <option value="tours_and_travels">Tours & Travels</option>
                <option value="recovery_services">Vehicle Recovery</option>
              </select>

              <button
                type="submit"
                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs px-4 py-2 rounded-xl border border-slate-700 transition-colors"
              >
                Filter
              </button>
            </form>
          </div>

          {/* Main Data Table */}
          {isLoading ? (
            <div className="py-20 flex flex-col items-center justify-center text-slate-400">
              <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mb-3" />
              <span className="text-xs font-medium">Fetching real-time records from PostgreSQL...</span>
            </div>
          ) : error ? (
            <div className="p-8 text-center text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-xl text-xs">
              {error}
            </div>
          ) : activeTab === 'bookings' ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold text-[11px]">
                    <th className="py-3.5 px-4">Booking Ref</th>
                    <th className="py-3.5 px-4">Customer Details</th>
                    <th className="py-3.5 px-4">Service & Vehicle</th>
                    <th className="py-3.5 px-4">Route Details</th>
                    <th className="py-3.5 px-4">Quoted Fare</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4">Created Date</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-200">
                  {bookingsData.items && bookingsData.items.length > 0 ? (
                    bookingsData.items.map((row) => (
                      <tr key={row.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-4 px-4 font-mono font-bold text-amber-400 whitespace-nowrap">
                          {row.booking_reference}
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-bold text-white">{row.customer_name}</div>
                          <div className="text-slate-400 font-mono text-[11px] mt-0.5">{row.customer_phone}</div>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="font-semibold text-slate-200">{formatServiceLabel(row.service_type)}</div>
                          <div className="text-slate-400 text-[11px]">{row.vehicle}</div>
                        </td>
                        <td className="py-4 px-4 max-w-xs">
                          <div className="flex items-center gap-1.5 text-slate-300 font-medium truncate">
                            <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                            <span className="truncate">{row.origin}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-400 text-[11px] truncate mt-0.5">
                            <span className="text-slate-500 font-bold ml-5">➔</span>
                            <span className="truncate">{row.destination}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 font-bold text-emerald-400 whitespace-nowrap">
                          ₹{parseFloat(row.estimated_total_fare).toLocaleString()}
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          {getStatusBadge(row.status)}
                        </td>
                        <td className="py-4 px-4 text-slate-400 whitespace-nowrap text-[11px]">
                          {row.created_at_ist}
                        </td>
                        <td className="py-4 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-2">
                            <a
                              href={`tel:${row.customer_phone}`}
                              className="p-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-lg transition-colors"
                              title="Call Customer"
                            >
                              <Phone className="w-3.5 h-3.5" />
                            </a>
                            <button
                              onClick={() => openWhatsApp(row.customer_phone, row.customer_name, row.booking_reference, row.origin, row.destination, row.estimated_total_fare)}
                              className="p-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 rounded-lg transition-colors"
                              title="WhatsApp Customer"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => { setEditingBooking(row); setUpdatingStatus(row.status); }}
                              className="px-2.5 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/20 rounded-lg font-semibold text-[11px] transition-colors"
                            >
                              Status
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="py-12 text-center text-slate-500 text-xs">
                        No booking records found matching your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            /* Leads Table */
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold text-[11px]">
                    <th className="py-3.5 px-4">Customer Details</th>
                    <th className="py-3.5 px-4">Service Enquired</th>
                    <th className="py-3.5 px-4">Route Details</th>
                    <th className="py-3.5 px-4">Quoted Fare</th>
                    <th className="py-3.5 px-4">Traffic Source</th>
                    <th className="py-3.5 px-4">Created Date</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-200">
                  {leadsData.items && leadsData.items.length > 0 ? (
                    leadsData.items.map((row) => (
                      <tr key={row.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-4 px-4">
                          <div className="font-bold text-white">{row.customer_name}</div>
                          <div className="text-slate-400 font-mono text-[11px] mt-0.5">{row.customer_phone}</div>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="font-semibold text-slate-200">{formatServiceLabel(row.service_type)}</div>
                          <div className="text-slate-400 text-[11px]">{row.vehicle}</div>
                        </td>
                        <td className="py-4 px-4 max-w-xs">
                          <div className="flex items-center gap-1.5 text-slate-300 font-medium truncate">
                            <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                            <span className="truncate">{row.origin}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-400 text-[11px] truncate mt-0.5">
                            <span className="text-slate-500 font-bold ml-5">➔</span>
                            <span className="truncate">{row.destination}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 font-bold text-emerald-400 whitespace-nowrap">
                          ₹{parseFloat(row.estimated_total_fare).toLocaleString()}
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${
                            row.gclid
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                              : 'bg-slate-800 text-slate-300 border-slate-700'
                          }`}>
                            {row.gclid ? 'Google Ads (GCLID)' : row.source || 'Direct'}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-slate-400 whitespace-nowrap text-[11px]">
                          {row.created_at_ist}
                        </td>
                        <td className="py-4 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-2">
                            <a
                              href={`tel:${row.customer_phone}`}
                              className="p-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-lg transition-colors"
                              title="Call Customer"
                            >
                              <Phone className="w-3.5 h-3.5" />
                            </a>
                            <button
                              onClick={() => openWhatsApp(row.customer_phone, row.customer_name, row.service_type, row.origin, row.destination, row.estimated_total_fare)}
                              className="p-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 rounded-lg transition-colors"
                              title="WhatsApp Customer"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="py-12 text-center text-slate-500 text-xs">
                        No lead records found matching your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs text-slate-400">
            <div>
              Showing Page <span className="font-bold text-white">{page}</span> of{' '}
              <span className="font-bold text-white">
                {activeTab === 'bookings' ? bookingsData.pagination.totalPages || 1 : leadsData.pagination.totalPages || 1}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="p-2 bg-slate-950 hover:bg-slate-800 disabled:opacity-30 border border-slate-800 rounded-lg text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                disabled={
                  activeTab === 'bookings'
                    ? page >= (bookingsData.pagination.totalPages || 1)
                    : page >= (leadsData.pagination.totalPages || 1)
                }
                onClick={() => setPage((p) => p + 1)}
                className="p-2 bg-slate-950 hover:bg-slate-800 disabled:opacity-30 border border-slate-800 rounded-lg text-white transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Edit Booking Status Modal */}
      {editingBooking && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white">Update Booking Status</h3>
              <span className="font-mono text-xs text-amber-400 font-bold">{editingBooking.booking_reference}</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="text-slate-300">
                <span className="text-slate-500 font-semibold">Customer:</span> {editingBooking.customer_name} ({editingBooking.customer_phone})
              </div>
              <div className="text-slate-300">
                <span className="text-slate-500 font-semibold">Route:</span> {editingBooking.origin} ➔ {editingBooking.destination}
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1.5">Select New Status</label>
                <select
                  value={updatingStatus}
                  onChange={(e) => setUpdatingStatus(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="requested">Requested (Pending Confirmation)</option>
                  <option value="confirmed">Confirmed (Booking Accepted)</option>
                  <option value="assigned">Assigned (Cab & Driver Assigned)</option>
                  <option value="completed">Completed (Trip Finished)</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setEditingBooking(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateStatus}
                disabled={isUpdating}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-colors disabled:opacity-50"
              >
                {isUpdating ? 'Saving...' : 'Update Status'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
