import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Head from '../seo/Head'
import MainLayout from '../layouts/MainLayout'
import Breadcrumb from '../components/Breadcrumb'
import FAQ from '../components/FAQ'
import CTABanner from '../components/CTABanner'
import PageTransition from '../components/PageTransition'
import Tag from '../components/Tag'
import WhatsAppTile from '../components/WhatsAppTile'
import GuaranteeStrip from '../sections/GuaranteeStrip'
import Marquee from '../components/Marquee'
import { getCallUrl, PHONE_DISPLAY } from '../utils/constants'
import { WhatsAppGlyph, useQuoteNavigate } from '../components/QuoteCTA'
import { getIntro, getServiceDescription, getFaqs, getMetaTitle, getMetaDescription } from '../utils/content'
import { getRelatedZones, type Zone, type Commune, type City } from '../utils/zones'
import { bentoTile, fadeUp, stagger, viewportOnce } from '../motion/variants'

interface ZonePageProps {
  zone: Zone
  commune: Commune
  city: City
}

export default function ZonePage({ zone, commune, city }: ZonePageProps) {
  const relatedZones = getRelatedZones(zone.slug, commune.slug, city.slug)
  const faqs = getFaqs(zone.name)
  const goQuote = useQuoteNavigate()

  return (
    <>
      <Head
        title={getMetaTitle(zone.name, city.name)}
        description={getMetaDescription(zone.name, city.name)}
        canonical={zone.page}
      />
      <MainLayout>
        <PageTransition>
          <section className="bg-bg pt-8 md:pt-12 pb-16 md:pb-20">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
              <Breadcrumb
                items={[
                  { label: 'Inicio', href: '/' },
                  { label: `Mudanzas ${city.name}`, href: city.page },
                  { label: commune.name, href: commune.page },
                  { label: zone.name },
                ]}
              />

              <div className="grid md:grid-cols-[1.5fr_1fr] gap-6 md:gap-8 items-start">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={bentoTile}
                  className="relative overflow-hidden rounded-lg bg-surface-ink text-ink-invert p-8 md:p-12"
                  style={{ boxShadow: 'var(--shadow-tile)' }}
                >
                  <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
                  <Tag tone="ink" className="bg-white/10 text-ink-invert">
                    {commune.name} · {city.name}
                  </Tag>
                  <h1
                    className="relative mt-4 font-display font-bold leading-[1.05] tracking-[-0.02em]"
                    style={{ fontSize: 'var(--text-display)' }}
                  >
                    Mudanzas en {zone.name}
                  </h1>
                  <p className="relative mt-5 text-lg text-ink-invert/75 leading-relaxed max-w-xl">
                    {getIntro(zone.name, city.name)}
                  </p>
                  <div className="relative mt-8 flex flex-wrap gap-3">
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
                </motion.div>

                <motion.aside
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={stagger}
                  className="md:sticky md:top-24 flex flex-col gap-4"
                >
                  <motion.div variants={fadeUp}>
                    <WhatsAppTile
                      compact
                      title="Sin compromiso"
                      subtitle={`Cotiza tu mudanza en ${zone.name}`}
                    />
                  </motion.div>
                  <motion.div variants={fadeUp} className="rounded-lg bg-accent-soft border border-accent/20 p-6">
                    <div className="text-xs uppercase tracking-[0.12em] text-accent-strong font-bold mb-2">
                      Operadores
                    </div>
                    <div className="font-display text-2xl font-bold text-ink leading-tight">Verificados</div>
                    <p className="mt-2 text-sm text-ink-2">
                      Asignamos al operador adecuado para tu mudanza en {zone.name}.
                    </p>
                  </motion.div>
                </motion.aside>
              </div>
            </div>
          </section>

          {/* Servicios en zona */}
          <section className="bg-bg pb-20 md:pb-28">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
              <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp} className="mb-10 md:mb-12">
                <Tag tone="accent">Servicios</Tag>
                <h2
                  className="mt-3 font-display font-bold text-ink leading-tight tracking-[-0.02em]"
                  style={{ fontSize: 'var(--text-h3)' }}
                >
                  Servicios en {zone.name}
                </h2>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={stagger}
                className="grid gap-4 md:gap-5 md:grid-cols-2"
              >
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    variants={bentoTile}
                    whileHover={{ y: -3 }}
                    className="rounded-lg bg-surface border border-line p-6 md:p-7"
                    style={{ boxShadow: 'var(--shadow-tile)' }}
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-sm bg-accent-soft text-accent-strong mb-4 font-display font-bold text-sm">
                      0{i + 1}
                    </div>
                    <p className="text-ink-2 leading-relaxed">{getServiceDescription(zone.name, i)}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-bg pb-20 md:pb-28">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp} className="mb-10 md:mb-12">
                <Tag tone="accent">FAQ</Tag>
                <h2 className="mt-3 font-display font-bold text-ink leading-tight tracking-[-0.02em]" style={{ fontSize: 'var(--text-h3)' }}>
                  Preguntas frecuentes sobre {zone.name}
                </h2>
              </motion.div>
              <FAQ items={faqs} />
            </div>
          </section>

          {/* Related zones marquee */}
          {relatedZones.length > 0 && (
            <section className="bg-bg pb-20 md:pb-28">
              <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp} className="mb-8">
                  <Tag tone="accent">Cerca de aquí</Tag>
                  <h2 className="mt-3 font-display font-bold text-ink leading-tight tracking-[-0.02em]" style={{ fontSize: 'var(--text-h3)' }}>
                    Zonas cercanas en {commune.name}
                  </h2>
                </motion.div>
                <Marquee duration={45}>
                  {relatedZones.map((rz) => (
                    <Link
                      key={rz.slug}
                      to={rz.page}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-surface border border-line hover:border-accent hover:bg-accent-soft transition-colors text-sm text-ink whitespace-nowrap"
                    >
                      Mudanzas en {rz.name}
                      <svg width={12} height={12} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </Marquee>
                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  <Link to={commune.page} className="text-accent hover:text-accent-strong font-medium">
                    Ver todas las zonas en {commune.name} →
                  </Link>
                  <Link to={city.page} className="text-accent hover:text-accent-strong font-medium">
                    Ver mudanzas en {city.name} →
                  </Link>
                </div>
              </div>
            </section>
          )}

          <GuaranteeStrip />
          <CTABanner />
        </PageTransition>
      </MainLayout>
    </>
  )
}
