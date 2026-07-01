
// import { createFileRoute } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { PageFrame } from "@/components/yetrix/PageFrame";
// import { PageHero } from "@/components/yetrix/PageHero";
// import { FAQ } from "@/components/yetrix/FAQ";
// import { 
//   FileText, 
//   Box, 
//   Hospital, 
//   Mail, 
//   CheckCircle, 
//   TrendingUp,
// } from "lucide-react";

// export const Route = createFileRoute("/product")({
//   head: () => ({
//     meta: [
//       { title: "Yetrix Product | AI-Powered Solutions for Modern Business" },
//       { name: "description", content: "Discover Yetrix's AI-powered products for modern businesses." },
//     ],
//   }),
//   component: ProductPage,
// });

// // ─── Product Data (Streamlined) ───
// const products = [
//   {
//     id: "ai-doc",
//     title: "AI Documentation Platform",
//     tag: "AI & Automation",
//     icon: FileText,
//     image: "/Aidoc.png",
//     imageAlt: "AI Documentation Platform",
//     overview: "Automate document extraction, classification, and validation using AI, OCR, and Machine Learning. Convert unstructured documents into structured digital data with enterprise-grade security.",
//     features: [
//       "AI-powered document classification",
//       "OCR-based text and data extraction",
//       "Multi-format document parsing",
//       "Workflow automation & approval management",
//       "API integration with ERP, CRM & Banking systems",
//       "Secure cloud & on-premise deployment"
//     ],
//     benefits: [
//       "Reduces manual processing by up to 90%",
//       "Improves data accuracy & consistency",
//       "Accelerates document turnaround time",
//       "Minimizes operational costs",
//       "Enhances regulatory compliance"
//     ],
//     industries: ["Banking", "Healthcare", "Insurance", "Government", "Manufacturing", "Logistics", "Education"],
//     accent: "#0F4CFF"
//   },
//   {
//     id: "stl-step",
//     title: "STL to CAD Reconstruction Platform",
//     tag: "CAD & Engineering",
//     icon: Box,
//     image: "/stl.png", 
//     imageAlt: "STL to STEP Reconstruction Platform",
//     overview: "Convert STL mesh files into fully editable, feature-based CAD and STEP models. A hybrid approach combining 80% automation with 20% expert refinement delivers manufacturing-ready results.",
//     features: [
//       "STL Mesh to STEP & CAD Conversion",
//       "Feature-Based CAD Reconstruction",
//       "Surface Modeling & Repair",
//       "Parametric CAD Generation",
//       "CAD Validation & Quality Verification"
//     ],
//     benefits: [
//       "Eliminates product redesign from scratch",
//       "Accelerates reverse engineering projects",
//       "Reduces product development costs",
//       "Supports legacy component recreation",
//       "Improves manufacturing accuracy"
//     ],
//     industries: ["Automotive", "Aerospace", "Manufacturing", "Medical Device", "Industrial Equipment", "3D Printing"],
//     accent: "#6D5DFB"
//   },
//   {
//     id: "hospital",
//     title: "Hospital Server Platform",
//     tag: "Healthcare IT",
//     icon: Hospital,
//     image: "/hospital.png", 
//     imageAlt: "Hospital Server Platform",
//     overview: "A comprehensive healthcare infrastructure solution managing patient information, billing automation, EMR, and resource monitoring with secure, scalable digital systems.",
//     features: [
//       "Patient Information Management",
//       "Hospital Billing Automation",
//       "Electronic Medical Records (EMR)",
//       "Appointment & Resource Management",
//       "Performance Monitoring Dashboard",
//       "Role-Based User Access Control"
//     ],
//     benefits: [
//       "Improves hospital operational efficiency",
//       "Reduces administrative workload",
//       "Enhances patient record management",
//       "Supports faster billing & appointments",
//       "Ensures secure healthcare data storage"
//     ],
//     industries: ["Hospitals", "Multi-Specialty Clinics", "Diagnostic Centers", "Medical Colleges", "Healthcare Organizations"],
//     accent: "#00E5FF"
//   },
//   {
//     id: "email",
//     title: "Business Email Workspace",
//     tag: "Business Communication",
//     icon: Mail,
//     image: "/email.png", 
//     imageAlt: "Business Email Workspace",
//     overview: "A secure enterprise communication solution with professional domain-based email hosting, collaboration tools, and enterprise-grade security on Google Workspace & Microsoft 365.",
//     features: [
//       "Professional Domain-Based Email Hosting",
//       "Google Workspace & Microsoft 365 Deployment",
//       "Shared Calendars & Cloud Collaboration",
//       "Email Backup & Recovery",
//       "Multi-Factor Authentication (MFA)",
//       "Advanced Spam & Threat Protection"
//     ],
//     benefits: [
//       "Builds a professional business identity",
//       "Enhances communication & collaboration",
//       "Improves data security & compliance",
//       "Simplifies user & email management",
//       "Enables secure remote work"
//     ],
//     industries: ["Startups", "SMEs", "Corporate Enterprises", "Educational Institutions", "Healthcare", "IT & Technology"],
//     accent: "#00FFB3"
//   }
// ];

