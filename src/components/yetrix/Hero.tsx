// import { motion } from "framer-motion";
// import { Link } from "@tanstack/react-router";
// import { NeuralScene } from "./NeuralScene";

// const stats = [
//   { value: "100+", label: "Projects Delivered" },
//   { value: "50+", label: "Clients Supported" },
//   { value: "95%", label: "Client Satisfaction" },
//   { value: "24/7", label: "Technical Support" },
// ];

// const focusTags = ["AI Platforms", "Cloud", "Automation", "SEO"];

// export function Hero() {
//   return (
//     <section id="top" className="relative min-h-[100svh] overflow-hidden pt-28 pb-16">
//       <div className="absolute inset-0 grid-bg" />
//       <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
//       <div className="absolute inset-0 -z-0">
//         <NeuralScene />
//       </div>
//       <div className="absolute inset-0 pointer-events-none" style={{
//         background: "radial-gradient(ellipse 60% 40% at 50% 90%, var(--background) 30%, transparent 70%)"
//       }} />

//       <div className="relative mx-auto max-w-7xl px-5 pt-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           className="flex justify-center"
//         >
//           <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
//             <span className="relative flex h-1.5 w-1.5">
//               <span className="absolute inset-0 rounded-full bg-[var(--mint)] opacity-75 animate-ping" />
//               <span className="relative rounded-full h-1.5 w-1.5 bg-[var(--mint)]" />
//             </span>
//             Now engineering the next generation of intelligent systems
//           </span>
//         </motion.div>

//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
//           className="mt-8 text-center text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-semibold leading-[1.02] tracking-tight"
//         >
//           AI-Powered Digital
//           <br />
//           Solutions For{" "}
//           <span className="text-gradient animate-gradient">Modern Businesses</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.35 }}
//           className="mx-auto mt-6 max-w-2xl text-center text-base md:text-lg text-muted-foreground"
//         >
//           Yetrix Technologies helps organizations scale through Artificial Intelligence, software
//           engineering, cloud infrastructure, digital marketing, automation, and enterprise transformation.
//         </motion.p>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.45 }}
//           className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground/90"
//         >
//           From launch plans to SEO content, we build the full growth stack so the site works as
//           hard as the product behind it.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.55 }}
//           className="mt-9 flex flex-wrap items-center justify-center gap-3"
//         >
//           <Link
//             to="/services"
//             className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black overflow-hidden glow-cyan"
//             style={{ background: "var(--gradient-brand)" }}
//           >
//             <span>Explore Services</span>
//             <span className="transition-transform group-hover:translate-x-1">→</span>
//           </Link>
//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/10 transition"
//           >
//             Request a Quote
//           </Link>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.7 }}
//           className="mt-6 flex flex-wrap items-center justify-center gap-2"
//         >
//           {focusTags.map((tag) => (
//             <span
//               key={tag}
//               className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
//             >
//               {tag}
//             </span>
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, delay: 0.85 }}
//           className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
//         >
//           {stats.map((s, i) => (
//             <div key={i} className="glass rounded-2xl p-5 sm:p-6 text-center">
//               <div className="text-3xl sm:text-4xl font-display font-semibold text-gradient">{s.value}</div>
//               <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.label}</div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// import { motion } from "framer-motion";
// import { Link } from "@tanstack/react-router";
// import { NeuralScene } from "./NeuralScene";

// const stats = [
//   { value: "100+", label: "Projects Delivered" },
//   { value: "50+", label: "Clients Supported" },
//   { value: "95%", label: "Client Satisfaction" },
//   { value: "24/7", label: "Technical Support" },
// ];

// const focusTags = ["AI Platforms", "Cloud", "Automation", "SEO"];

// export function Hero() {
//   return (
//     <section
//       id="top"
//       className="relative min-h-[100svh] overflow-hidden bg-white"
//     >
//       {/* NeuralScene – full background, behind everything */}
//       <div className="absolute inset-0 -z-0">
//         <NeuralScene />
//       </div>

//       {/* Left-side semi-transparent overlay for readability */}
//       <div className="absolute inset-0 -z-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent md:from-white/70 md:via-white/30 md:to-transparent" />

