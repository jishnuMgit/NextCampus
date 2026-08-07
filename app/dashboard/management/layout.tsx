"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import "../../globals.css";
import { Sidebar } from "@/components/dashboard/sidebar";
import {
  BarChart3,
  CalendarDays,
  GraduationCap,
  Settings,
  Users2,
  WalletCards,
} from "lucide-react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const managementItems = [
  { href: "/dashboard/management", label: "Dashboard", icon: GraduationCap },
  { href: "/dashboard/management/students", label: "Students", icon: Users2 },
  { href: "/dashboard/management/teachers", label: "Teachers", icon: GraduationCap },
  { href: "/dashboard/management/attendance", label: "Attendance", icon: CalendarDays },
  { href: "/dashboard/management/fees", label: "Fees", icon: WalletCards },
  { href: "/dashboard/management/reports", label: "Reports", icon: BarChart3 },
  { href: "/dashboard/management/settings", label: "Settings", icon: Settings },
];

const managementItemsforphone = [
  { href: "/dashboard/management", label: "Dashboard", icon: GraduationCap },
  { href: "/dashboard/management/students", label: "Students", icon: Users2 },
  { href: "/dashboard/management/teachers", label: "Teachers", icon: GraduationCap },
  { href: "/dashboard/management/settings", label: "Settings", icon: Settings },
];

export default function ManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${jakarta.className} flex min-h-screen`}>
      <Sidebar items={managementItems} items1={managementItemsforphone} title="Management ERP" />

      <main className="flex-1 pb-24 md:ml-80">
        {children}
      </main>
    </div>
  );
}