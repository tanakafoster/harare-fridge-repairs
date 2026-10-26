import Link from "next/link"
import { Clock, MapPin, Phone } from "lucide-react"
import { Logo } from "@/components/logo"
import { FacebookIcon, GoogleIcon, WhatsAppIcon } from "@/components/icons"
import { defaultWhatsappMessage, site, whatsappLink } from "@/lib/site"

const serviceLinks = [
  { href: "/fridge-repairs", label: "Fridge repairs" },
  { href: "/fridge-regassing", label: "Fridge regassing" },
  { href: "/freezer-repairs", label: "Freezer repairs" },
  { href: "/compressor-replacement", label: "Compressor replacement" },
  { href: "/thermostat-replacement", label: "Thermostat replacement" },
  { href: "/24-hour-fridge-repairs", label: "24 hour fridge repairs" },
  { href: "/commercial-fridge-repairs", label: "Commercial fridge repairs" },
]

const typeLinks = [
  { href: "/refrigerator-repairs", label: "All refrigerator types" },
  { href: "/chest-freezer-repairs", label: "Chest freezers" },
  { href: "/double-door-fridge-repairs", label: "Double door fridges" },
  { href: "/side-by-side-fridge-repairs", label: "Side by side fridges" },
  { href: "/beverage-chiller-repairs", label: "Beverage chillers" },
  { href: "/underbar-fridge-repairs", label: "Underbar fridges" },
  { href: "/cold-room-repairs", label: "Cold rooms" },
]

const areaLinks = [
  { href: "/areas", label: "All areas" },
  { href: "/areas/harare-north", label: "Harare North" },
  { href: "/areas/harare-south", label: "Harare South" },
  { href: "/areas/harare-east", label: "Harare East" },
  { href: "/areas/harare-west", label: "Harare West" },
  { href: "/problems", label: "Fridge problems" },
  { href: "/brands", label: "Brands we repair" },
]

const companyLinks = [
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
  { href: "/book-a-repair", label: "Book a repair" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/tips", label: "Fridge care tips" },
  { href: "/fridge-regassing-cost-harare", label: "Regassing cost" },
]

function FooterList({ heading, links }: { heading: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-wider text-white">{heading}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy pb-24 text-white lg:pb-0">
      <div className="container-site py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="light" size="md" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
              Mobile fridge and freezer technicians serving every part of Harare, day and night. We repair and regas
              home refrigerators, chest freezers and commercial refrigeration at your address.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href={`tel:${site.phonePrimaryTel}`} className="inline-flex items-center gap-2 font-semibold hover:underline">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {site.phonePrimaryDisplay} <span className="font-normal text-white/60">(main)</span>
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneSecondaryTel}`} className="inline-flex items-center gap-2 font-semibold hover:underline">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {site.phoneSecondaryDisplay} <span className="font-normal text-white/60">(alternative)</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-white/75">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {site.hoursLabel}
              </li>
              <li className="inline-flex items-center gap-2 text-white/75">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Harare, Zimbabwe. Mobile service, no shop to visit.
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-sm font-semibold hover:bg-white/20"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-sm font-semibold hover:bg-white/20"
              >
                <FacebookIcon className="h-4 w-4" /> Facebook
              </a>
              <a
                href={site.googleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-sm font-semibold hover:bg-white/20"
              >
                <GoogleIcon className="h-4 w-4" /> Google profile
              </a>
            </div>
          </div>
          <FooterList heading="Services" links={serviceLinks} />
          <FooterList heading="Fridge types" links={typeLinks} />
          <FooterList heading="Areas" links={areaLinks} />
          <FooterList heading="Company" links={companyLinks} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Fridge repairs and regassing across Harare, Zimbabwe.
          </p>
          <p className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
