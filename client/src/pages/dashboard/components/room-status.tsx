import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const maintenanceRooms = [
  { number: "101", issue: "Reparación de aire acondicionado", status: "En progreso" },
  { number: "205", issue: "Cambio de alfombra", status: "Pendiente" },
  { number: "310", issue: "Pintura de paredes", status: "Finalizado" },
]

const cleaningRooms = [
  { number: "102", status: "En progreso", time: "2h restantes" },
  { number: "204", status: "Pendiente", time: "Próximo" },
  { number: "308", status: "Finalizado", time: "Hace 30m" },
]

export function RoomStatus() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="backdrop-blur-sm bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="text-lg font-medium">Habitaciones en Mantenimiento</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-b border-purple-500/20">
                <TableHead className="text-purple-100">Número</TableHead>
                <TableHead className="text-purple-100">Problema</TableHead>
                <TableHead className="text-purple-100">Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {maintenanceRooms.map((room) => (
                <TableRow key={room.number} className="border-b border-purple-500/10 hover:bg-purple-500/5">
                  <TableCell className="font-medium">{room.number}</TableCell>
                  <TableCell>{room.issue}</TableCell>
                  <TableCell>{room.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="backdrop-blur-sm bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="text-lg font-medium">Habitaciones en Limpieza</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-b border-blue-500/20">
                <TableHead className="text-blue-100">Número</TableHead>
                <TableHead className="text-blue-100">Estado</TableHead>
                <TableHead className="text-blue-100">Tiempo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cleaningRooms.map((room) => (
                <TableRow key={room.number} className="border-b border-blue-500/10 hover:bg-blue-500/5">
                  <TableCell className="font-medium">{room.number}</TableCell>
                  <TableCell>{room.status}</TableCell>
                  <TableCell>{room.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