// // ─── Product Card Component (Simplified) ───
// function ProductCard({ product, index }: { product: typeof products[0], index: number }) {
//   const Icon = product.icon;
//   const isEven = index % 2 === 0;
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-50px" }}
//       transition={{ duration: 0.6, delay: 0.1 }}
//       className={`grid lg:grid-cols-2 gap-10 items-center py-14 ${
//         index !== products.length - 1 ? "border-b border-gray-200/60" : ""
//       }`}
//     >
//       {/* ─── Image ─── */}
//       <div className={`${isEven ? "order-1" : "order-2"}`}>
//         <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50/80 to-blue-100/40 border border-blue-200/30 shadow-xl aspect-[4/3] group">
//           <img
//             src={product.image}
//             alt={product.imageAlt}
//             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//             onError={(e) => {
//               const target = e.target as HTMLImageElement;
//               target.style.display = 'none';
//               const parent = target.parentElement;
//               if (parent) {
//                 const fallback = document.createElement('div');
//                 fallback.className = 'flex flex-col items-center justify-center h-full p-8 text-center';
//                 fallback.innerHTML = `
//                   <div class="w-20 h-20 rounded-2xl flex items-center justify-center mb-4" style="background: ${product.accent}20">
//                     <svg class="w-10 h-10" style="color: ${product.accent}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <p class="text-sm text-gray-500 font-mono">${product.image}</p>
//                 `;
//                 parent.appendChild(fallback);
//               }
//             }}
//           />
          
//           <div className="absolute top-4 left-4">
//             <span 
//               className="text-[10px] font-mono tracking-widest px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-md border border-white/20 font-semibold"
//               style={{ color: product.accent }}
//             >
//               {product.tag}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* ─── Content ─── */}
//       <div className={`${isEven ? "order-2" : "order-1"} space-y-5`}>
//         {/* Header */}
//         <div className="flex items-center gap-3">
//           <div 
//             className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md"
//             style={{ background: `${product.accent}15` }}
//           >
//             <Icon className="w-5 h-5" style={{ color: product.accent }} />
//           </div>
//           <span 
//             className="text-xs font-mono tracking-wider px-3 py-1 rounded-full"
//             style={{ background: `${product.accent}10`, color: product.accent }}
//           >
//             {product.tag}
//           </span>
//         </div>

//         {/* Title */}
//         <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 leading-tight">
//           {product.title}
//         </h3>

//         {/* Description */}
//         <p className="text-gray-600 leading-relaxed text-sm">
//           {product.overview}
//         </p>

//         {/* Stats */}
//         <div className="grid grid-cols-3 gap-3">
//           <div 
//             className="rounded-xl p-3 text-center border transition-all hover:shadow-md"
//             style={{ borderColor: `${product.accent}25` }}
//           >
//             <div className="text-lg font-bold" style={{ color: product.accent }}>
//               {product.features.length}
//             </div>
//             <div className="text-[9px] text-gray-500 uppercase tracking-wider font-medium">Features</div>
//           </div>
//           <div 
//             className="rounded-xl p-3 text-center border transition-all hover:shadow-md"
//             style={{ borderColor: `${product.accent}25` }}
//           >
//             <div className="text-lg font-bold" style={{ color: product.accent }}>
//               {product.benefits.length}
//             </div>
//             <div className="text-[9px] text-gray-500 uppercase tracking-wider font-medium">Benefits</div>
//           </div>
//           <div 
//             className="rounded-xl p-3 text-center border transition-all hover:shadow-md"
//             style={{ borderColor: `${product.accent}25` }}
//           >
//             <div className="text-lg font-bold" style={{ color: product.accent }}>
//               {product.industries.length}
//             </div>
//             <div className="text-[9px] text-gray-500 uppercase tracking-wider font-medium">Industries</div>
//           </div>
//         </div>

