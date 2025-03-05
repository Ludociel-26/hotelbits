import { Search, Download } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { exportToPDF, exportToExcel } from "../lib/export-utils"
import { toast } from "react-toastify"

export function DashboardHeader() {
  const handleExport = async (format: "pdf" | "excel") => {
    const loadingToast = toast.loading("Preparando exportación...")

    try {
      if (format === "pdf") {
        await exportToPDF("dashboard")
      } else {
        await exportToExcel("dashboard")
      }
      toast.success("Exportación completada")
    } catch (error) {
      toast.error("Error al exportar el dashboard")
      console.error("Error al exportar:", error)
    } finally {
      toast.dismiss(loadingToast)
    }
  }

  return (
    <div className="flex items-center justify-between p-4 bg-background/80 backdrop-blur-md sticky top-20 z-10 py-9  mt-7">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-semibold">
          J
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm">
            <div>AC</div>
          </div>
          <div className="text-sm">
            <div>Admin</div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar habitación, huésped, reserva, etc" className="pl-8" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Exportar Dashboard
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleExport("pdf")}>Exportar a PDF</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleExport("excel")}>Exportar a Excel</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

