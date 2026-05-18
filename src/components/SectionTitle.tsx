import RevealOnScroll from './RevealOnScroll'
import Tag from './Tag'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  tag?: string
}

export default function SectionTitle({ title, subtitle, centered = false, light = false, tag }: SectionTitleProps) {
  const align = centered ? 'text-center mx-auto' : ''
  const titleColor = light ? 'text-ink-invert' : 'text-ink'
  const subColor = light ? 'text-ink-invert/70' : 'text-ink-2'

  return (
    <RevealOnScroll className={`mb-10 md:mb-16 max-w-2xl ${align}`}>
      {tag && (
        <div className={centered ? 'flex justify-center' : ''}>
          <Tag tone={light ? 'ink' : 'accent'} className={light ? 'bg-white/10 text-ink-invert' : ''}>
            {tag}
          </Tag>
        </div>
      )}
      <h2
        className={`mt-4 font-display font-bold leading-[1.05] tracking-[-0.02em] ${titleColor}`}
        style={{ fontSize: 'var(--text-display)' }}
      >
        {title}
      </h2>
      {subtitle && <p className={`mt-5 text-lg leading-relaxed ${subColor}`}>{subtitle}</p>}
    </RevealOnScroll>
  )
}
