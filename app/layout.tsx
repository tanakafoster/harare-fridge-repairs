import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import { JsonLd } from "@/components/json-ld"
import { MobileCallBar } from "@/components/mobile-call-bar"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { defaultOgImage, localBusinessSchema, websiteSchema } from "@/lib/seo"
import { site } from "@/lib/site"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Fridge Repairs Harare | 24/7 Mobile Fridge & Freezer Repairs`,
    template: `%s | ${site.name}`,
  },
  description:
    "Harare Fridge Repairs fixes and regasses fridges, freezers and commercial refrigeration at your address, anywhere in Harare, 24 hours a day. Call 0782 886 252.",
  applicationName: site.name,
  keywords: [
    "fridge repairs Harare",
    "fridge repair Harare",
    "fridge regassing Harare",
    "freezer repairs Harare",
    "refrigerator repair Harare",
    "commercial fridge repairs Harare",
    "24 hour fridge repair Harare",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: true, address: false, email: false },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_ZW",
    siteName: site.name,
    url: site.url,
    images: [defaultOgImage],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  category: "Home services",
}

export const viewport: Viewport = {
  themeColor: site.themeColor,
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZW" className={poppins.variable} data-scroll-behavior="smooth">
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <SiteHeader />
        <main id="main">
          {children}
        </main>
        <SiteFooter />
        <MobileCallBar />
      </body>
    </html>
  )
}
