const SITE_URL = 'https://samayasorg.in'
const DEFAULT_IMAGE = `${SITE_URL}/logo.webp`

const setMeta = (attr, key, content) => {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

const setLink = (rel, href) => {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

const setJsonLd = (id, data) => {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

import { useEffect } from 'react'

export const applyPageSeo = ({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  jsonLd = null,
  summary = null
}) => {
  const canonical = `${SITE_URL}${path === '/' ? '/' : path}`

  document.title = title
  setMeta('name', 'description', description)
  if (summary) {
    setMeta('name', 'summary', summary)
  }
  setLink('canonical', canonical)

  setMeta('property', 'og:title', title)
  setMeta('property', 'og:description', description)
  setMeta('property', 'og:url', canonical)
  setMeta('property', 'og:image', image)
  setMeta('property', 'og:type', 'website')
  setMeta('property', 'og:locale', 'en_IN')

  setMeta('name', 'twitter:card', 'summary_large_image')
  setMeta('name', 'twitter:title', title)
  setMeta('name', 'twitter:description', description)
  setMeta('name', 'twitter:image', DEFAULT_IMAGE)

  // Manage page-specific JSON-LD
  if (jsonLd) {
    setJsonLd('page-jsonld', jsonLd)
  } else {
    document.getElementById('page-jsonld')?.remove()
  }

  // Manage default LocalBusiness JSON-LD to prevent duplicates
  const defaultLd = document.querySelector('script[data-id="default-jsonld"]')
  if (defaultLd) {
    if (jsonLd) {
      // Page has its own schema — hide the default one
      defaultLd.setAttribute('type', 'application/ld-disabled')
    } else {
      // Homepage or page without schema — restore default
      defaultLd.setAttribute('type', 'application/ld+json')
    }
  }
}

export const usePageSeo = (config) => {
  useEffect(() => {
    applyPageSeo(config)
  }, [config.title, config.description, config.path])
}

export { SITE_URL }
