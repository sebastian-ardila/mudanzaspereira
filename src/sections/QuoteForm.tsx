import { useState } from 'react'
import { motion } from 'framer-motion'
import { getWhatsAppUrl } from '../utils/constants'
import { bentoTile, viewportOnce } from '../motion/variants'
import Tag from '../components/Tag'
import RevealOnScroll from '../components/RevealOnScroll'

export default function QuoteForm() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    origen: '',
    destino: '',
    fecha: '',
    servicio: '',
    mensaje: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const lines = [
      `Hola, quiero cotizar una mudanza.`,
      ``,
      `Nombre: ${form.nombre}`,
      `Teléfono: ${form.telefono}`,
      form.origen && `Origen: ${form.origen}`,
      form.destino && `Destino: ${form.destino}`,
      form.fecha && `Fecha: ${form.fecha}`,
      form.servicio && `Servicio: ${form.servicio}`,
      form.mensaje && `Detalles: ${form.mensaje}`,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(getWhatsAppUrl(lines), '_blank')
  }

  const inputClass =
    'w-full bg-surface border border-line rounded-sm px-4 py-3.5 text-ink placeholder:text-ink-3 focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all duration-200'
  const labelClass = 'block text-sm font-medium text-ink-2 mb-1.5'

  return (
    <section id="cotizacion" className="py-20 md:py-28 bg-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 items-start">
          <RevealOnScroll>
            <Tag tone="accent">Cotización</Tag>
            <h2
              className="mt-4 font-display font-bold text-ink leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: 'var(--text-display)' }}
            >
              Pide tu cotización.
            </h2>
            <p className="mt-5 text-lg text-ink-2 leading-relaxed">
              Completa los datos y te respondemos por WhatsApp con un precio claro en minutos. Sin compromiso.
            </p>
            <ul className="mt-8 space-y-3 text-ink-2">
              {[
                'Respuesta el mismo día',
                'Cotización con todo incluido',
                'Operadores verificados',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-wa-soft text-wa-strong">
                    <svg width={12} height={12} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={bentoTile}
            className="relative rounded-lg bg-surface border border-line-strong p-7 md:p-9"
            style={{ boxShadow: 'var(--shadow-tile)' }}
          >
            <form onSubmit={handleSubmit} className="space-y-5" autoComplete="on">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className={labelClass}>
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    autoComplete="name"
                    value={form.nombre}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className={labelClass}>
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    value={form.telefono}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Tu número"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="origen" className={labelClass}>
                    Origen
                  </label>
                  <input
                    type="text"
                    id="origen"
                    name="origen"
                    autoComplete="street-address"
                    value={form.origen}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Barrio o dirección"
                  />
                </div>
                <div>
                  <label htmlFor="destino" className={labelClass}>
                    Destino
                  </label>
                  <input
                    type="text"
                    id="destino"
                    name="destino"
                    autoComplete="address-line1"
                    value={form.destino}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Barrio o dirección"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fecha" className={labelClass}>
                    Fecha aproximada de mudanza
                  </label>
                  <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    autoComplete="off"
                    value={form.fecha}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="servicio" className={labelClass}>
                    Tipo de servicio
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    autoComplete="off"
                    value={form.servicio}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Seleccionar...</option>
                    <option value="Mudanza residencial">Mudanza residencial</option>
                    <option value="Mudanza de apartamento">Mudanza de apartamento</option>
                    <option value="Mudanza empresarial">Mudanza empresarial</option>
                    <option value="Acarreo">Acarreo</option>
                    <option value="Transporte de muebles">Transporte de muebles</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className={labelClass}>
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={3}
                  autoComplete="off"
                  value={form.mensaje}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Cuéntanos más detalles"
                />
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-wa hover:bg-wa-strong text-white px-7 py-4 rounded-sm font-semibold text-lg transition-colors shadow-[var(--shadow-cta-wa)]"
              >
                <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enviar por WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
