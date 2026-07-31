import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import DistrictRecoveryPage from './DistrictRecoveryPage'
import ServiceRecoveryPage from './ServiceRecoveryPage'
import { getRecoveryBySlug } from '../data/recoveryMaster'
import { getRecoveryServiceBySlug } from '../data/recoveryServicesMaster'

const VehicleRecoveryRouter = () => {
  const { slug } = useParams()

  if (!slug) {
    return <Navigate to="/vehicle-recovery" replace />
  }

  // 1. Check if slug matches an Emergency Service Page (e.g. car-recovery, flatbed-towing)
  const serviceObj = getRecoveryServiceBySlug(slug)
  if (serviceObj) {
    return <ServiceRecoveryPage serviceObj={serviceObj} />
  }

  // 2. Check if slug matches a District Page (e.g. chennai, tiruchirappalli, coimbatore)
  const districtObj = getRecoveryBySlug(slug)
  if (districtObj) {
    return <DistrictRecoveryPage districtObj={districtObj} />
  }

  // Fallback to directory
  return <Navigate to="/vehicle-recovery" replace />
}

export default VehicleRecoveryRouter
