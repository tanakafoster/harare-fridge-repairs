import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

/** Small stable hash so templated copy can vary per page without randomness. */
export function hashString(value: string) {
  let total = 7
  for (let index = 0; index < value.length; index += 1) {
    total = (total * 31 + value.charCodeAt(index)) >>> 0
  }
  return total
}

export function pick<T>(items: readonly T[], seed: string, offset = 0): T {
  return items[(hashString(seed) + offset) % items.length]
}

export function rotate<T>(items: readonly T[], seed: string): T[] {
  if (items.length === 0) return []
  const start = hashString(seed) % items.length
  return [...items.slice(start), ...items.slice(0, start)]
}

export function joinNames(names: string[]) {
  if (names.length <= 1) return names.join("")
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`
}
