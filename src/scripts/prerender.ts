import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import zonesData from '../data/zones.json'

const SITE_URL = 'https://mudanzaspereira.co'
const DIST = resolve(import.meta.dirname, '../../dist')
const template = readFileSync(resolve(DIST, 'index.html'), 'utf-8')

interface PageData {
  path: string
  title: string
  description: string
  h1: string
  content: string
  canonical: string
}

// Collect all pages with their SEO data
function getAllPages(): PageData[] {
  const pages: PageData[] = []

  // Home
  pages.push({
    path: '/',
    title: 'Mudanzas en Pereira y Dosquebradas | Servicio Profesional de Mudanzas',
    description: 'Servicio profesional de mudanzas en Pereira y Dosquebradas. Mudanzas residenciales, acarreos, trasteos y transporte de muebles. Cotización gratis por WhatsApp. Atención 24 horas.',
    h1: 'Mudanzas en Pereira y Dosquebradas',
    content: 'Servicio profesional de mudanzas, trasteos y acarreos en Pereira y Dosquebradas. Cotización rápida por WhatsApp. Atención las 24 horas. Mudanzas residenciales, mudanzas de apartamentos, mudanzas empresariales, acarreos, transporte de muebles, carga y descarga.',
    canonical: '/',
  })

  // Service pages
  const servicePages = [
    { path: '/mudanzas-economicas-pereira', title: 'Mudanzas Económicas en Pereira | Precios Justos', h1: 'Mudanzas Económicas en Pereira', desc: 'Mudanzas económicas en Pereira. Servicio profesional a precios accesibles. Cotización gratis por WhatsApp.' },
    { path: '/mudanzas-pequenas-pereira', title: 'Mudanzas Pequeñas en Pereira | Servicio Rápido', h1: 'Mudanzas Pequeñas en Pereira', desc: 'Servicio de mudanzas pequeñas en Pereira. Ideal para mover pocos muebles o electrodomésticos.' },
    { path: '/mudanzas-empresariales-pereira', title: 'Mudanzas Empresariales en Pereira | Oficinas y Locales', h1: 'Mudanzas Empresariales en Pereira', desc: 'Mudanzas empresariales en Pereira. Trasladamos oficinas y locales comerciales.' },
    { path: '/acarreos-pereira', title: 'Acarreos en Pereira | Transporte de Carga', h1: 'Acarreos en Pereira', desc: 'Servicio de acarreos en Pereira y Dosquebradas. Transporte de objetos individuales y cargas puntuales.' },
    { path: '/transporte-muebles-pereira', title: 'Transporte de Muebles en Pereira | Servicio Profesional', h1: 'Transporte de Muebles en Pereira', desc: 'Transporte de muebles en Pereira. Movemos sofás, camas, escritorios, neveras y más.' },
  ]
  for (const sp of servicePages) {
    pages.push({ path: sp.path, title: sp.title, description: sp.desc, h1: sp.h1, content: sp.desc, canonical: sp.path })
  }

  // Info pages
  const infoPages = [
    { path: '/precio-mudanza-pereira', title: 'Precio de Mudanza en Pereira | ¿Cuánto Cuesta?', h1: 'Precio de Mudanza en Pereira', desc: 'Conoce los precios de mudanzas en Pereira. Rangos de precio y cómo obtener la mejor cotización.' },
    { path: '/cuanto-cuesta-una-mudanza-en-pereira', title: '¿Cuánto Cuesta una Mudanza en Pereira? | Guía de Precios', h1: '¿Cuánto Cuesta una Mudanza en Pereira?', desc: 'Descubre cuánto cuesta una mudanza en Pereira. Guía completa de precios.' },
    { path: '/como-preparar-una-mudanza', title: 'Cómo Preparar una Mudanza | Guía Práctica', h1: 'Cómo Preparar una Mudanza', desc: 'Guía práctica para preparar tu mudanza en Pereira.' },
    { path: '/empresa-de-mudanzas-en-pereira', title: 'Empresa de Mudanzas en Pereira | Servicio Profesional', h1: 'Empresa de Mudanzas en Pereira', desc: 'Empresa de mudanzas en Pereira con cobertura en Pereira y Dosquebradas.' },
  ]
  for (const ip of infoPages) {
    pages.push({ path: ip.path, title: ip.title, description: ip.desc, h1: ip.h1, content: ip.desc, canonical: ip.path })
  }

  // City pages
  for (const city of zonesData.cities) {
    const totalZones = city.communes.reduce((sum: number, c: { zones: unknown[] }) => sum + c.zones.length, 0)
    pages.push({
      path: city.page,
      title: `Mudanzas en ${city.name} | Cotización Gratis por WhatsApp`,
      description: `Servicio profesional de mudanzas en ${city.name}. Cubrimos las ${city.communes.length} comunas y más de ${totalZones} barrios. Cotización gratis.`,
      h1: `Mudanzas en ${city.name}`,
      content: `Servicio completo de mudanzas en ${city.name}. Cubrimos las ${city.communes.length} comunas y más de ${totalZones} barrios y sectores. Mudanzas residenciales, empresariales, acarreos, trasteos y transporte de muebles. Comunas: ${city.communes.map((c: { name: string }) => c.name).join(', ')}.`,
      canonical: city.page,
    })

    // Commune pages
    for (const commune of city.communes) {
      const zoneNames = commune.zones.map((z: { name: string }) => z.name).join(', ')
      pages.push({
        path: commune.page,
        title: `Mudanzas en ${commune.name}, ${city.name} | Servicio Profesional`,
        description: `Servicio de mudanzas en ${commune.name}, ${city.name}. Cubrimos todos los barrios de la comuna. Cotización por WhatsApp.`,
        h1: `Mudanzas en ${commune.name}, ${city.name}`,
        content: `Servicio profesional de mudanzas en la comuna ${commune.name} de ${city.name}. Barrios: ${zoneNames}.`,
        canonical: commune.page,
      })

      // Zone pages
      for (const zone of commune.zones) {
        pages.push({
          path: zone.page,
          title: `Mudanzas en ${zone.name}, ${city.name} | Servicio Profesional`,
          description: `Servicio de mudanzas en ${zone.name}, ${city.name}. Mudanzas residenciales, acarreos y trasteos. Cotización rápida por WhatsApp.`,
          h1: `Mudanzas en ${zone.name}, ${city.name}`,
          content: `Servicio de mudanzas profesional en ${zone.name}, ${city.name}. Mudanzas residenciales, acarreos, trasteos y transporte de muebles en ${zone.name} y alrededores. Comuna ${commune.name}. Cotización sin compromiso por WhatsApp.`,
          canonical: zone.page,
        })
      }
    }
  }

  return pages
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function renderPage(page: PageData): string {
  // SEO content block that crawlers can read without JS
  const seoBlock = `<div id="seo-content" style="display:none" aria-hidden="true"><h1>${escapeHtml(page.h1)}</h1><p>${escapeHtml(page.content)}</p></div>`

  let html = template

  // Replace title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(page.title)}</title>`
  )

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${escapeHtml(page.description)}" />`
  )

  // Add canonical and OG tags before </head>
  const headTags = `
    <link rel="canonical" href="${SITE_URL}${page.canonical}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:url" content="${SITE_URL}${page.canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Mudanzas Pereira" />
    <meta property="og:image" content="${SITE_URL}/mudanza-pereira.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta name="twitter:description" content="${escapeHtml(page.description)}" />
    <meta name="twitter:image" content="${SITE_URL}/mudanza-pereira.jpg" />`

  html = html.replace('</head>', `${headTags}\n  </head>`)

  // Inject SEO content inside #root so crawlers see it before JS loads
  html = html.replace('<div id="root"></div>', `<div id="root">${seoBlock}</div>`)

  return html
}

function writePage(page: PageData, html: string) {
  let filePath: string
  if (page.path === '/') {
    filePath = resolve(DIST, 'index.html')
  } else {
    // /mudanzas-pereira -> dist/mudanzas-pereira/index.html
    const dir = resolve(DIST, page.path.slice(1))
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true })
    }
    filePath = resolve(dir, 'index.html')
  }
  writeFileSync(filePath, html, 'utf-8')
}

// Run
const pages = getAllPages()
let count = 0
for (const page of pages) {
  const html = renderPage(page)
  writePage(page, html)
  count++
}

console.log(`Pre-rendered ${count} pages to ${DIST}`)
