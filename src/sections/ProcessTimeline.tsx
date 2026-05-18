import { motion } from 'framer-motion'
import { bentoTile, stagger, viewportOnce } from '../motion/variants'
import Tag from '../components/Tag'
import AnimatedHeading from '../components/AnimatedHeading'
import RevealOnScroll from '../components/RevealOnScroll'

const steps = [
  {
    n: '01',
    title: 'Nos escribes',
    desc: 'Cuéntanos qué necesitas mover, desde dónde y a qué barrio. Por WhatsApp es lo más rápido.',
  },
  {
    n: '02',
    title: 'Cotizamos al instante',
    desc: 'Te enviamos un precio claro con todo incluido en minutos. Sin compromiso, sin sorpresas.',
  },
  {
    n: '03',
    title: 'Coordinamos al operador',
    desc: 'Asignamos al operador verificado con el vehículo adecuado para tu mudanza y la distancia.',
  },
  {
    n: '04',
    title: 'Te mudas tranquilo',
    desc: 'El día acordado todo se ejecuta con cuidado profesional. Solo te preocupas por instalarte.',
  },
]

export default function ProcessTimeline() {
  return (
    <section id="proceso" className="bg-bg py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <RevealOnScroll className="max-w-2xl mb-12 md:mb-16">
          <Tag tone="accent">Proceso simple</Tag>
          <AnimatedHeading
            as="h2"
            className="mt-4 font-display font-bold text-ink leading-[1.05] tracking-[-0.02em]"
          >
            Cuatro pasos. Sin enredos.
          </AnimatedHeading>
          <p className="mt-5 text-lg text-ink-2 leading-relaxed">
            Desde que nos escribes hasta que te instalas en tu nuevo lugar, nosotros nos encargamos de los detalles.
          </p>
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="relative grid md:grid-cols-4 gap-4 md:gap-5"
        >
          {/* Connecting line on desktop */}
          <div
            aria-hidden
            className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-linear-to-r from-transparent via-line-strong to-transparent"
          />

          {steps.map((step) => (
            <motion.div
              key={step.n}
              variants={bentoTile}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-lg bg-surface border border-line p-6 md:p-7"
              style={{ boxShadow: 'var(--shadow-tile)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-ink text-ink-invert font-display font-bold text-base">
                  {step.n}
                </span>
              </div>
              <h3 className="font-display text-h4 font-bold text-ink leading-tight">{step.title}</h3>
              <p className="mt-2 text-ink-2 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
