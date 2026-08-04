import { Card } from "../ui/card";

type StatCardProps = {
  label: string;
  value: string;
  change?: string;
  accent?: string;
};

export function StatCard({ label, value, change, accent }: StatCardProps) {
  return (
    <Card className="border-slate-200 bg-white p-6">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">{value}</p>
      {change ? <p className={`mt-3 text-sm font-medium ${accent || "text-blue-600"}`}>{change}</p> : null}
    </Card>
  );
}
