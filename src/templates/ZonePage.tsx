import { Link } from 'react-router-dom'
import Head from '../seo/Head'
import MainLayout from '../layouts/MainLayout'
import Breadcrumb from '../components/Breadcrumb'
import Button from '../components/Button'
import FAQ from '../components/FAQ'
import CTABanner from '../components/CTABanner'
import { getWhatsAppUrlForZone, getCallUrl, PHONE_DISPLAY } from '../utils/constants'
import { getIntro, getServiceDescription, getFaqs, getMetaTitle, getMetaDescription } from '../utils/content'
import { getRelatedZones, type Zone, type Commune, type City } from '../utils/zones'

interface ZonePageProps {
  zone: Zone
  commune: Commune
  city: City
}

export default function ZonePage({ zone, commune, city }: ZonePageProps) {
  const relatedZones = getRelatedZones(zone.slug, commune.slug, city.slug)
  const faqs = getFaqs(zone.name)

  return (
    <>
      <Head
        title={getMetaTitle(zone.name, city.name)}
        description={getMetaDescription(zone.name, city.name)}
        canonical={zone.page}
      />
      <MainLayout>
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <Breadcrumb
              items={[
                { label: 'Inicio', href: '/' },
                { label: `Mudanzas ${city.name}`, href: city.page },
                { label: commune.name, href: commune.page },
                { label: zone.name },
              ]}
            />

            <h1 className="font-display text-3xl md:text-4xl font-extrabold text-dark-900 mb-6">
              Mudanzas en {zone.name}, {city.name}
            </h1>
            <p className="text-lg text-warm-600 mb-8 leading-relaxed">{getIntro(zone.name, city.name)}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="whatsapp" href={getWhatsAppUrlForZone(zone.name)}>
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
            <h2 className="font-display text-2xl font-bold text-dark-900 mb-6">Servicios en {zone.name}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-warm-200 shadow-sm">
                  <p className="text-warm-600 text-sm leading-relaxed">{getServiceDescription(zone.name, i)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-display text-2xl font-bold text-dark-900 mb-6">Preguntas Frecuentes sobre Mudanzas en {zone.name}</h2>
            <FAQ items={faqs} />
          </div>
        </section>

        {relatedZones.length > 0 && (
          <section className="py-12 bg-cream-50">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-6">Zonas cercanas en {commune.name}</h2>
              <div className="flex flex-wrap gap-2">
                {relatedZones.map((rz) => (
                  <Link
                    key={rz.slug}
                    to={rz.page}
                    className="text-sm bg-white text-warm-700 px-4 py-2 rounded-full border border-warm-200 hover:bg-amber-50 hover:border-amber-300 transition-colors"
                  >
                    Mudanzas en {rz.name}
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex gap-4 text-sm">
                <Link to={commune.page} className="text-amber-600 hover:underline">
                  Ver todas las zonas en {commune.name}
                </Link>
                <Link to={city.page} className="text-amber-600 hover:underline">
                  Mudanzas en {city.name}
                </Link>
              </div>
            </div>
          </section>
        )}

        <CTABanner />
      </MainLayout>
    </>
  )
}
