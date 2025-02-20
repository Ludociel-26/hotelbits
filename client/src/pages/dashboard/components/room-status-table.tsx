"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Badge } from "./ui/badge"
import { clsx } from "clsx"

// Datos de ejemplo combinados
const roomsData = [
  {
    number: "101",
    issue: "Reparación de aire acondicionado",
    status: "maintenance",
    statusText: "En mantenimiento",
    timeRemaining: "2h restantes",
    assignedTo: "Juan Pérez",
    priority: "high",
  },
  {
    number: "102",
    issue: "Limpieza profunda",
    status: "cleaning",
    statusText: "En limpieza",
    timeRemaining: "1h restante",
    assignedTo: "María García",
    priority: "medium",
  },
  {
    number: "205",
    issue: "Cambio de alfombra",
    status: "maintenance",
    statusText: "Pendiente",
    timeRemaining: "Programado",
    assignedTo: "Carlos López",
    priority: "low",
  },
  {
    number: "308",
    issue: "Limpieza regular",
    status: "cleaning",
    statusText: "Completado",
    timeRemaining: "Hace 30m",
    assignedTo: "Ana Martínez",
    priority: "completed",
  },
  // Agrega más datos aquí...
]

export function RoomStatusTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [recordsToShow, setRecordsToShow] = useState("50")

  const filteredRooms = roomsData.filter(
    (room) =>
      room.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.issue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.assignedTo.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const displayedRooms = filteredRooms.slice(0, Number(recordsToShow))

  return (
    <Card
      className="relative overflow-hidden rounded-xl border-0 shadow-2xl 
      dark:bg-gradient-to-br dark:from-black/40 dark:to-black/20 
      bg-gradient-to-br from-white/40 to-white/20
      backdrop-blur-xl"
    >
      <CardHeader>
        <CardTitle className="text-lg font-medium">Estado de Habitaciones</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <Input
            placeholder="Buscar por número, problema o responsable..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm backdrop-blur-xl bg-background/20"
          />
          <Select value={recordsToShow} onValueChange={setRecordsToShow}>
            <SelectTrigger className="w-[180px] backdrop-blur-xl bg-background/20">
              <SelectValue placeholder="Registros a mostrar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="50">50 registros</SelectItem>
              <SelectItem value="100">100 registros</SelectItem>
              <SelectItem value="200">200 registros</SelectItem>
              <SelectItem value="1000000">Todos</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="relative rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-b-2 dark:border-white/20 border-black/20">
                <TableHead className="text-base">Habitación</TableHead>
                <TableHead className="text-base">Problema/Tarea</TableHead>
                <TableHead className="text-base">Estado</TableHead>
                <TableHead className="text-base">Tiempo</TableHead>
                <TableHead className="text-base">Responsable</TableHead>
                <TableHead className="text-base">Prioridad</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayedRooms.map((room) => (
                <TableRow
                  key={room.number}
                  className="border-b dark:border-white/10 border-black/10 dark:hover:bg-white/5 hover:bg-black/5"
                >
                  <TableCell className="font-medium">{room.number}</TableCell>
                  <TableCell>{room.issue}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={clsx(
                        "bg-background/20 backdrop-blur-xl",
                        room.status === "maintenance" && "border-orange-500/50 text-orange-500 dark:text-orange-400",
                        room.status === "cleaning" && "border-blue-500/50 text-blue-500 dark:text-blue-400",
                      )}
                    >
                      {room.statusText}
                    </Badge>
                  </TableCell>
                  <TableCell>{room.timeRemaining}</TableCell>
                  <TableCell>{room.assignedTo}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={clsx(
                        "bg-background/20 backdrop-blur-xl",
                        room.priority === "high" && "border-red-500/50 text-red-500 dark:text-red-400",
                        room.priority === "medium" && "border-yellow-500/50 text-yellow-500 dark:text-yellow-400",
                        room.priority === "low" && "border-green-500/50 text-green-500 dark:text-green-400",
                        room.priority === "completed" && "border-purple-500/50 text-purple-500 dark:text-purple-400",
                      )}
                    >
                      {room.priority}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      {/* Efectos de gradiente */}
      <div
        className="absolute -top-24 -left-20 w-64 h-64 
        dark:bg-gradient-to-br dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 
        bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 
        blur-3xl rounded-full"
      />
      <div
        className="absolute -bottom-24 -right-20 w-64 h-64 
        dark:bg-gradient-to-br dark:from-emerald-500/20 dark:via-blue-500/20 dark:to-purple-500/20 
        bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-purple-500/10 
        blur-3xl rounded-full"
      />
      {/* Efecto de reflejo */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </Card>
  )
}

