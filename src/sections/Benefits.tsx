import { useInView } from '../hooks/useInView'
import SectionTitle from '../components/SectionTitle'

const benefits = [
  {
    title: 'Respuesta en Minutos',
    description: 'Te contestamos rápido por WhatsApp. Nada de esperar horas o días para saber cuánto cuesta tu mudanza.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'WhatsApp 24/7',
    description: 'Escríbenos a cualquier hora para programar o cotizar. Siempre hay alguien disponible para atenderte.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Operadores Verificados',
    description: 'Trabajamos con empresas aliadas que conocemos y supervisamos. No te mandamos a cualquiera.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Cotización Sin Compromiso',
    description: 'Te damos un precio claro y transparente. Si no te convence, no hay problema.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function Benefits() {
  const { ref, isVisible } = useInView()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          tag="Ventajas"
          title="¿Por qué coordinar tu mudanza con nosotros?"
        />
        <div className={`grid gap-5 sm:grid-cols-2 stagger`}>
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={`fade-left ${isVisible ? 'visible' : ''} group flex items-start gap-4 bg-white rounded-2xl border border-warm-200 p-6 hover-lift shadow-sm`}
            >
              <div className="w-10 h-10 rounded-xl bg-dark-900 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-dark-900 mb-1">{benefit.title}</h3>
                <p className="text-sm text-warm-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
