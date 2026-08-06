"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

const links = [
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function SiteNavbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 p-2 text-white shadow-lg shadow-blue-600/20">
            <Sparkles size={18} />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-900">NextCampus</p>
            <p className="text-xs text-slate-500">School ERP</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden text-sm font-semibold text-slate-600 hover:text-slate-900 sm:inline-flex">
            Login
          </Link>
          <Button asChild variant="primary" size="sm" className="rounded-full">
            <Link href="/demo">See Demo</Link>
          </Button>
          <button className="rounded-full border border-slate-200 p-2 text-slate-600 md:hidden">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
