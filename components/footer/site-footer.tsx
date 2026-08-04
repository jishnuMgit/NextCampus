import Link from "next/link";
import { ArrowRight, GraduationCap, Mail, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/10 p-2 text-white">
              <GraduationCap size={18} />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">NextCampus</p>
              <p className="text-sm text-slate-400">Premium school operations</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
            Unified academic, administrative, and parent communication workflows in one elegant platform.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/features" className="hover:text-white">Features</Link></li>
            <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link href="/demo" className="hover:text-white">Demo</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-2"><Mail size={16} /> hello@nextcampus.io</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +1 800 555 0199</li>
          </ul>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
            Start conversation <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
