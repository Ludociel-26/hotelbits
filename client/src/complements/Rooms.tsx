import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

interface Room {
  title: string
  description: string
  imageUrl: string
  rating: number
  review: string
}

const rooms: Room[] = [
  {
    title: "Suite Ejecutiva",
    description: "Espaciosa suite con vistas panorámicas y área de trabajo ergonómica.",
    imageUrl: "/ejecutiva.jpg", // Reemplaza con la URL real de la imagen
    rating: 4.8,
    review: "Increíble comodidad y vistas espectaculares. Perfecto para viajes de negocios.",
  },
  {
    title: "Habitación Deluxe",
    description: "Elegante habitación con cama king-size y baño de mármol.",
    imageUrl: "/deluxe.jpg", // Reemplaza con la URL real de la imagen
    rating: 4.7,
    review: "La cama más cómoda en la que he dormido. Decoración exquisita.",
  },
  {
    title: "Suite Familiar",
    description: "Amplia suite con dos habitaciones, perfecta para familias.",
    imageUrl: "/familiar.jpg", // Reemplaza con la URL real de la imagen
    rating: 4.9,
    review: "Espacio ideal para toda la familia. Los niños adoraron la zona de juegos.",
  },
]

export function Rooms() {
  return (
    <div className="relative bg-zinc-100 dark:bg-zinc-900 py-32">
      <div className="max-w-7xl mx-auto">
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} index={index} />
        ))}
      </div>
    </div>
  )
}

function RoomCard({ room, index }: { room: Room; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const x = useTransform(scrollYProgress, [0, 0.5], [index % 2 === 0 ? 200 : -200, 0])

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        x,
      }}
      className="mb-32 px-6"
    >
      <div className="relative max-w-4xl mx-auto">
        <motion.div className="bg-white dark:bg-zinc-800 backdrop-blur-lg rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-xl">
          <div className="aspect-video relative overflow-hidden">
            <img
                src={room.imageUrl}
              className="transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
          </div>
          <div className="relative p-8">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">{room.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-lg mb-6">{room.description}</p>
            <div className="flex items-center mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(room.rating) ? "text-amber-500 fill-amber-500" : "text-zinc-300 dark:text-zinc-600"}`}
                />
              ))}
              <span className="ml-2 text-zinc-600 dark:text-zinc-300">{room.rating.toFixed(1)}</span>
            </div>
            <blockquote className="italic text-zinc-600 dark:text-zinc-400">"{room.review}"</blockquote>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

