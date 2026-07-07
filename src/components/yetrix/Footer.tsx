import { Link } from "@tanstack/react-router";
import { BrandLogo } from "./BrandLogo";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Services", to: "/services" },
      { label: "Work", to: "/work" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "AI Platforms", to: "/services" },
      { label: "Cloud & Security", to: "/services" },
      { label: "SEO & Growth", to: "/services" },
      { label: "Automation", to: "/services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", to: "/about" },
      { label: "Workflow", to: "/about" },
      { label: "Case Studies", to: "/work" },
      { label: "Testimonials", to: "/work" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative pt-24 pb-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <BrandLogo imageClassName="h-12 sm:h-14" />
            <p className="mt-5 text-sm text-muted-foreground max-w-sm">
              Transforming businesses through AI, software, SEO, automation, and cloud innovation.
              Built for teams that need a partner, not just a vendor.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-black glow-cyan"
              style={{ background: "var(--gradient-brand)" }}
            >
              Request a Quote
              <span>→</span>
            </Link>
            <div className="mt-6 flex items-center gap-3">
              {["LinkedIn", "X", "GitHub", "Dribbble"].map((s) => (
                <a key={s} href="#" className="h-9 w-9 rounded-lg glass flex items-center justify-center text-xs text-muted-foreground hover:text-foreground transition">
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-mono">{c.title}</div>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <Link to={l.to} className="text-sm text-foreground/80 hover:text-foreground transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Yetrix Technologies. All rights reserved.</div>
          <div className="font-mono tracking-widest">SYSTEMS · NOMINAL</div>
        </div>
      </div>
    </footer>
  );
}
