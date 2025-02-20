"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
  { year: "2022", value: 20000, color: "#818cf8" },
  { year: "2023", value: 40000, color: "#a5b4fc" },
  { year: "2024", value: 50000, color: "#c7d2fe" },
]

export function AnnualBookingsChart() {
  return (
    <Card
      className="relative overflow-hidden rounded-xl border-0 shadow-2xl 
      dark:bg-gradient-to-br dark:from-black/40 dark:to-black/20 
      bg-gradient-to-br from-white/40 to-white/20
      backdrop-blur-xl"
    >
      <CardHeader>
        <CardTitle className="text-lg font-medium">Reservaciones por Año</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} className="stroke-background stroke-2" />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--background)",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  backdropFilter: "blur(8px)",
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 space-y-2">
          {data.map((item) => (
            <div key={item.year} className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: item.color }} />
                <span>{item.year}</span>
              </div>
              <span className="font-medium">{item.value.toLocaleString()} reservaciones</span>
            </div>
          ))}
        </div>
      </CardContent>
      {/* Efectos de gradiente */}
      <div
        className="absolute -top-24 -left-20 w-64 h-64 
        dark:bg-gradient-to-br dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 
        bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 
        blur-3xl rounded-full"
      />
      <div
        className="absolute -bottom-24 -right-20 w-64 h-64 
        dark:bg-gradient-to-br dark:from-blue-500/20 dark:via-cyan-500/20 dark:to-teal-500/20 
        bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10 
        blur-3xl rounded-full"
      />
      {/* Efecto de reflejo */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </Card>
  )
}

