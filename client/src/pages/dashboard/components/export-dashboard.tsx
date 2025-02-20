import { Button } from "./ui/button"

export function ExportDashboard() {
  const handleExport = (format: "pdf" | "excel") => {
    // Aquí iría la lógica para exportar todo el dashboard
    console.log(`Exportando dashboard completo a ${format}`)
  }

  return (
    <div className="flex justify-end space-x-2 mt-6">
      <Button onClick={() => handleExport("pdf")}>Exportar Dashboard a PDF</Button>
      <Button onClick={() => handleExport("excel")}>Exportar Dashboard a Excel</Button>
    </div>
  )
}

