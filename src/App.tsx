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
    path: '/mudanzas-residenciales',
    title: 'Mudanzas Residenciales en Pereira | Casas y Apartamentos',
    h1: 'Mudanzas Residenciales en Pereira',
    metaDescription: 'Coordinamos mudanzas residenciales en Pereira y Dosquebradas. Casas, apartamentos y trasteos completos con operadores verificados. Cotización gratis por WhatsApp.',
    content: [
      'Coordinamos mudanzas residenciales en Pereira y Dosquebradas para casas y apartamentos de cualquier tamaño. Asignamos operadores verificados con el vehículo adecuado según la cantidad de carga y la distancia de tu traslado.',
      'El servicio incluye personal de carga y descarga, transporte seguro y cuidado de tus pertenencias. Ya sea un apartaestudio o una casa grande, gestionamos todo para que tu mudanza sea simple y sin estrés.',
      'Cubrimos todos los barrios de Pereira y Dosquebradas. Escríbenos por WhatsApp con los detalles de tu mudanza y te cotizamos en minutos, sin compromiso.',
    ],
  },
  {
    path: '/mudanzas-empresariales',
    title: 'Mudanzas Empresariales en Pereira | Oficinas y Locales',
    h1: 'Mudanzas Empresariales en Pereira',
    metaDescription: 'Coordinamos mudanzas empresariales en Pereira. Traslado de oficinas, locales comerciales y equipos con operadores verificados. Cotización por WhatsApp.',
    content: [
      'Coordinamos mudanzas y trasteos empresariales en Pereira con planificación para minimizar el impacto en tu negocio. Asignamos operadores con experiencia en traslado de oficinas, locales comerciales, consultorios y espacios de trabajo.',
      'El equipo asignado maneja con cuidado equipos de cómputo, archivos, mobiliario de oficina y equipos especializados. Gestionamos cada detalle para que tu empresa retome operaciones lo antes posible.',
      'Coordinamos horarios flexibles, incluyendo fines de semana y horarios nocturnos. Solicita tu cotización por WhatsApp.',
    ],
  },
  {
    path: '/mudanzas-economicas-pereira',
    title: 'Mudanzas Económicas en Pereira | Precios Justos',
    h1: 'Mudanzas Económicas en Pereira',
    metaDescription: 'Coordinamos mudanzas y trasteos económicos en Pereira con operadores verificados. Precios accesibles. Cotización gratis por WhatsApp.',
    content: [
      'Sabemos que una mudanza puede representar un gasto importante. Por eso coordinamos mudanzas económicas en Pereira sin sacrificar la calidad del servicio. Asignamos operadores verificados que ofrecen precios justos para tu presupuesto.',
      'El servicio incluye personal de carga y descarga, vehículo adecuado y el cuidado que tus muebles merecen. No importa si es un acarreo pequeño o un trasteo grande, te conectamos con la opción que mejor se ajuste a lo que necesitas.',
      'Cubrimos todos los barrios de Pereira y Dosquebradas. Escríbenos por WhatsApp para una cotización sin compromiso. Te respondemos en minutos.',
    ],
  },
  {
    path: '/mudanzas-pequenas-pereira',
    title: 'Mudanzas Pequeñas en Pereira | Servicio Rápido',
    h1: 'Mudanzas Pequeñas en Pereira',
    metaDescription: 'Coordinamos mudanzas pequeñas y acarreos en Pereira. Ideal para pocos muebles o electrodomésticos. Cotización por WhatsApp.',
    content: [
      '¿Necesitas mover solo unos pocos muebles o electrodomésticos? Coordinamos mudanzas pequeñas y acarreos en Pereira para que no tengas que contratar un trasteo completo.',
      'Te asignamos un operador con el vehículo adecuado para mover camas, sofás, neveras, lavadoras, escritorios o lo que necesites llevar de un punto a otro en Pereira o Dosquebradas.',
      'Escríbenos por WhatsApp, cuéntanos qué necesitas mover y te cotizamos al instante.',
    ],
  },
  {
    path: '/mudanzas-empresariales-pereira',
    title: 'Mudanzas Empresariales en Pereira | Trasteos de Oficinas',
    h1: 'Mudanzas y Trasteos Empresariales en Pereira',
    metaDescription: 'Coordinamos mudanzas empresariales en Pereira y Dosquebradas. Traslado de oficinas y locales con operadores verificados. Cotización por WhatsApp.',
    content: [
      'Coordinamos mudanzas y trasteos empresariales en Pereira con operadores verificados y experiencia en traslado de oficinas. Gestionamos el traslado completo de oficinas, locales comerciales, consultorios y espacios de trabajo.',
      'Asignamos equipos que manejan con cuidado equipos de cómputo, archivos, mobiliario y equipos especializados. Planificamos cada paso para minimizar el tiempo de inactividad de tu negocio.',
      'Horarios flexibles incluyendo fines de semana. Solicita tu cotización por WhatsApp.',
    ],
  },
  {
    path: '/acarreos-pereira',
    title: 'Acarreos en Pereira | Transporte de Carga',
    h1: 'Acarreos en Pereira y Dosquebradas',
    metaDescription: 'Coordinamos acarreos en Pereira y Dosquebradas. Transporte de objetos individuales, electrodomésticos y cargas puntuales con operadores verificados. Cotización por WhatsApp.',
    content: [
      'Coordinamos acarreos en Pereira para que puedas mover objetos individuales, electrodomésticos o cargas puntuales sin contratar una mudanza completa. Ideal cuando compras un mueble, vendes un electrodoméstico o necesitas transportar algo puntual.',
      'Te asignamos un operador con el vehículo adecuado para tu carga: desde una camioneta para objetos pequeños hasta vehículos más grandes. Siempre con personal de apoyo para carga y descarga.',
      'Cubrimos toda el área de Pereira y Dosquebradas. Escríbenos por WhatsApp con lo que necesitas mover y te cotizamos al instante.',
    ],
  },
  {
    path: '/trasteos-pereira',
    title: 'Trasteos en Pereira | Servicio Profesional de Trasteos',
    h1: 'Trasteos en Pereira y Dosquebradas',
    metaDescription: 'Coordinamos trasteos en Pereira y Dosquebradas con operadores verificados. Trasteos residenciales, empresariales y acarreos. Cotización gratis por WhatsApp.',
    content: [
      '¿Buscas un servicio de trasteos en Pereira? Coordinamos trasteos residenciales, empresariales y acarreos en toda el área de Pereira y Dosquebradas. Un trasteo es el traslado completo de tus pertenencias, y nosotros nos encargamos de conectarte con el operador adecuado.',
      'El servicio incluye personal de carga y descarga, vehículos según tu necesidad y el cuidado profesional que tus muebles merecen. Ya sea un trasteo de apartamento, casa u oficina, asignamos operadores verificados.',
      'También coordinamos acarreos puntuales si necesitas mover solo algunos objetos. Cubrimos todos los barrios de Pereira y Dosquebradas. Escríbenos por WhatsApp para cotizar sin compromiso.',
    ],
  },
  {
    path: '/transporte-muebles-pereira',
    title: 'Transporte de Muebles en Pereira | Servicio Profesional',
    h1: 'Transporte de Muebles en Pereira',
    metaDescription: 'Coordinamos transporte de muebles en Pereira con operadores verificados. Sofás, camas, neveras y más. Cotización gratis por WhatsApp.',
    content: [
      'Coordinamos el transporte de muebles en Pereira con operadores verificados. Movemos todo tipo de muebles: sofás, camas, comedores, escritorios, neveras, lavadoras y más. Cada pieza recibe el cuidado que merece.',
      'Los operadores que asignamos saben cómo manipular muebles pesados y delicados, usando técnicas de protección para evitar rayones, golpes o daños durante la carga, transporte y descarga.',
      'Ya sea que necesites mover un solo mueble o varios, escríbenos por WhatsApp para una cotización rápida. Servicio en Pereira y Dosquebradas.',
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
      'Coordinamos mudanzas, trasteos y acarreos en Pereira y Dosquebradas con operadores aliados verificados. Gestionamos mudanzas residenciales, empresariales y transporte de muebles con cobertura en toda el área metropolitana.',
      'Nos encargamos de asignar el operador y vehículo adecuado para cada servicio: desde un acarreo pequeño hasta el traslado completo de una casa o una oficina. Trabajamos con aliados puntuales, responsables y cuidadosos.',
      'Nos diferenciamos por nuestra atención rápida, cotización transparente y disponibilidad las 24 horas por WhatsApp. No importa a qué barrio de Pereira o Dosquebradas necesites mudarte, cubrimos todas las zonas.',
      'Solicita tu cotización sin compromiso. Cuéntanos tu mudanza por WhatsApp y te respondemos en minutos.',
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
