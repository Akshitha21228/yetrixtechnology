import { motion } from "framer-motion";

const quotes = [
  { q: "Yetrix re-architected our intelligence layer. The lift in operational throughput was immediate.", a: "VP Engineering", c: "Fortune 500 Insurer" },
  { q: "A true product partner. They engineer with the rigor of a research lab and ship like a startup.", a: "Chief Product Officer", c: "Industrial SaaS" },
  { q: "Our automation maturity jumped two tiers in a single quarter — without disrupting operations.", a: "COO", c: "Logistics Network" },
  { q: "The cloud rebuild paid for itself in eight months. Reliability and economics in one move.", a: "CTO", c: "Healthcare Platform" },
  { q: "From data labeling to model training — they own the full pipeline and we trust the output.", a: "Head of AI", c: "Autonomy Startup" },
  { q: "The growth engine they built compounds every quarter. We've never seen marketing like this.", a: "CMO", c: "Consumer Brand" },
];

export function Testimonials() {
  const row = [...quotes, ...quotes];
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--cyan)] font-mono">[ Voices of the Field ]</p>
        <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          Trusted by leaders
          <br />
          <span className="text-gradient">building what's next.</span>
        </h2>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          className="flex gap-5 will-change-transform"
        >
          {row.map((t, i) => (
            <div key={i} className="shrink-0 w-[360px] md:w-[420px] glass rounded-2xl p-7">
              <div className="text-[var(--cyan)] text-2xl leading-none">"</div>
              <p className="mt-3 text-foreground/90 leading-relaxed">{t.q}</p>
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="text-sm font-semibold">{t.a}</div>
                <div className="text-xs text-muted-foreground">{t.c}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
