"use client";

import { ChevronLeft, ChevronRight, CalendarClock } from "lucide-react";
import { StudentPageShell } from "../../../../components/dashboard/student/student-page-shell";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { weekLabel, weeklyTimetable } from "../../../../lib/data/student/timetable";

const today = "Thursday";

export default function StudentTimetablePage() {
  return (
    <StudentPageShell title="Timetable" description="View your weekly schedule and manage your class flow with ease.">
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Current week</p>
          <h3 className="text-xl font-semibold text-slate-900">{weekLabel}</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="rounded-full">
            <ChevronLeft size={16} />
            Prev
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Next
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>

      <div className="hidden gap-4 xl:grid xl:grid-cols-2 2xl:grid-cols-3">
        {weeklyTimetable.map((day) => (
          <Card key={day.day} className={`border-slate-200 bg-white ${day.day === today ? "ring-2 ring-blue-200" : ""}`}>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-slate-900">{day.day}</p>
                  <p className="text-sm text-slate-500">{day.date}</p>
                </div>
                {day.day === today ? <Badge className="bg-blue-50 text-blue-700">Today</Badge> : null}
              </div>
              <div className="mt-5 space-y-3">
                {day.entries.map((entry) => (
                  <div key={`${day.day}-${entry.subject}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span>{entry.start} - {entry.end}</span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs font-medium text-slate-600">
                        <CalendarClock size={14} /> {entry.room}
                      </span>
                    </div>
                    <p className="mt-3 text-base font-semibold text-slate-900">{entry.subject}</p>
                    <p className="mt-1 text-sm text-slate-600">{entry.teacher}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-4 xl:hidden">
        {weeklyTimetable.map((day) => (
          <Card key={day.day} className={`border-slate-200 bg-white ${day.day === today ? "ring-2 ring-blue-200" : ""}`}>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-semibold text-slate-900">{day.day}</p>
                  <p className="text-sm text-slate-500">{day.date}</p>
                </div>
                {day.day === today ? <Badge className="bg-blue-50 text-blue-700">Today</Badge> : null}
              </div>
              <div className="mt-4 space-y-3">
                {day.entries.map((entry) => (
                  <div key={`${day.day}-${entry.subject}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span>{entry.start} - {entry.end}</span>
                      <span className="text-xs font-medium text-slate-600">{entry.room}</span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-slate-900">{entry.subject}</p>
                    <p className="mt-1 text-sm text-slate-600">{entry.teacher}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </StudentPageShell>
  );
}
