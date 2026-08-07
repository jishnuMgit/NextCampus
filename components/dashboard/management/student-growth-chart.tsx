import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Badge } from "../../ui/badge";
import { Card, CardContent } from "../../ui/card";

const growthData = [
  { month: "Jan", students: 1180 },
  { month: "Feb", students: 1220 },
  { month: "Mar", students: 1285 },
  { month: "Apr", students: 1330 },
  { month: "May", students: 1390 },
  { month: "Jun", students: 1450 },
];

export function StudentGrowthChart() {
  return (
    <Card className="border-slate-200/80 bg-white/80 p-0 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.35)] backdrop-blur">
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Student growth</p>
            <h3 className="text-xl font-semibold text-slate-900">Enrollment momentum</h3>
          </div>
          <Badge className="bg-emerald-50 text-emerald-700">+12.4%</Badge>
        </div>
        <div className="mt-6 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={growthData}>
              <defs>
                <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0.03} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
              <Tooltip />
              <Area type="monotone" dataKey="students" stroke="#2563eb" strokeWidth={3} fill="url(#colorStudents)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
