import type { Metadata } from "next"
import { CardGrid, CtaBand, PageHero, Section, SectionHeading, TrustStrip } from "@/components/blocks"
import { JsonLd } from "@/components/json-ld"
import { advicePages, tips } from "@/lib/content/advice"
import { problemLink, problems } from "@/lib/content/problems"
import { pageMetadata, webPageSchema } from "@/lib/seo"
import { site } from "@/lib/site"

const title = "Fridge Care Tips for Harare Homes | Keep Your Fridge Cold"
const description =
  "Practical fridge and freezer care tips from Harare technicians: placement, ventilation, door seals, defrosting, power cuts, loading and cleaning, so your fridge lasts longer and costs less to run."

export const metadata: Metadata = pageMetadata({ title, description, path: "/tips" })

export default function TipsPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/tips", name: title, description })} />
      <PageHero
        eyebrow="Fridge care"
        title="Fridge Care Tips From Harare Technicians"
        lead="Most of the fridges we repair would have lasted longer with a few simple habits. These are the tips we give customers after every visit, written for Harare's heat, dust and power cuts."
        crumbs={[{ name: "Home", path: "/" }, { name: "Fridge care tips" }]}
        picture="condenser"
        pictureAlt="Technician cleaning the condenser coils at the back of a fridge"
      />
      <TrustStrip />
      <Section>
        <SectionHeading eyebrow={`${tips.length} tips`} title="Simple habits that prevent expensive repairs" />
        <ol className="mt-10 grid gap-6 md:grid-cols-2">
          {tips.map((tip, index) => (
            <li key={tip.title} className="card flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white" aria-hidden="true">
                {index + 1}
              </span>
              <div>
                <h3 className="text-base font-bold text-navy">{tip.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{tip.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="frost">
        <SectionHeading title="When a tip is not enough" lead="If the fridge is already misbehaving, these guides explain what is likely wrong." />
        <div className="mt-8">
          <CardGrid items={problems.slice(0, 6).map(problemLink)} columns={3} />
        </div>
      </Section>
      <Section>
        <SectionHeading title="More reading" />
        <div className="mt-8">
          <CardGrid items={advicePages.map((a) => ({ href: a.path, label: a.shortName, text: a.cardText }))} columns={3} />
        </div>
      </Section>
      <CtaBand title="Fridge already in trouble?" text={`Call ${site.phonePrimaryDisplay} or WhatsApp a photo. We repair fridges and freezers across Harare, 24 hours a day.`} />
    </>
  )
}
