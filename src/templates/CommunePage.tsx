import { Link } from 'react-router-dom'
import Head from '../seo/Head'
import MainLayout from '../layouts/MainLayout'
import Button from '../components/Button'
import CTABanner from '../components/CTABanner'
import { getWhatsAppUrlForZone, getCallUrl, PHONE_DISPLAY } from '../utils/constants'
import type { Commune, City } from '../utils/zones'

interface CommunePageProps {
  commune: Commune
  city: City
}

export default function CommunePage({ commune, city }: CommunePageProps) {
  return (
    <>
      <Head
        title={`Mudanzas en ${commune.name}, ${city.name} | Servicio Profesional`}
        description={`Servicio de mudanzas en ${commune.name}, ${city.name}. Cubrimos todos los barrios de la comuna. Mudanzas residenciales, acarreos y trasteos. Cotización por WhatsApp.`}
        canonical={commune.page}
      />
      <MainLayout>
        <section className="bg-gradient-to-b from-primary-50 to-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <nav className="text-sm text-gray-500 mb-6">
              <Link to="/" className="hover:text-primary-600">Inicio</Link>
              <span className="mx-2">/</span>
              <Link to={city.page} className="hover:text-primary-600">Mudanzas {city.name}</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">{commune.name}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Mudanzas en {commune.name}, {city.name}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Servicio profesional de mudanzas en la comuna {commune.name} de {city.name}. Cubrimos todos los barrios y sectores de la zona con personal capacitado, vehículos adecuados y atención personalizada por WhatsApp las 24 horas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="whatsapp" href={getWhatsAppUrlForZone(commune.name)}>
                Cotizar por WhatsApp
              </Button>
              <Button variant="call" href={getCallUrl()}>
                Llamar al {PHONE_DISPLAY}
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Barrios y sectores en {commune.name}
            </h2>
            <p className="text-gray-600 mb-6">
              Realizamos mudanzas en los siguientes barrios y sectores de {commune.name}, {city.name}:
            </p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {commune.zones.map((zone) => (
                <Link
                  key={zone.slug}
                  to={zone.page}
                  className="flex items-center gap-2 p-3 rounded-lg hover:bg-primary-50 transition-colors text-gray-700 hover:text-primary-700"
                >
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  Mudanzas en {zone.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Otras comunas en {city.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {city.communes
                .filter((c) => c.slug !== commune.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    to={c.page}
                    className="text-sm bg-white text-primary-700 px-4 py-2 rounded-full border border-gray-200 hover:bg-primary-50 transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </MainLayout>
    </>
  )
}
