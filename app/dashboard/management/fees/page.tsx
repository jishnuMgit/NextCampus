"use client";

import {
  Download,
  Plus,
  Wallet,
  CreditCard,
  CircleDollarSign,
  AlertTriangle,
} from "lucide-react";

import { Topbar } from "@/components/dashboard/topbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Total Collection",
    value: "₹24500",
    icon: Wallet,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "Pending Fees",
    value: "₹18000",
    icon: AlertTriangle,
    color: "text-red-600",
    bg: "bg-red-100",
  },
  {
    title: "Today's Collection",
    value: "₹86,000",
    icon: CreditCard,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Transactions",
    value: "142",
    icon: CircleDollarSign,
    color: "text-violet-600",
    bg: "bg-violet-100",
  },
];

const payments = [
  {
    id: "PAY-1001",
    student: "Ava Patel",
    admission: "ADM-1042",
    className: "Grade 10",
    parent: "Ravi Patel",
    amount: "₹25,000",
    due: "₹0",
    method: "UPI",
    status: "Paid",
    date: "07 Aug 2026",
  },
  {
    id: "PAY-1002",
    student: "Noah Chen",
    admission: "ADM-1038",
    className: "Grade 8",
    parent: "Mina Chen",
    amount: "₹15,000",
    due: "₹5,000",
    method: "Cash",
    status: "Partial",
    date: "06 Aug 2026",
  },
  {
    id: "PAY-1003",
    student: "Maya Singh",
    admission: "ADM-1029",
    className: "Grade 12",
    parent: "Arjun Singh",
    amount: "₹0",
    due: "₹30,000",
    method: "-",
    status: "Pending",
    date: "-",
  },
  {
    id: "PAY-1004",
    student: "Leo Gomez",
    admission: "ADM-1017",
    className: "Grade 9",
    parent: "Sofia Gomez",
    amount: "₹20,000",
    due: "₹0",
    method: "Card",
    status: "Paid",
    date: "05 Aug 2026",
  },
];
const pendingFees = [
  {
    id: "ADM-1042",
    student: "Ava Patel",
    parent: "Ravi Patel",
    className: "Grade 10",
    total: "₹25,000",
    paid: "₹15,000",
    due: "₹10,000",
    dueDate: "15 Aug 2026",
    status: "Due",
  },
  {
    id: "ADM-1038",
    student: "Noah Chen",
    parent: "Mina Chen",
    className: "Grade 8",
    total: "₹30,000",
    paid: "₹0",
    due: "₹30,000",
    dueDate: "10 Aug 2026",
    status: "Overdue",
  },
  {
    id: "ADM-1029",
    student: "Maya Singh",
    parent: "Arjun Singh",
    className: "Grade 12",
    total: "₹28,000",
    paid: "₹20,000",
    due: "₹8,000",
    dueDate: "18 Aug 2026",
    status: "Due",
  },
];
export default function FeesPage() {
  return (
    <div className="min-h-screen bg-slate-50">

      <Topbar
        title="Fees"
        // subtitle="Manage school fee collection and transactions."
      />

      <main className="space-y-8 p-4 sm:p-6 lg:p-8">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-3xl font-bold">
              Fee Management
            </h1>

            <p className="mt-2 text-slate-500">
              Manage collections, invoices and payments.
            </p>

          </div>

          <div className="flex gap-3">

            <Button variant="outline">

              <Download className="mr-2 h-4 w-4"/>

              Export

            </Button>

            <Button>

              <Plus className="mr-2 h-4 w-4"/>

              Collect Fee

            </Button>

          </div>

        </div>

        {/* Statistics */}

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((item)=>{

            const Icon=item.icon;

            return(

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

            )

          })}

        </div>


                {/* ================= Revenue Analytics ================= */}

        <div className="grid gap-6 xl:grid-cols-3">

          {/* Monthly Revenue */}

          <Card className="xl:col-span-2">

            <CardContent className="p-6">

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-lg font-semibold">
                    Monthly Fee Collection
                  </h2>

                  <p className="text-sm text-slate-500">
                    Revenue generated during the current academic year
                  </p>

                </div>

                <Button
                  variant="outline"
                  size="sm"
                >
                  This Year
                </Button>

              </div>

              <div className="mt-10 flex h-72 items-end justify-between gap-4">

                {[
                  62,
                  84,
                  70,
                  96,
                  80,
                  92,
                  100,
                  86,
                  75,
                  82,
                  95,
                  90,
                ].map((value, index) => (

                  <div
                    key={index}
                    className="flex flex-1 flex-col items-center"
                  >

                    <div
                      className="w-full rounded-t-xl bg-emerald-500 transition hover:bg-emerald-600"
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

          {/* Payment Summary */}

          <Card>

            <CardContent className="p-6">

              <h2 className="text-lg font-semibold">
                Payment Status
              </h2>

              <p className="text-sm text-slate-500">
                Current collection overview
              </p>

              <div className="mt-8 space-y-6">

                {[
                  {
                    label: "Paid",
                    value: "82%",
                    width: "82%",
                    color: "bg-green-500",
                  },
                  {
                    label: "Pending",
                    value: "13%",
                    width: "13%",
                    color: "bg-red-500",
                  },
                  {
                    label: "Partial",
                    value: "5%",
                    width: "5%",
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

              <div className="mt-10 border-t border-slate-200 pt-6">

                <div className="flex items-center justify-between">

                  <span className="text-slate-500">
                    Expected Revenue
                  </span>

                  <span className="font-bold">
                    ₹27,70,000
                  </span>

                </div>

                <div className="mt-4 flex items-center justify-between">

                  <span className="text-slate-500">
                    Collected
                  </span>

                  <span className="font-bold text-green-600">
                    ₹24,50,000
                  </span>

                </div>

                <div className="mt-4 flex items-center justify-between">

                  <span className="text-slate-500">
                    Pending
                  </span>

                  <span className="font-bold text-red-600">
                    ₹3,20,000
                  </span>

                </div>

              </div>

            </CardContent>

          </Card>

        </div>

        {/* ================= Payment Methods ================= */}

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              title: "Cash",
              value: "₹6,20,000",
            },
            {
              title: "UPI",
              value: "₹8,90,000",
            },
            {
              title: "Bank Transfer",
              value: "₹5,80,000",
            },
            {
              title: "Card",
              value: "₹3,60,000",
            },
          ].map((item) => (

            <Card key={item.title}>

              <CardContent className="p-6">

                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  {item.value}
                </h3>

              </CardContent>

            </Card>

          ))}

        </div>


{/* ================= Recent Fee Collection ================= */}

<Card>

  <CardContent className="p-6">

    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h2 className="text-xl font-semibold">
          Recent Fee Collection
        </h2>

        <p className="text-sm text-slate-500">
          Latest fee transactions
        </p>

      </div>

      <div className="flex flex-wrap gap-3">

        <input
          placeholder="Search Student..."
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
              Student
            </th>

            <th className="text-left">
              Admission
            </th>

            <th className="text-left">
              Class
            </th>

            <th className="text-left">
              Parent
            </th>

            <th className="text-left">
              Paid
            </th>

            <th className="text-left">
              Due
            </th>

            <th className="text-left">
              Method
            </th>

            <th className="text-left">
              Status
            </th>

            <th className="text-left">
              Date
            </th>

            <th className="text-right">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {payments.map((payment) => (

            <tr
              key={payment.id}
              className="border-b border-slate-100 hover:bg-slate-50"
            >

              <td className="py-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                    {payment.student.charAt(0)}
                  </div>

                  <div>

                    <p className="font-semibold">
                      {payment.student}
                    </p>

                    <p className="text-xs text-slate-500">
                      {payment.id}
                    </p>

                  </div>

                </div>

              </td>

              <td>{payment.admission}</td>

              <td>{payment.className}</td>

              <td>{payment.parent}</td>

              <td className="font-semibold text-green-600">
                {payment.amount}
              </td>

              <td className="font-semibold text-red-600">
                {payment.due}
              </td>

              <td>{payment.method}</td>

              <td>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    payment.status === "Paid"
                      ? "bg-green-100 text-green-700"
                      : payment.status === "Pending"
                      ? "bg-red-100 text-red-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {payment.status}
                </span>

              </td>

              <td>{payment.date}</td>

              <td>

                <div className="flex justify-end gap-2">

                  <Button
                    size="sm"
                    variant="outline"
                  >
                    Receipt
                  </Button>

                  <Button size="sm">
                    View
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

      {payments.map((payment) => (

        <Card key={payment.id}>

          <CardContent className="space-y-4 p-5">

            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-semibold">
                  {payment.student}
                </h3>

                <p className="text-sm text-slate-500">
                  {payment.className}
                </p>

              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs ${
                  payment.status === "Paid"
                    ? "bg-green-100 text-green-700"
                    : payment.status === "Pending"
                    ? "bg-red-100 text-red-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {payment.status}
              </span>

            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">

              <div>

                <p className="text-slate-500">
                  Paid
                </p>

                <p className="font-semibold text-green-600">
                  {payment.amount}
                </p>

              </div>

              <div>

                <p className="text-slate-500">
                  Due
                </p>

                <p className="font-semibold text-red-600">
                  {payment.due}
                </p>

              </div>

            </div>

          </CardContent>

        </Card>

      ))}

    </div>

  </CardContent>

</Card>
{/* ================= Pending Fees ================= */}

<Card>

  <CardContent className="p-6">

    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h2 className="text-xl font-semibold">
          Pending Fees
        </h2>

        <p className="text-sm text-slate-500">
          Students with outstanding balances
        </p>

      </div>

      <Button variant="outline">
        Send Reminder
      </Button>

    </div>

    <div className="mt-8 overflow-x-auto">

      <table className="min-w-full text-sm">

        <thead>

          <tr className="border-b border-slate-200">

            <th className="py-4 text-left">
              Student
            </th>

            <th className="text-left">
              Class
            </th>

            <th className="text-left">
              Parent
            </th>

            <th className="text-left">
              Total Fee
            </th>

            <th className="text-left">
              Paid
            </th>

            <th className="text-left">
              Due
            </th>

            <th className="text-left">
              Due Date
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

          {pendingFees.map((student) => (

            <tr
              key={student.id}
              className="border-b border-slate-100 hover:bg-slate-50"
            >

              <td className="py-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 font-semibold text-red-600">
                    {student.student.charAt(0)}
                  </div>

                  <div>

                    <p className="font-semibold">
                      {student.student}
                    </p>

                    <p className="text-xs text-slate-500">
                      {student.id}
                    </p>

                  </div>

                </div>

              </td>

              <td>{student.className}</td>

              <td>{student.parent}</td>

              <td>{student.total}</td>

              <td className="text-green-600 font-semibold">
                {student.paid}
              </td>

              <td className="text-red-600 font-semibold">
                {student.due}
              </td>

              <td>{student.dueDate}</td>

              <td>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    student.status === "Due"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {student.status}
                </span>

              </td>

              <td>

                <div className="flex justify-end gap-2">

                  <Button
                    size="sm"
                    variant="outline"
                  >
                    Reminder
                  </Button>

                  <Button size="sm">
                    Collect
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

{/* ================= Finance Analytics ================= */}

<div className="grid gap-6 xl:grid-cols-3">

  {/* ================= Collection by Class ================= */}

  <Card className="xl:col-span-2">

    <CardContent className="p-6">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-lg font-semibold">
            Fee Collection by Class
          </h2>

          <p className="text-sm text-slate-500">
            Collection performance for each class
          </p>

        </div>

        <Button
          variant="outline"
          size="sm"
        >
          This Month
        </Button>

      </div>

      <div className="mt-10 flex h-72 items-end justify-between gap-4">

        {[
          {
            className: "G6",
            value: 72,
          },
          {
            className: "G7",
            value: 85,
          },
          {
            className: "G8",
            value: 78,
          },
          {
            className: "G9",
            value: 92,
          },
          {
            className: "G10",
            value: 100,
          },
          {
            className: "G11",
            value: 88,
          },
          {
            className: "G12",
            value: 95,
          },
        ].map((item) => (

          <div
            key={item.className}
            className="flex flex-1 flex-col items-center"
          >

            <div
              className="w-full rounded-t-xl bg-blue-600 transition hover:bg-blue-700"
              style={{
                height: `${item.value * 2}px`,
              }}
            />

            <span className="mt-3 text-xs text-slate-500">
              {item.className}
            </span>

          </div>

        ))}

      </div>

    </CardContent>

  </Card>

  {/* ================= Payment Methods ================= */}

  <Card>

    <CardContent className="p-6">

      <h2 className="text-lg font-semibold">
        Payment Methods
      </h2>

      <p className="text-sm text-slate-500">
        Distribution of received payments
      </p>

      <div className="mt-8 space-y-6">

        {[
          {
            label: "UPI",
            value: "48%",
            width: "48%",
            color: "bg-blue-500",
          },
          {
            label: "Cash",
            value: "22%",
            width: "22%",
            color: "bg-green-500",
          },
          {
            label: "Card",
            value: "18%",
            width: "18%",
            color: "bg-violet-500",
          },
          {
            label: "Bank Transfer",
            value: "12%",
            width: "12%",
            color: "bg-amber-500",
          },
        ].map((item) => (

          <div key={item.label}>

            <div className="mb-2 flex justify-between">

              <span className="font-medium">
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

{/* ================= Income Comparison ================= */}

<div className="mt-6 grid gap-5 md:grid-cols-3">

  <Card>

    <CardContent className="p-6">

      <p className="text-sm text-slate-500">
        Expected Revenue
      </p>

      <h3 className="mt-3 text-3xl font-bold text-slate-900">
        ₹27.7L
      </h3>

    </CardContent>

  </Card>

  <Card>

    <CardContent className="p-6">

      <p className="text-sm text-slate-500">
        Collected
      </p>

      <h3 className="mt-3 text-3xl font-bold text-green-600">
        ₹24.5L
      </h3>

    </CardContent>

  </Card>

  <Card>

    <CardContent className="p-6">

      <p className="text-sm text-slate-500">
        Outstanding
      </p>

      <h3 className="mt-3 text-3xl font-bold text-red-600">
        ₹3.2L
      </h3>

    </CardContent>

  </Card>

</div>

{/* ================= Collection Target ================= */}

<Card className="mt-6">

  <CardContent className="p-6">

    <div className="flex items-center justify-between">

      <div>

        <h2 className="text-lg font-semibold">
          Collection Target
        </h2>

        <p className="text-sm text-slate-500">
          Monthly fee collection progress
        </p>

      </div>

      <span className="text-2xl font-bold text-green-600">
        88%
      </span>

    </div>

    <div className="mt-6 h-4 rounded-full bg-slate-100">

      <div
        className="h-4 rounded-full bg-green-500"
        style={{
          width: "88%",
        }}
      />

    </div>

    <div className="mt-4 flex justify-between text-sm text-slate-500">

      <span>
        ₹24.5L Collected
      </span>

      <span>
        Target ₹27.7L
      </span>

    </div>

  </CardContent>

</Card>
{/* ================= Bottom Dashboard ================= */}

<div className="grid gap-6 xl:grid-cols-3">

  {/* ================= Top Paying Classes ================= */}

  <Card className="xl:col-span-2">

    <CardContent className="p-6">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-lg font-semibold">
            Top Paying Classes
          </h2>

          <p className="text-sm text-slate-500">
            Ranked by total fee collection
          </p>

        </div>

        <Button
          variant="outline"
          size="sm"
        >
          View Report
        </Button>

      </div>

      <div className="mt-8 space-y-5">

        {[
          {
            className: "Grade 12",
            amount: "₹5,42,000",
            progress: 100,
          },
          {
            className: "Grade 11",
            amount: "₹4,96,000",
            progress: 92,
          },
          {
            className: "Grade 10",
            amount: "₹4,51,000",
            progress: 86,
          },
          {
            className: "Grade 9",
            amount: "₹4,18,000",
            progress: 81,
          },
          {
            className: "Grade 8",
            amount: "₹3,90,000",
            progress: 76,
          },
        ].map((item) => (

          <div key={item.className}>

            <div className="mb-2 flex justify-between">

              <span className="font-medium">
                {item.className}
              </span>

              <span className="font-semibold text-blue-600">
                {item.amount}
              </span>

            </div>

            <div className="h-3 rounded-full bg-slate-100">

              <div
                className="h-3 rounded-full bg-blue-600"
                style={{
                  width: `${item.progress}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </CardContent>

  </Card>

  {/* ================= Upcoming Due Dates ================= */}

  <Card>

    <CardContent className="p-6">

      <h2 className="text-lg font-semibold">
        Upcoming Due Dates
      </h2>

      <p className="text-sm text-slate-500">
        Fee deadlines this week
      </p>

      <div className="mt-6 space-y-4">

        {[
          {
            student: "Ava Patel",
            due: "15 Aug",
          },
          {
            student: "Noah Chen",
            due: "16 Aug",
          },
          {
            student: "Leo Gomez",
            due: "17 Aug",
          },
          {
            student: "Maya Singh",
            due: "18 Aug",
          },
        ].map((item) => (

          <div
            key={item.student}
            className="flex items-center justify-between rounded-xl border border-slate-200 p-4"
          >

            <div>

              <p className="font-medium">
                {item.student}
              </p>

              <p className="text-sm text-slate-500">
                Fee Due
              </p>

            </div>

            <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">
              {item.due}
            </span>

          </div>

        ))}

      </div>

    </CardContent>

  </Card>

</div>

{/* ================= Notifications ================= */}

<Card className="mt-6">

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
        "₹25,000 payment received from Ava Patel.",
        "Invoice #INV-1045 generated successfully.",
        "15 students have pending fee reminders.",
        "Monthly collection reached 88% of target.",
      ].map((notification) => (

        <div
          key={notification}
          className="rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
        >

          {notification}

        </div>

      ))}

    </div>

  </CardContent>

</Card>

{/* ================= Quick Actions ================= */}

<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

  {[
    "Collect Fee",
    "Generate Invoice",
    "Print Receipt",
    "Export Report",
  ].map((action) => (

    <Card
      key={action}
      className="cursor-pointer transition hover:-translate-y-1 hover:shadow-lg"
    >

      <CardContent className="flex h-32 items-center justify-center">

        <h3 className="text-center font-semibold">
          {action}
        </h3>

      </CardContent>

    </Card>

  ))}

</div>

</main>

</div>
  )};

