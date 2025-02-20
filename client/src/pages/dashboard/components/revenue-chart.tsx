"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts"

const data = [
  { date: "03-07", thisMonth: 65000, lastMonth: 54000 },
  { date: "10-14", thisMonth: 78000, lastMonth: 62000 },
  { date: "17-21", thisMonth: 95000, lastMonth: 73000 },
  { date: "24-28", thisMonth: 111287, lastMonth: 85000 },
]

export function RevenueChart() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-normal text-muted-foreground">Total Revenue</CardTitle>
        <span className="text-sm text-green-600">↑7.02%</span>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$111,287.00</div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip />
              <Line type="monotone" dataKey="thisMonth" stroke="#6366f1" strokeWidth={2} />
              <Line type="monotone" dataKey="lastMonth" stroke="#e2e8f0" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

