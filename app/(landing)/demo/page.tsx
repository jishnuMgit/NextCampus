"use client";

import { useState } from "react";
import Link from "next/link";
import ReactPlayer from "react-player";
import { ArrowRight, PlayCircle } from "lucide-react";

import { PageShell } from "../../../components/common/page-shell";
import { Card } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { SectionTitle } from "../../../components/ui/section-title";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";

const gallery = [
  {
    title: "Student overview",
    description:
      "A calm, detail-rich student view showing attendance, homework, and fee activity.",
  },
  {
    title: "Teacher planner",
    description:
      "A focused day view for classes, marks, and scheduling.",
  },
  {
    title: "Leadership analytics",
    description:
      "Executive reporting with trend visibility and school health summaries.",
  },
];

export default function DemoPage() {
  const [open, setOpen] = useState(false);

  return (
    <PageShell>
      <main className="bg-slate-50">
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionTitle
            eyebrow="Demo"
            title="See the product in motion."
            description="A visual preview of the dashboards and customer experience that powers your school."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <Card className="border-slate-200 bg-gradient-to-br from-slate-950 to-slate-800 p-10 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                Product walkthrough
              </p>

              <h3 className="mt-4 text-3xl font-semibold">
                A polished demo experience for every stakeholder.
              </h3>

              <p className="mt-4 text-sm leading-8 text-slate-300">
                Explore a school community overview, classroom activity, and
                leadership reporting through a premium interface.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  variant="secondary"
                  className="rounded-full bg-white text-slate-900 hover:bg-slate-100"
                  asChild
                >
                  <Link href="/login">
                    Start free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Dialog  open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      className="rounded-full text-white hover:bg-white/10"
                    >
                      <PlayCircle className="mr-2 h-4 w-4" />
                      Watch short video
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-5xl border-0 bg-black p-0 overflow-hidden">
                    <DialogTitle className="sr-only">
                      Product Walkthrough Video
                    </DialogTitle>

                    <div className="aspect-video ">
                      <ReactPlayer
                        src="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                        controls
                        playing={open}
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>

            <Card className="border-slate-200 bg-white p-8">
              <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Video placeholder
                </p>

                <p className="mt-4 text-xl font-semibold text-slate-900">
                  Replace with your product walk-through video
                </p>
              </div>
            </Card>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {gallery.map((item) => (
              <Card
                key={item.title}
                className="border-slate-200 bg-white p-8"
              >
                <h4 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}