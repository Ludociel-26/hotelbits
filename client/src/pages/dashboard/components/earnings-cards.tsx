"use client"

import { useMemo } from "react"
import { Card, CardContent } from "./ui/card"
import CountUp from "react-countup"
import { Bed, PenToolIcon as Tool, CreditCard } from "lucide-react"
import { motion } from "framer-motion"

const roomData = {
  available: 32,
  occupied: 217,
  reserved: 100,
  notReady: 12,
}

const financialData = {
  totalIncome: 1365837,
  pendingPayments: 45620,
  paymentMethods: {
    card: 65,
    cash: 20,
    transfer: 15,
  },
}

const maintenanceData = {
  totalExpenses: 87500,
  pendingRepairs: 12,
  completedRepairs: 45,
}

const MotionCard = motion(Card)

export function EarningsCards() {
  const totalRooms = useMemo(() => {
    return roomData.occupied + roomData.reserved + roomData.notReady + roomData.available
  }, [])

  const occupiedPercent = useMemo(() => (roomData.occupied / totalRooms) * 100, [totalRooms])
  const reservedPercent = useMemo(() => (roomData.reserved / totalRooms) * 100, [totalRooms])
  const notReadyPercent = useMemo(() => (roomData.notReady / totalRooms) * 100, [totalRooms])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <MotionCard
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-xl border-0 shadow-2xl 
        dark:bg-gradient-to-br dark:from-black/40 dark:to-black/20 
        bg-gradient-to-br from-white/40 to-white/20
        backdrop-blur-xl"
      >
        <CardContent className="p-6">
          <div className="relative z-20 space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-medium text-muted-foreground/80 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                Cuentas y Finanzas
              </h3>
              <div className="flex flex-col">
                <div className="text-[2.5rem] font-bold tracking-tight tabular-nums drop-shadow-[0_2px_10px_rgba(255,255,255,0.25)]">
                  <span className="text-[2rem] mr-1">$</span>
                  <CountUp end={financialData.totalIncome} duration={2} separator="," />
                </div>
                <div className="text-emerald-500 dark:text-emerald-400 text-base font-medium">
                  Ingresos por reservas este mes
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground/70 drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]">
                  Pagos pendientes
                </span>
                <span className="font-medium tabular-nums drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]">
                  ${financialData.pendingPayments.toLocaleString()}
                </span>
              </div>
              <div className="space-y-2">
                <span className="text-muted-foreground/70 drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]">
                  Métodos de pago
                </span>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    <span className="text-sm">Tarjeta</span>
                  </div>
                  <span className="text-sm">{financialData.paymentMethods.card}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-money-bill-wave h-4 w-4"></i>
                    <span className="text-sm">Efectivo</span>
                  </div>
                  <span className="text-sm">{financialData.paymentMethods.cash}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-exchange-alt h-4 w-4"></i>
                    <span className="text-sm">Transferencia</span>
                  </div>
                  <span className="text-sm">{financialData.paymentMethods.transfer}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Theme-aware gradient effects */}
          <div
            className="absolute -top-24 -left-20 w-64 h-64 
            dark:bg-gradient-to-br dark:from-purple-500/30 dark:via-blue-500/30 dark:to-emerald-500/30 
            bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-emerald-500/10 
            blur-3xl rounded-full"
          />
          <div
            className="absolute -top-16 -right-20 w-64 h-64 
            dark:bg-gradient-to-br dark:from-rose-500/30 dark:via-fuchsia-500/30 dark:to-indigo-500/30 
            bg-gradient-to-br from-rose-500/10 via-fuchsia-500/10 to-indigo-500/10 
            blur-3xl rounded-full"
          />
          {/* Glass reflection effect */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </CardContent>
      </MotionCard>

      <MotionCard
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative overflow-hidden rounded-xl border-0 shadow-2xl 
        dark:bg-gradient-to-br dark:from-black/40 dark:to-black/20 
        bg-gradient-to-br from-white/40 to-white/20
        backdrop-blur-xl"
      >
        <CardContent className="p-6">
          <div className="relative z-20 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-background/20 backdrop-blur-xl">
                <Bed className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Room availability</h3>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-[2.5rem] font-bold drop-shadow-[0_2px_10px_rgba(255,255,255,0.25)]">
                  {roomData.available}
                </span>
                <span className="text-base text-muted-foreground/70">Room available</span>
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <div className="relative h-3 rounded-full overflow-hidden bg-background/20 backdrop-blur-xl">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-indigo-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${occupiedPercent}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                <motion.div
                  className="absolute inset-y-0 bg-sky-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${reservedPercent}%`, left: `${occupiedPercent}%` }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
                <motion.div
                  className="absolute inset-y-0 bg-orange-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${notReadyPercent}%`, left: `${occupiedPercent + reservedPercent}%` }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </div>

              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-indigo-500" />
                    <span className="text-sm text-muted-foreground/70">{roomData.occupied} Occupied</span>
                  </div>
                  <span className="text-sm text-muted-foreground/70">{occupiedPercent.toFixed(1)}%</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-sky-400" />
                    <span className="text-sm text-muted-foreground/70">{roomData.reserved} Reserved</span>
                  </div>
                  <span className="text-sm text-muted-foreground/70">{reservedPercent.toFixed(1)}%</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-orange-400" />
                    <span className="text-sm text-muted-foreground/70">{roomData.notReady} Not ready</span>
                  </div>
                  <span className="text-sm text-muted-foreground/70">{notReadyPercent.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Theme-aware gradient effects */}
          <div
            className="absolute -top-24 -left-20 w-64 h-64 
            dark:bg-gradient-to-br dark:from-indigo-500/20 dark:via-sky-500/20 dark:to-emerald-500/20 
            bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 
            blur-3xl rounded-full"
          />
          <div
            className="absolute -bottom-24 -right-20 w-64 h-64 
            dark:bg-gradient-to-br dark:from-orange-500/20 dark:via-amber-500/20 dark:to-yellow-500/20 
            bg-gradient-to-br from-orange-500/10 via-amber-500/10 to-yellow-500/10 
            blur-3xl rounded-full"
          />
          {/* Glass reflection effect */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </CardContent>
      </MotionCard>

      <MotionCard
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative overflow-hidden rounded-xl border-0 shadow-2xl 
        dark:bg-gradient-to-br dark:from-black/40 dark:to-black/20 
        bg-gradient-to-br from-white/40 to-white/20
        backdrop-blur-xl"
      >
        <CardContent className="p-6">
          <div className="relative z-20 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-background/20 backdrop-blur-xl">
                <Tool className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                Reparaciones y Mantenimiento
              </h3>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-[2.5rem] font-bold drop-shadow-[0_2px_10px_rgba(255,255,255,0.25)]">
                  ${maintenanceData.totalExpenses.toLocaleString()}
                </span>
                <span className="text-base text-muted-foreground/70">Gastos totales</span>
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground/70">Reparaciones pendientes</span>
                  <span className="text-sm font-medium">{maintenanceData.pendingRepairs}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground/70">Reparaciones completadas</span>
                  <span className="text-sm font-medium">{maintenanceData.completedRepairs}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground/70">Eficiencia de mantenimiento</span>
                  <span className="text-sm font-medium">
                    {(
                      (maintenanceData.completedRepairs /
                        (maintenanceData.completedRepairs + maintenanceData.pendingRepairs)) *
                      100
                    ).toFixed(1)}
                    %
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Theme-aware gradient effects */}
          <div
            className="absolute -top-24 -left-20 w-64 h-64 
            dark:bg-gradient-to-br dark:from-emerald-500/20 dark:via-teal-500/20 dark:to-cyan-500/20 
            bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 
            blur-3xl rounded-full"
          />
          <div
            className="absolute -bottom-24 -right-20 w-64 h-64 
            dark:bg-gradient-to-br dark:from-yellow-500/20 dark:via-orange-500/20 dark:to-red-500/20 
            bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 
            blur-3xl rounded-full"
          />
          {/* Glass reflection effect */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </CardContent>
      </MotionCard>
    </div>
  )
}

