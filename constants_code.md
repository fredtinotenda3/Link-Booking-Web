===============================
  constants\about.ts
===============================
`$lang
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  image: string;
  bio?: string;
  education?: string[];
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface PracticeService {
  id: string;
  title: string;
  description: string;
}

export const ABOUT_DATA = {
  hero: {
    title: "About Link Opticians",
    description: "Link Opticians provides optometry services. Established in 2008."
  },
  
  stats: [
    { id: "years", value: "16+", label: "Years in practice" },
    { id: "locations", value: "5", label: "Practice locations" },
    { id: "practitioners", value: "4", label: "Qualified practitioners" }
  ],
  
  story: "Link Opticians was established in 2008. The practice provides optometry services.",
  
  practiceServices: [
    {
      id: "comprehensive",
      title: "Eye Examinations",
      description: "Vision assessment and eye health services"
    },
    {
      id: "technology",
      title: "Eye Assessment",
      description: "Examination of eye health"
    },
    {
      id: "personalized",
      title: "Patient Consultation",
      description: "Discussion of eye health"
    },
    {
      id: "continuity",
      title: "Additional Appointments",
      description: "Follow-up services as needed"
    }
  ],
  
  community: {
    description: "Community eye health services:",
    initiatives: [
      "Vision screening services",
      "School eye health services",
      "Eyewear services",
      "Diabetes eye health services",
      "Community participation",
      "Workplace eye health services"
    ]
  },
  
  images: {
    clinicInterior: "/assets/images/clinic-interior.png",
    examRoom: "/assets/images/eye-exam-room.png",
    communityEvent: "/assets/images/community-event.png"
  }
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "richard-maveneka",
    name: "Dr. Richard Maveneka",
    role: "Optometrist",
    experience: "16 years in practice",
    specialty: "Eye examinations",
    image: "/assets/images/dr-sarah.jpg",
    bio: "Provision of optometry services.",
    education: ["Optometry qualification"]
  },
  {
    id: "taylor-mutaiwa",
    name: "Dr. Taylor Mutaiwa",
    role: "Optometrist",
    experience: "8 years in practice",
    specialty: "Eye examinations",
    image: "/assets/images/dr-chen.jpg",
    bio: "Provision of optometry services.",
    education: ["Optometry qualification"]
  },
  {
    id: "emily-rodriguez",
    name: "Dr. Emily Rodriguez",
    role: "Optometrist",
    experience: "8 years in practice",
    specialty: "Eye examinations",
    image: "/assets/images/dr-emily.jpg",
    bio: "Provision of optometry services.",
    education: ["Optometry qualification"]
  },
  {
    id: "lisa-thompson",
    name: "Lisa Thompson",
    role: "Optical Manager",
    experience: "10 years in practice",
    specialty: "Frame selection",
    image: "/assets/images/lisa-optical.jpg",
    bio: "Assistance with frame selection.",
    education: ["Optical qualification"]
  }
];

export const VALUES: Value[] = [
  {
    id: "patient-centered",
    title: "Patient Services",
    description: "Provision of optometry services.",
    icon: "ðŸ‘ï¸"
  },
  {
    id: "excellence",
    title: "Professional Standards",
    description: "Adherence to optometry standards.",
    icon: "âš•ï¸"
  },
  {
    id: "communication",
    title: "Information Provision",
    description: "Explanation of eye health information.",
    icon: "ðŸ“‹"
  },
  {
    id: "community",
    title: "Community Services",
    description: "Participation in community eye health services.",
    icon: "ðŸ¤"
  }
];
```

===============================
  constants\branches.ts
