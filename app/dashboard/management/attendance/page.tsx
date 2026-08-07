"use client";

import {
  CalendarCheck,
  CalendarX,
  Download,
  UserCheck,
} from "lucide-react";
import {
  Search,
  Filter,
  Calendar,
  CheckCircle2,
  XCircle,
  Clock3,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Topbar } from "@/components/dashboard/topbar";

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
const stats = [
  {
    title: "Total Students",
    value: "2,845",
    icon: UserCheck,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Present Today",
    value: "2,621",
    icon: CalendarCheck,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "Absent",
    value: "142",
    icon: CalendarX,
    color: "text-red-600",
    bg: "bg-red-100",
  },
  {
    title: "Late Arrival",
    value: "82",
    icon: Clock3,
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
];

export default function AttendancePage() {
  return (
    <div className="min-h-screen bg-slate-50">

      <Topbar
        title="Attendance"
        // subtitle="Track student and teacher attendance."
      />

      <main className="space-y-8 p-4 sm:p-6 lg:p-8">

        {/* Header */}

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-3xl font-bold text-slate-900">
              Attendance Dashboard
            </h1>

            <p className="mt-2 text-slate-500">
              Monitor attendance across the entire school.
            </p>

          </div>

          <div className="flex gap-3">

            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>

            <Button>
              Mark Attendance
            </Button>

          </div>

        </div>

        {/* Statistics */}

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title}>
                <CardContent className="flex items-center justify-between p-6">

                  <div>

                    <p className="text-sm text-slate-500">
                      {item.title}
                    </p>

                    <h2 className={`mt-3 text-3xl font-bold ${item.color}`}>
                      {item.value}
                    </h2>

                  </div>

                  <div
                    className={`rounded-2xl p-4 ${item.bg}`}
                  >
                    <Icon
                      className={item.color}
                      size={28}
                    />
                  </div>

                </CardContent>
              </Card>
            );
          })}

        </div>
                {/* ================= Analytics ================= */}

        <div className="grid gap-6 xl:grid-cols-3">

          {/* Attendance Trend */}

          <Card className="xl:col-span-2">

            <CardContent className="p-6">

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-lg font-semibold">
                    Attendance Trend
                  </h2>

                  <p className="text-sm text-slate-500">
                    Last 7 days
                  </p>

                </div>

                <Button
                  variant="outline"
                  size="sm"
                >
                  Weekly
                </Button>

              </div>

              <div className="mt-8 flex h-72 items-end justify-between gap-4">

                {[
                  88,
                  95,
                  82,
                  97,
                  91,
                  99,
                  94,
                ].map((value, index) => (
                  <div
                    key={index}
                    className="flex flex-1 flex-col items-center"
                  >

                    <div
                      className="w-full rounded-t-xl bg-blue-600 transition-all hover:bg-blue-700"
                      style={{
                        height: `${value * 2}px`,
                      }}
                    />

                    <span className="mt-3 text-xs text-slate-500">
                      {
                        [
                          "Mon",
                          "Tue",
                          "Wed",
                          "Thu",
                          "Fri",
                          "Sat",
                          "Sun",
                        ][index]
                      }
                    </span>

                  </div>
                ))}

              </div>

            </CardContent>

          </Card>

          {/* Today's Attendance */}

          <Card>

            <CardContent className="p-6">

              <h2 className="text-lg font-semibold">
                Today's Summary
              </h2>

              <div className="mt-8 space-y-5">

                {[
                  {
                    label: "Present",
                    value: "92%",
                    color: "bg-green-500",
                  },
                  {
                    label: "Absent",
                    value: "5%",
                    color: "bg-red-500",
                  },
                  {
                    label: "Leave",
                    value: "2%",
                    color: "bg-amber-500",
                  },
                  {
                    label: "Late",
                    value: "1%",
                    color: "bg-blue-500",
                  },
                ].map((item) => (

                  <div key={item.label}>

                    <div className="mb-2 flex justify-between">

                      <span className="text-sm">
                        {item.label}
                      </span>

                      <span className="text-sm font-semibold">
                        {item.value}
                      </span>

                    </div>

                    <div className="h-2 rounded-full bg-slate-100">

                      <div
                        className={`h-2 rounded-full ${item.color}`}
                        style={{
                          width: item.value,
                        }}
                      />

                    </div>

                  </div>

                ))}

              </div>

            </CardContent>

          </Card>

        </div>

        {/* ================= Quick Actions ================= */}

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

{/* ================= Recent Attendance ================= */}

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
                    <CheckCircle2 size={14} />
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
                    <Clock3 size={14} />
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

{/* ================= Analytics ================= */}

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

{/* ================= Leave Requests ================= */}

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

{/* ================= Bottom Analytics ================= */}

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

{/* ================= Teacher Attendance ================= */}

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

{/* ================= Notifications ================= */}

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

</main>

</div>
  )};
