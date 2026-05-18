import { motion } from 'framer-motion'
import Head from '../seo/Head'
import MainLayout from '../layouts/MainLayout'
import Button from '../components/Button'
import PageTransition from '../components/PageTransition'
import Tag from '../components/Tag'
import WhatsAppTile from '../components/WhatsAppTile'
import { bentoTile, viewportOnce } from '../motion/variants'

export default function NotFound() {
  return (
    <>
      <Head
        title="Página no encontrada | Mudanzas Pereira"
        description="La página que buscas no existe. Vuelve al inicio para encontrar lo que necesitas."
        canonical="/404"
      />
      <MainLayout>
        <PageTransition>
          <section className="bg-bg py-20 md:py-28 min-h-[70vh] flex items-center">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full">
              <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-8 items-start">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={bentoTile}
                  className="relative overflow-hidden rounded-lg bg-surface-ink text-ink-invert p-10 md:p-16"
                  style={{ boxShadow: 'var(--shadow-tile)' }}
                >
                  <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/30 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative">
                    <Tag tone="ink" className="bg-white/10 text-ink-invert">
                      404
                    </Tag>
                    <h1
                      className="mt-4 font-display font-bold leading-[1.05] tracking-[-0.02em]"
                      style={{ fontSize: 'var(--text-display-xl)' }}
                    >
                      Te perdiste en la mudanza.
                    </h1>
                    <p className="mt-5 text-lg text-ink-invert/75 leading-relaxed max-w-xl">
                      La página que buscas no existe o se movió a otra dirección. Vuelve al inicio para encontrar
                      nuestros servicios.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button variant="accent" size="lg" to="/">
                        Volver al inicio
                      </Button>
                    </div>
                  </div>
                </motion.div>

                <div className="md:sticky md:top-24">
                  <WhatsAppTile
                    title="¿Necesitas ayuda?"
                    subtitle="Escríbenos por WhatsApp y te orientamos"
                  />
                </div>
              </div>
            </div>
          </section>
        </PageTransition>
      </MainLayout>
    </>
  )
}
