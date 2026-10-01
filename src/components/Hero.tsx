import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, CheckCircle2, Phone } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/company';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 bg-gradient-to-b from-slate-100 via-white to-slate-50 overflow-hidden border-b border-slate-200">
      
      {/* Soft Background Architectural Image Accent */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1920&auto=format&fit=crop"
          alt="Archway Construction Site Background"
          className="w-full h-full object-cover filter grayscale"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Prominent Logo Display */}
        <div className="mb-5 p-3 sm:p-4 rounded-2xl bg-white shadow-xl shadow-slate-200/60 border border-slate-200/80 inline-flex items-center justify-center">
          <img
            src="/logo.png"
            alt="Archway Construction Official Logo"
            className="h-16 sm:h-20 md:h-24 w-auto object-contain"
          />
        </div>

        {/* Founder & Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold tracking-wide mb-4 uppercase shadow-sm">
          <ShieldCheck className="w-4 h-4 text-amber-600" />
          <span>Expert Civil & Building Construction Team</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 uppercase leading-[1.1] mb-4 max-w-4xl">
          BUILDING SPACES. <br className="hidden sm:inline" />
          <span className="navy-gradient-text">CREATING TOMORROW.</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed mb-7 font-medium">
          {COMPANY_INFO.subtagline}
        </p>

        {/* Primary & Secondary WhatsApp CTAs */}
        <div className="w-full max-w-md sm:max-w-xl flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-5">
          
          {/* Primary CTA */}
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.HERO_PRIMARY)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto whatsapp-gradient hover:opacity-95 text-white font-black text-sm uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2.5 transition-all hover:scale-105 group"
          >
            <MessageSquare className="w-4 h-4 fill-white group-hover:rotate-12 transition-transform" />
            <span>GET A FREE CONSULTATION</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary CTA */}
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.HERO_SECONDARY)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-extrabold text-sm uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-sm flex items-center justify-center gap-2.5 transition-all hover:border-amber-500"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>CHAT ON WHATSAPP</span>
          </a>
        </div>

        {/* Small Trust Statement & Direct Number */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 text-xs sm:text-sm text-slate-600 font-bold">
          <span className="flex items-center gap-1.5 text-emerald-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
            Discuss your project directly with Archway Construction
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-800">
            <Phone className="w-4 h-4 text-amber-600" />
            {COMPANY_INFO.displayWhatsappNumber}
          </span>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mt-10 w-full max-w-4xl pt-6 border-t border-slate-200">
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
            <span className="block text-slate-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-0.5">Residential</span>
            <span className="text-slate-500 text-xs font-semibold">Custom Home Construction</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
            <span className="block text-slate-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-0.5">Commercial</span>
            <span className="text-slate-500 text-xs font-semibold">Office & Commercial Spaces</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
            <span className="block text-slate-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-0.5">Civil Works</span>
            <span className="text-slate-500 text-xs font-semibold">Structural Engineering</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
            <span className="block text-slate-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-0.5">Direct Chat</span>
            <span className="text-slate-500 text-xs font-semibold">{COMPANY_INFO.displayWhatsappNumber}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
