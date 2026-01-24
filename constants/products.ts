// constants/products.ts - CORRECTED VERSION

export interface Product {
  id: string;
  name: string;
  category: 'frames' | 'sunglasses' | 'contact-lenses' | 'accessories' | 'lenses';
  type: string;
  description: string;
  features: string[];
  materials?: string[];
  priceRange: {
    cash: string;
    insured: string;
  };
  image: string;
  tags: string[];
  availability: string[];
}

export const PRODUCTS_DATA: Product[] = [
  // FRAMES
  {
    id: "frame-basic",
    name: "Basic Frames",
    category: "frames",
    type: "Frame option",
    description: "Frame options for everyday use",
    features: ["Frame option", "Sizing available"],
    materials: ["Acetate", "Metal"],
    priceRange: {
      cash: "$45 - $75",
      insured: "$25 - $45"
    },
    image: "/assets/images/products/frame-basic.png",
    tags: ["frames"],
    availability: ["Branches"]
  },
  {
    id: "frame-design",
    name: "Designer Frames",
    category: "frames",
    type: "Frame option",
    description: "Frame options available",
    features: ["Frame option", "Materials available"],
    materials: ["Acetate", "Titanium", "Steel"],
    priceRange: {
      cash: "$120 - $350",
      insured: "$75 - $220"
    },
    image: "/assets/images/products/frame-designer.png",
    tags: ["frames"],
    availability: ["Harare branches"]
  },
  {
    id: "frame-special",
    name: "Specialty Frames",
    category: "frames",
    type: "Frame option",
    description: "Frame options for specific requirements",
    features: ["Sports option", "Children's sizes", "Frame option"],
    materials: ["Plastic", "Rubber"],
    priceRange: {
      cash: "$85 - $180",
      insured: "$55 - $120"
    },
    image: "/assets/images/products/frame-special.png",
    tags: ["frames"],
    availability: ["Selected branches"]
  },

  // SUNGLASSES
  {
    id: "sunglass-basic",
    name: "Basic Sunglasses",
    category: "sunglasses",
    type: "Sunglass option",
    description: "Sunglasses available",
    features: ["Lens option", "Frame option"],
    materials: ["Polycarbonate", "Plastic"],
    priceRange: {
      cash: "$35 - $65",
      insured: "$20 - $40"
    },
    image: "/assets/images/products/sunglass-basic.png",
    tags: ["sunglasses"],
    availability: ["Branches"]
  },
  {
    id: "sunglass-design",
    name: "Designer Sunglasses",
    category: "sunglasses",
    type: "Sunglass option",
    description: "Sunglass options available",
    features: ["Lens option", "Frame option"],
    materials: ["Glass", "Metal", "Acetate"],
    priceRange: {
      cash: "$150 - $400",
      insured: "$95 - $250"
    },
    image: "/assets/images/products/sunglass-designer.png",
    tags: ["sunglasses"],
    availability: ["Selected branches"]
  },
  {
    id: "sunglass-prescription",
    name: "Prescription Sunglasses",
    category: "sunglasses",
    type: "Sunglass option",
    description: "Sunglasses with prescription option",
    features: ["Prescription option", "Lens option"],
    materials: ["CR-39", "Polycarbonate"],
    priceRange: {
      cash: "$120 - $280",
      insured: "$75 - $180"
    },
    image: "/assets/images/products/sunglass-prescription.png",
    tags: ["sunglasses"],
    availability: ["Branches"]
  },

  // CONTACT LENSES
  {
    id: "contact-daily",
    name: "Daily Disposable Lenses",
    category: "contact-lenses",
    type: "Contact lens option",
    description: "Contact lens options available",
    features: ["Daily option", "Lens option"],
    priceRange: {
      cash: "$45 - $75 per 90 pack",
      insured: "$30 - $55 per 90 pack"
    },
    image: "/assets/images/products/contact-daily.png",
    tags: ["contact lenses"],
    availability: ["Branches"]
  },
  {
    id: "contact-monthly",
    name: "Monthly Contact Lenses",
    category: "contact-lenses",
    type: "Contact lens option",
    description: "Contact lens options available",
    features: ["Monthly option", "Lens option"],
    priceRange: {
      cash: "$25 - $45 per pair",
      insured: "$15 - $30 per pair"
    },
    image: "/assets/images/products/contact-monthly.png",
    tags: ["contact lenses"],
    availability: ["Branches"]
  },
  {
    id: "contact-special",
    name: "Specialty Contact Lenses",
    category: "contact-lenses",
    type: "Contact lens option",
    description: "Contact lens options for specific requirements",
    features: ["Toric option", "Multifocal option", "Colored option"],
    priceRange: {
      cash: "$65 - $150 per pair",
      insured: "$40 - $95 per pair"
    },
    image: "/assets/images/products/contact-special.png",
    tags: ["contact lenses"],
    availability: ["Harare branches"]
  },

  // LENSES
  {
    id: "lens-single",
    name: "Single Vision Lenses",
    category: "lenses",
    type: "Lens option",
    description: "Lens options for single distance",
    features: ["Distance option", "Reading option", "Lens material"],
    priceRange: {
      cash: "$45 - $95",
      insured: "$25 - $60"
    },
    image: "/assets/images/products/lens-single.png",
    tags: ["lenses"],
    availability: ["Laboratory"]
  },
  {
    id: "lens-progressive",
    name: "Progressive Lenses",
    category: "lenses",
    type: "Lens option",
    description: "Lens options for multiple distances",
    features: ["Progressive option", "Lens material"],
    priceRange: {
      cash: "$120 - $280",
      insured: "$75 - $180"
    },
    image: "/assets/images/products/lens-progressive.png",
    tags: ["lenses"],
    availability: ["Laboratory"]
  },
  {
    id: "lens-addons",
    name: "Lens Options",
    category: "lenses",
    type: "Lens option",
    description: "Additional lens options available",
    features: ["Coating option", "Filter option", "Lens option"],
    priceRange: {
      cash: "$25 - $75 per option",
      insured: "$15 - $45 per option"
    },
    image: "/assets/images/products/lens-addons.png",
    tags: ["lenses"],
    availability: ["Laboratory"]
  },

  // ACCESSORIES
  {
    id: "accessory-solutions",
    name: "Contact Lens Solutions",
    category: "accessories",
    type: "Accessory",
    description: "Contact lens accessory options",
    features: ["Solution option", "Accessory"],
    priceRange: {
      cash: "$8 - $25",
      insured: "$5 - $18"
    },
    image: "/assets/images/products/accessory-solutions.png",
    tags: ["accessories"],
    availability: ["Branches"]
  },
  {
    id: "accessory-cases",
    name: "Eyewear Cases",
    category: "accessories",
    type: "Accessory",
    description: "Eyewear accessory options",
    features: ["Case option", "Accessory"],
    priceRange: {
      cash: "$5 - $35",
      insured: "$3 - $25"
    },
    image: "/assets/images/products/accessory-cases.png",
    tags: ["accessories"],
    availability: ["Branches"]
  },
  {
    id: "accessory-readers",
    name: "Reading Glasses",
    category: "accessories",
    type: "Accessory",
    description: "Reading accessory options",
    features: ["Reader option", "Accessory"],
    priceRange: {
      cash: "$15 - $40",
      insured: "$10 - $30"
    },
    image: "/assets/images/products/accessory-readers.png",
    tags: ["accessories"],
    availability: ["Branches"]
  }
];

export const PRODUCT_CATEGORIES = [
  { id: "all", label: "All Products", icon: "📦" },
  { id: "frames", label: "Frames", icon: "👓" },
  { id: "sunglasses", label: "Sunglasses", icon: "🕶️" },
  { id: "contact-lenses", label: "Contact Lenses", icon: "🧿" },
  { id: "lenses", label: "Lenses", icon: "🔍" },
  { id: "accessories", label: "Accessories", icon: "🧰" }
];

export const PRODUCT_BENEFITS = [
  "Lens manufacturing at our clinic",
  "Medical aid coverage information available",
  "Payment options available",
  "Frame repair services available",
  "Warranty information available"
];