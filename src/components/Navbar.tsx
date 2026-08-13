import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/company';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-2' : 'bg-white border-b border-slate-100 py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14">
          
          {/* Company Official Logo Brand */}
          <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <img
              src="/logo-transparent.png"
              alt="Archway Construction Logo"
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105 shrink-0"
            />
            <div className="flex flex-col justify-center">
              <span className="font-black text-sm sm:text-base xl:text-lg tracking-wider text-slate-950 uppercase group-hover:text-blue-900 transition-colors leading-tight">
                ARCHWAY <span className="text-amber-600">CONSTRUCTION</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest text-amber-700 font-bold uppercase -mt-0.5">
                Civil & Building Construction
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 mx-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] xl:text-xs font-extrabold text-slate-700 hover:text-amber-600 transition-colors tracking-wider uppercase whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneNumber.replace(/\s+/g, '')}`}
              className="hidden md:flex px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:text-amber-600 hover:border-amber-500 transition-colors text-xs font-bold items-center gap-1.5 whitespace-nowrap"
              title="Call Us Directly"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>{COMPANY_INFO.displayWhatsappNumber}</span>
            </a>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.HERO_PRIMARY)}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-gradient hover:opacity-95 text-white font-black text-xs uppercase tracking-wider px-3.5 py-2.5 rounded-lg shadow-sm flex items-center gap-1.5 transition-all hover:scale-105 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 fill-white shrink-0" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.HERO_PRIMARY)}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-gradient text-white p-2 rounded-lg sm:hidden shadow-sm"
              aria-label="WhatsApp Chat"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 hover:text-amber-600 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[64px] sm:top-[72px] bg-white border-b border-slate-200 p-5 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[calc(100vh-80px)] overflow-y-auto z-50">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-black text-slate-800 hover:text-amber-600 py-2.5 border-b border-slate-100 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.HERO_PRIMARY)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full whatsapp-gradient text-white font-extrabold text-xs uppercase tracking-wider text-center py-3.5 rounded-lg shadow-md flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp (+91 86986 57784)</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneNumber.replace(/\s+/g, '')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-slate-100 border border-slate-200 text-slate-800 font-extrabold text-xs uppercase tracking-wider text-center py-3.5 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-200"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span>Call Us: {COMPANY_INFO.displayWhatsappNumber}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
