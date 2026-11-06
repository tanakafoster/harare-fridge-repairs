// A component in the style of the user's repo: JSON-LD built as an object.
export function HowToSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to bleed a diesel generator fuel line',
    publisher: { '@type': 'Organization', name: '[Business Name]' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
