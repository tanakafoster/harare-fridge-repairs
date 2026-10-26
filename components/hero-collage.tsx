import Link from "next/link"
import type { ComponentType, SVGProps } from "react"
import { ArrowRight } from "lucide-react"
import {
  BarFridgeIcon,
  ChestFreezerIcon,
  ColdRoomIcon,
  CombiIcon,
  DisplayChillerIcon,
  DoubleDoorIcon,
  FrenchDoorIcon,
  SideBySideIcon,
  SingleDoorIcon,
  UprightFreezerIcon,
} from "@/components/fridge-type-icons"
import { SitePicture, type PictureKey } from "@/components/pictures"
import { cn } from "@/lib/utils"

type Tile = { picture: PictureKey; alt: string; label: string; href: string }

const tiles: Tile[] = [
  {
    picture: "collageCombi",
    alt: "Technician repairing the freezer drawer of a combi fridge-freezer",
    label: "Combi & double door",
    href: "/combi-fridge-repairs",
  },
  {
    picture: "collageFrenchDoor",
    alt: "Technician repairing an open French door refrigerator in a kitchen",
    label: "French door & side by side",
    href: "/french-door-fridge-repairs",
  },
  {
    picture: "collageUprightFreezer",
    alt: "Technician with a toolbox beside an open upright freezer",
    label: "Upright & chest freezers",
    href: "/upright-freezer-repairs",
  },
  {
    picture: "collageCommercial",
    alt: "Technician testing the compressor of a stainless steel commercial fridge",
    label: "Commercial fridges",
    href: "/commercial-fridge-repairs",
  },
]

/** Four photos of different fridge types with captions, used as the home page hero. */
export function HeroCollage({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <ul className="grid grid-cols-2 gap-2 sm:gap-3">
        {tiles.map((tile) => (
          <li key={tile.href} className="relative overflow-hidden rounded-2xl shadow-card sm:rounded-3xl">
            <Link href={tile.href} className="group block">
              <SitePicture
                name={tile.picture}
                alt={tile.alt}
                loading="eager"
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-x-2 bottom-2 rounded-full bg-white/95 px-3 py-1.5 text-center text-[0.7rem] font-semibold leading-tight text-navy shadow-sm sm:inset-x-3 sm:bottom-3 sm:text-xs">
                {tile.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl bg-brand py-3 pr-2 pl-4 text-white sm:mt-4">
        <p className="text-sm font-semibold">All fridge and freezer types, repaired at your address</p>
        <Link
          href="/refrigerator-repairs"
          className="-my-2 inline-flex shrink-0 items-center gap-1 rounded-full px-3 py-2.5 text-sm font-semibold underline-offset-4 hover:bg-white/10 hover:underline"
        >
          19 types <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}

type StripItem = { label: string; href: string; icon: ComponentType<SVGProps<SVGSVGElement>> }

const stripItems: StripItem[] = [
  { label: "Single door", href: "/single-door-fridge-repairs", icon: SingleDoorIcon },
  { label: "Double door", href: "/double-door-fridge-repairs", icon: DoubleDoorIcon },
  { label: "Combi", href: "/combi-fridge-repairs", icon: CombiIcon },
  { label: "Side by side", href: "/side-by-side-fridge-repairs", icon: SideBySideIcon },
  { label: "French door", href: "/french-door-fridge-repairs", icon: FrenchDoorIcon },
  { label: "Bar fridge", href: "/bar-fridge-repairs", icon: BarFridgeIcon },
  { label: "Chest freezer", href: "/chest-freezer-repairs", icon: ChestFreezerIcon },
  { label: "Upright freezer", href: "/upright-freezer-repairs", icon: UprightFreezerIcon },
  { label: "Display chiller", href: "/beverage-chiller-repairs", icon: DisplayChillerIcon },
  { label: "Cold room", href: "/cold-room-repairs", icon: ColdRoomIcon },
]

/** Row of fridge type icons linking to the type pages. */
export function FridgeTypeStrip({ className }: { className?: string }) {
  return (
    <nav aria-label="Fridge types we repair" className={className}>
      <ul className="grid grid-cols-5 gap-x-2 gap-y-5 sm:gap-x-4 lg:grid-cols-10">
        {stripItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="group flex flex-col items-center gap-2 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand shadow-sm ring-1 ring-line transition-colors group-hover:bg-brand group-hover:text-white">
                <item.icon className="h-9 w-9" />
              </span>
              <span className="text-[0.7rem] font-semibold leading-tight text-navy group-hover:text-brand sm:text-xs">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
