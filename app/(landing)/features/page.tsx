import { PageShell } from "../../../components/common/page-shell";
import { Card, CardContent } from "../../../components/ui/card";
import { SectionTitle } from "../../../components/ui/section-title";
import { BookOpen, CalendarDays, GraduationCap, Layers3, MessageSquare, ShieldCheck, Sparkles, Users2 } from "lucide-react";

const features = [
  { title: "Student portal", icon: Users2, text: "Access classes, assignments, results, and fee visibility in a single hub." },
  { title: "Teacher workspace", icon: GraduationCap, text: "Organize attendance, grading, homework, and communication from one dashboard." },
  { title: "Attendance insights", icon: CalendarDays, text: "See trends, punctuality, and daily participation with a glance." },
  { title: "Fee management", icon: ShieldCheck, text: "Monitor payment status and automate reminders with elegant workflows." },
  { title: "Library system", icon: BookOpen, text: "Track circulation, renewals, and lending history in style." },
  { title: "Communication center", icon: MessageSquare, text: "Coordinate families, faculty, and administration instinctively." },
  { title: "Transport coordination", icon: Layers3, text: "Manage routes and updates without sacrificing clarity." },
  { title: "Analytics layer", icon: Sparkles, text: "Surface school-wide trends and strategic reporting instantly." },
];

export default function FeaturesPage() {
  return (
    <PageShell>
      <main className="bg-slate-50">
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionTitle eyebrow="Features" title="A beautifully layered school ERP experience." description="Each module is designed to feel polished, simple, and useful from day one." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-slate-200 bg-white p-0">
                  <CardContent>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-slate-900">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{feature.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
