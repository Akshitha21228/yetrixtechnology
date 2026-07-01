// import { motion } from "framer-motion";

// const steps = [
//   { k: "Discover", d: "Audit the landscape, map opportunity, frame success." },
//   { k: "Strategy", d: "Translate ambition into a sequenced execution plan." },
//   { k: "Design", d: "Architect systems, interfaces, and intelligence layers." },
//   { k: "Develop", d: "Engineer production-grade solutions with quality gates." },
//   { k: "Deploy", d: "Ship reliably across cloud, edge, and enterprise stacks." },
//   { k: "Optimize", d: "Measure, refine, and accelerate continuous gains." },
//   { k: "Scale", d: "Compound results across regions, teams, and markets." },
// ];

// export function Workflow() {
//   return (
//     <section id="workflow" className="relative py-28 sm:py-36 overflow-hidden">
//       <div className="mx-auto max-w-7xl px-5">
//         <div className="max-w-3xl">
//           <p className="text-xs uppercase tracking-[0.3em] text-[var(--cyan)] font-mono">[ Engagement Workflow ]</p>
//           <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
//             A delivery model
//             <br />
//             <span className="text-gradient">built for momentum.</span>
//           </h2>
//         </div>

//         <div className="relative mt-16">
//           <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
//           <div className="space-y-10">
//             {steps.map((s, i) => (
//               <motion.div
//                 key={s.k}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-80px" }}
//                 transition={{ duration: 0.6, delay: i * 0.05 }}
//                 className={`relative grid md:grid-cols-2 gap-4 md:gap-12 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
//               >
//                 <div className={`pl-10 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
//                   <div className="font-mono text-xs text-muted-foreground">STEP 0{i + 1}</div>
//                   <div className="mt-2 text-3xl font-display font-semibold text-gradient">{s.k}</div>
//                   <div className="mt-2 text-muted-foreground max-w-md md:inline-block">{s.d}</div>
//                 </div>
//                 <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center`}>
//                   <span className="relative flex h-3 w-3">
//                     <span className="absolute inset-0 rounded-full bg-[var(--cyan)] opacity-40 animate-ping" />
//                     <span className="relative h-3 w-3 rounded-full" style={{ background: "var(--gradient-brand)" }} />
//                   </span>
//                 </div>
//                 <div />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";

// export function Workflow() {
//   return (
//     <section id="workflow" className="relative py-12 sm:py-16 bg-white overflow-hidden">
//       <div className="mx-auto max-w-7xl px-5">
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           {/* ─── Left column: Heading ─── */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.7 }}
//           >
//             <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-mono">
//               [ Engagement Workflow ]
//             </p>
//             <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
//               A delivery model
//               <br />
//               <span className="text-blue-600">built for momentum.</span>
//             </h2>
//             <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-md">
//               From discovery to scale — we design, build, and deploy systems that keep earning their place.
//             </p>
//           </motion.div>

//           {/* ─── Right column: mindmap image ─── */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="flex items-center justify-center"
//           >
//             <img
//               src="/mindmap.png"
//               alt="Yetrix engagement workflow mindmap"
//               className="w-full max-w-md h-auto rounded-2xl shadow-xl object-cover"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";

// export function Workflow() {
//   return (
//     <section id="workflow" className="relative py-12 sm:py-16 bg-white overflow-hidden">
//       <div className="mx-auto max-w-7xl px-5">
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           {/* ─── Left column: Heading ─── */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.7 }}
//           >
//             <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-mono">
//               [ Engagement Workflow ]
//             </p>
//             <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
//               A delivery model
//               <br />
//               <span className="text-blue-600">built for momentum.</span>
//             </h2>
//             <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-md">
//               From discovery to scale — we design, build, and deploy systems that keep earning their place.
//             </p>
//           </motion.div>

//           {/* ─── Right column: mindmap image ─── */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="flex items-center justify-center"
//           >
//             <img
//               src="/mindmap.png"
//               alt="Yetrix engagement workflow mindmap"
//               className="w-full max-w-md h-auto rounded-2xl shadow-xl object-cover"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";

// export function Workflow() {
//   return (
//     <section id="workflow" className="relative py-12 sm:py-16 bg-white overflow-hidden">
//       <div className="mx-auto max-w-7xl px-5">
//         <div className="grid md:grid-cols-5 gap-10 items-center">
//           {/* ─── Left column: Heading (40%) ─── */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.7 }}
//             className="md:col-span-2"
//           >
//             <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-mono">
//               [ Engagement Workflow ]
//             </p>
//             <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
//               A delivery model
//               <br />
//               <span className="text-blue-600">built for momentum.</span>
//             </h2>
//             <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-md">
//               From discovery to scale — we design, build, and deploy systems that keep earning their place.
//             </p>
//           </motion.div>

//           {/* ─── Right column: mindmap image (60%) ─── */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="md:col-span-3 flex items-center justify-center"
//           >
//             <img
//               src="/mindmap.png"
//               alt="Yetrix engagement workflow mindmap"
//               className="w-full max-w-md h-auto rounded-2xl shadow-xl object-cover"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";

export function Workflow() {
  return (
    <section id="workflow" className="relative py-12 sm:py-16 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          {/* ─── Left column: Heading (40%) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-mono">
              [ Engagement Workflow ]
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
              A delivery model
              <br />
              <span className="text-blue-600">built for momentum.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-md">
              From discovery to scale — we design, build, and deploy systems that keep earning their place.
            </p>
          </motion.div>

          {/* ─── Right column: mindmap image (60%) ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3 flex items-center justify-center"
          >
            <img
              src="/mindmap.png"
              alt="Yetrix engagement workflow mindmap"
              className="w-full max-w-md h-auto rounded-2xl shadow-xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}