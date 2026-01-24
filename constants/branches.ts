// constants/branches.ts - CORRECTED VERSION

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
    name: 'Robinson House (Main Clinic)',
    type: 'clinic',
    address: 'Shop 15 & 16 Robinson House, Cnr Angwa/K.Nkrumah, Harare CBD',
    phone: '+263 242 700 000',
    email: 'robinson@linkopticians.co.zw',
    operatingHours: {
      weekdays: '8:00 AM - 6:00 PM',
      saturday: '9:00 AM - 1:00 PM',
      sunday: 'Closed',
      publicHolidays: 'Emergency services'
    },
    services: [
      'Eye examinations',
      'Contact lens services',
      'Pediatric services',
      'Emergency eye care',
      'Lens laboratory',
      'Frame services',
      'Sunglasses'
    ],
    specialties: [
      'Primary eye care',
      'Lens manufacturing',
      'Corporate services',
      'CBD services'
    ],
    doctors: ['Dr. Richard Maveneka', 'Dr. Taylor Mutaiwa'],
    facilities: [
      'Digital retinal imaging',
      'Optical coherence tomography',
      'Lens laboratory',
      'Frame gallery',
      'Parking available'
    ],
    parking: 'Street parking available, secure parking nearby',
    accessibility: ['Wheelchair accessible', 'Elevator available'],
    notes: 'Lens laboratory services available',
    mapUrl: 'https://maps.google.com/?q=Robinson+House+Angwa+Harare',
    image: '/assets/images/branches/robinson-house.png'
  },
  {
    id: 'kensington',
    name: 'Kensington Branch',
    type: 'clinic',
    address: 'Corner of Argyle & Prince Edward Street, Kensington, Harare',
    phone: '+263 242 700 001',
    email: 'kensington@linkopticians.co.zw',
    operatingHours: {
      weekdays: '8:30 AM - 5:30 PM',
      saturday: '9:00 AM - 1:00 PM',
      sunday: 'Closed',
      publicHolidays: 'By appointment'
    },
    services: [
      'Eye examinations',
      'Geriatric eye care',
      'Low vision services',
      'Frame services',
      'Contact lenses'
    ],
    specialties: [
      'Geriatric care',
      'Frame services',
      'Quiet environment',
      'Parking available'
    ],
    doctors: ['Dr. Emily Rodriguez'],
    facilities: [
      'Visual field analyzer',
      'Diagnostic equipment',
      'Frame gallery',
      'Consultation rooms'
    ],
    parking: 'Parking on premises',
    accessibility: ['Wheelchair accessible', 'Ramp access'],
    notes: 'Clinic location information',
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
      'Frame services',
      'Contact lens services',
      'Sunglasses',
      'Blue light protection',
      'Eye care services'
    ],
    specialties: [
      'Frame services',
      'Fashion consultation',
      'Weekend services'
    ],
    doctors: ['Dr. Sarah Chen', 'Lisa Thompson (Optical Manager)'],
    facilities: [
      'Frame gallery',
      'Eye care lounge',
      'Mall parking'
    ],
    parking: 'Secure mall parking',
    accessibility: ['Wheelchair accessible', 'Mall access'],
    notes: 'Weekend services available',
    mapUrl: 'https://maps.google.com/?q=Honey+Dew+Lifestyle+Centre+Greendale',
    image: '/assets/images/branches/honey-dew.png'
  },
  {
    id: 'chipinge',
    name: 'Chipinge Branch',
    type: 'clinic',
    address: '93 Moodie Street, Chipinge Town, Eastern Highlands',
    phone: '+263 267 222 333',
    email: 'chipinge@linkopticians.co.zw',
    operatingHours: {
      weekdays: '8:00 AM - 5:00 PM',
      saturday: '8:00 AM - 12:00 PM',
      sunday: 'Emergency services',
      publicHolidays: 'Closed'
    },
    services: [
      'Community eye care',
      'Agricultural worker eye health',
      'School screening services',
      'Eyewear services',
      'Mobile unit base'
    ],
    specialties: [
      'Community care',
      'Agricultural industry',
      'Border town services'
    ],
    doctors: ['Dr. Local Practitioner'],
    facilities: [
      'Diagnostic equipment',
      'Frame repair workshop',
      'Community room',
      'Generator backup'
    ],
    parking: 'Street parking available',
    accessibility: ['Ground floor access'],
    notes: 'Serving Chipinge district. Mobile unit base location.',
    mapUrl: 'https://maps.google.com/?q=Chipinge+Moodie+Street',
    image: '/assets/images/branches/chipinge.png'
  },
  {
    id: 'chiredzi',
    name: 'Chiredzi Branch',
    type: 'clinic',
    address: '361 Mopani Drive, Chiredzi CBD, Lowveld',
    phone: '+263 312 444 555',
    email: 'chiredzi@linkopticians.co.zw',
    operatingHours: {
      weekdays: '8:00 AM - 5:00 PM',
      saturday: '8:00 AM - 12:00 PM',
      sunday: 'Emergency services',
      publicHolidays: 'Closed'
    },
    services: [
      'Industrial eye safety',
      'Diabetes eye screening',
      'Sugar cane worker care',
      'Eyewear services',
      'Emergency repairs'
    ],
    specialties: [
      'Industrial eye care',
      'Agricultural worker health',
      'Diabetes management'
    ],
    doctors: ['Dr. Local Practitioner'],
    facilities: [
      'Industrial safety equipment',
      'Diabetes screening tools',
      'Repair workshop',
      'Air conditioning'
    ],
    parking: 'On-site parking available',
    accessibility: ['Ground floor access'],
    notes: 'Serving Tongaat Hulletts employees and community',
    mapUrl: 'https://maps.google.com/?q=Chiredzi+Mopani+Drive',
    image: '/assets/images/branches/chiredzi.png'
  }
];

export const MOBILE_UNIT_DATA = {
  title: 'Mobile Eye Care Unit',
  description: 'Mobile eye care unit services information.',
  services: [
    'Basic eye screening',
    'School vision testing',
    'Community health services',
    'Elderly vision care',
    'Remote area services'
  ],
  coverage: [
    'Chipinge rural districts',
    'Chiredzi areas',
    'School health services',
    'Corporate wellness services',
    'Community services'
  ],
  schedule: 'Mobile unit schedule information. Contact for service information.',
  contact: 'For mobile unit information: +263 77 340 7464',
  image: '/assets/images/branches/mobile-unit.png'
};

export const BRANCH_CATEGORIES = [
  { id: 'all', label: 'All Locations' },
  { id: 'harare', label: 'Harare Clinics' },
  { id: 'rural', label: 'Rural Branches' },
  { id: 'mobile', label: 'Mobile Services' }
];