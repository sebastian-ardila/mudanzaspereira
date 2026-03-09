import { Link } from 'react-router-dom'
import Head from '../seo/Head'
import MainLayout from '../layouts/MainLayout'
import Button from '../components/Button'
import Services from '../sections/Services'
import CTABanner from '../components/CTABanner'
import { getWhatsAppUrlForZone, getCallUrl, PHONE_DISPLAY } from '../utils/constants'
import type { City } from '../utils/zones'

interface CityPageProps {
  city: City
}

export default function CityPage({ city }: CityPageProps) {
  const totalZones = city.communes.reduce((sum, c) => sum + c.zones.length, 0)

  return (
    <>
      <Head
        title={`Mudanzas en ${city.name} | Cotización Gratis por WhatsApp`}
        description={`Servicio profesional de mudanzas en ${city.name}. Cubrimos las ${city.communes.length} comunas y más de ${totalZones} barrios. Mudanzas residenciales, acarreos y trasteos. Cotización gratis.`}
        canonical={city.page}
      />
      <MainLayout>
        <section className="bg-gradient-to-b from-primary-50 to-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <nav className="text-sm text-gray-500 mb-6">
              <Link to="/" className="hover:text-primary-600">Inicio</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">Mudanzas {city.name}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Mudanzas en {city.name}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Servicio completo de mudanzas en {city.name}. Cubrimos las {city.communes.length} comunas y más de {totalZones} barrios y sectores de la ciudad. Mudanzas residenciales, empresariales, acarreos, trasteos y transporte de muebles con atención las 24 horas por WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="whatsapp" href={getWhatsAppUrlForZone(city.name)}>
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
              Comunas de {city.name}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {city.communes.map((commune) => (
                <Link
                  key={commune.slug}
                  to={commune.page}
                  className="bg-gray-50 rounded-xl p-5 hover:bg-primary-50 transition-colors border border-gray-100 hover:border-primary-200"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">{commune.name}</h3>
                  <p className="text-sm text-gray-500">{commune.zones.length} barrios y sectores</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Services />
        <CTABanner />
      </MainLayout>
    </>
  )
}
