"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, CalendarDays, FileText, GraduationCap, LayoutGrid, MessageSquare, Settings, Sparkles, Users2 } from "lucide-react";
import { cn } from "../ui/cn";
import LogoutButton from "../auth/logout";

type SidebarProps = {
  items: Array<{ href: string; label: string; icon: typeof LayoutGrid }>;
  title: string;
};

export function Sidebar({ items, title }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="hidden h-screen w-72 flex-col border-r border-slate-200 bg-slate-950 px-6 py-8 text-slate-200 lg:flex">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 p-2 text-white">
          <Sparkles size={18} />
        </div>
        <div>
          <p className="text-lg font-semibold text-white">{title}</p>
          <p className="text-xs text-slate-400">Portal experience</p>
        </div>
      </div>

      <div className="mt-10 space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href || pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition",
                active ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/10 hover:text-white"
              )}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      <div className="mt-auto ">
        {/* <p className="text-sm font-semibold text-white">Need guidance?</p>
        <p className="mt-2 text-sm leading-7 text-slate-400">Use the live workspace to support students, teachers, and families with confidence.</p> */}
            <LogoutButton/>

      </div>
    </aside>
  );
}
