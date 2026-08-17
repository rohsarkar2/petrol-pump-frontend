/**
 * Single source of truth for everything the dealership needs to edit.
 * Phone, email and coordinates are placeholders — replace before publishing.
 */

export const site = {
  name: "Ma Manasa Auto Fuel Service",
  shortName: "Ma Manasa Auto Fuel",
  tagline: "Authorised HP dealer",
  locality: "Muragachha",
  highway: "NH-12",
  landmark: "near Kalyani More",
  addressLines: ["Muragachha, NH-12, near Kalyani More", "Nadia, West Bengal"],
  phone: "+91 XXXXX XXXXX",
  phoneHref: "tel:+91XXXXXXXXXX",
  email: "XXXXX@example.com",
  hours: "Open 24 hours",
  hoursNote: "All seven days, including holidays",
  payments: "Cash · UPI · Cards · Fleet cards",
  bengali: "আপনার যাত্রা শুভ হোক",
  mapsLink: "https://maps.app.goo.gl/dMk23EjpCQnBgdPi9",
  // Right-click the pin in Google Maps on desktop to copy exact coordinates.
  lat: 22.696431,
  lng: 88.416236,
  zoom: 16,
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
] as const;

/** Sample board rates — replace with the forecourt board each morning. */
export const rates = [
  { name: "Petrol", note: null, price: 105.41, unit: "/L", highlight: false },
  { name: "Diesel", note: null, price: 92.02, unit: "/L", highlight: false },
  {
    name: "HP Power 95",
    note: "High-octane petrol",
    price: 112.6,
    unit: "/L",
    highlight: true,
  },
  {
    name: "HP Power 100",
    note: "Performance grade",
    price: 128.75,
    unit: "/L",
    highlight: true,
  },
  { name: "CNG", note: "Online station", price: 86.0, unit: "/kg", highlight: false },
] as const;

export type ServiceIcon =
  | "pump"
  | "bolt"
  | "bolt-plus"
  | "cng"
  | "ev"
  | "cup"
  | "clock"
  | "oil"
  | "doc";

