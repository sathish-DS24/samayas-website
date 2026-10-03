import { LazyMotion, domAnimation } from 'framer-motion'
import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import usePageTracking from './hooks/usePageTracking'

// Code-split all secondary routes to eliminate massive datasets from initial main thread
const AdminPage = lazy(() => import('./pages/admin/AdminPage'))
const ServiceAreasPage = lazy(() => import('./pages/ServiceAreasPage'))
const DistrictPage = lazy(() => import('./pages/DistrictPage'))
const RouteIndexPage = lazy(() => import('./pages/RouteIndexPage'))
const RoutePage = lazy(() => import('./pages/RoutePage'))
const AirportDirectoryPage = lazy(() => import('./pages/AirportDirectoryPage'))
const AirportTaxiRouter = lazy(() => import('./pages/AirportTaxiRouter'))
const ActingDriverDirectoryPage = lazy(() => import('./pages/ActingDriverDirectoryPage'))
const ActingDriverRouter = lazy(() => import('./pages/ActingDriverRouter'))
const VehicleRecoveryDirectoryPage = lazy(() => import('./pages/VehicleRecoveryDirectoryPage'))
const VehicleRecoveryRouter = lazy(() => import('./pages/VehicleRecoveryRouter'))
const TourDirectoryPage = lazy(() => import('./pages/TourDirectoryPage'))
const TourRouter = lazy(() => import('./pages/TourRouter'))

const PageLoader = () => (
  <div className="min-h-screen bg-primary-950 flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-accent-500 border-t-transparent rounded-full animate-spin" />
  </div>
)

const AppContent = () => {
  usePageTracking()

  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/service-areas/:districtSlug" element={<DistrictPage />} />
          <Route path="/one-way-taxi" element={<RouteIndexPage />} />
          <Route path="/one-way-taxi/:routeSlug" element={<RoutePage />} />
          <Route path="/airport-taxi" element={<AirportDirectoryPage />} />
          <Route path="/airport-taxi/:slug" element={<AirportTaxiRouter />} />
          <Route path="/acting-driver" element={<ActingDriverDirectoryPage />} />
          <Route path="/acting-driver/:slug" element={<ActingDriverRouter />} />
          <Route path="/vehicle-recovery" element={<VehicleRecoveryDirectoryPage />} />
          <Route path="/vehicle-recovery/:slug" element={<VehicleRecoveryRouter />} />
          <Route path="/tour-packages" element={<TourDirectoryPage />} />
          <Route path="/tour-packages/:slug" element={<TourRouter />} />
          <Route path="/one-way-taxi-:pageSlug" element={<DistrictPage />} />
          <Route path="/:pageSlug" element={<DistrictPage />} />
        </Routes>
      </Suspense>
      <WhatsAppFloatingButton />
    </>
  )
}

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <AppContent />
    </LazyMotion>
  )
}

export default App
