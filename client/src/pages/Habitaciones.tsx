import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, Phone } from "lucide-react"
import Navbar from "../complements/Navbar"
import { Footer } from "../complements/Footer"

const habitacionesBase = [
  {
    id: 1,
    nombre: "Suite Ejecutiva",
    precio: 250,
    imagen: "/suite-ejecutiva.jpg",
    descripcion: "Perfecta para viajes de negocios, con área de trabajo y vistas panorámicas.",
  }
]

export default function HabitacionesPage() {
  const [busqueda, setBusqueda] = useState("")
  const [habitaciones, setHabitaciones] = useState(habitacionesBase)
  const [habitacionesFiltradas, setHabitacionesFiltradas] = useState(habitacionesBase)

  useEffect(() => {
    fetch("https://67a9b8976e9548e44fc491a0.mockapi.io/api/habitaciones/Habitaciones")
      .then((res) => res.json())
      .then((data) => {
        const habitacionesActualizadas = [...habitacionesBase, ...data]
        setHabitaciones(habitacionesActualizadas)
        setHabitacionesFiltradas(habitacionesActualizadas) // 🔹 Actualiza las filtradas también
      })
      .catch((err) => console.error("Error fetching API data:", err))
  }, [])

  useEffect(() => {
    if (!busqueda.trim()) {
      setHabitacionesFiltradas(habitaciones) // 🔹 Si el input está vacío, mostrar todas
    } else {
      const filtradas = habitaciones.filter((hab) =>
        hab.nombre.toLowerCase().includes(busqueda.toLowerCase())
      )
      setHabitacionesFiltradas(filtradas)
    }
  }, [busqueda, habitaciones])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary dark:from-background dark:to-secondary">
      <Navbar />
      <div className="flex-grow pt-24 px-4">
        <h1 className="text-5xl font-bold text-center mb-12 text-foreground">Nuestras Habitaciones</h1>

        <div className="max-w-md mx-auto mb-12">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Buscar habitaciones..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="flex-grow bg-transparent border border-white/10 p-2 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-white"
            />
            <button className="p-2 bg-white/10 rounded-lg">
              <Search className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {habitacionesFiltradas.map((habitacion) => (
            <motion.div
              key={habitacion.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-64 overflow-hidden rounded-lg">
                <img
                  src={habitacion.imagen || "/placeholder.svg"}
                  alt={habitacion.nombre}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-4 text-white">{habitacion.nombre}</h3>
                <p className="text-gray-300 mb-6">{habitacion.descripcion}</p>
                <p className="text-3xl font-bold text-white mb-6">
                  ${habitacion.precio} <span className="text-sm font-normal text-gray-400">/ noche</span>
                </p>
                <button className="w-full p-3 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center space-x-2 hover:bg-white/20 transition-all">
                  <Phone className="h-5 w-5 text-white" />
                  <span className="text-white font-semibold">Reservar ahora</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