//         {/* Features & Benefits (compact) */}
//         <div className="grid sm:grid-cols-2 gap-4">
//           <div>
//             <h4 className="text-xs font-semibold text-gray-900 mb-2 flex items-center gap-2">
//               <div className="w-1 h-3 rounded-full" style={{ background: product.accent }} />
//               Features
//             </h4>
//             <ul className="space-y-1.5">
//               {product.features.slice(0, 4).map((feature) => (
//                 <li key={feature} className="flex items-start gap-2 text-xs text-gray-600">
//                   <span className="mt-1 w-1 h-1 rounded-full shrink-0" style={{ background: product.accent }} />
//                   <span>{feature}</span>
//                 </li>
//               ))}
//               {product.features.length > 4 && (
//                 <li 
//                   className="text-xs font-medium cursor-pointer hover:underline"
//                   style={{ color: product.accent }}
//                   onClick={() => setExpanded(!expanded)}
//                 >
//                   {expanded ? "Show less ↑" : `+${product.features.length - 4} more`}
//                 </li>
//               )}
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-xs font-semibold text-gray-900 mb-2 flex items-center gap-2">
//               <div className="w-1 h-3 rounded-full bg-emerald-500" />
//               Benefits
//             </h4>
//             <ul className="space-y-1.5">
//               {product.benefits.slice(0, 4).map((benefit) => (
//                 <li key={benefit} className="flex items-start gap-2 text-xs text-gray-600">
//                   <span className="mt-1 w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
//                   <span>{benefit}</span>
//                 </li>
//               ))}
//               {product.benefits.length > 4 && (
//                 <li 
//                   className="text-xs font-medium cursor-pointer hover:underline"
//                   style={{ color: product.accent }}
//                   onClick={() => setExpanded(!expanded)}
//                 >
//                   {expanded ? "Show less ↑" : `+${product.benefits.length - 4} more`}
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>

//         {/* Industries (compact) */}
//         <div className="flex flex-wrap gap-1.5">
//           {product.industries.slice(0, 5).map((industry) => (
//             <span 
//               key={industry} 
//               className="text-[9px] px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200 font-medium"
//             >
//               {industry}
//             </span>
//           ))}
//           {product.industries.length > 5 && (
//             <span 
//               className="text-[9px] px-2.5 py-1 rounded-full font-medium cursor-pointer"
//               style={{ background: `${product.accent}10`, color: product.accent }}
//               onClick={() => setExpanded(!expanded)}
//             >
//               +{product.industries.length - 5}
//             </span>
//           )}
//         </div>

//         {/* Expanded content */}
//         {expanded && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="space-y-4 pt-4 border-t border-gray-200/60"
//           >
//             {product.features.length > 4 && (
//               <div>
//                 <h4 className="text-xs font-semibold text-gray-900 mb-2">All Features</h4>
//                 <ul className="grid sm:grid-cols-2 gap-1">
//                   {product.features.map((feature) => (
//                     <li key={feature} className="flex items-start gap-2 text-xs text-gray-600">
//                       <span className="mt-1 w-1 h-1 rounded-full shrink-0" style={{ background: product.accent }} />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
            
//             {product.benefits.length > 4 && (
//               <div>
//                 <h4 className="text-xs font-semibold text-gray-900 mb-2">All Benefits</h4>
//                 <ul className="grid sm:grid-cols-2 gap-1">
//                   {product.benefits.map((benefit) => (
//                     <li key={benefit} className="flex items-start gap-2 text-xs text-gray-600">
//                       <span className="mt-1 w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
//                       <span>{benefit}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {product.industries.length > 5 && (
//               <div>
//                 <h4 className="text-xs font-semibold text-gray-900 mb-2">All Industries</h4>
//                 <div className="flex flex-wrap gap-1.5">
//                   {product.industries.map((industry) => (
//                     <span 
//                       key={industry} 
//                       className="text-[9px] px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200"
//                     >
//                       {industry}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         )}

