"use client";

import { Topbar } from "../../../components/dashboard/topbar";
import { StatCard } from "../../../components/dashboard/stat-card";
import { DashboardHero } from "../../../components/dashboard/management/dashboard-hero";
import { OverviewGrid } from "../../../components/dashboard/management/overview-grid";
import { InsightPanels } from "../../../components/dashboard/management/insight-panels";
import { FeeOverview } from "../../../components/dashboard/management/fee-overview";
import { StudentGrowthChart } from "../../../components/dashboard/management/student-growth-chart";

export default function ManagementDashboardPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_38%),linear-gradient(180deg,#f8fbff_0%,#f4f7fb_100%)]">
      <div className="flex-1">
        <Topbar title="Management overview" />
        <main className="space-y-6 p-4 sm:p-6 lg:p-8">
          <DashboardHero />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <StatCard label="Total students" value="12,840" change="+8.2% vs last term" accent="text-blue-600" />
            <StatCard label="Total teachers" value="684" change="24 new hires" accent="text-violet-600" />
            <StatCard label="Monthly revenue" value="$1.84M" change="92% this quarter" accent="text-emerald-600" />
            <StatCard label="Pending fees" value="$48.2K" change="17 invoices due" accent="text-amber-600" />
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
            <StudentGrowthChart />
            <OverviewGrid />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <InsightPanels />
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="lg:col-span-2">
              <FeeOverview />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
