import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'whatsapp' | 'call' | 'primary' | 'secondary' | 'ghost' | 'accent'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant: Variant
  href?: string
  to?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  type?: 'button' | 'submit'
  size?: Size
  trailing?: ReactNode
}

const variantStyles: Record<Variant, string> = {
  whatsapp: 'bg-wa text-ink-invert hover:bg-wa-strong shadow-[var(--shadow-cta-wa)]',
  call: 'bg-ink text-ink-invert hover:bg-ink/90',
  primary: 'bg-ink text-ink-invert hover:bg-ink/90',
  secondary: 'bg-surface text-ink border border-line hover:border-line-strong hover:bg-surface-2',
  ghost: 'bg-transparent text-ink hover:bg-surface-2',
  accent: 'bg-accent text-ink-invert hover:bg-accent-strong shadow-[var(--shadow-cta-accent)]',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-xs',
  md: 'px-5 py-3 text-base rounded-sm',
  lg: 'px-7 py-4 text-lg rounded-sm',
}

export default function Button({
  variant,
  href,
  to,
  onClick,
  children,
  className = '',
  type = 'button',
  size = 'md',
  trailing,
}: ButtonProps) {
  const base = `group inline-flex items-center justify-center gap-2.5 font-semibold transition-colors duration-300 cursor-pointer ${sizeStyles[size]} ${variantStyles[variant]} ${className}`

  const inner = (
    <>
      {children}
      {trailing && <span className="transition-transform duration-300 group-hover:translate-x-1">{trailing}</span>}
    </>
  )

  const motionProps: HTMLMotionProps<'button'> = {
    whileTap: { scale: 0.97 },
    whileHover: { scale: 1.02 },
    transition: { type: 'spring', stiffness: 400, damping: 22 },
  }

  if (to) {
    return (
      <Link to={to} className={base}>
        <motion.span {...(motionProps as HTMLMotionProps<'span'>)} className="contents">
          {inner}
        </motion.span>
      </Link>
    )
  }

  if (href) {
    return (
      <motion.a
        {...(motionProps as HTMLMotionProps<'a'>)}
        href={href}
        className={base}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.button {...motionProps} type={type} onClick={onClick} className={base}>
      {inner}
    </motion.button>
  )
}
