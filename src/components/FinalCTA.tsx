import React from 'react';
import { MessageSquare, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/company';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-100 relative overflow-hidden border-b border-slate-200">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="bg-white p-10 sm:p-16 rounded-3xl border border-slate-200 shadow-2xl">
          
          <h2 className="text-4xl sm:text-6xl font-black text-slate-950 uppercase tracking-tight leading-tight mb-6">
            LET'S BUILD YOUR <br className="hidden sm:inline" />
            <span className="navy-gradient-text">NEXT PROJECT.</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-medium">
            Have a project in mind? Start a direct WhatsApp conversation with Archway Construction today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.FINAL_CTA)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto whatsapp-gradient text-white font-extrabold text-sm sm:text-base uppercase tracking-wider px-8 py-4.5 rounded-xl shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-3 transition-all hover:scale-105 group"
            >
              <MessageSquare className="w-5 h-5 fill-white group-hover:rotate-12 transition-transform" />
              <span>GET STARTED ON WHATSAPP</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={`tel:${COMPANY_INFO.phoneNumber.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto bg-slate-100 border border-slate-300 hover:bg-slate-200 text-slate-900 font-extrabold text-sm sm:text-base uppercase tracking-wider px-8 py-4.5 rounded-xl flex items-center justify-center gap-3 transition-colors"
            >
              <Phone className="w-5 h-5 text-amber-600" />
              <span>CALL US: {COMPANY_INFO.displayWhatsappNumber}</span>
            </a>
          </div>

          <p className="text-xs text-slate-500 mt-6 font-bold uppercase tracking-wider">
            Archway Construction • Civil & Building Solutions
          </p>

        </div>

      </div>
    </section>
  );
};