export type Service = {
  slug: string;
  title: string;
  short: string;
  body: string;
  tag: string;
  accent: string;
  icon: ServiceIcon;
  image: string;
  imageAlt: string;
  wide?: boolean;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "diesel",
    title: "Diesel",
    short: "Standard HP diesel on the main islands, with truck-friendly access.",
    body: "Standard HP diesel on the main islands, with truck-friendly access and quick turnaround. The apron is wide enough for a full-length trailer to swing in off the highway and back out without reversing across traffic.",
    tag: "Bulk welcome",
    accent: "#0B4F9E",
    icon: "pump",
    image: "/images/dispenser.jpg",
    imageAlt: "HP diesel and petrol dispensers on the forecourt island",
    details: [
      "Truck and tanker access from both directions",
      "Bulk and fleet supply on account",
      "Density and calibration records kept on site",
    ],
  },
  {
    slug: "petrol",
    title: "Petrol",
    short: "Regular petrol for cars, bikes and autos, with the meter shown before every fill.",
    body: "Regular petrol for cars, bikes and autos. Calibrated nozzles, and the meter is reset to zero and shown to you before every fill — ask any time and the attendant will run it past you again.",
    tag: "All vehicles",
    accent: "#E1251B",
    icon: "pump",
    image: "/images/canopy-day.jpg",
    imageAlt: "The HP canopy over the petrol islands",
    details: [
      "Zero shown before every fill",
      "Separate two-wheeler island at peak hours",
      "Weekly calibration checks",
    ],
  },
  {
    slug: "hp-power-95",
    title: "HP Power 95",
    short: "Higher-octane petrol with a detergent additive pack.",
    body: "Higher-octane petrol with a detergent additive pack — smoother idle, cleaner injectors and a noticeable difference on engines that have covered some distance.",
    tag: "Premium grade",
    accent: "#C8901A",
    icon: "bolt",
    image: "/images/station-day.jpg",
    imageAlt: "The HP rate board pole at the entry to the forecourt",
    details: [
      "95 octane with multifunctional additives",
      "Cleans injectors over regular use",
      "Available on the main petrol island",
    ],
  },
  {
    slug: "hp-power-100",
    title: "HP Power 100",
    short: "Our top performance grade for high-compression engines.",
    body: "Our top performance grade, for high-compression engines and anyone who simply wants the best fill on the board. Stocked year round, not just on request.",
    tag: "Top of the board",
    accent: "#8A4B12",
    icon: "bolt-plus",
    image: "/images/driver.jpg",
    imageAlt: "A driver at the wheel on the highway at dusk",
    details: [
      "100 octane performance fuel",
      "For turbocharged and high-compression engines",
      "Always in stock",
    ],
  },
  {
    slug: "cng",
    title: "CNG — online station",
    short:
      "An online CNG station fed directly from the pipeline, not from trucked-in cascades.",
    body: "An online CNG station, fed directly from the gas pipeline rather than trucked-in cascades. That means steadier pressure, faster fills and fewer dry spells. It sits on a dedicated bay, so CNG queues never block the petrol islands.",
    tag: "Pipeline fed",
    accent: "#106B3C",
    icon: "cng",
    image: "/images/cng-bay.jpg",
    imageAlt: "The CNG filling station bay",
    wide: true,
    details: [
      "Pipeline fed — steadier pressure than cascade stations",
      "Dedicated bay away from the petrol islands",
      "Cars, autos and commercial CNG vehicles",
    ],
  },
  {
    slug: "ev-charging",
    title: "EVC — electric vehicle charging",
    short: "Charging bays for electric cars and two-wheelers, right on the forecourt.",
    body: "Charging bays for electric cars and two-wheelers, right on the forecourt. Park up, plug in, and spend the wait over a cup of tea instead of sitting in an empty lot somewhere off the highway.",
    tag: "Cars & two-wheelers",
    accent: "#1A73C7",
    icon: "ev",
    image: "/images/ev-bay.jpg",
    imageAlt: "Electric vehicle charging points on the forecourt",
    wide: true,
    details: [
      "Chargers for cars and two-wheelers",
      "Lit and staffed through the night",
      "Tea Junction a few steps away",
    ],
  },
  {
    slug: "tea-junction",
    title: "Tea Junction",
    short: "Hot chai, coffee and snacks at the on-site counter.",
    body: "Hot chai, coffee and snacks at the on-site Tea Junction counter. It stays open through the night with the pump, which matters more at 3 a.m. than it does at noon.",
    tag: "Fresh & hot",
    accent: "#8A5A2B",
    icon: "cup",
    image: "/images/tea-junction.jpg",
    imageAlt: "Chai being poured at the Tea Junction counter",
    details: ["Chai, coffee and cold drinks", "Packaged snacks", "Open all night"],
  },
  {
    slug: "24x7",
    title: "24×7 service",
    short: "Staffed round the clock, every day of the year.",
    body: "Staffed round the clock, every day of the year. Midnight run or a 4 a.m. start — the pump is on, the lights are on, and somebody is at the island.",
    tag: "Never shut",
    accent: "#12171C",
    icon: "clock",
    image: "/images/canopy-night.jpg",
    imageAlt: "The forecourt canopy lit up after dark",
    details: ["365 days a year", "Full apron lighting", "Air and water point"],
  },
  {
    slug: "lubricants",
    title: "Lubricants",
    short: "HP engine oils, gear oils, coolants and greases.",
    body: "HP engine oils, gear oils, coolants and greases for cars, bikes and commercial vehicles. Top-ups are done at the bay while you wait, and we will show you the sealed pack before it is opened.",
    tag: "Genuine stock",
    accent: "#C8901A",
    icon: "oil",
    image: "/images/lubricants.jpg",
    imageAlt: "A mechanic working under the bonnet at the service bay",
    details: [
      "Genuine HP lubricants, sealed packs",
      "Top-ups done at the bay",
      "Gear oil, coolant and grease in stock",
    ],
  },
  {
    slug: "puc",
    title: "PUC certificate",
    short: "Pollution Under Control testing and certificates issued on the spot.",
    body: "Pollution Under Control testing and certificates issued on the spot. Bring the vehicle and its papers, and walk out with the certificate on the same visit — no second trip.",
    tag: "Same visit",
    accent: "#106B3C",
    icon: "doc",
    image: "/images/puc.jpg",
    imageAlt: "Paperwork being completed at the counter",
    details: [
      "Testing for petrol, diesel and CNG vehicles",
      "Certificate issued on the same visit",
      "Bring the registration certificate",
    ],
  },
];

