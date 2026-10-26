import type { Metadata } from "next"
import { CtaBand, FaqList, PageHero, Section, SectionHeading, Steps } from "@/components/blocks"
import { FacebookIcon, GoogleIcon } from "@/components/icons"
import { JsonLd } from "@/components/json-ld"
import { pageMetadata, webPageSchema } from "@/lib/seo"
import { site } from "@/lib/site"

const title = "Harare Fridge Repairs Reviews | Read & Leave a Review"
const description =
  "Read what Harare customers say about our fridge and freezer repairs on Google and Facebook, and leave your own review after your repair. Independent, mobile, 24/7."

export const metadata: Metadata = pageMetadata({ title, description, path: "/reviews" })

const faqs = [
  {
    question: "Why are the reviews not shown on this page?",
    answer:
      "We show reviews where they were written, on Google and Facebook, so you can see they are genuine and recent rather than copied onto our own site. Both links above open the live listings.",
  },
  {
    question: "Does leaving a review cost anything or need an account?",
    answer:
      "It is free. Google reviews need a Google account and Facebook recommendations need a Facebook account, which most customers already have on their phone.",
  },
  {
    question: "What if I was not happy with a repair?",
    answer: `Please call ${site.phonePrimaryDisplay} first and give us the chance to put it right. We would rather fix a problem than read about it.`,
  },
]

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/reviews", name: title, description })} />
      <PageHero
        eyebrow="Reviews"
        title="What Harare Says About Our Fridge Repairs"
        lead="Our customer reviews live on Google and Facebook, where we have served Harare for some time. Read them before you book, and add yours afterwards."
        crumbs={[{ name: "Home", path: "/" }, { name: "Reviews" }]}
        picture="homeVisit"
        pictureAlt="Happy customer with a technician after a fridge repair"
      />
      <Section>
        <SectionHeading eyebrow="Read reviews" title="Find us where customers talk about us" />
        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          <li className="card">
            <GoogleIcon className="h-9 w-9" />
            <h3 className="mt-4 text-lg font-bold text-navy">Google Business Profile</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Our Google listing carries ratings and written reviews from customers across Harare, along with our hours and contact details.
            </p>
            <a href={site.googleUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5">
              Open our Google reviews
            </a>
          </li>
          <li className="card">
            <FacebookIcon className="h-9 w-9 text-brand" />
            <h3 className="mt-4 text-lg font-bold text-navy">Facebook page</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Recommendations, photos and updates from the Harare Fridge Repairs and Regas page on Facebook.
            </p>
            <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5">
              Visit our Facebook page
            </a>
          </li>
        </ul>
      </Section>
      <Section tone="frost">
        <SectionHeading eyebrow="Leave a review" title="Had a repair? Two minutes helps the next customer" />
        <div className="mt-8">
          <Steps
            items={[
              { title: "Open the Google or Facebook link", text: "Use the buttons above on the phone you have your account on." },
              { title: "Choose a rating", text: "Honest is best. Tell others what was wrong with the fridge and how the visit went." },
              { title: "Mention your suburb", text: "It helps neighbours in your area find a technician who already works nearby." },
            ]}
          />
        </div>
      </Section>
      <Section>
        <FaqList items={faqs} heading="About our reviews" />
      </Section>
      <CtaBand title="Ready to book?" text={`Call ${site.phonePrimaryDisplay} or WhatsApp us. We cover every part of Harare, 24 hours a day.`} />
    </>
  )
}
