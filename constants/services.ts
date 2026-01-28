// constants/services.ts - COMPLIANT VERSION

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  category: string;
}

export const SERVICES_DATA: Service[] = [
  {
    id: "eye-exam",
    title: "Eye Examinations",
    description: "Vision assessment and eye health evaluation",
    features: ["Vision assessment", "Eye health evaluation"],
    icon: "/assets/icons/eye-exam.svg",
    category: "exams"
  },
  {
    id: "contact-lens",
    title: "Contact Lens Services",
    description: "Contact lens services",
    features: ["Contact lens services"],
    icon: "/assets/icons/contact-lens.svg",
    category: "contacts"
  },
  {
    id: "prescription-glasses",
    title: "Prescription Glasses",
    description: "Prescription glasses services",
    features: ["Prescription glasses services"],
    icon: "/assets/icons/glasses.svg",
    category: "glasses"
  },
  {
    id: "dry-eye",
    title: "Dry Eye Services",
    description: "Dry eye condition services",
    features: ["Dry eye condition services"],
    icon: "/assets/icons/dry-eye.svg",
    category: "treatment"
  },
  {
    id: "pediatric",
    title: "Pediatric Services",
    description: "Eye care services for children",
    features: ["Children's eye care services"],
    icon: "/assets/icons/pediatric.svg",
    category: "specialized"
  },
  {
    id: "emergency",
    title: "Emergency Services",
    description: "Emergency eye care services",
    features: ["Emergency eye care services"],
    icon: "/assets/icons/emergency.svg",
    category: "emergency"
  },
  {
    id: "cataract",
    title: "Cataract Consultation",
    description: "Cataract consultation services",
    features: ["Cataract consultation services"],
    icon: "/assets/icons/cataract.svg",
    category: "surgical"
  },
  {
    id: "low-vision",
    title: "Low Vision Services",
    description: "Low vision services",
    features: ["Low vision services"],
    icon: "/assets/icons/low-vision.svg",
    category: "specialized"
  }
];

export const TECHNOLOGY_FEATURES = [
  "Digital retinal imaging",
  "Optical coherence tomography",
  "Auto-refraction",
  "Visual field analysis",
  "Corneal topography"
];

export const SERVICE_CATEGORIES = [
  "All Services",
  "Eye Exams",
  "Contact Lenses",
  "Glasses",
  "Treatment",
  "Pediatric",
  "Emergency",
  "Surgical"
];

// REMOVED: SERVICE_PRICING array completely as it contains prohibited pricing information

export const INSURANCE_PARTNERS = [
  {
    name: "Medical Aid Coverage",
    description: "Medical aid coverage information available",
    coverage: "Coverage information available upon consultation",
    notes: "Plan information available"
  }
];

export const PAYMENT_OPTIONS = [
  "Payment options available",
  "Consultation required"
];

export const PRACTICE_FEATURES = [
  "Lens manufacturing services available",
  "Medical aid coverage information available",
  "Payment options available",
  "Frame repair services available",
  "Warranty information available"
];