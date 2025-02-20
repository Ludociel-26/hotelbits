"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Download } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { exportToPDF, exportToExcel } from "../lib/export-utils"
import { toast } from "react-toastify"
import { Badge } from "./ui/badge"

const reservations = [
  {
    reserva_id: 1,
    huesped_id: 101,
    habitacion_id: 201,
    fecha_entrada: "2023-07-01",
    fecha_salida: "2023-07-05",
    estado: "Confirmada",
    metodo_pago: "Tarjeta",
    total_pagado: 500.0,
  },
  // Añade más reservaciones aquí...
]

export function ReservationsList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [recordsToShow, setRecordsToShow] = useState("50")

  const filteredReservations = reservations.filter(
    (reservation) =>
      reservation.reserva_id.toString().includes(searchTerm) ||
      reservation.fecha_entrada.includes(searchTerm) ||
      reservation.fecha_salida.includes(searchTerm),
  )

  const displayedReservations = filteredReservations.slice(0, Number.parseInt(recordsToShow))

  const handleExportReservations = async (format: "pdf" | "excel") => {
    try {
      if (format === "pdf") {
        await exportToPDF("reservations", displayedReservations)
      } else {
        await exportToExcel("reservations", displayedReservations)
      }
      toast.success("Exportación completada")
    } catch (error) {
      toast.error("Error al exportar las reservaciones")
      console.error("Error al exportar:", error)
    }
  }

  return (
    <Card
      className="relative overflow-hidden rounded-xl border-0 shadow-2xl 
      dark:bg-gradient-to-br dark:from-black/40 dark:to-black/20 
      bg-gradient-to-br from-white/40 to-white/20
      backdrop-blur-xl"
    >
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">Lista de Reservaciones</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-background/20 backdrop-blur-xl">
                <Download className="mr-2 h-4 w-4" />
                Exportar Reservaciones
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handleExportReservations("pdf")}>Exportar a PDF</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExportReservations("excel")}>Exportar a Excel</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <Input
            placeholder="Buscar por ID o fecha"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm bg-background/20 backdrop-blur-xl"
          />
          <Select value={recordsToShow} onValueChange={setRecordsToShow}>
            <SelectTrigger className="w-[180px] bg-background/20 backdrop-blur-xl">
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
                <TableHead className="text-base">ID</TableHead>
                <TableHead className="text-base">Huésped ID</TableHead>
                <TableHead className="text-base">Habitación</TableHead>
                <TableHead className="text-base">Entrada</TableHead>
                <TableHead className="text-base">Salida</TableHead>
                <TableHead className="text-base">Estado</TableHead>
                <TableHead className="text-base">Método de Pago</TableHead>
                <TableHead className="text-base">Total Pagado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayedReservations.map((reservation) => (
                <TableRow key={reservation.reserva_id} className="border-b dark:border-white/10 border-black/10">
                  <TableCell>{reservation.reserva_id}</TableCell>
                  <TableCell>{reservation.huesped_id}</TableCell>
                  <TableCell>{reservation.habitacion_id}</TableCell>
                  <TableCell>{reservation.fecha_entrada}</TableCell>
                  <TableCell>{reservation.fecha_salida}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-background/20 backdrop-blur-xl">
                      {reservation.estado}
                    </Badge>
                  </TableCell>
                  <TableCell>{reservation.metodo_pago}</TableCell>
                  <TableCell>${reservation.total_pagado.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      {/* Efectos de gradiente */}
      <div
        className="absolute -top-24 -left-20 w-64 h-64 
        dark:bg-gradient-to-br dark:from-purple-500/20 dark:via-pink-500/20 dark:to-orange-500/20 
        bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 
        blur-3xl rounded-full"
      />
      <div
        className="absolute -bottom-24 -right-20 w-64 h-64 
        dark:bg-gradient-to-br dark:from-blue-500/20 dark:via-cyan-500/20 dark:to-green-500/20 
        bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-green-500/10 
        blur-3xl rounded-full"
      />
      {/* Efecto de reflejo */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </Card>
  )
}

