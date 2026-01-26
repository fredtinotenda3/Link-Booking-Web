// constants/about.ts - COMPLIANT VERSION

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
    { id: "locations", value: "5", label: "Clinic locations" },
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
      title: "Diagnostic Equipment",
      description: "Equipment for eye assessments"
    },
    {
      id: "personalized",
      title: "Patient Consultation",
      description: "Individual attention during appointments"
    },
    {
      id: "continuity",
      title: "Follow-up Services",
      description: "Additional appointments as needed"
    }
  ],
  
  community: {
    description: "Community eye health services information:",
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
    specialty: "Pediatric optometry services",
    image: "/assets/images/dr-sarah.jpg",
    bio: "Experience with children's vision services.",
    education: ["Optometry qualification"]
  },
  {
    id: "taylor-mutaiwa",
    name: "Dr. Taylor Mutaiwa",
    role: "Optometrist",
    experience: "8 years in practice",
    specialty: "Dry eye services",
    image: "/assets/images/dr-chen.jpg",
    bio: "Experience with contact lens services.",
    education: ["Optometry qualification"]
  },
  {
    id: "emily-rodriguez",
    name: "Dr. Emily Rodriguez",
    role: "Optometrist",
    experience: "8 years in practice",
    specialty: "Low vision services",
    image: "/assets/images/dr-emily.jpg",
    bio: "Experience with vision impairment services.",
    education: ["Optometry qualification"]
  },
  {
    id: "lisa-thompson",
    name: "Lisa Thompson",
    role: "Optical Manager",
    experience: "10 years in practice",
    specialty: "Frame services",
    image: "/assets/images/lisa-optical.jpg",
    bio: "Experience with frame options.",
    education: ["Optical qualification"]
  }
];

export const VALUES: Value[] = [
  {
    id: "patient-centered",
    title: "Patient Services",
    description: "Attention to patient concerns and vision requirements.",
    icon: "👁️"
  },
  {
    id: "excellence",
    title: "Professional Standards",
    description: "Adherence to optometry protocols and procedures.",
    icon: "⚕️"
  },
  {
    id: "communication",
    title: "Information Provision",
    description: "Explanation of eye health and service options.",
    icon: "📋"
  },
  {
    id: "community",
    title: "Community Services",
    description: "Participation in community eye health services.",
    icon: "🤝"
  }
];