import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'

const stats = [
  { value: 500, suffix: '+', label: 'Barrios cubiertos' },
  { value: 24, suffix: '/7', label: 'Atención WhatsApp' },
  { value: 15, suffix: 'min', label: 'Tiempo de cotización' },
  { value: 2, suffix: '', label: 'Ciudades: Pereira y Dosquebradas' },
]

function AnimatedCounter({ target, suffix, animate }: { target: number; suffix: string; animate: boolean }) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!animate || hasAnimated.current) return
    hasAnimated.current = true
    const duration = 1500
    const steps = 40
    const increment = target / steps
    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(interval)
  }, [animate, target])

  return <>{animate ? count : 0}{suffix}</>
}

export default function TrustBadges() {
  const { ref, isVisible } = useInView(0.3)

  return (
    <section ref={ref} className="relative z-10 pb-12 pt-6 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 stagger`}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center fade-up ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="font-display text-4xl md:text-5xl font-extrabold text-dark-900 mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} animate={isVisible} />
              </div>
              <div className="text-sm text-warm-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
