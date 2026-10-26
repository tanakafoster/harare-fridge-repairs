import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock, MapPin, Phone, ShieldCheck, Snowflake, Wrench } from "lucide-react"
import {
  CardGrid,
  CheckList,
  CtaBand,
  FaqList,
  LinkChips,
  Section,
  SectionHeading,
  SplitFeature,
  Steps,
  TrustStrip,
} from "@/components/blocks"
import { FridgeTypeStrip, HeroCollage } from "@/components/hero-collage"
import { WhatsAppIcon } from "@/components/icons"
import { JsonLd } from "@/components/json-ld"
import { advicePages } from "@/lib/content/advice"
import { areaLink, areas, regionLink, regions } from "@/lib/content/areas"
import { brandLink, brands } from "@/lib/content/brands"
import { homeFaqs } from "@/lib/content/faqs"
import { problemLink, problems } from "@/lib/content/problems"
import { serviceLinks } from "@/lib/content/services"
import { commercialTypes, homeTypes, typeLink } from "@/lib/content/types"
import { pageMetadata, serviceSchema, webPageSchema } from "@/lib/seo"
import { defaultWhatsappMessage, site, whatsappLink } from "@/lib/site"

const title = "Fridge Repairs Harare | 24/7 Mobile Fridge & Freezer Repairs"
const description =
  "Same-day fridge and freezer repairs, regassing and compressor replacement at your home or business anywhere in Harare, 24 hours a day. Call 0782 886 252."

export const metadata: Metadata = pageMetadata({ title, description, path: "/" })

const popularAreaSlugs = [
  "borrowdale",
  "mount-pleasant",
  "avondale",
  "highlands",
  "greendale",
  "hatfield",
  "waterfalls",
  "mabelreign",
  "westgate",
  "marlborough",
  "belvedere",
  "eastlea",
  "chisipite",
  "glen-view",
  "budiriro",
  "kuwadzana",
  "warren-park",
  "highfield",
  "mbare",
  "msasa",
  "harare-cbd",
  "the-avenues",
  "chitungwiza",
  "ruwa",
]

const popularAreas = popularAreaSlugs
  .map((slug) => areas.find((area) => area.slug === slug))
  .filter((area): area is NonNullable<typeof area> => Boolean(area))

