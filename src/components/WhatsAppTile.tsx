import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { bentoTile, viewportOnce } from '../motion/variants'
import { scrollToQuote } from './QuoteCTA'

interface WhatsAppTileProps {
  title?: string
  subtitle?: string
  tone?: 'light' | 'dark'
  className?: string
  compact?: boolean
}

function WhatsIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function WhatsAppTile({
  title = 'Cotiza tu mudanza',
  subtitle = 'Te respondemos en minutos, todos los días',
  tone = 'light',
  className = '',
  compact = false,
}: WhatsAppTileProps) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const dark = tone === 'dark'
  const surface = dark ? 'bg-surface-ink text-ink-invert border-transparent' : 'bg-surface text-ink border-line'

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname === '/') {
      scrollToQuote()
    } else {
      navigate('/#cotizacion')
    }
  }

  return (
    <motion.a
      href="/#cotizacion"
      onClick={handleClick}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={bentoTile}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ boxShadow: 'var(--shadow-tile)' }}
      className={`group relative overflow-hidden block rounded-lg border ${surface} ${
        compact ? 'p-5' : 'p-6 md:p-8'
      } ${className}`}
    >
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-wa/12 blur-3xl pointer-events-none" />

      <div className="relative flex items-start gap-4">
        <div className="relative shrink-0">
          <span className="absolute inset-0 rounded-full bg-wa/30 pulse-ring" />
          <span className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-wa text-white">
            <WhatsIcon size={22} />
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className={`font-display text-h4 font-bold ${dark ? 'text-ink-invert' : 'text-ink'}`}>{title}</div>
          <div className={`mt-1 text-sm ${dark ? 'text-ink-invert/70' : 'text-ink-3'}`}>{subtitle}</div>
        </div>
      </div>

      {!compact && (
        <div className={`relative mt-6 inline-flex items-center gap-2 text-sm font-semibold ${dark ? 'text-wa' : 'text-wa-strong'} group-hover:gap-3 transition-all`}>
          Cotizar ahora
          <svg width={16} height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </motion.a>
  )
}
