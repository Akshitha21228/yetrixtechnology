// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const cards = [
//   { title: "Software Engineering", desc: "Production-grade systems built for scale.", k: "01" },
//   { title: "AI & ML Systems", desc: "Custom models, agents, and intelligent pipelines.", k: "02" },
//   { title: "Cloud Infrastructure", desc: "Resilient, observable, and globally distributed.", k: "03" },
//   { title: "Cybersecurity", desc: "Zero-trust posture from day one.", k: "04" },
// ];

// export function Intro() {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
//   const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

//   return (
//     <section ref={ref} className="relative py-28 sm:py-36 overflow-hidden">
//       <div className="absolute inset-0 -z-10" style={{
//         background: "radial-gradient(ellipse 70% 50% at 50% 50%, color-mix(in oklab, var(--violet) 18%, transparent), transparent 70%)"
//       }} />
//       <div className="mx-auto max-w-7xl px-5">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl"
//         >
//           <p className="text-xs uppercase tracking-[0.3em] text-[var(--cyan)] font-mono">[ The Yetrix Doctrine ]</p>
//           <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
//             Building intelligent technology
//             <br />
//             solutions <span className="text-gradient">for the future.</span>
//           </h2>
//           <p className="mt-6 max-w-2xl text-muted-foreground text-lg">
//             We engineer the systems behind tomorrow's market leaders — fusing research, design, and
//             production at enterprise scale.
//           </p>
//         </motion.div>

//         <motion.div style={{ y }} className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {cards.map((c, i) => (
//             <motion.div
//               key={c.k}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.7, delay: i * 0.08 }}
//               className="group relative glass rounded-2xl p-6 overflow-hidden hover:bg-white/[0.06] transition-colors"
//             >
//               <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent opacity-0 group-hover:opacity-100 transition" />
//               <div className="font-mono text-xs text-muted-foreground">{c.k}</div>
//               <div className="mt-6 text-lg font-semibold">{c.title}</div>
//               <div className="mt-1.5 text-sm text-muted-foreground">{c.desc}</div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const cards = [
//   { title: "Software Engineering", desc: "Production-grade systems built for scale.", k: "01" },
//   { title: "AI & ML Systems", desc: "Custom models, agents, and intelligent pipelines.", k: "02" },
//   { title: "Cloud Infrastructure", desc: "Resilient, observable, and globally distributed.", k: "03" },
//   { title: "Cybersecurity", desc: "Zero-trust posture from day one.", k: "04" },
// ];

// export function Intro() {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
//   const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

//   return (
//     <section ref={ref} className="relative py-28 sm:py-36 overflow-hidden bg-white">
//       {/* Removed the radial gradient overlay – now a plain white background */}
//       <div className="mx-auto max-w-7xl px-5">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl"
//         >
//           <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-mono">
//             [ The Yetrix Doctrine ]
//           </p>
//           <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-gray-900">
//             Building intelligent technology
//             <br />
//             solutions <span className="text-blue-600">for the future.</span>
//           </h2>
//           {/* <p className="mt-6 max-w-2xl text-gray-600 text-lg">
//             We engineer the systems behind tomorrow's market leaders — fusing research, design, and
//             production at enterprise scale.
//           </p> */}
//         </motion.div>

//         <motion.div style={{ y }} className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {cards.map((c, i) => (
//             <motion.div
//               key={c.k}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.7, delay: i * 0.08 }}
//               className="group relative rounded-2xl p-6 overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow"
//             >
//               <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition" />
//               <div className="font-mono text-xs text-gray-400">{c.k}</div>
//               <div className="mt-6 text-lg font-semibold text-gray-900">{c.title}</div>
//               <div className="mt-1.5 text-sm text-gray-600">{c.desc}</div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  { title: "Software Engineering", desc: "Production-grade systems built for scale.", k: "01" },
  { title: "AI & ML Systems", desc: "Custom models, agents, and intelligent pipelines.", k: "02" },
  { title: "Cloud Infrastructure", desc: "Resilient, observable, and globally distributed.", k: "03" },
  { title: "Cybersecurity", desc: "Zero-trust posture from day one.", k: "04" },
];

export function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="relative py-12 sm:py-16 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-gray-900">
            Building intelligent technology
            <br />
            solutions <span className="text-blue-600">for the future.</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-600">
            We engineer the systems behind tomorrow's market leaders — fusing research, design, and
            production at enterprise scale.
          </p>
        </motion.div>

        <motion.div style={{ y }} className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.k}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative rounded-2xl p-6 overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="font-mono text-xs text-gray-400">{c.k}</div>
              <div className="mt-6 text-lg font-semibold text-gray-900">{c.title}</div>
              <div className="mt-1.5 text-sm text-gray-600">{c.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}