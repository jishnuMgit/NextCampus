
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
const studentItems = [
  { href: "/dashboard/student", label: "Dashboard", icon: GraduationCap },
  { href: "/dashboard/student/attendance", label: "Attendance", icon: CalendarDays },
  { href: "/dashboard/student/timetable", label: "Timetable", icon: ClipboardList },
  { href: "/dashboard/student/homework", label: "Homework", icon: ScrollText },
  { href: "/dashboard/student/fees", label: "Fees", icon: WalletCards },
];
const studentItems1 = [
  { href: "/dashboard/student", label: "Dashboard", icon: GraduationCap },
  { href: "/dashboard/student/attendance", label: "Attendance", icon: CalendarDays },
  { href: "/dashboard/student/timetable", label: "Timetable", icon: ClipboardList },
  { href: "/dashboard/student/homework", label: "Homework", icon: ScrollText },
];

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${jakarta.className} flex min-h-screen`}>
      <Sidebar items={studentItems} items1={studentItems1} title="Student Portal" />

      <main className="flex-1 pb-24 md:ml-30 lg:ml-80">
        {children}
      </main>
    </div>
  );
}