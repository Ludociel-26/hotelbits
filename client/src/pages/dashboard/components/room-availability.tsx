import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"

export function RoomAvailability() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-normal">Room availability</CardTitle>
        <div className="text-2xl font-bold">32 Room available</div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>217 Occupied</span>
            <span>66%</span>
          </div>
          <Progress value={66} className="bg-blue-100" />
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>100 Reserved</span>
            <span>30%</span>
          </div>
          <Progress value={30} className="bg-blue-100" />
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>12 Not ready</span>
            <span>4%</span>
          </div>
          <Progress value={4} className="bg-blue-100" />
        </div>
      </CardContent>
    </Card>
  )
}