===============================
`$lang
// constants/branches.ts -

export interface BranchDetail {
  id: string;
  name: string;
  type: 'clinic' | 'mobile' | 'satellite';
  address: string;
  phone: string;
  email: string;
  operatingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    publicHolidays: string;
  };
  services: string[];
  specialties: string[];
  doctors: string[];
  facilities: string[];
  parking: string;
  accessibility: string[];
  notes?: string;
  mapUrl: string;
  image: string;
}

export const BRANCHES_DATA: BranchDetail[] = [
  {
    id: 'robinson-house',
    name: 'Robinson House Clinic',
    type: 'clinic',
    address: 'Shop 15 & 16 Robinson House, Cnr Angwa/K.Nkrumah, Harare CBD',
    phone: '+263 242 700 000',
    email: 'robinson@linkopticians.co.zw',
    operatingHours: {
      weekdays: '8:00 AM - 6:00 PM',
      saturday: '9:00 AM - 1:00 PM',
      sunday: 'Closed',
      publicHolidays: 'Emergency services available'
    },
    services: [
      'Comprehensive eye examinations',
      'Contact lens fittings',
      'Pediatric eye care',
      'Emergency eye care',
      'Lens dispensing',
      'Frame dispensing',
      'Sunglasses'
    ],
    specialties: [
      'Primary eye care',
      'Lens dispensing',
      'Corporate eye care',
      'CBD location'
    ],
    doctors: ['Dr. Richard Maveneka', 'Dr. Taylor Mutaiwa'],
    facilities: [
      'Digital retinal imaging',
      'Optical coherence tomography',
      'Lens dispensing',
      'Frame selection',
      'Parking nearby'
    ],
    parking: 'Street parking available, secure parking nearby',
    accessibility: ['Wheelchair accessible', 'Elevator available'],
    notes: 'On-site lens dispensing available',
    mapUrl: 'https://maps.google.com/?q=Robinson+House+Angwa+Harare',
    image: '/assets/images/branches/robinson-house.png'
  },
  {
    id: 'kensington',
    name: 'Kensington Clinic',
    type: 'clinic',
    address: 'Corner of Argyle & Prince Edward Street, Kensington, Harare',
    phone: '+263 242 700 001',
    email: 'kensington@linkopticians.co.zw',
    operatingHours: {
      weekdays: '8:30 AM - 5:30 PM',
      saturday: '9:00 AM - 1:00 PM',
      sunday: 'Closed',
      publicHolidays: 'By appointment only'
    },
    services: [
      'Comprehensive eye examinations',
      'Geriatric eye care',
      'Low vision services',
      'Frame dispensing',
      'Contact lens fittings'
    ],
    specialties: [
      'Geriatric eye care',
      'Frame dispensing',
      'Suburban location',
      'On-site parking'
    ],
    doctors: ['Dr. Emily Rodriguez'],
    facilities: [
      'Visual field testing',
      'Diagnostic equipment',
      'Frame selection',
      'Consultation rooms'
    ],
    parking: 'Parking on premises',
    accessibility: ['Wheelchair accessible', 'Ramp access'],
    notes: 'Clinic location in Kensington',
    mapUrl: 'https://maps.google.com/?q=Kensington+Harare+Argyle+Street',
    image: '/assets/images/branches/kensington.png'
  },
  {
    id: 'honey-dew',
    name: 'Honey Dew Lifestyle Centre',
    type: 'clinic',
    address: '16 Greendale Avenue, Honey Dew Lifestyle Centre, Greendale, Harare',
    phone: '+263 242 700 002',
    email: 'honeydew@linkopticians.co.zw',
    operatingHours: {
      weekdays: '9:00 AM - 7:00 PM',
      saturday: '9:00 AM - 6:00 PM',
      sunday: '10:00 AM - 4:00 PM',
      publicHolidays: '10:00 AM - 4:00 PM'
    },
    services: [
      'Frame dispensing',
      'Contact lens fittings',
      'Sunglasses',
      'Blue light protection lenses',
      'Eye examinations'
    ],
    specialties: [
      'Frame dispensing',
      'Weekend appointments',
      'Mall location'
    ],
    doctors: ['Dr. Richard Maveneka', 'Lisa Thompson (Optical Manager)'],
    facilities: [
      'Frame selection',
      'Eye care services',
      'Mall parking'
    ],
    parking: 'Secure mall parking',
    accessibility: ['Wheelchair accessible', 'Mall access'],
    notes: 'Weekend appointments available',
    mapUrl: 'https://maps.google.com/?q=Honey+Dew+Lifestyle+Centre+Greendale',
    image: '/assets/images/branches/honey-dew.png'
  },
  {
    id: 'chipinge',
    name: 'Chipinge Clinic',
    type: 'clinic',
    address: '93 Moodie Street, Chipinge Town, Eastern Highlands',
    phone: '+263 267 222 333',
    email: 'chipinge@linkopticians.co.zw',
    operatingHours: {
      weekdays: '8:00 AM - 5:00 PM',
      saturday: '8:00 AM - 12:00 PM',
      sunday: 'Emergency services available',
      publicHolidays: 'Closed'
    },
    services: [
      'Community eye care',
      'Agricultural worker eye health',
      'School vision screenings',
      'Eyewear dispensing',
      'Mobile unit base'
    ],
    specialties: [
      'Community eye care',
      'Agricultural industry services',
      'Border town location'
    ],
    doctors: ['Dr. Local Practitioner'],
    facilities: [
      'Diagnostic equipment',
      'Frame repair',
      'Community room',
      'Generator backup'
    ],
    parking: 'Street parking available',
    accessibility: ['Ground floor access'],
    notes: 'Serving Chipinge district. Mobile unit based at this location.',
    mapUrl: 'https://maps.google.com/?q=Chipinge+Moodie+Street',
    image: '/assets/images/branches/chipinge.png'
  },
  {
    id: 'chiredzi',
    name: 'Chiredzi Clinic',
    type: 'clinic',
    address: '361 Mopani Drive, Chiredzi CBD, Lowveld',
    phone: '+263 312 444 555',
    email: 'chiredzi@linkopticians.co.zw',
    operatingHours: {
      weekdays: '8:00 AM - 5:00 PM',
      saturday: '8:00 AM - 12:00 PM',
      sunday: 'Emergency services available',
      publicHolidays: 'Closed'
    },
    services: [
      'Industrial eye safety',
      'Diabetes eye screening',
      'Agricultural worker care',
      'Eyewear dispensing',
      'Emergency repairs'
    ],
    specialties: [
      'Industrial eye care',
      'Agricultural worker health',
      'Diabetes screening'
    ],
    doctors: ['Dr. Local Practitioner'],
    facilities: [
      'Industrial safety equipment',
      'Diabetes screening tools',
      'Repair services',
      'Air conditioning'
    ],
    parking: 'On-site parking available',
    accessibility: ['Ground floor access'],
    notes: 'Serving Tongaat Hulletts employees and local community',
    mapUrl: 'https://maps.google.com/?q=Chiredzi+Mopani+Drive',
    image: '/assets/images/branches/chiredzi.png'
  }
];

export const MOBILE_UNIT_DATA = {
  description: 'Mobile eye care unit providing services to various communities.',
  services: [
    'Basic eye screenings',
    'School vision testing',
    'Community health services',
    'Geriatric vision care',
    'Remote area services'
  ],
  coverage: [
    'Chipinge rural districts',
    'Chiredzi areas',
    'School health programs',
    'Corporate wellness programs',
    'Community outreach'
  ],
  schedule: 'Schedule varies. Contact for current schedule.',
  contact: 'Mobile unit inquiries: +263 77 340 7464',
  image: '/assets/images/branches/mobile-unit.png'
};

export const BRANCH_CATEGORIES = [
  { id: 'all', label: 'All Locations' },
  { id: 'harare', label: 'Harare Clinics' },
  { id: 'rural', label: 'Rural Clinics' },
  { id: 'mobile', label: 'Mobile Services' }
];
```

