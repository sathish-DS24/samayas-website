import React from 'react'
import { useParams } from 'react-router-dom'
import TourDirectoryPage from './TourDirectoryPage'
import DestinationPage from './DestinationPage'
import CategoryPage from './CategoryPage'
import TourPackagePage from './TourPackagePage'
import { tourDestinationsDataset } from '../data/tourDestinationsMaster'
import { tourCategoriesDataset } from '../data/tourCategoriesMaster'
import { tourPackagesDataset } from '../data/tourPackagesMaster'

const TourRouter = () => {
  const { slug } = useParams()

  if (!slug) {
    return <TourDirectoryPage />
  }

  // 1. Check if slug matches an individual Tour Package or Tour Route
  const pkgMatch = tourPackagesDataset.find(p => p.slug.toLowerCase() === slug.toLowerCase())
  if (pkgMatch) {
    return <TourPackagePage pkg={pkgMatch} />
  }

  // 2. Check if slug matches a Destination
  const destMatch = tourDestinationsDataset.find(d => d.slug.toLowerCase() === slug.toLowerCase())
  if (destMatch) {
    return <DestinationPage destination={destMatch} />
  }

  // 3. Check if slug matches a Tour Category
  const catMatch = tourCategoriesDataset.find(c => c.slug.toLowerCase() === slug.toLowerCase())
  if (catMatch) {
    return <CategoryPage category={catMatch} />
  }

  // Fallback to master Tour Directory
  return <TourDirectoryPage />
}

export default TourRouter
