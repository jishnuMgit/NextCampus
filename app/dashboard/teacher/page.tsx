"use client";

import { CalendarDays, ClipboardList, FileText, GraduationCap, MessageSquare } from "lucide-react";
import { Sidebar } from "../../../components/dashboard/sidebar";
import { Topbar } from "../../../components/dashboard/topbar";
import { StatCard } from "../../../components/dashboard/stat-card";
import { WidgetGrid } from "../../../components/dashboard/widget-grid";

const teacherItems = [
  { href: "/dashboard/teacher", label: "Dashboard", icon: GraduationCap },
  { href: "/dashboard/teacher/classes", label: "My Classes", icon: ClipboardList },
  { href: "/dashboard/teacher/attendance", label: "Attendance", icon: CalendarDays },
  { href: "/dashboard/teacher/homework", label: "Homework", icon: FileText },
  { href: "/dashboard/teacher/messages", label: "Messages", icon: MessageSquare },
];

export default function TeacherDashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar items={teacherItems} title="Teacher Portal" />
      <div className="flex-1">
        <Topbar title="Good morning, Mr. Riley" />
        <main className="space-y-6 p-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <StatCard label="Classes today" value="4" change="Updated 08:30" accent="text-blue-600" />
            <StatCard label="Pending attendance" value="12" change="2 overdue" accent="text-amber-600" />
            <StatCard label="Assignments to review" value="7" change="3 new submissions" accent="text-violet-600" />
            <StatCard label="Student performance" value="89%" change="Above cohort average" accent="text-emerald-600" />
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <WidgetGrid title="Today’s classes">
              {[
                { title: "Grade 9 English", time: "09:00", room: "Room 204" },
                { title: "Grade 10 Science", time: "11:00", room: "Lab 2" },
                { title: "Grade 11 History", time: "14:00", room: "Room 112" },
              ].map((item) => (
                <div key={item.title} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.room}</p>
                  </div>
                  <span className="text-sm font-medium text-blue-600">{item.time}</span>
                </div>
              ))}
            </WidgetGrid>
            <WidgetGrid title="Announcements">
              {[
                { title: "Parent meeting", text: "Schedule for next Friday at 16:00" },
                { title: "Exam prep", text: "Review packets shared with all grade cohorts" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-500">{item.text}</p>
                </div>
              ))}
            </WidgetGrid>
          </div>
        </main>
      </div>
    </div>
  );
}
