import Head from '../seo/Head'
import MainLayout from '../layouts/MainLayout'
import Breadcrumb from '../components/Breadcrumb'
import Button from '../components/Button'
import CTABanner from '../components/CTABanner'
import { getWhatsAppUrl, getCallUrl, PHONE_DISPLAY } from '../utils/constants'

interface InfoPageProps {
  title: string
  h1: string
  metaDescription: string
  canonical: string
  content: string[]
}

export default function InfoPage({ title, h1, metaDescription, canonical, content }: InfoPageProps) {
  return (
    <>
      <Head title={title} description={metaDescription} canonical={canonical} />
      <MainLayout>
        <article className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4">
            <Breadcrumb
              items={[
                { label: 'Inicio', href: '/' },
                { label: h1 },
              ]}
            />

            <h1 className="font-display text-3xl md:text-4xl font-extrabold text-dark-900 mb-8">{h1}</h1>

            <div className="space-y-4 text-warm-600 text-lg leading-relaxed">
              {content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button variant="whatsapp" href={getWhatsAppUrl('Hola, quiero cotizar mi mudanza')}>
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
