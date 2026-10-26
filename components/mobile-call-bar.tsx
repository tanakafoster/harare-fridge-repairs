import { Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons"
import { defaultWhatsappMessage, site, whatsappLink } from "@/lib/site"

/** Sticky call and WhatsApp bar on phones, where most fridge emergencies are booked from. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 p-2 backdrop-blur lg:hidden" style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}>
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <a href={`tel:${site.phonePrimaryTel}`} className="btn-primary whitespace-nowrap px-3 py-2.5 text-sm">
          <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
          Call now
        </a>
        <a
          href={whatsappLink(defaultWhatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp whitespace-nowrap px-3 py-2.5 text-sm"
        >
          <WhatsAppIcon className="h-4 w-4 shrink-0" />
          WhatsApp us
        </a>
      </div>
    </div>
  )
}
