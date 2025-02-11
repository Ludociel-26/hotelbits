import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Wifi, Coffee, Tv } from "lucide-react"

export function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
    >
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="absolute -left-20 top-0 w-40 h-40 bg-amber-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -right-20 bottom-0 w-40 h-40 bg-amber-300 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <div className="relative">
          <h2 className="text-4xl font-bold mb-8">Comodidades de lujo en cada habitación</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-200 to-amber-300 dark:from-amber-800 dark:to-amber-700 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const features = [
  {
    title: "Wi-Fi de alta velocidad",
    description: "Conexión ultrarrápida en todas las áreas del hotel",
    icon: <Wifi className="w-6 h-6" />,
  },
  {
    title: "Servicio de habitaciones 24/7",
    description: "Deliciosa comida y bebidas a cualquier hora",
    icon: <Coffee className="w-6 h-6" />,
  },
  {
    title: "Smart TV con streaming",
    description: "Acceso a tus plataformas favoritas en cada habitación",
    icon: <Tv className="w-6 h-6" />,
  },
]