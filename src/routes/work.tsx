import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CaseStudies } from "@/components/yetrix/CaseStudies";
import { PageFrame } from "@/components/yetrix/PageFrame";
import { PageHero } from "@/components/yetrix/PageHero";
import { Testimonials } from "@/components/yetrix/Testimonials";

const GlobeSection = lazy(() =>
  import("@/components/yetrix/GlobeSection").then((m) => ({ default: m.GlobeSection })),
);

function SectionFallback({ h = 560 }: { h?: number }) {
  return <div style={{ height: h }} className="glass rounded-3xl mx-5 my-20 max-w-7xl lg:mx-auto" />;
}

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work | Yetrix Technologies Case Studies and Results" },
      { name: "description", content: "Browse Yetrix Technologies case studies, outcomes, testimonials, and global delivery examples across AI, software, cloud, and growth work." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="[ Work ]"
        title="A portfolio of outcomes"
        accent="not just screenshots."
        description="We like work that compounds. These examples show the kinds of systems, launches, and growth loops that matter after the demo fades."
        primaryTo="/contact"
        primaryLabel="Request a Quote"
        secondaryTo="/services"
        secondaryLabel="View Services"
        bullets={["Case studies", "Testimonials", "Global systems", "Measured growth"]}
      />
      <CaseStudies />
      <Testimonials />
      <Suspense fallback={<SectionFallback h={560} />}>
        <GlobeSection />
      </Suspense>
    </PageFrame>
  );
}
