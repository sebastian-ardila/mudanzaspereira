import { writeFileSync } from 'fs'
import { resolve } from 'path'
import zonesData from '../data/zones.json'

const SITE_URL = 'https://mudanzaspereira.co'

const staticPages = [
  '/',
  '/mudanzas-economicas-pereira',
  '/mudanzas-pequenas-pereira',
  '/mudanzas-empresariales-pereira',
  '/acarreos-pereira',
  '/trasteos-pereira',
  '/transporte-muebles-pereira',
  '/precio-mudanza-pereira',
  '/cuanto-cuesta-una-mudanza-en-pereira',
  '/como-preparar-una-mudanza',
  '/empresa-de-mudanzas-en-pereira',
]

function getAllZonePages(): string[] {
  const pages: string[] = []
  for (const city of zonesData.cities) {
    pages.push(city.page)
    for (const commune of city.communes) {
      pages.push(commune.page)
      for (const zone of commune.zones) {
        pages.push(zone.page)
      }
    }
  }
  return pages
}

function generateSitemap(): string {
  const allPages = [...staticPages, ...getAllZonePages()]
  const today = new Date().toISOString().split('T')[0]

  const urls = allPages.map((page) => {
    const priority = page === '/' ? '1.0' : staticPages.includes(page) ? '0.8' : '0.6'
    const changefreq = page === '/' ? 'weekly' : 'monthly'
    return `  <url>
    <loc>${SITE_URL}${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  })

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`
}

const sitemap = generateSitemap()
const publicPath = resolve(import.meta.dirname, '../../public/sitemap.xml')
const distPath = resolve(import.meta.dirname, '../../dist/sitemap.xml')
writeFileSync(publicPath, sitemap, 'utf-8')
writeFileSync(distPath, sitemap, 'utf-8')
console.log(`Sitemap generated with ${sitemap.split('<url>').length - 1} URLs`)
