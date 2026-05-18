import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { bentoTile, stagger, viewportOnce } from '../motion/variants'
import Tag from '../components/Tag'
import IconBadge from '../components/IconBadge'
import RevealOnScroll from '../components/RevealOnScroll'

type Service = {
  title: string
  description: string
  href: string
  icon: React.ReactNode
  feature?: boolean
}

const services: Service[] = [
  {
    title: 'Mudanzas Residenciales',
    description: 'Casas y apartamentos completos. Operadores con el vehículo adecuado para tu tipo de vivienda.',
    href: '/mudanzas-residenciales',
    feature: true,
    icon: (
      <svg width={24} height={24} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    title: 'Mudanzas Empresariales',
    description: 'Oficinas y locales. Horarios que minimizan tiempo de inactividad.',
    href: '/mudanzas-empresariales',
    icon: (
      <svg width={24} height={24} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: 'Acarreos y Trasteos',
    description: 'Cargas puntuales, electrodomésticos, muebles individuales.',
    href: '/acarreos-pereira',
    icon: (
      <svg width={24} height={24} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: 'Transporte de Muebles',
    description: 'Sofás, camas, neveras. Protección adecuada y transporte seguro.',
    href: '/transporte-muebles-pereira',
    icon: (
      <svg width={24} height={24} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: 'Mudanzas Económicas',
    description: 'Precios justos sin sacrificar calidad. Coordinamos al operador que mejor se ajuste a tu presupuesto.',
    href: '/mudanzas-economicas-pereira',
    icon: (
      <svg width={24} height={24} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <RevealOnScroll className="max-w-2xl mb-12 md:mb-16">
          <Tag tone="accent">Servicios</Tag>
          <h2
            className="mt-4 font-display font-bold text-ink leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: 'var(--text-display)' }}
          >
            ¿Qué necesitas mover?
          </h2>
          <p className="mt-5 text-lg text-ink-2 leading-relaxed">
            Coordinamos el servicio que mejor se ajuste a lo que necesitas, con operadores verificados.
          </p>
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={bentoTile}
              whileHover={{ y: -4 }}
              className={`group ${
                service.feature ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'
              }`}
            >
              <Link
                to={service.href}
                className={`relative h-full overflow-hidden rounded-lg border block transition-colors ${
                  service.feature
                    ? 'bg-surface-ink text-ink-invert border-transparent p-7 md:p-10'
                    : 'bg-surface text-ink border-line hover:border-line-strong p-6 md:p-7'
                }`}
                style={{ boxShadow: 'var(--shadow-tile)' }}
              >
                {service.feature && (
                  <>
                    <div className="absolute -top-32 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-40 -left-20 w-72 h-72 bg-wa/10 rounded-full blur-3xl pointer-events-none" />
                  </>
                )}
                <div className="relative flex flex-col h-full justify-between gap-6">
                  <div>
                    <IconBadge size={service.feature ? 'lg' : 'md'} tone={service.feature ? 'accent' : 'surface'}>
                      {service.icon}
                    </IconBadge>
                    <h3
                      className={`mt-5 font-display font-bold leading-tight ${
                        service.feature ? 'text-2xl md:text-3xl' : 'text-h4'
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`mt-2 leading-relaxed ${
                        service.feature ? 'text-ink-invert/70 text-base md:text-lg max-w-md' : 'text-ink-2 text-sm'
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                  <div
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-all ${
                      service.feature ? 'text-accent' : 'text-ink'
                    } group-hover:gap-3`}
                  >
                    Ver detalles
                    <svg width={16} height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
