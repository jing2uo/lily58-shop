// Central site metadata + navigation. Imported by the layout, chrome
// components, and JSON-LD builders so there is one source of truth.

export const SITE = {
  title: "Lily58 Shop",
  tagline: "Wireless Split Ergonomic Mechanical Keyboard",
  description:
    "Lily58 wireless split ergonomic mechanical keyboard — Vial support, hot-swap sockets, RP2040 inside, 2.4G wireless. Hand-built and tested, with free worldwide shipping.",
  url: "https://kbd.guojing.io",
  brand: "Lily58",
  email: "kbd@guojing.io",
  github: "https://github.com/jing2uo/lily58-shop",
  discuss: "https://github.com/jing2uo/lily58-shop/discussions/",
  telegram: "https://t.me/+v8c4mhUeGGk4NWM9",
  ogImage: "/images/keyboard.jpg",
} as const;

export const NAV = [
  { href: "/products/", label: "Products" },
  { href: "/docs/", label: "Docs" },
  { href: "/about/", label: "About" },
] as const;

export const FOOTER = [
  {
    title: "Shop",
    links: [
      { href: "/products/", label: "All Products" },
      { href: "/products/mx/", label: "Lily58 MX" },
      { href: "/products/choc/", label: "Lily58 Choc" },
    ],
  },
  {
    title: "Docs",
    links: [
      { href: "/docs/", label: "Overview" },
      { href: "/docs/guide/vial/", label: "Vial Guide" },
      { href: "/docs/guide/battery/", label: "Battery" },
      { href: "/docs/faq/", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about/", label: "About" },
      { href: SITE.discuss, label: "Discuss", external: true },
      { href: SITE.github, label: "GitHub", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/docs/policy/privacy/", label: "Privacy" },
      { href: "/docs/policy/terms-of-service/", label: "Terms of Service" },
      { href: "/docs/policy/shipping-return/", label: "Shipping & Returns" },
    ],
  },
] as const;
