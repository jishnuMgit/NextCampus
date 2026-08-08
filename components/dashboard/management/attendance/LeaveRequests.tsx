import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

function LeaveRequests() {
  return (
<>
<Card>

  <CardContent className="p-6">

    <div className="flex items-center justify-between">

      <div>

        <h2 className="text-lg font-semibold">
          Pending Leave Requests
        </h2>

        <p className="text-sm text-slate-500">
          Students waiting for approval
        </p>

      </div>

      <Button variant="outline">
        View All
      </Button>

    </div>

    <div className="mt-8 space-y-4">

      {[
        {
          name: "Ava Patel",
          class: "Grade 10",
          days: "2 Days",
        },
        {
          name: "Noah Chen",
          class: "Grade 8",
          days: "1 Day",
        },
        {
          name: "Maya Singh",
          class: "Grade 12",
          days: "3 Days",
        },
      ].map((student) => (

        <div
          key={student.name}
          className="flex items-center justify-between rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
        >

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
              {student.name.charAt(0)}
            </div>

            <div>

              <h3 className="font-semibold">
                {student.name}
              </h3>

              <p className="text-sm text-slate-500">
                {student.class}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
              {student.days}
            </span>

            <Button size="sm">
              Approve
            </Button>

            <Button
              size="sm"
              variant="outline"
            >
              Reject
            </Button>

          </div>

        </div>

      ))}

    </div>

  </CardContent>

</Card>

</>

)
}

export default LeaveRequests