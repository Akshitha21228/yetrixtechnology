const tags = [
  "ARTIFICIAL INTELLIGENCE",
  "MACHINE LEARNING",
  "CLOUD INFRASTRUCTURE",
  "ENTERPRISE AUTOMATION",
  "SOFTWARE ENGINEERING",
  "DATA INTELLIGENCE",
  "CYBERSECURITY",
  "DIGITAL TRANSFORMATION",
];

export function Marquee() {
  const items = [...tags, ...tags];
  return (
    <section className="relative py-10 border-y border-white/5 overflow-hidden">
      <div className="flex animate-marquee gap-12 whitespace-nowrap will-change-transform">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-12 text-sm font-medium text-muted-foreground tracking-[0.25em]">
            <span>{t}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--cyan)]" />
          </div>
        ))}
      </div>
    </section>
  );
}
