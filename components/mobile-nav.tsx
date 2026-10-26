"use client"

import { useEffect, useId, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, X } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons"
import { Logo } from "@/components/logo"
import { defaultWhatsappMessage, site, whatsappLink } from "@/lib/site"

type NavItem = { href: string; label: string }

const secondaryLinks: NavItem[] = [
  { href: "/commercial-fridge-repairs", label: "Commercial fridges" },
  { href: "/24-hour-fridge-repairs", label: "24 hour repairs" },
  { href: "/freezer-repairs", label: "Freezer repairs" },
  { href: "/book-a-repair", label: "Book a repair" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About us" },
]

/**
 * Phone and tablet menu. A native modal dialog gives us the top layer (so no
 * ancestor can clip or trap it), a focus trap, Escape to close and focus
 * returning to the menu button, with no extra code. It is always in the DOM
 * so the button's aria-controls always points at something.
 */
export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const panelId = useId()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  // Close after a navigation.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Close when the layout switches to the desktop nav (tablet rotation, window resize),
  // otherwise the hidden panel would keep the page locked.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 64rem)")
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false)
    }
    query.addEventListener("change", onChange)
    return () => query.removeEventListener("change", onChange)
  }, [])

  // Show or hide the dialog and lock page scrolling while it is open.
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (!open) {
      if (dialog.open) dialog.close()
      return
    }

    if (!dialog.open) {
      if (typeof dialog.showModal === "function") dialog.showModal()
      else dialog.setAttribute("open", "")
    }
    closeRef.current?.focus()

    const html = document.documentElement
    const body = document.body
    const previous = { html: html.style.overflow, body: body.style.overflow }
    html.style.overflow = "hidden"
    body.style.overflow = "hidden"
    return () => {
      html.style.overflow = previous.html
      body.style.overflow = previous.body
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

      <dialog
        id={panelId}
        ref={dialogRef}
        aria-label="Site menu"
        onClose={close}
        className="fixed inset-0 z-[60] m-0 h-dvh max-h-none w-full max-w-none flex-col overflow-hidden border-0 bg-white p-0 text-ink open:flex backdrop:bg-transparent"
      >
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-line px-4 sm:px-6">
          <Logo size="sm" onClick={close} />
          <button
            type="button"
            ref={closeRef}
            onClick={close}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy hover:bg-ice"
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto overscroll-contain px-4 pt-1 pb-2 sm:px-6">
          <ul className="divide-y divide-line">
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={close} className="block py-3 text-base font-semibold text-navy">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-1 grid grid-cols-2 gap-x-4 border-t border-line pt-1">
            {secondaryLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={close} className="block py-2.5 text-sm font-medium text-muted">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="py-2 text-center text-xs text-muted">
            {site.hoursLabel} · {site.phonePrimaryDisplay} · {site.phoneSecondaryDisplay}
          </p>
        </nav>

        <div
          className="grid shrink-0 grid-cols-2 gap-3 border-t border-line bg-white px-4 pt-3 shadow-[0_-8px_16px_-12px_rgb(11_26_74_/_0.35)] sm:px-6"
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
      </dialog>
    </div>
  )
}
