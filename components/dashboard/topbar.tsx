import Link from "next/link";
import { Bell, Search, Settings } from "lucide-react";
import { Button } from "../ui/button";

export function Topbar({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
      <div>
        <p className="text-sm font-medium text-slate-500">Dashboard</p>
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      </div>
      <div className="flex items-center gap-3">
        <label className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 md:flex">
          <Search size={16} />
          <input className="bg-transparent outline-none" placeholder="Search" />
        </label>
        <button className="rounded-full border border-slate-200 p-2 text-slate-600">
          <Bell size={16} />
        </button>
        <Button variant="secondary" size="sm" className="rounded-full">
          <Link href={`/dashboard/${title}/settings`} className="flex items-center gap-2"><Settings size={16} /> Settings</Link>
        </Button>
      </div>
    </header>
  );
}
