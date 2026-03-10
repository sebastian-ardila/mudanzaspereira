import { useInView } from '../hooks/useInView'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  tag?: string
}

export default function SectionTitle({ title, subtitle, centered = true, light = false, tag }: SectionTitleProps) {
  const { ref, isVisible } = useInView(0.3)

  return (
    <div ref={ref} className={`mb-10 ${centered ? 'text-center' : ''}`}>
      {tag && (
        <span className={`inline-block text-sm font-semibold tracking-widest uppercase mb-3 fade-up ${isVisible ? 'visible' : ''} ${light ? 'text-amber-400' : 'text-amber-600'}`}>
          {tag}
        </span>
      )}
      <h2 className={`font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl leading-tight fade-up ${isVisible ? 'visible' : ''} ${light ? 'text-white' : 'text-dark-900'}`} style={{ transitionDelay: '100ms' }}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl fade-up ${isVisible ? 'visible' : ''} ${centered ? 'mx-auto' : ''} ${light ? 'text-warm-300' : 'text-warm-600'}`} style={{ transitionDelay: '200ms' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
