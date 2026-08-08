import { CalendarDays, ClipboardList, GraduationCap, ScrollText, WalletCards } from "lucide-react";
import { Sidebar } from "../sidebar";
import { Topbar } from "../topbar";

const studentItems = [
  { href: "/dashboard/student", label: "Dashboard", icon: GraduationCap },
  { href: "/dashboard/student/attendance", label: "Attendance", icon: CalendarDays },
  { href: "/dashboard/student/timetable", label: "Timetable", icon: ClipboardList },
  { href: "/dashboard/student/homework", label: "Homework", icon: ScrollText },
  { href: "/dashboard/student/fees", label: "Fees", icon: WalletCards },
];

type StudentPageShellProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function StudentPageShell({ title, description, children }: StudentPageShellProps) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar items={studentItems} title="Student Portal" />
      <div className="flex-1 pb-24">
        <Topbar title={title} />
        <main className="space-y-6 p-4 sm:p-6 lg:p-8">
          {description ? (
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-slate-500">{description}</p>
            </div>
          ) : null}
          {children}
        </main>
      </div>
    </div>
  );
}
