import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface IconBadgeProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  tone?: 'accent' | 'wa' | 'ink' | 'surface'
  className?: string
}

const SIZES = {
  sm: 'w-9 h-9 rounded-xs [&>svg]:w-4 [&>svg]:h-4',
  md: 'w-12 h-12 rounded-sm [&>svg]:w-5 [&>svg]:h-5',
  lg: 'w-16 h-16 rounded-md [&>svg]:w-7 [&>svg]:h-7',
}

const TONES = {
  accent: 'bg-accent-soft text-accent-strong',
  wa: 'bg-wa-soft text-wa-strong',
  ink: 'bg-ink text-ink-invert',
  surface: 'bg-surface-2 text-ink',
}

export default function IconBadge({ children, size = 'md', tone = 'accent', className = '' }: IconBadgeProps) {
  return (
    <motion.span
      whileHover={{ rotate: -4, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`inline-flex items-center justify-center ${SIZES[size]} ${TONES[tone]} ${className}`}
    >
      {children}
    </motion.span>
  )
}
