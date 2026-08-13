import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Projects } from './components/Projects';
import { Gallery } from './components/Gallery';
import { HowItWorks } from './components/HowItWorks';
import { LeadGenBanner } from './components/LeadGenBanner';
import { EnquiryForm } from './components/EnquiryForm';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { StickyMobileCTA } from './components/StickyMobileCTA';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Projects />
        <Gallery />
        <HowItWorks />
        <LeadGenBanner />
        <EnquiryForm />
        <FAQ />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Conversion Overlays */}
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </div>
  );
};

export default App;
