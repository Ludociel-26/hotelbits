import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../complements/Navbar";
import { Footer } from "../complements/Footer";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function UbicacionPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    const map = L.map("map").setView([40.7624, -73.9746], 15);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
    L.marker([40.7624, -73.9746])
      .addTo(map)
      .bindPopup("Four Seasons Hotel, New York").openPopup();
  }, []);

  return (
    <div ref={ref} className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />

      <h1 className="text-5xl font-bold text-center mt-32 mb-12">Nuestra Ubicación</h1>
      
      <div className="relative h-[60vh] overflow-hidden mb-16 rounded-lg shadow-lg">
        <motion.div className="w-full h-full bg-gray-900" style={{ scale, y }}>
          <div id="map" className="w-full h-full" />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-black bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg p-8 mb-16 border border-gray-700">
          <h2 className="text-3xl font-semibold mb-4">Cómo llegar</h2>
          <p className="text-gray-300 mb-6">
            El Four Seasons Hotel New York se encuentra en 57 E 57th St, New York, NY 10022, EE.UU.
            A solo 15 minutos en coche desde el aeropuerto JFK o 20 minutos desde LaGuardia.
            Disponible transporte de lujo para nuestros huéspedes.
          </p>
          <a
            href="https://goo.gl/maps/VqGgT"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg transition"
          >
            Abrir en Google Maps
          </a>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-black opacity-50 blur-3xl"></div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {[
            { img: "/hotelB.jpg", text: "Vista aérea de Manhattan" },
            { img: "/vcentralp.jpg", text: "Central Park en otoño" },
            { img: "/rest.jpg", text: "Luces de la ciudad de noche" },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-black rounded-lg overflow-hidden shadow-xl backdrop-blur-lg p-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              whileHover={{ scale: 1.05 }}
              style={{
                transformOrigin: "center",
                animation: `float${index} 6s ease-in-out infinite`,
              }}>
              <img src={item.img} alt={item.text} className="w-full h-56 object-cover rounded-lg" />
              <p className="text-center text-lg mt-4 text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      
      <Footer className="mt-auto" />

      <style>
        {`
          @keyframes float0 {
            0% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-10px) translateX(5px); }
            100% { transform: translateY(0px) translateX(0px); }
          }
          @keyframes float1 {
            0% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(8px) translateX(-4px); }
            100% { transform: translateY(0px) translateX(0px); }
          }
          @keyframes float2 {
            0% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-6px) translateX(3px); }
            100% { transform: translateY(0px) translateX(0px); }
          }
        `}
      </style>
    </div>
  );
}
