"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Lock, Mail,Eye,EyeOff   } from "lucide-react";

import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      const redirectPath =
        data.role === "admin"
          ? "/dashboard/management"
          : data.role === "teacher"
            ? "/dashboard/teacher"
            : data.role === "student"
              ? "/dashboard/student"
              : data.role === "parent"
                ? "/dashboard/parent"
                : "/";

      router.replace(redirectPath);
    } catch (err) {
      setError("Something went wrong.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_45%),linear-gradient(135deg,_#f8fbff_0%,_#f8fafc_100%)] px-6 py-16">
      <Card className="w-full max-w-md border-slate-200 bg-white p-8 shadow-[0_30px_100px_-40px_rgba(15,23,42,0.4)]">

        <form onSubmit={handleLogin}>

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Welcome back
            </p>

            <h1 className="mt-4 text-3xl font-semibold text-slate-950">
              Sign in to your school portal
            </h1>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Access your dashboard, announcements, and student activity in one
              place.
            </p>
          </div>

          <div className="mt-8 space-y-4">

            <label className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              <span className="mb-2 flex items-center gap-2 text-slate-500">
                <Mail size={16} />
                Email
              </span>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
                placeholder="name@school.edu"
                required
              />
            </label>

            <label className=" rounded-2xl border flex justify-between border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
             <div>

               <span className="mb-2 flex items-center gap-2 text-slate-500">
                <Lock size={16} />
                Password
              </span>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
                placeholder="••••••••"
                required
              />
             </div>
             <div  onClick={() => setShowPassword(!showPassword)} className="cursor-pointer mt-5">

{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
             </div>


            </label>

          </div>

          {error && (
            <p className="mt-4 text-center text-sm text-red-500">
              {error}
            </p>
          )}

          <div className="mt-6 flex items-center justify-between text-sm">
            {/* <label className="flex items-center gap-2 text-slate-600">
              <input
                type="checkbox"
                className="rounded border-slate-300"
              />
              Remember me
            </label> */}

            <Link
              href="/forgot-password"
              className="font-semibold text-blue-600"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            className="mt-8 w-full rounded-full"
            disabled={loading}
          >
            {loading ? (
              "Signing in..."
            ) : (
              <>
                Continue <ArrowRight size={16} className="ml-2" />
              </>
            )}
          </Button>

          <p className="mt-6 text-center text-sm text-slate-600">
            <Link
              href="/"
              className="font-semibold text-blue-600 bg-white px-2 py-1 rounded-full hover:bg-blue-50 transition"
            >
Home page             </Link>
          </p>

        </form>

      </Card>
    </main>
  );
}