===============================
  constants\community.ts
===============================
`$lang
export interface OutreachProgram {
  id: string;
  title: string;
  description: string;
  target: string[];
  services: string[];
  frequency: string;
  image: string;
  impact: string;
}

export interface SchoolProgram {
  id: string;
  school: string;
  location: string;
  students: number;
  services: string[];
  findings: string[];
  image: string;
}

export interface CorporatePartner {
  id: string;
  name: string;
  industry: string;
  program: string;
  employees: number;
  image: string;
}

export const COMMUNITY_PROGRAMS: OutreachProgram[] = [
  {
    id: "school-screenings",
    title: "School Eye Health Services",
    description: "Information about vision screening services for school children",
    target: ["Primary schools", "Secondary schools", "Rural schools"],
    services: ["Basic vision screening", "Myopia detection", "Referral for treatment", "Eye health information"],
    frequency: "Services conducted during school terms",
    image: "/assets/images/community/school-screening.png",
    impact: "Vision screening services have been provided"
  },
  {
    id: "senior-screenings",
    title: "Vision Screening Services for Seniors",
    description: "Information about eye health services for elderly individuals in community centers",
    target: ["Senior citizens", "Retirement homes", "Community centers"],
    services: ["Cataract screening", "Glaucoma testing", "Presbyopia assessment", "Low vision evaluation"],
    frequency: "Monthly community services available",
    image: "/assets/images/community/senior-screening.png",
    impact: "Eye health services for seniors have been provided"
  },
  {
    id: "diabetes-awareness",
    title: "Diabetes Eye Health Information",
    description: "Information about diabetic retinopathy screening services",
    target: ["Individuals with diabetes", "Community health centers", "Workplaces"],
    services: ["Retinal photography", "Diabetes eye health information", "Referral to clinics", "Follow-up care"],
    frequency: "Quarterly services available",
    image: "/assets/images/community/diabetes-screening.png",
    impact: "Diabetes eye health services have been provided"
  },
  {
    id: "eyewear-donation",
    title: "Eyewear Services",
    description: "Information about eyewear services available",
    target: ["Families", "Rural communities", "School children"],
    services: ["Basic prescription glasses", "Reading glasses", "Sunglasses for UV protection"],
    frequency: "Ongoing services available",
    image: "/assets/images/community/eyewear-donation.png",
    impact: "Eyewear services have been provided"
  }
];

export const MOBILE_UNIT_DETAILS = {
  description: "Information about mobile eye care unit services.",
  features: [
    "Digital retinal camera",
    "Auto-refractor",
    "Slit lamp",
    "Visual acuity chart",
    "Frame selection",
    "Basic lens edging"
  ],
  coverage: [
    "Chipinge rural districts",
    "Chiredzi farming communities",
    "School health services",
    "Corporate wellness services",
    "Community health services"
  ],
  schedule: [
    "Schools: Weekdays during term",
    "Communities: Weekends and holidays",
    "Corporate: By arrangement",
    "Health services: Scheduled events"
  ],
  booking: "For mobile unit information: +263 77 340 7464 or community@linkopticians.co.zw"
};

export const SCHOOL_PROGRAMS: SchoolProgram[] = [
  {
    id: "chipinge-central",
    school: "Chipinge Central Primary",
    location: "Chipinge Town",
    students: 850,
    services: ["Vision screening", "Eye health information", "Referral follow-up"],
    findings: ["Vision services provided", "Referral services provided"],
    image: "/assets/images/community/chipinge-school.png"
  },
  {
    id: "sugar-estate",
    school: "Hippo Valley Estate School",
    location: "Chiredzi",
    students: 1200,
    services: ["Comprehensive screening", "Parent information sessions", "On-site follow-up"],
    findings: ["Vision services provided", "Eyewear services provided"],
    image: "/assets/images/community/estate-school.png"
  }
];

export const CORPORATE_PARTNERS: CorporatePartner[] = [
  {
    id: "tongaat",
    name: "Tongaat Hulletts",
    industry: "Sugar Production",
    program: "Industrial eye safety services provided",
    employees: 25000,
    image: "/assets/images/community/tongaat-partner.png"
  },
  {
    id: "tea-estate",
    name: "Eastern Highlands Tea Estates",
    industry: "Agriculture",
    program: "Farm worker eye health services provided",
    employees: 5000,
    image: "/assets/images/community/tea-estate.png"
  }
];

export const COMMUNITY_STATS = [
  { value: "16+", label: "Years of service" },
  { value: "Multiple", label: "Schools served" },
  { value: "Various", label: "Communities served" },
  { value: "5", label: "Districts served" }
];
```

