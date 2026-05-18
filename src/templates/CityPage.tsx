import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Head from '../seo/Head'
import MainLayout from '../layouts/MainLayout'
import Breadcrumb from '../components/Breadcrumb'
import Services from '../sections/Services'
import CTABanner from '../components/CTABanner'
import PageTransition from '../components/PageTransition'
import Tag from '../components/Tag'
import WhatsAppTile from '../components/WhatsAppTile'
import GuaranteeStrip from '../sections/GuaranteeStrip'
import { getCallUrl, PHONE_DISPLAY } from '../utils/constants'
import { WhatsAppGlyph, useQuoteNavigate } from '../components/QuoteCTA'
import { bentoTile, fadeUp, stagger, viewportOnce } from '../motion/variants'
import type { City } from '../utils/zones'

interface CityPageProps {
  city: City
}

export default function CityPage({ city }: CityPageProps) {
  const totalZones = city.communes.reduce((sum, c) => sum + c.zones.length, 0)
  const goQuote = useQuoteNavigate()

  return (
    <>
      <Head
        title={`Mudanzas en ${city.name} | Cotización Gratis por WhatsApp`}
        description={`Coordinamos mudanzas, trasteos y acarreos en ${city.name}. Cubrimos las ${city.communes.length} comunas y más de ${totalZones} barrios con operadores verificados. Cotización gratis.`}
        canonical={city.page}
      />
      <MainLayout>
        <PageTransition>
          {/* Hero compacto bento */}
          <section className="bg-bg pt-8 md:pt-12 pb-16 md:pb-20">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
              <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: `Mudanzas ${city.name}` }]} />

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
                    Ciudad
                  </Tag>
                  <h1 className="relative mt-4 font-display font-bold leading-[1.05] tracking-[-0.02em]" style={{ fontSize: 'var(--text-display)' }}>
                    Mudanzas en {city.name}
                  </h1>
                  <p className="relative mt-5 text-lg text-ink-invert/75 leading-relaxed max-w-xl">
                    Coordinamos mudanzas, trasteos y acarreos en {city.name} con operadores verificados. Cubrimos las{' '}
                    {city.communes.length} comunas y más de {totalZones} barrios. Atención 24 horas por WhatsApp.
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
                  className="grid grid-cols-2 gap-4 md:gap-5 md:sticky md:top-24"
                >
                  <motion.div variants={fadeUp} className="rounded-lg bg-surface border border-line p-5">
                    <div className="font-display text-4xl font-bold text-ink leading-none">{city.communes.length}</div>
                    <div className="mt-2 text-sm text-ink-3">Comunas</div>
                  </motion.div>
                  <motion.div variants={fadeUp} className="rounded-lg bg-accent text-ink-invert p-5">
                    <div className="font-display text-4xl font-bold leading-none">{totalZones}+</div>
                    <div className="mt-2 text-sm opacity-90">Barrios</div>
                  </motion.div>
                  <motion.div variants={fadeUp} className="col-span-2">
                    <WhatsAppTile
                      compact
                      title="Atención 24/7"
                      subtitle="Respondemos rápido por WhatsApp"
                    />
                  </motion.div>
                </motion.aside>
              </div>
            </div>
          </section>

          {/* Comunas grid */}
          <section className="bg-bg pb-20 md:pb-28">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
              <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp} className="mb-10 md:mb-12">
                <Tag tone="accent">Comunas</Tag>
                <h2 className="mt-3 font-display font-bold text-ink leading-tight tracking-[-0.02em]" style={{ fontSize: 'var(--text-h3)' }}>
                  Comunas de {city.name}
                </h2>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={stagger}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {city.communes.map((commune) => (
                  <motion.div key={commune.slug} variants={bentoTile} whileHover={{ y: -3 }}>
                    <Link
                      to={commune.page}
                      className="group block rounded-lg bg-surface border border-line hover:border-line-strong p-6 transition-colors h-full"
                      style={{ boxShadow: 'var(--shadow-tile)' }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-display text-lg font-bold text-ink">{commune.name}</h3>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-sm bg-surface-2 text-ink group-hover:bg-ink group-hover:text-ink-invert transition-colors">
                          <svg width={12} height={12} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                      <p className="text-sm text-ink-3">{commune.zones.length} barrios y sectores</p>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          <Services />
          <GuaranteeStrip />
          <CTABanner />
        </PageTransition>
      </MainLayout>
    </>
  )
}
