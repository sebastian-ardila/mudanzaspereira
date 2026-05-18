import Head from '../seo/Head'
import MainLayout from '../layouts/MainLayout'
import Breadcrumb from '../components/Breadcrumb'
import CTABanner from '../components/CTABanner'
import PageTransition from '../components/PageTransition'
import GuaranteeStrip from '../sections/GuaranteeStrip'
import WhatsAppTile from '../components/WhatsAppTile'
import Tag from '../components/Tag'
import { getCallUrl, PHONE_DISPLAY, SITE_URL } from '../utils/constants'
import { WhatsAppGlyph, useQuoteNavigate } from '../components/QuoteCTA'
import { motion } from 'framer-motion'
import { bentoTile, fadeUp, stagger, viewportOnce } from '../motion/variants'

interface ServicePageProps {
  title: string
  h1: string
  metaDescription: string
  canonical: string
  content: string[]
}

const relatedLinks = [
  { label: 'Trasteos', href: '/trasteos-pereira' },
  { label: 'Acarreos', href: '/acarreos-pereira' },
  { label: 'Económicas', href: '/mudanzas-economicas-pereira' },
  { label: 'Muebles', href: '/transporte-muebles-pereira' },
]

export default function ServicePage({ title, h1, metaDescription, canonical, content }: ServicePageProps) {
  const goQuote = useQuoteNavigate()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: h1,
    description: metaDescription,
    url: `${SITE_URL}${canonical}`,
    provider: { '@type': 'MovingCompany', name: 'Mudanzas Pereira', url: SITE_URL },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <MainLayout>
        <PageTransition>
          {/* Hero compacto bento */}
          <section className="bg-bg pt-8 md:pt-12 pb-16 md:pb-20">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
              <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: h1 }]} />

              <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-8 items-start">
                {/* Main hero card */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={bentoTile}
                  className="relative overflow-hidden rounded-lg bg-surface-ink text-ink-invert p-8 md:p-12"
                  style={{ boxShadow: 'var(--shadow-tile)' }}
                >
                  <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-wa/12 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative">
                    <Tag tone="ink" className="bg-white/10 text-ink-invert">
                      Servicio
                    </Tag>
                    <h1
                      className="mt-4 font-display font-bold leading-[1.05] tracking-[-0.02em]"
                      style={{ fontSize: 'var(--text-display)' }}
                    >
                      {h1}
                    </h1>
                    <p className="mt-5 text-lg text-ink-invert/75 leading-relaxed max-w-xl">
                      {metaDescription}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={goQuote}
                        className="inline-flex items-center gap-2.5 bg-wa hover:bg-wa-strong text-white px-6 py-3.5 rounded-sm font-semibold transition-colors shadow-[var(--shadow-cta-wa)] cursor-pointer"
                      >
                        <WhatsAppGlyph size={18} />
                        Cotizar por WhatsApp
                      </button>
                      <a
                        href={getCallUrl()}
                        className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 text-ink-invert border border-white/15 px-6 py-3.5 rounded-sm font-semibold transition-colors"
                      >
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Sidebar tiles */}
                <motion.aside
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={stagger}
                  className="flex flex-col gap-4 md:gap-5 md:sticky md:top-24"
                >
                  <motion.div variants={fadeUp}>
                    <WhatsAppTile
                      title="Respuesta inmediata"
                      subtitle={`Cotiza tu ${h1.toLowerCase()} ahora`}
                      compact
                    />
                  </motion.div>

                  <motion.div
                    variants={fadeUp}
                    className="relative rounded-lg bg-accent-soft border border-accent/20 p-6"
                  >
                    <div className="text-xs uppercase tracking-[0.12em] text-accent-strong font-bold mb-2">
                      Precio
                    </div>
                    <div className="font-display text-2xl font-bold text-ink leading-tight">
                      Cotización sin compromiso
                    </div>
                    <p className="mt-2 text-sm text-ink-2">
                      Te enviamos el precio con todo incluido antes de iniciar.
                    </p>
                  </motion.div>

                  <motion.div variants={fadeUp} className="relative rounded-lg bg-surface border border-line p-6">
                    <div className="text-xs uppercase tracking-[0.12em] text-ink-3 font-semibold mb-3">
                      Servicios relacionados
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {relatedLinks.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          className="text-sm bg-surface-2 hover:bg-accent hover:text-ink-invert text-ink px-3 py-1.5 rounded-xs transition-colors border border-line"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                </motion.aside>
              </div>
            </div>
          </section>

          {/* Article body */}
          <section className="bg-bg pb-20 md:pb-28">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={stagger}
                className="space-y-6 text-ink-2 leading-relaxed"
              >
                {content.map((paragraph, i) => (
                  <motion.p
                    key={i}
                    variants={fadeUp}
                    className={i === 0 ? 'text-xl text-ink leading-relaxed' : 'text-lg'}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </div>
          </section>

          <GuaranteeStrip />
          <CTABanner />
        </PageTransition>
      </MainLayout>
    </>
  )
}
