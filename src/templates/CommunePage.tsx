import { Link } from 'react-router-dom'
import Head from '../seo/Head'
import MainLayout from '../layouts/MainLayout'
import Breadcrumb from '../components/Breadcrumb'
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
        description={`Coordinamos mudanzas, trasteos y acarreos en ${commune.name}, ${city.name} con operadores verificados. Cubrimos todos los barrios de la comuna. Cotización por WhatsApp.`}
        canonical={commune.page}
      />
      <MainLayout>
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <Breadcrumb
              items={[
                { label: 'Inicio', href: '/' },
                { label: `Mudanzas ${city.name}`, href: city.page },
                { label: commune.name },
              ]}
            />

            <h1 className="font-display text-3xl md:text-4xl font-extrabold text-dark-900 mb-6">
              Mudanzas en {commune.name}, {city.name}
            </h1>
            <p className="text-lg text-warm-600 mb-8 leading-relaxed">
              Coordinamos mudanzas, trasteos y acarreos en la comuna {commune.name} de {city.name} con operadores verificados. Cubrimos todos los barrios y sectores de la zona. Atención 24 horas por WhatsApp.
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

        <section className="py-12 bg-cream-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-display text-2xl font-bold text-dark-900 mb-6">
              Barrios y sectores en {commune.name}
            </h2>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {commune.zones.map((zone) => (
                <Link
                  key={zone.slug}
                  to={zone.page}
                  className="flex items-center gap-2 p-3 rounded-lg hover:bg-amber-50 transition-colors text-warm-700 hover:text-amber-700"
                >
                  <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  Mudanzas en {zone.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">
              Otras comunas en {city.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {city.communes
                .filter((c) => c.slug !== commune.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    to={c.page}
                    className="text-sm bg-cream-50 text-warm-700 px-4 py-2 rounded-full border border-warm-200 hover:bg-amber-50 hover:border-amber-300 transition-colors"
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
