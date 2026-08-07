"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Sparkles } from "lucide-react";

import { cn } from "../ui/cn";
import LogoutButton from "../auth/logout";

type SidebarProps = {
  items: Array<{
    href: string;
    label: string;
    icon: typeof LayoutGrid;
  }>;
  items1?: Array<{
    href: string;
    label: string;
    icon: typeof LayoutGrid;
  }>;
  title: string;
};

export function Sidebar({ items, items1, title }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* ================= Desktop / Tablet Sidebar ================= */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 hidden border-r border-slate-800 bg-slate-950 text-slate-200 md:flex flex-col",
          "w-20 lg:w-72",
          "transition-all duration-300"
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 border-b border-slate-800 px-5 py-6">
          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 p-2 text-white shadow-lg">
            <Sparkles size={20} />
          </div>

          <div className="hidden lg:block">
            <p className="text-lg font-semibold text-white">{title}</p>
            <p className="text-xs text-slate-400">
              School ERP Management
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-3 py-5">
          <div className="space-y-2">
            {items.map((item) => {
              const Icon = item.icon;

              const active =
                pathname === item.href ||
                pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group flex items-center rounded-xl transition-all duration-200",
                    "h-12",
                    "justify-center lg:justify-start",
                    "px-0 lg:px-4",
                    active
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" />

                  <span className="ml-3 hidden lg:block truncate">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Logout */}
        <div className="border-t border-slate-800 p-4">
          <LogoutButton />
        </div>
      </aside>

      {/* ================= Mobile Bottom Navigation ================= */}
      <nav
        className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-800 bg-slate-950/95 backdrop-blur md:hidden"
        aria-label="Mobile Navigation"
      >
        <div className="grid grid-cols-4 overflow-x-auto">
          {(items1 ?? items).map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 py-3 transition",
                  active
                    ? "text-blue-400"
                    : "text-slate-400 hover:text-white"
                )}
              >
                <Icon size={20} />

                <span className="max-w-[70px] truncate text-[11px]">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}