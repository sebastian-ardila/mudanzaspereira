import { motion } from 'framer-motion'
import { stagger, fadeUp, viewportOnce, bentoTile } from '../motion/variants'
import Tag from '../components/Tag'
import RevealOnScroll from '../components/RevealOnScroll'

const rows = [
  { feat: 'Operador verificado', us: true, them: false },
  { feat: 'Cotización clara antes de cargar', us: true, them: false },
  { feat: 'Disponibilidad 24/7 por WhatsApp', us: true, them: false },
  { feat: 'Vehículo según tu carga', us: true, them: false },
  { feat: 'Cuidado profesional de muebles', us: true, them: false },
  { feat: 'Te dejan en visto a mitad del proceso', us: false, them: true },
  { feat: 'Sorpresas de último minuto en el precio', us: false, them: true },
]

function Check() {
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-wa-soft text-wa-strong">
      <svg width={14} height={14} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  )
}

function Cross() {
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-surface-2 text-ink-3">
      <svg width={14} height={14} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  )
}

export default function ComparisonTable() {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <RevealOnScroll className="max-w-2xl mb-12 md:mb-16">
          <Tag tone="accent">Diferencias</Tag>
          <h2 className="mt-4 font-display font-bold text-ink leading-[1.05] tracking-[-0.02em]" style={{ fontSize: 'var(--text-display)' }}>
            Qué te ahorras coordinando con nosotros.
          </h2>
          <p className="mt-5 text-lg text-ink-2 leading-relaxed">
            La diferencia entre una mudanza tranquila y una mudanza accidentada está en quién la coordina.
          </p>
        </RevealOnScroll>

        <motion.div
          variants={bentoTile}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-lg bg-surface border border-line"
          style={{ boxShadow: 'var(--shadow-tile)' }}
        >
          {/* Header */}
          <div className="grid grid-cols-[1fr_auto_auto] md:grid-cols-[2fr_1fr_1fr] gap-4 md:gap-8 px-6 md:px-10 py-5 border-b border-line bg-surface-2">
            <div className="text-xs uppercase tracking-[0.12em] text-ink-3 font-semibold">Lo que necesitas</div>
            <div className="text-xs uppercase tracking-[0.12em] text-accent-strong font-bold text-center md:text-left">
              Con nosotros
            </div>
            <div className="text-xs uppercase tracking-[0.12em] text-ink-3 font-semibold text-center md:text-left">
              Por tu cuenta
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger}>
            {rows.map((row, i) => (
              <motion.div
                key={row.feat}
                variants={fadeUp}
                className={`grid grid-cols-[1fr_auto_auto] md:grid-cols-[2fr_1fr_1fr] gap-4 md:gap-8 px-6 md:px-10 py-5 items-center ${
                  i !== rows.length - 1 ? 'border-b border-line' : ''
                } hover:bg-surface-2/50 transition-colors`}
              >
                <div className="text-ink font-medium">{row.feat}</div>
                <div className="flex justify-center md:justify-start">{row.us ? <Check /> : <Cross />}</div>
                <div className="flex justify-center md:justify-start">{row.them ? <Check /> : <Cross />}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
