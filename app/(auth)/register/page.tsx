import Link from "next/link";
import { ArrowRight, Lock, Mail, UserRound } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.12),_transparent_45%),linear-gradient(135deg,_#f8fbff_0%,_#f8fafc_100%)] px-6 py-16">
      <Card className="w-full max-w-md border-slate-200 bg-white p-8 shadow-[0_30px_100px_-40px_rgba(15,23,42,0.4)]">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">Create account</p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-950">Start with your school</h1>
          <p className="mt-3 text-sm leading-7 text-slate-600">Set up a secure workspace for administrative and academic operations.</p>
        </div>
        <div className="mt-8 space-y-4">
          <label className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <span className="mb-2 flex items-center gap-2 text-slate-500"><UserRound size={16} /> Full name</span>
            <input className="w-full bg-transparent outline-none" placeholder="Taylor Reed" />
          </label>
          <label className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <span className="mb-2 flex items-center gap-2 text-slate-500"><Mail size={16} /> Email</span>
            <input className="w-full bg-transparent outline-none" placeholder="name@school.edu" />
          </label>
          <label className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <span className="mb-2 flex items-center gap-2 text-slate-500"><Lock size={16} /> Password</span>
            <input type="password" className="w-full bg-transparent outline-none" placeholder="••••••••" />
          </label>
          <label className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <span className="mb-2 flex items-center gap-2 text-slate-500"><Lock size={16} /> Confirm password</span>
            <input type="password" className="w-full bg-transparent outline-none" placeholder="••••••••" />
          </label>
        </div>
        <Button className="mt-8 w-full rounded-full">
          <Link href="/dashboard/management" className="flex items-center gap-2">Create account <ArrowRight size={16} /></Link>
        </Button>
        <p className="mt-6 text-center text-sm text-slate-600">Already have an account? <Link href="/login" className="font-semibold text-blue-600">Log in</Link></p>
      </Card>
    </main>
  );
}
