"use client";

import { useMemo, useState } from "react";
import { CalendarDays, Filter, TrendingUp } from "lucide-react";
import { StatCard } from "../../../../components/dashboard/stat-card";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import {
  academicYears,
  attendanceMonths,
  attendanceSummary,
  calendarEvents,
  monthlyAttendance,
  subjectAttendance,
} from "../../../../lib/data/student/attendance";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const statusStyles: Record<string, string> = {
  Present: "bg-emerald-50 text-emerald-700",
  Absent: "bg-rose-50 text-rose-700",
  Late: "bg-amber-50 text-amber-700",
  Leave: "bg-sky-50 text-sky-700",
  Holiday: "bg-slate-100 text-slate-700",
};

export default function StudentAttendancePage() {
  const [selectedYear, setSelectedYear] = useState(academicYears[1]);
  const [selectedMonth, setSelectedMonth] = useState("June");
  const [selectedSubject, setSelectedSubject] = useState("All");

  const filteredSubjects = useMemo(() => {
    if (selectedSubject === "All") return subjectAttendance;
    return subjectAttendance.filter((item) => item.subject === selectedSubject);
  }, [selectedSubject]);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Overall attendance" value={`${attendanceSummary.overall}%`} change="Consistent this term" accent="text-emerald-600" />
        <StatCard label="Present" value={`${attendanceSummary.present}`} change="118 days" accent="text-blue-600" />
        <StatCard label="Absent" value={`${attendanceSummary.absent}`} change="6 days" accent="text-amber-600" />
        <StatCard label="Leave" value={`${attendanceSummary.leave}`} change="3 leave days" accent="text-violet-600" />
      </div>

      <Card className="border-slate-200 bg-white p-0">
        <CardContent className="space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Attendance overview</p>
              <h3 className="text-xl font-semibold text-slate-900">Monthly trend</h3>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                <Filter size={16} />
                <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className="bg-transparent outline-none">
                  {academicYears.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </label>
              <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                <CalendarDays size={16} />
                <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="bg-transparent outline-none">
                  {attendanceMonths.map((month) => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
              </label>
              <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                <TrendingUp size={16} />
                <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)} className="bg-transparent outline-none">
                  <option value="All">All subjects</option>
                  {subjectAttendance.map((item) => (
                    <option key={item.subject} value={item.subject}>{item.subject}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyAttendance}>
                <defs>
                  <linearGradient id="attendancePresent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.28} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0.03} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
                <Tooltip />
                <Area type="monotone" dataKey="present" stroke="#2563eb" strokeWidth={3} fill="url(#attendancePresent)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Card className="border-slate-200 bg-white p-0">
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Calendar view</p>
                <h3 className="text-xl font-semibold text-slate-900">June attendance</h3>
              </div>
              <Badge className="bg-slate-100 text-slate-700">{selectedMonth}</Badge>
            </div>
            <div className="mt-6 grid grid-cols-7 gap-2">
              {calendarEvents.map((item) => (
                <div key={`${item.date}-${item.status}`} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                  <p className="text-sm font-semibold text-slate-900">{item.date}</p>
                  <span className={`mt-2 inline-flex rounded-full px-2 py-1 text-[10px] font-semibold ${statusStyles[item.status]}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-white p-0">
          <CardContent>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Subject-wise report</p>
                <h3 className="text-xl font-semibold text-slate-900">Attendance breakdown</h3>
              </div>
              <Button variant="outline" size="sm" className="rounded-full">
                Export
              </Button>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="hidden md:grid grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr_0.7fr] bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600">
                <span>Subject</span>
                <span>Total</span>
                <span>Present</span>
                <span>Absent</span>
                <span>%</span>
              </div>
              {filteredSubjects.map((item) => (
                <div key={item.subject} className="grid gap-3 border-t border-slate-200 px-4 py-4 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr_0.7fr]">
                  <div>
                    <p className="font-semibold text-slate-900">{item.subject}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.status}</p>
                  </div>
                  <p className="text-sm text-slate-700">{item.totalClasses}</p>
                  <p className="text-sm text-slate-700">{item.present}</p>
                  <p className="text-sm text-slate-700">{item.absent}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-900">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
