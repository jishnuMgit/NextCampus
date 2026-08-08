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
import QuickActions from "@/components/dashboard/management/attendance/QuickActions";
import RecentAttendance from "@/components/dashboard/management/attendance/RecentAttendance";
import Analytics from "@/components/dashboard/management/attendance/Analytics";
import LeaveRequests from "@/components/dashboard/management/attendance/LeaveRequests";
import BottomAnalytics from "@/components/dashboard/management/attendance/BottomAnalytics";
import TeacherAttendance from "@/components/dashboard/management/attendance/TeacherAttendance";
import Notifications from "@/components/dashboard/management/attendance/Notifications";
import Head from "next/head";
import Header from "@/components/dashboard/management/attendance/Header";


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

        <Header/>

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

       <QuickActions/>

{/* ================= Recent Attendance ================= */}

<RecentAttendance/>

{/* ================= Analytics ================= */}

<Analytics/>
{/* ================= Leave Requests ================= */}

<LeaveRequests/>

{/* ================= Bottom Analytics ================= */}

<BottomAnalytics/>

{/* ================= Teacher Attendance ================= */}

<TeacherAttendance/>

{/* ================= Notifications ================= */}

<Notifications/>

</main>

</div>
  )
};
