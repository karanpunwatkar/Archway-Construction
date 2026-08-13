export interface CompanyInfo {
  name: string;
  founder: string;
  tagline: string;
  subtagline: string;
  whatsappNumber: string; // Stored without + symbol for wa.me link generation (e.g., '919876543210')
  displayWhatsappNumber: string; // Formatted display (e.g., '+91 98765 43210')
  phoneNumber: string;
  email: string;
  address: string;
  location: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    linkedin: string;
  };
  copyrightYear: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  whatsappMessage: string;
}

export interface TrustPoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Renovation' | 'Civil Works';
  location: string;
  description: string;
  imageUrl: string;
  whatsappMessage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Exterior' | 'Interior' | 'Structural' | 'Finishing' | 'Site Work';
  imageUrl: string;
  caption: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
