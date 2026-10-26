"use client"

import { useEffect, useId, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, X } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons"
import { Logo } from "@/components/logo"
import { defaultWhatsappMessage, site, whatsappLink } from "@/lib/site"

type NavItem = { href: string; label: string }

const secondaryLinks: NavItem[] = [
  { href: "/commercial-fridge-repairs", label: "Commercial fridge repairs" },
  { href: "/24-hour-fridge-repairs", label: "24 hour fridge repairs" },
  { href: "/freezer-repairs", label: "Freezer repairs" },
  { href: "/book-a-repair", label: "Book a repair" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
]

/**
 * Phone and tablet menu. Opens as a full-screen panel with its own close
 * button, so it works the same whether the page is scrolled or not and is
 * never clipped by the header.
 */
export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const panelId = useId()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy hover:bg-ice"
      >
        <span className="sr-only">Open menu</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] flex flex-col bg-white"
        >
          <div className="flex h-[4.5rem] shrink-0 items-center justify-between border-b border-line px-4 sm:px-6">
            <Logo size="sm" />
            <button
              type="button"
              onClick={close}
              autoFocus
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy hover:bg-ice"
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-2 sm:px-6">
            <ul className="divide-y divide-line">
              {items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={close} className="block py-3.5 text-base font-semibold text-navy">
                    {item.label}
                  </Link>
                </li>
              ))}
              {secondaryLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={close} className="block py-3 text-sm font-medium text-muted">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="py-4 text-center text-sm text-muted">
              {site.hoursLabel} · {site.phonePrimaryDisplay} (main) · {site.phoneSecondaryDisplay}
            </p>
          </nav>

          <div
            className="grid shrink-0 grid-cols-2 gap-3 border-t border-line bg-white px-4 pt-3 sm:px-6"
            style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
          >
            <a href={`tel:${site.phonePrimaryTel}`} className="btn-primary whitespace-nowrap">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call now
            </a>
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp whitespace-nowrap"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </div>
  )
}
