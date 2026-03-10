import { useInView } from '../hooks/useInView'
import SectionTitle from '../components/SectionTitle'

const steps = [
  { num: '01', title: 'Escríbenos', description: 'Cuéntanos qué necesitas mover, desde dónde y hacia dónde. Por WhatsApp o llamada.' },
  { num: '02', title: 'Te cotizamos', description: 'Revisamos tu solicitud y te enviamos un presupuesto claro, sin compromiso y en minutos.' },
  { num: '03', title: 'Coordinamos', description: 'Asignamos un operador verificado con el vehículo adecuado para tu mudanza.' },
  { num: '04', title: 'Te mudas', description: 'El equipo llega a la hora acordada, carga, transporta y descarga. Tú solo supervisas.' },
]

export default function HowItWorks() {
  const { ref, isVisible } = useInView()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          tag="Proceso"
          title="Así de fácil es mudarte con nosotros"
          subtitle="Nos encargamos de coordinar todo para que tu mudanza sea simple"
        />
        <div className={`grid gap-6 md:grid-cols-4 stagger`}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`fade-up ${isVisible ? 'visible' : ''} relative group`}
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-warm-200" />
              )}
              <div className="relative">
                <span className="font-display text-6xl font-extrabold text-warm-100 group-hover:text-amber-500/20 transition-colors duration-500">{step.num}</span>
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
