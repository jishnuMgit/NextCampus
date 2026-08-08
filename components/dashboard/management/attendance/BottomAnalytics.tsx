import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react'

function BottomAnalytics() {
  return (
<>

<div className="grid gap-6 xl:grid-cols-3">

  {/* ================= Heatmap ================= */}

  <Card className="xl:col-span-2">

    <CardContent className="p-6">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-lg font-semibold">
            Attendance Heatmap
          </h2>

          <p className="text-sm text-slate-500">
            Student attendance over the last 12 weeks
          </p>

        </div>

        <Button variant="outline" size="sm">
          This Year
        </Button>

      </div>

      <div className="mt-8 overflow-x-auto">

        <div className="grid grid-cols-18 gap-2 min-w-[900px]">

          {Array.from({ length: 126 }).map((_, index) => {

            const colors = [
              "bg-slate-100",
              "bg-green-200",
              "bg-green-400",
              "bg-green-600",
            ];

            return (
              <div
                key={index}
                className={`h-4 w-4 rounded ${colors[index % 4]}`}
              />
            );

          })}

        </div>

      </div>

    </CardContent>

  </Card>

  {/* ================= Holidays ================= */}

  <Card>

    <CardContent className="p-6">

      <h2 className="text-lg font-semibold">
        Upcoming Holidays
      </h2>

      <div className="mt-6 space-y-4">

        {[
          {
            title: "Independence Day",
            date: "15 Aug",
          },
          {
            title: "Onam",
            date: "28 Aug",
          },
          {
            title: "Teachers Day",
            date: "05 Sep",
          },
        ].map((holiday) => (

          <div
            key={holiday.title}
            className="rounded-xl border border-slate-200 p-4"
          >

            <h3 className="font-semibold">
              {holiday.title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {holiday.date}
            </p>

          </div>

        ))}

      </div>

    </CardContent>

  </Card>

</div>
</>

)
}

export default BottomAnalytics