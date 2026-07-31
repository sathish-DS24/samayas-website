import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DistrictPage from './pages/DistrictPage'
import RoutePage from './pages/RoutePage'
import RouteIndexPage from './pages/RouteIndexPage'
import ServiceAreasPage from './pages/ServiceAreasPage'
import AirportDirectoryPage from './pages/AirportDirectoryPage'
import AirportTaxiRouter from './pages/AirportTaxiRouter'
import ActingDriverDirectoryPage from './pages/ActingDriverDirectoryPage'
import ActingDriverRouter from './pages/ActingDriverRouter'
import VehicleRecoveryDirectoryPage from './pages/VehicleRecoveryDirectoryPage'
import VehicleRecoveryRouter from './pages/VehicleRecoveryRouter'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import usePageTracking from './hooks/usePageTracking'

const AppContent = () => {
  usePageTracking()

  return (
    <>
      <Routes>
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
        <Route path="/one-way-taxi-:pageSlug" element={<DistrictPage />} />
        <Route path="/:pageSlug" element={<DistrictPage />} />
      </Routes>
      <WhatsAppFloatingButton />
    </>
  )
}

function App() {
  return <AppContent />
}

export default App
