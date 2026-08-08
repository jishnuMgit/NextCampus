import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { Topbar } from "@/components/dashboard/topbar";
import { Mail, MessageSquare, Send, Users2 } from "lucide-react";

const messages = [
  { type: "Inbox", title: "Parent meeting update", preview: "Please confirm attendance for Friday's meeting.", time: "9:15 AM" },
  { type: "Inbox", title: "Homework review", preview: "Three submissions are pending your feedback.", time: "11:20 AM" },
  { type: "Sent", title: "Report draft", preview: "Draft report attached for Grade 9 Section A.", time: "Yesterday" },
];

export default function MessagesPage() {
  return (
    <div className="pb-24">
      <Topbar title="Messages" />

      <main className="space-y-6 p-6">
        <SectionTitle
          eyebrow="Teacher communications"
          title="Messages & notifications"
          description="Communicate with students, parents, and administration from one place."
        />

        <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <Card className="border-slate-200 bg-white p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500">Message center</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">Inbox and sent items</h2>
              </div>
              <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700" asChild>
                <Link href="/dashboard/teacher/messages">New message</Link>
              </Button>
            </div>

            <div className="mt-6 space-y-4">
              {messages.map((message) => (
                <div key={message.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{message.title}</p>
                      <p className="mt-2 text-sm text-slate-500">{message.preview}</p>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{message.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="border-slate-200 bg-white p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500">Parent communication</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">Message Parents</h2>
              </div>
              <Button size="sm" variant="secondary">Message Parents</Button>
            </div>

            <div className="mt-6 space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div>
                <p className="text-sm text-slate-500">Notifications</p>
                <p className="mt-3 text-sm text-slate-600">You have 2 unread messages from parents and 1 notification from school administration.</p>
              </div>
              <div className="grid gap-3">
                <Button size="sm" variant="outline">Inbox</Button>
                <Button size="sm" variant="outline">Sent</Button>
                <Button size="sm" variant="outline">Search messages</Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
