import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  "All",
  "AI Platforms",
  "SaaS Products",
  "Cloud Solutions",
  "Automation Systems",
  "Digital Marketing",
  "Data Annotation",
];

const studies = [
  { cat: "AI Platforms", title: "Cognitive Underwriting Engine", client: "Global Insurer", metric: "+38% throughput" },
  { cat: "SaaS Products", title: "Multi-Tenant Operations Suite", client: "Industrial OEM", metric: "92 NPS" },
  { cat: "Cloud Solutions", title: "Hybrid Cloud Migration", client: "Logistics Leader", metric: "−54% infra cost" },
  { cat: "Automation Systems", title: "End-to-End Order Automation", client: "Retail Network", metric: "8x faster cycle" },
  { cat: "Digital Marketing", title: "Performance Growth Engine", client: "D2C Brand", metric: "5.4x ROAS" },
  { cat: "Data Annotation", title: "Multimodal Training Pipeline", client: "Autonomy Startup", metric: "12M labels / mo" },
];

export function CaseStudies() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? studies : studies.filter((s) => s.cat === active);

  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--mint)] font-mono">[ Selected Work ]</p>
            <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Outcomes engineered
              <br />
              <span className="text-gradient">at enterprise scale.</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition border ${
                active === c
                  ? "border-[var(--cyan)] text-foreground bg-white/5"
                  : "border-white/10 text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((s, i) => (
            <motion.div
              key={s.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="group relative glass rounded-2xl overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--cyan) 30%, transparent), transparent 60%), radial-gradient(circle at 75% 70%, color-mix(in oklab, var(--violet) 35%, transparent), transparent 60%), #0a0d1a",
                  }}
                />
                <div className="absolute inset-6 rounded-xl glass-strong flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-mono text-[10px] tracking-widest text-muted-foreground">{s.cat.toUpperCase()}</div>
                    <div className="mt-2 text-2xl font-display font-semibold text-gradient">{s.metric}</div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="text-xs text-muted-foreground">{s.client}</div>
                <div className="mt-1 text-lg font-semibold leading-snug">{s.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
