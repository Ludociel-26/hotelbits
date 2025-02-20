"use client"

import { Card, CardContent } from "./ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import CountUp from "react-countup"

const data = [
  { date: "01", value: 1200 },
  { date: "05", value: 1800 },
  { date: "10", value: 2400 },
  { date: "15", value: 2100 },
  { date: "20", value: 2800 },
  { date: "25", value: 3200 },
  { date: "30", value: 3600 },
]

export function MonthlyEarnings() {
  const currentValue = 1365837
  const investedValue = 560835
  const totalReturns = 805002

  return (
    <Card className="relative overflow-hidden backdrop-blur-sm bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border-0 shadow-xl">
      <CardContent className="p-6">
        <div className="grid gap-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Ganancias Mensuales</p>
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-bold tracking-tight">
                $<CountUp end={currentValue} duration={2} separator="," />
              </span>
              <span className="text-sm text-green-500">+2.5%</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Ingresos Totales</p>
              <p className="font-medium">
                $<CountUp end={investedValue} duration={2} separator="," />
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Ganancias Netas</p>
              <p className="font-medium">
                $<CountUp end={totalReturns} duration={2} separator="," />
              </p>
            </div>
          </div>
          <div className="h-[100px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground">Valor</span>
                              <span className="font-bold text-muted-foreground">${payload[0].value}</span>
                            </div>
                          </div>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

