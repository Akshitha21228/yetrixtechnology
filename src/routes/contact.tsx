import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/yetrix/Contact";
import { FAQ } from "@/components/yetrix/FAQ";
import { PageFrame } from "@/components/yetrix/PageFrame";
import { PageHero } from "@/components/yetrix/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Request a Quote from Yetrix Technologies" },
      { name: "description", content: "Request a quote from Yetrix Technologies for AI, software, cloud, SEO, automation, or digital transformation work." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="[ Contact ]"
        title="Tell us what you need and we'll"
        accent="shape the quote."
        description="Share the service you need, the timeline, and any constraints. We'll respond within one business day with a practical next step."
        primaryTo="/services"
        primaryLabel="See Services"
        secondaryTo="/about"
        secondaryLabel="About Yetrix"
        bullets={["One business day", "Clear scope", "Friendly process", "Fast reply"]}
      />
      <Contact />
      <FAQ />
    </PageFrame>
  );
}
