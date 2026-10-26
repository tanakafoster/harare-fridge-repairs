import Link from "next/link"
import { Clock, MapPin, Phone } from "lucide-react"
import { Logo } from "@/components/logo"
import { MobileNav } from "@/components/mobile-nav"
import { WhatsAppIcon } from "@/components/icons"
import { defaultWhatsappMessage, site, whatsappLink } from "@/lib/site"

export const primaryNav = [
  { href: "/fridge-repairs", label: "Fridge Repairs" },
  { href: "/fridge-regassing", label: "Regassing" },
  { href: "/refrigerator-repairs", label: "Fridge Types" },
  { href: "/problems", label: "Problems" },
  { href: "/brands", label: "Brands" },
  { href: "/areas", label: "Areas" },
  { href: "/contact", label: "Contact" },
]

/**
 * The blue strip scrolls away; the white bar with the logo, menu and phone
 * button stays stuck to the top of the screen on every device. On phones the
 * bar is compact so it covers as little of the page as possible.
 */
export function SiteHeader() {
  return (
    <>
      <div className="bg-brand text-white">
        <div className="container-site flex h-9 items-center justify-between gap-4 text-xs font-medium sm:text-sm">
          <p className="flex items-center gap-4 truncate">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {site.coverageLabel}
            </span>
            <span className="hidden items-center gap-1.5 sm:inline-flex">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              Open 24/7
            </span>
          </p>
          <a href={`tel:${site.phonePrimaryTel}`} className="inline-flex items-center gap-1.5 font-semibold hover:underline">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            Call {site.phonePrimaryDisplay}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white shadow-[0_1px_0_0_#d7deef,0_6px_16px_-12px_rgb(11_26_74_/_0.25)]">
        <div className="container-site flex h-14 items-center justify-between gap-3 lg:h-[4.5rem] lg:gap-4">
          <Logo size="sm" />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="whitespace-nowrap rounded-full px-2 py-2 text-[0.8125rem] font-semibold text-navy transition-colors hover:bg-ice hover:text-brand xl:px-3 xl:text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp hidden whitespace-nowrap px-4 py-2 text-sm 2xl:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
            <a href={`tel:${site.phonePrimaryTel}`} className="btn-primary whitespace-nowrap px-4 py-2 text-sm">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phonePrimaryDisplay}
            </a>
          </div>
          <a
            href={`tel:${site.phonePrimaryTel}`}
            className="btn-primary hidden shrink-0 whitespace-nowrap px-4 py-2 text-sm lg:inline-flex xl:hidden"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call now
          </a>

          <div className="flex items-center gap-1 lg:hidden">
            <a
              href={`tel:${site.phonePrimaryTel}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white"
            >
              <span className="sr-only">Call {site.phonePrimaryDisplay}</span>
              <Phone className="h-5 w-5" aria-hidden="true" />
            </a>
            <MobileNav items={primaryNav} />
          </div>
        </div>
      </header>
    </>
  )
}
