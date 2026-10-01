import { 
  CompanyInfo, 
  ServiceItem, 
  TrustPoint, 
  ProjectItem, 
  GalleryItem, 
  ProcessStep, 
  FAQItem 
} from '../types';

/**
 * =======================================================================
 * CENTRALIZED ARCHWAY CONSTRUCTION CONFIGURATION
 * =======================================================================
 * To update the WhatsApp number or phone number site-wide, simply edit
 * the variables below. Every WhatsApp CTA, floating button, form action,
 * and footer link will update automatically.
 * =======================================================================
 */

export const COMPANY_INFO: CompanyInfo = {
  name: "ARCHWAY CONSTRUCTION",
  founder: "Suraj Badke",
  tagline: "BUILDING STRONG FOUNDATIONS. CREATING BETTER SPACES.",
  subtagline: "A professional construction and finishing services company delivering reliable, quality-driven solutions for residential, commercial, and other construction projects.",
  
  // Real Editable WhatsApp Number (+91 86009 99829)
  whatsappNumber: "918600999829", 
  displayWhatsappNumber: "+91 86009 99829",
  
  phoneNumber: "+91 86009 99829",
  email: "contact@archwayconstruction.com",
  location: "Maharashtra, India",
  address: "Archway Construction Office, Maharashtra",
  
  socialLinks: {
    instagram: "https://instagram.com", // Official Instagram placeholder
    facebook: "https://facebook.com", // Official Facebook placeholder
    linkedin: "https://linkedin.com", // Official LinkedIn placeholder
    youtube: "https://youtube.com", // Official YouTube placeholder
    whatsapp: "https://wa.me/918600999829"
  },
  
  copyrightYear: 2026
};

/**
 * Utility helper to generate pre-filled WhatsApp click-to-chat links
 */
