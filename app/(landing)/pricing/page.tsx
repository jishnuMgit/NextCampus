import { PageShell } from "../../../components/common/page-shell";
import { Card } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { SectionTitle } from "../../../components/ui/section-title";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const plans = [
  { name: "Starter", price: "$49", description: "For small schools that need a polished foundation.", features: ["500 students", "8 core modules", "Email support"], featured: false },
  { name: "Professional", price: "$129", description: "For ambitious institutions seeking deeper visibility.", features: ["Unlimited modules", "Advanced analytics", "Priority onboarding"], featured: true },
  { name: "Enterprise", price: "Custom", description: "For multi-campus groups with governance and compliance requirements.", features: ["Dedicated partner", "Security reviews", "Custom integrations"], featured: false },
];

export default function PricingPage() {
  return (
    <PageShell>
      <main className="bg-slate-50">
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionTitle eyebrow="Pricing" title="Choose a plan that scales with your school." description="Flexible pricing for early-stage institutions and large operational networks alike." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.name} className={`border-slate-200 bg-white p-8 ${plan.featured ? "border-blue-500 shadow-[0_20px_80px_-30px_rgba(37,99,235,0.45)]" : ""}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
                  {plan.featured ? <Badge className="bg-blue-50 text-blue-700">Most popular</Badge> : null}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{plan.description}</p>
                <p className="mt-6 text-4xl font-semibold text-slate-950">{plan.price}</p>
                <p className="text-sm text-slate-500">per month</p>
                <ul className="mt-8 space-y-3 text-sm text-slate-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-600" />{feature}</li>
                  ))}
                </ul>
                <Button className="mt-8 w-full rounded-full" variant={plan.featured ? "primary" : "secondary"}>
                  <Link href="/register">Choose plan</Link>
                </Button>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
