import type { ReactNode } from 'react'

interface TagProps {
  children: ReactNode
  tone?: 'accent' | 'neutral' | 'wa' | 'ink'
  className?: string
  icon?: ReactNode
}

const TONES: Record<NonNullable<TagProps['tone']>, string> = {
  accent: 'bg-accent-soft text-accent-strong',
  neutral: 'bg-surface-2 text-ink-2 border border-line',
  wa: 'bg-wa-soft text-wa-strong',
  ink: 'bg-ink text-ink-invert',
}

export default function Tag({ children, tone = 'neutral', className = '', icon }: TagProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs text-xs font-medium uppercase tracking-[0.12em] ${TONES[tone]} ${className}`}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </span>
  )
}