===============================
  constants\contact.ts
===============================
`$lang
// constants/contact.ts - 

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactInfo {
  id: string;
  title: string;
  details: string;
  icon: string;
  action?: {
    type: "tel" | "mailto" | "url";
    value: string;
  };
}

export const CONTACT_DATA = {
  hero: {
    title: "Contact Information",
    description: "Contact details for Link Opticians practices."
  },
  
  contactInfo: [
    {
      id: "phone",
      title: "Telephone",
      details: "Main: +263 242 700 000\nEmergency: +263 77 340 7464",
      icon: "/assets/icons/phone.svg",
      action: { type: "tel", value: "+263242700000" }
    },
    {
      id: "email",
      title: "Email",
      details: "General Inquiries: info@linkopticians.co.zw\nAppointments: appointments@linkopticians.co.zw",
      icon: "/assets/icons/email.svg",
      action: { type: "mailto", value: "info@linkopticians.co.zw" }
    },
    {
      id: "hours",
      title: "Operating Hours",
      details: "Monday-Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 1:00 PM\nSunday: By prior arrangement for emergencies",
      icon: "/assets/icons/clock.svg"
    }
  ],
  
  map: {
    title: "Harare Main Practice",
    address: "Shop 15 & 16 Robinson House, Cnr Angwa / K.Nkrumah, Harare, Zimbabwe",
    placeholder: "Practice location map",
    directionsUrl: "https://maps.google.com/?q=Robinson+House+Angwa+Harare"
  },
  
  phone: {
    main: "+263 242 700 000",
    emergency: "+263 77 340 7464"
  },
  
  emergency: {
    title: "Emergency Eye Care",
    subtitle: "For urgent eye care requirements outside standard hours.",
    appointmentReason: "Emergency"
  }
};

export const FAQ_DATA: FAQ[] = [
  {
    id: "appointment",
    question: "How can I schedule an appointment?",
    answer: "Appointments can be requested via the online form, by telephone, or in person at any of our practices.",
    category: "Appointments"
  },
  {
    id: "emergency",
    question: "Do you provide emergency eye care?",
    answer: "Emergency consultations are available. Please call the emergency number for immediate assistance.",
    category: "Services"
  },
  {
    id: "insurance",
    question: "Do you accept medical aid?",
    answer: "We accept most major medical aid schemes. Cash payment is also available. Please bring your medical aid details to your appointment.",
    category: "Payment"
  },
  {
    id: "location",
    question: "Where are your practices located?",
    answer: "We have practices in Harare, Chipinge, and Chiredzi. A mobile clinic service operates in surrounding areas.",
    category: "Practice"
  },
  {
    id: "hours",
    question: "What are your opening times?",
    answer: "Standard hours are Monday to Friday, 8:00 AM to 6:00 PM. Saturday hours are 9:00 AM to 1:00 PM. Hours may vary by location.",
    category: "Practice"
  }
];

export const CONTACT_FORM_SUBJECTS = [
  { value: "appointment", label: "Appointment Request" },
  { value: "general", label: "General Inquiry" },
  { value: "billing", label: "Billing Inquiry" },
  { value: "feedback", label: "Feedback" }
];

export const APPOINTMENT_TYPES = [
  { value: "routine", label: "Routine Eye Examination" },
  { value: "contact-lens", label: "Contact Lens Consultation" },
  { value: "emergency", label: "Emergency Consultation" },
  { value: "follow-up", label: "Follow-up Visit" },
  { value: "specialized", label: "Specialist Consultation" }
];
```

===============================
  constants\home.ts
===============================
`$lang
export interface HomeServicePreview {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const HOME_SERVICES_PREVIEW: HomeServicePreview[] = [
  {
    id: "eye-exam",
    title: "Eye Examinations",
    description: "Comprehensive eye examinations.",
    icon: "/assets/icons/eye.svg"
  },
  {
    id: "contact-lens",
    title: "Contact Lens Services",
    description: "Contact lens fitting and assessment.",
    icon: "/assets/icons/contact-lens.svg"
  },
  {
    id: "prescription-glasses",
    title: "Prescription Glasses",
    description: "Dispensing of prescription spectacles.",
    icon: "/assets/icons/glasses.svg"
  },
  {
    id: "dry-eye",
    title: "Dry Eye Services",
    description: "Assessment and management of dry eye conditions.",
    icon: "/assets/icons/dry-eye.svg"
  },
  {
    id: "pediatric",
    title: "Pediatric Services",
    description: "Eye care for pediatric patients.",
    icon: "/assets/icons/pediatric.svg"
  },
  {
    id: "emergency",
    title: "Emergency Services",
    description: "Management of ocular emergencies and sudden vision changes.",
    icon: "/assets/icons/emergency.svg"
  }
];

export const HOME_HERO_DATA = {
  title: "Link Opticians",
  description: "A registered optometry practice.",
  primaryCta: {
    text: "Book Appointment",
    href: "/book"
  },
  secondaryCta: {
    text: "Our Services",
    href: "/services"
  },
  image: {
    src: "/assets/images/eye-care-hero.png",
    alt: "Optometrist conducting eye examination"
  }
};
```

