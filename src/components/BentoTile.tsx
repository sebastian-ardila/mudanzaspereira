import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { bentoTile, viewportOnce } from '../motion/variants'

type Tone = 'light' | 'subtle' | 'dark' | 'accent'

interface BentoTileProps {
  children: ReactNode
  tone?: Tone
  href?: string
  to?: string
  className?: string
  interactive?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  as?: 'div' | 'article' | 'section'
  noAnimate?: boolean
}

const TONES: Record<Tone, string> = {
  light: 'bg-surface text-ink border-line',
  subtle: 'bg-surface-2 text-ink border-line',
  dark: 'bg-surface-ink text-ink-invert border-transparent',
  accent: 'bg-accent text-ink-invert border-transparent',
}

const PADDINGS = {
  none: '',
  sm: 'p-5',
  md: 'p-6 md:p-8',
  lg: 'p-8 md:p-12',
}

export default function BentoTile({
  children,
  tone = 'light',
  href,
  to,
  className = '',
  interactive,
  padding = 'md',
  as = 'div',
  noAnimate = false,
}: BentoTileProps) {
  const isInteractive = interactive ?? Boolean(href || to)
  const base = `relative overflow-hidden border ${TONES[tone]} ${PADDINGS[padding]} ${
    isInteractive ? 'cursor-pointer' : ''
  } ${className}`

  const motionProps: HTMLMotionProps<'div'> = {
    initial: noAnimate ? false : 'hidden',
    whileInView: noAnimate ? undefined : 'visible',
    viewport: viewportOnce,
    variants: bentoTile,
    whileHover: isInteractive ? { y: -4 } : undefined,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }

  const content = (
    <motion.div
      {...motionProps}
      className={`rounded-lg ${base}`}
      style={{ boxShadow: 'var(--shadow-tile)' }}
    >
      {children}
    </motion.div>
  )

  if (to) {
    return (
      <Link to={to} className="block group">
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block group">
        {content}
      </a>
    )
  }
  if (as === 'article') return <article className="block">{content}</article>
  if (as === 'section') return <section className="block">{content}</section>
  return content
}
