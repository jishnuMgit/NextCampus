"use client";

import { motion } from "framer-motion";
import { Bell, BookOpenCheck, CalendarDays, CircleDollarSign, Clock3, Sparkles } from "lucide-react";
import { Button } from "../../ui/button";

const highlights = [
  {
    title: "Today’s attendance",
    value: "94.8%",
    detail: "Above target for the week",
    icon: Clock3,
    accent: "text-emerald-300 bg-emerald-500/20",
  },
  {
    title: "Revenue pace",
    value: "$184k",
    detail: "+14% from last month",
    icon: CircleDollarSign,
    accent: "text-sky-300 bg-sky-500/20",
  },
  {
    title: "Pending approvals",
    value: "27",
    detail: "Admissions and fee updates",
    icon: BookOpenCheck,
    accent: "text-violet-300 bg-violet-500/20",
  },
];

export function DashboardHero() {
  return (
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
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-300">{item.title}</p>
                <div className={`rounded-xl p-2 ${item.accent}`}>
                  <Icon size={16} />
                </div>
              </div>
              <p className="mt-4 text-3xl font-semibold">{item.value}</p>
              <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
