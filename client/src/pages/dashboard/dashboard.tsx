import { useState, useEffect, useMemo } from "react"
import { Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./components/ui/button"
import { DashboardHeader } from "./components/dashboard-header"
import { MetricsCards } from "./components/metrics-cards"
import { EarningsCards } from "./components/earnings-cards"
import { ReservationsChart } from "./components/reservations-chart"
import { AnnualBookingsChart } from "./components/annual-bookings-chart"
import { ReservationsList } from "./components/reservations-list"
import { Sidebar } from "./components/sidebar"
import { RoomStatusTable } from "./components/room-status-table"
import Navbar from '../../complements/Navbar'

const MotionDiv = motion.div

export function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const sidebarWidth = useMemo(() => {
    if (isSmallScreen) return "md:ml-[96px]"
    return isSidebarCollapsed ? "md:ml-[96px]" : "md:ml-[280px]"
  }, [isSmallScreen, isSidebarCollapsed])

  

  return (
    <div className="py-20 px-8 mt-8">
      <Navbar/>
    <section >
      <div className="flex min-h-screen bg-background transition-colors">
        {/* Sidebar en escritorio */}
        <div className="hidden md:block">
          <Sidebar
            isCollapsed={isSidebarCollapsed}
            onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            transitionDuration={300}
          />
        </div>

        {/* Botón menú móvil */}
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Sidebar móvil */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed inset-y-0 left-0 z-40 w-full max-w-xs md:hidden"
              >
                <Sidebar isCollapsed={false} onToggle={() => setIsMobileMenuOpen(false)} transitionDuration={300} />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Contenido principal */}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`flex-1 transition-all duration-300 ease-in-out ${sidebarWidth}`}
        >
          <DashboardHeader />
          <main className="p-4 md:p-8 space-y-6">
            <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl font-bold text-glow">Bienvenido de vuelta, </h1>
              <p className="text-muted-foreground">Aquí está lo que está sucediendo en tu hotel hoy.</p>
            </MotionDiv>

            {/* Layout responsivo */}
            <div className="grid gap-6">
              {/* Tarjetas de métricas */}
              <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <MetricsCards />
              </MotionDiv>

              {/* Tarjetas de ingresos */}
              <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <EarningsCards />
              </MotionDiv>

              {/* Sección de gráficas */}
              <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-3">
                <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2">
                  <ReservationsChart />
                </MotionDiv>
                <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <AnnualBookingsChart />
                </MotionDiv>
              </div>

              {/* Tablas de estado */}
              <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <RoomStatusTable />
              </MotionDiv>

              <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <ReservationsList />
              </MotionDiv>
            </div>
          </main>
        </MotionDiv>
      </div>
    </section>
    </div>
  )
}
