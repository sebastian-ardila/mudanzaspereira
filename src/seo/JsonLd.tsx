import { SITE_URL, WHATSAPP_NUMBER } from '../utils/constants'

export default function JsonLd() {
  const phone = `+${WHATSAPP_NUMBER}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: 'Mudanzas Pereira',
    description:
      'Servicio profesional de mudanzas en Pereira y Dosquebradas. Mudanzas residenciales, empresariales, acarreos, trasteos y transporte de muebles. Atención 24 horas por WhatsApp.',
    url: SITE_URL,
    telephone: phone,
    image: `${SITE_URL}/mudanza-pereira.jpg`,
    priceRange: '$$',
    currenciesAccepted: 'COP',
    paymentAccepted: 'Efectivo, Transferencia',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pereira',
      addressLocality: 'Pereira',
      addressRegion: 'Risaralda',
      postalCode: '660001',
      addressCountry: 'CO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 4.8133,
      longitude: -75.6961,
    },
    areaServed: [
      { '@type': 'City', name: 'Pereira' },
      { '@type': 'City', name: 'Dosquebradas' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: phone,
      contactType: 'customer service',
      availableLanguage: 'Spanish',
      areaServed: 'CO',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Carolina M.' },
        reviewBody:
          'Llegaron puntuales y cuidaron todos mis muebles. La mudanza de mi apartamento en Pinares fue rápida y sin problemas.',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Andrés R.' },
        reviewBody:
          'Me ayudaron con el trasteo de mi oficina en el Centro y todo quedó en perfecto estado. Totalmente recomendados.',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Luisa F.' },
        reviewBody:
          'Los contacté por WhatsApp y en menos de una hora ya tenía la cotización. El precio fue justo y mi mudanza salió perfecta.',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
