// import { motion } from "framer-motion";

// const items = [
//   { t: "Innovation Driven", d: "We build future-ready technology solutions that anticipate where industries are heading." },
//   { t: "Enterprise Focused", d: "Architected for scale, observability, and the reliability your operation demands." },
//   { t: "Automation Experts", d: "Reducing manual work through intelligent systems and orchestrated workflows." },
//   { t: "Data-Centric Approach", d: "Turning raw signal into measurable business value across every layer." },
//   { t: "Long-Term Partnership", d: "Supporting clients far beyond deployment — strategy, scale, and continuous evolution." },
// ];

// export function WhyYetrix() {
//   return (
//     <section id="why" className="relative py-28 sm:py-36">
//       <div className="mx-auto max-w-7xl px-5">
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
//           <div className="max-w-2xl">
//             <p className="text-xs uppercase tracking-[0.3em] text-[var(--mint)] font-mono">[ Why Yetrix ]</p>
//             <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
//               The advantages enterprises
//               <br />
//               <span className="text-gradient">compound on.</span>
//             </h2>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
//           {items.map((c, i) => (
//             <motion.div
//               key={c.t}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.06 }}
//               className="relative glass rounded-2xl p-6 group hover:bg-white/[0.06] transition-colors min-h-[220px] flex flex-col"
//             >
//               <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
//               <div className="mt-auto">
//                 <div className="text-lg font-semibold leading-tight">{c.t}</div>
//                 <div className="mt-2 text-sm text-muted-foreground">{c.d}</div>
//               </div>
//               <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent opacity-0 group-hover:opacity-100 transition" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";

// const items = [
//   { t: "Innovation Driven", d: "We build future-ready technology solutions that anticipate where industries are heading." },
//   { t: "Enterprise Focused", d: "Architected for scale, observability, and the reliability your operation demands." },
//   { t: "Automation Experts", d: "Reducing manual work through intelligent systems and orchestrated workflows." },
//   { t: "Data-Centric Approach", d: "Turning raw signal into measurable business value across every layer." },
//   { t: "Long-Term Partnership", d: "Supporting clients far beyond deployment — strategy, scale, and continuous evolution." },
// ];

// export function WhyYetrix() {
//   return (
//     <section id="why" className="relative py-12 sm:py-16 bg-white">
//       <div className="mx-auto max-w-7xl px-5">
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
//           <div className="max-w-2xl">
//             <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-mono">
//               [ Why Yetrix ]
//             </p>
//             <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
//               The advantages enterprises
//               <br />
//               <span className="text-blue-600">compound on.</span>
//             </h2>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
//           {items.map((c, i) => (
//             <motion.div
//               key={c.t}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.06 }}
//               className="relative bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 group hover:shadow-md transition-shadow min-h-[220px] flex flex-col"
//             >
//               <div className="font-mono text-xs text-gray-400">0{i + 1}</div>
//               <div className="mt-auto">
//                 <div className="text-lg font-semibold leading-tight text-gray-900">{c.t}</div>
//                 <div className="mt-2 text-sm text-gray-600">{c.d}</div>
//               </div>
//               <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";

export function WhyYetrix() {
  return (
    <section id="why" className="relative py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid md:grid-cols-10 gap-8 items-center">
          {/* ─── Left column: image (60%) ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-6 flex justify-center"
          >
            <img
              src="/advyetrix.png"
              alt="Yetrix advantages – innovation, enterprise, automation, data, partnership"
              className="w-full max-w-2xl h-auto rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* ─── Right column: content (40%) ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-4"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-mono">
              [ Why Yetrix ]
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
              The advantages enterprises{" "}
              <span className="text-blue-600">compound on.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-sm">
              Innovation, enterprise scale, automation, data intelligence, and long‑term partnership — all built into every engagement.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}