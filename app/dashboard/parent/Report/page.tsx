"use client";

import { useMemo, useState } from "react";
import {
  BarChart3,
  BookOpen,
  CalendarDays,
  ClipboardList,
  GraduationCap,
  ScrollText,
  Sparkles,
  WalletCards,
} from "lucide-react";

import { Sidebar } from "../../../../components/dashboard/sidebar";
import { Topbar } from "../../../../components/dashboard/topbar";
import { StatCard } from "../../../../components/dashboard/stat-card";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const parentItems = [
  { href: "/dashboard/parent", label: "Dashboard", icon: GraduationCap },
  { href: "/dashboard/parent/attendance", label: "Attendance", icon: CalendarDays },
  { href: "/dashboard/parent/homework", label: "Homework", icon: ScrollText },
  { href: "/dashboard/parent/fees", label: "Fees", icon: WalletCards },
  { href: "/dashboard/parent/Report", label: "Reports", icon: BarChart3 },
];

const parentItems1 = [
  { href: "/dashboard/parent", label: "Dashboard", icon: GraduationCap },
  { href: "/dashboard/parent/attendance", label: "Attendance", icon: CalendarDays },
  { href: "/dashboard/parent/homework", label: "Homework", icon: ScrollText },
  { href: "/dashboard/parent/fees", label: "Fees", icon: WalletCards },
];

const childrenData = [
  {
    id: "ava",
    name: "Ava Thompson",
    grade: "Grade 9",
    division: "B",
    attendance: 94.8,
    averageGrade: 86,
    homework: 92,
    feeStatus: "Paid",
    note: "Excellent participation in science practicals.",
  },
  {
    id: "noah",
    name: "Noah Thompson",
    grade: "Grade 7",
    division: "A",
    attendance: 91.4,
    averageGrade: 79,
    homework: 84,
    feeStatus: "Partially Paid",
    note: "Needs more support in English comprehension.",
  },
];

const subjectPerformance = [
  { subject: "Mathematics", score: 88, attendance: 96, trend: "+3%" },
  { subject: "Science", score: 84, attendance: 94, trend: "+2%" },
  { subject: "English", score: 81, attendance: 91, trend: "-1%" },
  { subject: "History", score: 86, attendance: 95, trend: "+4%" },
];

const notices = [
  { title: "Science fair registration", detail: "Registration closes on Friday for the school science fair." },
  { title: "Parent-teacher meeting", detail: "A short meeting is scheduled for next Wednesday at 4:00 PM." },
  { title: "Timetable update", detail: "The Friday sports period has been moved to the afternoon block." },
];

export default function ParentReportPage() {
  const [selectedChild, setSelectedChild] = useState("all");

  const visibleChildren = useMemo(() => {
    if (selectedChild === "all") return childrenData;
    return childrenData.filter((child) => child.id === selectedChild);
  }, [selectedChild]);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar items={parentItems} items1={parentItems1} title="Parent Portal" />
      <div className="flex-1 pb-24">
        <Topbar title="Children reports" />
        <main className="space-y-6 p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Parent overview</p>
              <h2 className="text-2xl font-semibold text-slate-900">Student report dashboard</h2>
            </div>
            <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm">
              <BookOpen size={16} />
              <select value={selectedChild} onChange={(e) => setSelectedChild(e.target.value)} className="bg-transparent outline-none">
                <option value="all">All children</option>
                {childrenData.map((child) => (
                  <option key={child.id} value={child.id}>{child.name}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <StatCard label="Overall attendance" value="93.1%" change="Across both children" accent="text-emerald-600" />
            <StatCard label="Average grade" value="82.5" change="Across current term" accent="text-blue-600" />
            <StatCard label="Homework completion" value="88%" change="Strong this week" accent="text-violet-600" />
            <StatCard label="Pending fees" value="$640" change="1 payment due" accent="text-amber-600" />
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <Card className="border-slate-200 bg-white p-0">
              <CardContent className="space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Child progress</p>
                    <h3 className="text-xl font-semibold text-slate-900">Academic snapshot</h3>
                  </div>
                  <Badge className="bg-slate-100 text-slate-700">Updated today</Badge>
                </div>
                <div className="space-y-4">
                  {visibleChildren.map((child) => (
                    <div key={child.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="font-semibold text-slate-900">{child.name}</p>
                          <p className="text-sm text-slate-500">{child.grade} • {child.division}</p>
                        </div>
                        <Badge className="bg-emerald-50 text-emerald-700">{child.feeStatus}</Badge>
                      </div>
                      <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        <div className="rounded-xl border border-slate-200 bg-white p-3">
                          <p className="text-sm text-slate-500">Attendance</p>
                          <p className="mt-1 text-lg font-semibold text-slate-900">{child.attendance}%</p>
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-white p-3">
                          <p className="text-sm text-slate-500">Average grade</p>
                          <p className="mt-1 text-lg font-semibold text-slate-900">{child.averageGrade}</p>
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-white p-3">
                          <p className="text-sm text-slate-500">Homework</p>
                          <p className="mt-1 text-lg font-semibold text-slate-900">{child.homework}%</p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-slate-600">{child.note}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white p-0">
              <CardContent className="space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Recent notices</p>
                    <h3 className="text-xl font-semibold text-slate-900">School updates</h3>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-full">
                    View all
                  </Button>
                </div>
                <div className="space-y-3">
                  {notices.map((notice) => (
                    <div key={notice.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-start gap-3">
                        <div className="rounded-2xl bg-blue-50 p-2 text-blue-600">
                          <Sparkles size={16} />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{notice.title}</p>
                          <p className="mt-1 text-sm text-slate-600">{notice.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-slate-200 bg-white p-0">
            <CardContent>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">Subject performance</p>
                  <h3 className="text-xl font-semibold text-slate-900">Term progress</h3>
                </div>
                <Badge className="bg-blue-50 text-blue-700">Focus areas</Badge>
              </div>
              <div className="space-y-4">
                {subjectPerformance.map((item) => (
                  <div key={item.subject} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-semibold text-slate-900">{item.subject}</p>
                        <p className="text-sm text-slate-500">Attendance {item.attendance}%</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-900">{item.score}/100</span>
                        <Badge className="bg-emerald-50 text-emerald-700">{item.trend}</Badge>
                      </div>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-slate-200">
                      <div className="h-2 rounded-full bg-blue-600" style={{ width: `${item.score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
