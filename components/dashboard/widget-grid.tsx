import { Card, CardContent } from "../ui/card";

type WidgetGridProps = {
  title: string;
  children: React.ReactNode;
};

export function WidgetGrid({ title, children }: WidgetGridProps) {
  return (
    <Card className="border-slate-200 bg-white p-0">
      <CardContent>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <div className="mt-6 space-y-4">{children}</div>
      </CardContent>
    </Card>
  );
}
