import type { Metadata } from "next"
import { PageHero, Prose, Section } from "@/components/blocks"
import { JsonLd } from "@/components/json-ld"
import { pageMetadata, webPageSchema } from "@/lib/seo"
import { site } from "@/lib/site"

const title = "Privacy Policy"
const description = `How ${site.name} handles the personal information you share when you call, WhatsApp or book a fridge repair through this website.`

export const metadata: Metadata = pageMetadata({ title, description, path: "/privacy-policy" })

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/privacy-policy", name: title, description })} />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="We keep things simple: we collect only what we need to repair your fridge, and we do not sell or share it for marketing."
        crumbs={[{ name: "Home", path: "/" }, { name: "Privacy policy" }]}
      />
      <Section>
        <Prose className="max-w-3xl">
          <h2>What we collect</h2>
          <p>
            When you call, message us on WhatsApp or use the booking form, you give us your name, phone number, suburb or
            address and details of your fridge and its fault. The booking form on this website does not store anything;
            it opens WhatsApp on your device with the details you typed.
          </p>
          <h2>How we use it</h2>
          <p>
            We use your details to arrange and carry out the repair, to contact you about the visit, and to keep a record
            of the work done in case you need us again or have a query about a part we fitted.
          </p>
          <h2>Who we share it with</h2>
          <p>
            Only the technician attending your job and, where needed, a parts supplier for a model-specific order. We do
            not sell, rent or share your information for marketing.
          </p>
          <h2>Website analytics and cookies</h2>
          <p>
            This website may use privacy-respecting analytics to understand which pages are useful. Third-party services
            linked from this site, such as WhatsApp, Google and Facebook, have their own privacy policies.
          </p>
          <h2>Your choices</h2>
          <p>
            You can ask us to correct or delete the details we hold about you at any time by calling{" "}
            {site.phonePrimaryDisplay} or messaging us on WhatsApp.
          </p>
          <h2>Changes</h2>
          <p>If this policy changes, the updated version will be published on this page.</p>
        </Prose>
      </Section>
    </>
  )
}
