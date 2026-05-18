import { motion } from 'framer-motion'
import { bentoTile, stagger, viewportOnce } from '../motion/variants'
import IconBadge from '../components/IconBadge'

const guarantees = [
  {
    icon: (
      <svg width={24} height={24} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Operadores verificados',
    desc: 'Validamos a cada operador con el que trabajamos. Sin sorpresas, sin improvisaciones.',
  },
  {
    icon: (
      <svg width={24} height={24} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Respuesta en minutos',
    desc: 'Te escribimos rápido. Aclaramos dudas, coordinamos fecha y damos cotización el mismo día.',
  },
  {
    icon: (
      <svg width={24} height={24} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Precio sin sorpresas',
    desc: 'Te cotizamos con todo incluido antes de iniciar. Lo que ves, eso pagas.',
  },
]

export default function GuaranteeStrip() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="grid md:grid-cols-3 gap-4 md:gap-5"
        >
          {guarantees.map((g) => (
            <motion.div
              key={g.title}
              variants={bentoTile}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-lg bg-surface border border-line p-7 md:p-8 transition-colors hover:border-line-strong"
              style={{ boxShadow: 'var(--shadow-tile)' }}
            >
              <IconBadge size="md" tone="accent">
                {g.icon}
              </IconBadge>
              <h3 className="mt-5 font-display text-h4 font-bold text-ink">{g.title}</h3>
              <p className="mt-2 text-ink-2 leading-relaxed">{g.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
