Actúa como un Staff Frontend Engineer, SEO Engineer, UX Engineer y Cloud Architect experto en:

- React
- TypeScript
- Vite
- Tailwind CSS
- SEO técnico
- SEO local
- programmatic SEO
- landing pages de alta conversión
- despliegue de sitios estáticos en AWS S3 + CloudFront

Tu tarea es generar un proyecto completo, profesional y listo para producción para el sitio web:

[URL_DEL_SITIO]

IMPORTANTE:
Este sitio no representa una sola empresa de [INDUSTRIA] específica. Es un proyecto de generación de leads locales (modelo rank & rent) para captar personas que buscan servicios de [INDUSTRIA] en [CIUDAD], [PAÍS], y luego redirigir esos leads a empresas asociadas.

La web debe funcionar como una marca local de captación de clientes que coordina servicios con operadores y empresas aliadas verificadas. NO somos una empresa de [INDUSTRIA] directa — somos intermediarios que conectan al cliente con el operador adecuado.

El objetivo del sitio es:
1. posicionarse en Google para búsquedas locales relacionadas con [INDUSTRIA] en [CIUDAD] y [CIUDADES_CERCANAS]
2. captar leads por WhatsApp y llamada
3. escalar SEO creando subpáginas hiperlocales por barrios, comunas, zonas, corregimientos y sectores del área metropolitana

Debes generar una solución real, no pseudocódigo.
Debes entregar código listo para copiar y pegar.
No omitas archivos importantes.

==================================================
STACK OBLIGATORIO
==================================================

Usa exactamente este stack:

- React
- TypeScript
- Vite
- Tailwind CSS v4 (usando @theme para custom tokens)

Restricciones:
- no usar Next.js
- no usar backend
- no usar librerías innecesarias
- no usar dependencias pesadas
- el sitio debe funcionar como sitio estático
- el resultado debe ser compatible con AWS S3 + CloudFront
- la arquitectura debe ser limpia, mantenible y escalable
- la solución debe ser apta para generar muchas rutas SEO desde datos estructurados

==================================================
CONTEXTO DEL NEGOCIO
==================================================

Nombre comercial visible del sitio:
[NOMBRE_COMERCIAL]

Dominio:
[URL_DEL_SITIO]

Ubicación principal:
[CIUDAD], [DEPARTAMENTO/ESTADO], [PAÍS]

Cobertura principal:
- [CIUDAD]
- [CIUDADES_CERCANAS]

Cobertura secundaria:
- corregimientos y sectores periféricos del municipio
- zonas metropolitanas relacionadas

Modelo de negocio:
- Captación de leads (NO empresa de [INDUSTRIA] directa)
- Coordinamos servicios con operadores y empresas aliadas verificadas
- El cliente nos contacta, cotizamos y asignamos un operador adecuado
- Trabajamos con aliados que conocemos y supervisamos

Servicios que coordinamos:
- [SERVICIO_1]
- [SERVICIO_2]
- [SERVICIO_3]
- [SERVICIO_4]
- [SERVICIO_5]
- [SERVICIO_6]

Teléfono / WhatsApp: [TELEFONO]
Horario: [HORARIO]
El sitio NO usa email.

==================================================
TONO Y COPY
==================================================

Reglas de comunicación:
- Usar "coordinamos", "gestionamos", "conectamos con operadores verificados"
- Usar "operadores aliados", "empresas aliadas", "equipos verificados"
- NUNCA decir "nuestros [VEHICULOS/EQUIPOS]", "nuestro equipo de [OPERACIÓN]", "nuestra flota"
- NUNCA fabricar testimonios, reseñas, estadísticas o datos no verificables
- NUNCA prometer tiempos exactos, seguros, o garantías que no existan
- Tono: directo, confiable, local, profesional pero cercano
- Lenguaje local natural (usar sinónimos y jerga local de [PAÍS] para los servicios)

==================================================
OBJETIVO DE CONVERSIÓN
==================================================

La web debe empujar al usuario a hacer una de estas acciones:

- escribir por WhatsApp
- llamar

La conversión debe ser prioritaria en todo el diseño.

Incluir obligatoriamente:
- botón principal de WhatsApp en el hero
- botón secundario de llamada
- CTA visibles a lo largo de toda la página
- botón flotante de WhatsApp en móvil
- mensajes de confianza como:
  - respuesta rápida
  - cotización sin compromiso
  - atención por WhatsApp
  - operadores verificados
  - cobertura en [CIUDAD] y [CIUDADES_CERCANAS]

==================================================
SEO LOCAL Y PROGRAMMATIC SEO
==================================================

Este proyecto debe estar preparado para SEO local fuerte y para SEO programático.

Existe un archivo llamado:

zones.json

Ese archivo contiene:
- barrios
- comunas
- zonas
- corregimientos
- sectores
- área metropolitana
- slugs u otros datos geográficos de [CIUDAD] y alrededores

Debes usar ese archivo zones.json como fuente principal de datos geográficos para generar subpáginas SEO automáticamente.