//       {/* Main content – left aligned */}
//       <div className="relative mx-auto flex h-full min-h-[100svh] max-w-7xl items-center px-5 pt-28 pb-16">
//         {/* Left column – text content */}
//         <div className="w-full max-w-xl md:max-w-lg lg:max-w-xl xl:max-w-2xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             className="flex"
//           >
//             <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-medium text-gray-700 border border-gray-200/60 backdrop-blur-sm">
//               <span className="relative flex h-1.5 w-1.5">
//                 <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping" />
//                 <span className="relative rounded-full h-1.5 w-1.5 bg-emerald-500" />
//               </span>
//               Now engineering the next generation of intelligent systems
//             </span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
//             className="mt-6 font-display font-semibold leading-[1.08] tracking-tight
//                        text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-gray-900 text-left"
//           >
//             AI-Powered Digital
//             <br />
//             Solutions For{" "}
//             <span className="text-blue-600">Modern Businesses</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.35 }}
//             className="mt-6 text-left text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl"
//           >
//             Yetrix Technologies helps organizations scale through Artificial Intelligence, software
//             engineering, cloud infrastructure, digital marketing, automation, and enterprise transformation.
//           </motion.p>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.45 }}
//             className="mt-3 text-left text-sm sm:text-base text-gray-500 max-w-2xl"
//           >
//             From launch plans to SEO content, we build the full growth stack so the site works as
//             hard as the product behind it.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.55 }}
//             className="mt-9 flex flex-wrap items-center gap-4"
//           >
//             <Link
//               to="/services"
//               className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all hover:scale-[1.02] active:scale-[0.98]"
//             >
//               <span>Explore Services</span>
//               <span className="transition-transform group-hover:translate-x-1">→</span>
//             </Link>
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-7 py-3.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition backdrop-blur-sm"
//             >
//               Request a Quote
//             </Link>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.7 }}
//             className="mt-8 flex flex-wrap items-center gap-2.5"
//           >
//             {focusTags.map((tag) => (
//               <span
//                 key={tag}
//                 className="rounded-full border border-gray-200 bg-white/60 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-gray-600 backdrop-blur-sm"
//               >
//                 {tag}
//               </span>
//             ))}
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, delay: 0.85 }}
//             className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl"
//           >
//             {stats.map((s, i) => (
//               <div
//                 key={i}
//                 className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 text-center border border-gray-200/70 shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div className="text-3xl sm:text-4xl font-display font-semibold text-blue-600">
//                   {s.value}
//                 </div>
//                 <div className="mt-1.5 text-xs sm:text-sm text-gray-500 font-medium">
//                   {s.label}
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Right column – intentionally empty; the 3D scene shows through */}
//         <div className="hidden md:block flex-1" />
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";
// import { Link } from "@tanstack/react-router";
// import { NeuralScene } from "./NeuralScene";

// const stats = [
//   { value: "100+", label: "Projects Delivered" },
//   { value: "50+", label: "Clients Supported" },
//   { value: "95%", label: "Client Satisfaction" },
//   { value: "24/7", label: "Technical Support" },
// ];

// const focusTags = ["AI Platforms", "Cloud", "Automation", "SEO"];

// export function Hero() {
//   return (
//     <section
//       id="top"
//       className="relative min-h-[100svh] overflow-hidden bg-white"
//     >
//       {/* NeuralScene – full background, behind everything */}
//       <div className="absolute inset-0 -z-0">
//         <NeuralScene />
//       </div>

//       {/* Left-side semi-transparent overlay for readability */}
//       <div className="absolute inset-0 -z-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent md:from-white/70 md:via-white/30 md:to-transparent" />

