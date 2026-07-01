import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  "AI & Digital Solutions",
  "Software Development",
  "Data & AI Training Services",
  "IT & Cloud Services",
  "Digital Marketing & Automation",
  "Enterprise Digital Transformation",
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative glass-strong rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16">
          <div className="absolute inset-0 -z-10 opacity-60" style={{
            background: "radial-gradient(ellipse 60% 60% at 20% 0%, color-mix(in oklab, var(--cyan) 22%, transparent), transparent 60%), radial-gradient(ellipse 60% 60% at 100% 100%, color-mix(in oklab, var(--violet) 22%, transparent), transparent 60%)"
          }} />

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--cyan)] font-mono">[ Start a Project ]</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
                Let's scope
                <br />
                <span className="text-gradient">your next quote.</span>
              </h2>
              <p className="mt-5 text-muted-foreground">
                Share your goals, and we'll respond within one business day with a tailored quote,
                a recommended service mix, and the next step that makes sense.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--mint)]" />
                  <span className="text-muted-foreground">hello@yetrix.tech</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan)]" />
                  <span className="text-muted-foreground">24 / 7 enterprise support</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full min-h-[460px] flex flex-col items-center justify-center text-center"
                  >
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full glass-strong">
                      <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "color-mix(in oklab, var(--mint) 30%, transparent)" }} />
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[var(--mint)]">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold">Transmission received.</h3>
                    <p className="mt-2 text-muted-foreground max-w-sm">
                      A Yetrix strategist will reach out within one business day with a quote and next steps.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-6 text-sm text-[var(--cyan)] hover:underline"
                    >
                      Request another quote →
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                    className="grid sm:grid-cols-2 gap-4"
                  >
                    <Field label="Name" name="name" placeholder="Jane Doe" required />
                    <Field label="Company" name="company" placeholder="Acme Inc." />
                    <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
                    <Field label="Phone Number" name="phone" placeholder="+1 (555) 000-0000" />
                    <div className="sm:col-span-2">
                      <Label>Service interested in</Label>
                      <select
                        name="service"
                        required
                        defaultValue=""
                        className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-[var(--cyan)] focus:ring-2 focus:ring-[var(--cyan)]/30 transition"
                      >
                        <option value="" disabled>Select a service…</option>
                        {services.map((s) => <option key={s} value={s} className="bg-background">{s}</option>)}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <Label>Project requirements</Label>
                      <textarea
                        name="requirements"
                        rows={4}
                        placeholder="Tell us about your goals, timeline, and constraints…"
                        className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[var(--cyan)] focus:ring-2 focus:ring-[var(--cyan)]/30 transition resize-none"
                      />
                    </div>
                    <div className="sm:col-span-2 flex flex-wrap items-center gap-4 mt-2">
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black glow-cyan"
                        style={{ background: "var(--gradient-brand)" }}
                      >
                        Request a Quote
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </button>
                      <span className="text-xs text-muted-foreground">We reply within 1 business day.</span>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs uppercase tracking-widest text-muted-foreground font-mono">{children}</label>;
}

function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[var(--cyan)] focus:ring-2 focus:ring-[var(--cyan)]/30 transition"
      />
    </div>
  );
}