IMPORTANTE:
- referencia explícitamente zones.json dentro de la arquitectura del proyecto
- úsalo para generar páginas dinámicas estáticas o rutas preconstruidas
- úsalo para alimentar navegación interna, enlaces contextuales y clusters SEO
- úsalo para construir páginas por ubicación como:
  - /[INDUSTRIA]-[BARRIO]-[CIUDAD]
  - /[INDUSTRIA]-[ZONA]-[CIUDAD]
- úsalo también para generar sitemap y estructura interna enlazada

Cada subpágina creada a partir de zones.json debe:
- tener contenido único
- incluir H1 optimizado
- incluir title SEO específico
- incluir meta description específica
- incluir CTA a WhatsApp
- incluir CTA a llamada
- incluir FAQ o contenido contextual local
- incluir enlaces a otras zonas cercanas
- evitar contenido duplicado
- usar plantillas reutilizables con variaciones textuales reales

==================================================
KEYWORDS OBJETIVO
==================================================

Optimiza el sitio para búsquedas como:

- [INDUSTRIA] en [CIUDAD]
- empresa de [INDUSTRIA] en [CIUDAD]
- [INDUSTRIA] económico/a [CIUDAD]
- [SINÓNIMO_LOCAL_1] [CIUDAD]
- [SINÓNIMO_LOCAL_2] [CIUDAD]
- [INDUSTRIA] [CIUDADES_CERCANAS]
- cuánto cuesta [SERVICIO] en [CIUDAD]
- precio de [SERVICIO] en [CIUDAD]

Y para búsquedas hiperlocales derivadas de zones.json, por ejemplo:
- [INDUSTRIA] en [barrio]
- [SINÓNIMO_1] en [barrio]
- [SINÓNIMO_2] en [zona]
- [INDUSTRIA] en [comuna]
- [INDUSTRIA] en [sector] [CIUDAD]

==================================================
ESTILO VISUAL Y UX
==================================================

La web debe transmitir:
- confianza
- rapidez
- profesionalismo
- cercanía
- seguridad
- orden
- claridad

Estilo visual:
- moderno con personalidad (no genérico "AI slop")
- dark hero con paleta de acento apropiada para la industria
- mobile first
- escaneable
- con buena jerarquía visual
- sin exceso de texto en bloques largos
- con tarjetas simples
- con espaciado consistente
- con apariencia comercial seria
- orientado a conversión
- scroll animations (fade-up, scale-in, fade-left)
- hover effects en tarjetas e iconos
- noise texture y decorative orbs en secciones dark

Tipografía:
- Elegir una fuente display con carácter para headings (no genérica)
- Elegir una fuente body legible y moderna
- Ambas cargadas desde Google Fonts

No usar colores chillones.
El diseño debe verse bien en móvil, tablet y desktop.

==================================================
ESTRUCTURA DEL SITIO
==================================================

Debes crear una arquitectura de sitio pensada para:
1. una landing principal fuerte
2. páginas de servicio
3. páginas informativas
4. páginas hiperlocales generadas desde zones.json

Rutas mínimas requeridas:

Páginas principales:
- /
- /[INDUSTRIA]-[CIUDAD]
- /[INDUSTRIA]-[CIUDAD_CERCANA]

Páginas de servicio:
- /[SERVICIO_1]-[CIUDAD]
- /[SERVICIO_2]-[CIUDAD]
- /[SERVICIO_3]-[CIUDAD]
- /[SERVICIO_4]-[CIUDAD]

Páginas informativas:
- /precio-[INDUSTRIA]-[CIUDAD]
- /cuanto-cuesta-[SERVICIO]-en-[CIUDAD]
- /como-preparar-[SERVICIO]
- /empresa-de-[INDUSTRIA]-en-[CIUDAD]

Páginas hiperlocales:
- generadas automáticamente desde zones.json

==================================================
ESTRUCTURA DE LA LANDING PRINCIPAL
==================================================

La página principal debe contener, en este orden:

1. Header
- logo textual simple: [NOMBRE_COMERCIAL]
- navegación a secciones (Servicios, Cobertura)
- botón visible de WhatsApp
- menú responsive

2. Hero
- H1: "[NOMBRE_COMERCIAL]" o "[INDUSTRIA] [CIUDAD]"
- subtítulo persuasivo orientado a coordinación con operadores verificados
- CTA principal a WhatsApp
- CTA secundario de llamada
- 4 bullets de confianza
- imagen o ilustración representativa
- fondo oscuro con gradient transition suave hacia sección blanca

3. Trust badges / Stats
- Estadísticas reales y verificables (barrios cubiertos, tiempo de respuesta, ciudades, disponibilidad)
- Animated counters al hacer scroll
- NO inventar números de clientes atendidos ni reseñas

4. Cómo funciona
- Paso 1: Contacto → Paso 2: Cotización → Paso 3: Coordinación → Paso 4: Ejecución
- Refleja el modelo de coordinación con aliados

5. Servicios
- Lista de servicios principales que se coordinan
- Usa "coordinamos" en las descripciones

6. Beneficios
- Respuesta rápida, disponibilidad, operadores verificados, cotización sin compromiso
- Enfatiza que trabajamos con aliados verificados

