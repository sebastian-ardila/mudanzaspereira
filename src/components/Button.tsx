import type { ReactNode } from 'react'

interface ButtonProps {
  variant: 'whatsapp' | 'call' | 'primary' | 'secondary'
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  type?: 'button' | 'submit'
  size?: 'sm' | 'md' | 'lg'
}

const variantStyles: Record<string, string> = {
  whatsapp: 'bg-wa-500 hover:bg-wa-600 text-white glow-wa',
  call: 'bg-dark-900 hover:bg-dark-800 text-white',
  primary: 'bg-amber-500 hover:bg-amber-600 text-dark-900',
  secondary: 'bg-cream-100 border border-warm-200 text-warm-700 hover:bg-cream-200 hover:border-warm-300',
}

const sizeStyles: Record<string, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({ variant, href, onClick, children, className = '', type = 'button', size = 'md' }: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2.5 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${sizeStyles[size]}`
  const classes = `${base} ${variantStyles[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') || href.startsWith('tel:') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
