import { motion } from 'framer-motion'
import { bentoTile, stagger, viewportOnce } from '../motion/variants'
import Tag from '../components/Tag'
import RevealOnScroll from '../components/RevealOnScroll'

const testimonials = [
  {
    quote:
      'Llegaron puntuales y cuidaron todos mis muebles. La mudanza de mi apartamento en Pinares fue rápida y sin problemas.',
    name: 'Carolina M.',
    location: 'Pereira',
  },
  {
    quote:
      'Me ayudaron con el trasteo de mi oficina en el Centro y todo quedó en perfecto estado. Totalmente recomendados.',
    name: 'Andrés R.',
    location: 'Pereira',
  },
  {
    quote:
      'Los contacté por WhatsApp y en menos de una hora ya tenía la cotización. El precio fue justo y mi mudanza salió perfecta.',
    name: 'Luisa F.',
    location: 'Dosquebradas',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <RevealOnScroll className="max-w-2xl mb-12 md:mb-16">
          <Tag tone="accent">Testimonios</Tag>
          <h2
            className="mt-4 font-display font-bold text-ink leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: 'var(--text-display)' }}
          >
            Lo que dicen quienes ya se mudaron.
          </h2>
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="grid gap-4 md:gap-5 md:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={bentoTile}
              whileHover={{ y: -4 }}
              className={`relative overflow-hidden rounded-lg border p-7 md:p-8 ${
                i === 1 ? 'bg-surface-ink text-ink-invert border-transparent md:translate-y-4' : 'bg-surface text-ink border-line'
              }`}
              style={{ boxShadow: 'var(--shadow-tile)' }}
            >
              {/* Quote mark */}
              <svg
                aria-hidden
                className={`absolute top-5 right-5 w-10 h-10 ${
                  i === 1 ? 'text-accent/80' : 'text-accent-soft'
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 7H5a4 4 0 0 0-4 4v6h6v-6H4a3 3 0 0 1 3-3h2V7zm10 0h-4a4 4 0 0 0-4 4v6h6v-6h-3a3 3 0 0 1 3-3h2V7z" />
              </svg>

              <div className="flex gap-1 mb-4 text-accent">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width={14} height={14} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className={`leading-relaxed mb-6 ${i === 1 ? 'text-ink-invert/85' : 'text-ink-2'}`}>"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-sm ${
                    i === 1 ? 'bg-accent text-ink-invert' : 'bg-ink text-ink-invert'
                  }`}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className={`font-semibold text-sm ${i === 1 ? 'text-ink-invert' : 'text-ink'}`}>{t.name}</p>
                  <p className={`text-xs ${i === 1 ? 'text-ink-invert/60' : 'text-ink-3'}`}>{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
