import React, { useState, useEffect } from 'react';
import { apiClient } from '../../services/api';
import {
  Car,
  Edit3,
  Check,
  X,
  Trash2,
  ArrowRightCircle,
  AlertTriangle,
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

  // Edit Booking Modal State
  const [editingBooking, setEditingBooking] = useState(null);
  const [editForm, setEditForm] = useState({
    id: '',
    booking_reference: '',
    customer_name: '',
    customer_phone: '',
    service_type: 'one_way_taxi',
    vehicle: 'SEDAN',
    estimated_total_fare: '',
    origin: '',
    destination: '',
    travel_date: '',
    travel_time: '',
    status: 'requested',
    admin_notes: '',
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateError, setUpdateError] = useState('');
  const [updateSuccess, setUpdateSuccess] = useState(false);

  // Edit Lead Modal State
  const [editingLead, setEditingLead] = useState(null);
  const [leadEditForm, setLeadEditForm] = useState({
    id: '',
    customer_name: '',
    customer_phone: '',
    service_type: 'one_way_taxi',
    vehicle: 'SEDAN',
    estimated_total_fare: '',
    origin: '',
    destination: '',
    travel_date: '',
    travel_time: '',
    status: 'new',
  });
  const [isLeadUpdating, setIsLeadUpdating] = useState(false);
  const [leadUpdateError, setLeadUpdateError] = useState('');
  const [leadUpdateSuccess, setLeadUpdateSuccess] = useState(false);

  // Lead Conversion State
  const [isConverting, setIsConverting] = useState(false);
  const [conversionSuccessMsg, setConversionSuccessMsg] = useState('');

  // Delete Confirmation Modal State
  const [itemToDelete, setItemToDelete] = useState(null); // { type: 'booking' | 'lead', id, name, ref }
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState('');

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

  const fetchBookings = async (silent = false) => {
    if (!silent) setIsLoading(true);
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
      if (!silent) setIsLoading(false);
    }
  };

  const fetchLeads = async (silent = false) => {
    if (!silent) setIsLoading(true);
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
      if (!silent) setIsLoading(false);
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

  const handleOpenEdit = (booking) => {
    let formattedDate = '';
    if (booking.travel_date) {
      formattedDate = booking.travel_date.split('T')[0];
    }
    setEditForm({
      id: booking.id,
      booking_reference: booking.booking_reference,
      customer_name: booking.customer_name || '',
      customer_phone: booking.customer_phone || '',
      service_type: booking.service_type || 'one_way_taxi',
      vehicle: booking.vehicle || 'SEDAN',
      estimated_total_fare: booking.estimated_total_fare || '',
      origin: booking.origin || '',
      destination: booking.destination || '',
      travel_date: formattedDate,
      travel_time: booking.travel_time || '',
      status: booking.status || 'requested',
      admin_notes: booking.admin_notes || '',
    });
    setUpdateError('');
    setUpdateSuccess(false);
    setEditingBooking(booking);
  };

  const handleSaveBooking = async (e) => {
    if (e) e.preventDefault();
    if (!editForm.id) return;
    setIsUpdating(true);
    setUpdateError('');
    try {
      await apiClient.updateAdminBooking(token, editForm.id, {
        service_type: editForm.service_type,
        vehicle: editForm.vehicle,
        estimated_total_fare: parseFloat(editForm.estimated_total_fare) || 0,
        origin: editForm.origin,
        destination: editForm.destination,
        travel_date: editForm.travel_date || null,
        travel_time: editForm.travel_time || null,
        status: editForm.status,
        admin_notes: editForm.admin_notes || '',
      });
      setUpdateSuccess(true);
      setTimeout(() => {
        setEditingBooking(null);
        setUpdateSuccess(false);
        fetchBookings();
        fetchStats();
      }, 600);
    } catch (err) {
      setUpdateError(err.message || 'Failed to update booking. Please try again.');
    } finally {
      setIsUpdating(false);
    }
  };

  // Lead Modal & Conversion Handlers
  const handleOpenEditLead = (lead) => {
    let formattedDate = '';
    if (lead.travel_date) {
      formattedDate = lead.travel_date.split('T')[0];
    }
    setLeadEditForm({
      id: lead.id,
      customer_name: lead.customer_name || '',
      customer_phone: lead.customer_phone || '',
      service_type: lead.service_type || 'one_way_taxi',
      vehicle: lead.vehicle || 'SEDAN',
      estimated_total_fare: lead.estimated_total_fare || '',
      origin: lead.origin || '',
      destination: lead.destination || '',
      travel_date: formattedDate,
      travel_time: lead.travel_time || '',
      status: lead.status || 'new',
    });
    setLeadUpdateError('');
    setLeadUpdateSuccess(false);
    setEditingLead(lead);
  };

  const handleSaveLead = async (e) => {
    if (e) e.preventDefault();
    if (!leadEditForm.id) return;
    setIsLeadUpdating(true);
    setLeadUpdateError('');
    try {
      await apiClient.updateAdminLead(token, leadEditForm.id, {
        service_type: leadEditForm.service_type,
        vehicle: leadEditForm.vehicle,
        estimated_total_fare: parseFloat(leadEditForm.estimated_total_fare) || 0,
        origin: leadEditForm.origin,
        destination: leadEditForm.destination,
        travel_date: leadEditForm.travel_date || null,
        travel_time: leadEditForm.travel_time || null,
        status: leadEditForm.status,
      });
      setLeadUpdateSuccess(true);
      setTimeout(() => {
        setEditingLead(null);
        setLeadUpdateSuccess(false);
        fetchLeads();
        fetchStats();
      }, 600);
    } catch (err) {
      setLeadUpdateError(err.message || 'Failed to update lead');
    } finally {
      setIsLeadUpdating(false);
    }
  };

  const handleConvertLead = async (leadOrId, overrideData = {}) => {
    const leadId = typeof leadOrId === 'string' ? leadOrId : leadOrId.id;
    setIsConverting(true);
    try {
      const res = await apiClient.convertAdminLeadToBooking(token, leadId, overrideData);
      setEditingLead(null);
      setConversionSuccessMsg(`Lead converted successfully! Booking Reference: ${res.booking_reference}`);
      setTimeout(() => setConversionSuccessMsg(''), 5000);
      setActiveTab('bookings');
      setPage(1);
      fetchBookings();
      fetchLeads();
      fetchStats();
    } catch (err) {
      alert('Failed to convert lead to booking: ' + (err.message || 'Unknown error'));
    } finally {
      setIsConverting(false);
    }
  };

  const handleConfirmDelete = async () => {
    if (!itemToDelete) return;
    const deletedItem = itemToDelete;
    setIsDeleting(true);
    setDeleteError('');
    try {
      if (deletedItem.type === 'booking') {
        await apiClient.deleteAdminBooking(token, deletedItem.id);
        // Optimistic UI update: remove row immediately from table
        setBookingsData((prev) => ({
          ...prev,
          items: (prev.items || []).filter((item) => item.id !== deletedItem.id),
          pagination: {
            ...prev.pagination,
            total: Math.max(0, (prev.pagination?.total || 1) - 1),
          },
        }));
      } else {
        await apiClient.deleteAdminLead(token, deletedItem.id);
        // Optimistic UI update: remove row immediately from table
        setLeadsData((prev) => ({
          ...prev,
          items: (prev.items || []).filter((item) => item.id !== deletedItem.id),
          pagination: {
            ...prev.pagination,
            total: Math.max(0, (prev.pagination?.total || 1) - 1),
          },
        }));
      }

      // Update summary counters optimistically
      setStats((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          totalBookings: deletedItem.type === 'booking' ? Math.max(0, prev.totalBookings - 1) : prev.totalBookings,
          totalLeads: deletedItem.type === 'lead' ? Math.max(0, prev.totalLeads - 1) : prev.totalLeads,
        };
      });

      setItemToDelete(null);
    } catch (err) {
      setDeleteError(err.message || 'Failed to delete record from Supabase');
    } finally {
      setIsDeleting(false);
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
        {conversionSuccessMsg && (
          <div className="p-4 bg-emerald-500/15 border border-emerald-500/30 rounded-2xl text-emerald-300 text-xs font-semibold flex items-center justify-between shadow-xl animate-fade-in">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{conversionSuccessMsg}</span>
            </div>
            <button
              onClick={() => setConversionSuccessMsg('')}
              className="text-emerald-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
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

          {/* Non-intrusive warning when cached/optimistic records are already displayed */}
          {error && (activeTab === 'bookings' ? (bookingsData?.items?.length > 0) : (leadsData?.items?.length > 0)) && (
            <div className="mb-4 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-amber-300 font-medium">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-amber-400" />
                <span>Notice: {error} (Displaying current records)</span>
              </div>
              <button
                type="button"
                onClick={() => { setError(''); if (activeTab === 'bookings') fetchBookings(); else fetchLeads(); fetchStats(); }}
                className="px-3 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 font-bold rounded-lg text-[11px] inline-flex items-center gap-1 border border-amber-500/30 transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Retry Sync</span>
              </button>
            </div>
          )}

          {/* Main Data Table */}
          {isLoading ? (
            <div className="py-20 flex flex-col items-center justify-center text-slate-400">
              <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mb-3" />
              <span className="text-xs font-medium">Fetching real-time records from PostgreSQL...</span>
            </div>
          ) : error && !(activeTab === 'bookings' ? (bookingsData?.items?.length > 0) : (leadsData?.items?.length > 0)) ? (
            <div className="py-12 px-6 text-center bg-rose-500/10 border border-rose-500/20 rounded-2xl max-w-md mx-auto my-8 space-y-3">
              <div className="text-rose-400 text-xs font-semibold">{error}</div>
              <p className="text-slate-400 text-[11px]">Server or connection momentarily refreshed. Click below to reconnect.</p>
              <button
                type="button"
                onClick={() => { setError(''); if (activeTab === 'bookings') fetchBookings(); else fetchLeads(); fetchStats(); }}
                className="px-4 py-2 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 font-bold rounded-xl text-xs transition-colors inline-flex items-center gap-1.5 border border-rose-500/30 shadow-md"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retry Loading Records</span>
              </button>
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
                          {row.admin_notes && (
                            <div className="text-[10px] text-amber-400/90 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded mt-1.5 truncate max-w-[240px]" title={row.admin_notes}>
                              📝 {row.admin_notes}
                            </div>
                          )}
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
                              onClick={() => handleOpenEdit(row)}
                              className="px-2.5 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/20 rounded-lg font-semibold text-[11px] transition-colors flex items-center gap-1"
                              title="Edit Booking Details"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                              <span>Edit</span>
                            </button>
                            <button
                              onClick={() => setItemToDelete({ type: 'booking', id: row.id, name: row.customer_name, ref: row.booking_reference })}
                              className="p-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 rounded-lg transition-colors"
                              title="Delete Booking Permanently"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
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
                            <button
                              onClick={() => handleOpenEditLead(row)}
                              className="px-2.5 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/20 rounded-lg font-semibold text-[11px] transition-colors flex items-center gap-1"
                              title="Edit Lead Details"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                              <span>Edit</span>
                            </button>
                            <button
                              disabled={isConverting}
                              onClick={() => handleConvertLead(row)}
                              className="px-2.5 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-lg font-semibold text-[11px] transition-colors flex items-center gap-1 disabled:opacity-50"
                              title="Convert to Formal Booking"
                            >
                              <ArrowRightCircle className="w-3.5 h-3.5" />
                              <span>Book</span>
                            </button>
                            <button
                              onClick={() => setItemToDelete({ type: 'lead', id: row.id, name: row.customer_name, ref: formatServiceLabel(row.service_type) })}
                              className="p-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 rounded-lg transition-colors"
                              title="Delete Lead Permanently"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
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

      {/* Full Edit Booking Details Modal */}
      {editingBooking && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-4 my-8 relative">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
                  <Edit3 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white leading-tight">Edit Booking Details</h3>
                  <span className="font-mono text-xs text-amber-400 font-bold">{editForm.booking_reference}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setEditingBooking(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Customer Summary Banner */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-slate-400">Customer:</span>
                <span className="font-bold text-white">{editForm.customer_name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono text-slate-300 font-semibold">{editForm.customer_phone}</span>
              </div>
            </div>

            {/* Error / Success Notifications */}
            {updateError && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{updateError}</span>
              </div>
            )}
            {updateSuccess && (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Booking details updated successfully in Supabase!</span>
              </div>
            )}

            {/* Form Fields */}
            <form onSubmit={handleSaveBooking} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Service Type */}
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Service Type</label>
                  <select
                    value={editForm.service_type}
                    onChange={(e) => setEditForm({ ...editForm, service_type: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="one_way_taxi">One-Way Taxi</option>
                    <option value="round_trip_taxi">Round-Trip Taxi</option>
                    <option value="acting_driver">Acting Driver</option>
                    <option value="tours_and_travels">Tours & Travels</option>
                    <option value="recovery_services">Vehicle Recovery</option>
                  </select>
                </div>

                {/* Vehicle */}
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Vehicle</label>
                  <select
                    value={editForm.vehicle}
                    onChange={(e) => setEditForm({ ...editForm, vehicle: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="HATCHBACK">Hatchback (WagonR / Indica)</option>
                    <option value="SEDAN">Sedan (Dzire / Etios)</option>
                    <option value="SUV">SUV (Ertiga / Lodgy)</option>
                    <option value="INNOVA">Innova</option>
                    <option value="INNOVA_CRYSTA">Innova Crysta</option>
                    <option value="TEMPO_TRAVELLER">Tempo Traveller</option>
                    <option value="TOW_TRUCK">Under-Wheel Tow Truck</option>
                    <option value="FLATBED_TRUCK">Flatbed Recovery Truck</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Agreed Fare */}
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">
                    Agreed Fare (₹) <span className="text-amber-400 font-normal">(Editable)</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-slate-500 font-bold">₹</span>
                    <input
                      type="number"
                      step="any"
                      required
                      value={editForm.estimated_total_fare}
                      onChange={(e) => setEditForm({ ...editForm, estimated_total_fare: e.target.value })}
                      placeholder="e.g. 6500"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-7 pr-3 py-2 text-xs text-emerald-400 font-bold focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Booking Status</label>
                  <select
                    value={editForm.status}
                    onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500 font-semibold"
                  >
                    <option value="requested">Requested (Pending Confirmation)</option>
                    <option value="confirmed">Confirmed (Booking Accepted)</option>
                    <option value="assigned">Assigned (Cab & Driver Assigned)</option>
                    <option value="completed">Completed (Trip Finished)</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              {/* Pickup & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Pickup Location</label>
                  <input
                    type="text"
                    required
                    value={editForm.origin}
                    onChange={(e) => setEditForm({ ...editForm, origin: e.target.value })}
                    placeholder="e.g. Chennai Doorstep"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Destination Location</label>
                  <input
                    type="text"
                    required
                    value={editForm.destination}
                    onChange={(e) => setEditForm({ ...editForm, destination: e.target.value })}
                    placeholder="e.g. Madurai Central"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Travel Date & Travel Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Travel Date</label>
                  <input
                    type="date"
                    value={editForm.travel_date}
                    onChange={(e) => setEditForm({ ...editForm, travel_date: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Travel Time</label>
                  <input
                    type="text"
                    value={editForm.travel_time}
                    onChange={(e) => setEditForm({ ...editForm, travel_time: e.target.value })}
                    placeholder="e.g. 06:00 AM"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Admin Notes */}
              <div>
                <label className="block text-slate-400 font-semibold mb-1">
                  Admin Notes <span className="text-slate-500 font-normal">(Internal Operational Notes)</span>
                </label>
                <textarea
                  rows="2"
                  value={editForm.admin_notes}
                  onChange={(e) => setEditForm({ ...editForm, admin_notes: e.target.value })}
                  placeholder="e.g. Agreed ₹6,500 incl tolls, Driver allocated: Murugan"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    const b = editingBooking;
                    setEditingBooking(null);
                    setItemToDelete({ type: 'booking', id: b.id, name: b.customer_name, ref: b.booking_reference });
                  }}
                  className="px-3 py-2 rounded-xl text-rose-400 hover:bg-rose-500/10 border border-rose-500/20 font-semibold text-xs transition-colors flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete</span>
                </button>
                <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={isUpdating}
                  onClick={() => setEditingBooking(null)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-amber-500/20 flex items-center gap-1.5 disabled:opacity-50"
                >
                  {isUpdating ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Saving to Supabase...</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Save & Update Supabase</span>
                    </>
                  )}
                </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Full Edit Lead Details Modal */}
      {editingLead && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-4 my-8 relative">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20">
                  <Edit3 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white leading-tight">Edit Lead Enquiry</h3>
                  <span className="text-xs text-slate-400">Update finalized route, vehicle, and price</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setEditingLead(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Customer Summary Banner */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-slate-400">Customer:</span>
                <span className="font-bold text-white">{leadEditForm.customer_name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono text-slate-300 font-semibold">{leadEditForm.customer_phone}</span>
              </div>
            </div>

            {/* Notifications */}
            {leadUpdateError && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{leadUpdateError}</span>
              </div>
            )}
            {leadUpdateSuccess && (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Lead details updated successfully in Supabase!</span>
              </div>
            )}

            {/* Form Fields */}
            <form onSubmit={handleSaveLead} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Service Type */}
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Service Type</label>
                  <select
                    value={leadEditForm.service_type}
                    onChange={(e) => setLeadEditForm({ ...leadEditForm, service_type: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="one_way_taxi">One-Way Taxi</option>
                    <option value="round_trip_taxi">Round-Trip Taxi</option>
                    <option value="acting_driver">Acting Driver</option>
                    <option value="tours_and_travels">Tours & Travels</option>
                    <option value="recovery_services">Vehicle Recovery</option>
                  </select>
                </div>

                {/* Vehicle */}
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Vehicle</label>
                  <select
                    value={leadEditForm.vehicle}
                    onChange={(e) => setLeadEditForm({ ...leadEditForm, vehicle: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="HATCHBACK">Hatchback (WagonR / Indica)</option>
                    <option value="SEDAN">Sedan (Dzire / Etios)</option>
                    <option value="SUV">SUV (Ertiga / Lodgy)</option>
                    <option value="INNOVA">Innova</option>
                    <option value="INNOVA_CRYSTA">Innova Crysta</option>
                    <option value="TEMPO_TRAVELLER">Tempo Traveller</option>
                    <option value="TOW_TRUCK">Under-Wheel Tow Truck</option>
                    <option value="FLATBED_TRUCK">Flatbed Recovery Truck</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Finalized Fare */}
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">
                    Finalized / Quoted Fare (₹) <span className="text-cyan-400 font-normal">(Editable)</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-slate-500 font-bold">₹</span>
                    <input
                      type="number"
                      step="any"
                      required
                      value={leadEditForm.estimated_total_fare}
                      onChange={(e) => setLeadEditForm({ ...leadEditForm, estimated_total_fare: e.target.value })}
                      placeholder="e.g. 2400"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-7 pr-3 py-2 text-xs text-emerald-400 font-bold focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Lead Status</label>
                  <select
                    value={leadEditForm.status}
                    onChange={(e) => setLeadEditForm({ ...leadEditForm, status: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-semibold"
                  >
                    <option value="new">New (Fresh Enquiry)</option>
                    <option value="contacted">Contacted (Called / WhatsApp sent)</option>
                    <option value="qualified">Qualified (Trip confirmed verbally)</option>
                    <option value="converted">Converted (Moved to Bookings)</option>
                    <option value="lost">Lost</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              {/* Pickup & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Pickup Location</label>
                  <input
                    type="text"
                    required
                    value={leadEditForm.origin}
                    onChange={(e) => setLeadEditForm({ ...leadEditForm, origin: e.target.value })}
                    placeholder="e.g. Coimbatore Airport"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Destination Location</label>
                  <input
                    type="text"
                    required
                    value={leadEditForm.destination}
                    onChange={(e) => setLeadEditForm({ ...leadEditForm, destination: e.target.value })}
                    placeholder="e.g. Ooty Lake"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              {/* Travel Date & Travel Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Travel Date</label>
                  <input
                    type="date"
                    value={leadEditForm.travel_date}
                    onChange={(e) => setLeadEditForm({ ...leadEditForm, travel_date: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Travel Time</label>
                  <input
                    type="text"
                    value={leadEditForm.travel_time}
                    onChange={(e) => setLeadEditForm({ ...leadEditForm, travel_time: e.target.value })}
                    placeholder="e.g. 08:00 AM"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    const l = editingLead;
                    setEditingLead(null);
                    setItemToDelete({ type: 'lead', id: l.id, name: l.customer_name, ref: formatServiceLabel(l.service_type) });
                  }}
                  className="px-3 py-2 rounded-xl text-rose-400 hover:bg-rose-500/10 border border-rose-500/20 font-semibold text-xs transition-colors flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={isLeadUpdating || isConverting}
                    onClick={() => setEditingLead(null)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    disabled={isLeadUpdating || isConverting}
                    onClick={() => handleConvertLead(editingLead, {
                      service_type: leadEditForm.service_type,
                      vehicle: leadEditForm.vehicle,
                      estimated_total_fare: leadEditForm.estimated_total_fare,
                      origin: leadEditForm.origin,
                      destination: leadEditForm.destination,
                      travel_date: leadEditForm.travel_date,
                      travel_time: leadEditForm.travel_time,
                      status: 'confirmed',
                    })}
                    className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-lg shadow-emerald-600/20 flex items-center gap-1.5 disabled:opacity-50"
                  >
                    {isConverting ? (
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <ArrowRightCircle className="w-3.5 h-3.5" />
                    )}
                    <span>Convert to Booking</span>
                  </button>
                  <button
                    type="submit"
                    disabled={isLeadUpdating || isConverting}
                    className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-1.5 disabled:opacity-50"
                  >
                    {isLeadUpdating ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Saving...</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Save Changes</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {itemToDelete && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-rose-400">
              <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Permanently Delete {itemToDelete.type === 'booking' ? 'Booking' : 'Lead'}?</h3>
                <div className="text-xs text-rose-400 font-semibold">{itemToDelete.ref || itemToDelete.name}</div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Are you sure you want to permanently delete this {itemToDelete.type} from Supabase? 
              This will remove all associated database records (including status history, notification logs, and customer data if unlinked).
            </p>

            {deleteError && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-xs">
                {deleteError}
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                type="button"
                disabled={isDeleting}
                onClick={() => setItemToDelete(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeleting}
                onClick={handleConfirmDelete}
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition-all shadow-lg shadow-rose-600/20 flex items-center gap-1.5 disabled:opacity-50"
              >
                {isDeleting ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Deleting from Supabase...</span>
                  </>
                ) : (
                  <>
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Yes, Delete Permanently</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
