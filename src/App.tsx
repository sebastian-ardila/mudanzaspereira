import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { getCities, getAllZones, getAllCommunes } from './utils/zones'
import ScrollToTop from './components/ScrollToTop'

const HomePage = lazy(() => import('./pages/HomePage'))
const ZonePage = lazy(() => import('./templates/ZonePage'))
const CommunePage = lazy(() => import('./templates/CommunePage'))
const CityPage = lazy(() => import('./templates/CityPage'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const InfoPage = lazy(() => import('./pages/InfoPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
  </div>
)

const servicePages = [
  {
    path: '/mudanzas-economicas-pereira',
    title: 'Mudanzas Económicas en Pereira | Precios Justos',
    h1: 'Mudanzas Económicas en Pereira',
    metaDescription: 'Mudanzas económicas en Pereira. Servicio profesional a precios accesibles. Cotización gratis por WhatsApp. Cobertura en Pereira y Dosquebradas.',
    content: [
      'Sabemos que una mudanza puede representar un gasto importante. Por eso ofrecemos un servicio de mudanzas económicas en Pereira sin sacrificar la calidad. Nuestro equipo se encarga de todo: carga, transporte y descarga de tus pertenencias a precios justos.',
      'Nuestras mudanzas económicas incluyen personal capacitado, vehículos de carga adecuados y el cuidado que tus muebles y objetos merecen. No importa si es una mudanza pequeña o grande, tenemos opciones que se ajustan a tu presupuesto.',
      'Cubrimos todos los barrios de Pereira y Dosquebradas. Escríbenos por WhatsApp para recibir una cotización personalizada sin compromiso. Te respondemos en minutos.',
    ],
  },
  {
    path: '/mudanzas-pequenas-pereira',
    title: 'Mudanzas Pequeñas en Pereira | Servicio Rápido',
    h1: 'Mudanzas Pequeñas en Pereira',
    metaDescription: 'Servicio de mudanzas pequeñas en Pereira. Ideal para mover pocos muebles, electrodomésticos o cajas. Cotización rápida por WhatsApp.',
    content: [
      '¿Necesitas mover solo unos pocos muebles o electrodomésticos? Nuestro servicio de mudanzas pequeñas en Pereira es perfecto para ti. No necesitas contratar una mudanza completa cuando solo tienes unas pocas cosas que trasladar.',
      'Movemos camas, sofás, neveras, lavadoras, escritorios y cualquier objeto que necesites llevar de un lugar a otro en Pereira o Dosquebradas. Nuestro equipo se encarga de la carga y descarga con cuidado.',
      'Contáctanos por WhatsApp, cuéntanos qué necesitas mover y te damos una cotización al instante. Servicio rápido, puntual y a buen precio.',
    ],
  },
  {
    path: '/mudanzas-empresariales-pereira',
    title: 'Mudanzas Empresariales en Pereira | Oficinas y Locales',
    h1: 'Mudanzas Empresariales en Pereira',
    metaDescription: 'Mudanzas empresariales en Pereira. Trasladamos oficinas, locales comerciales y equipos de trabajo. Planificación profesional. Cotización por WhatsApp.',
    content: [
      'Realizamos mudanzas empresariales en Pereira con planificación profesional para minimizar el impacto en tu negocio. Trasladamos oficinas completas, locales comerciales, consultorios y espacios de trabajo.',
      'Nuestro equipo maneja con cuidado equipos de cómputo, archivos, mobiliario de oficina y equipos especializados. Coordinamos cada detalle para que tu empresa retome operaciones lo antes posible.',
      'Ofrecemos horarios flexibles, incluyendo fines de semana y horarios nocturnos para empresas que no pueden detener operaciones. Solicita tu cotización por WhatsApp.',
    ],
  },
  {
    path: '/acarreos-pereira',
    title: 'Acarreos en Pereira | Transporte de Carga',
    h1: 'Acarreos en Pereira',
    metaDescription: 'Servicio de acarreos en Pereira y Dosquebradas. Transporte de objetos individuales, electrodomésticos y cargas puntuales. Cotización por WhatsApp.',
    content: [
      'Nuestro servicio de acarreos en Pereira te permite mover objetos individuales, electrodomésticos o cargas puntuales sin necesidad de contratar una mudanza completa. Ideal cuando compras un mueble nuevo, vendes un electrodoméstico o necesitas llevar cosas de un lado a otro.',
      'Contamos con vehículos de diferentes tamaños para adaptarnos a tu necesidad. Desde una camioneta para objetos pequeños hasta camiones para cargas más grandes. Siempre con personal de apoyo para carga y descarga.',
      'Cubrimos toda el área de Pereira y Dosquebradas. Escríbenos por WhatsApp con lo que necesitas mover y te cotizamos al instante.',
    ],
  },
  {
    path: '/transporte-muebles-pereira',
    title: 'Transporte de Muebles en Pereira | Servicio Profesional',
    h1: 'Transporte de Muebles en Pereira',
    metaDescription: 'Transporte de muebles en Pereira. Movemos sofás, camas, escritorios, neveras y más. Cuidado profesional. Cotización gratis por WhatsApp.',
    content: [
      'Servicio especializado de transporte de muebles en Pereira. Movemos todo tipo de muebles: sofás, camas, comedores, escritorios, bibliotecas, neveras, lavadoras y más. Cada pieza recibe el cuidado que merece durante todo el traslado.',
      'Nuestro personal sabe cómo manipular muebles pesados y delicados. Usamos técnicas de protección para evitar rayones, golpes o daños durante la carga, el transporte y la descarga.',
      'Ya sea que necesites mover un solo mueble o varios, contáctanos por WhatsApp para una cotización rápida. Servicio disponible en Pereira y Dosquebradas.',
    ],
  },
]

const infoPages = [
  {
    path: '/precio-mudanza-pereira',
    title: 'Precio de Mudanza en Pereira | ¿Cuánto Cuesta?',
    h1: 'Precio de Mudanza en Pereira',
    metaDescription: 'Conoce los precios de mudanzas en Pereira. Factores que influyen en el costo, rangos de precio y cómo obtener la mejor cotización. Consulta gratis por WhatsApp.',
    content: [
      'El precio de una mudanza en Pereira depende de varios factores: la cantidad de muebles y objetos a trasladar, la distancia entre origen y destino, si hay escaleras o ascensor, y los servicios adicionales que necesites como embalaje.',
      'Una mudanza pequeña dentro de Pereira puede empezar desde $80.000 a $150.000 COP. Una mudanza de apartamento mediano oscila entre $150.000 y $350.000 COP. Mudanzas de casas grandes o con mayor distancia pueden variar entre $300.000 y $800.000 COP o más.',
      'Estos son rangos referenciales. Cada mudanza es única y el precio final depende de tu caso particular. La mejor forma de conocer el costo exacto es contactarnos por WhatsApp: nos cuentas tu situación y te damos una cotización precisa en minutos.',
      'No cobramos por cotizar. Nuestra cotización es sin compromiso y completamente gratuita.',
    ],
  },
  {
    path: '/cuanto-cuesta-una-mudanza-en-pereira',
    title: '¿Cuánto Cuesta una Mudanza en Pereira? | Guía de Precios',
    h1: '¿Cuánto Cuesta una Mudanza en Pereira?',
    metaDescription: 'Descubre cuánto cuesta una mudanza en Pereira. Guía completa de precios, factores de costo y cómo ahorrar en tu mudanza. Cotización gratis por WhatsApp.',
    content: [
      'Esta es una de las preguntas más frecuentes que recibimos. El costo de una mudanza en Pereira varía según el tamaño de la mudanza, la distancia del recorrido y las condiciones de acceso en origen y destino.',
      'Para darte una idea general: un acarreo o mudanza muy pequeña puede costar entre $50.000 y $100.000 COP. Una mudanza de apartamento estándar en Pereira está entre $150.000 y $350.000 COP. Mudanzas más grandes con mayor volumen de carga pueden superar los $500.000 COP.',
      'Factores que pueden aumentar el precio: pisos altos sin ascensor, distancias largas (por ejemplo, de Pereira a Dosquebradas o zonas rurales), necesidad de embalaje especial, o mudanzas en horarios especiales.',
      'Consejos para ahorrar: organiza y descarta lo que no necesites antes de la mudanza, empaca lo que puedas por tu cuenta, y agenda con anticipación para asegurar disponibilidad.',
      'La forma más rápida de saber el costo exacto de tu mudanza es escribirnos por WhatsApp. Te respondemos en minutos con una cotización clara y sin compromiso.',
    ],
  },
  {
    path: '/como-preparar-una-mudanza',
    title: 'Cómo Preparar una Mudanza | Guía Práctica',
    h1: 'Cómo Preparar una Mudanza',
    metaDescription: 'Guía práctica para preparar tu mudanza en Pereira. Consejos, pasos y recomendaciones para un traslado sin estrés. ¿Necesitas ayuda? Cotiza por WhatsApp.',
    content: [
      'Preparar una mudanza con anticipación es clave para que todo salga bien. Aquí te compartimos una guía práctica para organizar tu traslado paso a paso.',
      'Paso 1: Haz un inventario. Recorre tu casa o apartamento y anota todo lo que vas a mover. Esto te ayudará a solicitar una cotización precisa y a organizar mejor el embalaje.',
      'Paso 2: Descarta lo que no necesites. Una mudanza es el momento perfecto para regalar, vender o donar lo que ya no usas. Menos cosas = mudanza más rápida y económica.',
      'Paso 3: Consigue cajas y materiales. Puedes conseguir cajas en supermercados o tiendas. Usa papel periódico, plástico de burbujas o toallas para proteger objetos frágiles.',
      'Paso 4: Empaca por zonas. Ve habitación por habitación. Marca cada caja con su contenido y la habitación de destino. Esto facilita mucho la descarga.',
      'Paso 5: Prepara los muebles grandes. Desconecta electrodomésticos con anticipación (la nevera al menos 12 horas antes). Si es posible, desarma muebles grandes para facilitar el transporte.',
      'Paso 6: Coordina con tu empresa de mudanzas. Confirma fecha, hora y dirección. Asegúrate de que haya espacio para estacionar el vehículo tanto en origen como en destino.',
      '¿Necesitas ayuda profesional para tu mudanza en Pereira? Contáctanos por WhatsApp y nos encargamos de todo.',
    ],
  },
  {
    path: '/empresa-de-mudanzas-en-pereira',
    title: 'Empresa de Mudanzas en Pereira | Servicio Profesional',
    h1: 'Empresa de Mudanzas en Pereira',
    metaDescription: 'Empresa de mudanzas en Pereira con cobertura en Pereira y Dosquebradas. Mudanzas residenciales, empresariales, acarreos y trasteos. Cotiza por WhatsApp.',
    content: [
      'Somos tu aliado para mudanzas en Pereira y Dosquebradas. Ofrecemos un servicio profesional de mudanzas residenciales, empresariales, acarreos, trasteos y transporte de muebles con cobertura en toda el área metropolitana.',
      'Nuestro equipo está capacitado para manejar todo tipo de mudanzas: desde un acarreo pequeño hasta el traslado completo de una casa o una oficina. Trabajamos con puntualidad, responsabilidad y cuidado.',
      'Nos diferenciamos por nuestra atención rápida, cotización transparente y disponibilidad las 24 horas por WhatsApp. No importa a qué barrio de Pereira o Dosquebradas necesites mudarte, llegamos a todas las zonas.',
      'Solicita tu cotización sin compromiso. Cuéntanos tu mudanza por WhatsApp y te respondemos en minutos con un presupuesto justo.',
    ],
  },
]

export default function App() {
  const cities = getCities()
  const allZones = getAllZones()
  const allCommunes = getAllCommunes()

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* City pages */}
          {cities.map((city) => (
            <Route
              key={city.slug}
              path={city.page}
              element={<CityPage city={city} />}
            />
          ))}

          {/* Commune pages */}
          {allCommunes.map((commune) => (
            <Route
              key={`${commune.citySlug}-${commune.slug}`}
              path={commune.page}
              element={
                <CommunePage
                  commune={commune}
                  city={cities.find((c) => c.slug === commune.citySlug)!}
                />
              }
            />
          ))}

          {/* Zone pages */}
          {allZones.map((zone) => {
            const city = cities.find((c) => c.slug === zone.citySlug)!
            const commune = city.communes.find((c) => c.slug === zone.communeSlug)!
            return (
              <Route
                key={zone.page}
                path={zone.page}
                element={
                  <ZonePage zone={zone} commune={commune} city={city} />
                }
              />
            )
          })}

          {/* Service pages */}
          {servicePages.map((sp) => (
            <Route
              key={sp.path}
              path={sp.path}
              element={
                <ServicePage
                  title={sp.title}
                  h1={sp.h1}
                  metaDescription={sp.metaDescription}
                  canonical={sp.path}
                  content={sp.content}
                />
              }
            />
          ))}

          {/* Info pages */}
          {infoPages.map((ip) => (
            <Route
              key={ip.path}
              path={ip.path}
              element={
                <InfoPage
                  title={ip.title}
                  h1={ip.h1}
                  metaDescription={ip.metaDescription}
                  canonical={ip.path}
                  content={ip.content}
                />
              }
            />
          ))}

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}
