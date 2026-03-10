import { useEffect } from 'react'
import { useInView } from '../hooks/useInView'
import SectionTitle from '../components/SectionTitle'
import FAQ from '../components/FAQ'

const faqItems = [
  {
    q: '¿Cuánto cuesta una mudanza en Pereira?',
    a: 'El costo de una mudanza o trasteo varía según la cantidad de carga, la distancia y los servicios adicionales. Contáctanos por WhatsApp para una cotización personalizada y sin compromiso.',
  },
  {
    q: '¿Hacen trasteos y acarreos en Dosquebradas?',
    a: 'Sí, hacemos mudanzas, trasteos y acarreos en Pereira, Dosquebradas y todos los barrios del área metropolitana.',
  },
  {
    q: '¿Cuál es la diferencia entre mudanza, trasteo y acarreo?',
    a: 'Una mudanza es el traslado completo de un hogar u oficina. Un trasteo es lo mismo que una mudanza (término muy usado en Colombia). Un acarreo es el transporte de objetos puntuales, como un electrodoméstico o unos pocos muebles.',
  },
  {
    q: '¿Hacen acarreos pequeños?',
    a: 'Sí, realizamos acarreos de todos los tamaños: desde mover un solo mueble o electrodoméstico hasta trasteos de casas y oficinas completas.',
  },
  {
    q: '¿Qué incluye el servicio de mudanza?',
    a: 'Personal de carga y descarga, transporte en vehículo adecuado y cuidado de tus pertenencias. Servicios adicionales de embalaje disponibles.',
  },
  {
    q: '¿Cómo puedo agendar mi trasteo?',
    a: 'Escríbenos por WhatsApp con los detalles de tu mudanza o acarreo (origen, destino, qué vas a mover) y te damos una cotización rápida. Agendamos la fecha que prefieras.',
  },
]

export default function HomeFAQ() {
  const { ref, isVisible } = useInView()

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
    return () => { script.remove() }
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionTitle tag="FAQ" title="Preguntas frecuentes sobre mudanzas y trasteos" />
        <div className={`fade-up ${isVisible ? 'visible' : ''}`}>
          <FAQ items={faqItems} />
        </div>
      </div>
    </section>
  )
}
