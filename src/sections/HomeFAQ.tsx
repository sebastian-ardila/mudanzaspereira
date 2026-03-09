import { useInView } from '../hooks/useInView'
import SectionTitle from '../components/SectionTitle'
import FAQ from '../components/FAQ'

const faqItems = [
  {
    q: '¿Cuánto cuesta una mudanza en Pereira?',
    a: 'El costo varía según la cantidad de carga, la distancia y los servicios adicionales. Contáctanos por WhatsApp para una cotización personalizada y sin compromiso.',
  },
  {
    q: '¿Trabajan en Dosquebradas?',
    a: 'Sí, cubrimos Pereira, Dosquebradas y todos los barrios del área metropolitana.',
  },
  {
    q: '¿Hacen mudanzas pequeñas?',
    a: 'Sí, realizamos mudanzas de todos los tamaños, desde un par de muebles hasta casas y oficinas completas.',
  },
  {
    q: '¿Qué incluye el servicio?',
    a: 'Personal de carga y descarga, transporte en vehículo adecuado y cuidado de tus pertenencias. Servicios adicionales de embalaje disponibles.',
  },
  {
    q: '¿Cómo puedo agendar mi mudanza?',
    a: 'Escríbenos por WhatsApp con los detalles (origen, destino, qué vas a mover) y te damos una cotización rápida. Agendamos la fecha que prefieras.',
  },
  {
    q: '¿Cuánto tarda una mudanza local?',
    a: 'Una mudanza local en Pereira normalmente tarda entre 2 y 5 horas, dependiendo del volumen de carga.',
  },
]

export default function HomeFAQ() {
  const { ref, isVisible } = useInView()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionTitle tag="FAQ" title="Preguntas frecuentes" />
        <div className={`fade-up ${isVisible ? 'visible' : ''}`}>
          <FAQ items={faqItems} />
        </div>
      </div>
    </section>
  )
}
