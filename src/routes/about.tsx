// import { createFileRoute } from "@tanstack/react-router";
// import { FAQ } from "@/components/yetrix/FAQ";
// import { PageFrame } from "@/components/yetrix/PageFrame";
// import { PageHero } from "@/components/yetrix/PageHero";
// import { WhyYetrix } from "@/components/yetrix/WhyYetrix";
// import { Workflow } from "@/components/yetrix/Workflow";

// export const Route = createFileRoute("/about")({
//   head: () => ({
//     meta: [
//       { title: "About Yetrix Technologies | Team, Process, and Brand Story" },
//       { name: "description", content: "Learn how Yetrix Technologies works, what the team values, and how the process turns ideas into production-ready AI, software, cloud, and growth systems." },
//     ],
//   }),
//   component: AboutPage,
// });

// function AboutPage() {
//   return (
//     <PageFrame>
//       <PageHero
//         eyebrow="[ About Yetrix ]"
//         title="A calm, capable partner for"
//         accent="modern teams."
//         description="Yetrix is built for teams that want a practical partner: clear scope, thoughtful delivery, and systems that keep earning their place after launch."
//         primaryTo="/contact"
//         primaryLabel="Request a Quote"
//         secondaryTo="/services"
//         secondaryLabel="See Services"
//         bullets={["Strategy first", "Production ready", "Fast communication", "Transparent scope"]}
//       />
//       <WhyYetrix />
//       <Workflow />
//       <FAQ />
//     </PageFrame>
//   );
// }

// import { createFileRoute } from "@tanstack/react-router";
// import { FAQ } from "@/components/yetrix/FAQ";
// import { PageFrame } from "@/components/yetrix/PageFrame";
// import { PageHero } from "@/components/yetrix/PageHero";
// import { WhyYetrix } from "@/components/yetrix/WhyYetrix";
// import { Workflow } from "@/components/yetrix/Workflow";

// export const Route = createFileRoute("/about")({
//   head: () => ({
//     meta: [
//       { title: "About Yetrix Technologies | Team, Process, and Brand Story" },
//       { name: "description", content: "Learn how Yetrix Technologies works, what the team values, and how the process turns ideas into production-ready AI, software, cloud, and growth systems." },
//     ],
//   }),
//   component: AboutPage,
// });

// function AboutPage() {
//   return (
//     <PageFrame className="bg-white">
//       <PageHero
//         eyebrow="[ About Yetrix ]"
//         title="A calm, capable partner for"
//         accent="modern teams."
//         description="Yetrix is built for teams that want a practical partner: clear scope, thoughtful delivery, and systems that keep earning their place after launch."
//         primaryTo="/contact"
//         primaryLabel="Request a Quote"
//         secondaryTo="/services"
//         secondaryLabel="See Services"
//         bullets={["Strategy first", "Production ready", "Fast communication", "Transparent scope"]}
//       />
//       <WhyYetrix />
//       <Workflow />
//       <FAQ />
//     </PageFrame>
//   );
// }

import { createFileRoute } from "@tanstack/react-router";
import { FAQ } from "@/components/yetrix/FAQ";
import { PageFrame } from "@/components/yetrix/PageFrame";
import { PageHero } from "@/components/yetrix/PageHero";
import { WhyYetrix } from "@/components/yetrix/WhyYetrix";
import { Workflow } from "@/components/yetrix/Workflow";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Yetrix Technologies | Team, Process, and Brand Story" },
      { name: "description", content: "Learn how Yetrix Technologies works, what the team values, and how the process turns ideas into production-ready AI, software, cloud, and growth systems." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageFrame className="bg-white">
      <PageHero
        eyebrow="[ About Yetrix ]"
        title="A calm, capable partner for"
        accent="modern teams."
        description="Yetrix is built for teams that want a practical partner: clear scope, thoughtful delivery, and systems that keep earning their place after launch."
        primaryTo="/contact"
        primaryLabel="Request a Quote"
        secondaryTo="/services"
        secondaryLabel="See Services"
        bullets={["Strategy first", "Production ready", "Fast communication", "Transparent scope"]}
      />
      <WhyYetrix />
      <Workflow />
      <FAQ />
    </PageFrame>
  );
}