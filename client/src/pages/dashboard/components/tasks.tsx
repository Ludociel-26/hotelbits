import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Avatar, AvatarFallback } from "./ui/avatar"

export function Tasks() {
  const tasks = [
    {
      title: "Update property listing for 123 Main St.",
      assignees: ["JD", "AC"],
    },
    {
      title: "Schedule property photoshoot",
      assignees: ["AC", "JD"],
    },
    {
      title: "Verify lease agreement for Unit 45",
      assignees: ["JD", "AC"],
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-normal">Task</CardTitle>
        <span className="text-sm">Today</span>
      </CardHeader>
      <CardContent className="space-y-4">
        {tasks.map((task, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="mt-1 h-5 w-5 rounded-full border-2 border-muted" />
            <div className="flex-1">
              <p className="text-sm">{task.title}</p>
              <div className="mt-2 flex -space-x-2">
                {task.assignees.map((assignee, j) => (
                  <Avatar key={j} className="h-6 w-6 border-2 border-background">
                    <AvatarFallback>{assignee}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

