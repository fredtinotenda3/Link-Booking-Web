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