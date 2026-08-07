"use client";

import { motion } from "framer-motion";
import {
  Bell,
  BookOpenCheck,
  CalendarDays,
  CircleDollarSign,
  Clock3,
  MessageSquare,
  Sparkles,
  TrendingUp,
  WalletCards,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Topbar } from "../../../components/dashboard/topbar";
import { StatCard } from "../../../components/dashboard/stat-card";
import { WidgetGrid } from "../../../components/dashboard/widget-grid";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const growthData = [
  { month: "Jan", students: 1180 },
  { month: "Feb", students: 1220 },
  { month: "Mar", students: 1285 },
  { month: "Apr", students: 1330 },
  { month: "May", students: 1390 },
  { month: "Jun", students: 1450 },
];

const feeData = [
  { month: "Jan", collected: 84 },
  { month: "Feb", collected: 91 },
  { month: "Mar", collected: 88 },
  { month: "Apr", collected: 96 },
  { month: "May", collected: 102 },
  { month: "Jun", collected: 110 },
];

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

export default function ManagementDashboardPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_38%),linear-gradient(180deg,#f8fbff_0%,#f4f7fb_100%)]">
      <div className="flex-1">
        <Topbar title="Management overview" />
        <main className="space-y-6 p-4 sm:p-6 lg:p-8">
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden rounded-[32px] border border-slate-200/80 bg-slate-950 p-6 text-white shadow-[0_30px_90px_-36px_rgba(15,23,42,0.85)]"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-sm font-medium text-sky-300">
                  <Sparkles size={16} />
                  Premium school operations at a glance
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Every campus metric, beautifully organized.
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                  Track admissions, attendance, fee collection, and school communication from one refined workspace.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary" className="rounded-full bg-white/10 text-white hover:bg-white/20">
                  <CalendarDays size={16} />
                  View schedule
                </Button>
                <Button variant="secondary" className="rounded-full bg-sky-500 text-white hover:bg-sky-400">
                  <Bell size={16} />
                  New alerts
                </Button>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-300">Today’s attendance</p>
                  <div className="rounded-xl bg-emerald-500/20 p-2 text-emerald-300"><Clock3 size={16} /></div>
                </div>
                <p className="mt-4 text-3xl font-semibold">94.8%</p>
                <p className="mt-2 text-sm text-slate-400">Above target for the week</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-300">Revenue pace</p>
                  <div className="rounded-xl bg-sky-500/20 p-2 text-sky-300"><CircleDollarSign size={16} /></div>
                </div>
                <p className="mt-4 text-3xl font-semibold">$184k</p>
                <p className="mt-2 text-sm text-slate-400">+14% from last month</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-300">Pending approvals</p>
                  <div className="rounded-xl bg-violet-500/20 p-2 text-violet-300"><BookOpenCheck size={16} /></div>
                </div>
                <p className="mt-4 text-3xl font-semibold">27</p>
                <p className="mt-2 text-sm text-slate-400">Admissions and fee updates</p>
              </div>
            </div>
          </motion.section>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <StatCard label="Total students" value="12,840" change="+8.2% vs last term" accent="text-blue-600" />
            <StatCard label="Total teachers" value="684" change="24 new hires" accent="text-violet-600" />
            <StatCard label="Monthly revenue" value="$1.84M" change="92% this quarter" accent="text-emerald-600" />
            <StatCard label="Pending fees" value="$48.2K" change="17 invoices due" accent="text-amber-600" />
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
            <Card className="border-slate-200/80 bg-white/80 p-0 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.35)] backdrop-blur">
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Student growth</p>
                    <h3 className="text-xl font-semibold text-slate-900">Enrollment momentum</h3>
                  </div>
                  <Badge className="bg-emerald-50 text-emerald-700">+12.4%</Badge>
                </div>
                <div className="mt-6 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={growthData}>
                      <defs>
                        <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2563eb" stopOpacity={0.35} />
                          <stop offset="95%" stopColor="#2563eb" stopOpacity={0.03} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
                      <Tooltip />
                      <Area type="monotone" dataKey="students" stroke="#2563eb" strokeWidth={3} fill="url(#colorStudents)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200/80 bg-white/80 p-0 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.35)] backdrop-blur">
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Quick actions</p>
                    <h3 className="text-xl font-semibold text-slate-900">Stay ahead</h3>
                  </div>
                  <TrendingUp size={18} className="text-slate-400" />
                </div>
                <div className="mt-6 space-y-3">
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
                </div>
              </CardContent>
            </Card>
          </div>

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
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
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

            <Card className="border-slate-200/80 bg-white/80 p-0 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.35)] backdrop-blur">
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Fee collection</p>
                    <h3 className="text-xl font-semibold text-slate-900">Collection outlook</h3>
                  </div>
                  <Badge className="bg-violet-50 text-violet-700">Healthy</Badge>
                </div>
                <div className="mt-6 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={feeData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
                      <Tooltip />
                      <Bar dataKey="collected" radius={[8, 8, 0, 0]} fill="#8b5cf6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
