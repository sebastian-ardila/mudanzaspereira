const intros: Record<number, (zone: string, city: string) => string> = {
  0: (zone, city) =>
    `¿Necesitas mudarte en ${zone}, ${city}? Ofrecemos mudanzas, trasteos y acarreos con servicio profesional, puntual y cuidadoso para que tu traslado sea sin estrés. Cubrimos toda la zona con personal capacitado y vehículos adecuados.`,
  1: (zone, city) =>
    `Realizamos mudanzas y trasteos en ${zone}, ${city} con la mejor atención y precios justos. Ya sea un acarreo pequeño o el traslado completo de tu casa, contamos con la experiencia para manejar tus pertenencias con cuidado.`,
  2: (zone, city) =>
    `Servicio de mudanzas, acarreos y trasteos en ${zone}, ${city}. Nos encargamos de todo: embalaje, carga, transporte y descarga. Tu mudanza en buenas manos, con atención personalizada y sin contratiempos.`,
  3: (zone, city) =>
    `Si buscas una mudanza segura y económica en ${zone}, ${city}, estás en el lugar indicado. Hacemos mudanzas, trasteos y acarreos con cotización sin compromiso, vehículos de carga apropiados y un equipo comprometido con tu satisfacción.`,
  4: (zone, city) =>
    `Mudanzas en ${zone}, ${city}: servicio rápido, seguro y a buen precio. Nos especializamos en mudanzas locales, trasteos y acarreos con cobertura completa en toda la zona. Contáctanos por WhatsApp para tu cotización.`,
}

const serviceDescriptions: Record<number, (zone: string) => string> = {
  0: (zone) =>
    `En ${zone} ofrecemos mudanzas residenciales completas, incluyendo apartamentos, casas y habitaciones. Nuestro equipo se encarga de la carga, transporte y descarga de todos tus muebles y pertenencias.`,
  1: (zone) =>
    `Brindamos servicios de acarreos y trasteos en ${zone} para objetos individuales, electrodomésticos o cargas pequeñas. Ideal cuando necesitas mover pocas cosas sin contratar una mudanza completa.`,
  2: (zone) =>
    `Servicio de transporte de muebles en ${zone}: sofás, camas, escritorios, neveras y más. Contamos con vehículos adecuados y personal capacitado para mover tus muebles sin rayones ni golpes.`,
  3: (zone) =>
    `Mudanzas empresariales en ${zone}: trasladamos oficinas, locales comerciales y equipos de trabajo. Planificamos cada detalle para minimizar el tiempo de inactividad de tu negocio.`,
}

const faqSets: Record<number, { q: string; a: string }[]> = {
  0: [
    { q: '¿Cuánto cuesta una mudanza en {zone}?', a: 'El precio depende del volumen de carga, la distancia y los servicios adicionales que necesites. Contáctanos por WhatsApp para una cotización rápida y sin compromiso.' },
    { q: '¿Hacen mudanzas pequeñas en {zone}?', a: 'Sí, realizamos mudanzas de todos los tamaños: desde mover unos pocos muebles hasta trasladar una casa completa.' },
    { q: '¿Qué incluye el servicio de mudanza?', a: 'Incluye personal de carga y descarga, transporte en vehículo adecuado y cuidado de tus pertenencias. Servicios de embalaje disponibles bajo solicitud.' },
  ],
  1: [
    { q: '¿En cuánto tiempo pueden hacer mi mudanza en {zone}?', a: 'Dependiendo de la disponibilidad, podemos programar tu mudanza incluso para el mismo día. Contáctanos para verificar horarios.' },
    { q: '¿Trabajan los fines de semana en {zone}?', a: 'Sí, trabajamos de lunes a sábado y en algunos casos domingos y festivos, según disponibilidad.' },
    { q: '¿Cómo puedo pedir una cotización?', a: 'Escríbenos por WhatsApp con los detalles de tu mudanza (origen, destino y qué necesitas mover) y te respondemos en minutos.' },
  ],
  2: [
    { q: '¿Ofrecen servicio de embalaje en {zone}?', a: 'Sí, ofrecemos servicio de embalaje para proteger tus pertenencias durante el traslado. Pregunta por este servicio adicional al solicitar tu cotización.' },
    { q: '¿Pueden mover electrodomésticos grandes?', a: 'Sí, contamos con experiencia y equipos para mover neveras, lavadoras, estufas y otros electrodomésticos de gran tamaño.' },
    { q: '¿Qué formas de pago aceptan?', a: 'Aceptamos efectivo, transferencia bancaria y Nequi. Consulta las opciones al momento de tu cotización.' },
  ],
}

function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

export function getIntro(zoneName: string, cityName: string): string {
  const index = hashString(zoneName) % Object.keys(intros).length
  return intros[index](zoneName, cityName)
}

export function getServiceDescription(zoneName: string, index: number): string {
  const descIndex = (hashString(zoneName) + index) % Object.keys(serviceDescriptions).length
  return serviceDescriptions[descIndex](zoneName)
}

export function getFaqs(zoneName: string): { q: string; a: string }[] {
  const setIndex = hashString(zoneName) % Object.keys(faqSets).length
  return faqSets[setIndex].map((faq) => ({
    q: faq.q.replace('{zone}', zoneName),
    a: faq.a,
  }))
}

export function getMetaTitle(zoneName: string, cityName: string): string {
  const variants = [
    `Mudanzas en ${zoneName}, ${cityName} | Servicio Profesional`,
    `Mudanzas y Acarreos en ${zoneName}, ${cityName} | Cotización Gratis`,
    `Trasteos y Mudanzas en ${zoneName}, ${cityName} | 24 Horas`,
    `Mudanzas y Trasteos en ${zoneName} | ${cityName}`,
  ]
  return variants[hashString(zoneName) % variants.length]
}

export function getMetaDescription(zoneName: string, cityName: string): string {
  const variants = [
    `Servicio de mudanzas en ${zoneName}, ${cityName}. Mudanzas residenciales, acarreos y trasteos. Cotización rápida por WhatsApp. Atención 24 horas.`,
    `¿Buscas mudanzas, trasteos o acarreos en ${zoneName}, ${cityName}? Servicio profesional, puntual y económico. Cotización sin compromiso por WhatsApp.`,
    `Mudanzas, trasteos y acarreos en ${zoneName}, ${cityName}. Transporte de muebles con cobertura completa. Cotiza gratis por WhatsApp.`,
  ]
  return variants[hashString(zoneName) % variants.length]
}
