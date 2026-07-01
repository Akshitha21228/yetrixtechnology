// import { motion } from "framer-motion";
// import { Link } from "@tanstack/react-router";
// import { ArrowUpRight } from "lucide-react";

// const notes = [
//   "Transparent logo asset for decks, social posts, and landing pages",
//   "Animated presentation that stays readable on dark and light backgrounds",
//   "Reusable brand treatment for proposals, hero headers, and launch pages",
// ];

// export function BrandMotion() {
//   return (
//     <section id="brand" className="relative py-28 sm:py-36 overflow-hidden">
//       <div
//         className="absolute inset-0 -z-10"
//         style={{
//           background:
//             "radial-gradient(ellipse 60% 45% at 20% 15%, color-mix(in oklab, var(--cyan) 18%, transparent), transparent 60%), radial-gradient(ellipse 50% 40% at 90% 20%, color-mix(in oklab, var(--violet) 20%, transparent), transparent 65%)",
//         }}
//       />

//       <div className="mx-auto max-w-4xl px-5">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.7 }}
//         >
//           <p className="text-xs uppercase tracking-[0.3em] text-[var(--mint)] font-mono">[ Brand in Motion ]</p>
//           <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
//             A cleaner brand system
//             <br />
//             <span className="text-gradient">that moves with the site.</span>
//           </h2>
//           <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
//             We turned the Yetrix mark into a reusable visual asset, so the brand can show up in
//             hero sections, pitch decks, and social previews without losing clarity or polish.
//           </p>

//           <div className="mt-8 grid gap-3 sm:grid-cols-3">
//             {notes.map((note) => (
//               <div key={note} className="glass rounded-2xl p-4 text-sm text-muted-foreground">
//                 {note}
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 flex flex-wrap gap-3">
//             <Link
//               to="/contact"
//               className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black glow-cyan"
//               style={{ background: "var(--gradient-brand)" }}
//             >
//               Request a Quote
//               <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </Link>
//             <Link
//               to="/services"
//               className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/10"
//             >
//               View Service Map
//             </Link>
//           </div>
//           <div className="mt-8 flex flex-wrap gap-2">
//             {["Transparent logo", "Cleaner pages", "Faster browsing"].map((item) => (
//               <span
//                 key={item}
//                 className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
//               >
//                 {item}
//               </span>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";
// import { Link } from "@tanstack/react-router";
// import { ArrowUpRight } from "lucide-react";

// const notes = [
//   "Transparent logo asset for decks, social posts, and landing pages",
//   "Animated presentation that stays readable on dark and light backgrounds",
//   "Reusable brand treatment for proposals, hero headers, and launch pages",
// ];

// export function BrandMotion() {
//   return (
//     <section id="brand" className="relative py-28 sm:py-36 overflow-hidden bg-white">
//       <div className="mx-auto max-w-7xl px-5">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.7 }}
//           className="grid grid-cols-1 gap-10 lg:grid-cols-2"
//         >
//           {/* ─── LEFT COLUMN – Brand Text ─── */}
//           <div className="flex flex-col justify-center">
//             <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-mono">
//               [ Brand in Motion ]
//             </p>
//             <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
//               A cleaner brand system
//               <br />
//               <span className="text-blue-600">that moves with the site.</span>
//             </h2>
//             <p className="mt-6 max-w-2xl text-lg text-gray-600">
//               We turned the Yetrix mark into a reusable visual asset, so the brand can show up in
//               hero sections, pitch decks, and social previews without losing clarity or polish.
//             </p>
//           </div>

//           {/* ─── RIGHT COLUMN – Cards, Buttons, Tags ─── */}
//           <div className="flex flex-col space-y-6">
//             {/* Notes - larger cards */}
//             <div className="grid gap-4 sm:grid-cols-1">
//               {notes.map((note) => (
//                 <div
//                   key={note}
//                   className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 text-sm text-gray-600 shadow-sm hover:shadow-md transition-shadow"
//                 >
//                   {note}
//                 </div>
//               ))}
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-wrap gap-3">
//               <Link
//                 to="/contact"
//                 className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-blue-600 shadow-lg shadow-blue-200 hover:shadow-blue-300 transition hover:scale-[1.02]"
//               >
//                 Request a Quote
//                 <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//               </Link>
//               <Link
//                 to="/services"
//                 className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-gray-200/60 px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition shadow-sm"
//               >
//                 View Service Map
//               </Link>
//             </div>

//             {/* Tags */}
//             <div className="flex flex-wrap gap-2">
//               {["Transparent logo", "Cleaner pages", "Faster browsing"].map((item) => (
//                 <span
//                   key={item}
//                   className="rounded-full border border-gray-200 bg-white/60 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-gray-500"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const notes = [
  "Transparent logo asset for decks, social posts, and landing pages",
  "Animated presentation that stays readable on dark and light backgrounds",
  "Reusable brand treatment for proposals, hero headers, and launch pages",
];

export function BrandMotion() {
  return (
    <section id="brand" className="relative py-12 sm:py-16 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-2"
        >
          {/* ─── LEFT COLUMN – Brand Text ─── */}
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-mono">
              [ Brand in Motion ]
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
              A cleaner brand system
              <br />
              <span className="text-blue-600">that moves with the site.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-gray-600">
              We turned the Yetrix mark into a reusable visual asset, so the brand can show up in
              hero sections, pitch decks, and social previews without losing clarity or polish.
            </p>
          </div>

          {/* ─── RIGHT COLUMN – Cards, Buttons, Tags ─── */}
          <div className="flex flex-col space-y-6">
          
            <div className="grid gap-4 sm:grid-cols-1">
              {notes.map((note) => (
                <div
                  key={note}
                  className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 text-sm text-gray-600 shadow-sm hover:shadow-md transition-shadow"
                >
                  {note}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-blue-600 shadow-lg shadow-blue-200 hover:shadow-blue-300 transition hover:scale-[1.02]"
              >
                Request a Quote
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-gray-200/60 px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition shadow-sm"
              >
                View Service Map
              </Link>
            </div>

            {/* Tags */}
            {/* <div className="flex flex-wrap gap-2">
              {["Transparent logo", "Cleaner pages", "Faster browsing"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-200 bg-white/60 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-gray-500"
                >
                  {item}
                </span>
              ))}
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}