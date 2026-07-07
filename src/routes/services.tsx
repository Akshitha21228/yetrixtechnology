import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/yetrix/PageFrame";
import { PageHero } from "@/components/yetrix/PageHero";
import { ServiceTracks } from "@/components/yetrix/ServiceTracks";
import { Services } from "@/components/yetrix/Services";

const InnovationEngine = lazy(() =>
  import("@/components/yetrix/InnovationEngine").then((m) => ({ default: m.InnovationEngine })),
);

function SectionFallback({ h = 560 }: { h?: number }) {
  return <div style={{ height: h }} className="glass rounded-3xl mx-5 my-20 max-w-7xl lg:mx-auto" />;
}

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Yetrix Technologies" },
      { name: "description", content: "Explore Yetrix Technologies services: AI platforms, software development, cloud and security, SEO and growth systems, and automation for modern businesses." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="[ Services ]"
        title="Three connected lanes for"
        accent="AI, cloud, and growth."
        description="Each service can stand alone, but they become especially useful when combined into a single delivery plan that keeps product, operations, and growth moving together."
        primaryTo="/contact"
        primaryLabel="Request a Quote"
        secondaryTo="/work"
        secondaryLabel="See Outcomes"
        bullets={["AI software", "Cloud systems", "SEO growth", "Automation"]}
      />
      <ServiceTracks />
      <Services />
      <Suspense fallback={<SectionFallback h={620} />}>
        <InnovationEngine />
      </Suspense>
    </PageFrame>
  );
}
