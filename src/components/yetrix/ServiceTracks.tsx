// import { motion } from "framer-motion";
// import { Link } from "@tanstack/react-router";
// import { Brain, Cloud, Megaphone, ArrowUpRight } from "lucide-react";

// const tracks = [
//   {
//     icon: Brain,
//     title: "Build intelligent products",
//     summary:
//       "We combine software engineering, AI, and data into products that ship quickly and stay maintainable.",
//     services: [
//       "AI software development",
//       "Custom AI platforms",
//       "Web and mobile apps",
//       "API integrations",
//       "Data pipeline design",
//     ],
//     outcome: "Best for teams launching a new product or modernizing an old one.",
//   },
//   {
//     icon: Cloud,
//     title: "Scale the operating stack",
//     summary:
//       "Cloud, security, and workflow redesigns that make delivery more reliable and easier to run day to day.",
//     services: [
//       "Cloud infrastructure",
//       "Managed IT services",
//       "Cybersecurity",
//       "Workflow automation",
//       "Enterprise transformation",
//     ],
//     outcome: "Best for teams that need resilience, speed, and lower operating overhead.",
//   },
//   {
//     icon: Megaphone,
//     title: "Grow demand with SEO and automation",
//     summary:
//       "Search, content, and automation systems that keep leads flowing without adding more manual work.",
//     services: [
//       "SEO and content systems",
//       "Digital marketing",
//       "Lead generation",
//       "Email automation",
//       "Brand strategy",
//     ],
//     outcome: "Best for teams that want visible growth with measurable acquisition loops.",
//   },
// ] as const;

// export function ServiceTracks() {
//   return (
//     <section className="relative py-28 sm:py-36">
//       <div className="mx-auto max-w-7xl px-5">
//         <div className="max-w-3xl">
//           <p className="text-xs uppercase tracking-[0.3em] text-[var(--mint)] font-mono">
//             [ Service Tracks ]
//           </p>
//           <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
//             Three clear paths
//             <br />
//             <span className="text-gradient">for every kind of project.</span>
//           </h2>
//           <p className="mt-5 text-lg text-muted-foreground">
//             If you want a single service, we can run one lane. If you want a full program, we can
//             connect all three into one delivery plan with clear ownership.
//           </p>
//         </div>

//         <div className="mt-14 grid gap-4 lg:grid-cols-3">
//           {tracks.map((track, i) => {
//             const Icon = track.icon;
//             return (
//               <motion.div
//                 key={track.title}
//                 initial={{ opacity: 0, y: 34 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-60px" }}
//                 transition={{ duration: 0.6, delay: i * 0.08 }}
//                 className="group relative overflow-hidden rounded-3xl glass p-7"
//               >
//                 <div
//                   className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//                   style={{
//                     background:
//                       "radial-gradient(420px circle at 50% 0%, color-mix(in oklab, var(--cyan) 14%, transparent), transparent 58%)",
//                   }}
//                 />
//                 <div className="relative flex items-start justify-between gap-4">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl glass-strong">
//                     <Icon className="h-5 w-5 text-[var(--cyan)]" />
//                   </div>
//                   <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
//                     Dedicated lane
//                   </span>
//                 </div>
//                 <h3 className="relative mt-6 text-2xl font-semibold leading-tight">{track.title}</h3>
//                 <p className="relative mt-4 text-sm leading-6 text-muted-foreground">{track.summary}</p>
//                 <ul className="relative mt-6 space-y-3">
//                   {track.services.map((service) => (
//                     <li key={service} className="flex items-start gap-3 text-sm text-foreground/90">
//                       <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cyan)]" />
//                       <span>{service}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <p className="relative mt-6 border-t border-white/10 pt-4 text-sm text-muted-foreground">
//                   {track.outcome}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>

//         <div className="mt-10 flex flex-wrap items-center gap-4">
//           <Link
//             to="/contact"
//             className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black glow-cyan"
//             style={{ background: "var(--gradient-brand)" }}
//           >
//             Request a Quote
//             <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//           </Link>
//           <span className="text-sm text-muted-foreground">
//             Tell us what you need and we'll map the fastest path.
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";
// import { Link } from "@tanstack/react-router";
// import { Brain, Cloud, Megaphone, ArrowUpRight } from "lucide-react";

// const tracks = [
//   {
//     icon: Brain,
//     title: "Build intelligent products",
//     summary:
//       "We combine software engineering, AI, and data into products that ship quickly and stay maintainable.",
//     services: [
//       "AI software development",
//       "Custom AI platforms",
//       "Web and mobile apps",
//       "API integrations",
//       "Data pipeline design",
//     ],
//     outcome: "Best for teams launching a new product or modernizing an old one.",
//   },
//   {
//     icon: Cloud,
//     title: "Scale the operating stack",
//     summary:
//       "Cloud, security, and workflow redesigns that make delivery more reliable and easier to run day to day.",
//     services: [
//       "Cloud infrastructure",
//       "Managed IT services",
//       "Cybersecurity",
//       "Workflow automation",
//       "Enterprise transformation",
//     ],
//     outcome: "Best for teams that need resilience, speed, and lower operating overhead.",
//   },
//   {
//     icon: Megaphone,
//     title: "Grow demand with SEO and automation",
//     summary:
//       "Search, content, and automation systems that keep leads flowing without adding more manual work.",
//     services: [
//       "SEO and content systems",
//       "Digital marketing",
//       "Lead generation",
//       "Email automation",
//       "Brand strategy",
//     ],
//     outcome: "Best for teams that want visible growth with measurable acquisition loops.",
//   },
// ] as const;

