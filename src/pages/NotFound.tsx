import { Link } from 'react-router-dom'
import Head from '../seo/Head'
import MainLayout from '../layouts/MainLayout'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <>
      <Head
        title="Página no encontrada | Mudanzas Pereira"
        description="La página que buscas no existe. Vuelve al inicio para encontrar lo que necesitas."
        canonical="/404"
      />
      <MainLayout>
        <section className="py-24 text-center">
          <div className="max-w-lg mx-auto px-4">
            <h1 className="text-6xl font-extrabold text-gray-300 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Página no encontrada</h2>
            <p className="text-gray-600 mb-8">
              La página que buscas no existe o fue movida. Vuelve al inicio para encontrar nuestros servicios de mudanza.
            </p>
            <Link to="/">
              <Button variant="primary">Volver al inicio</Button>
            </Link>
          </div>
        </section>
      </MainLayout>
    </>
  )
}
