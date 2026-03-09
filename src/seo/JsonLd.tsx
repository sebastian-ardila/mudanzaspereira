import { SITE_URL, WHATSAPP_NUMBER } from '../utils/constants'

export default function JsonLd() {
  const phone = `+${WHATSAPP_NUMBER}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Mudanzas Pereira',
    url: SITE_URL,
    telephone: phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pereira',
      addressRegion: 'Risaralda',
      addressCountry: 'CO',
    },
    areaServed: [
      { '@type': 'City', name: 'Pereira' },
      { '@type': 'City', name: 'Dosquebradas' },
    ],
    openingHours: 'Mo-Su 00:00-23:59',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: phone,
      contactType: 'customer service',
      availableLanguage: 'Spanish',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
