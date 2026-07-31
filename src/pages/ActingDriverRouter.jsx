import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import DistrictDriverPage from './DistrictDriverPage'
import ServiceDriverPage from './ServiceDriverPage'
import { getActingDriverBySlug } from '../data/actingDriversMaster'
import { getDriverServiceBySlug } from '../data/driverServicesMaster'

const ActingDriverRouter = () => {
  const { slug } = useParams()

  if (!slug) {
    return <Navigate to="/acting-driver" replace />
  }

  // 1. Check if slug matches a Service Category Page (e.g. hourly-driver, outstation-driver)
  const serviceObj = getDriverServiceBySlug(slug)
  if (serviceObj) {
    return <ServiceDriverPage serviceObj={serviceObj} />
  }

  // 2. Check if slug matches a District Page (e.g. chennai, tiruchirappalli, coimbatore)
  const districtObj = getActingDriverBySlug(slug)
  if (districtObj) {
    return <DistrictDriverPage districtObj={districtObj} />
  }

  // Fallback to directory
  return <Navigate to="/acting-driver" replace />
}

export default ActingDriverRouter
