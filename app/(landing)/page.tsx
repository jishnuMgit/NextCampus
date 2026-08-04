"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, BarChart3, BookOpen, CalendarDays, CheckCircle2, GraduationCap, Layers3, ShieldCheck, Sparkles, Users2 } from "lucide-react";
import { PageShell } from "../../components/common/page-shell";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { SectionTitle } from "../../components/ui/section-title";

const trustedSchools = ["Greenfield Academy", "Northstar Prep", "Bright Path", "Lumen College", "Oakridge"];
const featureCards = [
  { title: "Student Management", icon: Users2, text: "Track admissions, guardians, and progress with calm clarity." },
  { title: "Teacher Management", icon: GraduationCap, text: "Schedule classes, monitor outcomes, and collaborate effortlessly." },
  { title: "Attendance", icon: CalendarDays, text: "Capture attendance instantly with intuitive daily workflows." },
  { title: "Fees", icon: ShieldCheck, text: "Automate invoicing, reminders, and payment visibility." },
  { title: "Library", icon: BookOpen, text: "Manage resources, circulation, and due dates in one place." },
  { title: "Transport", icon: Layers3, text: "Coordinate routes, transport logs, and parent alerts." },
  { title: "Hostel", icon: BadgeCheck, text: "Simplify room assignments, visits, and resident communications." },
  { title: "Exams", icon: CheckCircle2, text: "Build exam schedules and reporting without friction." },
  { title: "Results", icon: BarChart3, text: "Share gradebooks and performance insights instantly." },
  { title: "Payroll", icon: ShieldCheck, text: "Handle teacher payroll and staff pay runs cleanly." },
  { title: "Inventory", icon: Layers3, text: "Control assets, consumables, and procurement requests." },
  { title: "Analytics", icon: BarChart3, text: "Turn institutional data into action with live dashboards." },
];

const stats = [
  { label: "Students", value: "120k+" },
  { label: "Teachers", value: "8.4k" },
  { label: "Parents", value: "95k" },
  { label: "Schools", value: "480" },
  { label: "Attendance", value: "99.2%" },
  { label: "Revenue", value: "$18M" },
];

const testimonials = [
  {
    quote: "The experience feels premium, calm, and incredibly easy for our staff to adopt.",
    name: "Ava Morgan",
    role: "Principal, Greenfield Academy",
  },
  {
    quote: "We replaced three fragmented tools with one elegant operating system.",
    name: "Darius Khan",
    role: "Director, Northstar Prep",
  },
  {
    quote: "Parents finally have visibility without needing a dozen separate channels.",
    name: "Mina Patel",
    role: "Administrator, Bright Path",
  },
];

const plans = [
  { name: "Starter", price: "$49", description: "Perfect for growing schools that want a polished first ERP layer.", features: ["Up to 500 students", "Core modules", "Email support"] },
  { name: "Professional", price: "$129", description: "For multi-department teams that need operational depth and automation.", features: ["Unlimited modules", "Advanced analytics", "Priority onboarding"], featured: true },
  { name: "Enterprise", price: "Custom", description: "For large institutions that demand governance, security, and flexibility.", features: ["Dedicated success team", "Custom integrations", "Security review"] },
];

const faqs = [
  { question: "Is NextCampus suitable for both K-12 and higher education?", answer: "Yes. The experience is modular and designed for schools, colleges, and growing education groups." },
  { question: "Can we pilot it before full rollout?", answer: "Absolutely. Most institutions launch with a single campus or department and expand quickly." },
  { question: "Do you support parent communication tools?", answer: "Yes. Real-time announcements, reminders, and fee visibility are built in." },
];

