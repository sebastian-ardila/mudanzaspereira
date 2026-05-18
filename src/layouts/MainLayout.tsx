import { useState, useEffect, useCallback, type ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { SITE_NAME, SITE_URL, getWhatsAppUrl, getCallUrl, PHONE_DISPLAY, SCHEDULE } from '../utils/constants'

interface MainLayoutProps {
  children: ReactNode
}

const mainPages = [
  { href: '/mudanzas-residenciales', label: 'Residenciales' },
  { href: '/mudanzas-empresariales', label: 'Empresariales' },
  { href: '/trasteos-pereira', label: 'Trasteos' },
  { href: '/acarreos-pereira', label: 'Acarreos' },
  { href: '/precio-mudanza-pereira', label: 'Precios' },
]

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      <SiteNavSchema />
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

function SiteNavSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: 'Navegación principal',
    url: SITE_URL,
    hasPart: [
      { '@type': 'WebPage', name: 'Inicio', url: SITE_URL },
      ...mainPages.map((p) => ({
        '@type': 'WebPage',
        name: p.label,
        url: `${SITE_URL}${p.href}`,
      })),
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isHome = pathname === '/'

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const scrollToSection = useCallback(
    (hash: string) => {
      setMenuOpen(false)
      const id = hash.replace('#', '')
      if (isHome) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate('/')
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 120)
      }
    },
    [isHome, navigate],
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-bg/75 backdrop-blur-xl border-b border-line">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2.5 text-ink">
          <picture>
            <source srcSet="/mudanzaspereira.webp" type="image/webp" />
            <img
              src="/mudanzaspereira.png"
              alt={`${SITE_NAME} logo`}
              width={40}
              height={28}
              className="h-8 w-auto"
            />
          </picture>
          <span className="font-display text-lg font-bold tracking-tight hidden sm:block">{SITE_NAME}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {mainPages.map((link) => (
            <NavPill key={link.href} to={link.href} active={pathname === link.href}>
              {link.label}
            </NavPill>
          ))}
          <button
            type="button"
            onClick={() => scrollToSection('#cobertura')}
            className="px-3 py-2 text-sm font-medium text-ink-2 hover:text-ink transition-colors cursor-pointer"
          >
            Cobertura
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('#cotizacion')}
            className="px-3 py-2 text-sm font-medium text-ink-2 hover:text-ink transition-colors cursor-pointer"
          >
            Cotización
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('#cotizacion')}
            className="ml-2 inline-flex items-center gap-2 bg-ink hover:bg-ink/90 text-ink-invert px-4 py-2.5 rounded-sm font-semibold transition-colors text-sm cursor-pointer"
          >
            <WhatsAppIcon size={15} />
            Cotizar
          </button>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-ink cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-bg border-b border-line shadow-lg"
          >
            <nav className="flex flex-col p-4 gap-1 max-w-[1200px] mx-auto">
              {mainPages.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3 px-3 rounded-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'bg-accent-soft text-accent-strong'
                      : 'text-ink-2 hover:bg-surface-2 hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => scrollToSection('#cobertura')}
                className="py-3 px-3 rounded-sm font-medium text-ink-2 hover:bg-surface-2 hover:text-ink transition-colors text-left cursor-pointer"
              >
                Cobertura
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('#cotizacion')}
                className="py-3 px-3 rounded-sm font-medium text-ink-2 hover:bg-surface-2 hover:text-ink transition-colors text-left cursor-pointer"
              >
                Cotización
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('#cotizacion')}
                className="inline-flex items-center justify-center gap-2 bg-wa text-white px-5 py-3.5 rounded-sm font-semibold mt-2 shadow-[var(--shadow-cta-wa)] cursor-pointer"
              >
                <WhatsAppIcon size={18} />
                Cotizar mi mudanza
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavPill({ to, active, children }: { to: string; active: boolean; children: ReactNode }) {
  return (
    <Link
      to={to}
      className={`relative px-3 py-2 text-sm font-medium transition-colors ${
        active ? 'text-ink' : 'text-ink-2 hover:text-ink'
      }`}
    >
      {active && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 bg-surface-2 rounded-sm border border-line"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
      <span className="relative">{children}</span>
    </Link>
  )
}

function Footer() {
  return (
    <footer className="bg-surface-ink text-ink-invert relative overflow-hidden">
      {/* Glow accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-wa/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-5">
              <picture>
                <source srcSet="/mudanzaspereira.webp" type="image/webp" />
                <img
                  src="/mudanzaspereira.png"
                  alt={`${SITE_NAME} logo`}
                  width={48}
                  height={34}
                  className="h-10 w-auto invert"
                />
              </picture>
              <span className="font-display text-xl font-bold">{SITE_NAME}</span>
            </Link>
            <p className="text-ink-invert/65 text-sm leading-relaxed mb-6">
              Coordinamos mudanzas, trasteos y acarreos en Pereira y Dosquebradas con operadores verificados. Atención
              24 horas por WhatsApp.
            </p>
            <div className="flex gap-3">
              <a
                href={getWhatsAppUrl()}
                className="w-11 h-11 rounded-sm bg-white/5 text-wa flex items-center justify-center hover:bg-wa hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <a
                href={getCallUrl()}
                className="w-11 h-11 rounded-sm bg-white/5 text-accent flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                aria-label="Llamar"
              >
                <PhoneIcon size={18} />
              </a>
            </div>
          </div>

          <FooterColumn title="Servicios">
            <FooterLink to="/mudanzas-residenciales">Mudanzas Residenciales</FooterLink>
            <FooterLink to="/mudanzas-empresariales">Mudanzas Empresariales</FooterLink>
            <FooterLink to="/trasteos-pereira">Trasteos en Pereira</FooterLink>
            <FooterLink to="/acarreos-pereira">Acarreos en Pereira</FooterLink>
            <FooterLink to="/transporte-muebles-pereira">Transporte de Muebles</FooterLink>
            <FooterLink to="/mudanzas-economicas-pereira">Mudanzas Económicas</FooterLink>
          </FooterColumn>

          <FooterColumn title="Información">
            <FooterLink to="/precio-mudanza-pereira">Precios de Mudanza</FooterLink>
            <FooterLink to="/cuanto-cuesta-una-mudanza-en-pereira">¿Cuánto Cuesta?</FooterLink>
            <FooterLink to="/como-preparar-una-mudanza">Cómo Preparar tu Mudanza</FooterLink>
            <FooterLink to="/mudanzas-pereira">Mudanzas Pereira</FooterLink>
            <FooterLink to="/mudanzas-dosquebradas">Mudanzas Dosquebradas</FooterLink>
          </FooterColumn>

          <FooterColumn title="Contacto">
            <li>
              <a href={getCallUrl()} className="text-ink-invert/65 hover:text-ink-invert transition-colors flex items-center gap-2">
                <span className="text-accent">Tel:</span> +57 {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={getWhatsAppUrl()}
                className="text-ink-invert/65 hover:text-ink-invert transition-colors flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-wa">WhatsApp:</span> +57 {PHONE_DISPLAY}
              </a>
            </li>
            <li className="text-ink-invert/65">{SCHEDULE}</li>
            <li className="text-ink-invert/65">Pereira y Dosquebradas, Risaralda</li>
          </FooterColumn>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-ink-invert/50">
          <p>&copy; {new Date().getFullYear()} mudanzaspereira.co · Todos los derechos reservados.</p>
          <p>Pereira · Dosquebradas · Risaralda</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="text-ink-invert font-semibold mb-5 text-sm uppercase tracking-[0.12em]">{title}</h4>
      <ul className="space-y-3 text-sm">{children}</ul>
    </div>
  )
}

function FooterLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-ink-invert/65 hover:text-ink-invert transition-colors">
        {children}
      </Link>
    </li>
  )
}

function FloatingWhatsApp() {
  const [show, setShow] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    if (pathname === '/') {
      document.getElementById('cotizacion')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/#cotizacion')
    }
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <span className="absolute inset-0 rounded-full bg-wa/40 pulse-ring" aria-hidden />
          <motion.button
            type="button"
            onClick={handleClick}
            whileHover={{ scale: 1.08, rotate: -4 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex bg-wa hover:bg-wa-strong text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full items-center justify-center shadow-[var(--shadow-cta-wa)] cursor-pointer"
            aria-label="Cotizar mi mudanza"
          >
            <WhatsAppIcon size={28} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function PhoneIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  )
}
