import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DistrictPage from './pages/DistrictPage'
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
