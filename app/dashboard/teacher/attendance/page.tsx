import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { StatCard } from "@/components/dashboard/stat-card";
import { WidgetGrid } from "@/components/dashboard/widget-grid";
import { Topbar } from "@/components/dashboard/topbar";
import { CalendarDays, FileText, Users2, BarChart3 } from "lucide-react";

export default function AttendancePage() {
  const attendanceSummary = {
    present: 28,
    absent: 3,
    late: 1,
    leave: 0,
    percentage: 92,
  };

  const studentRows = [
    { name: "Arjun Kumar", roll: "09A-12", status: "Present", percent: 96 },
    { name: "Sana Mehta", roll: "09A-15", status: "Absent", percent: 84 },
    { name: "Riya Singh", roll: "09A-18", status: "Late", percent: 89 },
    { name: "Karan Patel", roll: "09A-05", status: "Present", percent: 97 },
  ];

  return (
    <div className="pb-24">
      <Topbar title="Attendance management" />

      <main className="space-y-6 p-6">
        <SectionTitle
          eyebrow="Main Class"
          title="Grade 9 - Section A Attendance"
          description="Mark students and review attendance history for your primary class."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          <StatCard label="Present" value={`${attendanceSummary.present}`} change="Today" accent="text-emerald-600" />
          <StatCard label="Absent" value={`${attendanceSummary.absent}`} change="Today" accent="text-amber-600" />
          <StatCard label="Attendance" value={`${attendanceSummary.percentage}%`} change="Current rate" accent="text-blue-600" />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <WidgetGrid title="Attendance actions">
            <div className="space-y-4">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="font-semibold text-slate-900">Mark attendance</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button variant="secondary" size="sm">Present</Button>
                  <Button variant="secondary" size="sm">Absent</Button>
                  <Button variant="secondary" size="sm">Late</Button>
                  <Button variant="secondary" size="sm">Leave</Button>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-900">Filters</p>
                    <p className="mt-2 text-sm text-slate-500">Filter by date and attendance status.</p>
                  </div>
                  <Badge>Today</Badge>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <label className="block text-sm text-slate-600">Date</label>
                    <input type="date" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none" />
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <label className="block text-sm text-slate-600">Status</label>
                    <select className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none">
                      <option>All</option>
                      <option>Present</option>
                      <option>Absent</option>
                      <option>Late</option>
                      <option>Leave</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </WidgetGrid>

          <WidgetGrid title="Attendance summary">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-4 shadow-sm">
                  <p className="text-sm text-slate-500">Attendance percentage</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-900">{attendanceSummary.percentage}%</p>
                </div>
                <div className="rounded-3xl bg-white p-4 shadow-sm">
                  <p className="text-sm text-slate-500">Late</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-900">{attendanceSummary.late}</p>
                </div>
              </div>
            </div>
          </WidgetGrid>
        </div>

        <WidgetGrid title="Today's attendance list">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-6 py-4 font-medium">Student</th>
                  <th className="px-6 py-4 font-medium">Roll</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Attendance %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {studentRows.map((student) => (
                  <tr key={student.name}>
                    <td className="px-6 py-4 text-slate-900">{student.name}</td>
                    <td className="px-6 py-4 text-slate-600">{student.roll}</td>
                    <td className="px-6 py-4 text-slate-700">{student.status}</td>
                    <td className="px-6 py-4 text-slate-700">{student.percent}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </WidgetGrid>
      </main>
    </div>
  );
}
