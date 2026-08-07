import { TrendingUp, WalletCards, CalendarDays, MessageSquare } from "lucide-react";
import { Card, CardContent } from "../../ui/card";

export function OverviewGrid() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
      <Card className="border-slate-200/80 bg-white/80 p-0 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.35)] backdrop-blur">
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Student growth</p>
              <h3 className="text-xl font-semibold text-slate-900">Enrollment momentum</h3>
            </div>
            <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
              +12.4%
            </div>
          </div>
          <div className="mt-6 h-64" />
        </CardContent>
      </Card>

      <Card className="border-slate-200/80 bg-white/80 p-0 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.35)] backdrop-blur">
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Quick actions</p>
              <h3 className="text-xl font-semibold text-slate-900">Stay ahead</h3>
            </div>
            <TrendingUp size={18} className="text-slate-400" />
          </div>
          <div className="mt-6 space-y-3">
            {[
              { title: "Review fee reports", icon: WalletCards },
              { title: "Open academic calendar", icon: CalendarDays },
              { title: "Message faculty", icon: MessageSquare },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <div className="rounded-xl bg-blue-50 p-2 text-blue-600"><Icon size={16} /></div>
                  <p className="font-semibold text-slate-900">{item.title}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