//         {/* CTA */}
//         <div className="pt-2">
//           <a
//             href="/contact"
//             className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:scale-[1.02] group"
//             style={{ color: product.accent }}
//           >
//             <span>Learn more</span>
//             <span className="transition-transform group-hover:translate-x-1">→</span>
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // ─── Main Product Page ───
// function ProductPage() {
//   return (
//     <PageFrame className="bg-white">
//       <PageHero
//         eyebrow="[ Yetrix Products ]"
//         title="Intelligent Solutions"
//         accent="for Modern Business."
//         description="Explore our suite of AI-powered products designed to transform document processing, engineering, healthcare, and business communication."
//         primaryTo="/contact"
//         primaryLabel="Request a Demo"
//         secondaryTo="/services"
//         secondaryLabel="See All Services"
//         bullets={["AI-powered", "Scalable", "Secure", "Enterprise-ready"]}
//       />

//       <section className="relative py-8 sm:py-12 bg-white">
//         <div className="mx-auto max-w-7xl px-5">
//           <div className="text-center max-w-3xl mx-auto mb-10">
//             <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-mono">
//               [ Our Products ]
//             </p>
//             <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
//               Built for the <span className="text-blue-600">future of work.</span>
//             </h2>
//           </div>

//           {products.map((product, index) => (
//             <ProductCard key={product.id} product={product} index={index} />
//           ))}
//         </div>
//       </section>

//       <FAQ />
//     </PageFrame>
//   );
// }
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageFrame } from "@/components/yetrix/PageFrame";
import { PageHero } from "@/components/yetrix/PageHero";
import { FAQ } from "@/components/yetrix/FAQ";
import { 
  FileText, 
  Box, 
  Hospital, 
  Mail, 
  CheckCircle, 
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Yetrix Product | AI-Powered Solutions for Modern Business" },
      { name: "description", content: "Discover Yetrix's AI-powered products for modern businesses." },
    ],
  }),
  component: ProductPage,
});

