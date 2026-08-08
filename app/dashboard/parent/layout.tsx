
"use client";

import { Sidebar } from "@/components/dashboard/sidebar";

import { Plus_Jakarta_Sans } from "next/font/google";
import "../../globals.css";
import {
  BarChart3,
  CalendarDays,
  ClipboardList,
  GraduationCap,
  ScrollText,
  Settings,
  Users2,
  WalletCards,
} from "lucide-react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});
const parentItems = [
  { href: "/dashboard/parent", label: "Dashboard", icon: GraduationCap },
  { href: "/dashboard/parent/attendance", label: "Attendance", icon: CalendarDays },
  { href: "/dashboard/parent/homework", label: "Homework", icon: ScrollText },
  { href: "/dashboard/parent/fees", label: "Fees", icon: WalletCards },
  { href: "/dashboard/parent/Report", label: "Reports", icon: BarChart3 },
];
const parentItems1 = [
  { href: "/dashboard/parent", label: "Dashboard", icon: GraduationCap },
  { href: "/dashboard/parent/attendance", label: "Attendance", icon: CalendarDays },
  { href: "/dashboard/parent/homework", label: "Homework", icon: ScrollText },
  { href: "/dashboard/parent/fees", label: "Fees", icon: WalletCards },
];

export default function parentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${jakarta.className} flex min-h-screen`}>
      <Sidebar items={parentItems} items1={parentItems1} title="Parent Portal" />

      <main className="flex-1 pb-24 md:ml-30 lg:ml-80">
        {children}
      </main>
    </div>
  );
}