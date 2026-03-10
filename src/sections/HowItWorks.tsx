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
        <div className={`grid gap-6 sm:grid-cols-2 md:grid-cols-4 stagger`}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`fade-up ${isVisible ? 'visible' : ''} group bg-cream-50 rounded-2xl border border-warm-200 p-6 text-center`}
            >
              <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-600 font-display text-lg font-bold flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                {step.num}
              </div>
              <h3 className="font-display text-lg font-bold text-dark-900 mb-2">{step.title}</h3>
              <p className="text-sm text-warm-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
