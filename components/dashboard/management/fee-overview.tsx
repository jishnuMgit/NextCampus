import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Badge } from "../../ui/badge";
import { Card, CardContent } from "../../ui/card";

const feeData = [
  { month: "Jan", collected: 84 },
  { month: "Feb", collected: 91 },
  { month: "Mar", collected: 88 },
  { month: "Apr", collected: 96 },
  { month: "May", collected: 102 },
  { month: "Jun", collected: 110 },
];

export function FeeOverview() {
  return (
    <Card className="border-slate-200/80 bg-white/80 p-0 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.35)] backdrop-blur">
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Fee collection</p>
            <h3 className="text-xl font-semibold text-slate-900">Collection outlook</h3>
          </div>
          <Badge className="bg-violet-50 text-violet-700">Healthy</Badge>
        </div>
        <div className="mt-6 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={feeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="collected" radius={[8, 8, 0, 0]} fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
