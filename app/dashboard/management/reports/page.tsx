"use client";

import {
  Download,
  FileSpreadsheet,
  Filter,
  Printer,
  Users,
  GraduationCap,
  CalendarCheck,
  IndianRupee,
} from "lucide-react";

import { Topbar } from "@/components/dashboard/topbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Students",
    value: "2,845",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Teachers",
    value: "148",
    icon: GraduationCap,
    color: "text-violet-600",
    bg: "bg-violet-100",
  },
  {
    title: "Attendance",
    value: "96.8%",
    icon: CalendarCheck,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "Revenue",
    value: "₹24.5L",
    icon: IndianRupee,
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
];
const reports = [
  {
    id: "REP-1001",
    title: "Student Attendance Report",
    category: "Attendance",
    generatedBy: "Admin",
    date: "07 Aug 2026",
    format: "PDF",
    status: "Completed",
  },
  {
    id: "REP-1002",
    title: "Monthly Fee Collection",
    category: "Finance",
    generatedBy: "Finance Manager",
    date: "06 Aug 2026",
    format: "Excel",
    status: "Completed",
  },
  {
    id: "REP-1003",
    title: "Teacher Performance",
    category: "Teachers",
    generatedBy: "Principal",
    date: "05 Aug 2026",
    format: "PDF",
    status: "Processing",
  },
  {
    id: "REP-1004",
    title: "Exam Result Summary",
    category: "Examination",
    generatedBy: "Exam Cell",
    date: "04 Aug 2026",
    format: "PDF",
    status: "Completed",
  },
  {
    id: "REP-1005",
    title: "Student Admission Report",
    category: "Students",
    generatedBy: "Admin",
    date: "03 Aug 2026",
    format: "Excel",
    status: "Failed",
  },
];
export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-slate-50">

      <Topbar
        title="Reports"
        // subtitle="Generate reports and monitor school analytics."
      />

      <main className="space-y-8 p-4 sm:p-6 lg:p-8">

        {/* ================= Header ================= */}

        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

          <div>

            <h1 className="text-3xl font-bold text-slate-900">
              Reports Dashboard
            </h1>

            <p className="mt-2 text-slate-500">
              View academic, attendance, financial and operational reports.
            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>

            <Button variant="outline">
              <Printer className="mr-2 h-4 w-4" />
              Print
            </Button>

            <Button variant="outline">
              <FileSpreadsheet className="mr-2 h-4 w-4" />
              Excel
            </Button>

            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export PDF
            </Button>

          </div>

        </div>

        {/* ================= Filters ================= */}

        <Card>

          <CardContent className="grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-5">

            <select className="rounded-xl border border-slate-200 px-4 py-3 outline-none">
              <option>Academic Year</option>
              <option>2026 - 2027</option>
              <option>2025 - 2026</option>
            </select>

            <select className="rounded-xl border border-slate-200 px-4 py-3 outline-none">
              <option>All Classes</option>
              <option>Grade 6</option>
              <option>Grade 7</option>
              <option>Grade 8</option>
              <option>Grade 9</option>
              <option>Grade 10</option>
              <option>Grade 11</option>
              <option>Grade 12</option>
            </select>

            <input
              type="date"
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none"
            />

            <input
              type="date"
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none"
            />

            <Button className="h-12">
              Generate Report
            </Button>

          </CardContent>

        </Card>

        {/* ================= Statistics ================= */}

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

                  <div className={`rounded-2xl p-4 ${item.bg}`}>

                    <Icon
                      size={30}
                      className={item.color}
                    />

                  </div>

                </CardContent>

              </Card>

            );

          })}

        </div>

                {/* ================= Analytics ================= */}

        <div className="grid gap-6 xl:grid-cols-3">

          {/* Student Growth */}

          <Card className="xl:col-span-2">

            <CardContent className="p-6">

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-lg font-semibold">
                    Student Growth
                  </h2>

                  <p className="text-sm text-slate-500">
                    Admissions over the last 12 months
                  </p>

                </div>

                <Button
                  variant="outline"
                  size="sm"
                >
                  This Year
                </Button>

              </div>

              <div className="mt-10 flex h-72 items-end justify-between gap-3">

                {[
                  45, 58, 70, 62, 81, 94,
                  88, 103, 92, 110, 121, 132,
                ].map((value, index) => (

                  <div
                    key={index}
                    className="flex flex-1 flex-col items-center"
                  >

                    <div
                      className="w-full rounded-t-xl bg-blue-600 transition hover:bg-blue-700"
                      style={{
                        height: `${value * 2}px`,
                      }}
                    />

                    <span className="mt-3 text-xs text-slate-500">

                      {
                        [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                        ][index]
                      }

                    </span>

                  </div>

                ))}

              </div>

            </CardContent>

          </Card>

          {/* KPI Summary */}

          <Card>

            <CardContent className="p-6">

              <h2 className="text-lg font-semibold">
                KPI Overview
              </h2>

              <p className="text-sm text-slate-500">
                Overall school performance
              </p>

              <div className="mt-8 space-y-6">

                {[
                  {
                    label: "Attendance",
                    value: "96%",
                    width: "96%",
                    color: "bg-green-500",
                  },
                  {
                    label: "Exam Pass",
                    value: "94%",
                    width: "94%",
                    color: "bg-blue-500",
                  },
                  {
                    label: "Fee Collection",
                    value: "88%",
                    width: "88%",
                    color: "bg-violet-500",
                  },
                  {
                    label: "Teacher Attendance",
                    value: "98%",
                    width: "98%",
                    color: "bg-amber-500",
                  },
                ].map((item) => (

                  <div key={item.label}>

                    <div className="mb-2 flex justify-between">

                      <span className="text-sm font-medium">
                        {item.label}
                      </span>

                      <span className="text-sm font-semibold">
                        {item.value}
                      </span>

                    </div>

                    <div className="h-3 rounded-full bg-slate-100">

                      <div
                        className={`h-3 rounded-full ${item.color}`}
                        style={{
                          width: item.width,
                        }}
                      />

                    </div>

                  </div>

                ))}

              </div>

            </CardContent>

          </Card>

        </div>

        {/* ================= Bottom Charts ================= */}

        <div className="grid gap-6 xl:grid-cols-2">

          {/* Revenue */}

          <Card>

            <CardContent className="p-6">

              <div className="flex items-center justify-between">

                <h2 className="text-lg font-semibold">
                  Revenue Analysis
                </h2>

                <Button
                  variant="outline"
                  size="sm"
                >
                  Monthly
                </Button>

              </div>

              <div className="mt-8 space-y-6">

                {[
                  {
                    month: "January",
                    value: 70,
                  },
                  {
                    month: "February",
                    value: 82,
                  },
                  {
                    month: "March",
                    value: 91,
                  },
                  {
                    month: "April",
                    value: 76,
                  },
                  {
                    month: "May",
                    value: 95,
                  },
                ].map((item) => (

                  <div key={item.month}>

                    <div className="mb-2 flex justify-between">

                      <span>
                        {item.month}
                      </span>

                      <span className="font-semibold">
                        ₹{item.value}L
                      </span>

                    </div>

                    <div className="h-3 rounded-full bg-slate-100">

                      <div
                        className="h-3 rounded-full bg-emerald-500"
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

          {/* Reports Distribution */}

          <Card>

            <CardContent className="p-6">

              <div className="flex items-center justify-between">

                <h2 className="text-lg font-semibold">
                  Reports Distribution
                </h2>

                <Button
                  variant="outline"
                  size="sm"
                >
                  View
                </Button>

              </div>

              <div className="mt-8 space-y-5">

                {[
                  {
                    label: "Student Reports",
                    color: "bg-blue-500",
                    value: "34%",
                  },
                  {
                    label: "Attendance",
                    color: "bg-green-500",
                    value: "28%",
                  },
                  {
                    label: "Finance",
                    color: "bg-violet-500",
                    value: "22%",
                  },
                  {
                    label: "Teachers",
                    color: "bg-amber-500",
                    value: "16%",
                  },
                ].map((item) => (

                  <div key={item.label}>

                    <div className="mb-2 flex justify-between">

                      <span>
                        {item.label}
                      </span>

                      <span className="font-semibold">
                        {item.value}
                      </span>

                    </div>

                    <div className="h-3 rounded-full bg-slate-100">

                      <div
                        className={`h-3 rounded-full ${item.color}`}
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

{/* ================= Recent Reports ================= */}

<Card>

  <CardContent className="p-6">

    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h2 className="text-xl font-semibold">
          Generated Reports
        </h2>

        <p className="text-sm text-slate-500">
          Recently generated reports
        </p>

      </div>

      <div className="flex flex-wrap gap-3">

        <input
          placeholder="Search report..."
          className="rounded-xl border border-slate-200 px-4 py-2 outline-none"
        />

        <Button variant="outline">
          Filter
        </Button>

      </div>

    </div>

    {/* Desktop */}

    <div className="mt-8 hidden overflow-x-auto lg:block">

      <table className="min-w-full text-sm">

        <thead>

          <tr className="border-b border-slate-200">

            <th className="py-4 text-left">
              Report
            </th>

            <th className="text-left">
              Category
            </th>

            <th className="text-left">
              Generated By
            </th>

            <th className="text-left">
              Date
            </th>

            <th className="text-left">
              Format
            </th>

            <th className="text-left">
              Status
            </th>

            <th className="text-right">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {reports.map((report) => (

            <tr
              key={report.id}
              className="border-b border-slate-100 hover:bg-slate-50"
            >

              <td className="py-5">

                <div>

                  <p className="font-semibold">
                    {report.title}
                  </p>

                  <p className="text-xs text-slate-500">
                    {report.id}
                  </p>

                </div>

              </td>

              <td>{report.category}</td>

              <td>{report.generatedBy}</td>

              <td>{report.date}</td>

              <td>{report.format}</td>

              <td>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    report.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : report.status === "Processing"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {report.status}
                </span>

              </td>

              <td>

                <div className="flex justify-end gap-2">

                  <Button
                    size="sm"
                    variant="outline"
                  >
                    View
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                  >
                    Download
                  </Button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

    {/* Mobile */}

    <div className="mt-6 space-y-4 lg:hidden">

      {reports.map((report) => (

        <Card key={report.id}>

          <CardContent className="space-y-4 p-5">

            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-semibold">
                  {report.title}
                </h3>

                <p className="text-sm text-slate-500">
                  {report.category}
                </p>

              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs ${
                  report.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : report.status === "Processing"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {report.status}
              </span>

            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">

              <div>

                <p className="text-slate-500">
                  Generated By
                </p>

                <p>{report.generatedBy}</p>

              </div>

              <div>

                <p className="text-slate-500">
                  Date
                </p>

                <p>{report.date}</p>

              </div>

              <div>

                <p className="text-slate-500">
                  Format
                </p>

                <p>{report.format}</p>

              </div>

            </div>

            <Button className="w-full">
              Download Report
            </Button>

          </CardContent>

        </Card>

      ))}

    </div>

  </CardContent>

</Card>
{/* ================= Quick Reports ================= */}

<Card>

  <CardContent className="p-6">

    <div className="flex items-center justify-between">

      <div>

        <h2 className="text-xl font-semibold">
          Quick Reports
        </h2>

        <p className="text-sm text-slate-500">
          Generate reports instantly with one click
        </p>

      </div>

      <Button>
        Create Custom Report
      </Button>

    </div>

    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      {[
        {
          title: "Student Report",
          desc: "Admissions, transfers, demographics",
        },
        {
          title: "Teacher Report",
          desc: "Performance & attendance",
        },
        {
          title: "Attendance Report",
          desc: "Daily, weekly & monthly",
        },
        {
          title: "Fee Report",
          desc: "Collections & pending dues",
        },
        {
          title: "Exam Report",
          desc: "Results & rankings",
        },
        {
          title: "Finance Report",
          desc: "Income & expenses",
        },
        {
          title: "Inventory Report",
          desc: "Assets & stock",
        },
        {
          title: "Payroll Report",
          desc: "Salary & deductions",
        },
      ].map((item) => (

        <Card
          key={item.title}
          className="cursor-pointer border transition hover:border-blue-500 hover:shadow-lg"
        >

          <CardContent className="flex h-full flex-col justify-between p-6">

            <div>

              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {item.desc}
              </p>

            </div>

            <Button
              className="mt-6 w-full"
              variant="outline"
            >
              Generate Report
            </Button>

          </CardContent>

        </Card>

      ))}

    </div>

  </CardContent>

</Card>

{/* ================= School Performance ================= */}

<div className="grid gap-6 xl:grid-cols-3">

  {/* ================= Top Performing Classes ================= */}

  <Card className="xl:col-span-2">

    <CardContent className="p-6">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold">
            Top Performing Classes
          </h2>

          <p className="text-sm text-slate-500">
            Based on attendance, exam results and discipline
          </p>

        </div>

        <Button
          size="sm"
          variant="outline"
        >
          View Analytics
        </Button>

      </div>

      <div className="mt-8 space-y-6">

        {[
          {
            className: "Grade 12",
            score: 98,
            students: 182,
          },
          {
            className: "Grade 11",
            score: 95,
            students: 175,
          },
          {
            className: "Grade 10",
            score: 93,
            students: 196,
          },
          {
            className: "Grade 9",
            score: 91,
            students: 210,
          },
          {
            className: "Grade 8",
            score: 89,
            students: 221,
          },
        ].map((item) => (

          <div key={item.className}>

            <div className="mb-2 flex justify-between">

              <div>

                <p className="font-semibold">
                  {item.className}
                </p>

                <p className="text-xs text-slate-500">
                  {item.students} Students
                </p>

              </div>

              <span className="font-bold text-blue-600">
                {item.score}%
              </span>

            </div>

            <div className="h-3 rounded-full bg-slate-100">

              <div
                className="h-3 rounded-full bg-blue-600"
                style={{
                  width: `${item.score}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </CardContent>

  </Card>

  {/* ================= Overall KPIs ================= */}

  <Card>

    <CardContent className="p-6">

      <h2 className="text-xl font-semibold">
        Overall KPIs
      </h2>

      <p className="text-sm text-slate-500">
        Current academic performance
      </p>

      <div className="mt-8 space-y-6">

        {[
          {
            title: "Exam Pass Rate",
            value: "94%",
            color: "text-green-600",
          },
          {
            title: "Average Attendance",
            value: "96%",
            color: "text-blue-600",
          },
          {
            title: "Fee Collection",
            value: "88%",
            color: "text-violet-600",
          },
          {
            title: "Teacher Attendance",
            value: "98%",
            color: "text-amber-600",
          },
          {
            title: "Parent Satisfaction",
            value: "91%",
            color: "text-emerald-600",
          },
        ].map((item) => (

          <div
            key={item.title}
            className="flex items-center justify-between rounded-xl border border-slate-200 p-4"
          >

            <span className="text-sm font-medium">
              {item.title}
            </span>

            <span className={`font-bold ${item.color}`}>
              {item.value}
            </span>

          </div>

        ))}

      </div>

    </CardContent>

  </Card>

</div>

{/* ================= Academic Comparison ================= */}

<Card>

  <CardContent className="p-6">

    <div className="flex items-center justify-between">

      <div>

        <h2 className="text-xl font-semibold">
          Academic Performance Comparison
        </h2>

        <p className="text-sm text-slate-500">
          Subject-wise performance across the school
        </p>

      </div>

      <Button
        variant="outline"
        size="sm"
      >
        View Details
      </Button>

    </div>

    <div className="mt-8 space-y-6">

      {[
        {
          subject: "Mathematics",
          score: 92,
        },
        {
          subject: "Science",
          score: 95,
        },
        {
          subject: "English",
          score: 90,
        },
        {
          subject: "Social Science",
          score: 88,
        },
        {
          subject: "Computer Science",
          score: 97,
        },
      ].map((item) => (

        <div key={item.subject}>

          <div className="mb-2 flex justify-between">

            <span className="font-medium">
              {item.subject}
            </span>

            <span className="font-semibold text-blue-600">
              {item.score}%
            </span>

          </div>

          <div className="h-3 rounded-full bg-slate-100">

            <div
              className="h-3 rounded-full bg-emerald-500"
              style={{
                width: `${item.score}%`,
              }}
            />

          </div>

        </div>

      ))}

    </div>

  </CardContent>

</Card>

{/* ================= Bottom Dashboard ================= */}

<div className="grid gap-6 xl:grid-cols-3">

  {/* ================= Recent Activities ================= */}

  <Card className="xl:col-span-2">

    <CardContent className="p-6">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold">
            Recent Activities
          </h2>

          <p className="text-sm text-slate-500">
            Latest reporting activities across the ERP
          </p>

        </div>

        <Button
          size="sm"
          variant="outline"
        >
          View Timeline
        </Button>

      </div>

      <div className="mt-8 space-y-5">

        {[
          {
            title: "Attendance report generated",
            user: "Administrator",
            time: "5 minutes ago",
          },
          {
            title: "Fee collection report exported",
            user: "Finance Department",
            time: "25 minutes ago",
          },
          {
            title: "Exam result report generated",
            user: "Examination Cell",
            time: "1 hour ago",
          },
          {
            title: "Teacher performance report updated",
            user: "Principal",
            time: "Today 09:15 AM",
          },
          {
            title: "Student admission report exported",
            user: "Admission Office",
            time: "Yesterday",
          },
        ].map((item) => (

          <div
            key={item.title}
            className="flex items-start gap-4 rounded-xl border border-slate-200 p-5 transition hover:bg-slate-50"
          >

            <div className="mt-1 h-3 w-3 rounded-full bg-blue-600" />

            <div className="flex-1">

              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {item.user}
              </p>

            </div>

            <span className="text-xs text-slate-400">
              {item.time}
            </span>

          </div>

        ))}

      </div>

    </CardContent>

  </Card>

  {/* ================= Notifications ================= */}

  <Card>

    <CardContent className="p-6">

      <h2 className="text-xl font-semibold">
        Notifications
      </h2>

      <p className="text-sm text-slate-500">
        System alerts & reminders
      </p>

      <div className="mt-8 space-y-4">

        {[
          {
            message: "Monthly attendance report is ready.",
            color: "bg-blue-500",
          },
          {
            message: "12 fee reports need approval.",
            color: "bg-red-500",
          },
          {
            message: "Exam reports generated successfully.",
            color: "bg-green-500",
          },
          {
            message: "Inventory report scheduled for tomorrow.",
            color: "bg-violet-500",
          },
        ].map((item) => (

          <div
            key={item.message}
            className="flex gap-3 rounded-xl border border-slate-200 p-4"
          >

            <div
              className={`mt-1 h-3 w-3 rounded-full ${item.color}`}
            />

            <p className="text-sm">
              {item.message}
            </p>

          </div>

        ))}

      </div>

    </CardContent>

  </Card>

</div>

{/* ================= Export Center ================= */}

<Card className="mt-6">

  <CardContent className="p-6">

    <div className="flex items-center justify-between">

      <div>

        <h2 className="text-xl font-semibold">
          Export Center
        </h2>

        <p className="text-sm text-slate-500">
          Download reports in multiple formats
        </p>

      </div>

    </div>

    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

      {[
        {
          title: "Export PDF",
          description: "Professional printable reports",
        },
        {
          title: "Export Excel",
          description: "Spreadsheet format",
        },
        {
          title: "Export CSV",
          description: "Raw data export",
        },
        {
          title: "Email Report",
          description: "Send directly by email",
        },
      ].map((item) => (

        <Card
          key={item.title}
          className="cursor-pointer transition hover:-translate-y-1 hover:shadow-lg"
        >

          <CardContent className="flex h-full flex-col justify-between p-6">

            <div>

              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {item.description}
              </p>

            </div>

            <Button
              className="mt-6"
              variant="outline"
            >
              Open
            </Button>

          </CardContent>

        </Card>

      ))}

    </div>

  </CardContent>

</Card>

{/* ================= Scheduled Reports ================= */}

<Card className="mt-6">

  <CardContent className="p-6">

    <div className="flex items-center justify-between">

      <div>

        <h2 className="text-xl font-semibold">
          Scheduled Reports
        </h2>

        <p className="text-sm text-slate-500">
          Automatically generated reports
        </p>

      </div>

      <Button>
        Create Schedule
      </Button>

    </div>

    <div className="mt-8 overflow-x-auto">

      <table className="min-w-full text-sm">

        <thead>

          <tr className="border-b border-slate-200">

            <th className="py-4 text-left">
              Report
            </th>

            <th className="text-left">
              Frequency
            </th>

            <th className="text-left">
              Next Run
            </th>

            <th className="text-left">
              Status
            </th>

            <th className="text-right">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {[
            {
              report: "Attendance Report",
              frequency: "Daily",
              next: "Tomorrow 08:00 AM",
              status: "Active",
            },
            {
              report: "Fee Collection",
              frequency: "Weekly",
              next: "Monday",
              status: "Active",
            },
            {
              report: "Academic Report",
              frequency: "Monthly",
              next: "01 Sep",
              status: "Paused",
            },
          ].map((item) => (

            <tr
              key={item.report}
              className="border-b border-slate-100 hover:bg-slate-50"
            >

              <td className="py-5 font-semibold">
                {item.report}
              </td>

              <td>{item.frequency}</td>

              <td>{item.next}</td>

              <td>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    item.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {item.status}
                </span>

              </td>

              <td>

                <div className="flex justify-end gap-2">

                  <Button
                    size="sm"
                    variant="outline"
                  >
                    Edit
                  </Button>

                  <Button
                    size="sm"
                    variant="destructive"
                  >
                    Delete
                  </Button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </CardContent>

</Card>

</main>

</div>

        )};