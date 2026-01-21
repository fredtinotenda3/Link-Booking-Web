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

export interface WhyChooseUs {
  id: string;
  title: string;
  description: string;
}

export const ABOUT_DATA = {
  hero: {
    title: "About Link Opticians",
    description: "For over 17 years, Link Opticians has been dedicated to providing exceptional eye care to our community. Our commitment to clinical excellence, patient education, and personalized care has made us a trusted name in optometry."
  },
  
  stats: [
    { id: "years", value: "17+", label: "Years Experience" },
    { id: "patients", value: "1K+", label: "Patients Served" },
    { id: "doctors", value: "4", label: "Expert Optometrists" },
    { id: "locations", value: "3", label: "Convenient Locations" }
  ],
  
  story: "Founded in 2008 by Dr. Maveneka Link, our practice began with a simple mission: to make quality eye care accessible and understandable for everyone. What started as a single-examination room has grown into a comprehensive eye care center, but our founding principles remain unchanged.",
  
  whyChooseUs: [
    {
      id: "comprehensive",
      title: "Comprehensive Eye Exams",
      description: "Beyond vision correction to detect early signs of eye diseases"
    },
    {
      id: "technology",
      title: "Modern Technology",
      description: "State-of-the-art diagnostic equipment for accurate assessments"
    },
    {
      id: "personalized",
      title: "Personalized Attention",
      description: "Small practice atmosphere with one-on-one patient care"
    },
    {
      id: "continuity",
      title: "Continuity of Care",
      description: "Long-term relationships with patients across generations"
    }
  ],
  
  community: {
    description: "We believe in giving back to the community that has supported us for two decades. Each year, we participate in various initiatives:",
    initiatives: [
      "Free vision screenings for seniors",
      "School eye health programs",
      "Donated eyewear for those in need",
      "Diabetes eye health awareness campaigns",
      "Local sports team sponsorship",
      "Workplace wellness partnerships"
    ]
  },
  
  images: {
    clinicInterior: "/assets/images/clinic-interior.png",
    examRoom: "/assets/images/eye-exam-room.png",
    communityEvent: "/assets/images/community-event.png",
    founder: "/assets/images/dr-link-founder.jpg"
  }
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "richard-maveneka",
    name: "Dr. Richard Maveneka",
    role: "Lead Optometrist",
    experience: "17+ years",
    specialty: "Pediatric Optometry & Myopia Control",
    image: "/assets/images/dr-sarah.jpg",
    bio: "Specializes in children's vision development and myopia progression management.",
    education: ["OD - New England College of Optometry", "Fellow of the American Academy of Optometry"]
  },
  {
    id: "taylor-mutaiwa",
    name: "Dr. Taylor Mutaiwa",
    role: "Optometrist",
    experience: "8+ years",
    specialty: "Dry Eye Treatment & Contact Lenses",
    image: "/assets/images/dr-chen.jpg",
    bio: "Expert in advanced dry eye therapies and complex contact lens fittings.",
    education: ["OD - UC Berkeley School of Optometry", "Dry Eye Certified Specialist"]
  },
  {
    id: "emily-rodriguez",
    name: "Dr. Emily Rodriguez",
    role: "Optometrist",
    experience: "8+ years",
    specialty: "Low Vision & Geriatric Care",
    image: "/assets/images/dr-emily.jpg",
    bio: "Dedicated to helping patients with vision impairment maintain independence.",
    education: ["OD - Southern California College of Optometry", "Low Vision Rehabilitation Certification"]
  },
  {
    id: "lisa-thompson",
    name: "Lisa Thompson",
    role: "Optical Manager",
    experience: "10+ years",
    specialty: "Frame Styling & Lens Technology",
    image: "/assets/images/lisa-optical.jpg",
    bio: "Helps patients find perfect frames and advanced lens options for their lifestyle.",
    education: ["Certified Optician", "ABO Advanced Certification"]
  }
];

export const VALUES: Value[] = [
  {
    id: "patient-centered",
    title: "Patient-Centered Care",
    description: "We listen to your concerns and tailor treatments to your unique vision needs and lifestyle.",
    icon: "👁️"
  },
  {
    id: "excellence",
    title: "Clinical Excellence",
    description: "Continuous education and investment in the latest diagnostic technology for accurate results.",
    icon: "🎯"
  },
  {
    id: "communication",
    title: "Honest Communication",
    description: "Clear explanations about your eye health and transparent pricing with no hidden fees.",
    icon: "💬"
  },
  {
    id: "community",
    title: "Community Focus",
    description: "Active participation in local health initiatives and vision screening programs.",
    icon: "🤝"
  }
];