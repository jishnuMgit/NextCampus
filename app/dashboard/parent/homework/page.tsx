"use client";

import { useMemo, useState } from "react";
import { Eye, Search, Filter } from "lucide-react";
import { StudentPageShell } from "../../../../components/dashboard/student/student-page-shell";
import { StatCard } from "../../../../components/dashboard/stat-card";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../../../components/ui/dialog";
import { homeworkItems, homeworkStats, statusOptions, subjectOptions, dueDateOptions } from "../../../../lib/data/student/homework";

const statusStyles: Record<string, string> = {
  Pending: "bg-amber-50 text-amber-700",
  Submitted: "bg-emerald-50 text-emerald-700",
  Overdue: "bg-rose-50 text-rose-700",
  Completed: "bg-blue-50 text-blue-700",
};

export default function StudentHomeworkPage() {
  const [subject, setSubject] = useState("All");
  const [status, setStatus] = useState("All");
  const [dueDate, setDueDate] = useState("All");
  const [search, setSearch] = useState("");

  const filteredHomework = useMemo(() => {
    return homeworkItems.filter((item) => {
      const matchesSubject = subject === "All" || item.subject === subject;
      const matchesStatus = status === "All" || item.status === status;
      const matchesDue = dueDate === "All" || (dueDate === "Overdue" && item.status === "Overdue") || (dueDate === "This week" && item.dueDate.includes("Aug")) || (dueDate === "Next week" && item.dueDate.includes("Aug"));
      const matchesSearch = `${item.title} ${item.description} ${item.subject}`.toLowerCase().includes(search.toLowerCase());
      return matchesSubject && matchesStatus && matchesDue && matchesSearch;
    });
  }, [dueDate, search, status, subject]);

  return (
    

    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total homework" value={`${homeworkStats.total}`} change="Assigned this term" accent="text-blue-600" />
        <StatCard label="Pending" value={`${homeworkStats.pending}`} change="Needs attention" accent="text-amber-600" />
        <StatCard label="Submitted" value={`${homeworkStats.submitted}`} change="Awaiting review" accent="text-emerald-600" />
        <StatCard label="Overdue" value={`${homeworkStats.overdue}`} change="1 urgent item" accent="text-rose-600" />
      </div>

      <Card className="border-slate-200 bg-white p-0">
        <CardContent className="space-y-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Homework tracker</p>
              <h3 className="text-xl font-semibold text-slate-900">My assignments</h3>
            </div>
            <div className="flex flex-col gap-3 md:flex-row">
              <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                <Search size={16} />
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search homework" className="bg-transparent outline-none" />
              </label>
              <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                <Filter size={16} />
                <select value={subject} onChange={(e) => setSubject(e.target.value)} className="bg-transparent outline-none">
                  {subjectOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                <Filter size={16} />
                <select value={status} onChange={(e) => setStatus(e.target.value)} className="bg-transparent outline-none">
                  {statusOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                <Filter size={16} />
                <select value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="bg-transparent outline-none">
                  {dueDateOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="hidden md:grid grid-cols-[1.15fr_0.9fr_0.75fr_0.8fr_0.9fr_0.6fr_0.7fr] bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600">
              <span>Subject</span>
              <span>Homework</span>
              <span>Due date</span>
              <span>Teacher</span>
              <span>Status</span>
              <span>Priority</span>
              <span>Action</span>
            </div>
            {filteredHomework.map((item) => (
              <div key={item.id} className="grid gap-3 border-t border-slate-200 px-4 py-4 md:grid-cols-[1.15fr_0.9fr_0.75fr_0.8fr_0.9fr_0.6fr_0.7fr]">
                <div>
                  <p className="font-semibold text-slate-900">{item.subject}</p>
                  <p className="mt-1 text-sm text-slate-500">Assigned {item.assignedDate}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                </div>
                <p className="text-sm text-slate-700">{item.dueDate}</p>
                <p className="text-sm text-slate-700">{item.teacher}</p>
                <Badge className={statusStyles[item.status]}>{item.status}</Badge>
                <p className="text-sm font-semibold text-slate-700">{item.priority}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Eye size={14} /> View
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                      <DialogTitle>{item.title}</DialogTitle>
                      <DialogDescription>{item.description}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-3 text-sm text-slate-600">
                      <p><span className="font-semibold text-slate-900">Subject:</span> {item.subject}</p>
                      <p><span className="font-semibold text-slate-900">Teacher:</span> {item.teacher}</p>
                      <p><span className="font-semibold text-slate-900">Assigned date:</span> {item.assignedDate}</p>
                      <p><span className="font-semibold text-slate-900">Due date:</span> {item.dueDate}</p>
                      <p><span className="font-semibold text-slate-900">Status:</span> {item.status}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
