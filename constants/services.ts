// constants/services.ts - CORRECTED VERSION

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
    description: "Vision assessment and eye health evaluation.",
    features: ["Digital retinal imaging", "Visual field testing", "Glaucoma screening", "Prescription assessment"],
    icon: "/assets/icons/eye-exam.svg",
    category: "exams"
  },
  {
    id: "contact-lens",
    title: "Contact Lens Services",
    description: "Fitting services for contact lenses.",
    features: ["Toric lenses", "Multifocal lenses", "Colored lenses", "Disposable lenses"],
    icon: "/assets/icons/contact-lens.svg",
    category: "contacts"
  },
  {
    id: "prescription-glasses",
    title: "Prescription Glasses",
    description: "Frames and lenses according to prescription.",
    features: ["Anti-reflective coating", "Blue light filtering", "Progressive lenses", "Transitions lenses"],
    icon: "/assets/icons/glasses.svg",
    category: "glasses"
  },
  {
    id: "dry-eye",
    title: "Dry Eye Services",
    description: "Management of dry eye conditions.",
    features: ["Tear film analysis", "Punctal plugs", "Prescription eye drops"],
    icon: "/assets/icons/dry-eye.svg",
    category: "treatment"
  },
  {
    id: "pediatric",
    title: "Pediatric Services",
    description: "Eye care services for children.",
    features: ["Vision development assessment", "Learning-related assessment", "Myopia services", "Sports vision"],
    icon: "/assets/icons/pediatric.svg",
    category: "specialized"
  },
  {
    id: "emergency",
    title: "Emergency Services",
    description: "Care for eye injuries and vision changes.",
    features: ["Foreign body removal", "Eye infection care", "Trauma care"],
    icon: "/assets/icons/emergency.svg",
    category: "emergency"
  },
  {
    id: "cataract",
    title: "Cataract Consultation",
    description: "Pre-operative and post-operative care.",
    features: ["Surgery co-management", "Lens consultation", "Pre-op measurements", "Post-op follow-up"],
    icon: "/assets/icons/cataract.svg",
    category: "surgical"
  },
  {
    id: "low-vision",
    title: "Low Vision Services",
    description: "Services for vision impairment.",
    features: ["Magnification devices", "Lighting recommendations", "Daily living aids", "Rehabilitation planning"],
    icon: "/assets/icons/low-vision.svg",
    category: "specialized"
  }
];

export const TECHNOLOGY_FEATURES = [
  "Digital Retinal Imaging",
  "Optical Coherence Tomography",
  "Auto-refraction",
  "Visual Field Analysis",
  "Corneal Topography",
  "Pachymetry",
  "TearLab Osmolarity"
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

// Add pricing and insurance constants
export interface ServicePricing {
  id: string;
  serviceName: string;
  cashPrice: string;
  insuredPrice: string;
  notes?: string;
  includes?: string[];
}

export const SERVICE_PRICING: ServicePricing[] = [
  {
    id: "comprehensive-exam",
    serviceName: "Comprehensive Eye Examination",
    cashPrice: "$45 - $65",
    insuredPrice: "Medical aid coverage*",
    notes: "Includes digital retinal imaging",
    includes: ["Visual acuity test", "Refraction", "Eye health evaluation"]
  },
  {
    id: "basic-exam",
    serviceName: "Basic Vision Test",
    cashPrice: "$25",
    insuredPrice: "Medical aid coverage*",
    notes: "For prescription updates",
    includes: ["Visual acuity", "Refraction"]
  },
  {
    id: "contact-lens-fitting",
    serviceName: "Contact Lens Fitting",
    cashPrice: "$35 - $75",
    insuredPrice: "Partial medical aid coverage*",
    notes: "Price varies by lens type",
    includes: ["Fitting", "Training"]
  },
  {
    id: "dry-eye-evaluation",
    serviceName: "Dry Eye Evaluation",
    cashPrice: "$55",
    insuredPrice: "Medical aid coverage*",
    notes: "Includes tear film analysis",
    includes: ["TearLab test"]
  },
  {
    id: "pediatric-exam",
    serviceName: "Pediatric Eye Examination",
    cashPrice: "$40 - $60",
    insuredPrice: "Medical aid coverage*",
    notes: "Ages 3-18",
    includes: ["Vision assessment"]
  },
  {
    id: "frame-basic",
    serviceName: "Frame with Single Vision Lenses",
    cashPrice: "$89",
    insuredPrice: "$45 - $75",
    notes: "Basic frame option",
    includes: ["Frame", "Single vision lenses", "Coating"]
  },
  {
    id: "frame-premium",
    serviceName: "Frame with Progressive Lenses",
    cashPrice: "$249",
    insuredPrice: "$129 - $199",
    notes: "Frame options available",
    includes: ["Frame", "Progressive lenses", "Coating"]
  },
  {
    id: "emergency-consult",
    serviceName: "Emergency Consultation",
    cashPrice: "$65",
    insuredPrice: "Medical aid coverage*",
    notes: "Available when needed",
    includes: ["Assessment", "Basic care"]
  }
];

export const INSURANCE_PARTNERS = [
  {
    name: "PSMAS",
    description: "Premier Service Medical Aid Society",
    coverage: "Coverage information available",
    notes: "Services available since 2008"
  },
  {
    name: "CIMAS",
    description: "Corporate Insurance Medical Aid Society",
    coverage: "Eye care coverage information",
    notes: "Plan information available"
  },
  {
    name: "First Mutual Health",
    description: "First Mutual Health",
    coverage: "Optometry coverage information",
    notes: "Plan options information"
  },
  {
    name: "Alliance Health",
    description: "Alliance Health Medical Aid",
    coverage: "Eye exams coverage information",
    notes: "Coverage information available"
  },
  {
    name: "Self-Pay/Cash",
    description: "Cash payment option",
    coverage: "Payment option available",
    notes: "No insurance required"
  }
];

export const PAYMENT_OPTIONS = [
  "Cash",
  "Bank Transfer",
  "Credit/Debit Cards",
  "Ecocash/OneMoney",
  "Medical Aid Claims"
];

export const COST_SAVINGS = [
  "In-house laboratory for lens manufacturing",
  "Direct supplier relationships",
  "Direct billing for insured patients",
  "Cash payment option available"
];