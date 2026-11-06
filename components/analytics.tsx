"use client"

import Script from "next/script"
import { useEffect } from "react"

const gaId = process.env.NEXT_PUBLIC_GA_ID

type Gtag = (command: "event", name: string, params: Record<string, string>) => void

/** Works out which enquiry channel a clicked link opens, if any. */
function ctaMethod(href: string): "call" | "whatsapp" | "book" | null {
  if (href.startsWith("tel:")) return "call"
  if (href.includes("wa.me/") || href.includes("api.whatsapp.com")) return "whatsapp"
  if (href.endsWith("/book-a-repair") || href.includes("/book-a-repair?") || href.includes("/book-a-repair#")) return "book"
  return null
}

/**
 * Loads Google Analytics 4 when NEXT_PUBLIC_GA_ID is set at build time, and
 * reports every call, WhatsApp and booking click as a `generate_lead` event
 * with the channel and the page it came from. One listener on the document
 * covers every button on the site, including ones added later.
 */
export function Analytics() {
  useEffect(() => {
    if (!gaId) return
    function onClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null
      if (!link) return
      const method = ctaMethod(link.getAttribute("href") ?? "")
      if (!method) return
      const gtag = (window as unknown as { gtag?: Gtag }).gtag
      gtag?.("event", "generate_lead", { method, page_path: window.location.pathname })
    }
    document.addEventListener("click", onClick, { capture: true })
    return () => document.removeEventListener("click", onClick, { capture: true })
  }, [])

  if (!gaId) return null
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`}
      </Script>
    </>
  )
}
