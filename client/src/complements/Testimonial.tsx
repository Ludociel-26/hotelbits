import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Testimonial() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1])
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"])

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div className="absolute inset-0" style={{ scale, opacity }}>
        <img
          src="/opiniones.jpg" // Reemplaza con una imagen del lobby de HotelBits
          alt="HotelBits Lobby"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
      </motion.div>

      {/* Quote Content */}
      <div className="absolute inset-x-0 bottom-24 md:bottom-32 overflow-hidden">
        <motion.div style={{ x }} className="flex items-center">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex-shrink-0 px-8 md:px-16">
              <blockquote className="text-2xl md:text-4xl font-serif italic text-white leading-tight max-w-[90vw] md:max-w-2xl">
                <div className="mb-2 md:mb-4">"HotelBits redefine el lujo moderno.</div>
                <div className="mb-2 md:mb-4">Cada detalle está pensado para brindar</div>
                <div>una experiencia inolvidable a sus huéspedes."</div>
                <footer className="mt-4 md:mt-8">
                  <cite className="text-lg md:text-xl text-zinc-200 font-light">— Revista Viajes & Tecnología</cite>
                </footer>
              </blockquote>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
