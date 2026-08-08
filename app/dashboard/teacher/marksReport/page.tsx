import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { Topbar } from "@/components/dashboard/topbar";
import { BarChart3, FileText, Users2 } from "lucide-react";

const students = [
  { name: "Arjun Kumar", exam: "Unit Test 1", max: 100, marks: 54, percent: 54 },
  { name: "Sana Mehta", exam: "Unit Test 1", max: 100, marks: 72, percent: 72 },
  { name: "Riya Singh", exam: "Unit Test 1", max: 100, marks: 78, percent: 78 },
  { name: "Karan Patel", exam: "Unit Test 1", max: 100, marks: 81, percent: 81 },
];

export default function MarksReportPage() {
  return (
    <div className="pb-24">
      <Topbar title="Marks management" />

      <main className="space-y-6 p-6">
        <SectionTitle
          eyebrow="Main class"
          title="Enter marks and review assessments"
          description="Manage exam, test, and assessment scores for your primary class."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          <Card className="border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">Average mark</p>
            <p className="mt-4 text-3xl font-semibold text-slate-900">72%</p>
            <p className="mt-3 text-sm text-slate-600">Current class average for the selected assessment.</p>
          </Card>
          <Card className="border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">Highest mark</p>
            <p className="mt-4 text-3xl font-semibold text-slate-900">81</p>
            <p className="mt-3 text-sm text-slate-600">Best performance in this assessment.</p>
          </Card>
          <Card className="border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">Pass percentage</p>
            <p className="mt-4 text-3xl font-semibold text-slate-900">88%</p>
            <p className="mt-3 text-sm text-slate-600">Students meeting the passing score.</p>
          </Card>
        </div>

        <Card className="border-slate-200 bg-white p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="text-sm font-medium text-slate-600">Class</label>
              <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none">
                <option>Grade 9 - Section A</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-600">Subject</label>
              <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none">
                <option>English</option>
                <option>Mathematics</option>
                <option>Science</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-600">Assessment</label>
              <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none">
                <option>Unit Test 1</option>
                <option>Mid Term</option>
                <option>Final Exam</option>
              </select>
            </div>
          </div>
        </Card>

        <Card className="border-slate-200 bg-white p-6">
          <div className="overflow-hidden rounded-3xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-6 py-4 font-medium">Student</th>
                  <th className="px-6 py-4 font-medium">Exam</th>
                  <th className="px-6 py-4 font-medium">Max Marks</th>
                  <th className="px-6 py-4 font-medium">Marks</th>
                  <th className="px-6 py-4 font-medium">Percentage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {students.map((student) => (
                  <tr key={student.name}>
                    <td className="px-6 py-4 text-slate-900">{student.name}</td>
                    <td className="px-6 py-4">{student.exam}</td>
                    <td className="px-6 py-4">{student.max}</td>
                    <td className="px-6 py-4">{student.marks}</td>
                    <td className="px-6 py-4">{student.percent}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <Badge className="bg-slate-100 text-slate-700 border-slate-200">Students needing improvement: 2</Badge>
            <div className="flex flex-wrap gap-3">
              <Button size="sm" variant="secondary">Save marks</Button>
              <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">Finalize</Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