const highlights = [
  {
    icon: Snowflake,
    title: "Fridges and freezers only",
    text: "We do not repair washing machines or stoves. Refrigeration is all we do, so our vans carry the right parts and refrigerant for the job.",
  },
  {
    icon: MapPin,
    title: "Mobile across all of Harare",
    text: `${areas.length} suburbs and towns covered from the Avenues to Borrowdale, Chitungwiza, Ruwa and Norton. The technician comes to you.`,
  },
  {
    icon: Clock,
    title: "Open 24 hours, 7 days",
    text: "Phones and WhatsApp are answered day and night, and genuine emergencies are attended outside normal hours.",
  },
  {
    icon: ShieldCheck,
    title: "Quote before work starts",
    text: "Proper diagnosis with gauges and meters first, then a clear price you approve before any part is fitted or gas is added.",
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: "/", name: title, description }),
          serviceSchema({
            name: "Fridge repairs in Harare",
            description:
              "Mobile fridge and freezer repair, regassing, compressor and thermostat replacement for homes and businesses across Harare, 24 hours a day.",
            path: "/",
          }),
        ]}
      />

      {/* Hero: on phones the fridge type photos come straight after the heading. */}
      <section className="bg-gradient-to-b from-ice via-frost to-white">
        <div className="container-site grid gap-x-10 gap-y-6 pt-8 pb-14 lg:grid-cols-[1.1fr_1fr] lg:grid-rows-[auto_auto] lg:items-center lg:pt-16 lg:pb-20">
          <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
            <p className="eyebrow">Harare&apos;s fridge and freezer specialists</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] text-navy sm:text-5xl lg:text-[3.25rem]">
              Fridge Repairs in Harare, <span className="text-brand">at Your Door, 24/7</span>
            </h1>
          </div>
          <HeroCollage className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center" />
          <div className="lg:col-start-1 lg:row-start-2 lg:self-start">
            <p className="max-w-2xl text-lg leading-relaxed text-muted">
              Fridge not cooling? Freezer not freezing? Our mobile technicians repair and regas every make of fridge
              and freezer at your home or business, anywhere in Harare, usually the same day. One call and we are on
              our way.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 lg:mt-8">
              <a href={`tel:${site.phonePrimaryTel}`} className="btn-primary text-base">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {site.phonePrimaryDisplay}
              </a>
              <a href={whatsappLink(defaultWhatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base">
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp us
              </a>
              <Link href="/book-a-repair" className="btn-outline text-base">
                Book online
              </Link>
            </div>
            <ul className="mt-6 grid gap-2 text-sm font-medium text-navy sm:grid-cols-2 lg:mt-8">
              {[
                "Same-day callouts across Harare",
                "Regassing, compressors, thermostats, seals",
                "Household and commercial refrigeration",
                `Also on ${site.phoneSecondaryDisplay}`,
              ].map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TrustStrip />

      <Section tone="frost">
        <SectionHeading
          eyebrow="Every type repaired"
          title="Whatever kind of fridge or freezer you have"
          lead="From a bar fridge in a flat to a cold room in a butchery, choose your type for the faults we see most and how we fix them."
          align="center"
        />
        <FridgeTypeStrip className="mt-10" />
      </Section>

      {/* Services */}
      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Fridge repair services across Harare"
          lead="From a quick thermostat swap to a full compressor replacement and regas, every job is done where the fridge stands."
        />
        <div className="mt-8">
          <CardGrid items={serviceLinks} columns={3} />
        </div>
        <p className="mt-6 text-sm text-muted">
          Running a business?{" "}
          <Link href="/commercial-fridge-repairs" className="font-semibold text-brand hover:underline">
            See our commercial fridge repairs
          </Link>{" "}
          for chillers, display fridges, underbar units and cold rooms.
        </p>
      </Section>

      {/* Why us */}
      <Section tone="frost">
        <SectionHeading
          eyebrow="Why Harare calls us"
          title="A fridge-only specialist, not a general appliance repairer"
          lead="Specialising in refrigeration means faster diagnosis, the right parts on the van and repairs that last."
          align="center"
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <li key={item.title} className="card">
              <item.icon className="h-8 w-8 text-brand" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Problems */}
      <Section>
        <SectionHeading
          eyebrow="Common faults"
          title="Is your fridge or freezer doing this?"
          lead="Pick the symptom and we will explain what is likely wrong, what to check safely and how we fix it."
        />
        <div className="mt-8">
          <CardGrid items={problems.slice(0, 8).map(problemLink)} columns={4} />
        </div>
        <div className="mt-6">
          <Link href="/problems" className="inline-flex items-center gap-1 font-semibold text-brand hover:underline">
            All fridge problems <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* Regassing feature */}
      <Section tone="frost">
        <SplitFeature
          eyebrow="Fridge regassing Harare"
          title="Regassing done properly: leak found, system evacuated, correct charge"
          paragraphs={[
            "Refrigerant does not get used up. If a fridge is low on gas, it has a leak, and a quick top-up only buys a few weeks before the cabinet warms up again. Our technicians locate and repair the leak, pull a vacuum on the system and recharge it to the manufacturer's weight.",
            "Not every warm fridge needs gas, either. Blocked airflow, a failed fan, a faulty thermostat or a tired door seal cause the same symptom. We test before we recommend, so you never pay for a regas you did not need.",
          ]}
          picture="regassing"
          pictureAlt="Technician regassing a fridge with manifold gauges in Harare"
          reverse
        >
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/fridge-regassing" className="btn-primary">
              Fridge regassing service
            </Link>
            <Link href="/fridge-regassing-cost-harare" className="btn-outline">
              What regassing costs
            </Link>
          </div>
        </SplitFeature>
      </Section>

      {/* Fridge types */}
      <Section>
        <SectionHeading
          eyebrow="Every type of refrigerator"
          title="Household and commercial fridges and freezers"
          lead="Different fridges fail in different ways. Choose yours for the faults we see most and how we repair them."
        />
        <h3 className="mt-8 text-base font-bold text-navy">Household</h3>
        <LinkChips items={homeTypes.map(typeLink)} className="mt-3" />
        <h3 className="mt-8 text-base font-bold text-navy">Commercial</h3>
        <LinkChips items={commercialTypes.map(typeLink)} className="mt-3" />
        <div className="mt-6">
          <Link href="/refrigerator-repairs" className="inline-flex items-center gap-1 font-semibold text-brand hover:underline">
            Refrigerator repairs by type <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* Areas */}
      <Section tone="frost">
        <SectionHeading
          eyebrow="Fridge repairs near you"
          title="Anywhere in Harare, north, south, east or west"
          lead={`We run daily routes through all four regions and cover ${areas.length} suburbs and towns, so a same-day visit is realistic wherever you are.`}
        />
        <div className="mt-8">
          <CardGrid items={regions.map(regionLink)} columns={4} />
        </div>
        <h3 className="mt-10 text-base font-bold text-navy">Popular areas</h3>
        <LinkChips items={popularAreas.map(areaLink)} className="mt-3" />
        <div className="mt-6">
          <Link href="/areas" className="inline-flex items-center gap-1 font-semibold text-brand hover:underline">
            See all {areas.length} areas <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* Brands */}
      <Section>
        <SectionHeading
          eyebrow="All makes"
          title={`Fridge repairs for all ${brands.length} brands sold in Zimbabwe`}
          lead="Independent repairs for every make. We are not tied to one manufacturer, so we fix them all and give you a straight answer."
        />
        <LinkChips items={brands.map(brandLink)} className="mt-6" />
        <div className="mt-6">
          <Link href="/brands" className="inline-flex items-center gap-1 font-semibold text-brand hover:underline">
            Brand repair guides <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* How it works */}
      <Section tone="frost">
        <SectionHeading
          eyebrow="Simple process"
          title="How a fridge repair with us works"
          lead="No workshop trips, no vague promises. Four steps from your call to a cold fridge."
        />
        <div className="mt-10">
          <Steps
            items={[
              {
                title: "Call or WhatsApp",
                text: `Tell us your suburb, the fridge make and what it is doing. A photo of the fault or rating plate helps. ${site.phonePrimaryDisplay}, any hour.`,
              },
              {
                title: "We arrive and diagnose",
                text: "The technician tests the compressor, refrigerant pressures, thermostat, fans and electrics in your kitchen and explains the fault in plain language.",
              },
              {
                title: "You approve the quote",
                text: "The full price is agreed before any part is fitted or gas is added. If a repair is not worth it, we say so.",
              },
              {
                title: "Repaired and tested",
                text: "Most repairs are finished the same visit. We run the fridge, confirm it is pulling down to temperature and clean up before leaving.",
              },
            ]}
          />
        </div>
      </Section>

      {/* Expectations + reviews */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow="What to expect" title="Straightforward, tidy, honest fridge repairs" />
            <CheckList
              className="mt-6"
              items={[
                "A technician who works on fridges every day",
                "Diagnosis with gauges, meters and thermometers, not guesswork",
                "Genuine or quality compatible parts, explained to you",
                "Regassing only after the leak is found and repaired",
                "Your kitchen or shop left clean",
                "Advice on protecting the fridge from power problems",
              ]}
            />
          </div>
          <div className="card bg-frost">
            <h3 className="text-lg font-bold text-navy">What our customers say</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We have served Harare through our Google Business Profile and Facebook page for some time, and our customer
              reviews live there. Read them, and if we have helped you, please add yours.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={site.googleUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Google reviews
              </a>
              <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                Facebook page
              </a>
              <Link href="/reviews" className="btn-outline">
                Reviews page
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Advice */}
      <Section tone="frost">
        <SectionHeading
          eyebrow="Guides"
          title="Before you call, a little reading"
          lead="Honest guides on regassing costs, whether your fridge really needs gas, and when to repair rather than replace."
        />
        <div className="mt-8">
          <CardGrid
            items={[
              ...advicePages.map((a) => ({ href: a.path, label: a.shortName, text: a.cardText })),
              { href: "/tips", label: "Fridge care tips", text: "Simple habits that keep a fridge cold, quiet and efficient in Harare's climate." },
            ]}
            columns={4}
          />
        </div>
      </Section>

      <Section>
        <FaqList items={homeFaqs} heading="Fridge repair questions, answered" eyebrow="FAQ" />
        <div className="mt-6">
          <Link href="/faq" className="inline-flex items-center gap-1 font-semibold text-brand hover:underline">
            More questions and answers <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      <CtaBand
        title="Fridge trouble? We are open right now."
        text={`Call ${site.phonePrimaryDisplay} or ${site.phoneSecondaryDisplay}, or WhatsApp a photo of the fault. Mobile fridge repairs across Harare, 24 hours a day.`}
      />
    </>
  )
}