===============================
  constants\index.ts
===============================
`$lang
import { Gender } from "@/types";

export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "John Green",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Cameron",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livingston",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Evan Peter",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jane Powell",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Ramirez",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];

// FIXED: Updated to match database schema: "schedule" instead of "scheduled"
export const StatusIcon = {
  schedule: "/assets/icons/check.svg",  // CHANGED: "scheduled" to "schedule"
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
```

===============================
  constants\navigation.ts
===============================
`$lang
// constants/navigation.ts - UPDATED WITH OFFERS
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
    description: "View our services"
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
  },
  {
    id: "emergency",
    label: "Emergency",
    href: "/emergency",
    description: "Emergency eye care information"
  },
  {
    id: "offers",
    label: "Offers",
    href: "/offers",
    description: "Special promotions and seasonal offers"
  }
];

export const FOOTER_DATA = {
  tagline: "Professional Eye Care Services",
  copyright: "Â© 2026 Link Opticians. All rights reserved.",
  links: [
    { id: "home", label: "Home", href: "/" },
    { id: "services", label: "Services", href: "/services" },
    { id: "products", label: "Products", href: "/products" },
    { id: "locations", label: "Locations", href: "/locations" },
    { id: "community", label: "Community", href: "/community" },
    { id: "about", label: "About", href: "/about" },
    { id: "contact", label: "Contact", href: "/contact" },
    { id: "emergency", label: "Emergency", href: "/emergency" },
    { id: "offers", label: "Special Offers", href: "/offers" },
    { id: "book", label: "Book Online", href: "/book" }
  ]
};

export const ADMIN_LINK = {
  label: "Admin",
  href: "/?admin=true",
  description: "Access admin dashboard"
};
```

===============================
  constants\offers.ts