// ─── Product Data (Streamlined) ───
const products = [
  {
    id: "ai-doc",
    title: "AI Documentation Platform",
    tag: "AI & Automation",
    icon: FileText,
    image: "/Aidoc.png",
    imageAlt: "AI Documentation Platform",
    overview: "Automate document extraction, classification, and validation using AI, OCR, and Machine Learning. Convert unstructured documents into structured digital data with enterprise-grade security.",
    features: [
      "AI-powered document classification",
      "OCR-based text and data extraction",
      "Multi-format document parsing",
      "Workflow automation & approval management",
      "API integration with ERP, CRM & Banking systems",
      "Secure cloud & on-premise deployment"
    ],
    benefits: [
      "Reduces manual processing by up to 90%",
      "Improves data accuracy & consistency",
      "Accelerates document turnaround time",
      "Minimizes operational costs",
      "Enhances regulatory compliance"
    ],
    industries: ["Banking", "Healthcare", "Insurance", "Government", "Manufacturing", "Logistics", "Education"],
    accent: "#0F4CFF"
  },
  {
    id: "stl-step",
    title: "STL to CAD Reconstruction Platform",
    tag: "CAD & Engineering",
    icon: Box,
    image: "/stl.png", 
    imageAlt: "STL to STEP Reconstruction Platform",
    overview: "Convert STL mesh files into fully editable, feature-based CAD and STEP models. A hybrid approach combining 80% automation with 20% expert refinement delivers manufacturing-ready results.",
    features: [
      "STL Mesh to STEP & CAD Conversion",
      "Feature-Based CAD Reconstruction",
      "Surface Modeling & Repair",
      "Parametric CAD Generation",
      "CAD Validation & Quality Verification"
    ],
    benefits: [
      "Eliminates product redesign from scratch",
      "Accelerates reverse engineering projects",
      "Reduces product development costs",
      "Supports legacy component recreation",
      "Improves manufacturing accuracy"
    ],
    industries: ["Automotive", "Aerospace", "Manufacturing", "Medical Device", "Industrial Equipment", "3D Printing"],
    accent: "#6D5DFB"
  },
  {
    id: "hospital",
    title: "Hospital Server Platform",
    tag: "Healthcare IT",
    icon: Hospital,
    image: "/hospital.png", 
    imageAlt: "Hospital Server Platform",
    overview: "A comprehensive healthcare infrastructure solution managing patient information, billing automation, EMR, and resource monitoring with secure, scalable digital systems.",
    features: [
      "Patient Information Management",
      "Hospital Billing Automation",
      "Electronic Medical Records (EMR)",
      "Appointment & Resource Management",
      "Performance Monitoring Dashboard",
      "Role-Based User Access Control"
    ],
    benefits: [
      "Improves hospital operational efficiency",
      "Reduces administrative workload",
      "Enhances patient record management",
      "Supports faster billing & appointments",
      "Ensures secure healthcare data storage"
    ],
    industries: ["Hospitals", "Multi-Specialty Clinics", "Diagnostic Centers", "Medical Colleges", "Healthcare Organizations"],
    accent: "#00E5FF"
  },
  {
    id: "email",
    title: "Business Email Workspace",
    tag: "Business Communication",
    icon: Mail,
    image: "/email.png", 
    imageAlt: "Business Email Workspace",
    overview: "A secure enterprise communication solution with professional domain-based email hosting, collaboration tools, and enterprise-grade security on Google Workspace & Microsoft 365.",
    features: [
      "Professional Domain-Based Email Hosting",
      "Google Workspace & Microsoft 365 Deployment",
      "Shared Calendars & Cloud Collaboration",
      "Email Backup & Recovery",
      "Multi-Factor Authentication (MFA)",
      "Advanced Spam & Threat Protection"
    ],
    benefits: [
      "Builds a professional business identity",
      "Enhances communication & collaboration",
      "Improves data security & compliance",
      "Simplifies user & email management",
      "Enables secure remote work"
    ],
    industries: ["Startups", "SMEs", "Corporate Enterprises", "Educational Institutions", "Healthcare", "IT & Technology"],
    accent: "#00FFB3"
  }
];

