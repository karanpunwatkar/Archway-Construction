import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/company';

const NAV_LINKS = [
  { name: 'Home', href: '#hero', id: 'hero' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Services', href: '#services', id: 'services' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Process & Trust', href: '#process', id: 'process' },
  { name: 'FAQ', href: '#faq', id: 'faq' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll offset
      const sections = NAV_LINKS.map(l => document.getElementById(l.id));
      const scrollPos = window.scrollY + 130;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-2' : 'bg-white border-b border-slate-100 py-2.5 sm:py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14">
          
          {/* Company Official Logo Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
          >
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
                Civil & Building Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Active State */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 mx-4">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 text-xs font-extrabold tracking-wider uppercase transition-colors whitespace-nowrap ${
                    isActive ? 'text-amber-600' : 'text-slate-700 hover:text-amber-600'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneNumber.replace(/\s+/g, '')}`}
              className="hidden xl:flex px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:text-amber-600 hover:border-amber-500 transition-colors text-xs font-bold items-center gap-1.5 whitespace-nowrap"
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
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bg-white border-b border-slate-200 p-5 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[calc(100vh-70px)] overflow-y-auto z-50">
          <div className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-black py-2.5 px-3 rounded-lg transition-colors uppercase tracking-wider flex items-center justify-between ${
                    isActive
                      ? 'bg-amber-50 text-amber-700 border-l-4 border-amber-600 font-black'
                      : 'text-slate-800 hover:text-amber-600 hover:bg-slate-50 border-b border-slate-100'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-amber-600" />}
                </a>
              );
            })}
            
            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.HERO_PRIMARY)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full whatsapp-gradient text-white font-extrabold text-xs uppercase tracking-wider text-center py-3 rounded-lg shadow-md flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp ({COMPANY_INFO.displayWhatsappNumber})</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneNumber.replace(/\s+/g, '')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-slate-100 border border-slate-200 text-slate-800 font-extrabold text-xs uppercase tracking-wider text-center py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-200"
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
