// import { Link } from "@tanstack/react-router";
// import { motion } from "framer-motion";

// type PageHeroProps = {
//   eyebrow: string;
//   title: string;
//   accent: string;
//   description: string;
//   primaryTo: string;
//   primaryLabel: string;
//   secondaryTo?: string;
//   secondaryLabel?: string;
//   bullets: string[];
// };

// export function PageHero({
//   eyebrow,
//   title,
//   accent,
//   description,
//   primaryTo,
//   primaryLabel,
//   secondaryTo,
//   secondaryLabel,
//   bullets,
// }: PageHeroProps) {
//   return (
//     <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24">
//       <div
//         className="absolute inset-0 -z-10"
//         style={{
//           background:
//             "radial-gradient(ellipse 70% 55% at 18% 18%, color-mix(in oklab, var(--violet) 20%, transparent), transparent 62%), radial-gradient(ellipse 55% 45% at 88% 26%, color-mix(in oklab, var(--cyan) 22%, transparent), transparent 60%), radial-gradient(ellipse 50% 40% at 60% 90%, color-mix(in oklab, var(--mint) 10%, transparent), transparent 68%)",
//         }}
//       />
//       <div className="mx-auto max-w-4xl px-5">
//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <p className="text-xs uppercase tracking-[0.3em] text-[var(--cyan)] font-mono">{eyebrow}</p>
//           <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
//             {title} <span className="text-gradient">{accent}</span>
//           </h1>
//           <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p>

//           <div className="mt-8 flex flex-wrap gap-3">
//             <Link
//               to={primaryTo}
//               className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black glow-cyan"
//               style={{ background: "var(--gradient-brand)" }}
//             >
//               {primaryLabel}
//               <span className="transition-transform group-hover:translate-x-1">→</span>
//             </Link>
//             {secondaryTo && secondaryLabel ? (
//               <Link
//                 to={secondaryTo}
//                 className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/10"
//               >
//                 {secondaryLabel}
//               </Link>
//             ) : null}
//           </div>

//           <div className="mt-8 flex flex-wrap gap-2">
//             {bullets.map((bullet) => (
//               <span
//                 key={bullet}
//                 className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
//               >
//                 {bullet}
//               </span>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  primaryTo: string;
  primaryLabel: string;
  secondaryTo?: string;
  secondaryLabel?: string;
  bullets: string[];
};

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  primaryTo,
  primaryLabel,
  secondaryTo,
  secondaryLabel,
  bullets,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16 bg-white">
      <div className="mx-auto max-w-4xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-mono">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gray-900">
            {title} <span className="text-blue-600">{accent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={primaryTo}
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-blue-600 shadow-lg shadow-blue-200 hover:shadow-blue-300 transition hover:scale-[1.02]"
            >
              {primaryLabel}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            {secondaryTo && secondaryLabel ? (
              <Link
                to={secondaryTo}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition backdrop-blur-sm shadow-sm"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {bullets.map((bullet) => (
              <span
                key={bullet}
                className="rounded-full border border-gray-200 bg-white/60 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-gray-500"
              >
                {bullet}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}