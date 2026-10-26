import Link from "next/link"
import { Clock, MapPin, Phone } from "lucide-react"
import { Logo } from "@/components/logo"
import { MobileNav } from "@/components/mobile-nav"
import { site } from "@/lib/site"

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
 * bar is compact so it covers as little of the page as possible. Everything
 * in the bar is sized to fit the 1152px content column at every width.
 */
export function SiteHeader() {
  return (
    <>
      <div className="bg-brand text-white">
        <div className="container-site flex h-9 items-center justify-between gap-4 text-xs font-medium sm:text-sm">
          <p className="flex min-w-0 items-center gap-3 sm:gap-4">
            <span className="inline-flex min-w-0 items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span className="truncate">{site.coverageLabel}</span>
            </span>
            <span className="hidden items-center gap-1.5 sm:inline-flex">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              Open 24/7
            </span>
          </p>
          <a href={`tel:${site.phonePrimaryTel}`} className="inline-flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap font-semibold hover:underline">
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
                    className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full px-2 text-[0.8125rem] font-semibold text-navy transition-colors hover:bg-ice hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop: full number from xl up, a round icon button between lg and xl. */}
          <a
            href={`tel:${site.phonePrimaryTel}`}
            className="btn-primary hidden min-h-11 shrink-0 whitespace-nowrap px-4 py-2 text-sm xl:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phonePrimaryDisplay}
          </a>
          <a
            href={`tel:${site.phonePrimaryTel}`}
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-white hover:bg-brand-dark lg:inline-flex xl:hidden"
          >
            <span className="sr-only">Call {site.phonePrimaryDisplay}</span>
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>

          {/* Phones and tablets: round phone button (from 360px wide) and the menu. */}
          <div className="flex shrink-0 items-center gap-1 lg:hidden">
            <a
              href={`tel:${site.phonePrimaryTel}`}
              className="hidden h-11 w-11 items-center justify-center rounded-full bg-brand text-white min-[360px]:inline-flex"
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
