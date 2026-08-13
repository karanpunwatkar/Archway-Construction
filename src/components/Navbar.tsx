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
    { name: 'How It Works', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md py-2.5 shadow-lg shadow-slate-200/50 border-b border-slate-200' : 'bg-white py-3.5 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Company Official Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              src="/logo-transparent.png"
              alt="Archway Construction Official Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-wider text-slate-900 uppercase group-hover:text-blue-900 transition-colors">
                ARCHWAY <span className="text-amber-600">CONSTRUCTION</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-500 font-semibold uppercase -mt-1">
                Founder: {COMPANY_INFO.founder}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-bold text-slate-700 hover:text-amber-600 transition-colors tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneNumber.replace(/\s+/g, '')}`}
              className="px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:text-amber-600 hover:border-amber-500 transition-colors text-xs font-bold flex items-center gap-1.5"
              title="Call Us Directly"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>{COMPANY_INFO.displayWhatsappNumber}</span>
            </a>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.HERO_PRIMARY)}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-gradient hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg shadow-md shadow-emerald-500/20 flex items-center gap-2 transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.HERO_PRIMARY)}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-gradient text-white p-2 rounded-lg sm:hidden shadow-md"
              aria-label="WhatsApp Chat"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 hover:text-amber-600 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-slate-200 p-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-slate-800 hover:text-amber-600 py-2 border-b border-slate-100 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-3 flex flex-col gap-3">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.HERO_PRIMARY)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full whatsapp-gradient text-white font-bold text-center py-3.5 rounded-lg shadow-md flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Chat on WhatsApp (+91 86986 57784)</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneNumber.replace(/\s+/g, '')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-slate-100 border border-slate-200 text-slate-800 font-bold text-center py-3.5 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-200"
              >
                <Phone className="w-5 h-5 text-amber-600" />
                <span>Call Us: {COMPANY_INFO.displayWhatsappNumber}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
