// import { Link, createFileRoute } from "@tanstack/react-router";
// import { Hero } from "@/components/yetrix/Hero";
// import { Marquee } from "@/components/yetrix/Marquee";
// import { BrandMotion } from "@/components/yetrix/BrandMotion";
// import { Intro } from "@/components/yetrix/Intro";
// import { ServiceTracks } from "@/components/yetrix/ServiceTracks";
// import { PageFrame } from "@/components/yetrix/PageFrame";

// const pathways = [
//   {
//     to: "/about",
//     title: "About",
//     copy: "Meet the team story, delivery philosophy, and operating style behind the brand.",
//   },
//   {
//     to: "/services",
//     title: "Services",
//     copy: "Explore the AI, cloud, SEO, and automation lanes that can stand alone or combine.",
//   },
//   {
//     to: "/work",
//     title: "Work",
//     copy: "See outcomes, case studies, and the kinds of systems Yetrix is built to ship.",
//   },
//   {
//     to: "/contact",
//     title: "Contact",
//     copy: "Request a quote and get a tailored response within one business day.",
//   },
// ] as const;

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: "Yetrix Technologies | AI Software, Cloud, Automation & SEO" },
//       { name: "description", content: "Yetrix Technologies builds AI products, software platforms, cloud infrastructure, automation systems, SEO content, and digital growth programs for modern businesses." },
//       { name: "keywords", content: "AI software development, cloud services, automation, digital transformation, SEO, digital marketing, data annotation, machine learning, enterprise software" },
//       { name: "robots", content: "index,follow" },
//       { property: "og:title", content: "Yetrix Technologies | AI Software, Cloud, Automation & SEO" },
//       { property: "og:description", content: "AI products, cloud systems, automation, and growth programs for modern businesses." },
//       { property: "og:image", content: "/og-yetrix.png" },
//       { property: "og:image:alt", content: "Yetrix Technologies logo preview" },
//       { name: "twitter:title", content: "Yetrix Technologies | AI Software, Cloud, Automation & SEO" },
//       { name: "twitter:description", content: "AI products, cloud systems, automation, and growth programs for modern businesses." },
//       { name: "twitter:image", content: "/og-yetrix.png" },
//     ],
//   }),
//   component: Index,
// });

// function Index() {
//   return (
//     <PageFrame>
//       <Hero />
//       <Marquee />
//       <BrandMotion />
//       <Intro />
//       <ServiceTracks />

//       <section className="relative py-20 sm:py-24">
//         <div className="mx-auto max-w-7xl px-5">
//           <div className="max-w-3xl">
//             <p className="text-xs uppercase tracking-[0.3em] text-[var(--cyan)] font-mono">[ Multi Page ]</p>
//             <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
//               The rest of the site
//               <br />
//               <span className="text-gradient">lives in dedicated pages.</span>
//             </h2>
//             <p className="mt-5 text-lg text-muted-foreground">
//               Home gives the first impression. The deeper story lives in focused pages for the team,
//               the services, the work, and the quote flow.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
//             {pathways.map((item, i) => (
//               <Link
//                 key={item.to}
//                 to={item.to}
//                 className="group relative overflow-hidden rounded-3xl glass p-6 transition-transform duration-300 hover:-translate-y-1"
//               >
//                 <div
//                   className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//                   style={{
//                     background:
//                       "radial-gradient(450px circle at 50% 0%, color-mix(in oklab, var(--cyan) 14%, transparent), transparent 62%)",
//                   }}
//                 />
//                 <div className="relative font-mono text-xs text-muted-foreground">0{i + 1}</div>
//                 <div className="relative mt-5 text-2xl font-semibold">{item.title}</div>
//                 <p className="relative mt-3 text-sm leading-6 text-muted-foreground">{item.copy}</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </PageFrame>
//   );
// }
import { Link, createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/yetrix/Hero";
import { Marquee } from "@/components/yetrix/Marquee";
import { BrandMotion } from "@/components/yetrix/BrandMotion";
import { Intro } from "@/components/yetrix/Intro";
import { ServiceTracks } from "@/components/yetrix/ServiceTracks";
import { PageFrame } from "@/components/yetrix/PageFrame";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yetrix Technologies | AI Software, Cloud, Automation & SEO" },
      { name: "description", content: "Yetrix Technologies builds AI products, software platforms, cloud infrastructure, automation systems, SEO content, and digital growth programs for modern businesses." },
      { name: "keywords", content: "AI software development, cloud services, automation, digital transformation, SEO, digital marketing, data annotation, machine learning, enterprise software" },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Yetrix Technologies | AI Software, Cloud, Automation & SEO" },
      { property: "og:description", content: "AI products, cloud systems, automation, and growth programs for modern businesses." },
      { property: "og:image", content: "/og-yetrix.png" },
      { property: "og:image:alt", content: "Yetrix Technologies logo preview" },
      { name: "twitter:title", content: "Yetrix Technologies | AI Software, Cloud, Automation & SEO" },
      { name: "twitter:description", content: "AI products, cloud systems, automation, and growth programs for modern businesses." },
      { name: "twitter:image", content: "/og-yetrix.png" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageFrame>
      <Hero />
      <Marquee />
      <BrandMotion />
      <Intro />
      <ServiceTracks />
    </PageFrame>
  );
}