// export function ServiceTracks() {
//   return (
//     <section className="relative py-28 sm:py-36 bg-white">
//       <div className="mx-auto max-w-7xl px-5">
//         {/* ─── Centered header ─── */}
//         <div className="max-w-3xl mx-auto text-center">
//           <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-mono">
//             [ Service Tracks ]
//           </p>
//           <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
//             Three clear paths
//             <br />
//             <span className="text-blue-600">for every kind of project.</span>
//           </h2>
//           <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
//             If you want a single service, we can run one lane. If you want a full program, we can
//             connect all three into one delivery plan with clear ownership.
//           </p>
//         </div>

//         <div className="mt-14 grid gap-4 lg:grid-cols-3">
//           {tracks.map((track, i) => {
//             const Icon = track.icon;
//             return (
//               <motion.div
//                 key={track.title}
//                 initial={{ opacity: 0, y: 34 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-60px" }}
//                 transition={{ duration: 0.6, delay: i * 0.08 }}
//                 className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/60 p-7 shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div className="relative flex items-start justify-between gap-4">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
//                     <Icon className="h-5 w-5 text-blue-600" />
//                   </div>
//                   <span className="rounded-full border border-gray-200 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-gray-500">
//                     Dedicated lane
//                   </span>
//                 </div>
//                 <h3 className="relative mt-6 text-2xl font-semibold leading-tight text-gray-900">
//                   {track.title}
//                 </h3>
//                 <p className="relative mt-4 text-sm leading-6 text-gray-600">{track.summary}</p>
//                 <ul className="relative mt-6 space-y-3">
//                   {track.services.map((service) => (
//                     <li key={service} className="flex items-start gap-3 text-sm text-gray-700">
//                       <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
//                       <span>{service}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <p className="relative mt-6 border-t border-gray-200 pt-4 text-sm text-gray-500">
//                   {track.outcome}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>

//         <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
//           <Link
//             to="/contact"
//             className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-blue-600 shadow-lg shadow-blue-200 hover:shadow-blue-300 transition hover:scale-[1.02]"
//           >
//             Request a Quote
//             <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//           </Link>
//           <span className="text-sm text-gray-500">
//             Tell us what you need and we'll map the fastest path.
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Brain, Cloud, Megaphone, ArrowUpRight } from "lucide-react";

const tracks = [
  {
    icon: Brain,
    title: "Build intelligent products",
    summary:
      "We combine software engineering, AI, and data into products that ship quickly and stay maintainable.",
    services: [
      "AI software development",
      "Custom AI platforms",
      "Web and mobile apps",
      "API integrations",
      "Data pipeline design",
    ],
    outcome: "Best for teams launching a new product or modernizing an old one.",
  },
  {
    icon: Cloud,
    title: "Scale the operating stack",
    summary:
      "Cloud, security, and workflow redesigns that make delivery more reliable and easier to run day to day.",
    services: [
      "Cloud infrastructure",
      "Managed IT services",
      "Cybersecurity",
      "Workflow automation",
      "Enterprise transformation",
    ],
    outcome: "Best for teams that need resilience, speed, and lower operating overhead.",
  },
  {
    icon: Megaphone,
    title: "Grow demand with SEO and automation",
    summary:
      "Search, content, and automation systems that keep leads flowing without adding more manual work.",
    services: [
      "SEO and content systems",
      "Digital marketing",
      "Lead generation",
      "Email automation",
      "Brand strategy",
    ],
    outcome: "Best for teams that want visible growth with measurable acquisition loops.",
  },
] as const;

export function ServiceTracks() {
  return (
    <section className="relative py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-5">
        {/* ─── Centered header ─── */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-mono">
            [ Service Tracks ]
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Three clear paths
            <br />
            <span className="text-blue-600">for every kind of project.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            If you want a single service, we can run one lane. If you want a full program, we can
            connect all three into one delivery plan with clear ownership.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {tracks.map((track, i) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/60 p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="rounded-full border border-gray-200 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-gray-500">
                    Dedicated lane
                  </span>
                </div>
                <h3 className="relative mt-6 text-2xl font-semibold leading-tight text-gray-900">
                  {track.title}
                </h3>
                <p className="relative mt-4 text-sm leading-6 text-gray-600">{track.summary}</p>
                <ul className="relative mt-6 space-y-3">
                  {track.services.map((service) => (
                    <li key={service} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <p className="relative mt-6 border-t border-gray-200 pt-4 text-sm text-gray-500">
                  {track.outcome}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-blue-600 shadow-lg shadow-blue-200 hover:shadow-blue-300 transition hover:scale-[1.02]"
          >
            Request a Quote
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <span className="text-sm text-gray-500">
            Tell us what you need and we'll map the fastest path.
          </span>
        </div>
      </div>
    </section>
  );
}