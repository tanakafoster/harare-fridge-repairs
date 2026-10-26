import Link from "next/link"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export const snowflakePath =
  "M32.00 32.00L32.00 5.00M32.00 16.88L38.49 10.39M32.00 16.88L25.51 10.39M32.00 32.00L8.62 18.50M18.91 24.44L16.53 15.57M18.91 24.44L10.04 26.82M32.00 32.00L8.62 45.50M18.91 39.56L10.04 37.18M18.91 39.56L16.53 48.43M32.00 32.00L32.00 59.00M32.00 47.12L25.51 53.61M32.00 47.12L38.49 53.61M32.00 32.00L55.38 45.50M45.09 39.56L47.47 48.43M45.09 39.56L53.96 37.18M32.00 32.00L55.38 18.50M45.09 24.44L53.96 26.82M45.09 24.44L47.47 15.57"

export function Snowflake({ className, strokeWidth = 3.4 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} fill="none">
      <path d={snowflakePath} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

type LogoProps = {
  /** "dark" is blue text on a light background, "light" is white text on blue. */
  tone?: "dark" | "light"
  className?: string
  /** Font size of the business name; everything else scales from it. */
  size?: "sm" | "md" | "lg"
  asLink?: boolean
}

const sizes = {
  sm: "text-[0.95rem] sm:text-[1.1rem]",
  md: "text-[1.1rem] sm:text-[1.35rem]",
  lg: "text-[1.6rem] sm:text-[2.4rem]",
}

/**
 * The lockup matches the approved artwork: a plain snowflake, the name in
 * Poppins 800 and the tracked tagline underneath. Sizes are in em so the
 * proportions hold at any scale.
 */
export function Logo({ tone = "dark", className, size = "md", asLink = true }: LogoProps) {
  const nameColor = tone === "dark" ? "text-brand" : "text-white"
  const tagColor = tone === "dark" ? "text-navy" : "text-white"

  const lockup = (
    <span className={cn("inline-flex items-center gap-[0.42em] leading-none", sizes[size], className)}>
      <Snowflake className={cn("h-[1.93em] w-[1.93em] shrink-0", nameColor)} />
      <span className="flex flex-col items-start gap-[0.1724em]">
        <span className={cn("whitespace-nowrap font-extrabold leading-none tracking-tight", nameColor)}>
          HARARE FRIDGE REPAIRS
        </span>
        <span
          className={cn("whitespace-nowrap text-[0.431em] font-semibold leading-none", tagColor)}
          style={{ letterSpacing: "0.1724em", marginRight: "-0.1724em" }}
        >
          REPAIRS &amp; REGAS ACROSS HARARE
        </span>
      </span>
    </span>
  )

  if (!asLink) return lockup

  return (
    <Link href="/" aria-label={`${site.name} home`} className="inline-flex rounded-md">
      {lockup}
    </Link>
  )
}