7. Cobertura
- Ciudades principales con enlaces a comunas y barrios
- Generada desde zones.json

8. FAQ
- Preguntas honestas incluyendo "¿Ustedes realizan el servicio directamente?"
- Respuesta transparente sobre modelo de coordinación con aliados
- Schema FAQPage en JSON-LD

9. CTA final
- Mensaje de cierre orientado a acción
- WhatsApp + Llamar

10. Footer
- teléfono, WhatsApp, horario, cobertura
- enlaces a páginas importantes
- referencia al dominio

NOTA: No incluir sección de testimonios si no hay reseñas reales verificables.
NOTA: No incluir formulario extenso — WhatsApp es el canal principal de conversión.

==================================================
PÁGINAS HIPERLOCALES GENERADAS DESDE zones.json
==================================================

Debes implementar una solución escalable que use zones.json para generar páginas SEO por ubicación.

Cada página hiperlocal debe incluir:
- título específico por ubicación
- H1 como "[INDUSTRIA] en [Zona]"
- párrafo introductorio único
- sección breve de servicios en esa zona
- CTA a WhatsApp
- CTA a llamada
- mini FAQ local
- enlaces a zonas relacionadas
- texto optimizado para intención comercial local
- contenido suficiente para rankear, pero sin relleno artificial
- estructura reutilizable sin verse repetitiva

Necesito que la arquitectura contemple:
- plantillas reutilizables para páginas de ubicación
- utilidades para slug
- normalización de nombres
- data layer desde zones.json
- rutas generadas desde datos
- navegación interna entre zonas cercanas
- posibilidad de agrupar por comuna, tipo o cluster geográfico

==================================================
SEO TÉCNICO OBLIGATORIO
==================================================

Implementa correctamente:

- title tags por página
- meta descriptions por página
- canonical por página
- Open Graph con imagen
- Twitter cards con imagen
- robots.txt
- sitemap.xml (generado automáticamente)
- favicon
- JSON-LD con schema apropiado para la industria (sin reseñas fabricadas)
- FAQPage schema en la sección FAQ
- HTML semántico
- jerarquía correcta de headings
- enlaces internos contextuales
- estructura preparada para Lighthouse alto
- Pre-rendering de todas las rutas a HTML estático (script de prerender)
- Meta tags reemplazados (no duplicados) vía Head.tsx con querySelector

==================================================
BUILD Y DEPLOY
==================================================

Pipeline de build:
```
tsc -b → vite build → prerender.ts → generate-sitemap.ts
```

Resultado: N páginas HTML estáticas en dist/

Deploy:
- AWS S3 (static hosting)
- AWS CloudFront (CDN + HTTPS)
- Rutas SPA con fallback a index.html
- Caché optimizado para assets estáticos

Comandos:
- `npm run dev` — desarrollo local
- `npm run build` — build completo (compile + bundle + prerender + sitemap)

==================================================
REQUISITOS TÉCNICOS
==================================================

Organización del proyecto:

```
src/
  components/     # Button, CTABanner, FAQ, SectionTitle
  hooks/          # useInView (IntersectionObserver)
  layouts/        # MainLayout (Header, Footer, FloatingWhatsApp)
  pages/          # HomePage, ServicePage, InfoPage, CityPage, CommunePage, ZonePage
  scripts/        # prerender.ts, generate-sitemap.ts
  sections/       # Hero, TrustBadges, HowItWorks, Services, Benefits, Coverage, FAQ
  seo/            # Head.tsx, JsonLd.tsx
  styles/         # index.css (Tailwind v4 @theme tokens)
  utils/          # constants.ts, zones.ts, content.ts
  App.tsx
  main.tsx
zones.json        # datos geográficos (barrios, comunas, ciudades)
```

Requisitos técnicos:
- TypeScript bien tipado
- componentes reutilizables
- separación clara entre layout, secciones, páginas y data
- buena legibilidad de código
- accesibilidad básica
- formularios con labels correctos
- botones y enlaces semánticos
- sin dependencias innecesarias
- CSS animations (fade-up, fade-left, fade-right, scale-in) con stagger support

==================================================
VARIABLES A REEMPLAZAR
==================================================

Para adaptar este boilerplate a cualquier industria, reemplaza:

| Variable | Ejemplo |
|----------|---------|
| [URL_DEL_SITIO] | https://mudanzaspereira.co |
| [NOMBRE_COMERCIAL] | Mudanzas Pereira |
| [INDUSTRIA] | mudanzas |
| [CIUDAD] | Pereira |
| [CIUDADES_CERCANAS] | Dosquebradas |
| [DEPARTAMENTO/ESTADO] | Risaralda |
| [PAÍS] | Colombia |
| [TELEFONO] | +57 317 782 2100 |
| [HORARIO] | Atención 24 horas por WhatsApp |
| [SERVICIO_1..N] | mudanzas residenciales, acarreos, etc. |
| [SINÓNIMO_LOCAL_1..N] | trasteos, acarreos (jerga local) |
| [VEHICULOS/EQUIPOS] | camiones (lo que NO debemos decir que es "nuestro") |
