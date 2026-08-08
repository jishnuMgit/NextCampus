import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

function Notifications() {
  return (
<>
<Card>

  <CardContent className="p-6">

    <div className="flex items-center justify-between">

      <h2 className="text-lg font-semibold">
        Recent Notifications
      </h2>

      <Button
        variant="ghost"
        size="sm"
      >
        View All
      </Button>

    </div>

    <div className="mt-6 space-y-4">

      {[
        "Grade 10 attendance dropped below 90%",
        "12 students submitted leave requests",
        "Teacher attendance has reached 98%",
        "Attendance report generated successfully",
      ].map((notification) => (

        <div
          key={notification}
          className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
        >

          <p>{notification}</p>

        </div>

      ))}

    </div>

  </CardContent>

</Card>

</>

)
}

export default Notifications