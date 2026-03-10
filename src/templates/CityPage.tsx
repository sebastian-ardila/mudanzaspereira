import { Link } from 'react-router-dom'
import Head from '../seo/Head'
import MainLayout from '../layouts/MainLayout'
import Breadcrumb from '../components/Breadcrumb'
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
        description={`Coordinamos mudanzas, trasteos y acarreos en ${city.name}. Cubrimos las ${city.communes.length} comunas y más de ${totalZones} barrios con operadores verificados. Cotización gratis.`}
        canonical={city.page}
      />
      <MainLayout>
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <Breadcrumb
              items={[
                { label: 'Inicio', href: '/' },
                { label: `Mudanzas ${city.name}` },
              ]}
            />

            <h1 className="font-display text-3xl md:text-4xl font-extrabold text-dark-900 mb-6">
              Mudanzas en {city.name}
            </h1>
            <p className="text-lg text-warm-600 mb-8 leading-relaxed">
              Coordinamos mudanzas, trasteos y acarreos en {city.name} con operadores verificados. Cubrimos las {city.communes.length} comunas y más de {totalZones} barrios y sectores. Atención 24 horas por WhatsApp.
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

        <section className="py-12 bg-cream-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-display text-2xl font-bold text-dark-900 mb-6">
              Comunas de {city.name}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {city.communes.map((commune) => (
                <Link
                  key={commune.slug}
                  to={commune.page}
                  className="bg-white rounded-xl p-5 hover:bg-amber-50 transition-colors border border-warm-200 hover:border-amber-300 shadow-sm"
                >
                  <h3 className="font-semibold text-dark-900 mb-1">{commune.name}</h3>
                  <p className="text-sm text-warm-600">{commune.zones.length} barrios y sectores</p>
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
