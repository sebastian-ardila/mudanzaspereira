import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

type Variant = 'wa' | 'dark' | 'accent' | 'ghost-dark' | 'ghost-light'
type Size = 'sm' | 'md' | 'lg'

interface QuoteCTAProps {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
  icon?: ReactNode
  trailingIcon?: ReactNode
}

const VARIANTS: Record<Variant, string> = {
  wa: 'bg-wa hover:bg-wa-strong text-white shadow-[var(--shadow-cta-wa)]',
  dark: 'bg-ink hover:bg-ink/90 text-ink-invert',
  accent: 'bg-accent hover:bg-accent-strong text-ink-invert shadow-[var(--shadow-cta-accent)]',
  'ghost-dark': 'bg-white/[0.08] hover:bg-white/[0.12] text-ink-invert border border-white/15 backdrop-blur-sm',
  'ghost-light': 'bg-surface hover:bg-surface-2 text-ink border border-line hover:border-line-strong',
}

const SIZES: Record<Size, string> = {
  sm: 'px-4 py-2.5 text-sm rounded-xs',
  md: 'px-5 py-3 text-sm md:text-base rounded-sm',
  lg: 'px-6 py-3.5 text-base md:text-lg rounded-sm',
}

export function scrollToQuote() {
  const el = document.getElementById('cotizacion')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function useQuoteNavigate() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  return (e?: React.MouseEvent) => {
    e?.preventDefault()
    if (pathname === '/') {
      scrollToQuote()
    } else {
      navigate('/#cotizacion')
    }
  }
}

export default function QuoteCTA({
  variant = 'wa',
  size = 'md',
  children,
  className = '',
  icon,
  trailingIcon,
}: QuoteCTAProps) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname === '/') {
      scrollToQuote()
    } else {
      navigate('/#cotizacion')
    }
  }

  const base = `group inline-flex items-center justify-center gap-2 font-semibold transition-colors cursor-pointer ${SIZES[size]} ${VARIANTS[variant]} ${className}`

  return (
    <motion.a
      href="/#cotizacion"
      onClick={handleClick}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className={base}
    >
      {icon}
      {children}
      {trailingIcon}
    </motion.a>
  )
}

export function WhatsAppGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
