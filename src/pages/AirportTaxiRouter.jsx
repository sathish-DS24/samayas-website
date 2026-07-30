import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import AirportHubPage from './AirportHubPage'
import AirportRoutePage from './AirportRoutePage'
import { getAirportBySlug } from '../data/airportsMaster'
import { getAirportRouteBySlug } from '../data/airportRoutesMaster'

const AirportTaxiRouter = () => {
  const { slug } = useParams()

  if (!slug) {
    return <Navigate to="/airport-taxi" replace />
  }

  // 1. Check if slug matches an Airport Hub
  const airportObj = getAirportBySlug(slug)
  if (airportObj) {
    return <AirportHubPage airport={airportObj} />
  }

  // 2. Check if slug matches an Airport Route
  const airportRouteObj = getAirportRouteBySlug(slug)
  if (airportRouteObj) {
    return <AirportRoutePage routeObj={airportRouteObj} />
  }

  // Fallback to airport directory if not found
  return <Navigate to="/airport-taxi" replace />
}

export default AirportTaxiRouter