===============================
`$lang
// constants/offers.ts
export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount?: string;
  duration: string;
  validUntil: string;
  category: 'seasonal' | 'health' | 'community' | 'product';
  image: string;
  backgroundColor?: string;
  textColor?: string;
  conditions: string[];
  branchSpecific?: string[];
  featured: boolean;
  bookingCode?: string;
}

export const CURRENT_PROMOTIONS: Promotion[] = [
  {
    id: 'back-to-school-2024',
    title: 'Back to School Eye Check',
    description: 'Ensure your child starts the school year with clear vision. Comprehensive pediatric eye examination.',
    discount: '20% off children\'s eyewear',
    duration: 'January - February 2024',
    validUntil: '2024-02-28',
    category: 'seasonal',
    image: '/assets/images/offers/back-to-school.jpg',
    backgroundColor: '#4F46E5',
    textColor: '#FFFFFF',
    conditions: [
      'Valid for children under 18 years',
      'Includes comprehensive eye examination',
      'Eyewear discount applicable with examination',
      'Appointment required'
    ],
    branchSpecific: ['All branches'],
    featured: true,
    bookingCode: 'SCHOOL2024'
  },
  {
    id: 'diabetes-awareness',
    title: 'Diabetes Eye Health Screening',
    description: 'Essential retinal screening for diabetic patients. Early detection prevents vision loss.',
    discount: 'Free retinal photography',
    duration: 'November (Diabetes Awareness Month)',
    validUntil: '2024-11-30',
    category: 'health',
    image: '/assets/images/offers/diabetes-screening.jpg',
    backgroundColor: '#10B981',
    textColor: '#FFFFFF',
    conditions: [
      'For diabetic patients only',
      'Includes digital retinal imaging',
      'Referral letter not required',
      'Medical aid claims accepted'
    ],
    branchSpecific: ['All branches'],
    featured: true,
    bookingCode: 'DIABETES2024'
  },
  {
    id: 'summer-uv-protection',
    title: 'Summer UV Protection Package',
    description: 'Protect your eyes from Zimbabwe\'s intense summer sun with premium polarized lenses.',
    discount: '30% off prescription sunglasses',
    duration: 'October - December 2024',
    validUntil: '2024-12-31',
    category: 'seasonal',
    image: '/assets/images/offers/uv-protection.jpg',
    backgroundColor: '#F59E0B',
    textColor: '#1F2937',
    conditions: [
      'Includes UV400 protection',
      'Polarized lens options available',
      'Frame selection included',
      'Valid with eye examination'
    ],
    branchSpecific: ['All branches'],
    featured: true,
    bookingCode: 'SUMMER2024'
  },
  {
    id: 'corporate-wellness',
    title: 'Corporate Eye Wellness Program',
    description: 'Workplace eye health assessments for your team. Improve productivity and eye safety.',
    discount: 'Bulk booking discounts available',
    duration: 'Year-round',
    validUntil: '2024-12-31',
    category: 'community',
    image: '/assets/images/offers/corporate-wellness.jpg',
    backgroundColor: '#3B82F6',
    textColor: '#FFFFFF',
    conditions: [
      'Minimum 10 employees',
      'On-site or clinic appointments',
      'Customized reporting',
      'OSHA compliance documentation'
    ],
    branchSpecific: ['Harare branches'],
    featured: false,
    bookingCode: 'CORPORATE2024'
  },
  {
    id: 'senior-care',
    title: 'Senior Citizens Eye Care',
    description: 'Specialized care for age-related eye conditions. Cataract screening and low vision assessments.',
    discount: '15% off for seniors (60+)',
    duration: 'Year-round',
    validUntil: '2024-12-31',
    category: 'health',
    image: '/assets/images/offers/senior-care.jpg',
    backgroundColor: '#8B5CF6',
    textColor: '#FFFFFF',
    conditions: [
      'Valid for patients 60 years and above',
      'Includes cataract screening',
      'Priority appointment scheduling',
      'Companion welcome'
    ],
    branchSpecific: ['All branches'],
    featured: false,
    bookingCode: 'SENIOR2024'
  },
  {
    id: 'frame-combo',
    title: 'Buy One Get One 50% Off Frames',
    description: 'Get a second frame at half price. Perfect for work and casual wear.',
    discount: 'BOGO 50% off',
    duration: 'Limited Time',
    validUntil: '2024-06-30',
    category: 'product',
    image: '/assets/images/offers/frame-combo.jpg',
    backgroundColor: '#EC4899',
    textColor: '#FFFFFF',
    conditions: [
      'Both frames must be purchased together',
      'Lenses sold separately',
      'Select frame models only',
      'Cannot be combined with other offers'
    ],
    branchSpecific: ['Robinson House', 'Kensington'],
    featured: false,
    bookingCode: 'BOGO2024'
  }
];

export const UPCOMING_PROMOTIONS: Promotion[] = [
  {
    id: 'teachers-month',
    title: 'Teachers Appreciation Month',
    description: 'Special discounts for educators. Thank you for shaping our future.',
    discount: '25% off for teachers',
    duration: 'October 2024',
    validUntil: '2024-10-31',
    category: 'community',
    image: '/assets/images/offers/teachers.jpg',
    backgroundColor: '#EF4444',
    textColor: '#FFFFFF',
    conditions: [
      'Valid teacher ID required',
      'Includes complete eye examination',
      'Applies to eyewear purchase',
      'Personal and family appointments'
    ],
    branchSpecific: ['All branches'],
    featured: false,
    bookingCode: 'TEACH2024'
  },
  {
    id: 'dry-eye-winter',
    title: 'Winter Dry Eye Relief',
    description: 'Combat dry eye symptoms during Zimbabwe\'s dry winter season.',
    discount: 'Free dry eye assessment',
    duration: 'June - August 2024',
    validUntil: '2024-08-31',
    category: 'seasonal',
    image: '/assets/images/offers/dry-eye.jpg',
    backgroundColor: '#06B6D4',
    textColor: '#1F2937',
    conditions: [
      'Includes tear film assessment',
      'Treatment plan included',
      'Lubricant samples provided',
      'Follow-up appointment recommended'
    ],
    branchSpecific: ['All branches'],
    featured: false,
    bookingCode: 'DRYEYE2024'
  }
];

export const PROMOTION_CATEGORIES = [
  { id: 'all', label: 'All Offers', icon: 'ðŸŽ¯' },
  { id: 'seasonal', label: 'Seasonal', icon: 'ðŸŒ¦ï¸' },
  { id: 'health', label: 'Health Screening', icon: 'ðŸ¥' },
  { id: 'community', label: 'Community', icon: 'ðŸ¤' },
  { id: 'product', label: 'Products', icon: 'ðŸ‘“' }
];

// Helper to get featured promotions for homepage
export const getFeaturedPromotions = (): Promotion[] => {
  return CURRENT_PROMOTIONS.filter(promo => promo.featured);
};

// Helper to check if promotion is still valid
export const isPromotionValid = (promo: Promotion): boolean => {
  const today = new Date();
  const validUntil = new Date(promo.validUntil);
  return today <= validUntil;
};
```

===============================
  constants\products.ts
