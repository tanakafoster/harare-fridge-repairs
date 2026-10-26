"use client"

import { useEffect, useId, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, X } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons"
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

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy hover:bg-ice"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
      </button>

      {open ? (
        <div
          id={panelId}
          className="fixed inset-x-0 top-[6.75rem] bottom-0 z-50 overflow-y-auto border-t border-line bg-white"
        >
          <nav aria-label="Mobile" className="container-site py-4">
            <ul className="divide-y divide-line">
              {items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block py-3.5 text-base font-semibold text-navy">
                    {item.label}
                  </Link>
                </li>
              ))}
              {secondaryLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block py-3 text-sm font-medium text-muted">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <a href={`tel:${site.phonePrimaryTel}`} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call now
              </a>
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
            <p className="mt-4 text-center text-sm text-muted">
              {site.phonePrimaryDisplay} (main) · {site.phoneSecondaryDisplay}
            </p>
          </nav>
        </div>
      ) : null}
    </div>
  )
}
