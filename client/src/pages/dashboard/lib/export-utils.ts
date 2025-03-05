import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"
import * as XLSX from "xlsx"
import html2canvas from "html2canvas"

// Función principal para exportar a PDF
export async function exportToPDF(type: "dashboard" | "reservations", data?: any) {
  const doc = new jsPDF("p", "mm", "a4")

  if (type === "dashboard") {
    await exportDashboardToPDF(doc)
  } else {
    await exportReservationsToPDF(doc, data)
  }
}

// Función principal para exportar a Excel
export async function exportToExcel(type: "dashboard" | "reservations", data?: any) {
  if (type === "dashboard") {
    await exportDashboardToExcel()
  } else {
    await exportReservationsToExcel(data)
  }
}

// Funciones auxiliares privadas
async function exportDashboardToPDF(doc: jsPDF) {
  let yOffset = 10

  // Capturar métricas
  const metricsElement = document.querySelector("#metrics-cards")
  if (metricsElement) {
    const canvas = await html2canvas(metricsElement as HTMLElement)
    const imgData = canvas.toDataURL("image/png")
    doc.addImage(imgData, "PNG", 10, yOffset, 190, 40)
    yOffset += 45
  }

  // Capturar tarjetas de ganancias
  const earningsElement = document.querySelector("#earnings-cards")
  if (earningsElement) {
    const canvas = await html2canvas(earningsElement as HTMLElement)
    const imgData = canvas.toDataURL("image/png")
    doc.addImage(imgData, "PNG", 10, yOffset, 190, 50)
    yOffset += 55
  }

  // Capturar gráficas
  const chartsElement = document.querySelector("#charts-section")
  if (chartsElement) {
    const canvas = await html2canvas(chartsElement as HTMLElement)
    const imgData = canvas.toDataURL("image/png")
    doc.addImage(imgData, "PNG", 10, yOffset, 190, 60)
    yOffset += 65
  }

  // Agregar tablas
  doc.addPage()

  // Tabla de reservaciones
  const reservationsData = getReservationsTableData()
  autoTable(doc, {
    head: [["ID", "Huésped", "Habitación", "Entrada", "Salida", "Estado", "Total"]],
    body: reservationsData,
    startY: 10,
  })

  doc.save("dashboard.pdf")
}

async function exportReservationsToPDF(doc: jsPDF, data: any[]) {
  autoTable(doc, {
    head: [["ID", "Huésped", "Habitación", "Entrada", "Salida", "Estado", "Total"]],
    body: data.map((r) => [
      r.reserva_id,
      r.huesped_id,
      r.habitacion_id,
      r.fecha_entrada,
      r.fecha_salida,
      r.estado,
      r.total_pagado,
    ]),
  })
  doc.save("reservaciones.pdf")
}

async function exportDashboardToExcel() {
  const wb = XLSX.utils.book_new()

  // Hoja de métricas
  const metricsData = getMetricsData()
  const wsMetrics = XLSX.utils.json_to_sheet(metricsData)
  XLSX.utils.book_append_sheet(wb, wsMetrics, "Métricas")

  // Hoja de reservaciones
  const reservationsData = getReservationsTableData()
  const wsReservations = XLSX.utils.aoa_to_sheet([
    ["ID", "Huésped", "Habitación", "Entrada", "Salida", "Estado", "Total"],
    ...reservationsData,
  ])
  XLSX.utils.book_append_sheet(wb, wsReservations, "Reservaciones")

  // Hoja de ganancias
  const earningsData = getEarningsData()
  const wsEarnings = XLSX.utils.json_to_sheet(earningsData)
  XLSX.utils.book_append_sheet(wb, wsEarnings, "Ganancias")

  XLSX.writeFile(wb, "dashboard.xlsx")
}

async function exportReservationsToExcel(data: any[]) {
  const wb = XLSX.utils.book_new()
  const ws = XLSX.utils.json_to_sheet(data)
  XLSX.utils.book_append_sheet(wb, ws, "Reservaciones")
  XLSX.writeFile(wb, "reservaciones.xlsx")
}

function getMetricsData() {
  return []
}

function getReservationsTableData() {
  return []
}

function getEarningsData() {
  return []
}

