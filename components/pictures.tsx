import Image from "next/image"
import { cn } from "@/lib/utils"

type PictureFile = { src: string; width: number; height: number }

/**
 * Photos supplied by Harare Fridge Repairs, stored in /public/images with
 * descriptive file names for image search.
 */
export const files = {
  hero: { src: "/images/fridge-repairs-harare-hero.jpg", width: 1600, height: 900 },
  diagnostics: { src: "/images/fridge-diagnostics-not-cooling-harare.jpg", width: 1400, height: 933 },
  regassing: { src: "/images/fridge-regassing-service-harare.jpg", width: 1400, height: 933 },
  doorSeal: { src: "/images/fridge-door-seal-repair-harare.jpg", width: 1400, height: 933 },
  temperature: { src: "/images/fridge-temperature-check-harare.jpg", width: 1400, height: 933 },
  freezerIce: { src: "/images/freezer-ice-build-up-repair-harare.jpg", width: 1400, height: 933 },
  controlBoard: { src: "/images/fridge-control-board-repair-harare.jpg", width: 1400, height: 933 },
  compressor: { src: "/images/fridge-compressor-replacement-harare.jpg", width: 1400, height: 933 },
  fan: { src: "/images/fridge-fan-noise-repair-harare.jpg", width: 1400, height: 933 },
  compressorTest: { src: "/images/fridge-compressor-testing-harare.jpg", width: 1400, height: 933 },
  frenchDoor: { src: "/images/french-door-fridge-repair-harare.jpg", width: 1400, height: 933 },
  uprightFreezer: { src: "/images/upright-freezer-repair-technician-harare.jpg", width: 1200, height: 1218 },
  homeVisit: { src: "/images/fridge-repair-home-visit-harare.jpg", width: 1400, height: 934 },
  condenser: { src: "/images/fridge-condenser-coil-service-harare.jpg", width: 1400, height: 933 },
  combi: { src: "/images/combi-fridge-freezer-repair-harare.jpg", width: 1400, height: 933 },
  // 800x600 crops for the home page collage, where each tile is at most 260px wide.
  collageCombi: { src: "/images/collage/combi-fridge-freezer-harare.jpg", width: 800, height: 600 },
  collageFrenchDoor: { src: "/images/collage/french-door-fridge-harare.jpg", width: 800, height: 600 },
  collageUprightFreezer: { src: "/images/collage/upright-freezer-harare.jpg", width: 800, height: 600 },
  collageCommercial: { src: "/images/collage/commercial-fridge-harare.jpg", width: 800, height: 600 },
} satisfies Record<string, PictureFile>

/**
 * Semantic picture slots used by the content modules. Slots without a
 * dedicated photo point at the closest available one, so adding a photo
 * later is a one line change here.
 */
export type PictureKey =
  | keyof typeof files
  | "sideBySide"
  | "heroTechnician"
  | "callout"
  | "notCooling"
  | "airflow"
  | "rearService"
  | "noise"
  | "chestFreezer"
  | "freezerNotFreezing"
  | "commercial"
  | "coldRoom"
  | "team"
  | "electronics"

const slots: Record<PictureKey, keyof typeof files> = {
  hero: "hero",
  diagnostics: "diagnostics",
  regassing: "regassing",
  doorSeal: "doorSeal",
  temperature: "temperature",
  freezerIce: "freezerIce",
  controlBoard: "controlBoard",
  compressor: "compressor",
  fan: "fan",
  compressorTest: "compressorTest",
  sideBySide: "frenchDoor",
  frenchDoor: "frenchDoor",
  uprightFreezer: "uprightFreezer",
  homeVisit: "homeVisit",
  condenser: "condenser",
  combi: "combi",
  collageCombi: "collageCombi",
  collageFrenchDoor: "collageFrenchDoor",
  collageUprightFreezer: "collageUprightFreezer",
  collageCommercial: "collageCommercial",
  heroTechnician: "compressorTest",
  callout: "uprightFreezer",
  notCooling: "temperature",
  airflow: "fan",
  rearService: "compressorTest",
  noise: "fan",
  chestFreezer: "freezerIce",
  freezerNotFreezing: "uprightFreezer",
  commercial: "compressorTest",
  coldRoom: "condenser",
  team: "uprightFreezer",
  electronics: "controlBoard",
}

export function getPicture(name: PictureKey): PictureFile {
  return files[slots[name] ?? "diagnostics"]
}

export function SitePicture({
  name,
  alt,
  className,
  priority = false,
  loading,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  name: PictureKey
  alt: string
  className?: string
  /** Preload and fetch at high priority: only for the one image that is the page's largest first-screen element. */
  priority?: boolean
  /** Override the default of lazy loading (eager for images that are usually in the first screen). */
  loading?: "eager" | "lazy"
  sizes?: string
}) {
  const picture = getPicture(name)
  return (
    <Image
      src={picture.src}
      alt={alt}
      width={picture.width}
      height={picture.height}
      preload={priority}
      fetchPriority={priority ? "high" : undefined}
      loading={loading ?? (priority ? "eager" : "lazy")}
      sizes={sizes}
      className={cn("h-auto", className)}
    />
  )
}
