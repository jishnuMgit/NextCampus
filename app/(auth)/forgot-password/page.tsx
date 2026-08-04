import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_45%),linear-gradient(135deg,_#f8fbff_0%,_#f8fafc_100%)] px-6 py-16">
      <Card className="w-full max-w-md border-slate-200 bg-white p-8 shadow-[0_30px_100px_-40px_rgba(15,23,42,0.4)]">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Reset password</p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-950">Forgot your password?</h1>
          <p className="mt-3 text-sm leading-7 text-slate-600">We’ll send a secure recovery link to your email address.</p>
        </div>
        <div className="mt-8">
          <label className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <span className="mb-2 flex items-center gap-2 text-slate-500"><Mail size={16} /> Email</span>
            <input className="w-full bg-transparent outline-none" placeholder="name@school.edu" />
          </label>
        </div>
        <Button className="mt-8 w-full rounded-full">
          <Link href="/login" className="flex items-center gap-2">Send reset link <ArrowRight size={16} /></Link>
        </Button>
        <p className="mt-6 text-center text-sm text-slate-600">Remembered it? <Link href="/login" className="font-semibold text-blue-600">Back to sign in</Link></p>
      </Card>
    </main>
  );
}
