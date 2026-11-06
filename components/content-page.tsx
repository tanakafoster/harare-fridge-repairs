import {
  CardGrid,
  CheckList,
  CtaBand,
  FaqList,
  LinkChips,
  PageHero,
  Paragraphs,
  Section,
  SectionHeading,
  SplitFeature,
  Steps,
  TrustStrip,
} from "@/components/blocks"
import { JsonLd } from "@/components/json-ld"
import { SisterSiteNote } from "@/components/sister-site-note"
import { sisterNotes } from "@/lib/sister-sites"
import type { ContentPage, ContentSection } from "@/lib/content/model"
import { serviceSchema, webPageSchema } from "@/lib/seo"

function SectionBody({ section }: { section: ContentSection }) {
  switch (section.kind) {
    case "text":
      return (
        <div>
          {section.heading ? <SectionHeading title={section.heading} /> : null}
          <Paragraphs items={section.paragraphs} className={section.heading ? "mt-6" : undefined} />
        </div>
      )
    case "list":
      return (
        <div>
          <SectionHeading title={section.heading} lead={section.intro} />
          <CheckList items={section.items} columns={section.columns ?? 2} className="mt-8 max-w-4xl" />
        </div>
      )
    case "steps":
      return (
        <div>
          <SectionHeading title={section.heading} lead={section.intro} />
          <div className="mt-10">
            <Steps items={section.items} />
          </div>
        </div>
      )
    case "cards":
      return (
        <div>
          <SectionHeading title={section.heading} lead={section.intro} />
          <div className="mt-8">
            <CardGrid items={section.items} columns={section.columns ?? 3} />
          </div>
        </div>
      )
    case "chips":
      return (
        <div>
          <SectionHeading title={section.heading} lead={section.intro} />
          <LinkChips items={section.items} className="mt-6" />
        </div>
      )
    case "feature":
      return (
        <SplitFeature
          eyebrow={section.eyebrow}
          title={section.heading}
          paragraphs={section.paragraphs}
          picture={section.picture}
          pictureAlt={section.pictureAlt}
          reverse={section.reverse}
        />
      )
    default:
      return null
  }
}

export function ContentPageView({ page }: { page: ContentPage }) {
  const schemas: Record<string, unknown>[] = [
    webPageSchema({ path: page.path, name: page.h1, description: page.description, type: page.pageType ?? "WebPage" }),
  ]
  if (page.schema) {
    schemas.push(
      serviceSchema({
        name: page.schema.serviceName,
        description: page.schema.serviceDescription,
        path: page.path,
        serviceType: page.schema.serviceType,
        areaName: page.schema.areaName,
      }),
    )
  }

  const hasSisterNote = Boolean(sisterNotes[page.path])

  return (
    <>
      <JsonLd data={schemas} />
      <PageHero
        eyebrow={page.eyebrow}
        title={page.h1}
        lead={page.lead}
        crumbs={page.crumbs}
        points={page.points}
        picture={page.picture}
        pictureAlt={page.pictureAlt}
        whatsappMessage={page.whatsappMessage}
      />
      {page.quickAnswer ? (
        <section aria-labelledby="short-answer" className="bg-white py-10 sm:py-12">
          <div className="container-site">
            <div className="max-w-3xl rounded-2xl border border-line bg-ice p-6 sm:p-8">
              <p className="eyebrow">The short answer</p>
              <h2 id="short-answer" className="mt-2 text-xl font-bold sm:text-2xl">
                {page.quickAnswer.question}
              </h2>
              <p className="mt-3 text-base leading-relaxed sm:text-lg">{page.quickAnswer.answer}</p>
            </div>
          </div>
        </section>
      ) : null}
      <TrustStrip />
      {page.sections.map((section, index) => (
        <Section key={index} tone={section.tone ?? (index % 2 === 1 ? "frost" : "white")}>
          <SectionBody section={section} />
        </Section>
      ))}
      {hasSisterNote ? (
        <SisterSiteNote path={page.path} tone={page.sections.length % 2 === 1 ? "frost" : "white"} />
      ) : null}
      {page.faqs.length ? (
        <Section tone={(page.sections.length + (hasSisterNote ? 1 : 0)) % 2 === 1 ? "frost" : "white"}>
          <FaqList items={page.faqs} heading={page.faqHeading} />
        </Section>
      ) : null}
      <CtaBand title={page.cta.title} text={page.cta.text} whatsappMessage={page.whatsappMessage} />
    </>
  )
}
