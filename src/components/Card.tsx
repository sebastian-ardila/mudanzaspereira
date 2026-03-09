import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`bg-white rounded-2xl border border-warm-200/60 p-6 ${hover ? 'hover-lift' : ''} ${className}`}>
      {children}
    </div>
  )
}
