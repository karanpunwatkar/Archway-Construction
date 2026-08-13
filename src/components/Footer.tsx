import React from 'react';
import { MessageSquare, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../config/company';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 pt-16 pb-24 lg:pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* Brand Info Column with Logo */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-transparent.png"
                alt="Archway Construction Official Logo"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-wider text-slate-950 uppercase">
                  ARCHWAY <span className="text-amber-600">CONSTRUCTION</span>
                </span>
                <span className="text-[10px] tracking-widest text-amber-700 font-bold uppercase -mt-1">
                  Civil & Building Solutions
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium max-w-md">
              Reliable construction solutions for residential, commercial and development projects — built with quality, precision, transparency, and dedication to excellence.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={COMPANY_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:border-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={COMPANY_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:border-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href={COMPANY_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:border-amber-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-slate-950 font-extrabold text-sm uppercase tracking-wider mb-5">Navigation</h4>
            <ul className="space-y-3 text-xs sm:text-sm font-bold uppercase tracking-wide">
              <li><a href="#hero" className="hover:text-amber-600 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-600 transition-colors">About Archway</a></li>
              <li><a href="#services" className="hover:text-amber-600 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-amber-600 transition-colors">Projects</a></li>
              <li><a href="#gallery" className="hover:text-amber-600 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-amber-600 transition-colors">Quick Enquiry</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-slate-950 font-extrabold text-sm uppercase tracking-wider mb-5">Contact Us</h4>
            <ul className="space-y-4 text-xs sm:text-sm font-medium">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-emerald-700 hover:text-emerald-800 font-extrabold"
                >
                  <MessageSquare className="w-5 h-5 fill-emerald-600 text-emerald-600 shrink-0" />
                  <span>WhatsApp: {COMPANY_INFO.displayWhatsappNumber}</span>
                </a>
              </li>

              <li>
                <a
                  href={`tel:${COMPANY_INFO.phoneNumber.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 text-slate-800 hover:text-amber-600 font-bold"
                >
                  <Phone className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>Phone: {COMPANY_INFO.displayWhatsappNumber}</span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 hover:text-amber-600"
                >
                  <Mail className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>Email: {COMPANY_INFO.email}</span>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p>© {COMPANY_INFO.copyrightYear} {COMPANY_INFO.name}. All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors uppercase font-extrabold tracking-wider"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
