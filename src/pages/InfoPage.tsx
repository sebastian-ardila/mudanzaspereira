import { Link } from 'react-router-dom'
import Head from '../seo/Head'
import MainLayout from '../layouts/MainLayout'
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
            <nav className="text-sm text-gray-500 mb-6">
              <Link to="/" className="hover:text-primary-600">Inicio</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">{h1}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">{h1}</h1>

            <div className="space-y-4 text-gray-600 text-lg">
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
