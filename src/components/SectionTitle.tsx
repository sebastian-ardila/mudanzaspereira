interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  tag?: string
}

export default function SectionTitle({ title, subtitle, centered = true, light = false, tag }: SectionTitleProps) {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
      {tag && (
        <span className={`inline-block text-sm font-semibold tracking-widest uppercase mb-3 ${light ? 'text-amber-400' : 'text-amber-600'}`}>
          {tag}
        </span>
      )}
      <h2 className={`font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl leading-tight ${light ? 'text-white' : 'text-dark-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-warm-300' : 'text-warm-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
