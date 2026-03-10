import Head from '../seo/Head'
import MainLayout from '../layouts/MainLayout'
import Breadcrumb from '../components/Breadcrumb'
import Button from '../components/Button'
import CTABanner from '../components/CTABanner'
import { getWhatsAppUrl, getCallUrl, PHONE_DISPLAY, SITE_URL } from '../utils/constants'

interface ServicePageProps {
  title: string
  h1: string
  metaDescription: string
  canonical: string
  content: string[]
}

export default function ServicePage({ title, h1, metaDescription, canonical, content }: ServicePageProps) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: h1,
    description: metaDescription,
    url: `${SITE_URL}${canonical}`,
    provider: {
      '@type': 'MovingCompany',
      name: 'Mudanzas Pereira',
      url: SITE_URL,
    },
    areaServed: [
      { '@type': 'City', name: 'Pereira' },
      { '@type': 'City', name: 'Dosquebradas' },
    ],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: SITE_URL,
      servicePhone: '+573177822100',
    },
  }

  return (
    <>
      <Head title={title} description={metaDescription} canonical={canonical} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <MainLayout>
        <article className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4">
            <Breadcrumb
              items={[
                { label: 'Inicio', href: '/' },
                { label: h1 },
              ]}
            />

            <h1 className="font-display text-3xl md:text-4xl font-extrabold text-dark-900 mb-6">{h1}</h1>

            <div className="space-y-4 text-warm-600 text-lg leading-relaxed mb-10">
              {content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="whatsapp" href={getWhatsAppUrl(`Hola, me interesa el servicio de ${h1.toLowerCase()}`)}>
                Cotizar por WhatsApp
              </Button>
              <Button variant="call" href={getCallUrl()}>
                Llamar al {PHONE_DISPLAY}
              </Button>
            </div>
          </div>
        </article>

        <CTABanner />
      </MainLayout>
    </>
  )
}
