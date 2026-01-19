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
    description: "View all eye care services"
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
  copyright: "© 2024 Link Opticians. All rights reserved.",
  links: [
    { id: "home", label: "Home", href: "/" },
    { id: "services", label: "Services", href: "/services" },
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