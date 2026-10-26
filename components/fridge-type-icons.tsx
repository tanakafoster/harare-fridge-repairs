import type { SVGProps } from "react"

/**
 * Simple line icons of the fridge and freezer types we repair. Each icon is
 * drawn in a 48 x 64 box in the current text colour, so the same icon works
 * on white or on brand blue.
 */
type IconProps = SVGProps<SVGSVGElement>

function Frame({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function SingleDoorIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="8" y="4" width="32" height="56" rx="4" />
      <path d="M33 20v12" />
      <path d="M12 60v2M36 60v2" />
    </Frame>
  )
}

export function DoubleDoorIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="8" y="4" width="32" height="56" rx="4" />
      <path d="M8 22h32" />
      <path d="M33 10v7M33 30v14" />
    </Frame>
  )
}

export function CombiIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="8" y="4" width="32" height="56" rx="4" />
      <path d="M8 40h32" />
      <path d="M33 12v18M33 46v8" />
    </Frame>
  )
}

export function SideBySideIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="4" y="4" width="40" height="56" rx="4" />
      <path d="M22 4v56" />
      <path d="M18 22v14M26 22v14" />
      <rect x="8" y="24" width="7" height="10" rx="1.5" />
    </Frame>
  )
}

export function FrenchDoorIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="4" y="4" width="40" height="56" rx="4" />
      <path d="M4 36h40M24 4v32" />
      <path d="M19 16v12M29 16v12M24 44v8" />
    </Frame>
  )
}

export function ChestFreezerIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="3" y="24" width="42" height="32" rx="4" />
      <path d="M3 32h42" />
      <path d="M18 28h12" />
      <path d="M8 56v3M40 56v3" />
    </Frame>
  )
}

export function UprightFreezerIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="10" y="4" width="28" height="56" rx="4" />
      <path d="M31 18v14" />
      <path d="M15 28h10M15 36h10M15 44h10" />
    </Frame>
  )
}

export function BarFridgeIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="9" y="24" width="30" height="34" rx="4" />
      <path d="M33 34v10" />
      <path d="M13 58v3M35 58v3" />
    </Frame>
  )
}

export function DisplayChillerIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="8" y="4" width="32" height="56" rx="4" />
      <rect x="12" y="14" width="24" height="42" rx="2" />
      <path d="M12 28h24M12 42h24" />
      <path d="M14 4v6M34 4v6" />
    </Frame>
  )
}

export function ColdRoomIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M4 20 24 10l20 10v34H4z" />
      <rect x="18" y="30" width="12" height="24" rx="1.5" />
      <path d="M27 42v4" />
      <path d="M36 14v-4h4v6" />
    </Frame>
  )
}