export const marqueeItems = [
  "Petrol",
  "Diesel",
  "HP Power 95",
  "HP Power 100",
  "CNG Online Station",
  "EV Charging",
  "Tea Junction",
  "Lubricants",
  "PUC Certificate",
  "Open 24×7",
] as const;

export const facts = [
  { value: "24×7", label: "Always open" },
  { value: "5", label: "Fuel grades" },
  { value: "NH-12", label: "Highway frontage" },
  { value: "PUC", label: "Issued on site" },
] as const;

export const directions = [
  { place: "Kalyani More", note: "Nearby" },
  { place: "Kalyani", note: "NH-12" },
  { place: "Krishnanagar", note: "North ▲" },
  { place: "Barasat / Kolkata", note: "South ▼" },
] as const;

export const gallery = [
  {
    src: "/images/forecourt-wide.jpg",
    alt: "The forecourt seen from the highway",
    caption: "The forecourt from NH-12",
    span: "wide",
  },
  {
    src: "/images/dispenser.jpg",
    alt: "HP dispensers on the island",
    caption: "Calibrated dispensers",
    span: "tall",
  },
  {
    src: "/images/canopy-night.jpg",
    alt: "The canopy lit up at night",
    caption: "Open through the night",
    span: "normal",
  },
  {
    src: "/images/cng-bay.jpg",
    alt: "The CNG bay",
    caption: "CNG bay",
    span: "normal",
  },
  {
    src: "/images/ev-bay.jpg",
    alt: "The EV charging bay",
    caption: "EV charging",
    span: "normal",
  },
  {
    src: "/images/tea-junction.jpg",
    alt: "Chai at the Tea Junction counter",
    caption: "Tea Junction",
    span: "normal",
  },
  {
    src: "/images/lubricants.jpg",
    alt: "Work under the bonnet at the service bay",
    caption: "Lubricants & top-ups",
    span: "normal",
  },
  {
    src: "/images/cng-fill.jpg",
    alt: "A vehicle being filled at the CNG bay",
    caption: "CNG fills",
    span: "wide",
  },
  {
    src: "/images/station-day.jpg",
    alt: "The HP rate board pole at the entry",
    caption: "Rate board at the entry",
    span: "normal",
  },
  {
    src: "/images/highway.jpg",
    alt: "NH-12 running past the pump",
    caption: "The highway outside",
    span: "normal",
  },
  {
    src: "/images/canopy-day.jpg",
    alt: "The canopy in daylight",
    caption: "Under the canopy",
    span: "normal",
  },
  {
    src: "/images/team.jpg",
    alt: "Forecourt staff at work",
    caption: "The team",
    span: "normal",
  },
] as const;

export const chips = [
  "365 days",
  "Night lighting",
  "Truck parking",
  "Air & water",
  "Card & UPI accepted",
] as const;

export const enquiryTopics = [
  "Bulk diesel / fleet supply",
  "CNG enquiry",
  "EV charging",
  "PUC certificate",
  "Lubricants",
  "Something else",
] as const;
