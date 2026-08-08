import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

function QuickActions() {
  return (
<>

 <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

          {[
            "Mark Student Attendance",
            "Mark Teacher Attendance",
            "Attendance Reports",
            "Leave Requests",
          ].map((item) => (

            <Card
              key={item}
              className="cursor-pointer transition hover:shadow-lg"
            >

              <CardContent className="flex h-32 items-center justify-center">

                <h3 className="text-center font-semibold">
                  {item}
                </h3>

              </CardContent>

            </Card>

          ))}

        </div>
</>

)
}

export default QuickActions