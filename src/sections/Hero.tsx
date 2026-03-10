import { useEffect, useState } from 'react'
import Button from '../components/Button'
import { getWhatsAppUrl, getCallUrl, PHONE_DISPLAY } from '../utils/constants'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setLoaded(true))
  }, [])

  return (
    <section className="relative hero-gradient noise overflow-hidden min-h-[100svh] flex items-center">
      {/* Decorative orbs */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-40 w-[400px] h-[400px] bg-wa-500/6 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-dark-600/20 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32 md:py-40 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          {/* Tag */}
          <div
            className={`transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              Atención 24 horas por WhatsApp
            </span>
          </div>

          {/* H1 */}
          <h1
            className={`font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[0.95] mb-6 transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Mudanzas y Trasteos en
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300">
              Pereira
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg md:text-xl text-warm-300 max-w-xl mb-10 leading-relaxed transition-all duration-700 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Servicio profesional de mudanzas, trasteos y acarreos en Pereira y Dosquebradas.
            <span className="text-white font-medium"> Cotización gratis en minutos.</span>
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-14 transition-all duration-700 delay-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Button variant="whatsapp" size="lg" href={getWhatsAppUrl('Hola, quiero cotizar mi mudanza en Pereira')}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Cotizar por WhatsApp
            </Button>
            <Button variant="secondary" size="lg" href={getCallUrl()}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              Llamar al {PHONE_DISPLAY}
            </Button>
          </div>

          {/* Trust strip */}
          <div
            className={`flex flex-wrap gap-x-8 gap-y-3 transition-all duration-700 delay-[900ms] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {[
              'Cotización sin compromiso',
              'Respuesta en minutos',
              'Cobertura total',
              'Cuidamos tus pertenencias',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-warm-300">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                {item}
              </div>
            ))}
          </div>
        </div>

          {/* Hero image */}
          <div
            className={`hidden md:block transition-all duration-1000 delay-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <img
              src="/mudanzas-pereira.png"
              alt="Camión de mudanzas y trasteos en Pereira con cajas y muebles listos para acarreo"
              className="w-full object-contain drop-shadow-2xl"
              width={600}
              height={600}
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Bottom fade - multi-stop dark-to-cream transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-52"
        style={{
          background: 'linear-gradient(to top, #fefdfb 0%, #fefdfb 10%, rgba(254,253,251,0.7) 35%, rgba(26,26,46,0.3) 70%, transparent 100%)',
        }}
      />
    </section>
  )
}
