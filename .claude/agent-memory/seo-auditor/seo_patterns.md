---
name: seo_patterns
description: Patrones SEO, issues encontrados, fixes aplicados y reglas del proyecto
type: project
---

## Reglas de tono (del plan)
- USAR: "coordinamos", "gestionamos", "conectamos con operadores verificados", "operadores aliados"
- NUNCA: "nuestros camiones", "nuestro equipo de carga", "nuestra flota", "ofrecemos", "realizamos" en primera persona directa
- La empresa NO hace mudanzas directamente — es intermediaria

## Issues encontrados y corregidos (2026-03-17)

### Crítico
1. **Lenguaje no conforme en content.ts** — "ofrecemos", "realizamos", "Nuestro equipo" → corregido a "coordinamos", "El equipo asignado"
2. **SEO cloaking en prerender.ts** — seoBlock usaba `left:-9999px` (cloaking risk) → corregido a clip-path pattern accesible
3. **Servicios sin enlaces internos** — Services.tsx usaba `<div>` sin link → cambiado a `<Link to={service.href}>`
4. **Páginas duplicadas** — `/mudanzas-empresariales` y `/mudanzas-empresariales-pereira` con contenido casi idéntico → `/mudanzas-empresariales-pereira` ahora tiene canonical apuntando a `/mudanzas-empresariales`

### Alta prioridad
5. **Title home demasiado largo** — 70 chars → reducido a 57 chars: "Mudanzas en Pereira y Dosquebradas | Trasteos y Acarreos"
6. **Meta descriptions largas** — residenciales (162 chars) y acarreos (173 chars) → ambas reducidas a <160 chars
7. **InfoPage sin JSON-LD** — Añadido schema Article con headline, description, publisher
8. **llms.txt inexistente** — Creado en public/llms.txt con info completa del negocio y páginas clave
9. **favicon.ico referenciado pero no existe** — Removida referencia a .ico, añadido apple-touch-icon para el SVG

### Media prioridad
10. **Imágenes PNG pesadas** — mudanzas-pereira.png (1.5MB) y mudanzas-pereira-cajas.png (1.6MB) sin versión WebP
11. **Sitemap desactualizado** — Fecha era 2026-03-10, regenerado a 2026-03-17
12. **Preload LCP image** — Añadido `<link rel="preload" as="image">` para mudanzas-pereira-cajas.png en index.html

## Issues pendientes (requieren acción manual)

- **Convertir PNGs a WebP**: Las dos imágenes en /public suman 3.1MB. Convertir a WebP reduciría ~70%
- **Añadir favicon.ico real**: Generar un .ico de 32x32 a partir del SVG para soporte en browsers legacy
- **Vite chunk splitting**: Sin configuración de rollupOptions en vite.config.ts — considerar separar vendors
- **Google Search Console**: Verificar cobertura e indexación de las 538 páginas
- **Google Business Profile**: No existe configuración — registrar el negocio en GBP para SEO local
- **Core Web Vitals reales**: Medir LCP/CLS/FID con PageSpeed Insights tras el próximo deploy

## Sitemap
- 538 URLs totales (1 home + 12 servicio/info + 2 ciudades + 12 comunas + ~511 zonas)
- Prioridades: home=1.0, servicios/info=0.8, geo-pages=0.6
- Regenerar siempre con: `npx tsx src/scripts/generate-sitemap.ts`

## Keyword mapping (páginas principales)
- "mudanzas en pereira" → `/` y `/mudanzas-pereira`
- "empresa de mudanzas en pereira" → `/empresa-de-mudanzas-en-pereira`
- "mudanzas economicas pereira" → `/mudanzas-economicas-pereira`
- "trasteos pereira" → `/trasteos-pereira`
- "acarreos pereira" → `/acarreos-pereira`
- "mudanzas dosquebradas" → `/mudanzas-dosquebradas`
- "precio mudanza pereira" / "cuanto cuesta mudanza pereira" → `/precio-mudanza-pereira` + `/cuanto-cuesta-una-mudanza-en-pereira`
- Hiperlocales: `/mudanzas-[barrio]-[ciudad]` generados desde zones.json
