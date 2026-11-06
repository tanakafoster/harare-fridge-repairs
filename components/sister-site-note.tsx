import { Prose, SectionHeading } from "@/components/blocks"
import { sisterHref, sisterNotes } from "@/lib/sister-sites"
import { cn } from "@/lib/utils"

/**
 * A short "not a fridge?" note linking to a sister business. Renders only on
 * the few pages listed in lib/sister-sites.ts. The data attribute lets the
 * build check count these links and tell them apart from copied wording.
 */
export function SisterSiteNote({ path, tone = "white" }: { path: string; tone?: "white" | "frost" }) {
  const note = sisterNotes[path]
  if (!note) return null
  return (
    <section data-sister-sites="" className={cn("py-14 sm:py-18", tone === "frost" ? "bg-frost" : "bg-white")}>
      <div className="container-site">
        <div className="max-w-3xl">
          <SectionHeading title={note.heading} />
          <Prose className="mt-4">
            {note.mentions.map((mention) => (
              <p key={`${mention.site}${mention.target}`}>
                {mention.before}
                <a href={sisterHref(mention)}>{mention.anchor}</a>
                {mention.after}
              </p>
            ))}
          </Prose>
        </div>
      </div>
    </section>
  )
}
