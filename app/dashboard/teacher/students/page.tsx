import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { Topbar } from "@/components/dashboard/topbar";
import { BarChart3, ClipboardList, Users2 } from "lucide-react";

const students = [
  { id: "arjun-kumar", name: "Arjun Kumar", admission: "A1023", roll: "09A-12", attendance: 68, average: 54, status: "At Risk" },
  { id: "sana-mehta", name: "Sana Mehta", admission: "A1017", roll: "09A-15", attendance: 84, average: 72, status: "On Track" },
  { id: "riya-singh", name: "Riya Singh", admission: "A1051", roll: "09A-18", attendance: 89, average: 78, status: "Strong" },
  { id: "karan-patel", name: "Karan Patel", admission: "A1005", roll: "09A-05", attendance: 92, average: 81, status: "Strong" },
];

export default function StudentsPage() {
  return (
    <div className="pb-24">
      <Topbar title="Student roster" />

      <main className="space-y-6 p-6">
        <SectionTitle
          eyebrow="Main class"
          title="Grade 9 - Section A Students"
          description="Review student performance, attendance, and start quick actions from the primary class roster."
        />

        <Card className="border-slate-200 bg-white p-6">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
              <thead className="bg-slate-100 text-slate-600">
                <tr>
                  <th className="px-6 py-4 font-medium">Student</th>
                  <th className="px-6 py-4 font-medium">Admission</th>
                  <th className="px-6 py-4 font-medium">Roll</th>
                  <th className="px-6 py-4 font-medium">Attendance</th>
                  <th className="px-6 py-4 font-medium">Average</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {students.map((student) => (
                  <tr key={student.id}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-2xl bg-slate-200" />
                        <div>
                          <p className="font-semibold text-slate-900">{student.name}</p>
                          <p className="text-sm text-slate-500">Class rep</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{student.admission}</td>
                    <td className="px-6 py-4">{student.roll}</td>
                    <td className="px-6 py-4">{student.attendance}%</td>
                    <td className="px-6 py-4">{student.average}%</td>
                    <td className="px-6 py-4">
                      <Badge className={student.status === "At Risk" ? "bg-rose-50 text-rose-700 border-rose-100" : student.status === "On Track" ? "bg-amber-50 text-amber-700 border-amber-100" : "bg-emerald-50 text-emerald-700 border-emerald-100"}>
                        {student.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        <Link href={`/dashboard/teacher/students/${student.id}`} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">Profile</Link>
                        <Link href={`/dashboard/teacher/attendance`} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">Attendance</Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </main>
    </div>
  );
}
