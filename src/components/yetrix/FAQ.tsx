// import { motion } from "framer-motion";
// import { HelpCircle } from "lucide-react";

// const faqs = [
//   {
//     q: "What kinds of projects does Yetrix take on?",
//     a: "We work on AI software, cloud infrastructure, automation, SEO, digital marketing, data annotation, and enterprise transformation. Most projects blend at least two of those areas.",
//   },
//   {
//     q: "Can you help if we only need one service?",
//     a: "Yes. We can scope a single service cleanly or connect several services into one delivery plan. The quote request flow is built to handle both simple and complex requests.",
//   },
//   {
//     q: "Do you work with existing teams?",
//     a: "Absolutely. We often plug into in-house product, marketing, or operations teams and take ownership of a specific lane so the work moves faster.",
//   },
//   {
//     q: "Do you support SEO and content strategy too?",
//     a: "Yes. Search engine optimization, content planning, and growth automation are part of the core offer, which helps the website do more than just look polished.",
//   },
//   {
//     q: "How do quote requests work?",
//     a: "Share your goals, timeline, and service interest in the form. We reply with a tailored estimate, suggested scope, and the next step that makes the most sense.",
//   },
// ] as const;

// export function FAQ() {
//   return (
//     <section id="faq" className="relative py-28 sm:py-36">
//       <div className="mx-auto max-w-7xl px-5">
//         <div className="max-w-3xl">
//           <p className="text-xs uppercase tracking-[0.3em] text-[var(--cyan)] font-mono">[ FAQ ]</p>
//           <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
//             Answers that make it easier
//             <br />
//             <span className="text-gradient">to say yes.</span>
//           </h2>
//           <p className="mt-5 text-lg text-muted-foreground">
//             Clear answers help people move faster. These are the questions we hear most often from
//             teams looking for AI, cloud, SEO, and automation support.
//           </p>
//         </div>

//         <div className="mt-14 grid gap-4 lg:grid-cols-2">
//           {faqs.map((item, i) => (
//             <motion.div
//               key={item.q}
//               initial={{ opacity: 0, y: 28 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-60px" }}
//               transition={{ duration: 0.6, delay: i * 0.06 }}
//               className="group relative overflow-hidden rounded-3xl glass p-7"
//             >
//               <div
//                 className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//                 style={{
//                   background:
//                     "radial-gradient(500px circle at 80% 0%, color-mix(in oklab, var(--violet) 18%, transparent), transparent 62%)",
//                 }}
//               />
//               <div className="relative flex items-start gap-3">
//                 <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--mint)]" />
//                 <div>
//                   <h3 className="text-xl font-semibold leading-tight">{item.q}</h3>
//                   <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.a}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What kinds of projects does Yetrix take on?",
    a: "We work on AI software, cloud infrastructure, automation, SEO, digital marketing, data annotation, and enterprise transformation. Most projects blend at least two of those areas.",
  },
  {
    q: "Can you help if we only need one service?",
    a: "Yes. We can scope a single service cleanly or connect several services into one delivery plan. The quote request flow is built to handle both simple and complex requests.",
  },
  {
    q: "Do you work with existing teams?",
    a: "Absolutely. We often plug into in-house product, marketing, or operations teams and take ownership of a specific lane so the work moves faster.",
  },
  {
    q: "Do you support SEO and content strategy too?",
    a: "Yes. Search engine optimization, content planning, and growth automation are part of the core offer, which helps the website do more than just look polished.",
  },
  {
    q: "How do quote requests work?",
    a: "Share your goals, timeline, and service interest in the form. We reply with a tailored estimate, suggested scope, and the next step that makes the most sense.",
  },
] as const;

export function FAQ() {
  return (
    <section id="faq" className="relative py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-mono">
            [ FAQ ]
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
            Answers that make it easier
            <br />
            <span className="text-blue-600">to say yes.</span>
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Clear answers help people move faster. These are the questions we hear most often from
            teams looking for AI, cloud, SEO, and automation support.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {faqs.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/60 p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Removed dark radial gradient overlay */}
              <div className="relative flex items-start gap-3">
                <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                <div>
                  <h3 className="text-xl font-semibold leading-tight text-gray-900">{item.q}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{item.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}