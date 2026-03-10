import { useInView } from '../hooks/useInView'
import SectionTitle from '../components/SectionTitle'

const testimonials = [
  {
    quote: 'Llegaron puntuales y cuidaron todos mis muebles. La mudanza de mi apartamento en Pinares fue rápida y sin problemas.',
    name: 'Carolina M.',
    location: 'Pereira',
    highlight: 'puntuales',
  },
  {
    quote: 'Me ayudaron con el trasteo de mi oficina en el Centro y todo quedó en perfecto estado. Totalmente recomendados.',
    name: 'Andrés R.',
    location: 'Pereira',
    highlight: 'perfecto estado',
  },
  {
    quote: 'Los contacté por WhatsApp y en menos de una hora ya tenía la cotización. El precio fue justo y mi mudanza salió perfecta.',
    name: 'Luisa F.',
    location: 'Dosquebradas',
    highlight: 'menos de una hora',
  },
]

export default function Testimonials() {
  const { ref, isVisible } = useInView()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          tag="Testimonios"
          title="Lo que dicen nuestros clientes"
        />
        <div className={`grid gap-6 md:grid-cols-3 stagger`}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`scale-in ${isVisible ? 'visible' : ''} bg-cream-50 rounded-2xl p-7 border border-warm-200/40 hover-lift`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-warm-600 leading-relaxed mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dark-900 text-white flex items-center justify-center font-display font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-dark-900 text-sm">{t.name}</p>
                  <p className="text-warm-400 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
