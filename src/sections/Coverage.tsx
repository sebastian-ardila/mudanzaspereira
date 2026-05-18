import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getCities } from '../utils/zones'
import { bentoTile, stagger, fadeUp, viewportOnce } from '../motion/variants'
import Tag from '../components/Tag'
import Marquee from '../components/Marquee'
import RevealOnScroll from '../components/RevealOnScroll'
import QuoteCTA, { WhatsAppGlyph } from '../components/QuoteCTA'

export default function Coverage() {
  const cities = getCities()
  const allBarrios = cities.flatMap((c) => c.communes.flatMap((co) => co.zones.map((z) => z.name)))
  const sampleBarrios = allBarrios.slice(0, 28)

  return (
    <section id="cobertura" className="relative py-20 md:py-28 bg-surface-ink text-ink-invert overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-wa/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
        <RevealOnScroll className="max-w-2xl mb-12 md:mb-16">
          <Tag tone="ink" className="bg-white/10 text-ink-invert">
            Cobertura
          </Tag>
          <h2
            className="mt-4 font-display font-bold text-ink-invert leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: 'var(--text-display)' }}
          >
            Toda Pereira. Toda Dosquebradas.
          </h2>
          <p className="mt-5 text-lg text-ink-invert/70 leading-relaxed">
            Coordinamos servicios en más de 500 barrios del área metropolitana.
          </p>
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="grid gap-4 md:gap-5 md:grid-cols-2 mb-12"
        >
          {cities.map((city) => (
            <motion.div
              key={city.slug}
              variants={bentoTile}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-lg bg-white/[0.04] border border-white/10 p-7 md:p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold">
                    <Link to={city.page} className="hover:text-accent transition-colors">
                      {city.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-ink-invert/60">
                    {city.communes.reduce((sum, c) => sum + c.zones.length, 0)} barrios cubiertos
                  </p>
                </div>
                <Link
                  to={city.page}
                  className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-sm bg-white/10 text-ink-invert hover:bg-accent hover:text-ink-invert transition-colors"
                  aria-label={`Ver mudanzas en ${city.name}`}
                >
                  <svg width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {city.communes.map((commune) => (
                  <Link
                    key={commune.slug}
                    to={commune.page}
                    className="text-xs bg-white/5 text-ink-invert/80 px-3 py-1.5 rounded-xs hover:bg-accent hover:text-ink-invert transition-colors border border-white/5"
                  >
                    {commune.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee de barrios sample */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp} className="mb-12">
          <div className="text-xs uppercase tracking-[0.12em] text-ink-invert/50 font-semibold mb-4 text-center">
            Algunos barrios donde operamos
          </div>
          <Marquee duration={50}>
            {sampleBarrios.map((b) => (
              <span
                key={b}
                className="inline-flex items-center px-4 py-2 rounded-sm bg-white/[0.04] border border-white/10 text-sm text-ink-invert/80"
              >
                {b}
              </span>
            ))}
          </Marquee>
        </motion.div>

        <RevealOnScroll className="text-center">
          <QuoteCTA variant="wa" size="lg" icon={<WhatsAppGlyph size={18} />}>
            Consultar mi zona
          </QuoteCTA>
        </RevealOnScroll>
      </div>
    </section>
  )
}
