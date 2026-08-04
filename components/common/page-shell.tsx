import { SiteNavbar } from "../navbar/site-navbar";
import { SiteFooter } from "../footer/site-footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteNavbar />
      {children}
      <SiteFooter />
    </div>
  );
}