===============================
`$lang
// constants/products.ts - 
export interface Product {
  id: string;
  name: string;
  category: 'frames' | 'sunglasses' | 'contact-lenses' | 'accessories' | 'lenses';
  type: string;
  description: string;
  features: string[];
  materials?: string[];
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
    description: "Frame options available",
    features: ["Frame option"],
    materials: ["Frame materials available"],
    image: "/assets/images/products/frame-basic.png",
    tags: ["frames"],
    availability: ["Available"]
  },
  {
    id: "frame-design",
    name: "Frame Options",
    category: "frames",
    type: "Frame option",
    description: "Frame options available",
    features: ["Frame option"],
    materials: ["Frame materials available"],
    image: "/assets/images/products/frame-designer.png",
    tags: ["frames"],
    availability: ["Available"]
  },
  {
    id: "frame-special",
    name: "Specialty Frames",
    category: "frames",
    type: "Frame option",
    description: "Frame options available",
    features: ["Frame option"],
    materials: ["Frame materials available"],
    image: "/assets/images/products/frame-special.png",
    tags: ["frames"],
    availability: ["Available"]
  },

  // SUNGLASSES
  {
    id: "sunglass-basic",
    name: "Sunglasses",
    category: "sunglasses",
    type: "Sunglass option",
    description: "Sunglass options available",
    features: ["Sunglass option"],
    materials: ["Sunglass materials available"],
    image: "/assets/images/products/sunglass-basic.png",
    tags: ["sunglasses"],
    availability: ["Available"]
  },
  {
    id: "sunglass-design",
    name: "Sunglass Options",
    category: "sunglasses",
    type: "Sunglass option",
    description: "Sunglass options available",
    features: ["Sunglass option"],
    materials: ["Sunglass materials available"],
    image: "/assets/images/products/sunglass-designer.png",
    tags: ["sunglasses"],
    availability: ["Available"]
  },
  {
    id: "sunglass-prescription",
    name: "Prescription Sunglasses",
    category: "sunglasses",
    type: "Sunglass option",
    description: "Sunglass options available",
    features: ["Sunglass option"],
    materials: ["Sunglass materials available"],
    image: "/assets/images/products/sunglass-prescription.png",
    tags: ["sunglasses"],
    availability: ["Available"]
  },

  // CONTACT LENSES
  {
    id: "contact-daily",
    name: "Contact Lens Options",
    category: "contact-lenses",
    type: "Contact lens option",
    description: "Contact lens options available",
    features: ["Contact lens option"],
    image: "/assets/images/products/contact-daily.png",
    tags: ["contact lenses"],
    availability: ["Available"]
  },
  {
    id: "contact-monthly",
    name: "Contact Lens Options",
    category: "contact-lenses",
    type: "Contact lens option",
    description: "Contact lens options available",
    features: ["Contact lens option"],
    image: "/assets/images/products/contact-monthly.png",
    tags: ["contact lenses"],
    availability: ["Available"]
  },
  {
    id: "contact-special",
    name: "Specialty Contact Lenses",
    category: "contact-lenses",
    type: "Contact lens option",
    description: "Contact lens options available",
    features: ["Contact lens option"],
    image: "/assets/images/products/contact-special.png",
    tags: ["contact lenses"],
    availability: ["Available"]
  },

  // LENSES
  {
    id: "lens-single",
    name: "Lens Options",
    category: "lenses",
    type: "Lens option",
    description: "Lens options available",
    features: ["Lens option"],
    image: "/assets/images/products/lens-single.png",
    tags: ["lenses"],
    availability: ["Manufactured"]
  },
  {
    id: "lens-progressive",
    name: "Lens Options",
    category: "lenses",
    type: "Lens option",
    description: "Lens options available",
    features: ["Lens option"],
    image: "/assets/images/products/lens-progressive.png",
    tags: ["lenses"],
    availability: ["Manufactured"]
  },
  {
    id: "lens-addons",
    name: "Lens Options",
    category: "lenses",
    type: "Lens option",
    description: "Lens options available",
    features: ["Lens option"],
    image: "/assets/images/products/lens-addons.png",
    tags: ["lenses"],
    availability: ["Manufactured"]
  },

  // ACCESSORIES
  {
    id: "accessory-solutions",
    name: "Accessory Options",
    category: "accessories",
    type: "Accessory",
    description: "Accessory options available",
    features: ["Accessory option"],
    image: "/assets/images/products/accessory-solutions.png",
    tags: ["accessories"],
    availability: ["Available"]
  },
  {
    id: "accessory-cases",
    name: "Accessory Options",
    category: "accessories",
    type: "Accessory",
    description: "Accessory options available",
    features: ["Accessory option"],
    image: "/assets/images/products/accessory-cases.png",
    tags: ["accessories"],
    availability: ["Available"]
  },
  {
    id: "accessory-readers",
    name: "Accessory Options",
    category: "accessories",
    type: "Accessory",
    description: "Accessory options available",
    features: ["Accessory option"],
    image: "/assets/images/products/accessory-readers.png",
    tags: ["accessories"],
    availability: ["Available"]
  }
];

export const PRODUCT_CATEGORIES = [
  { id: "all", label: "All Products", icon: "ðŸ“¦" },
  { id: "frames", label: "Frames", icon: "ðŸ‘“" },
  { id: "sunglasses", label: "Sunglasses", icon: "ðŸ•¶ï¸" },
  { id: "contact-lenses", label: "Contact Lenses", icon: "ðŸ§¿" },
  { id: "lenses", label: "Lenses", icon: "ðŸ”" },
  { id: "accessories", label: "Accessories", icon: "ðŸ§°" }
];

export const PRODUCT_FEATURES = [
  "Lens manufacturing services available",
  "Medical aid coverage information available",
  "Payment options available",
  "Frame repair services available",
  "Warranty information available"
];
```

===============================
  constants\services.ts
===============================
`$lang
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
```

===============================
  constants\social.ts
