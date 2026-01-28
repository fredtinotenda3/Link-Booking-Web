export interface NavigationLink {
  id: string;
  label: string;
  href: string;
  description?: string;
}

export interface FooterLink extends NavigationLink {
  external?: boolean;
}

export const NAVIGATION_LINKS: NavigationLink[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    description: "Return to homepage"
  },
  {
    id: "services",
    label: "Services",
    href: "/services",
    description: "View our services with transparent pricing"
  },
  {
    id: "products",
    label: "Products",
    href: "/products",
    description: "View frames, sunglasses, and contact lenses"
  },
  {
    id: "locations",
    label: "Locations",
    href: "/locations",
    description: "Find our clinics and mobile unit"
  },
  {
    id: "community",
    label: "Community",
    href: "/community",
    description: "School programs, mobile unit, and outreach"
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    description: "Learn about Link Opticians"
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
    description: "Contact our clinic"
  }
];

export const FOOTER_DATA = {
  tagline: "Professional Eye Care Services",
  copyright: "© 2026 Link Opticians. All rights reserved.",
  links: [
    { id: "home", label: "Home", href: "/" },
    { id: "services", label: "Services", href: "/services" },
    { id: "products", label: "Products", href: "/products" },
    { id: "locations", label: "Locations", href: "/locations" },
    { id: "community", label: "Community", href: "/community" },
    { id: "about", label: "About", href: "/about" },
    { id: "contact", label: "Contact", href: "/contact" },
    { id: "book", label: "Book Online", href: "/book" }
  ]
};

export const ADMIN_LINK = {
  label: "Admin",
  href: "/?admin=true",
  description: "Access admin dashboard"
};