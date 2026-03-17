import Head from '../seo/Head'
import JsonLd from '../seo/JsonLd'
import MainLayout from '../layouts/MainLayout'
import Hero from '../sections/Hero'
import TrustBadges from '../sections/TrustBadges'
import HowItWorks from '../sections/HowItWorks'
import Services from '../sections/Services'
import Coverage from '../sections/Coverage'
import Benefits from '../sections/Benefits'
import HomeFAQ from '../sections/HomeFAQ'
import QuoteForm from '../sections/QuoteForm'
import CTABanner from '../components/CTABanner'

export default function HomePage() {
  return (
    <>
      <Head
        title="Mudanzas en Pereira y Dosquebradas | Trasteos y Acarreos"
        description="Coordinamos tu mudanza, trasteo o acarreo en Pereira y Dosquebradas con operadores verificados. Cotización gratis por WhatsApp. Atención 24 horas."
        canonical="/"
      />
      <JsonLd />
      <MainLayout>
        <Hero />
        <TrustBadges />
        <HowItWorks />
        <Services />
        <Benefits />
        <Coverage />
        <QuoteForm />
        <HomeFAQ />
        <CTABanner />
      </MainLayout>
    </>
  )
}
