import { Link } from 'react-router-dom'
import Head from '../seo/Head'
import MainLayout from '../layouts/MainLayout'
import Button from '../components/Button'
import QuoteForm from '../sections/QuoteForm'
import CTABanner from '../components/CTABanner'
import { getWhatsAppUrl, getCallUrl, PHONE_DISPLAY } from '../utils/constants'

interface ServicePageProps {
  title: string
  h1: string
  metaDescription: string
  canonical: string
  content: string[]
}

export default function ServicePage({ title, h1, metaDescription, canonical, content }: ServicePageProps) {
  return (
    <>
      <Head title={title} description={metaDescription} canonical={canonical} />
      <MainLayout>
        <section className="bg-gradient-to-b from-primary-50 to-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <nav className="text-sm text-gray-500 mb-6">
              <Link to="/" className="hover:text-primary-600">Inicio</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">{h1}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">{h1}</h1>

            <div className="space-y-4 text-gray-600 text-lg mb-8">
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
        </section>

        <QuoteForm />
        <CTABanner />
      </MainLayout>
    </>
  )
}
