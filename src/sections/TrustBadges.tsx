import { useInView } from '../hooks/useInView'

const stats = [
  { value: '500+', label: 'Barrios cubiertos' },
  { value: '24h', label: 'Atención WhatsApp' },
  { value: '15min', label: 'Tiempo de respuesta' },
  { value: '100%', label: 'Compromiso' },
]

export default function TrustBadges() {
  const { ref, isVisible } = useInView()

  return (
    <section ref={ref} className="py-16 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 stagger`}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`text-center fade-up ${isVisible ? 'visible' : ''}`}
            >
              <div className="font-display text-4xl md:text-5xl font-extrabold text-dark-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-warm-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