//       {/* Main content – left aligned */}
//       <div className="relative mx-auto flex h-full min-h-[100svh] max-w-7xl items-center px-5 pt-28 pb-16">
//         {/* Left column – text content */}
//         <div className="w-full max-w-xl md:max-w-lg lg:max-w-xl xl:max-w-2xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             className="flex"
//           >
//             <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[10px] font-medium text-gray-700 border border-gray-200/60 backdrop-blur-sm">
//               <span className="relative flex h-1.5 w-1.5">
//                 <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping" />
//                 <span className="relative rounded-full h-1.5 w-1.5 bg-emerald-500" />
//               </span>
//               Now engineering the next generation of intelligent systems
//             </span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
//             className="mt-5 font-display font-semibold leading-[1.1] tracking-tight
//                        text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 text-left"
//           >
//             AI-Powered Digital
//             <br />
//             Solutions For{" "}
//             <span className="text-blue-600">Modern Businesses</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.35 }}
//             className="mt-4 text-left text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl"
//           >
//             Yetrix Technologies helps organizations scale through Artificial Intelligence, software
//             engineering, cloud infrastructure, digital marketing, automation, and enterprise transformation.
//           </motion.p>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.45 }}
//             className="mt-2 text-left text-xs sm:text-sm text-gray-500 max-w-2xl"
//           >
//             From launch plans to SEO content, we build the full growth stack so the site works as
//             hard as the product behind it.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.55 }}
//             className="mt-6 flex flex-wrap items-center gap-3"
//           >
//             <Link
//               to="/services"
//               className="group relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all hover:scale-[1.02] active:scale-[0.98]"
//             >
//               <span>Explore Services</span>
//               <span className="transition-transform group-hover:translate-x-1">→</span>
//             </Link>
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-5 py-2.5 text-xs font-semibold text-gray-800 hover:bg-gray-50 transition backdrop-blur-sm"
//             >
//               Request a Quote
//             </Link>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.7 }}
//             className="mt-6 flex flex-wrap items-center gap-2"
//           >
//             {focusTags.map((tag) => (
//               <span
//                 key={tag}
//                 className="rounded-full border border-gray-200 bg-white/60 px-3 py-1 text-[9px] uppercase tracking-[0.15em] text-gray-600 backdrop-blur-sm"
//               >
//                 {tag}
//               </span>
//             ))}
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, delay: 0.85 }}
//             className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-xl"
//           >
//             {stats.map((s, i) => (
//               <div
//                 key={i}
//                 className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-gray-200/70 shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div className="text-xl sm:text-2xl font-display font-semibold text-blue-600">
//                   {s.value}
//                 </div>
//                 <div className="mt-1 text-[10px] sm:text-xs text-gray-500 font-medium">
//                   {s.label}
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Right column – intentionally empty; the 3D scene shows through */}
//         <div className="hidden md:block flex-1" />
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";
// import { Link } from "@tanstack/react-router";
// import { NeuralScene } from "./NeuralScene";

// const stats = [
//   { value: "100+", label: "Projects Delivered" },
//   { value: "50+", label: "Clients Supported" },
//   { value: "95%", label: "Client Satisfaction" },
//   { value: "24/7", label: "Technical Support" },
// ];

// const focusTags = ["AI Platforms", "Cloud", "Automation", "SEO"];

// export function Hero() {
//   return (
//     <section
//       id="top"
//       className="relative min-h-[100svh] overflow-hidden bg-white"
//     >
//       {/* ─── NeuralScene background ─── */}
//       <div className="absolute inset-0 -z-0">
//         <NeuralScene />
//       </div>

//       {/* ─── Left-side gradient overlay for readability ─── */}
//       <div className="absolute inset-0 -z-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent md:from-white/70 md:via-white/30 md:to-transparent" />

