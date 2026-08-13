import React from 'react';
import { MessageSquare, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/company';

export const LeadGenBanner: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-900 to-slate-900 text-white relative overflow-hidden">
      
      {/* Decorative Architectural Accent Grid */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1600&auto=format&fit=crop"
          alt="Construction Site Background"
          className="w-full h-full object-cover filter saturate-50"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="bg-white/10 backdrop-blur-md p-8 sm:p-14 rounded-3xl border border-white/20 shadow-2xl">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Direct WhatsApp Lead Line</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
            HAVE A CONSTRUCTION PROJECT <span className="text-amber-400">IN MIND?</span>
          </h2>

          <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            Tell us what you're planning. Connect with Archway Construction directly on WhatsApp and discuss your project requirements with our engineering team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.LEAD_GEN)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto whatsapp-gradient text-white font-black text-sm sm:text-base uppercase tracking-wider px-8 py-5 rounded-2xl shadow-2xl flex items-center justify-center gap-3 transition-all hover:scale-105 group"
            >
              <MessageSquare className="w-6 h-6 fill-white group-hover:rotate-12 transition-transform" />
              <span>CHAT WITH ARCHWAY CONSTRUCTION ON WHATSAPP</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-300 mt-6 font-semibold">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Direct WhatsApp: {COMPANY_INFO.displayWhatsappNumber} • Instant Team Response</span>
          </div>

        </div>

      </div>
    </section>
  );
};
