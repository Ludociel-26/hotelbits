import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const descriptiveWords = ["comodidad", "distinción", "tecnología", "elegancia", "perfección"]

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [currentWord, setCurrentWord] = useState(0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % descriptiveWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={ref} className="relative h-screen overflow-hidden bg-zinc-900">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.7 }}
      >
        <source
          src="/hvideo.webm"
          type="video/webm"
        />
        <source
          src="/video.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-zinc-900/20 to-zinc-900/70" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-white font-cormorant"
        >
          Bienvenido a
          <br />
          <span className="italic">HotelBits</span>
        </motion.h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="mt-6 text-xl text-zinc-200 max-w-2xl font-inter"
        >
          Donde la
          <AnimatePresence mode="wait">
            <motion.span
              key={descriptiveWords[currentWord]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-block mx-2 font-semibold text-amber-400"
            >
              {descriptiveWords[currentWord]}
            </motion.span>
          </AnimatePresence>
          se encuentra con la experiencia única e inolvidable.
        </motion.div>
      </motion.div>
    </div>
  )
}