import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { getWhatsAppUrl } from '../utils/constants'

export default function QuoteForm() {
  const { ref, isVisible } = useInView()
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

  const inputClass = 'w-full bg-cream-50 border border-warm-200 rounded-xl px-4 py-3.5 text-dark-900 placeholder:text-warm-400 focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 outline-none transition-all duration-200'

  return (
    <section id="cotizacion" ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <SectionTitle
          tag="Cotización"
          title="Solicita tu cotización"
          subtitle="Completa el formulario y te respondemos por WhatsApp"
        />

        <div className={`scale-in ${isVisible ? 'visible' : ''}`}>
          <form onSubmit={handleSubmit} className="bg-cream-50 rounded-2xl border border-warm-200/60 p-7 md:p-9 space-y-5 shadow-lg shadow-warm-200/20">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-warm-700 mb-1.5">Nombre *</label>
                <input type="text" id="nombre" name="nombre" required value={form.nombre} onChange={handleChange} className={inputClass} placeholder="Tu nombre" />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-warm-700 mb-1.5">Teléfono *</label>
                <input type="tel" id="telefono" name="telefono" required value={form.telefono} onChange={handleChange} className={inputClass} placeholder="Tu número" />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="origen" className="block text-sm font-medium text-warm-700 mb-1.5">Origen</label>
                <input type="text" id="origen" name="origen" value={form.origen} onChange={handleChange} className={inputClass} placeholder="Barrio o dirección" />
              </div>
              <div>
                <label htmlFor="destino" className="block text-sm font-medium text-warm-700 mb-1.5">Destino</label>
                <input type="text" id="destino" name="destino" value={form.destino} onChange={handleChange} className={inputClass} placeholder="Barrio o dirección" />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="fecha" className="block text-sm font-medium text-warm-700 mb-1.5">Fecha</label>
                <input type="date" id="fecha" name="fecha" value={form.fecha} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="servicio" className="block text-sm font-medium text-warm-700 mb-1.5">Tipo de servicio</label>
                <select id="servicio" name="servicio" value={form.servicio} onChange={handleChange} className={inputClass}>
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
              <label htmlFor="mensaje" className="block text-sm font-medium text-warm-700 mb-1.5">Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows={3} value={form.mensaje} onChange={handleChange} className={inputClass} placeholder="Cuéntanos más detalles" />
            </div>

            <Button variant="whatsapp" type="submit" className="w-full" size="lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Enviar por WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
