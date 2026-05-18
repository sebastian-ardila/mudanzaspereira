import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Head from '../seo/Head'
import MainLayout from '../layouts/MainLayout'
import Breadcrumb from '../components/Breadcrumb'
import CTABanner from '../components/CTABanner'
import PageTransition from '../components/PageTransition'
import Tag from '../components/Tag'
import WhatsAppTile from '../components/WhatsAppTile'
import GuaranteeStrip from '../sections/GuaranteeStrip'
import { getCallUrl, PHONE_DISPLAY } from '../utils/constants'
import { WhatsAppGlyph, useQuoteNavigate } from '../components/QuoteCTA'
import { bentoTile, fadeUp, stagger, viewportOnce } from '../motion/variants'
import type { Commune, City } from '../utils/zones'

interface CommunePageProps {
  commune: Commune
  city: City
}

export default function CommunePage({ commune, city }: CommunePageProps) {
  const goQuote = useQuoteNavigate()
  return (
    <>
      <Head
        title={`Mudanzas en ${commune.name}, ${city.name} | Servicio Profesional`}
        description={`Coordinamos mudanzas, trasteos y acarreos en ${commune.name}, ${city.name} con operadores verificados. Cubrimos todos los barrios de la comuna. Cotización por WhatsApp.`}
        canonical={commune.page}
      />
      <MainLayout>
        <PageTransition>
          <section className="bg-bg pt-8 md:pt-12 pb-16 md:pb-20">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
              <Breadcrumb
                items={[
                  { label: 'Inicio', href: '/' },
                  { label: `Mudanzas ${city.name}`, href: city.page },
                  { label: commune.name },
                ]}
              />

              <div className="grid md:grid-cols-[1.6fr_1fr] gap-6 md:gap-8 items-start">
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
                    Comuna · {city.name}
                  </Tag>
                  <h1 className="relative mt-4 font-display font-bold leading-[1.05] tracking-[-0.02em]" style={{ fontSize: 'var(--text-display)' }}>
                    Mudanzas en {commune.name}
                  </h1>
                  <p className="relative mt-5 text-lg text-ink-invert/75 leading-relaxed max-w-xl">
                    Coordinamos mudanzas, trasteos y acarreos en la comuna {commune.name} de {city.name} con operadores
                    verificados. Cubrimos los {commune.zones.length} barrios y sectores de la zona.
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
                  <motion.div variants={fadeUp} className="rounded-lg bg-accent-soft border border-accent/20 p-6">
                    <div className="text-xs uppercase tracking-[0.12em] text-accent-strong font-bold mb-2">Cobertura</div>
                    <div className="font-display text-3xl font-bold text-ink leading-none">{commune.zones.length}+</div>
                    <div className="mt-2 text-sm text-ink-2">barrios en {commune.name}</div>
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <WhatsAppTile
                      compact
                      title="¿Tu barrio?"
                      subtitle="Consulta cobertura en segundos"
                    />
                  </motion.div>
                </motion.aside>
              </div>
            </div>
          </section>

          {/* Barrios grid */}
          <section className="bg-bg pb-20 md:pb-28">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
              <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp} className="mb-10 md:mb-12">
                <Tag tone="accent">Barrios cubiertos</Tag>
                <h2 className="mt-3 font-display font-bold text-ink leading-tight tracking-[-0.02em]" style={{ fontSize: 'var(--text-h3)' }}>
                  Barrios y sectores en {commune.name}
                </h2>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={stagger}
                className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
              >
                {commune.zones.map((zone) => (
                  <motion.div key={zone.slug} variants={fadeUp}>
                    <Link
                      to={zone.page}
                      className="group flex items-center justify-between gap-3 p-4 rounded-sm bg-surface border border-line hover:border-accent hover:bg-accent-soft/30 transition-colors text-ink"
                    >
                      <span className="font-medium text-sm">{zone.name}</span>
                      <svg
                        className="text-ink-3 group-hover:text-accent group-hover:translate-x-1 transition-all"
                        width={14}
                        height={14}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Other communes */}
          <section className="bg-bg pb-20 md:pb-28">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
              <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
                <Tag tone="accent">Otras zonas</Tag>
                <h2 className="mt-3 font-display font-bold text-ink leading-tight tracking-[-0.02em]" style={{ fontSize: 'var(--text-h3)' }}>
                  Otras comunas en {city.name}
                </h2>
                <div className="mt-6 flex flex-wrap gap-2">
                  {city.communes
                    .filter((c) => c.slug !== commune.slug)
                    .map((c) => (
                      <Link
                        key={c.slug}
                        to={c.page}
                        className="text-sm bg-surface text-ink px-4 py-2 rounded-sm border border-line hover:border-accent hover:bg-accent-soft transition-colors"
                      >
                        {c.name}
                      </Link>
                    ))}
                </div>
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
