export function Footer({ className = "" }: { className?: string }) {
    return (
      <footer className={`bg-zinc-900 text-white py-12 ${className}`.trim()}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">HotelBits</h3>
              <p className="text-zinc-400">Donde el lujo se encuentra con la tecnología.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <p className="text-zinc-400">Email: info@hotelbits.com</p>
              <p className="text-zinc-400">Teléfono: +1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-zinc-400 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Twitter
                </a>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-800 pt-8 text-center">
            <p className="text-zinc-400">&copy; 2024 HotelBits. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    )
  }  