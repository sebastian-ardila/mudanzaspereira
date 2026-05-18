---
name: project_structure
description: Stack técnico, rutas, arquitectura y archivos clave del proyecto mudanzaspereira.co
type: project
---

## Stack
- React 19 + TypeScript + Vite 7 + Tailwind CSS v4
- Sitio estático pre-renderizado (536+ páginas HTML)
- Deploy: AWS S3 + CloudFront
- Build: `tsc -b && vite build && tsx src/scripts/prerender.ts && tsx src/scripts/generate-sitemap.ts`

## Archivos SEO clave
- `src/seo/Head.tsx` — Maneja title, meta description, canonical, OG, Twitter via useEffect + querySelector
- `src/seo/JsonLd.tsx` — Schema MovingCompany para toda la organización (solo en HomePage)
- `src/scripts/prerender.ts` — Pre-render estático de todas las rutas a HTML
- `src/scripts/generate-sitemap.ts` — Genera public/sitemap.xml y dist/sitemap.xml
- `public/robots.txt` — Allow: *, Sitemap reference, llms.txt mention
- `public/llms.txt` — Creado en auditoría 2026-03-17 para discoverabilidad LLM
- `public/sitemap.xml` — 538 URLs (regenerar con `npx tsx src/scripts/generate-sitemap.ts`)

## Rutas principales
- `/` — HomePage
- `/mudanzas-pereira`, `/mudanzas-dosquebradas` — CityPage (desde zones.json)
- `/mudanzas-residenciales`, `/mudanzas-empresariales`, `/acarreos-pereira`, `/trasteos-pereira`, `/transporte-muebles-pereira`, `/mudanzas-economicas-pereira`, `/mudanzas-pequenas-pereira` — ServicePage
- `/mudanzas-empresariales-pereira` — ServicePage con canonical → `/mudanzas-empresariales`
- `/precio-mudanza-pereira`, `/cuanto-cuesta-una-mudanza-en-pereira`, `/como-preparar-una-mudanza`, `/empresa-de-mudanzas-en-pereira` — InfoPage
- ~500+ páginas hiperlocales generadas desde `src/data/zones.json`

## Datos geográficos
- `src/data/zones.json` — Fuente única de verdad para ciudades, comunas, barrios
- `src/utils/zones.ts` — getCities(), getAllZones(), getAllCommunes()
- `src/utils/content.ts` — Variantes de intros, descripciones y FAQs por hash de nombre de zona

## Structured data implementados
- MovingCompany — JsonLd.tsx (solo home)
- Service — ServicePage.tsx
- Article — InfoPage.tsx (añadido 2026-03-17)
- FAQPage — HomeFAQ.tsx (via useEffect)
- BreadcrumbList — Breadcrumb.tsx (en ServicePage, InfoPage, ZonePage, CommunePage)
- SiteNavigationElement — MainLayout.tsx
