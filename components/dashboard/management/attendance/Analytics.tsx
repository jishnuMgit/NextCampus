import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import React from 'react'

function Analytics() {
  return (
<>

<div className="grid gap-6 xl:grid-cols-3">

  {/* Calendar */}

  <Card className="xl:col-span-1">

    <CardContent className="p-6">

      <div className="flex items-center justify-between">

        <h2 className="text-lg font-semibold">
          Attendance Calendar
        </h2>

        <Button
          size="sm"
          variant="outline"
        >
          August
        </Button>

      </div>

      <div className="mt-6">

        <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-slate-500">

          {[
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
          ].map((day) => (
            <div key={day}>{day}</div>
          ))}

        </div>

        <div className="mt-4 grid grid-cols-7 gap-2">

          {Array.from({ length: 31 }).map((_, index) => {

            const day = index + 1;

            const color =
              day % 6 === 0
                ? "bg-red-100 text-red-600"
                : day % 5 === 0
                ? "bg-amber-100 text-amber-600"
                : "bg-green-100 text-green-700";

            return (
              <div
                key={day}
                className={`flex h-11 items-center justify-center rounded-xl font-medium ${color}`}
              >
                {day}
              </div>
            );
          })}

        </div>

      </div>

    </CardContent>

  </Card>

  {/* Class Performance */}

  <Card className="xl:col-span-2">

    <CardContent className="p-6">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-lg font-semibold">
            Class Attendance
          </h2>

          <p className="text-sm text-slate-500">
            Today's attendance percentage
          </p>

        </div>

      </div>

      <div className="mt-8 space-y-6">

        {[
          {
            class: "Grade 12",
            value: 98,
          },
          {
            class: "Grade 11",
            value: 95,
          },
          {
            class: "Grade 10",
            value: 92,
          },
          {
            class: "Grade 9",
            value: 90,
          },
          {
            class: "Grade 8",
            value: 87,
          },
        ].map((item) => (

          <div key={item.class}>

            <div className="mb-2 flex justify-between">

              <span className="font-medium">
                {item.class}
              </span>

              <span className="text-blue-600 font-semibold">
                {item.value}%
              </span>

            </div>

            <div className="h-3 rounded-full bg-slate-100">

              <div
                className="h-3 rounded-full bg-blue-600"
                style={{
                  width: `${item.value}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </CardContent>

  </Card>

</div>

</>

)
}

export default Analytics