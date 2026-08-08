import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { Topbar } from "@/components/dashboard/topbar";
import { ClipboardList, FileText, GraduationCap, Users2 } from "lucide-react";

const otherClasses = [
  {
    title: "Grade 10 - Science",
    room: "Lab 2",
    nextClass: "11:00 AM",
    permissions: "Teaching class",
  },
  {
    title: "Grade 11 - History",
    room: "Room 112",
    nextClass: "2:00 PM",
    permissions: "Teaching class",
  },
  {
    title: "Grade 8 - English",
    room: "Room 105",
    nextClass: "3:00 PM",
    permissions: "Teaching class",
  },
];

export default function ClassesPage() {
  return (
    <div className="pb-24">
      <Topbar title="Class management" />

      <main className="space-y-6 p-6">
        <SectionTitle
          eyebrow="Class management"
          title="My Classes"
          description="Access your main class and teaching classes with clear role-based actions."
        />

        <Card className="border-slate-200 bg-white p-6">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <Badge className="bg-blue-50 text-blue-700 border-blue-100">MAIN CLASS</Badge>
              <h3 className="mt-3 text-3xl font-semibold text-slate-900">Grade 9 - Section A</h3>
              <p className="mt-2 text-slate-600">This is your primary classroom with full management privileges.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:auto-cols-auto xl:grid-flow-col">
              <Button size="sm" variant="secondary">View Students</Button>
              <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">Attendance</Button>
              <Button size="sm" className="bg-emerald-600 text-white hover:bg-emerald-700">Marks</Button>
              <Button size="sm" className="bg-violet-600 text-white hover:bg-violet-700">Homework</Button>
            </div>
          </div>
        </Card>

        <div className="grid gap-6 xl:grid-cols-3">
          {otherClasses.map((item) => (
            <Card key={item.title} className="border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Teaching class</p>
                  <h4 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h4>
                </div>
                <Badge className="bg-slate-100 text-slate-700 border-slate-200">{item.permissions}</Badge>
              </div>
              <div className="mt-5 space-y-3 text-sm text-slate-600">
                <p>Room: {item.room}</p>
                <p>Next class: {item.nextClass}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button size="sm" variant="secondary" asChild>
                  <Link href="/dashboard/teacher/classes">View Class</Link>
                </Button>
                <Button size="sm" variant="outline">Homework</Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
