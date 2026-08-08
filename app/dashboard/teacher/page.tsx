import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { Topbar } from "@/components/dashboard/topbar";
import { StatCard } from "@/components/dashboard/stat-card";
import { WidgetGrid } from "@/components/dashboard/widget-grid";
import {
  AlertTriangle,
  CalendarDays,
  FileText,
  GraduationCap,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const otherClasses = [
  {
    subject: "Science",
    grade: "Grade 10",
    section: "B",
    room: "Lab 2",
    nextClass: "11:00 AM",
  },
  {
    subject: "History",
    grade: "Grade 11",
    section: "A",
    room: "Room 112",
    nextClass: "2:00 PM",
  },
  {
    subject: "English",
    grade: "Grade 8",
    section: "C",
    room: "Room 105",
    nextClass: "3:00 PM",
  },
];

const todayClasses = [
  {
    time: "09:00",
    subject: "English",
    className: "Grade 9 A",
    room: "Room 204",
    status: "Completed",
  },
  {
    time: "11:00",
    subject: "Science",
    className: "Grade 10 B",
    room: "Lab 2",
    status: "Upcoming",
  },
  {
    time: "14:00",
    subject: "History",
    className: "Grade 11 A",
    room: "Room 112",
    status: "Upcoming",
  },
];

const alerts = [
  {
    title: "Attendance not submitted",
    subtitle: "Grade 9 - Section A has pending attendance.",
    accent: "text-amber-600",
  },
  {
    title: "Low attendance alert",
    subtitle: "3 students have attendance below 75%.",
    accent: "text-rose-600",
  },
  {
    title: "Pending homework review",
    subtitle: "7 homework submissions need review.",
    accent: "text-violet-600",
  },
];

const attentionItems = [
  {
    name: "Arjun Kumar",
    attendance: "68%",
    average: "54%",
    missing: 4,
  },
  {
    name: "Nina Patel",
    attendance: "72%",
    average: "61%",
    missing: 3,
  },
];

const todayDate = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

export default function TeacherDashboardPage() {
  return (
    <div className="pb-24">
      <Topbar title="Good morning, Mr. Riley" />

      <main className="space-y-6 p-6">
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <Card className="border-slate-200 bg-white p-6">
            <div className="flex flex-col gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  <Sparkles size={16} /> Main Class Overview
                </div>
                <h1 className="mt-5 text-3xl font-semibold text-slate-900">Grade 9 - Section A</h1>
                <p className="mt-3 text-slate-600">
                  You are the class teacher for this group. Manage attendance, marks, homework, student reports, and classroom performance from here.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Academic Year</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">2026-27</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Students</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">32</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Classroom</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">Room 204</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="border-slate-200 bg-white p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Badge className="bg-blue-50 text-blue-700 border-blue-100">MAIN CLASS</Badge>
                <h2 className="mt-4 text-2xl font-semibold text-slate-900">Primary class responsibility</h2>
                <p className="mt-2 text-sm text-slate-500">This class is your main teaching assignment and has full management permissions.</p>
              </div>
              <div className="rounded-3xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                {todayDate}
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Present today</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">28</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Absent</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">3</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">On Leave</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">1</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="sm" variant="secondary" asChild>
                <Link href="/dashboard/teacher/classes">View Class</Link>
              </Button>
              <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700" asChild>
                <Link href="/dashboard/teacher/attendance">Take Attendance</Link>
              </Button>
              <Button size="sm" className="bg-emerald-600 text-white hover:bg-emerald-700" asChild>
                <Link href="/dashboard/teacher/marksReport">Enter Marks</Link>
              </Button>
              <Button size="sm" className="bg-violet-600 text-white hover:bg-violet-700" asChild>
                <Link href="/dashboard/teacher/students">Student Reports</Link>
              </Button>
            </div>
          </Card>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <StatCard label="Classes Today" value="4" change="2 completed • 2 upcoming" accent="text-blue-600" />
              <StatCard label="Pending Attendance" value="1" change="Main class attendance pending" accent="text-amber-600" />
              <StatCard label="Assignments to Review" value="7" change="3 new submissions" accent="text-violet-600" />
              <StatCard label="Main Class Performance" value="89%" change="+4% from previous assessment" accent="text-emerald-600" />
            </div>

            <WidgetGrid title="Today’s classes">
              <div className="space-y-4">
                {todayClasses.map((item) => {
                  const statusClass = item.status === "Completed"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-slate-100 text-slate-700";

                  return (
                    <div key={item.time} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-lg font-semibold text-slate-900">{item.subject}</p>
                          <p className="mt-1 text-sm text-slate-500">{item.className} • {item.room}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-slate-600">{item.time}</span>
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass}`}>{item.status}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </WidgetGrid>
          </div>

          <div className="space-y-6">
            <WidgetGrid title="Announcements">
              <div className="space-y-4">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-semibold text-slate-900">Parent Meeting</p>
                  <p className="mt-2 text-sm text-slate-500">Schedule for next Friday at 4:00 PM.</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-semibold text-slate-900">Exam Preparation</p>
                  <p className="mt-2 text-sm text-slate-500">Review packets have been shared with Grade 9.</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-semibold text-slate-900">Staff Meeting</p>
                  <p className="mt-2 text-sm text-slate-500">Meeting scheduled tomorrow at 3:30 PM.</p>
                </div>
              </div>
            </WidgetGrid>

            <WidgetGrid title="Students Needing Attention">
              <div className="space-y-4">
                {attentionItems.map((student) => (
                  <div key={student.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-lg font-semibold text-slate-900">{student.name}</p>
                        <p className="mt-1 text-sm text-slate-500">Attendance: {student.attendance} • Average: {student.average} • Missing Homework: {student.missing}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button size="xs" variant="secondary">View Student</Button>
                        <Button size="xs" className="bg-amber-600 text-white hover:bg-amber-700">Add Remark</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </WidgetGrid>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.98fr]">
          <Card className="border-slate-200 bg-white p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-600">Other Classes I Teach</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">Teaching classes</h2>
              </div>
              <Button size="sm" variant="outline" asChild>
                <Link href="/dashboard/teacher/classes">View all classes</Link>
              </Button>
            </div>

            <div className="mt-6 space-y-4">
              {otherClasses.map((classItem) => (
                <div key={classItem.subject} className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:grid-cols-[1.2fr_auto] sm:items-center">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{classItem.grade} • {classItem.subject}</p>
                    <p className="mt-2 text-sm text-slate-500">Room: {classItem.room}</p>
                    <p className="mt-1 text-sm text-slate-500">Next class: {classItem.nextClass}</p>
                  </div>
                  <Button size="sm" variant="secondary" asChild>
                    <Link href="/dashboard/teacher/classes">View Class</Link>
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="border-slate-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-600">Alerts</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">Action items</h2>
              </div>
              <Button size="sm" variant="ghost">Manage alerts</Button>
            </div>

            <div className="mt-6 space-y-4">
              {alerts.map((alert) => (
                <div key={alert.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className={`mt-1 h-5 w-5 ${alert.accent}`} />
                    <div>
                      <p className="font-semibold text-slate-900">{alert.title}</p>
                      <p className="mt-1 text-sm text-slate-500">{alert.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
