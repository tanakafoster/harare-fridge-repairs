import type { Metadata } from "next"
import { PageHero, Prose, Section } from "@/components/blocks"
import { JsonLd } from "@/components/json-ld"
import { pageMetadata, webPageSchema } from "@/lib/seo"
import { site } from "@/lib/site"

const title = "Terms of Service"
const description = `The terms on which ${site.name} provides fridge and freezer repair services in Harare, including callouts, quotes, parts and payment.`

export const metadata: Metadata = pageMetadata({ title, description, path: "/terms" })

export default function TermsPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/terms", name: title, description })} />
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        lead="Plain-language terms for booking and paying for a repair with us."
        crumbs={[{ name: "Home", path: "/" }, { name: "Terms" }]}
      />
      <Section>
        <Prose className="max-w-3xl">
          <h2>Callouts and diagnosis</h2>
          <p>
            A callout includes travel to your address in our service area and a diagnosis of the fault. The callout and
            diagnosis charge for your area is explained when you book and is payable whether or not you go ahead with
            the repair.
          </p>
          <h2>Quotes</h2>
          <p>
            After diagnosis we give you a price for the repair, including parts and labour. No work beyond diagnosis is
            carried out until you have approved the quote. If an additional fault is found during the repair, we stop and
            discuss it with you before continuing.
          </p>
          <h2>Parts</h2>
          <p>
            We fit genuine parts where available and quality compatible parts where they are not, and we tell you which.
            Parts ordered specifically for your fridge may require a deposit, which we confirm before ordering.
          </p>
          <h2>Guarantee</h2>
          <p>
            The terms that apply to your repair and any part fitted are explained before you approve the quote. The
            guarantee covers the fault repaired and the part fitted; it does not cover unrelated faults, damage from
            power surges, misuse or further wear on an ageing unit.
          </p>
          <h2>Payment</h2>
          <p>Payment is due on completion of the repair, once you have seen the fridge running. Accepted payment methods are confirmed when you book.</p>
          <h2>Access and safety</h2>
          <p>
            Please ensure the technician can reach the fridge safely and that someone over 18 is present. We may decline
            to work where wiring or conditions are unsafe until they are made safe.
          </p>
          <h2>Independence</h2>
          <p>
            {site.name} is an independent repairer and is not affiliated with or authorised by any fridge manufacturer.
            Brand names on this website are used only to describe the appliances we repair.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms can be directed to {site.phonePrimaryDisplay} or our WhatsApp line.
          </p>
        </Prose>
      </Section>
    </>
  )
}
