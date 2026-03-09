export const SITE_NAME = 'Mudanzas Pereira'
export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://mudanzaspereira.co'
export const PHONE = import.meta.env.VITE_PHONE || ''
export const PHONE_DISPLAY = PHONE.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || ''
export const SCHEDULE = 'Atención 24 horas por WhatsApp'

export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export function getWhatsAppUrl(message?: string): string {
  const base = WHATSAPP_BASE_URL
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`
  }
  return base
}

export function getWhatsAppUrlForZone(zoneName: string): string {
  return getWhatsAppUrl(`Hola, necesito una cotización para mudanza en ${zoneName}. ¿Me pueden ayudar?`)
}

export function getCallUrl(): string {
  return `tel:+57${PHONE}`
}
