import type { Metadata } from "next"
import { CardGrid, CtaBand, FaqList, LinkChips, PageHero, Section, SectionHeading, TrustStrip } from "@/components/blocks"
import { JsonLd } from "@/components/json-ld"
import { advicePages } from "@/lib/content/advice"
import { generalFaqs } from "@/lib/content/faqs"
import { problemLink, problems } from "@/lib/content/problems"
import { serviceLinks } from "@/lib/content/services"
import { pageMetadata, webPageSchema } from "@/lib/seo"
import { site } from "@/lib/site"

const title = "Fridge Repair FAQ Harare | Costs, Regassing, Callouts, Brands"
const description =
  "Answers to the questions Harare customers ask most about fridge and freezer repairs: how fast we come, what regassing involves, how pricing works, which brands and areas we cover, and more."

export const metadata: Metadata = pageMetadata({ title, description, path: "/faq" })

export default function FaqPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/faq", name: title, description, type: "FAQPage" })} />
      <PageHero
        eyebrow="FAQ"
        title="Fridge Repair Questions, Answered"
        lead="Straight answers from our technicians on callouts, pricing, regassing, brands, areas and what to do while you wait."
        crumbs={[{ name: "Home", path: "/" }, { name: "FAQ" }]}
        picture="temperature"
        pictureAlt="Technician checking the temperature inside a fridge"
      />
      <TrustStrip />
      <Section>
        <FaqList items={generalFaqs} heading="General questions" eyebrow="Everything in one place" />
      </Section>
      <Section tone="frost">
        <SectionHeading title="Questions about a specific fault?" lead="Our problem guides go deeper on each symptom." />
        <div className="mt-8">
          <CardGrid items={problems.map(problemLink)} columns={3} />
        </div>
      </Section>
      <Section>
        <SectionHeading title="Guides and services" />
        <LinkChips
          className="mt-6"
          items={[...advicePages.map((a) => ({ href: a.path, label: a.shortName })), ...serviceLinks, { href: "/tips", label: "Fridge care tips" }]}
        />
      </Section>
      <CtaBand title="Still have a question?" text={`Call ${site.phonePrimaryDisplay} or WhatsApp us any time. A technician, not a call centre, will answer.`} />
    </>
  )
}
