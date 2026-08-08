import { CalendarDays, ClipboardList, GraduationCap, ScrollText, WalletCards } from "lucide-react";
import { Sidebar } from "../sidebar";
import { Topbar } from "../topbar";

const parentItems = [
  { href: "/dashboard/parent", label: "Dashboard", icon: GraduationCap },
  { href: "/dashboard/parent/attendance", label: "Attendance", icon: CalendarDays },
  { href: "/dashboard/parent/timetable", label: "Timetable", icon: ClipboardList },
  { href: "/dashboard/parent/homework", label: "Homework", icon: ScrollText },
  { href: "/dashboard/parent/fees", label: "Fees", icon: WalletCards },
];

type ParentPageShellProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function ParentPageShell({ title, description, children }: ParentPageShellProps) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar items={parentItems} title="Parent Portal" />
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
