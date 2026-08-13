# Archway Construction 🏗️

A modern, premium, conversion-focused marketing website built for **ARCHWAY CONSTRUCTION**, founded by **Suraj Badke**. Designed for maximum lead generation via a centralized WhatsApp integration system.

![Archway Construction Logo](./public/logo-transparent.png)

---

## 🚀 Primary Features

- **Centralized WhatsApp Lead System**: Every CTA, service inquiry, project quote, and quick form submission routes directly to WhatsApp (`+91 86986 57784`).
- **Single Source of Truth Configuration**: Configured in `src/config/company.ts`. Updating the `whatsappNumber` field updates all links across the entire application instantly.
- **Clean & Attractive Light Theme**: Designed with an architectural palette — pure white, soft slate neutrals, deep navy typography (`#0F172A`), warm amber accents (`#B45309`), and WhatsApp emerald green (`#25D366`).
- **Full Showcase Suite**:
  - Hero Section with Founder Badge
  - About Archway Construction & Founder Suraj Badke
  - 6 Core Construction Services with pre-filled WhatsApp enquiry templates
  - Why Choose Us Trust Cards
  - Project Portfolio & Interactive Fullscreen Gallery Lightbox
  - 4-Step Process Workflow
  - Quick Enquiry Form with WhatsApp Auto-Redirection
  - FAQ Accordion
  - Floating WhatsApp Widget & Mobile Sticky CTA Bar

---

## 🛠️ Technology Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + Custom Glassmorphism CSS Tokens
- **Icons**: Lucide React + Inline SVG Brand Icons
- **Fonts**: Google Fonts (`Outfit` & `Plus Jakarta Sans`)

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/karanpunwatkar/Archway-Construction.git
cd Archway-Construction
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

---

## 📲 Updating Contact Information

To update the WhatsApp number or contact details:
1. Open `src/config/company.ts`
2. Change `whatsappNumber: "918698657784"` to your desired phone number (with country code, no `+` or spaces).
3. Save the file. All CTAs across the entire website will automatically reflect the change.

---

## 👤 Company Details

- **Company Name**: Archway Construction
- **Founder**: Suraj Badke
- **WhatsApp Contact**: +91 86986 57784
- **Services**: Residential Construction, Commercial Construction, Building Construction, Renovation & Remodeling, Civil & Structural Work, Project Consultation.
