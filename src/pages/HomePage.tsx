import Head from '../seo/Head'
import JsonLd from '../seo/JsonLd'
import MainLayout from '../layouts/MainLayout'
import Hero from '../sections/Hero'
import TrustBadges from '../sections/TrustBadges'
import Services from '../sections/Services'
import HowItWorks from '../sections/HowItWorks'
import Testimonials from '../sections/Testimonials'
import Coverage from '../sections/Coverage'
import Benefits from '../sections/Benefits'
import HomeFAQ from '../sections/HomeFAQ'
import QuoteForm from '../sections/QuoteForm'
import CTABanner from '../components/CTABanner'

export default function HomePage() {
  return (
    <>
      <Head
        title="Mudanzas y Trasteos en Pereira y Dosquebradas | Acarreos Profesionales"
        description="Servicio profesional de mudanzas, trasteos y acarreos en Pereira y Dosquebradas. Mudanzas residenciales, empresariales, transporte de muebles. Cotización gratis por WhatsApp. Atención 24 horas."
        canonical="/"
      />
      <JsonLd />
      <MainLayout>
        <Hero />
        <TrustBadges />
        <Services />
        <HowItWorks />
        <Testimonials />
        <Coverage />
        <Benefits />
        <QuoteForm />
        <HomeFAQ />
        <CTABanner />
      </MainLayout>
    </>
  )
}
