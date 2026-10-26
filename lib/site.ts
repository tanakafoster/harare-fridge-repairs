export const site = {
  name: "Harare Fridge Repairs",
  tagline: "Repairs & Regas Across Harare",
  legalName: "Harare Fridge Repairs",
  url: "https://hararefridgerepairs.co.zw",
  domain: "hararefridgerepairs.co.zw",
  locality: "Harare",
  region: "Harare Province",
  country: "Zimbabwe",
  countryCode: "ZW",
  phonePrimaryDisplay: "0782 886 252",
  phonePrimaryTel: "+263782886252",
  phonePrimaryIntl: "+263 78 288 6252",
  phoneSecondaryDisplay: "0719 227 718",
  phoneSecondaryTel: "+263719227718",
  whatsappNumber: "263782886252",
  whatsappUrl: "https://wa.me/263782886252",
  googleUrl: "https://share.google/e85ZmSrLiFYYMsLvA",
  facebookUrl: "https://www.facebook.com/hararefridgerepairsregas",
  themeColor: "#0632AF",
  hoursLabel: "Open 24 hours, 7 days a week",
  coverageLabel: "Mobile across Harare",
} as const

export function whatsappLink(message: string) {
  return `${site.whatsappUrl}?text=${encodeURIComponent(message)}`
}

export const defaultWhatsappMessage =
  "Hi Harare Fridge Repairs, I need help with my fridge. My suburb is: ___ and the problem is: ___"
