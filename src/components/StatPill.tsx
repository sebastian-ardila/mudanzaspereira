import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, type ReactNode } from 'react'

interface StatPillProps {
  value: number
  suffix?: string
  label: string
  icon?: ReactNode
  tone?: 'light' | 'dark' | 'accent'
  className?: string
}

const TONES = {
  light: 'bg-surface text-ink border-line',
  dark: 'bg-surface-ink text-ink-invert border-transparent',
  accent: 'bg-accent-soft text-accent-strong border-accent/20',
}

function AnimatedNumber({ to, suffix }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 60, damping: 18, mass: 1 })
  const display = useTransform(spring, (v) => Math.floor(v).toLocaleString('es-CO'))

  useEffect(() => {
    if (inView) mv.set(to)
  }, [inView, to, mv])

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{display}</motion.span>
      {suffix && <span className="ml-0.5">{suffix}</span>}
    </span>
  )
}

export default function StatPill({ value, suffix, label, icon, tone = 'light', className = '' }: StatPillProps) {
  return (
    <div
      className={`relative h-full flex flex-col justify-between p-6 rounded-lg border ${TONES[tone]} ${className}`}
      style={{ boxShadow: 'var(--shadow-tile)' }}
    >
      {icon && <div className="mb-3">{icon}</div>}
      <div>
        <div className="font-display text-4xl md:text-5xl font-bold leading-none tracking-tight">
          <AnimatedNumber to={value} suffix={suffix} />
        </div>
        <div className={`mt-2 text-sm ${tone === 'dark' ? 'text-ink-invert/70' : 'text-ink-3'}`}>{label}</div>
      </div>
    </div>
  )
}
