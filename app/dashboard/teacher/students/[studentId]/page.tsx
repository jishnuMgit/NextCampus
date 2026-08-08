import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { Topbar } from "@/components/dashboard/topbar";
import { BarChart3, CalendarDays, FileText, Users2 } from "lucide-react";

export default function StudentProfilePage() {
  return (
    <div className="pb-24">
      <Topbar title="Student overview" />

      <main className="space-y-6 p-6">
        <SectionTitle
          eyebrow="Main class student"
          title="Arjun Kumar"
          description="A complete academic overview for the student in your primary class."
        />

        <div className="grid gap-6 ">
          <Card className="border-slate-200 bg-white p-6">
            <div className="grid gap-6 sm:grid-cols-[1fr_0.9fr]">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-3xl bg-slate-200" />
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900">Arjun Kumar</h2>
                    <p className="text-sm text-slate-500">Admission No: A1023 • Roll No: 09A-12</p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Class</p>
                    <p className="mt-2 font-semibold text-slate-900">Grade 9</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Section</p>
                    <p className="mt-2 font-semibold text-slate-900">A</p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Parent/Guardian</p>
                    <p className="mt-2 font-semibold text-slate-900">Mrs. Meera Kumar</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Contact</p>
                    <p className="mt-2 font-semibold text-slate-900">+91 98765 43210</p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-center">
                    <p className="text-sm text-slate-500">Attendance</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900">68%</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-center">
                    <p className="text-sm text-slate-500">Average</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900">54%</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-center">
                    <p className="text-sm text-slate-500">Class rank</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900">18</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">Quick actions</p>
                <div className="mt-4 grid gap-3">
                  <Link href="/dashboard/teacher/students" className="rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">View Profile</Link>
                  <Link href="/dashboard/teacher/attendance" className="rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">Attendance</Link>
                  <Link href="/dashboard/teacher/marksReport" className="rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">Marks</Link>
                  <Button size="sm" className="bg-amber-600 text-white hover:bg-amber-700">Add Remark</Button>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Academic performance</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Card className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm text-slate-500">Subject-wise marks</p>
                    <ul className="mt-4 space-y-3 text-sm text-slate-700">
                      <li>English: 74%</li>
                      <li>Mathematics: 58%</li>
                      <li>Science: 61%</li>
                      <li>History: 55%</li>
                    </ul>
                  </Card>
                  <Card className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm text-slate-500">Performance trend</p>
                    <p className="mt-4 text-sm text-slate-600">Consistent below class average with opportunity to improve in mathematics and history. Recent assessment shows a small upward trend.</p>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900">Homework & attendance</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Card className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm text-slate-500">Submitted</p>
                    <p className="mt-2 text-3xl font-semibold text-slate-900">12</p>
                    <p className="mt-3 text-sm text-slate-600">On time with one late submission.</p>
                  </Card>
                  <Card className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm text-slate-500">Missing assignments</p>
                    <p className="mt-2 text-3xl font-semibold text-slate-900">4</p>
                    <p className="mt-3 text-sm text-slate-600">Action recommended to follow up.</p>
                  </Card>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">Teacher remarks</h3>
                  <Badge className="bg-slate-100 text-slate-700 border-slate-200">Recent</Badge>
                </div>
                <div className="mt-4 space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="rounded-3xl bg-white p-4">
                    <p className="font-semibold text-slate-900">Needs stronger participation in group discussion.</p>
                    <p className="mt-2 text-sm text-slate-500">Added on 10 Jul 2026</p>
                  </div>
                  <div className="rounded-3xl bg-white p-4">
                    <p className="font-semibold text-slate-900">Shows good effort in science experiments.</p>
                    <p className="mt-2 text-sm text-slate-500">Added on 05 Jul 2026</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Student report</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">Generate student report</h3>
                </div>
                <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">Generate Report</Button>
              </div>
              <p className="mt-3 text-sm text-slate-600">Summarize attendance, academic performance, homework, behavior, and teacher recommendations in one report.</p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
