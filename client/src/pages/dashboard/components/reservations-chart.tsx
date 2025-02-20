"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { date: "12 Jun", current: 65, previous: 45 },
  { date: "13 Jun", current: 85, previous: 55 },
  { date: "14 Jun", current: 75, previous: 48 },
  { date: "15 Jun", current: 90, previous: 52 },
  { date: "16 Jun", current: 70, previous: 45 },
  { date: "17 Jun", current: 60, previous: 40 },
  { date: "18 Jun", current: 65, previous: 42 },
]

export function ReservationsChart() {
  return (
    <Card
      className="relative overflow-hidden rounded-xl border-0 shadow-2xl 
      dark:bg-gradient-to-br dark:from-black/40 dark:to-black/20 
      bg-gradient-to-br from-white/40 to-white/20
      backdrop-blur-xl"
    >
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-normal">Reservations</CardTitle>
        <select className="text-sm border rounded-md px-2 py-1 bg-background/20 backdrop-blur-xl">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barGap={8}>
              <XAxis
                dataKey="date"
                stroke="currentColor"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                opacity={0.5}
              />
              <YAxis stroke="currentColor" fontSize={12} tickLine={false} axisLine={false} opacity={0.5} />
              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  backdropFilter: "blur(12px)",
                }}
              />
              <Bar
                dataKey="current"
                fill="currentColor"
                className="fill-orange-500 dark:fill-orange-400"
                radius={[4, 4, 0, 0]}
                barSize={32}
              />
              <Bar
                dataKey="previous"
                fill="currentColor"
                className="fill-blue-500 dark:fill-blue-400"
                radius={[4, 4, 0, 0]}
                barSize={32}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      {/* Efectos de gradiente */}
      <div
        className="absolute -top-24 -left-20 w-64 h-64 
        dark:bg-gradient-to-br dark:from-orange-500/20 dark:via-red-500/20 dark:to-purple-500/20 
        bg-gradient-to-br from-orange-500/10 via-red-500/10 to-purple-500/10 
        blur-3xl rounded-full"
      />
      <div
        className="absolute -bottom-24 -right-20 w-64 h-64 
        dark:bg-gradient-to-br dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 
        bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 
        blur-3xl rounded-full"
      />
      {/* Efecto de reflejo */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </Card>
  )
}

