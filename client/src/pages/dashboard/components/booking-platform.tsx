"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

const data = [
  { name: "Direct booking", value: 61, color: "#818cf8" },
  { name: "Booking.com", value: 12, color: "#a5b4fc" },
  { name: "Agoda", value: 11, color: "#c7d2fe" },
  { name: "Airbnb", value: 9, color: "#e0e7ff" },
  { name: "Hotel.com", value: 5, color: "#eef2ff" },
  { name: "Others", value: 2, color: "#f5f7ff" },
]

export function BookingPlatform() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-normal">Booking by platform</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-2">
          {data.map((item) => (
            <div key={item.name} className="flex items-center text-sm">
              <div className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: item.color }} />
              <span className="flex-1">{item.name}</span>
              <span>{item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

