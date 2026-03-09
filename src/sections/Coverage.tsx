import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { getCities } from '../utils/zones'
import { getWhatsAppUrl } from '../utils/constants'

export default function Coverage() {
  const { ref, isVisible } = useInView()
  const cities = getCities()

  return (
    <section id="cobertura" ref={ref} className="relative py-20 md:py-28 bg-dark-900 noise overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          tag="Cobertura"
          title="Llegamos a toda la ciudad"
          subtitle="Pereira, Dosquebradas y todos sus barrios"
          light
        />

        <div className={`grid gap-6 md:grid-cols-2 mb-10 stagger`}>
          {cities.map((city) => (
            <div
              key={city.slug}
              className={`fade-up ${isVisible ? 'visible' : ''} bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-7`}
            >
              <h3 className="font-display text-xl font-bold text-white mb-5">
                <Link to={city.page} className="hover:text-amber-400 transition-colors">
                  {city.name}
                </Link>
                <span className="text-sm font-normal text-warm-400 ml-2">
                  {city.communes.reduce((sum, c) => sum + c.zones.length, 0)} barrios
                </span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {city.communes.map((commune) => (
                  <Link
                    key={commune.slug}
                    to={commune.page}
                    className="text-xs bg-white/8 text-warm-300 px-3 py-1.5 rounded-lg hover:bg-amber-500/20 hover:text-amber-400 transition-all duration-200 border border-white/5"
                  >
                    {commune.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center fade-up ${isVisible ? 'visible' : ''}`}>
          <p className="text-warm-400 mb-6 text-sm">
            Más de 500 barrios y sectores en toda el área metropolitana
          </p>
          <Button variant="whatsapp" href={getWhatsAppUrl('Hola, quiero saber si cubren mi zona para una mudanza')}>
            Consultar mi zona
          </Button>
        </div>
      </div>
    </section>
  )
}
