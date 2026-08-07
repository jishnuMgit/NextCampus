"use client";

import { CalendarDays, ClipboardList, GraduationCap, ScrollText, WalletCards } from "lucide-react";
import { Sidebar } from "../../../components/dashboard/sidebar";
import { Topbar } from "../../../components/dashboard/topbar";
import { StatCard } from "../../../components/dashboard/stat-card";
import { WidgetGrid } from "../../../components/dashboard/widget-grid";

const studentItems = [
  { href: "/dashboard/student", label: "Dashboard", icon: GraduationCap },
  { href: "/dashboard/student/attendance", label: "Attendance", icon: CalendarDays },
  { href: "/dashboard/student/timetable", label: "Timetable", icon: ClipboardList },
  { href: "/dashboard/student/homework", label: "Homework", icon: ScrollText },
  { href: "/dashboard/student/fees", label: "Fees", icon: WalletCards },
];

export default function StudentDashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar items={studentItems} title="Student Portal" />
      <div className="flex-1 pb-24">
        <Topbar title="Welcome back, Maya" />
        <main className="space-y-6 p-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <StatCard label="Attendance" value="97.8%" change="+2.1% this month" accent="text-emerald-600" />
            <StatCard label="Upcoming exams" value="3" change="Math, English, Science" accent="text-blue-600" />
            <StatCard label="Homework due" value="2" change="Due tomorrow" accent="text-amber-600" />
            <StatCard label="Fee balance" value="$320" change="Next due 12 Aug" accent="text-violet-600" />
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <WidgetGrid title="Today’s classes">
              {[
                { title: "Geometry", time: "09:00 – 10:00", teacher: "Ms. Carter" },
                { title: "History", time: "11:00 – 12:00", teacher: "Mr. Ellis" },
                { title: "Lab", time: "14:00 – 15:00", teacher: "Dr. Singh" },
              ].map((item) => (
                <div key={item.title} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.teacher}</p>
                  </div>
                  <span className="text-sm font-medium text-blue-600">{item.time}</span>
                </div>
              ))}
            </WidgetGrid>
            <WidgetGrid title="Latest results">
              {[
                { subject: "Math", score: "A", note: "Excellent problem solving" },
                { subject: "English", score: "B+", note: "Great essay structure" },
              ].map((item) => (
                <div key={item.subject} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-900">{item.subject}</p>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">{item.score}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">{item.note}</p>
                </div>
              ))}
            </WidgetGrid>
          </div>
        </main>
      </div>
    </div>
  );
}
