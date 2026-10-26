import type { Metadata } from "next"
import { BookingForm } from "@/components/booking-form"
import { CtaBand, FaqList, PageHero, Section, SectionHeading, Steps } from "@/components/blocks"
import { JsonLd } from "@/components/json-ld"
import { areas } from "@/lib/content/areas"
import { brandNames } from "@/lib/content/brands"
import { problems } from "@/lib/content/problems"
import { fridgeTypes } from "@/lib/content/types"
import { pageMetadata, webPageSchema } from "@/lib/seo"
import { site } from "@/lib/site"

const title = "Book a Fridge Repair in Harare | Same-Day Mobile Technician"
const description =
  "Book a fridge or freezer repair anywhere in Harare in under a minute. Tell us your suburb, the fridge type and the fault, and we confirm a same-day slot where possible. Open 24/7."

export const metadata: Metadata = pageMetadata({ title, description, path: "/book-a-repair" })

const faqs = [
  {
    question: "What happens after I send the booking?",
    answer:
      "Your details arrive on our WhatsApp. We reply with a time window and, if useful, a question or two about the fridge. You can also simply call us if you prefer to talk.",
  },
  {
    question: "Can I book for someone else, such as a parent or a tenant?",
    answer:
      "Yes. Put your own name and number in the form and give the address and contact person in the notes so the technician can call ahead.",
  },
  {
    question: "Do I need to know the fridge model?",
    answer:
      "It helps but is not essential. The model is on a sticker inside the fridge compartment or on the back. A photo of it sent on WhatsApp is ideal.",
  },
]

export default function BookPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/book-a-repair", name: title, description })} />
      <PageHero
        eyebrow="Book online"
        title="Book a Fridge Repair in Harare"
        lead="Fill in a few details and we will confirm your visit by WhatsApp or phone. For urgent faults, calling is fastest."
        crumbs={[{ name: "Home", path: "/" }, { name: "Book a repair" }]}
        points={["Takes under a minute", "Same-day slots in most areas", "No payment online", "Quote agreed before work starts"]}
        picture="homeVisit"
        pictureAlt="Technician discussing a fridge repair booking with a customer"
        ctaLabel="Or call"
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Booking form" title="Tell us about the fridge" />
          <div className="mt-8">
            <BookingForm
              areaNames={areas.map((area) => area.name)}
              typeNames={fridgeTypes.map((type) => type.name)}
              brandNames={brandNames}
              problemNames={problems.map((problem) => problem.name)}
            />
          </div>
        </div>
      </Section>
      <Section tone="frost">
        <SectionHeading eyebrow="What happens next" title="From booking to a cold fridge" />
        <div className="mt-8">
          <Steps
            items={[
              { title: "We confirm a time", text: "Usually within minutes during the day. We give an honest arrival window for your suburb." },
              { title: "Technician calls ahead", text: "You get a call or message when the technician is on the way." },
              { title: "Diagnosis and quote", text: "The fault is identified in your kitchen and the price agreed before any work starts." },
              { title: "Repair and test", text: `Most repairs are completed on the first visit. Questions at any point? Call ${site.phonePrimaryDisplay}.` },
            ]}
          />
        </div>
      </Section>
      <Section>
        <FaqList items={faqs} heading="Booking questions" />
      </Section>
      <CtaBand title="Urgent? Skip the form." text={`Call ${site.phonePrimaryDisplay} or ${site.phoneSecondaryDisplay}. Phones are answered 24 hours a day.`} />
    </>
  )
}
