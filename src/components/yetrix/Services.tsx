// import { motion } from "framer-motion";
// import { Link } from "@tanstack/react-router";
// import { Brain, Code2, Database, Cloud, Megaphone, Workflow as WorkflowIcon } from "lucide-react";
// import type { LucideIcon } from "lucide-react";

// type Service = {
//   icon: LucideIcon;
//   title: string;
//   tag: string;
//   summary: string;
//   items: string[];
// };

// const services: Service[] = [
//   {
//     icon: Brain,
//     title: "AI & Digital Solutions",
//     tag: "AI",
//     summary: "Custom assistants, automation, and decision systems tailored to your business.",
//     items: [
//       "AI Software Development",
//       "Custom AI Platforms",
//       "Machine Learning Solutions",
//       "AI Chatbots & Knowledge Systems",
//       "Intelligent Document Processing (OCR)",
//       "AI Documentation Automation",
//     ],
//   },
//   {
//     icon: Code2,
//     title: "Software Development",
//     tag: "ENG",
//     summary: "Web, mobile, and SaaS builds with clear architecture and delivery milestones.",
//     items: [
//       "Web Application Development",
//       "Mobile App Development",
//       "SaaS Platform Development",
//       "Enterprise Software Solutions",
//       "Cloud-Based Applications",
//       "API Development & Integration",
//     ],
//   },
//   {
//     icon: Database,
//     title: "Data & AI Training Services",
//     tag: "DATA",
//     summary: "Clean, labeled, validated data that helps teams train better systems faster.",
//     items: [
//       "Data Annotation & Labeling",
//       "Image Annotation",
//       "Video Annotation",
//       "Audio Annotation",
//       "AI Training Dataset Preparation",
//       "Data Processing & Validation",
//     ],
//   },
//   {
//     icon: Cloud,
//     title: "IT & Cloud Services",
//     tag: "CLOUD",
//     summary: "Infrastructure, security, and support that keep the stack stable and observable.",
//     items: [
//       "Cloud Computing Solutions",
//       "Managed IT Services",
//       "Cybersecurity Solutions",
//       "Infrastructure Management",
//       "IT Consulting",
//       "Technical Support",
//     ],
//   },
//   {
//     icon: Megaphone,
//     title: "Digital Marketing & Automation",
//     tag: "GROWTH",
//     summary: "Search, content, and automation systems that keep demand moving in the background.",
//     items: [
//       "Social Media Marketing",
//       "Email Marketing Automation",
//       "Marketing Automation Platforms",
//       "SEO Services",
//       "PPC Campaign Management",
//       "Digital Brand Strategy",
//       "Lead Generation Systems",
//     ],
//   },
//   {
//     icon: WorkflowIcon,
//     title: "Enterprise Digital Transformation",
//     tag: "OPS",
//     summary: "Process redesign, analytics, and workflow systems for teams that need to move faster.",
//     items: [
//       "Business Process Automation",
//       "Workflow Management Systems",
//       "Digital Transformation Consulting",
//       "Data Analytics & Business Intelligence",
//       "Customer Support Platforms",
//     ],
//   },
// ];

// export function Services() {
//   return (
//     <section id="services" className="relative py-28 sm:py-36">
//       <div className="mx-auto max-w-7xl px-5">
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
//           <div>
//             <p className="text-xs uppercase tracking-[0.3em] text-[var(--cyan)] font-mono">[ Capabilities ]</p>
//             <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
//               A full-stack partner for <br />
//               <span className="text-gradient">enterprise innovation</span>.
//             </h2>
//           </div>
//           <p className="text-muted-foreground max-w-md">
//             Six integrated practices, each with its own scope and deliverables. Use one lane or
//             combine them into a tailored transformation program for your organization.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {services.map((s, i) => (
//             <ServiceCard key={s.title} s={s} i={i} />
//           ))}
//         </div>

