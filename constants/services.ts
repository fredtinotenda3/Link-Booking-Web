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
    title: "Comprehensive Eye Exams",
    description: "Vision assessment and eye health evaluation using diagnostic equipment available at our practice.",
    features: ["Digital retinal imaging", "Visual field testing", "Glaucoma screening", "Prescription assessment"],
    icon: "/assets/icons/eye-exam.svg",
    category: "exams"
  },
  {
    id: "contact-lens",
    title: "Contact Lens Fitting",
    description: "Fitting services for contact lenses, including specialty lenses as required.",
    features: ["Toric lenses for astigmatism", "Multifocal/bifocal lenses", "Colored lenses", "Daily/weekly/monthly disposables"],
    icon: "/assets/icons/contact-lens.svg",
    category: "contacts"
  },
  {
    id: "prescription-glasses",
    title: "Prescription Glasses",
    description: "Frames and lenses selected according to prescription requirements.",
    features: ["Anti-reflective coating", "Blue light filtering", "Progressive lenses", "Transitions lenses"],
    icon: "/assets/icons/glasses.svg",
    category: "glasses"
  },
  {
    id: "dry-eye",
    title: "Dry Eye Treatment",
    description: "Management of dry eye syndrome and related conditions.",
    features: ["Tear film analysis", "Lipiflow treatment available", "Punctal plugs", "Prescription eye drops"],
    icon: "/assets/icons/dry-eye.svg",
    category: "treatment"
  },
  {
    id: "pediatric",
    title: "Pediatric Optometry",
    description: "Eye care services for children's vision development.",
    features: ["Vision development assessment", "Learning-related vision assessment", "Myopia management", "Sports vision"],
    icon: "/assets/icons/pediatric.svg",
    category: "specialized"
  },
  {
    id: "emergency",
    title: "Emergency Eye Care",
    description: "Care for eye injuries, infections, and sudden vision changes.",
    features: ["Foreign body removal", "Eye infection treatment", "Trauma care", "Emergency care available"],
    icon: "/assets/icons/emergency.svg",
    category: "emergency"
  },
  {
    id: "cataract",
    title: "Cataract Consultation",
    description: "Pre-operative evaluation and post-operative care for cataract surgery.",
    features: ["Surgery co-management", "Lens option consultation", "Pre-op measurements", "Post-op follow-up"],
    icon: "/assets/icons/cataract.svg",
    category: "surgical"
  },
  {
    id: "low-vision",
    title: "Low Vision Services",
    description: "Services and devices for patients with vision impairment.",
    features: ["Magnification devices", "Lighting recommendations", "Daily living aids", "Rehabilitation planning"],
    icon: "/assets/icons/low-vision.svg",
    category: "specialized"
  }
];

export const TECHNOLOGY_FEATURES = [
  "Digital Retinal Imaging",
  "Optical Coherence Tomography (OCT)",
  "Auto-refraction & Keratometry",
  "Visual Field Analyzer",
  "Corneal Topography",
  "Pachymetry",
  "TearLab Osmolarity System"
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