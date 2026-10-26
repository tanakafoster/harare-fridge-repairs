import type { Metadata } from "next"
import Link from "next/link"
import { Clock, MapPin, Phone } from "lucide-react"
import { CtaBand, FaqList, PageHero, Section, SectionHeading } from "@/components/blocks"
import { FacebookIcon, GoogleIcon, WhatsAppIcon } from "@/components/icons"
import { JsonLd } from "@/components/json-ld"
import { regionLink, regions } from "@/lib/content/areas"
import { pageMetadata, webPageSchema } from "@/lib/seo"
import { defaultWhatsappMessage, site, whatsappLink } from "@/lib/site"

const title = "Contact Harare Fridge Repairs | Call or WhatsApp 0782 886 252, 24/7"
const description =
  "Call 0782 886 252 or 0719 227 718, or WhatsApp us, for fridge and freezer repairs anywhere in Harare. Open 24 hours a day, 7 days a week. Mobile technicians, no shop visit needed."

export const metadata: Metadata = pageMetadata({ title, description, path: "/contact" })

const channels = [
  {
    icon: Phone,
    title: "Call us",
    text: "Fastest for urgent faults. Answered 24 hours a day.",
    links: [
      { href: `tel:${site.phonePrimaryTel}`, label: `${site.phonePrimaryDisplay} (main)` },
      { href: `tel:${site.phoneSecondaryTel}`, label: `${site.phoneSecondaryDisplay} (alternative)` },
    ],
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    text: "Send your suburb, the fridge make and a photo or short video of the fault.",
    links: [{ href: whatsappLink(defaultWhatsappMessage), label: "Open WhatsApp chat", external: true }],
  },
  {
    icon: GoogleIcon,
    title: "Google",
    text: "Find us on Google, read reviews and get directions for our service area.",
    links: [{ href: site.googleUrl, label: "Google Business Profile", external: true }],
  },
  {
    icon: FacebookIcon,
    title: "Facebook",
    text: "Message us on Facebook or see recent updates.",
    links: [{ href: site.facebookUrl, label: "Harare Fridge Repairs on Facebook", external: true }],
  },
]

const faqs = [
  {
    question: "Do you have a shop I can bring my fridge to?",
    answer:
      "No. We are a fully mobile service and the technician comes to your home or business anywhere in Harare. That saves you the risk and cost of transporting a fridge.",
  },
  {
    question: "What is the best way to reach you at night?",
    answer: `Call ${site.phonePrimaryDisplay}. Phones are answered 24 hours a day and we attend genuine emergencies outside normal hours.`,
  },
  {
    question: "What should I send on WhatsApp?",
    answer:
      "Your suburb, the fridge brand and model if you can see the rating plate inside the door, and a short description, photo or video of the problem. It helps us bring the right parts.",
  },
]

export default function ContactPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/contact", name: title, description, type: "ContactPage" })} />
      <PageHero
        eyebrow="Contact"
        title="Contact Harare Fridge Repairs"
        lead="Call, WhatsApp or book online. We are open 24 hours a day, 7 days a week, and cover every part of Harare with mobile technicians."
        crumbs={[{ name: "Home", path: "/" }, { name: "Contact" }]}
        points={["Phones answered 24/7", "Same-day callouts in most areas", "No shop visit needed", "Quote before work starts"]}
        picture="callout"
        pictureAlt="Harare Fridge Repairs technician ready for a callout"
        ctaLabel="Call now"
      />
      <Section>
        <SectionHeading eyebrow="Get in touch" title="Ways to reach us" />
        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {channels.map((channel) => (
            <li key={channel.title} className="card">
              <channel.icon className="h-8 w-8 text-brand" />
              <h3 className="mt-4 text-lg font-bold text-navy">{channel.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{channel.text}</p>
              <ul className="mt-4 space-y-2">
                {channel.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-semibold text-brand hover:underline"
                      {...("external" in link && link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="frost">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card">
            <Clock className="h-8 w-8 text-brand" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-bold text-navy">Opening hours</h2>
            <p className="mt-2 text-muted">{site.hoursLabel}. Phones and WhatsApp are answered around the clock. Emergency callouts are available outside normal hours; non-urgent repairs are booked into the next daytime slot.</p>
          </div>
          <div className="card">
            <MapPin className="h-8 w-8 text-brand" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-bold text-navy">Service area</h2>
            <p className="mt-2 text-muted">
              All of Harare plus Chitungwiza, Ruwa, Norton, Mazowe and Domboshava. We are mobile, so there is no address to visit.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {regions.map((region) => (
                <li key={region.slug}>
                  <Link href={regionLink(region).href} className="link-chip">
                    {region.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="link-chip">
                  All areas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <FaqList items={faqs} heading="Contact questions" />
      </Section>
      <CtaBand
        title="Prefer to book online?"
        text="Fill in the short booking form and we will confirm your slot by phone or WhatsApp."
      />
    </>
  )
}
