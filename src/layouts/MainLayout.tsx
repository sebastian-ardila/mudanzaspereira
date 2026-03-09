import { useState, useEffect, useCallback, type ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { SITE_NAME, getWhatsAppUrl, getCallUrl, PHONE_DISPLAY, SCHEDULE } from '../utils/constants'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-1 ${isHome ? '' : 'pt-18'}`}>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isHome = pathname === '/'
  const solid = scrolled || !isHome

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = useCallback((hash: string) => {
    setMenuOpen(false)
    const id = hash.replace('#', '')
    if (isHome) {
      const el = document.getElementById(id)
      el?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(id)
        el?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [isHome, navigate])

  const navLinks = [
    { hash: '#servicios', label: 'Servicios' },
    { hash: '#cobertura', label: 'Cobertura' },
    { hash: '#cotizacion', label: 'Cotización' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        solid
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-warm-200/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-18">
        <Link to="/" className={`font-display text-xl font-bold transition-colors duration-300 ${solid ? 'text-dark-900' : 'text-white'}`}>
          {SITE_NAME}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.hash}
              type="button"
              onClick={() => scrollToSection(link.hash)}
              className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${
                solid ? 'text-warm-600 hover:text-dark-900' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href={getWhatsAppUrl('Hola, necesito información sobre mudanzas')}
            className="inline-flex items-center gap-2 bg-wa-500 hover:bg-wa-600 text-white px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={16} />
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className={`md:hidden p-2 cursor-pointer transition-colors ${solid ? 'text-dark-900' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
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

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } ${solid ? 'bg-white/95 backdrop-blur-xl' : 'bg-dark-900/95 backdrop-blur-xl'}`}
      >
        <nav className="flex flex-col p-6 gap-1">
          {navLinks.map((link) => (
            <button
              key={link.hash}
              type="button"
              onClick={() => scrollToSection(link.hash)}
              className={`py-3 font-medium transition-colors text-left cursor-pointer ${
                solid ? 'text-warm-700 hover:text-dark-900' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href={getWhatsAppUrl('Hola, necesito información sobre mudanzas')}
            className="inline-flex items-center justify-center gap-2 bg-wa-500 text-white px-5 py-3.5 rounded-xl font-semibold mt-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={18} />
            Escribir por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-dark-900 text-warm-300 relative noise overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-display text-white text-2xl font-bold mb-4">{SITE_NAME}</h3>
            <p className="text-warm-400 text-sm leading-relaxed mb-6">
              Servicio profesional de mudanzas en Pereira y Dosquebradas. Atención las 24 horas por WhatsApp.
            </p>
            <div className="flex gap-3">
              <a
                href={getWhatsAppUrl()}
                className="w-10 h-10 rounded-xl bg-wa-500/10 text-wa-500 flex items-center justify-center hover:bg-wa-500/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <a
                href={getCallUrl()}
                className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center hover:bg-amber-500/20 transition-colors"
                aria-label="Llamar"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={getCallUrl()} className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-amber-400">Tel:</span> +57 {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={getWhatsAppUrl()} className="hover:text-white transition-colors flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                  <span className="text-wa-500">WhatsApp:</span> +57 {PHONE_DISPLAY}
                </a>
              </li>
              <li className="text-warm-400">{SCHEDULE}</li>
              <li className="text-warm-400">Pereira y Dosquebradas, Risaralda</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Enlaces</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/mudanzas-pereira" className="hover:text-white transition-colors">Mudanzas Pereira</Link></li>
              <li><Link to="/mudanzas-dosquebradas" className="hover:text-white transition-colors">Mudanzas Dosquebradas</Link></li>
              <li><Link to="/mudanzas-economicas-pereira" className="hover:text-white transition-colors">Mudanzas Económicas</Link></li>
              <li><Link to="/acarreos-pereira" className="hover:text-white transition-colors">Acarreos</Link></li>
              <li><Link to="/precio-mudanza-pereira" className="hover:text-white transition-colors">Precios</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center text-sm text-warm-500">
          <p>&copy; {new Date().getFullYear()} mudanzaspereira.co</p>
        </div>
      </div>
    </footer>
  )
}

function FloatingWhatsApp() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50" style={{ pointerEvents: show ? 'auto' : 'none' }}>
      {/* Pulse ring */}
      <div className={`absolute inset-0 bg-wa-500 rounded-2xl transition-opacity duration-500 ${show ? 'animate-[pulseRing_2s_cubic-bezier(0.4,0,0.6,1)_infinite]' : 'opacity-0'}`} />
      <a
        href={getWhatsAppUrl('Hola, quiero cotizar mi mudanza')}
        className={`relative flex bg-wa-500 hover:bg-wa-600 text-white w-16 h-16 rounded-2xl items-center justify-center shadow-2xl shadow-wa-500/30 transition-all duration-500 hover:scale-110 ${
          show ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon size={30} />
      </a>
    </div>
  )
}

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