//         <div className="mt-10 flex flex-wrap items-center gap-4">
//           <Link
//             to="/contact"
//             className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black glow-cyan"
//             style={{ background: "var(--gradient-brand)" }}
//           >
//             Request a Quote
//             <span className="transition-transform group-hover:translate-x-1">→</span>
//           </Link>
//           <span className="text-sm text-muted-foreground">
//             Each service can stand alone or roll into one bigger plan.
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ServiceCard({ s, i }: { s: Service; i: number }) {
//   const Icon = s.icon;
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-50px" }}
//       transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
//       whileHover={{ y: -6 }}
//       className="group relative glass rounded-2xl p-6 sm:p-7 overflow-hidden"
//     >
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//            style={{ background: "radial-gradient(400px circle at 50% 0%, color-mix(in oklab, var(--cyan) 14%, transparent), transparent 60%)" }} />
//       <div className="relative flex items-start justify-between">
//         <div className="flex h-12 w-12 items-center justify-center rounded-xl glass-strong">
//           <Icon className="h-5 w-5 text-[var(--cyan)]" />
//         </div>
//         <span className="font-mono text-[10px] tracking-widest text-muted-foreground border border-white/10 rounded-full px-2 py-1">
//           {s.tag}
//         </span>
//       </div>
//       <h3 className="relative mt-6 text-xl font-semibold leading-tight">{s.title}</h3>
//       <p className="relative mt-3 text-sm leading-6 text-muted-foreground">{s.summary}</p>
//       <ul className="relative mt-5 space-y-2.5">
//         {s.items.map((item) => (
//           <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
//             <span className="mt-1.5 h-1 w-1 rounded-full bg-[var(--cyan)] shrink-0" />
//             <span>{item}</span>
//           </li>
//         ))}
//       </ul>
//     </motion.div>
//   );
// }
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Brain, Code2, Database, Cloud, Megaphone, Workflow as WorkflowIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  tag: string;
  summary: string;
  items: string[];
};

const services: Service[] = [
  {
    icon: Brain,
    title: "AI & Digital Solutions",
    tag: "AI",
    summary: "Custom assistants, automation, and decision systems tailored to your business.",
    items: [
      "AI Software Development",
      "Custom AI Platforms",
      "Machine Learning Solutions",
      "AI Chatbots & Knowledge Systems",
      "Intelligent Document Processing (OCR)",
      "AI Documentation Automation",
    ],
  },
  {
    icon: Code2,
    title: "Software Development",
    tag: "ENG",
    summary: "Web, mobile, and SaaS builds with clear architecture and delivery milestones.",
    items: [
      "Web Application Development",
      "Mobile App Development",
      "SaaS Platform Development",
      "Enterprise Software Solutions",
      "Cloud-Based Applications",
      "API Development & Integration",
    ],
  },
  {
    icon: Database,
    title: "Data & AI Training Services",
    tag: "DATA",
    summary: "Clean, labeled, validated data that helps teams train better systems faster.",
    items: [
      "Data Annotation & Labeling",
      "Image Annotation",
      "Video Annotation",
      "Audio Annotation",
      "AI Training Dataset Preparation",
      "Data Processing & Validation",
    ],
  },
  {
    icon: Cloud,
    title: "IT & Cloud Services",
    tag: "CLOUD",
    summary: "Infrastructure, security, and support that keep the stack stable and observable.",
    items: [
      "Cloud Computing Solutions",
      "Managed IT Services",
      "Cybersecurity Solutions",
      "Infrastructure Management",
      "IT Consulting",
      "Technical Support",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Automation",
    tag: "GROWTH",
    summary: "Search, content, and automation systems that keep demand moving in the background.",
    items: [
      "Social Media Marketing",
      "Email Marketing Automation",
      "Marketing Automation Platforms",
      "SEO Services",
      "PPC Campaign Management",
      "Digital Brand Strategy",
      "Lead Generation Systems",
    ],
  },
  {
    icon: WorkflowIcon,
    title: "Enterprise Digital Transformation",
    tag: "OPS",
    summary: "Process redesign, analytics, and workflow systems for teams that need to move faster.",
    items: [
      "Business Process Automation",
      "Workflow Management Systems",
      "Digital Transformation Consulting",
      "Data Analytics & Business Intelligence",
      "Customer Support Platforms",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-mono">
              [ Capabilities ]
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
              A full-stack partner for <br />
              <span className="text-blue-600">enterprise innovation</span>.
            </h2>
          </div>
          <p className="text-gray-600 max-w-md text-sm sm:text-base">
            Six integrated practices, each with its own scope and deliverables. Use one lane or
            combine them into a tailored transformation program for your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-blue-600 shadow-lg shadow-blue-200 hover:shadow-blue-300 transition hover:scale-[1.02]"
          >
            Request a Quote
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <span className="text-sm text-gray-500">
            Each service can stand alone or roll into one bigger plan.
          </span>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ s, i }: { s: Service; i: number }) {
  const Icon = s.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 sm:p-7 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Removed dark radial gradient overlay */}
      <div className="relative flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
          <Icon className="h-5 w-5 text-blue-600" />
        </div>
        <span className="font-mono text-[10px] tracking-widest text-gray-500 border border-gray-200 rounded-full px-2 py-1">
          {s.tag}
        </span>
      </div>
      <h3 className="relative mt-6 text-xl font-semibold leading-tight text-gray-900">{s.title}</h3>
      <p className="relative mt-3 text-sm leading-6 text-gray-600">{s.summary}</p>
      <ul className="relative mt-5 space-y-2.5">
        {s.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
            <span className="mt-1.5 h-1 w-1 rounded-full bg-blue-500 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}