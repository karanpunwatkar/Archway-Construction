import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { ProcessAndTrust } from './components/ProcessAndTrust';
import { FAQ } from './components/FAQ';
import { EnquiryForm } from './components/EnquiryForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { StickyMobileCTA } from './components/StickyMobileCTA';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      {/* Navigation Header */}
      <Navbar />

      {/* Organized Sectional Main Content */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Projects />
        <ProcessAndTrust />
        <FAQ />
        <EnquiryForm />
      </main>

      {/* Footer & Social Media Channels */}
      <Footer />

      {/* Conversion Overlays */}
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </div>
  );
};

export default App;
