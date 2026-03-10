import { SITE_URL, WHATSAPP_NUMBER } from '../utils/constants'

export default function JsonLd() {
  const phone = `+${WHATSAPP_NUMBER}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: 'Mudanzas Pereira',
    description:
      'Coordinamos mudanzas, trasteos y acarreos en Pereira y Dosquebradas con operadores verificados. Mudanzas residenciales, empresariales y transporte de muebles. Atención 24 horas por WhatsApp.',
    url: SITE_URL,
    telephone: phone,
    image: `${SITE_URL}/mudanzas-pereira.png`,
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
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
