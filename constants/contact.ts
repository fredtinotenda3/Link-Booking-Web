// constants/contact.ts - CORRECTED VERSION

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
    description: "Contact information for appointments, questions, or emergency services."
  },
  
  contactInfo: [
    {
      id: "phone",
      title: "Phone Information",
      details: "Contact: +263 123 456 789\nEmergency: +263 77 340 7464",
      icon: "/assets/icons/phone.svg",
      action: { type: "tel", value: "+263123456789" }
    },
    {
      id: "email",
      title: "Email Information",
      details: "General: info@linkopticians.co.zw\nAppointments: appointments@linkopticians.co.zw",
      icon: "/assets/icons/email.svg",
      action: { type: "mailto", value: "info@linkopticians.co.zw" }
    },
    {
      id: "hours",
      title: "Hours Information",
      details: "Monday-Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 1:00 PM\nSunday: Emergency services",
      icon: "/assets/icons/clock.svg"
    }
  ],
  
  map: {
    title: "Main Clinic Location",
    address: "Shop 15 & 16 Robinson House, Cnr Angwa / K.Nkrumah, Harare, Zimbabwe",
    placeholder: "Location information available",
    directionsUrl: "https://maps.google.com"
  },
  
  phone: {
    main: "+263 123 456 789",
    emergency: "+263 77 340 7464"
  },
  
  emergency: {
    title: "Emergency Eye Services",
    subtitle: "For eye injuries, sudden vision changes, or severe eye pain",
    appointmentReason: "Emergency eye consultation"
  },
  
  footer: {
    tagline: "Emergency services available"
  }
};

export const FAQ_DATA: FAQ[] = [
  {
    id: "appointment",
    question: "How do I schedule an appointment?",
    answer: "Appointments can be scheduled online through our website, by phone, or by visiting clinic locations during operating hours.",
    category: "Appointments"
  },
  {
    id: "emergency",
    question: "What services are available for emergencies?",
    answer: "Emergency eye services are available for eye injuries, sudden vision loss, chemical exposure, severe eye pain, or visual disturbances.",
    category: "Emergency"
  },
  {
    id: "insurance",
    question: "What payment options are available?",
    answer: "Medical aid coverage information and cash payment options are available. Please bring insurance information to appointments.",
    category: "Payment"
  },
  {
    id: "location",
    question: "Where are your clinics located?",
    answer: "Clinic locations are in Harare, Chipinge, and Chiredzi. Mobile unit services are also available.",
    category: "Locations"
  },
  {
    id: "hours",
    question: "What are your operating hours?",
    answer: "Operating hours vary by location. Most clinics operate Monday-Friday 8:00 AM - 6:00 PM, with Saturday hours available.",
    category: "Hours"
  }
];

export const CONTACT_FORM_SUBJECTS = [
  { value: "appointment", label: "Appointment Information" },
  { value: "general", label: "General Information" },
  { value: "billing", label: "Payment Information" },
  { value: "emergency", label: "Emergency Information" },
  { value: "feedback", label: "Service Information" }
];

export const APPOINTMENT_TYPES = [
  { value: "routine", label: "Routine Examination" },
  { value: "contact-lens", label: "Contact Lens Services" },
  { value: "emergency", label: "Emergency Services" },
  { value: "follow-up", label: "Follow-up Appointment" },
  { value: "specialized", label: "Specialized Consultation" }
];