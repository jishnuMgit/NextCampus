"use client";

import { BarChart3, CalendarDays, GraduationCap, MessageSquare, Settings, Users2, WalletCards } from "lucide-react";
import { Sidebar } from "../../../components/dashboard/sidebar";
import { Topbar } from "../../../components/dashboard/topbar";
import { StatCard } from "../../../components/dashboard/stat-card";
import { WidgetGrid } from "../../../components/dashboard/widget-grid";

const managementItems = [
  { href: "/dashboard/management", label: "Dashboard", icon: GraduationCap },
  { href: "/dashboard/management/students", label: "Students", icon: Users2 },
  { href: "/dashboard/management/teachers", label: "Teachers", icon: GraduationCap },
  { href: "/dashboard/management/attendance", label: "Attendance", icon: CalendarDays },
  { href: "/dashboard/management/fees", label: "Fees", icon: WalletCards },
  { href: "/dashboard/management/reports", label: "Reports", icon: BarChart3 },
  { href: "/dashboard/management/settings", label: "Settings", icon: Settings },
];

export default function ManagementDashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar items={managementItems} title="Management ERP" />
      <div className="flex-1">
        <Topbar title="Operations overview" />
        <main className="space-y-6 p-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <StatCard label="Total students" value="12,840" change="+8.2% vs last term" accent="text-blue-600" />
            <StatCard label="Total teachers" value="684" change="24 new hires" accent="text-violet-600" />
            <StatCard label="Fee collection" value="$1.84M" change="92% this quarter" accent="text-emerald-600" />
            <StatCard label="Attendance" value="97.2%" change="Steady across campuses" accent="text-amber-600" />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <WidgetGrid title="Recent activities">
              {[
                { title: "New admissions", text: "184 applicants moved to review" },
                { title: "Payroll synced", text: "Salary runs completed for all campuses" },
                { title: "Library inventory", text: "280 resources updated this week" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-500">{item.text}</p>
                </div>
              ))}
            </WidgetGrid>
            <WidgetGrid title="Quick actions">
              {[
                { title: "Review fee reports", icon: WalletCards },
                { title: "Open academic calendar", icon: CalendarDays },
                { title: "Message faculty", icon: MessageSquare },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <div className="rounded-xl bg-blue-50 p-2 text-blue-600"><Icon size={16} /></div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                  </div>
                );
              })}
            </WidgetGrid>
          </div>
        </main>
      </div>
    </div>
  );
}
