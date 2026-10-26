type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[]
}

/** Renders schema.org JSON-LD. Safe for static export; the payload is our own data. */
export function JsonLd({ data }: JsonLdProps) {
  const items = Array.isArray(data) ? data : [data]
  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  )
}
