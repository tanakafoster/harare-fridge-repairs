"use client"

import { useState, type FormEvent } from "react"
import { Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons"
import { site, whatsappLink } from "@/lib/site"

type Props = {
  areaNames: string[]
  typeNames: string[]
  brandNames: string[]
  problemNames: string[]
}

const inputClass =
  "mt-1 w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"

export function BookingForm({ areaNames, typeNames, brandNames, problemNames }: Props) {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const get = (key: string) => String(data.get(key) ?? "").trim()
    const lines = [
      "Hi Harare Fridge Repairs, I would like to book a repair.",
      `Name: ${get("name") || "-"}`,
      `Suburb: ${get("area") || "-"}`,
      `Fridge type: ${get("type") || "-"}`,
      `Brand: ${get("brand") || "-"}`,
      `Problem: ${get("problem") || "-"}`,
      `Preferred time: ${get("time") || "Any time"}`,
      get("notes") ? `Notes: ${get("notes")}` : "",
    ].filter(Boolean)
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer")
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5" aria-label="Book a fridge repair">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-navy">
          Your name
          <input name="name" type="text" required autoComplete="name" className={inputClass} />
        </label>
        <label className="block text-sm font-semibold text-navy">
          Suburb or area
          <input name="area" type="text" required list="area-options" autoComplete="address-level2" className={inputClass} placeholder="e.g. Borrowdale" />
          <datalist id="area-options">
            {areaNames.map((name) => (
              <option key={name} value={name} />
            ))}
          </datalist>
        </label>
        <label className="block text-sm font-semibold text-navy">
          Fridge or freezer type
          <select name="type" className={inputClass} defaultValue="">
            <option value="">Not sure</option>
            {typeNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold text-navy">
          Brand
          <select name="brand" className={inputClass} defaultValue="">
            <option value="">Not sure / other</option>
            {brandNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold text-navy">
          What is it doing?
          <select name="problem" className={inputClass} defaultValue="">
            <option value="">Choose the closest symptom</option>
            {problemNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </label>
        <label className="block text-sm font-semibold text-navy">
          Preferred time
          <select name="time" className={inputClass} defaultValue="As soon as possible">
            <option>As soon as possible</option>
            <option>This morning</option>
            <option>This afternoon</option>
            <option>This evening</option>
            <option>Tomorrow</option>
            <option>Weekend</option>
          </select>
        </label>
      </div>
      <label className="block text-sm font-semibold text-navy">
        Anything else we should know?
        <textarea name="notes" rows={3} className={inputClass} placeholder="Gate details, model number, when the problem started..." />
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="btn-whatsapp text-base">
          <WhatsAppIcon className="h-5 w-5" />
          Send booking on WhatsApp
        </button>
        <a href={`tel:${site.phonePrimaryTel}`} className="btn-outline text-base">
          <Phone className="h-4 w-4" aria-hidden="true" />
          Or call {site.phonePrimaryDisplay}
        </a>
      </div>
      {sent ? (
        <p className="rounded-xl bg-ice px-4 py-3 text-sm text-navy" role="status">
          WhatsApp should have opened with your booking details. If it did not, call us on {site.phonePrimaryDisplay} and
          we will take the details over the phone.
        </p>
      ) : (
        <p className="text-xs text-muted">
          Submitting opens WhatsApp with your details filled in. Nothing is stored on this website.
        </p>
      )}
    </form>
  )
}
