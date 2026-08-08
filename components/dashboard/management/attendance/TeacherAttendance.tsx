import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

function TeacherAttendance() {
  return (
<>
<Card>

  <CardContent className="p-6">

    <div className="flex items-center justify-between">

      <div>

        <h2 className="text-lg font-semibold">
          Teacher Attendance
        </h2>

        <p className="text-sm text-slate-500">
          Today's attendance summary
        </p>

      </div>

      <Button variant="outline">
        View Teachers
      </Button>

    </div>

    <div className="mt-8 grid gap-4 md:grid-cols-3">

      {[
        {
          title: "Present",
          value: 118,
          color: "text-green-600",
        },
        {
          title: "Absent",
          value: 4,
          color: "text-red-600",
        },
        {
          title: "On Leave",
          value: 3,
          color: "text-amber-600",
        },
      ].map((item) => (

        <Card key={item.title}>

          <CardContent className="p-6">

            <p className="text-sm text-slate-500">
              {item.title}
            </p>

            <h3
              className={`mt-3 text-4xl font-bold ${item.color}`}
            >
              {item.value}
            </h3>

          </CardContent>

        </Card>

      ))}

    </div>

  </CardContent>

</Card>

</>

)
}

export default TeacherAttendance