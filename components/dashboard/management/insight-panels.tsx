import { Bell } from "lucide-react";
import { WidgetGrid } from "../widget-grid";
import { Badge } from "../../ui/badge";

const admissions = [
  { name: "Ava Patel", className: "Grade 10", status: "Approved" },
  { name: "Noah Chen", className: "Grade 8", status: "Review" },
  { name: "Maya Singh", className: "Grade 12", status: "Approved" },
];

const payments = [
  { name: "Liam Carter", amount: "$540", time: "2m ago" },
  { name: "Sara Khan", amount: "$320", time: "12m ago" },
  { name: "Jude Alvarez", amount: "$780", time: "34m ago" },
];

const notifications = [
  { title: "Fee reminder", detail: "2 pending invoices for Grade 9" },
  { title: "Parent meeting", detail: "Scheduled for Friday at 4:00 PM" },
  { title: "Exam prep", detail: "Science lab review shared to all teachers" },
];

export function InsightPanels() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <WidgetGrid title="Recent admissions">
        {admissions.map((item) => (
          <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div>
              <p className="font-semibold text-slate-900">{item.name}</p>
              <p className="text-sm text-slate-500">{item.className}</p>
            </div>
            <Badge className="bg-blue-50 text-blue-700">{item.status}</Badge>
          </div>
        ))}
      </WidgetGrid>

      <WidgetGrid title="Recent payments">
        {payments.map((item) => (
          <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div>
              <p className="font-semibold text-slate-900">{item.name}</p>
              <p className="text-sm text-slate-500">{item.time}</p>
            </div>
            <p className="text-sm font-semibold text-emerald-600">{item.amount}</p>
          </div>
        ))}
      </WidgetGrid>

      <WidgetGrid title="Notifications">
        {notifications.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div className="flex items-center gap-2">
              <Bell size={14} className="text-slate-500" />
              <p className="font-semibold text-slate-900">{item.title}</p>
            </div>
            <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
          </div>
        ))}
      </WidgetGrid>
    </div>
  );
}
