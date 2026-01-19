// This file should only contain contact-related constants
// Remove the ABOUT_DATA, TEAM_MEMBERS, VALUES from here
// They should only exist in constants/about.ts

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
    title: "Contact Link Opticians",
    description: "Get in touch with our team for appointments, questions, or emergency eye care services."
  },
  
  contactInfo: [
    {
      id: "phone",
      title: "Phone",
      details: "Main: +263 123 456 789\nEmergency: +263 987 654 321",
      icon: "/assets/icons/phone.svg",
      action: { type: "tel", value: "+263123456789" }
    },
    {
      id: "email",
      title: "Email",
      details: "info@linkopticians.co.zw\nappointments@linkopticians.co.zw",
      icon: "/assets/icons/email.svg",
      action: { type: "mailto", value: "info@linkopticians.co.zw" }
    },
    {
      id: "hours",
      title: "Operating Hours",
      details: "Mon-Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 1:00 PM\nSun: Emergency Only",
      icon: "/assets/icons/clock.svg"
    }
  ],
  
  map: {
    title: "Main Clinic Location",
    address: "123 Eye Care Street, Harare, Zimbabwe",
    placeholder: "Interactive map showing clinic location",
    directionsUrl: "https://maps.google.com"
  },
  
  phone: {
    main: "+263 123 456 789",
    emergency: "+263 987 654 321"
  },
  
  emergency: {
    title: "24/7 Emergency Eye Care",
    subtitle: "For eye injuries, sudden vision loss, or severe eye pain",
    appointmentReason: "Emergency eye consultation"
  },
  
  footer: {
    tagline: "24/7 Emergency Care Available"
  }
};

export const FAQ_DATA: FAQ[] = [
  {
    id: "appointment",
    question: "How do I book an appointment?",
    answer: "You can book online through our website, call us directly, or visit any of our clinic locations during operating hours.",
    category: "Appointments"
  },
  {
    id: "emergency",
    question: "What constitutes an eye emergency?",
    answer: "Sudden vision loss, eye injuries, chemical exposure, severe eye pain, or seeing flashes/floaters require immediate attention.",
    category: "Emergency"
  },
  {
    id: "insurance",
    question: "Do you accept medical insurance?",
    answer: "Yes, we accept most major insurance providers. Please bring your insurance card and ID to your appointment.",
    category: "Billing"
  }
];

export const CONTACT_FORM_SUBJECTS = [
  { value: "appointment", label: "Book/Cancel Appointment" },
  { value: "general", label: "General Inquiry" },
  { value: "billing", label: "Billing Question" },
  { value: "emergency", label: "Emergency Care" },
  { value: "feedback", label: "Feedback/Suggestion" }
];

export const APPOINTMENT_TYPES = [
  { value: "routine", label: "Routine Eye Exam" },
  { value: "contact-lens", label: "Contact Lens Fitting" },
  { value: "emergency", label: "Emergency Visit" },
  { value: "follow-up", label: "Follow-up Appointment" },
  { value: "specialized", label: "Specialized Consultation" }
];