//       {/* ─── Main content: flex row, left text + right image ─── */}
//       <div className="relative mx-auto flex h-full min-h-[100svh] max-w-7xl items-center px-5 pt-28 pb-16">
//         {/* Left column – text content */}
//         <div className="w-full max-w-xl md:max-w-lg lg:max-w-xl xl:max-w-2xl z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             className="flex"
//           >
//             <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[10px] font-medium text-gray-700 border border-gray-200/60 backdrop-blur-sm">
//               <span className="relative flex h-1.5 w-1.5">
//                 <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping" />
//                 <span className="relative rounded-full h-1.5 w-1.5 bg-emerald-500" />
//               </span>
//               Now engineering the next generation of intelligent systems
//             </span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
//             className="mt-5 font-display font-semibold leading-[1.1] tracking-tight
//                        text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 text-left"
//           >
//             AI-Powered Digital
//             <br />
//             Solutions For{" "}
//             <span className="text-blue-600">Modern Businesses</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.35 }}
//             className="mt-4 text-left text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl"
//           >
//             Yetrix Technologies helps organizations scale through Artificial Intelligence, software
//             engineering, cloud infrastructure, digital marketing, automation, and enterprise transformation.
//           </motion.p>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.45 }}
//             className="mt-2 text-left text-xs sm:text-sm text-gray-500 max-w-2xl"
//           >
//             From launch plans to SEO content, we build the full growth stack so the site works as
//             hard as the product behind it.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.55 }}
//             className="mt-6 flex flex-wrap items-center gap-3"
//           >
//             <Link
//               to="/services"
//               className="group relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all hover:scale-[1.02] active:scale-[0.98]"
//             >
//               <span>Explore Services</span>
//               <span className="transition-transform group-hover:translate-x-1">→</span>
//             </Link>
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-5 py-2.5 text-xs font-semibold text-gray-800 hover:bg-gray-50 transition backdrop-blur-sm"
//             >
//               Request a Quote
//             </Link>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.7 }}
//             className="mt-6 flex flex-wrap items-center gap-2"
//           >
//             {focusTags.map((tag) => (
//               <span
//                 key={tag}
//                 className="rounded-full border border-gray-200 bg-white/60 px-3 py-1 text-[9px] uppercase tracking-[0.15em] text-gray-600 backdrop-blur-sm"
//               >
//                 {tag}
//               </span>
//             ))}
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, delay: 0.85 }}
//             className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-xl"
//           >
//             {stats.map((s, i) => (
//               <div
//                 key={i}
//                 className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-gray-200/70 shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div className="text-xl sm:text-2xl font-display font-semibold text-blue-600">
//                   {s.value}
//                 </div>
//                 <div className="mt-1 text-[10px] sm:text-xs text-gray-500 font-medium">
//                   {s.label}
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* ─── Right column – static image ─── */}
//         <div className="hidden md:block flex-1 ml-8 lg:ml-12 xl:ml-16 z-10">
//           <div className="relative w-full max-w-2xl mx-auto">
//             <img
//               src="/yetrixtech1.png"
//               alt="Yetrix Technologies – AI Processing Engine"
//               className="w-full h-auto object-contain rounded-2xl shadow-2xl"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";
// import { Link } from "@tanstack/react-router";
// import { NeuralScene } from "./NeuralScene";

// const stats = [
//   { value: "100+", label: "Projects Delivered" },
//   { value: "50+", label: "Clients Supported" },
//   { value: "95%", label: "Client Satisfaction" },
//   { value: "24/7", label: "Technical Support" },
// ];

// const focusTags = ["AI Platforms", "Cloud", "Automation", "SEO"];

// export function Hero() {
//   return (
//     <section
//       id="top"
//       className="relative min-h-[100svh] overflow-hidden bg-white"
//     >
//       {/* ─── Main content: flex row, left text + right image ─── */}
//       <div className="relative mx-auto flex h-full min-h-[100svh] max-w-7xl items-center px-5 pt-14 pb-10">
//         {/* Left column – text content (with glass card) */}
//         <div className="w-full max-w-xl md:max-w-lg lg:max-w-xl xl:max-w-2xl z-10 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             className="flex"
//           >
//             <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-2.5 py-0.5 text-[9px] font-medium text-gray-700 border border-gray-200/60 backdrop-blur-sm">
//               <span className="relative flex h-1 w-1">
//                 <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping" />
//                 <span className="relative rounded-full h-1 w-1 bg-emerald-500" />
//               </span>
//               Now engineering the next generation of intelligent systems
//             </span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
//             className="mt-4 font-display font-semibold leading-[1.1] tracking-tight
//                        text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 text-left"
//           >
//             AI-Powered Digital
//             <br />
//             Solutions For{" "}
//             <span className="text-blue-600">Modern Businesses</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.35 }}
//             className="mt-3 text-left text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed max-w-2xl"
//           >
//             Yetrix Technologies helps organizations scale through Artificial Intelligence, software
//             engineering, cloud infrastructure, digital marketing, automation, and enterprise transformation.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.55 }}
//             className="mt-5 flex flex-wrap items-center gap-3"
//           >
//             <Link
//               to="/services"
//               className="group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-semibold text-white bg-blue-600 shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all hover:scale-[1.02] active:scale-[0.98]"
//             >
//               <span>Explore Services</span>
//               <span className="transition-transform group-hover:translate-x-1">→</span>
//             </Link>
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-4 py-2 text-[10px] font-semibold text-gray-800 hover:bg-gray-50 transition backdrop-blur-sm"
//             >
//               Request a Quote
//             </Link>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, delay: 0.85 }}
//             className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 max-w-xl"
//           >
//             {stats.map((s, i) => (
//               <div
//                 key={i}
//                 className="bg-white/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center border border-gray-200/70 shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div className="text-base sm:text-lg font-display font-semibold text-blue-600">
//                   {s.value}
//                 </div>
//                 <div className="mt-0.5 text-[8px] sm:text-[10px] text-gray-500 font-medium">
//                   {s.label}
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* ─── Right column – NeuralScene background + image + sub-desc + tags ─── */}
//         <div className="hidden md:block flex-1 ml-6 lg:ml-10 xl:ml-14 relative z-10 overflow-hidden rounded-2xl shadow-2xl">
//           {/* NeuralScene background – only on the right side */}
//           <div className="absolute inset-0 -z-0">
//             <NeuralScene />
//           </div>

