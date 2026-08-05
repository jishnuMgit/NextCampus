import { PageShell } from "../../../components/common/page-shell";
import { Card, CardContent } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { SectionTitle } from "../../../components/ui/section-title";
import { ArrowRight, Compass, HeartHandshake, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";
import { connectDB } from "@/lib/mongodb";

const values = [
  { title: "Clarity", text: "Every workflow is designed to feel effortless for educators and families." },
  { title: "Care", text: "Student wellbeing and parent trust are at the center of every screen." },
  { title: "Momentum", text: "Fast-moving schools need tools that support growth without complexity." },
];

const timeline = [
  { year: "2019", title: "Founded", text: "Born from a desire to modernize school administration with premium software." },
  { year: "2022", title: "Expanded", text: "Scaled from a handful of pilot schools to a national education platform." },
  { year: "2026", title: "Now", text: "Powering modern institutions with elegant, flexible operations." },
];


const connectToDatabase = async () => {
  try {
    await connectDB();  
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }

};

connectToDatabase();

export default function AboutPage() {
  return (
    <PageShell>
      <main className="bg-slate-50">
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Badge className="rounded-full bg-blue-50 text-blue-700">About NextCampus</Badge>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">We build the operating system for modern schools.</h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">Our mission is to make every school feel more connected, more visible, and more efficient through thoughtful software design.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/demo" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white">See the product <ArrowRight size={16} /></Link>
                <Link href="/contact" className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700">Contact team</Link>
              </div>
            </div>
            <Card className="border-slate-200 bg-white p-8">
              <div className="flex gap-4">
                <div className="rounded-2xl bg-blue-50 p-3 text-blue-600"><Compass size={20} /></div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Mission</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">Create a calm, elegant platform that helps education teams focus on people instead of fragmented admin work.</p>
                </div>
              </div>
              <div className="mt-6 flex gap-4">
                <div className="rounded-2xl bg-violet-50 p-3 text-violet-600"><Rocket size={20} /></div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Vision</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">Build the future of education operations with clarity, trust, and measurable impact at every level.</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionTitle eyebrow="Journey" title="A thoughtful path from idea to impact." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {timeline.map((item) => (
              <Card key={item.year} className="border-slate-200 bg-white p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">{item.year}</p>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionTitle eyebrow="Values" title="The principles behind every experience." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="border-slate-200 bg-white p-8">
                <div className="rounded-2xl bg-slate-100 p-3 text-slate-700"><HeartHandshake size={20} /></div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{value.text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Card className="border-slate-200 bg-gradient-to-br from-slate-950 to-slate-800 p-10 text-white">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Our team</p>
                <h3 className="mt-4 text-3xl font-semibold">Crafted by product designers, educators, and builders.</h3>
                <p className="mt-4 text-sm leading-8 text-slate-300">We combine design craftsmanship with practical school workflows so the platform feels as good as it performs.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { name: "Nadia Chen", role: "Head of Product" },
                  { name: "Marcus Hale", role: "Design Lead" },
                  { name: "Leila Ford", role: "Implementation Lead" },
                  { name: "Owen Brooks", role: "Customer Success" },
                ].map((member) => (
                  <div key={member.name} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="font-semibold text-white">{member.name}</p>
                    <p className="mt-1 text-sm text-slate-300">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>
      </main>
    </PageShell>
  );
}