// ─── Product Card Component (Simplified) ───
function ProductCard({ product, index }: { product: typeof products[0], index: number }) {
  const Icon = product.icon;
  const isEven = index % 2 === 0;
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`grid lg:grid-cols-2 gap-10 items-center py-14 ${
        index !== products.length - 1 ? "border-b border-gray-200/60" : ""
      }`}
    >
      {/* ─── Image ─── */}
      <div className={`${isEven ? "order-1" : "order-2"}`}>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50/80 to-blue-100/40 border border-blue-200/30 shadow-xl aspect-[4/3] group">
          <img
            src={product.image}
            alt={product.imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                const fallback = document.createElement('div');
                fallback.className = 'flex flex-col items-center justify-center h-full p-8 text-center';
                fallback.innerHTML = `
                  <div class="w-20 h-20 rounded-2xl flex items-center justify-center mb-4" style="background: ${product.accent}20">
                    <svg class="w-10 h-10" style="color: ${product.accent}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p class="text-sm text-gray-500 font-mono">${product.image}</p>
                `;
                parent.appendChild(fallback);
              }
            }}
          />
          
          <div className="absolute top-4 left-4">
            <span 
              className="text-[10px] font-mono tracking-widest px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-md border border-white/20 font-semibold"
              style={{ color: product.accent }}
            >
              {product.tag}
            </span>
          </div>
        </div>
      </div>

      {/* ─── Content ─── */}
      <div className={`${isEven ? "order-2" : "order-1"} space-y-5`}>
        {/* Header */}
        <div className="flex items-center gap-3">
          <div 
            className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md"
            style={{ background: `${product.accent}15` }}
          >
            <Icon className="w-5 h-5" style={{ color: product.accent }} />
          </div>
          <span 
            className="text-xs font-mono tracking-wider px-3 py-1 rounded-full"
            style={{ background: `${product.accent}10`, color: product.accent }}
          >
            {product.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 leading-tight">
          {product.title}
        </h3>

        {/* Description - LARGER FONT */}
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          {product.overview}
        </p>

        {/* Stats - LARGER FONT */}
        <div className="grid grid-cols-3 gap-3">
          <div 
            className="rounded-xl p-3.5 text-center border transition-all hover:shadow-md"
            style={{ borderColor: `${product.accent}25` }}
          >
            <div className="text-xl font-bold" style={{ color: product.accent }}>
              {product.features.length}
            </div>
            <div className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">Features</div>
          </div>
          <div 
            className="rounded-xl p-3.5 text-center border transition-all hover:shadow-md"
            style={{ borderColor: `${product.accent}25` }}
          >
            <div className="text-xl font-bold" style={{ color: product.accent }}>
              {product.benefits.length}
            </div>
            <div className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">Benefits</div>
          </div>
          <div 
            className="rounded-xl p-3.5 text-center border transition-all hover:shadow-md"
            style={{ borderColor: `${product.accent}25` }}
          >
            <div className="text-xl font-bold" style={{ color: product.accent }}>
              {product.industries.length}
            </div>
            <div className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">Industries</div>
          </div>
        </div>

        {/* Features & Benefits - LARGER FONT */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2.5 flex items-center gap-2">
              <div className="w-1 h-4 rounded-full" style={{ background: product.accent }} />
              Features
            </h4>
            <ul className="space-y-2">
              {product.features.slice(0, 4).map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: product.accent }} />
                  <span>{feature}</span>
                </li>
              ))}
              {product.features.length > 4 && (
                <li 
                  className="text-sm font-medium cursor-pointer hover:underline"
                  style={{ color: product.accent }}
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded ? "Show less ↑" : `+${product.features.length - 4} more`}
                </li>
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2.5 flex items-center gap-2">
              <div className="w-1 h-4 rounded-full bg-emerald-500" />
              Benefits
            </h4>
            <ul className="space-y-2">
              {product.benefits.slice(0, 4).map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
              {product.benefits.length > 4 && (
                <li 
                  className="text-sm font-medium cursor-pointer hover:underline"
                  style={{ color: product.accent }}
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded ? "Show less ↑" : `+${product.benefits.length - 4} more`}
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Industries - LARGER FONT */}
        <div className="flex flex-wrap gap-2">
          {product.industries.slice(0, 5).map((industry) => (
            <span 
              key={industry} 
              className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200 font-medium"
            >
              {industry}
            </span>
          ))}
          {product.industries.length > 5 && (
            <span 
              className="text-xs px-3 py-1 rounded-full font-medium cursor-pointer"
              style={{ background: `${product.accent}10`, color: product.accent }}
              onClick={() => setExpanded(!expanded)}
            >
              +{product.industries.length - 5}
            </span>
          )}
        </div>

        {/* Expanded content */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 pt-4 border-t border-gray-200/60"
          >
            {product.features.length > 4 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">All Features</h4>
                <ul className="grid sm:grid-cols-2 gap-1.5">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: product.accent }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {product.benefits.length > 4 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">All Benefits</h4>
                <ul className="grid sm:grid-cols-2 gap-1.5">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.industries.length > 5 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">All Industries</h4>
                <div className="flex flex-wrap gap-2">
                  {product.industries.map((industry) => (
                    <span 
                      key={industry} 
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* CTA */}
        <div className="pt-2">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:scale-[1.02] group"
            style={{ color: product.accent }}
          >
            <span>Learn more</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Product Page ───
function ProductPage() {
  return (
    <PageFrame className="bg-white">
      <PageHero
        eyebrow="[ Yetrix Products ]"
        title="Intelligent Solutions"
        accent="for Modern Business."
        description="Explore our suite of AI-powered products designed to transform document processing, engineering, healthcare, and business communication."
        primaryTo="/contact"
        primaryLabel="Request a Demo"
        secondaryTo="/services"
        secondaryLabel="See All Services"
        bullets={["AI-powered", "Scalable", "Secure", "Enterprise-ready"]}
      />

      <section className="relative py-8 sm:py-12 bg-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-mono">
              [ Our Products ]
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
              Built for the <span className="text-blue-600">future of work.</span>
            </h2>
          </div>

          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      <FAQ />
    </PageFrame>
  );
}