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

interface InfoPageProps {
  title: string
  h1: string
  metaDescription: string
  canonical: string
  content: string[]
}

export default function InfoPage({ title, h1, metaDescription, canonical, content }: InfoPageProps) {
  const goQuote = useQuoteNavigate()
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: h1,
    description: metaDescription,
    url: `${SITE_URL}${canonical}`,
    publisher: { '@type': 'Organization', name: 'Mudanzas Pereira', url: SITE_URL },
  }

  return (
    <>
      <Head title={title} description={metaDescription} canonical={canonical} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <MainLayout>
        <PageTransition>
          <section className="bg-bg pt-8 md:pt-12 pb-16 md:pb-20">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
              <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: h1 }]} />

              <div className="grid md:grid-cols-[1.5fr_1fr] gap-6 md:gap-10 items-start">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={fadeUp}
                >
                  <Tag tone="accent">Guía</Tag>
                  <h1
                    className="mt-4 font-display font-bold text-ink leading-[1.05] tracking-[-0.02em]"
                    style={{ fontSize: 'var(--text-display)' }}
                  >
                    {h1}
                  </h1>
                  <p className="mt-5 text-lg text-ink-2 leading-relaxed max-w-2xl">{metaDescription}</p>
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
                      className="inline-flex items-center gap-2.5 bg-surface border border-line hover:border-line-strong text-ink px-6 py-3.5 rounded-sm font-semibold transition-colors"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </motion.div>

                <motion.aside
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={bentoTile}
                  className="md:sticky md:top-24"
                >
                  <WhatsAppTile
                    title="¿Tienes dudas?"
                    subtitle="Escríbenos y te ayudamos en minutos"
                  />
                </motion.aside>
              </div>
            </div>
          </section>

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
