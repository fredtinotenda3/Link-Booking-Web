export interface HomeServicePreview {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const HOME_SERVICES_PREVIEW: HomeServicePreview[] = [
  {
    id: "eye-exam",
    title: "Comprehensive Eye Exams",
    description: "Eye examinations using available diagnostic equipment.",
    icon: "/assets/icons/eye.svg"
  },
  {
    id: "contact-lens",
    title: "Contact Lens Fitting",
    description: "Contact lens fitting services with follow-up care.",
    icon: "/assets/icons/contact-lens.svg"
  },
  {
    id: "prescription-glasses",
    title: "Prescription Glasses",
    description: "Frames and lenses according to prescription requirements.",
    icon: "/assets/icons/glasses.svg"
  },
  {
    id: "dry-eye",
    title: "Dry Eye Treatment",
    description: "Management of dry eye syndrome and related conditions.",
    icon: "/assets/icons/dry-eye.svg"
  },
  {
    id: "pediatric",
    title: "Pediatric Optometry",
    description: "Eye care services for children's vision development.",
    icon: "/assets/icons/pediatric.svg"
  },
  {
    id: "emergency",
    title: "Emergency Eye Care",
    description: "Care for eye injuries and sudden vision changes.",
    icon: "/assets/icons/emergency.svg"
  }
];

export const HOME_HERO_DATA = {
  title: "Link Opticians",
  description: "Providing eye care services with available diagnostic technology.",
  primaryCta: {
    text: "Schedule Appointment",
    href: "/book"
  },
  secondaryCta: {
    text: "Our Services",
    href: "/services"
  },
  image: {
    src: "/assets/images/eye-care-hero.png",
    alt: "Eye examination at Link Opticians"
  }
};

export const HOME_CTA_DATA = {
  title: "Schedule Your Eye Exam",
  description: "Appointments can be scheduled online.",
  cta: {
    text: "Schedule Appointment",
    href: "/book"
  }
};