export default function LandingPage() {
  return (
    <PageShell>
      <main className="overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.08),_transparent_45%),linear-gradient(120deg,_#f8fbff_0%,_#f8fafc_100%)]">
        <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="max-w-2xl">
            <Badge className="rounded-full bg-blue-50 px-4 py-2 text-blue-700">New • Unified school operations</Badge>
            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              School ERP for modern education.
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-600">
              Delight teachers, students, and parents with one calm, beautiful command center for academics, finance, communication, and operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full">
                <Link href="/register" className="flex items-center gap-2">Get started <ArrowRight size={16} /></Link>
              </Button>
              <Button size="lg" variant="secondary" className="rounded-full">
                <Link href="/demo">View product tour</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2"><ShieldCheck size={16} className="text-blue-600" /> SOC 2 ready</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2"><Sparkles size={16} className="text-violet-600" /> AI insights</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 19 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-slate-100 blur-3xl" />
            <Card className="relative overflow-hidden border-slate-200 bg-white/90 p-4 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Management Dashboard</p>
                    <h2 className="mt-1 text-2xl font-semibold">School pulse in one glance</h2>
                  </div>
                  <Badge className="border-white/20 bg-white/10 text-white">Live</Badge>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-sm text-slate-300">Attendance today</p>
                    <p className="mt-3 text-3xl font-semibold">97.8%</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-sm text-slate-300">Fee collection</p>
                    <p className="mt-3 text-3xl font-semibold">$182k</p>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/20 to-violet-500/20 p-4">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Admissions pipeline</span>
                    <span className="font-semibold text-white">+24%</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-white/15">
                    <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
                  </div>
                </div>
              </div>
            </Card>
            <div className="absolute -left-4 bottom-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
              <p className="text-sm text-slate-500">Parent portal</p>
              <p className="mt-1 font-semibold text-slate-900">Weekly homework synced</p>
            </div>
            <div className="absolute -right-4 top-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
              <p className="text-sm text-slate-500">Teacher insights</p>
              <p className="mt-1 font-semibold text-slate-900">3 pending reviews</p>
            </div>
          </motion.div>
        </section>

        <section className="border-y border-slate-200/80 bg-white/70 py-8">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 lg:px-8">
            {trustedSchools.map((school) => (
              <span key={school} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2">{school}</span>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionTitle eyebrow="Modules" title="Everything your institution needs, beautifully organized." description="Every module is crafted for clarity, speed, and an elevated admin experience." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div whileHover={{ y: -4, scale: 1.01 }} key={feature.title}>
                  <Card className="h-full border-slate-200/80 bg-white/80 p-0">
                    <CardContent>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                        <Icon size={20} />
                      </div>
                      <h3 className="mt-6 text-xl font-semibold text-slate-900">{feature.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{feature.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionTitle eyebrow="Why NextCampus" title="Designed for calm, modern school operations." description="From the first welcome email to daily admin rituals, every interaction is efficient and reassuring." />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="border-slate-200 bg-gradient-to-br from-slate-950 to-slate-800 p-8 text-white">
              <h3 className="text-2xl font-semibold">A premium operating layer for educators</h3>
              <div className="mt-8 space-y-4 text-sm text-slate-300">
                {[
                  "Unified views for parents, faculty, and leadership",
                  "Beautiful workflows that reduce training time",
                  "Reliable dashboards for financial and academic health",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 text-blue-400" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
            <div className="grid gap-6">
              {[
                { title: "Fewer fragmented tools", body: "Replace spreadsheets and disconnected systems with a single elegant workspace." },
                { title: "Contextual communication", body: "Send updates to the right stakeholders without the usual back-and-forth." },
                { title: "Future-ready visibility", body: "Monitor school performance with clear charts and executive reporting." },
              ].map((item) => (
                <Card key={item.title} className="border-slate-200 bg-white p-6">
                  <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionTitle eyebrow="Numbers" title="Trusted by growing schools worldwide." />
          <div className="mt-12 grid gap-6 md:grid-cols-3 xl:grid-cols-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="border-slate-200 bg-white p-6 text-center">
                <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionTitle eyebrow="Loved by schools" title="What schools say about the experience." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-slate-200 bg-white p-8">
                <p className="text-lg leading-8 text-slate-700">“{testimonial.quote}”</p>
                <div className="mt-6">
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionTitle eyebrow="Pricing" title="Flexible plans for every stage of school growth." />
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
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
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

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Card className="overflow-hidden border-slate-200 bg-white p-0">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-gradient-to-br from-blue-600 to-violet-600 p-10 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">Get started</p>
                <h3 className="mt-4 text-3xl font-semibold">Give your school a calmer, smarter operating system.</h3>
                <p className="mt-4 text-sm leading-7 text-blue-50">Book a guided walkthrough and see how NextCampus can support every department.</p>
                <Button variant="secondary" className="mt-8 rounded-full bg-white text-slate-900 hover:bg-slate-100">
                  <Link href="/contact">Talk to sales</Link>
                </Button>
              </div>
              <div className="p-10">
                <h4 className="text-2xl font-semibold text-slate-900">Frequently asked questions</h4>
                <div className="mt-8 space-y-4">
                  {faqs.map((faq) => (
                    <details key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <summary className="cursor-pointer font-medium text-slate-900">{faq.question}</summary>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </section>
      </main>
    </PageShell>
  );
}
