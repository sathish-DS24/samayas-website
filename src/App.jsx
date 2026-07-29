import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DistrictPage from './pages/DistrictPage'
import RoutePage from './pages/RoutePage'
import RouteIndexPage from './pages/RouteIndexPage'
import ServiceAreasPage from './pages/ServiceAreasPage'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import usePageTracking from './hooks/usePageTracking'

const AppContent = () => {
  usePageTracking()

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service-areas" element={<ServiceAreasPage />} />
        <Route path="/one-way-taxi" element={<RouteIndexPage />} />
        <Route path="/one-way-taxi/:routeSlug" element={<RoutePage />} />
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