export const getWhatsAppUrl = (customMessage?: string): string => {
  const defaultMsg = `Hello ${COMPANY_INFO.name}, I am interested in your construction services.`;
  const textParam = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${textParam}`;
};

/**
 * Pre-filled context-aware WhatsApp messages
 */
export const WHATSAPP_MESSAGES = {
  HERO_PRIMARY: `Hello ${COMPANY_INFO.name}, I am interested in getting a free consultation for my construction project.`,
  HERO_SECONDARY: `Hello ${COMPANY_INFO.name}, I am interested in discussing a construction project.`,
  ABOUT_CTA: `Hello ${COMPANY_INFO.name}, I would like to discuss my project directly with your construction team.`,
  SERVICES_GENERAL: `Hello ${COMPANY_INFO.name}, I would like to enquire about your construction services.`,
  PROJECTS_GENERAL: `Hello ${COMPANY_INFO.name}, I saw your completed projects and would like to discuss a project.`,
  LEAD_GEN: `Hello ${COMPANY_INFO.name}, I have a construction project in mind and would like to chat.`,
  FINAL_CTA: `Hello ${COMPANY_INFO.name}, I am ready to get started on my next project.`
};

/**
 * Construction Services Grid
 */
export const SERVICES: ServiceItem[] = [
  {
    id: "rcc",
    title: "RCC Construction",
    description: "Reinforced Cement Concrete construction including foundations, columns, beams, slabs, and structural requirements — focused on strength, accuracy, and quality at every stage.",
    iconName: "Building",
    whatsappMessage: `Hello ${COMPANY_INFO.name}, I am interested in RCC construction services.`
  },
  {
    id: "brickwork",
    title: "Brick Work & Plastering",
    description: "Complete brick masonry and plastering services for residential and commercial projects — wall construction, internal and external plastering with focus on alignment and surface quality.",
    iconName: "Layers",
    whatsappMessage: `Hello ${COMPANY_INFO.name}, I am interested in brick work & plastering services.`
  },
  {
    id: "tiles",
    title: "Tiles & Flooring",
    description: "Tile installation for floors, walls, kitchens, bathrooms, and balconies — accurate measurement, level, alignment, and joint finishing for a clean, durable, and practical result.",
    iconName: "Home",
    whatsappMessage: `Hello ${COMPANY_INFO.name}, I am interested in tiles & flooring services.`
  },
  {
    id: "pop",
    title: "POP & False Ceiling",
    description: "POP and false ceiling solutions that enhance interiors — ceiling designs, partitions, decorative elements, and finishing according to the requirements of each space.",
    iconName: "Hammer",
    whatsappMessage: `Hello ${COMPANY_INFO.name}, I am interested in POP & false ceiling work.`
  },
  {
    id: "electrical",
    title: "Electrical Work",
    description: "Electrical installation and finishing for residential and commercial projects — wiring, switches, lighting points, electrical fittings, with systematic installation and neat routing.",
    iconName: "Building2",
    whatsappMessage: `Hello ${COMPANY_INFO.name}, I am interested in electrical work services.`
  },
  {
    id: "plumbing",
    title: "Plumbing Work",
    description: "Plumbing installation and finishing including water supply lines, drainage systems, bathroom and kitchen connections, sanitary fittings, and all plumbing requirements.",
    iconName: "MessageSquare",
    whatsappMessage: `Hello ${COMPANY_INFO.name}, I am interested in plumbing work services.`
  },
  {
    id: "finishing",
    title: "Complete Finishing Work",
    description: "Full-scope finishing activities — painting, waterproofing, flooring, sanitary fittings, electrical fittings, plumbing fixtures, doors, and all finishing requirements to complete your project.",
    iconName: "Layers",
    whatsappMessage: `Hello ${COMPANY_INFO.name}, I am interested in complete finishing work services.`
  }
];

/**
 * Why Choose Archway Construction Trust Points
 */
export const WHY_CHOOSE_US: TrustPoint[] = [
  {
    id: "workmanship",
    title: "QUALITY WORKMANSHIP",
    description: "Focused on workmanship, materials, detailing, and execution that meet the full requirements of every project.",
    iconName: "ShieldCheck"
  },
  {
    id: "execution",
    title: "EXPERIENCED SITE EXECUTION",
    description: "Systematic site execution with attention to sequencing, timelines, and practical construction delivery.",
    iconName: "Wrench"
  },
  {
    id: "materials",
    title: "RELIABLE MATERIALS",
    description: "Use of reliable materials and proven construction practices to ensure durability and structural integrity.",
    iconName: "Clock"
  },
  {
    id: "finishing",
    title: "ATTENTION TO FINISHING",
    description: "Careful attention to finishing and detailing from structural work through final handover of every project.",
    iconName: "ShieldCheck"
  },
  {
    id: "communication",
    title: "TRANSPARENT COMMUNICATION",
    description: "Clear, honest communication with clients throughout the project — no hidden surprises, no unclear commitments.",
    iconName: "MessageCircle"
  },
  {
    id: "services",
    title: "MULTIPLE SERVICES UNDER ONE ROOF",
    description: "RCC, brickwork, plastering, tiling, electrical, plumbing, and complete finishing — all under one construction team.",
    iconName: "Users"
  }
];

/**
 * Projects / Our Work Showcase
 */
export const PROJECTS: ProjectItem[] = [
  {
    id: "project-1",
    title: "Modern Residential Villa",
    category: "Residential",
    location: "Prime Location",
    description: "Contemporary multi-story residential structure featuring robust reinforced framing and elegant exterior detailing.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    whatsappMessage: `Hello ${COMPANY_INFO.name}, I saw your Modern Residential Villa project and would like to discuss a similar project.`
  },
  {
    id: "project-2",
    title: "Contemporary Commercial Complex",
    category: "Commercial",
    location: "Commercial Hub",
    description: "State-of-the-art commercial structure engineered for maximum spatial utility and architectural modernism.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    whatsappMessage: `Hello ${COMPANY_INFO.name}, I am interested in commercial space construction similar to your Contemporary Commercial project.`
  },
  {
    id: "project-3",
    title: "Residential Renovation & Upgrade",
    category: "Renovation",
    location: "Urban Neighborhood",
    description: "Full structural revitalization and interior layout renovation for an existing residential building.",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    whatsappMessage: `Hello ${COMPANY_INFO.name}, I would like to enquire about structural renovation for my existing property.`
  }
];

/**
 * Project Gallery Items
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Structural Concrete Framework",
    category: "Structural",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1000&auto=format&fit=crop",
    caption: "Heavy foundation and reinforced concrete slab execution on site."
  },
  {
    id: "g2",
    title: "Modern Building Exterior",
    category: "Exterior",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    caption: "Clean architectural facade finishing with modern composite paneling."
  },
  {
    id: "g3",
    title: "Premium Interior Finish Work",
    category: "Interior",
    imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop",
    caption: "High-end interior layout finishing and custom masonry details."
  },
  {
    id: "g4",
    title: "Active Construction Site Operations",
    category: "Site Work",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop",
    caption: "On-site quality monitoring and systematic construction execution."
  },
  {
    id: "g5",
    title: "Precision Steel Reinforcement",
    category: "Structural",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop",
    caption: "Structural steel grid layout prior to concrete casting."
  },
  {
    id: "g6",
    title: "Commercial Atrium & Facade",
    category: "Exterior",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    caption: "Glass curtain wall installation and structural elevation."
  }
];

/**
 * How It Works 4-Step Process
 */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "CONTACT US",
    description: "Tell us about your construction requirement via direct WhatsApp message or our quick enquiry form."
  },
  {
    step: "02",
    title: "DISCUSS YOUR PROJECT",
    description: "Discuss your project scope, budget, timeline expectations, and site specifications directly with our construction team."
  },
  {
    step: "03",
    title: "PLAN & PROPOSE",
    description: "We evaluate structural requirements, prepare a comprehensive proposal, and detail execution milestones."
  },
  {
    step: "04",
    title: "BUILD",
    description: "Move forward with site execution, structural building, continuous quality inspection, and timely delivery."
  }
];

/**
 * FAQ Items
 */
export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What types of construction projects do you undertake?",
    answer: "Archway Construction undertakes residential home construction, commercial office and retail buildings, civil structural work, and comprehensive building renovation projects."
  },
  {
    id: "faq-2",
    question: "Can I discuss my project directly on WhatsApp?",
    answer: "Yes! Every CTA on our website connects you directly to Archway Construction on WhatsApp. You can share project details, site locations, or drawings directly with our core engineering team."
  },
  {
    id: "faq-3",
    question: "Do you provide project consultation?",
    answer: "Yes, we offer project consultation to help clients understand structural requirements, material selection, cost estimation, and planning prior to commencing work."
  },
  {
    id: "faq-4",
    question: "Can I request a construction quotation?",
    answer: "Absolutely. Simply click any 'Get Free Consultation' or 'Chat on WhatsApp' button, or fill out our Quick Enquiry form to submit your requirements. We will prepare an accurate proposal based on your project parameters."
  },
  {
    id: "faq-5",
    question: "Do you handle residential and commercial projects?",
    answer: "Yes, Archway Construction handles both residential developments (villas, duplexes, multi-family units) and commercial developments (offices, shops, structures)."
  },
  {
    id: "faq-6",
    question: "How can I start a project discussion?",
    answer: "The fastest way is to click the floating WhatsApp button or the 'Get a Free Consultation' button on this site to start an instant chat session."
  }
];
