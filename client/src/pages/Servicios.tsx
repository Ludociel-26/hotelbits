import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "../complements/Navbar";
import { Footer } from "../complements/Footer";
import { Wifi, Tv, Coffee, Utensils, Dumbbell, SpadeIcon as Spa } from "lucide-react"

const services = [
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "Internet de Alta Velocidad",
    description: "Conexión ultra rápida en todas nuestras instalaciones. Perfecto para trabajo o entretenimiento.",
    imageUrl: "/wifi.jpg",
  },
  {
    icon: <Tv className="w-8 h-8" />,
    title: "Streaming en Habitaciones",
    description: "Smart TVs con acceso a las principales plataformas de streaming en todas las habitaciones.",
    imageUrl: "/stremtv.webp",
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Servicios Ejecutivos Premium",
    description: "Salas de reuniones privadas, servicio de secretaría y más para nuestros huéspedes de negocios.",
    imageUrl: "/executive-services.jpg",
  },
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Restaurante Gourmet",
    description: "Disfrute de una experiencia culinaria única con nuestro chef de renombre internacional.",
    imageUrl: "/restaurant.jpg",
  },
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Gimnasio de Última Generación",
    description: "Manténgase en forma con nuestro gimnasio equipado con la última tecnología en fitness.",
    imageUrl: "/gym.jpg",
  },
  {
    icon: <Spa className="w-8 h-8" />,
    title: "Spa y Bienestar",
    description: "Relájese y rejuvenezca con nuestros tratamientos de spa de clase mundial.",
    imageUrl: "/the-spa.jpg",
  },
]

export default function ServiciosPage() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1])

  return (
    <div
      ref={ref}
      className="min-h-screen pt-24 bg-gradient-to-b from-background to-secondary dark:from-background dark:to-secondary"
    >
    <Navbar />
      <h1 className="text-5xl font-bold text-center mb-16 text-foreground">Nuestros Servicios</h1>

      <motion.div style={{ opacity, scale }} className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.imageUrl || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary rounded-full p-2 mr-4">{service.icon}</div>
                  <h2 className="text-2xl font-semibold">{service.title}</h2>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Footer className="mt-auto" />
    </div>
  )
}