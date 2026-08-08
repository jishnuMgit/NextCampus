import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Search, Filter, CheckCircle, XCircle, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button";

const attendance = [
  {
    id: "ADM1001",
    name: "Ava Patel",
    class: "Grade 10",
    section: "A",
    time: "08:28 AM",
    status: "Present",
  },
  {
    id: "ADM1002",
    name: "Noah Chen",
    class: "Grade 8",
    section: "B",
    time: "-",
    status: "Absent",
  },
  {
    id: "ADM1003",
    name: "Maya Singh",
    class: "Grade 12",
    section: "A",
    time: "08:15 AM",
    status: "Present",
  },
  {
    id: "ADM1004",
    name: "Leo Gomez",
    class: "Grade 9",
    section: "C",
    time: "09:05 AM",
    status: "Late",
  },
  {
    id: "ADM1005",
    name: "Sophia Thomas",
    class: "Grade 7",
    section: "A",
    time: "-",
    status: "Leave",
  },
];
import React from 'react'

function RecentAttendance() {
  return (

<>
<Card>

  <CardContent className="p-6">

    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h2 className="text-xl font-semibold">
          Today's Attendance
        </h2>

        <p className="text-sm text-slate-500">
          Live attendance records
        </p>

      </div>

      <div className="flex flex-wrap gap-3">

        <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2">

          <Search size={18} />

          <input
            placeholder="Search student..."
            className="bg-transparent outline-none"
          />

        </div>

        <Button variant="outline">
          <Calendar className="mr-2 h-4 w-4" />
          Today
        </Button>

        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>

      </div>

    </div>

    {/* Desktop Table */}

    <div className="mt-8 hidden overflow-x-auto lg:block">

      <table className="min-w-full text-sm">

        <thead>

          <tr className="border-b border-slate-200 text-left">

            <th className="py-4">Student</th>

            <th>Admission</th>

            <th>Class</th>

            <th>Section</th>

            <th>Check In</th>

            <th>Status</th>

            <th className="text-right">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {attendance.map((student) => (

            <tr
              key={student.id}
              className="border-b border-slate-100 hover:bg-slate-50"
            >

              <td className="py-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                    {student.name.charAt(0)}
                  </div>

                  <div>

                    <p className="font-semibold">
                      {student.name}
                    </p>

                    <p className="text-xs text-slate-500">
                      Student
                    </p>

                  </div>

                </div>

              </td>

              <td>{student.id}</td>

              <td>{student.class}</td>

              <td>{student.section}</td>

              <td>{student.time}</td>

              <td>

                {student.status === "Present" && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-green-700">
                    <CheckCircle size={14} />
                    Present
                  </span>
                )}

                {student.status === "Absent" && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-red-700">
                    <XCircle size={14} />
                    Absent
                  </span>
                )}

                {student.status === "Late" && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-amber-700">
                    <Clock size={14} />
                    Late
                  </span>
                )}

                {student.status === "Leave" && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-blue-700">
                    Leave
                  </span>
                )}

              </td>

              <td>

                <div className="flex justify-end">

                  <Button
                    size="sm"
                    variant="outline"
                  >
                    Edit
                  </Button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

    {/* Mobile Cards */}

    <div className="mt-6 space-y-4 lg:hidden">

      {attendance.map((student) => (

        <Card key={student.id}>

          <CardContent className="space-y-4 p-5">

            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-semibold">
                  {student.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {student.class}
                </p>

              </div>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm">
                {student.status}
              </span>

            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">

              <div>

                <p className="text-slate-500">
                  Admission
                </p>

                <p>{student.id}</p>

              </div>

              <div>

                <p className="text-slate-500">
                  Time
                </p>

                <p>{student.time}</p>

              </div>

            </div>

          </CardContent>

        </Card>

      ))}

    </div>

  </CardContent>

</Card>
</>
)
}

export default RecentAttendance