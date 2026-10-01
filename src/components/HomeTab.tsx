import React from 'react';
import { MessageSquare, Phone, ArrowRight, ShieldCheck, CheckCircle2, Home, Building2, Layers, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/company';
import { TabId } from '../App';

interface HomeTabProps {
  onTabChange: (tab: TabId) => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({ onTabChange }) => {
  return (
    <div className="h-full overflow-y-auto">
      {/* Hero */}
      <div className="relative bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 overflow-hidden">
        {/* Faint bg image */}
        <div className="absolute inset-0 z-0 opacity-8 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1920&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover filter grayscale"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 flex flex-col items-center text-center">

          {/* Logo */}
          <div className="mb-4 p-3 rounded-2xl bg-white shadow-lg border border-slate-200/80 inline-flex items-center justify-center">
            <img src="/logo.png" alt="Archway Construction" className="h-14 sm:h-18 w-auto object-contain" />
          </div>

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold tracking-wide mb-3 uppercase shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            Expert Civil & Building Construction Team
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 uppercase leading-tight mb-3 max-w-3xl">
            BUILDING SPACES.{' '}
            <span className="navy-gradient-text">CREATING TOMORROW.</span>
          </h1>

          {/* Sub */}
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed mb-6 font-medium">
            {COMPANY_INFO.subtagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4 w-full max-w-lg">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.HERO_PRIMARY)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto whatsapp-gradient text-white font-black text-sm uppercase tracking-wider px-6 py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:scale-105 transition-all group"
            >
              <MessageSquare className="w-4 h-4 fill-white group-hover:rotate-12 transition-transform" />
              Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`tel:${COMPANY_INFO.phoneNumber.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto bg-white border border-slate-300 text-slate-900 font-extrabold text-sm uppercase tracking-wider px-6 py-3 rounded-xl shadow-sm flex items-center justify-center gap-2 hover:border-amber-500 transition-all"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              {COMPANY_INFO.displayWhatsappNumber}
            </a>
          </div>

          <p className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Direct WhatsApp chat with Archway Construction team
          </p>
        </div>
      </div>

      {/* Quick-Access Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {[
            { icon: <Home className="w-5 h-5 text-amber-600" />, title: 'Residential', sub: 'Home & Villa Construction', tab: 'services' as TabId },
            { icon: <Building2 className="w-5 h-5 text-amber-600" />, title: 'Commercial', sub: 'Office & Retail Spaces', tab: 'services' as TabId },
            { icon: <Layers className="w-5 h-5 text-amber-600" />, title: 'Projects', sub: 'View Our Work', tab: 'projects' as TabId },
            { icon: <MessageCircle className="w-5 h-5 text-amber-600" />, title: 'Contact', sub: 'Get a Quote Today', tab: 'contact' as TabId },
          ].map((card) => (
            <button
              key={card.title}
              onClick={() => onTabChange(card.tab)}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-md transition-all text-left group"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <span className="block text-xs font-extrabold text-slate-900 uppercase tracking-wide group-hover:text-amber-600 transition-colors">{card.title}</span>
              <span className="block text-[11px] text-slate-500 font-medium mt-0.5">{card.sub}</span>
            </button>
          ))}
        </div>

        {/* About strip */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col lg:flex-row items-start lg:items-center gap-5">
          <div className="shrink-0 hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
              alt="Construction site"
              className="w-32 h-24 object-cover rounded-xl border border-slate-200"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-extrabold text-amber-700 uppercase tracking-widest">About Archway</span>
            </div>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-950 uppercase mb-1.5">
              BUILT ON TRUST. <span className="navy-gradient-text">DRIVEN BY QUALITY.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Archway Construction is driven by an experienced team of civil engineers, project managers, and skilled site supervisors delivering dependable construction with emphasis on structural quality, transparency, and customer satisfaction.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-2">
            {[
              { label: 'Quality Workmanship' },
              { label: 'Complete Transparency' },
              { label: 'On-Time Delivery' },
            ].map((pt) => (
              <div key={pt.label} className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                {pt.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slim footer */}
      <div className="border-t border-slate-200 bg-white py-3 px-4 text-center text-xs text-slate-500 font-medium pb-20 sm:pb-3">
        © {COMPANY_INFO.copyrightYear} {COMPANY_INFO.name} · Maharashtra, India ·{' '}
        <a href={`mailto:${COMPANY_INFO.email}`} className="text-amber-600 hover:underline">{COMPANY_INFO.email}</a>
      </div>
    </div>
  );
};
