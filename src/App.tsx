import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomeTab } from './components/HomeTab';
import { ServicesTab } from './components/ServicesTab';
import { ProjectsTab } from './components/ProjectsTab';
import { ContactTab } from './components/ContactTab';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { StickyMobileCTA } from './components/StickyMobileCTA';

export type TabId = 'home' | 'services' | 'projects' | 'contact';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('home');

  return (
    <div className="h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased overflow-hidden selection:bg-amber-500 selection:text-slate-950">
      {/* Tab Navigation Bar */}
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab Content — fills remaining viewport height, internal scroll only */}
      <main className="flex-1 overflow-hidden relative">
        <div className={activeTab === 'home' ? 'block h-full' : 'hidden'}>
          <HomeTab onTabChange={setActiveTab} />
        </div>
        <div className={activeTab === 'services' ? 'block h-full' : 'hidden'}>
          <ServicesTab />
        </div>
        <div className={activeTab === 'projects' ? 'block h-full' : 'hidden'}>
          <ProjectsTab />
        </div>
        <div className={activeTab === 'contact' ? 'block h-full' : 'hidden'}>
          <ContactTab />
        </div>
      </main>

      {/* Floating Overlays */}
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </div>
  );
};

export default App;
