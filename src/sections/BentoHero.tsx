import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PHONE_DISPLAY, SITE_NAME, getCallUrl } from '../utils/constants'
import { bentoTile, stagger, fadeUp, viewportOnce } from '../motion/variants'
import Tag from '../components/Tag'
import QuoteCTA, { WhatsAppGlyph, scrollToQuote } from '../components/QuoteCTA'

export default function BentoHero() {
  return (
    <section
      className="relative bg-bg overflow-hidden flex flex-col"
      style={{ minHeight: 'calc(100svh - 80px)' }}
    >
      {/* Background gradient mesh */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 0%, rgba(255,91,42,0.10) 0%, transparent 35%), radial-gradient(circle at 88% 100%, rgba(31,139,90,0.08) 0%, transparent 35%)',
        }}
      />

      <div className="relative flex-1 flex flex-col max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-5 md:py-6">
        {/* Title block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mb-3 md:mb-4"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-2.5 flex-wrap">
            <Tag
              tone="accent"
              icon={<span className="w-1.5 h-1.5 rounded-full bg-accent inline-block animate-pulse" />}
            >
              Atención 24h
            </Tag>
            <Tag tone="neutral">Pereira · Dosquebradas</Tag>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display font-bold text-ink leading-[0.95] tracking-[-0.035em] max-w-5xl"
            style={{ fontSize: 'clamp(1.85rem, 4.5vw, 3.5rem)' }}
          >
            Mudanzas en Pereira con operadores{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">verificados.</span>
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'left' }}
                className="absolute left-0 right-0 bottom-0 md:bottom-0.5 h-2 md:h-2.5 bg-accent/35 -z-0"
              />
            </span>
          </motion.h1>
        </motion.div>

        {/* Bento grid */}
        <div className="grid flex-1 grid-cols-1 sm:grid-cols-12 sm:grid-rows-[1.5fr_1fr] gap-3 md:gap-3.5 min-h-0">
          {/* Tile A — Dark CTA */}
          <motion.div
            variants={bentoTile}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            whileHover={{ y: -3 }}
            className="sm:col-span-7 sm:row-span-1 relative overflow-hidden rounded-lg bg-surface-ink text-ink-invert border border-transparent p-6 md:p-8 flex flex-col gap-5 min-h-[240px]"
            style={{ boxShadow: 'var(--shadow-tile)' }}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
                backgroundSize: '22px 22px',
              }}
            />
            <div className="absolute -top-32 -right-24 w-[26rem] h-[26rem] bg-accent/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-20 w-72 h-72 bg-wa/12 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="inline-block w-7 h-px bg-accent" />
                <span className="text-[0.7rem] uppercase tracking-[0.16em] font-bold text-accent">
                  Cotiza tu mudanza
                </span>
              </div>
              <h2 className="font-display text-xl md:text-3xl font-bold leading-[1.1] tracking-[-0.025em] max-w-xl">
                Coordinamos cada paso para que tu mudanza salga{' '}
                <span className="text-accent">sin estrés.</span>
              </h2>
            </div>

            <ul className="relative flex flex-wrap gap-x-5 gap-y-1.5 text-xs md:text-sm text-ink-invert/70">
              {['Operadores verificados', 'Vehículo adecuado', 'Cuidado profesional'].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <svg width={12} height={12} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3} className="text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="relative mt-auto flex flex-wrap gap-2.5">
              <QuoteCTA variant="wa" size="md" icon={<WhatsAppGlyph size={16} />}>
                Cotizar por WhatsApp
              </QuoteCTA>
              <motion.a
                href={getCallUrl()}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-white/[0.08] hover:bg-white/[0.12] text-ink-invert border border-white/15 px-5 py-3 rounded-sm font-semibold text-sm md:text-base transition-colors backdrop-blur-sm"
              >
                <svg width={14} height={14} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {PHONE_DISPLAY}
              </motion.a>
            </div>
          </motion.div>

          {/* Tile B — Orange logo */}
          <motion.button
            type="button"
            onClick={() => scrollToQuote()}
            variants={bentoTile}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            whileHover={{ y: -3 }}
            className="sm:col-span-5 sm:row-span-1 relative overflow-hidden rounded-lg bg-accent text-ink-invert border border-transparent flex items-center justify-center min-h-[240px] cursor-pointer text-left"
            style={{
              boxShadow: 'var(--shadow-tile)',
              backgroundImage:
                'radial-gradient(circle at 25% 20%, rgba(255,255,255,0.18) 0%, transparent 55%), linear-gradient(135deg, #ff6a3c 0%, #ff5b2a 50%, #e74514 100%)',
            }}
            aria-label="Cotiza tu mudanza"
          >
            <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs bg-white/15 backdrop-blur-md text-[0.6rem] uppercase tracking-[0.14em] font-bold">
                <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                Activo
              </span>
            </div>
            <div className="absolute top-3.5 right-3.5">
              <span className="inline-flex px-2 py-0.5 rounded-xs bg-white/15 backdrop-blur-md text-[0.6rem] uppercase tracking-[0.14em] font-bold">
                Risaralda
              </span>
            </div>

            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 50% 55%, rgba(255,255,255,0.08) 25%, transparent 26%), radial-gradient(circle at 50% 55%, rgba(255,255,255,0.05) 38%, transparent 39%)',
              }}
            />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
              className="relative flex items-center justify-center"
            >
              <picture>
                <source srcSet="/mudanzaspereira.webp" type="image/webp" />
                <img
                  src="/mudanzaspereira.png"
                  alt={`${SITE_NAME} logo`}
                  className="w-28 md:w-40 h-auto invert"
                  width={400}
                  height={283}
                />
              </picture>
            </motion.div>

            <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between">
              <div>
                <div className="font-display text-sm md:text-base font-bold leading-tight">{SITE_NAME}</div>
                <div className="text-[0.6rem] uppercase tracking-[0.14em] font-semibold opacity-80">
                  Mudanzas · Trasteos · Acarreos
                </div>
              </div>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-accent shrink-0">
                <svg width={12} height={12} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </motion.button>

          {/* Bottom row — 3 tiles */}
          {/* Stat 500+ */}
          <motion.div
            variants={bentoTile}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            whileHover={{ y: -3 }}
            className="sm:col-span-4 sm:row-span-1 relative overflow-hidden rounded-lg bg-surface text-ink border border-line p-5 flex items-center gap-4 min-h-[110px]"
            style={{ boxShadow: 'var(--shadow-tile)' }}
          >
            <div className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-sm bg-accent-soft text-accent-strong">
              <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-display text-2xl md:text-3xl font-bold leading-none tracking-tight">
                500<span className="text-accent">+</span>
              </div>
              <div className="text-xs text-ink-3 mt-1">barrios cubiertos</div>
            </div>
          </motion.div>

          {/* 24/7 */}
          <motion.div
            variants={bentoTile}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            whileHover={{ y: -3 }}
            className="sm:col-span-4 sm:row-span-1 relative overflow-hidden rounded-lg bg-surface-2 text-ink border border-line p-5 flex items-center gap-4 min-h-[110px]"
            style={{ boxShadow: 'var(--shadow-tile)' }}
          >
            <div className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-sm bg-ink text-ink-invert">
              <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-display text-2xl md:text-3xl font-bold leading-none tracking-tight">
                24<span className="text-accent">/</span>7
              </div>
              <div className="text-xs text-ink-3 mt-1">respondemos siempre</div>
            </div>
          </motion.div>

          {/* Coverage shortcut */}
          <motion.div
            variants={bentoTile}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            whileHover={{ y: -3 }}
            className="sm:col-span-4 sm:row-span-1 relative overflow-hidden rounded-lg min-h-[110px]"
            style={{ boxShadow: 'var(--shadow-tile)' }}
          >
            <Link
              to="/mudanzas-pereira"
              className="group h-full block bg-surface-ink text-ink-invert border border-transparent p-5 flex items-center gap-4 hover:bg-ink transition-colors relative"
            >
              <div className="absolute -bottom-16 -right-10 w-32 h-32 rounded-full bg-accent/25 blur-3xl pointer-events-none" />
              <div className="relative shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-sm bg-white/10 text-ink-invert">
                <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="relative flex-1 min-w-0">
                <div className="font-display text-base md:text-lg font-bold leading-tight">Pereira + Dosquebradas</div>
                <div className="text-xs text-ink-invert/60 mt-0.5">Ver cobertura completa →</div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