//           {/* Content on top of the animation */}
//           <div className="relative z-10 flex flex-col items-center justify-center p-6 bg-black/5 backdrop-blur-[2px] min-h-[400px]">
//             <img
//               src="/yetrixtech1.png"
//               alt="Yetrix Technologies – AI Processing Engine"
//               className="w-full max-w-sm h-auto object-contain rounded-xl shadow-lg"
//             />

//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.45 }}
//               className="mt-4 text-left w-full max-w-sm"
//             >
//               <p className="text-[10px] sm:text-xs text-white/90 leading-relaxed drop-shadow-md">
//                 From launch plans to SEO content, we build the full growth stack so the site works as
//                 hard as the product behind it.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.7 }}
//               className="mt-2 flex flex-wrap items-center justify-center gap-1.5"
//             >
//               {focusTags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="rounded-full border border-white/30 bg-white/20 px-2 py-0.5 text-[7px] uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm shadow-sm"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { NeuralScene } from "./NeuralScene";

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Clients Supported" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "24/7", label: "Technical Support" },
];

const focusTags = ["AI Platforms", "Cloud", "Automation", "SEO"];

// Stagger children animation helper
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section 
      id="top" 
      className="relative min-h-[100svh] overflow-hidden pt-28 pb-16"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-0">
        <NeuralScene />
      </div>
      
      {/* Subtle gradient overlay for better readability */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 90%, var(--background) 30%, transparent 70%)"
        }} 
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-[var(--mint)] opacity-75 animate-pulse" />
              <span className="relative rounded-full h-2 w-2 bg-[var(--mint)]" />
            </span>
            Now engineering the next generation of intelligent systems
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-center text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-semibold leading-[1.02] tracking-tight"
        >
          AI-Powered Digital
          <br />
          Solutions For{" "}
          <span className="text-gradient animate-gradient">Modern Businesses</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mx-auto mt-6 max-w-2xl text-center text-base md:text-lg text-muted-foreground"
        >
          Yetrix Technologies helps organizations scale through Artificial Intelligence, software
          engineering, cloud infrastructure, digital marketing, automation, and enterprise transformation.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground/90"
        >
          From launch plans to SEO content, we build the full growth stack so the site works as
          hard as the product behind it.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/services"
            className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-black overflow-hidden glow-cyan transition-all hover:scale-105 active:scale-95"
            style={{ background: "var(--gradient-brand)" }}
          >
            <span>Explore Services</span>
            <motion.span
              className="inline-block transition-transform group-hover:translate-x-1"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            >
              →
            </motion.span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            Request a Quote
          </Link>
        </motion.div>

        {/* Focus Tags - Using stagger animation */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {focusTags.map((tag) => (
            <motion.span
              key={tag}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -2 }}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-all hover:border-white/20 hover:bg-white/[0.08]"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Stats Grid - With staggered animations */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ 
                y: -4, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="glass rounded-2xl p-5 sm:p-7 text-center backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--mint)]/5 border border-white/5 hover:border-white/10"
            >
              <motion.div 
                className="text-3xl sm:text-4xl font-display font-semibold text-gradient"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {s.value}
              </motion.div>
              <div className="mt-1.5 text-xs sm:text-sm text-muted-foreground font-medium">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-xs text-muted-foreground/40"
          >
            <span>Scroll</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="opacity-40"
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}