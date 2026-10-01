import React, { useState } from 'react';
import { Menu, X, MessageSquare, Phone, Home, Wrench, Layers, Mail } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/company';
import { TabId } from '../App';

const TAB_LINKS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: 'home',     label: 'Home',     icon: <Home className="w-3.5 h-3.5" /> },
  { id: 'services', label: 'Services', icon: <Wrench className="w-3.5 h-3.5" /> },
  { id: 'projects', label: 'Projects', icon: <Layers className="w-3.5 h-3.5" /> },
  { id: 'contact',  label: 'Contact',  icon: <Mail className="w-3.5 h-3.5" /> },
];

interface NavbarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleTab = (id: TabId) => {
    onTabChange(id);
    setMobileOpen(false);
  };

  return (
    <header className="shrink-0 bg-white border-b border-slate-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo + Brand */}
          <button
            onClick={() => handleTab('home')}
            className="flex items-center gap-2.5 group shrink-0"
          >
            <img
              src="/logo-transparent.png"
              alt="Archway Construction Logo"
              className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col justify-center leading-tight">
              <span className="font-black text-sm sm:text-base tracking-wider text-slate-950 uppercase group-hover:text-blue-900 transition-colors">
                ARCHWAY <span className="text-amber-600">CONSTRUCTION</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest text-amber-700 font-bold uppercase -mt-0.5">
                Civil & Building Solutions
              </span>
            </div>
          </button>

          {/* Desktop Tab Pills */}
          <nav className="hidden md:flex items-center gap-1">
            {TAB_LINKS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTab(tab.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'navy-gradient-bg text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneNumber.replace(/\s+/g, '')}`}
              className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:text-amber-600 hover:border-amber-400 text-xs font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              {COMPANY_INFO.displayWhatsappNumber}
            </a>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.HERO_PRIMARY)}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-gradient text-white font-black text-xs uppercase tracking-wider px-3.5 py-2.5 rounded-lg shadow-sm flex items-center gap-1.5 hover:scale-105 transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              WhatsApp
            </a>
          </div>

          {/* Mobile: WhatsApp icon + hamburger */}
          <div className="flex items-center gap-2 md:hidden shrink-0">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.HERO_PRIMARY)}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-gradient text-white p-2 rounded-lg shadow-sm sm:hidden"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 hover:text-amber-600"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pb-4 pt-2 shadow-lg">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {TAB_LINKS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTab(tab.id)}
                  className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'navy-gradient-bg text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              );
            })}
          </div>
          <div className="flex gap-2">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.HERO_PRIMARY)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 whatsapp-gradient text-white font-extrabold text-xs uppercase tracking-wider text-center py-2.5 rounded-xl flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              WhatsApp Chat
            </a>
            <a
              href={`tel:${COMPANY_INFO.phoneNumber.replace(/\s+/g, '')}`}
              className="flex-1 bg-slate-100 border border-slate-200 text-slate-800 font-extrabold text-xs uppercase tracking-wider text-center py-2.5 rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              Call Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
