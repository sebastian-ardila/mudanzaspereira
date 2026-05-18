import { motion } from 'framer-motion'
import { getCallUrl, PHONE_DISPLAY } from '../utils/constants'
import { bentoTile, viewportOnce } from '../motion/variants'
import QuoteCTA, { WhatsAppGlyph } from './QuoteCTA'

interface CTABannerProps {
  title?: string
  subtitle?: string
}

export default function CTABanner({
  title = '¿Listo para coordinar tu mudanza?',
  subtitle = 'Completa el formulario y te respondemos en minutos. Sin compromiso.',
}: CTABannerProps) {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={bentoTile}
          className="relative overflow-hidden rounded-xl bg-surface-ink text-ink-invert p-10 md:p-16"
          style={{ boxShadow: 'var(--shadow-tile)' }}
        >
          {/* Decorative orbs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-[480px] h-[480px] bg-wa/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <h2
                className="font-display font-bold leading-[1.05] tracking-[-0.02em]"
                style={{ fontSize: 'var(--text-display)' }}
              >
                {title}
              </h2>
              <p className="mt-5 text-lg text-ink-invert/70 leading-relaxed max-w-md">{subtitle}</p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <QuoteCTA variant="wa" size="lg" icon={<WhatsAppGlyph size={18} />} className="w-full md:w-auto">
                Cotizar por WhatsApp
              </QuoteCTA>
              <a
                href={getCallUrl()}
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 text-ink-invert border border-white/15 px-7 py-4 rounded-sm font-semibold text-lg transition-colors w-full md:w-auto"
              >
                <PhoneIcon />
                Llamar al {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}
