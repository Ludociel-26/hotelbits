"use client"

import { Card, CardContent } from "./ui/card"
import { Building2, Users, CalendarCheck } from "lucide-react"
import CountUp from "react-countup"
import { motion } from "framer-motion"

const metrics = [
  {
    label: "Nuevas Reservas",
    value: 880,
    subValue: "33.5k",
    trend: "+12.5%",
    icon: Building2,
    color: "from-rose-500/10 to-rose-500/5 hover:to-rose-500/10",
    accentColor: "bg-rose-500",
  },
  {
    label: "Reservas Activas",
    value: 120,
    subValue: "Huéspedes actuales",
    trend: "+8.2%",
    icon: Users,
    color: "from-blue-500/10 to-blue-500/5 hover:to-blue-500/10",
    accentColor: "bg-blue-500",
  },
  {
    label: "Próximas Reservas",
    value: 45,
    subValue: "Pendientes hoy",
    trend: "+15.3%",
    icon: CalendarCheck,
    color: "from-green-500/10 to-green-500/5 hover:to-green-500/10",
    accentColor: "bg-green-500",
  },
]

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card
            className={`relative overflow-hidden backdrop-blur-sm bg-gradient-to-br ${metric.color} border-0 shadow-xl h-full`}
          >
            <CardContent className="p-6">
              <div className="flex flex-col h-full justify-between">
                <div className="space-y-2">
                  <div className={`p-3 w-fit rounded-full ${metric.accentColor} bg-opacity-10`}>
                    <metric.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold tracking-tight">
                      <CountUp end={metric.value} duration={2} />
                    </span>
                    <span className="text-sm text-green-500">{metric.trend}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-muted-foreground">{metric.subValue}</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1">
                <div className="relative w-full h-full">
                  <div className={`absolute bottom-0 h-full w-1/3 ${metric.accentColor} opacity-20 animate-pulse`} />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

