import { useEffect } from 'react'
import SectionTitle from '../components/SectionTitle'
import FAQ from '../components/FAQ'
import RevealOnScroll from '../components/RevealOnScroll'

const faqItems = [
  {
    q: '¿Cuánto cuesta una mudanza en Pereira?',
    a: 'Depende de la cantidad de carga, la distancia y si necesitas servicios adicionales como embalaje. Escríbenos por WhatsApp con los detalles y te cotizamos en minutos, sin compromiso.',
  },
  {
    q: '¿Ustedes hacen la mudanza directamente?',
    a: 'Coordinamos tu mudanza con operadores aliados verificados en Pereira y Dosquebradas. Nos encargamos de asignar el equipo y vehículo adecuado para tu servicio.',
  },
  {
    q: '¿Hacen trasteos y acarreos en Dosquebradas?',
    a: 'Sí, cubrimos Pereira, Dosquebradas y todos los barrios del área metropolitana para mudanzas, trasteos y acarreos.',
  },
  {
    q: '¿Cuál es la diferencia entre mudanza, trasteo y acarreo?',
    a: 'Una mudanza es el traslado completo de un hogar u oficina. Un trasteo es lo mismo que una mudanza (término muy usado en Colombia). Un acarreo es el transporte de objetos puntuales, como un electrodoméstico o unos pocos muebles.',
  },
  {
    q: '¿Hacen acarreos pequeños?',
    a: 'Sí, coordinamos acarreos de todos los tamaños: desde mover un solo mueble o electrodoméstico hasta trasteos completos de casas y oficinas.',
  },
  {
    q: '¿Cómo puedo agendar mi mudanza?',
    a: 'Escríbenos por WhatsApp con los detalles (origen, destino, qué vas a mover) y te damos una cotización rápida. Una vez confirmes, coordinamos el equipo para la fecha que prefieras.',
  },
]

export default function HomeFAQ() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
    return () => {
      script.remove()
    }
  }, [])

  return (
    <section className="py-20 md:py-28 bg-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionTitle tag="FAQ" title="Preguntas frecuentes" centered />
        <RevealOnScroll>
          <FAQ items={faqItems} />
        </RevealOnScroll>
      </div>
    </section>
  )
}
