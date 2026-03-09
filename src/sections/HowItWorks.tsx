import { useInView } from '../hooks/useInView'
import SectionTitle from '../components/SectionTitle'

const steps = [
  { num: '01', title: 'Contáctanos', description: 'Escríbenos por WhatsApp con los detalles de tu mudanza.' },
  { num: '02', title: 'Cotización', description: 'Te enviamos un presupuesto justo y sin compromiso.' },
  { num: '03', title: 'Programación', description: 'Agendamos la fecha y hora que prefieras.' },
  { num: '04', title: 'Mudanza', description: 'Nuestro equipo se encarga de todo.' },
]

export default function HowItWorks() {
  const { ref, isVisible } = useInView()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          tag="Proceso"
          title="Así de fácil"
        />
        <div className={`grid gap-6 md:grid-cols-4 stagger`}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`fade-up ${isVisible ? 'visible' : ''} relative`}
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-warm-200" />
              )}
              <div className="relative">
                <span className="font-display text-6xl font-extrabold text-warm-100">{step.num}</span>
                <h3 className="font-display text-lg font-bold text-dark-900 -mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-warm-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
