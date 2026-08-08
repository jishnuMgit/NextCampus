"use client";

import { Sidebar } from "@/components/dashboard/sidebar";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../../globals.css";
import { CalendarDays, ClipboardList, GraduationCap, FileText, MessageSquare,UserRound } from "lucide-react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const teacherItems = [
  { href: "/dashboard/teacher", label: "Dashboard", icon: GraduationCap },
  { href: "/dashboard/teacher/classes", label: "My Classes", icon: ClipboardList },
  { href: "/dashboard/teacher/attendance", label: "Attendance", icon: CalendarDays },
  { href: "/dashboard/teacher/homework", label: "Homework", icon: FileText },
  { href: "/dashboard/teacher/messages", label: "Messages", icon: MessageSquare },
  { href: "/dashboard/teacher/students", label: "Students", icon: UserRound },
];

const teacherItems1 = [
  { href: "/dashboard/teacher", label: "Dashboard", icon: GraduationCap },
  { href: "/dashboard/teacher/classes", label: "My Classes", icon: ClipboardList },
  { href: "/dashboard/teacher/attendance", label: "Attendance", icon: CalendarDays },
  { href: "/dashboard/teacher/homework", label: "Homework", icon: FileText },
//   { href: "/dashboard/teacher/marksReport", label: "Marks", icon: FileText },
];

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${jakarta.className} flex min-h-screen`}>
      <Sidebar items={teacherItems} items1={teacherItems1} title="Teacher Portal" />

      <main className="flex-1 pb-24 md:ml-30 lg:ml-80">
        {children}
      </main>
    </div>
  );
}
