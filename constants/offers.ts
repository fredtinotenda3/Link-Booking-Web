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
  { id: 'all', label: 'All Offers', icon: '🎯' },
  { id: 'seasonal', label: 'Seasonal', icon: '🌦️' },
  { id: 'health', label: 'Health Screening', icon: '🏥' },
  { id: 'community', label: 'Community', icon: '🤝' },
  { id: 'product', label: 'Products', icon: '👓' }
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