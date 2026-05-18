import Head from '../seo/Head'
import JsonLd from '../seo/JsonLd'
import MainLayout from '../layouts/MainLayout'
import BentoHero from '../sections/BentoHero'
import GuaranteeStrip from '../sections/GuaranteeStrip'
import ProcessTimeline from '../sections/ProcessTimeline'
import Services from '../sections/Services'
import ComparisonTable from '../sections/ComparisonTable'
import Coverage from '../sections/Coverage'
import Testimonials from '../sections/Testimonials'
import QuoteForm from '../sections/QuoteForm'
import HomeFAQ from '../sections/HomeFAQ'
import CTABanner from '../components/CTABanner'
import PageTransition from '../components/PageTransition'

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
        <PageTransition>
          <BentoHero />
          <GuaranteeStrip />
          <ProcessTimeline />
          <Services />
          <ComparisonTable />
          <Coverage />
          <Testimonials />
          <QuoteForm />
          <HomeFAQ />
          <CTABanner />
        </PageTransition>
      </MainLayout>
    </>
  )
}
