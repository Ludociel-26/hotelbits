import { clsx } from "clsx"
import { BarChart3, Building2, Calendar, ChevronLeft, Home, Settings, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState, useCallback } from "react"

const sidebarItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: Building2, label: "Properties", href: "/properties" },
  { icon: Calendar, label: "Bookings", href: "/bookings" },
  { icon: Users, label: "Guests", href: "/guests" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

interface SidebarProps {
  isCollapsed: boolean
  onToggle: () => void
  transitionDuration?: number
}

export function Sidebar({ isCollapsed, onToggle, transitionDuration = 300 }: SidebarProps) {
  const [shouldAutoCollapse, setShouldAutoCollapse] = useState(false)
  const [pathname, setPathname] = useState(window.location.pathname)

  // Función para manejar cambios de tamaño de ventana
  const handleResize = useCallback(() => {
    const shouldCollapse = window.innerWidth < 1280
    if (shouldCollapse !== shouldAutoCollapse) {
      setShouldAutoCollapse(shouldCollapse)
      if (shouldCollapse && !isCollapsed) {
        onToggle()
      }
    }
  }, [shouldAutoCollapse, isCollapsed, onToggle])

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [handleResize])

  return (
    <motion.div
      initial={false}
      animate={{
        width: isCollapsed ? 80 : 240,
        transition: { duration: transitionDuration / 1000, ease: "easeInOut" },
      }}
      className={clsx(
        "fixed top-4 bottom-4 left-4 z-30 rounded-xl border-0 shadow-2xl",
        "bg-background/40 backdrop-blur-xl",
        "transition-all duration-300 ease-in-out",
      )}
    >
      <div className="flex h-full flex-col px-4 py-20 mt-8">
        <div className="flex items-center justify-between mb-8">
          <motion.div
            initial={false}
            animate={{ opacity: isCollapsed ? 0 : 1, transition: { duration: transitionDuration / 2000 } }}
            className="flex items-center gap-2"
          >
            <div className="h-8 w-8 rounded-full bg-indigo-600/20 backdrop-blur-xl flex items-center justify-center">
              <span className="text-indigo-500 font-semibold text-glow">H</span>
            </div>
            {!isCollapsed && <span className="font-semibold text-glow dark:text-white/90">Hotel Dashboard</span>}
          </motion.div>
          {!shouldAutoCollapse && (
            <button onClick={onToggle} className="p-2 rounded-lg hover:bg-white/10 transition-colors">
              <ChevronLeft className={clsx("h-5 w-5 transition-transform duration-300", isCollapsed && "rotate-180")} />
            </button>
          )}
        </div>

        <nav className="flex-1 space-y-1">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <a
                key={item.href}
                href={item.href}
                className={clsx(
                  "flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200",
                  "group relative overflow-hidden",
                  isActive
                    ? [
                        "bg-background/40 backdrop-blur-xl",
                        "before:absolute before:inset-0 before:rounded-lg",
                        "before:bg-gradient-to-r before:from-indigo-500/20 before:via-purple-500/20 before:to-pink-500/20",
                        "after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-r",
                        "after:from-indigo-500/10 after:via-purple-500/10 after:to-pink-500/10",
                        "after:opacity-0 after:transition-opacity after:duration-500",
                        "hover:after:opacity-100",
                      ]
                    : "hover:bg-background/20 hover:backdrop-blur-xl",
                )}
              >
                <item.icon
                  className={clsx(
                    "h-5 w-5 shrink-0 transition-colors",
                    isActive ? "text-white dark:text-white text-glow" : "text-muted-foreground",
                    "group-hover:text-white dark:group-hover:text-white",
                  )}
                />
                {!isCollapsed && (
                  <span
                    className={clsx(
                      "truncate transition-colors",
                      isActive ? "font-medium text-white dark:text-white text-glow" : "text-muted-foreground",
                      "group-hover:text-white dark:group-hover:text-white",
                    )}
                  >
                    {item.label}
                  </span>
                )}
                {isActive && (
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
                )}
              </a>
            )
          })}
        </nav>
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.div>
  )
}
