import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { Topbar } from "@/components/dashboard/topbar";
import { Badge, FileText, FolderPlus, Inbox } from "lucide-react";

const homeworkItems = [
  { title: "Chapter 5: Ecosystems", className: "Grade 9 - Section A", due: "10 Jul 2026", status: "Published", submitted: 29, pending: 2 },
  { title: "Essay: World War II", className: "Grade 9 - Section A", due: "12 Jul 2026", status: "Pending", submitted: 24, pending: 8 },
];

export default function HomeworkPage() {
  return (
    <div className="pb-24">
      <Topbar title="Homework management" />

      <main className="space-y-6 p-6">
        <SectionTitle
          eyebrow="Main class homework"
          title="Create and review assignments"
          description="Publish homework, track submissions, and keep your main class on schedule."
        />

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-slate-200 bg-white p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500">Assignment summary</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">Main class homework</h2>
              </div>
              <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                <FolderPlus className="mr-2 h-4 w-4" /> Create homework
              </Button>
            </div>

            <div className="mt-6 grid gap-4">
              {homeworkItems.map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                      <p className="mt-1 text-sm text-slate-500">{item.className} • Due {item.due}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={item.status === "Published" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-amber-50 text-amber-700 border-amber-100"}>{item.status}</Badge>
                      <Button size="sm" variant="secondary">View</Button>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3 text-sm text-slate-600">
                    <p>Submitted: {item.submitted}</p>
                    <p>Pending: {item.pending}</p>
                    <p>Late: {item.status === "Published" ? 1 : 0}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="border-slate-200 bg-white p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500">Submission status</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">Grade 9 - Section A</h2>
              </div>
              <Button size="sm" variant="secondary">Publish update</Button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Total students</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">32</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Submitted</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">29</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Pending</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">3</p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
