import { useEffect } from 'react'
import Navbar from '../complements/Navbar'
import Header from '../complements/Header'
import { Footer } from '../complements/Footer'
import { Features } from '../complements/Features'
import { Hero } from '../complements/Hero'
import { Rooms } from '../complements/Rooms'
import { Testimonial } from '../complements/Testimonial'
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';



const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Verificar si se pasó el estado "noAccess" desde la redirección
    if (location.state?.noAccess) {
      toast.error("🚫 No tienes permisos para acceder a esta página.");
    }
  }, [location]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary dark:from-background dark:to-secondary pt-20">
      <Navbar/>
      <Hero/>
      <Rooms/>
      <Testimonial/>
      <Features/>
      <Header/>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Descubre la experiencia HotelBits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/habitaciones" className="group">
              <div className="p-6 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                <h3 className="text-2xl font-semibold mb-4 text-zinc-800 dark:text-zinc-100">Nuestras Habitaciones</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Explora nuestras lujosas opciones de alojamiento
                </p>
                <span className="text-amber-600 dark:text-amber-400 group-hover:underline">Descubrir más →</span>
              </div>
            </a>
            <a href="/servicios" className="group">
              <div className="p-6 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                <h3 className="text-2xl font-semibold mb-4 text-zinc-800 dark:text-zinc-100">Servicios Premium</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Descubre nuestra gama de servicios de clase mundial
                </p>
                <span className="text-amber-600 dark:text-amber-400 group-hover:underline">Explorar servicios →</span>
              </div>
            </a>
            <a href="/ubicacion" className="group">
              <div className="p-6 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                <h3 className="text-2xl font-semibold mb-4 text-zinc-800 dark:text-zinc-100">Ubicación</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">Encuentra cómo llegar a nuestro hotel de lujo</p>
                <span className="text-amber-600 dark:text-amber-400 group-hover:underline">Ver ubicación →</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Home