===============================
`$lang
// constants/social.ts
// Social media configuration for Link Opticians

export interface SocialMediaPlatform {
  id: string;
  name: string;
  icon: string;
  url: string;
  color: string;
  description: string;
  primary?: boolean; // For WhatsApp as primary contact method
}

export const SOCIAL_MEDIA_LINKS: SocialMediaPlatform[] = [
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: '/assets/icons/social/whatsapp.svg', // You'll need to add this icon
    url: 'https://wa.me/263773407464', // Using the emergency number from the code
    color: '#25D366',
    description: 'Message us on WhatsApp',
    primary: true // WhatsApp is primary for African markets
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: '/assets/icons/social/facebook.svg', // You'll need to add this icon
    url: 'https://facebook.com/linkopticians',
    color: '#1877F2',
    description: 'Follow us on Facebook'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: '/assets/icons/social/instagram.svg', // You'll need to add this icon
    url: 'https://instagram.com/linkopticians',
    color: '#E4405F',
    description: 'Follow us on Instagram'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: '/assets/icons/social/youtube.svg', // You'll need to add this icon
    url: 'https://youtube.com/@linkopticians',
    color: '#FF0000',
    description: 'Watch our videos on YouTube'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: '/assets/icons/social/linkedin.svg', // You'll need to add this icon
    url: 'https://linkedin.com/company/link-opticians',
    color: '#0A66C2',
    description: 'Connect with us on LinkedIn'
  },
  {
    id: 'twitter',
    name: 'Twitter / X',
    icon: '/assets/icons/social/twitter.svg', // You'll need to add this icon
    url: 'https://twitter.com/linkopticians',
    color: '#000000',
    description: 'Follow us on Twitter'
  }
];

// WhatsApp contact info (separate for easy access)
export const WHATSAPP_CONTACT = {
  phone: '+263 77 340 7464',
  formattedPhone: '263773407464',
  url: 'https://wa.me/263773407464',
  message: 'Hello Link Opticians, I would like to inquire about...'
};

// Helper function to generate WhatsApp URL with pre-filled message
export const getWhatsAppUrl = (message?: string) => {
  const defaultMessage = 'Hello Link Opticians, I would like to inquire about your services.';
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/263773407464?text=${encodedMessage}`;
};

// Social media display configuration
export const SOCIAL_MEDIA_CONFIG = {
  // Which platforms to show in different sections
  footer: ['whatsapp', 'facebook', 'instagram', 'youtube'],
  contactPage: ['whatsapp', 'facebook', 'instagram', 'youtube', 'linkedin'],
  header: ['whatsapp'], // Optional: Only WhatsApp in header if space is limited
  
  // Size options for icons
  iconSize: {
    small: 'w-5 h-5',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  }
};

// Alternative: If you want simple array format without icons
export const SIMPLE_SOCIAL_LINKS = [
  { name: 'WhatsApp', url: 'https://wa.me/263773407464' },
  { name: 'Facebook', url: 'https://facebook.com/linkopticians' },
  { name: 'Instagram', url: 'https://instagram.com/linkopticians' },
  { name: 'YouTube', url: 'https://youtube.com/@linkopticians' },
];

// ADD TO EXISTING constants/social.ts file:

// ==================== SMS CONFIGURATION ====================
export interface SMSReminderConfig {
  enabled: boolean;
  reminderTimes: number[]; // hours before appointment
  templates: {
    confirmation: (name: string, date: string, time: string, branch: string) => string;
    reminder24h: (name: string, date: string, time: string, branch: string) => string;
    reminder3h: (name: string, date: string, time: string) => string; // Removed branch parameter
    cancelled: (name: string, date: string, time: string) => string;
    rescheduled: (name: string, oldDate: string, newDate: string, newTime: string) => string;
  };
}

export const SMS_CONFIG = {
  appointmentReminders: {
    enabled: true,
    // Reminder times (hours before appointment)
    reminderTimes: [24, 3], // 24 hours and 3 hours before
    // Message templates
    templates: {
      confirmation: (name: string, date: string, time: string, branch: string) => 
        `Hello ${name}, your appointment at Link Opticians is confirmed for ${date} at ${time} at ${branch}. Please arrive 10 minutes early.`,
      
      reminder24h: (name: string, date: string, time: string, branch: string) =>
        `Reminder: Your Link Opticians appointment is tomorrow (${date}) at ${time} at ${branch}. Call +263242700000 for changes.`,
      
      reminder3h: (name: string, date: string, time: string) => // Removed unused branch parameter
        `Reminder: Your Link Opticians appointment is today at ${time}. Please bring medical aid card if applicable.`,
      
      cancelled: (name: string, date: string, time: string) =>
        `Dear ${name}, your Link Opticians appointment on ${date} at ${time} has been cancelled. Call +263242700000 to reschedule.`,
      
      rescheduled: (name: string, oldDate: string, newDate: string, newTime: string) =>
        `Hello ${name}, your Link Opticians appointment has been rescheduled to ${newDate} at ${newTime} (was ${oldDate}).`
    }
  },
  
  // SMS opt-in messages
  optIn: {
    welcome: "Thank you for opting into SMS reminders from Link Opticians. You'll receive appointment confirmations and reminders.",
    help: "Reply STOP to unsubscribe. Standard SMS rates may apply.",
    stop: "You have been unsubscribed from Link Opticians SMS reminders. Reply START to resubscribe."
  }
};

// Helper function to format date for SMS (Zimbabwe format)
export const formatSMSDate = (date: Date): string => {
  return date.toLocaleDateString('en-ZW', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

// Helper function to format time for SMS (Zimbabwe format)  
export const formatSMSTime = (date: Date): string => {
  return date.toLocaleTimeString('en-ZW', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

// Type for SMS reminder data
export interface SMSReminderData {
  patientName: string;
  patientPhone: string;
  appointmentId: string;
  appointmentDate: Date;
  branchName?: string;
  status: 'pending' | 'schedule' | 'cancelled'; // Using your Status type
  smsOptIn: boolean;
}
```

