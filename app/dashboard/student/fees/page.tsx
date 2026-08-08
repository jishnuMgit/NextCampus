"use client";

import { useState } from "react";
import { Receipt, Eye, FileText } from "lucide-react";
import { StudentPageShell } from "../../../../components/dashboard/student/student-page-shell";
import { StatCard } from "../../../../components/dashboard/stat-card";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../../../components/ui/dialog";
import { academicYears, feeBreakdown, feeSummary, paymentHistory } from "../../../../lib/data/student/fees";

const statusStyles: Record<string, string> = {
  Paid: "bg-emerald-50 text-emerald-700",
  "Partially Paid": "bg-amber-50 text-amber-700",
  Pending: "bg-slate-100 text-slate-700",
  Overdue: "bg-rose-50 text-rose-700",
};

export default function StudentFeesPage() {
  const [selectedYear, setSelectedYear] = useState(academicYears[1]);

  return (
    <StudentPageShell title="Fees" description="Review your fee statements, balances, and payment records.">
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Academic year</p>
          <h3 className="text-xl font-semibold text-slate-900">{selectedYear}</h3>
        </div>
        <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
          <FileText size={16} />
          <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className="bg-transparent outline-none">
            {academicYears.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total fees" value={`$${feeSummary.totalFees.toLocaleString()}`} change="Academic year" accent="text-blue-600" />
        <StatCard label="Paid" value={`$${feeSummary.paid.toLocaleString()}`} change="On track" accent="text-emerald-600" />
        <StatCard label="Pending" value={`$${feeSummary.pending.toLocaleString()}`} change="Due soon" accent="text-amber-600" />
        <StatCard label="Overdue" value={`$${feeSummary.overdue.toLocaleString()}`} change="Urgent" accent="text-rose-600" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-slate-200 bg-white p-0">
          <CardContent>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Fee breakdown</p>
                <h3 className="text-xl font-semibold text-slate-900">Current dues</h3>
              </div>
              <Badge className="bg-slate-100 text-slate-700">Due {feeSummary.dueDate}</Badge>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="hidden md:grid grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_0.8fr_0.7fr] bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600">
                <span>Fee type</span>
                <span>Amount</span>
                <span>Paid</span>
                <span>Balance</span>
                <span>Due date</span>
                <span>Status</span>
              </div>
              {feeBreakdown.map((item) => (
                <div key={item.id} className="grid gap-3 border-t border-slate-200 px-4 py-4 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_0.8fr_0.7fr]">
                  <div>
                    <p className="font-semibold text-slate-900">{item.feeType}</p>
                  </div>
                  <p className="text-sm text-slate-700">${item.amount.toLocaleString()}</p>
                  <p className="text-sm text-slate-700">${item.paid.toLocaleString()}</p>
                  <p className="text-sm text-slate-700">${item.balance.toLocaleString()}</p>
                  <p className="text-sm text-slate-700">{item.dueDate}</p>
                  <Badge className={statusStyles[item.status]}>{item.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-slate-200 bg-white p-0">
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">Payment history</p>
                  <h3 className="text-xl font-semibold text-slate-900">Recent transactions</h3>
                </div>
                <Receipt size={18} className="text-slate-400" />
              </div>
              <div className="mt-5 space-y-3">
                {paymentHistory.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <div>
                      <p className="font-semibold text-slate-900">{payment.date}</p>
                      <p className="text-sm text-slate-500">{payment.reference}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900">${payment.amount.toLocaleString()}</p>
                      <p className="text-sm text-slate-500">{payment.method}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white p-0">
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">Fee details</p>
                  <h3 className="text-xl font-semibold text-slate-900">Statement summary</h3>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Eye size={14} /> View
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                      <DialogTitle>Fee statement preview</DialogTitle>
                      <DialogDescription>Invoice and receipt details will appear here once connected to the ERP backend.</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-3 text-sm text-slate-600">
                      <p><span className="font-semibold text-slate-900">Student:</span> Maya Thompson</p>
                      <p><span className="font-semibold text-slate-900">Academic year:</span> {selectedYear}</p>
                      <p><span className="font-semibold text-slate-900">Outstanding balance:</span> ${feeSummary.pending.toLocaleString()}</p>
                      <p><span className="font-semibold text-slate-900">Due date:</span> {feeSummary.dueDate}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="mt-5 space-y-3 text-sm text-slate-600">
                <p><span className="font-semibold text-slate-900">Student:</span> Maya Thompson</p>
                <p><span className="font-semibold text-slate-900">Class:</span> Grade 10</p>
                <p><span className="font-semibold text-slate-900">Division:</span> B</p>
                <p><span className="font-semibold text-slate-900">Outstanding balance:</span> ${feeSummary.pending.toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </StudentPageShell>
  );
}
