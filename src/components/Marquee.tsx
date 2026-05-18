import type { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  duration?: number
  reverse?: boolean
  className?: string
  fade?: boolean
}

export default function Marquee({
  children,
  duration = 40,
  reverse = false,
  className = '',
  fade = true,
}: MarqueeProps) {
  const maskStyle = fade
    ? {
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }
    : undefined

  return (
    <div className={`relative overflow-hidden ${className}`} style={maskStyle}>
      <div
        className="flex w-max gap-3 marquee-track"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        <div className="flex gap-3 shrink-0">{children}</div>
        <div className="flex gap-3 shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}
