import { PageShell } from "../../../components/common/page-shell";
import { Card } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { SectionTitle } from "../../../components/ui/section-title";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <PageShell>
      <main className="bg-slate-50">
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionTitle eyebrow="Contact" title="Talk to our team about your school’s next chapter." description="We’re here to help you design a rollout plan that feels calm and confident." />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="border-slate-200 bg-white p-8">
              <h3 className="text-2xl font-semibold text-slate-900">Send a message</h3>
              <div className="mt-6 space-y-4">
                <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" placeholder="Your name" />
                <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" placeholder="Work email" />
                <textarea className="min-h-32 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" placeholder="Tell us about your school" />
                <Button className="rounded-full">Submit inquiry</Button>
              </div>
            </Card>
            <div className="space-y-6">
              <Card className="border-slate-200 bg-white p-8">
                <h3 className="text-xl font-semibold text-slate-900">Reach us</h3>
                <div className="mt-5 space-y-4 text-sm text-slate-600">
                  <div className="flex items-center gap-3"><Mail size={16} className="text-blue-600" /> hello@nextcampus.io</div>
                  <div className="flex items-center gap-3"><Phone size={16} className="text-blue-600" /> +1 800 555 0199</div>
                  <div className="flex items-center gap-3"><MapPin size={16} className="text-blue-600" /> 128 Harbor Avenue, Seattle, WA</div>
                </div>
              </Card>
              <Card className="border-slate-200 bg-slate-950 p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Visit</p>
                <p className="mt-4 text-2xl font-semibold">Map preview will appear here</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">A beautiful embedded experience can be dropped in here once your preferred maps provider is connected.</p>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
