import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { districts } from '../src/data/districts.js'
import { routesList } from '../src/data/routes.js'
import { airportsMasterDataset } from '../src/data/airportsMaster.js'
import { airportRoutesDataset } from '../src/data/airportRoutesMaster.js'
import { actingDriversDataset } from '../src/data/actingDriversMaster.js'
import { driverServicesDataset } from '../src/data/driverServicesMaster.js'
import { recoveryMasterDataset } from '../src/data/recoveryMaster.js'
import { recoveryServicesDataset } from '../src/data/recoveryServicesMaster.js'
import { tourDestinationsDataset } from '../src/data/tourDestinationsMaster.js'
import { tourCategoriesDataset } from '../src/data/tourCategoriesMaster.js'
import { tourPackagesDataset } from '../src/data/tourPackagesMaster.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SITE_URL = 'https://samayasorg.in'
const today = new Date().toISOString().split('T')[0]

const urls = [
  { loc: `${SITE_URL}/`, priority: '1.0', changefreq: 'weekly' },
  { loc: `${SITE_URL}/service-areas`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${SITE_URL}/one-way-taxi`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${SITE_URL}/airport-taxi`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${SITE_URL}/acting-driver`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${SITE_URL}/vehicle-recovery`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${SITE_URL}/tour-packages`, priority: '0.95', changefreq: 'weekly' },
  ...districts.map((d) => ({
    loc: `${SITE_URL}/service-areas/${d.slug}`,
    priority: '0.8',
    changefreq: 'monthly',
  })),
  ...routesList.map((r) => ({
    loc: `${SITE_URL}/one-way-taxi/${r.slug}`,
    priority: '0.85',
    changefreq: 'weekly',
  })),
  ...airportsMasterDataset.map((a) => ({
    loc: `${SITE_URL}/airport-taxi/${a.slug}`,
    priority: '0.9',
    changefreq: 'weekly',
  })),
  ...airportRoutesDataset.map((ar) => ({
    loc: `${SITE_URL}/airport-taxi/${ar.slug}`,
    priority: '0.85',
    changefreq: 'weekly',
  })),
  ...actingDriversDataset.map((ad) => ({
    loc: `${SITE_URL}/acting-driver/${ad.slug}`,
    priority: '0.85',
    changefreq: 'weekly',
  })),
  ...driverServicesDataset.map((ds) => ({
    loc: `${SITE_URL}/acting-driver/${ds.slug}`,
    priority: '0.85',
    changefreq: 'weekly',
  })),
  ...recoveryMasterDataset.map((rm) => ({
    loc: `${SITE_URL}/vehicle-recovery/${rm.slug}`,
    priority: '0.85',
    changefreq: 'weekly',
  })),
  ...recoveryServicesDataset.map((rs) => ({
    loc: `${SITE_URL}/vehicle-recovery/${rs.slug}`,
    priority: '0.85',
    changefreq: 'weekly',
  })),
  ...tourDestinationsDataset.map((td) => ({
    loc: `${SITE_URL}/tour-packages/${td.slug}`,
    priority: '0.85',
    changefreq: 'weekly',
  })),
  ...tourCategoriesDataset.map((tc) => ({
    loc: `${SITE_URL}/tour-packages/${tc.slug}`,
    priority: '0.85',
    changefreq: 'weekly',
  })),
  ...tourPackagesDataset.map((tp) => ({
    loc: `${SITE_URL}/tour-packages/${tp.slug}`,
    priority: '0.85',
    changefreq: 'weekly',
  })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml')
fs.writeFileSync(outPath, xml, 'utf8')
console.log(`Sitemap generated: ${urls.length} URLs → ${outPath}`)
