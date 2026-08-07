"use client";

import {
  School,
  GraduationCap,
  ShieldCheck,
  Users,
  Bell,
  CreditCard,
  Database,
  Palette,
  CalendarDays,
  BookOpen,
  ArrowRight,
} from "lucide-react";

import Link from "next/link";
import { Topbar } from "@/components/dashboard/topbar";
import { Card, CardContent } from "@/components/ui/card";

const settings = [
  {
    title: "School Profile",
    description: "School information, logo and address.",
    href: "/dashboard/management/settings/school",
    icon: School,
  },
  {
    title: "Academic Settings",
    description: "Academic year, classes and sections.",
    href: "/dashboard/management/settings/academic",
    icon: GraduationCap,
  },
  {
    title: "Users & Roles",
    description: "Manage administrators and staff.",
    href: "/dashboard/management/settings/users",
    icon: Users,
  },
  {
    title: "Permissions",
    description: "Configure role based access.",
    href: "/dashboard/management/settings/permissions",
    icon: ShieldCheck,
  },
  {
    title: "Attendance",
    description: "Attendance rules and timings.",
    href: "/dashboard/management/settings/attendance",
    icon: CalendarDays,
  },
  {
    title: "Fees",
    description: "Fee structure and payment settings.",
    href: "/dashboard/management/settings/fees",
    icon: CreditCard,
  },
  {
    title: "Examinations",
    description: "Exam grading and result configuration.",
    href: "/dashboard/management/settings/examination",
    icon: BookOpen,
  },
  {
    title: "Notifications",
    description: "Email, SMS and Push notifications.",
    href: "/dashboard/management/settings/notifications",
    icon: Bell,
  },
  {
    title: "Backup & Restore",
    description: "Database backup and recovery.",
    href: "/dashboard/management/settings/backup",
    icon: Database,
  },
  {
    title: "Appearance",
    description: "Theme, branding and logo.",
    href: "/dashboard/management/settings/appearance",
    icon: Palette,
  },
];

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-slate-50">

      <Topbar
        title="Settings"
        // subtitle="Configure every part of your School ERP."
      />

      <main className="space-y-8 p-4 sm:p-6 lg:p-8">

        <div>

          <h1 className="text-3xl font-bold">
            System Settings
          </h1>

          <p className="mt-2 text-slate-500">
            Manage school configuration, permissions,
            academic settings, integrations and security.
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {settings.map((item) => {

            const Icon = item.icon;

            return (

              <Link
                key={item.title}
                href={item.href}
              >

                <Card className="h-full cursor-pointer transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">

                  <CardContent className="p-6">

                    <div className="flex items-center justify-between">

                      <div className="rounded-2xl bg-blue-100 p-4">

                        <Icon
                          size={28}
                          className="text-blue-600"
                        />

                      </div>

                      <ArrowRight
                        size={20}
                        className="text-slate-400"
                      />

                    </div>

                    <h2 className="mt-6 text-xl font-semibold">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>

                  </CardContent>

                </Card>

              </Link>

            );

          })}

        </div>

      </main>

    </div>
  );
}