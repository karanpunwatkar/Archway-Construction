import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/company';

export const StickyMobileCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-2xl flex items-center gap-3">
      {/* Phone Call Button */}
      <a
        href={`tel:${COMPANY_INFO.phoneNumber.replace(/\s+/g, '')}`}
        className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-amber-600 shrink-0 hover:bg-slate-200"
        aria-label="Call Archway Construction"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Action Button */}
      <a
        href={getWhatsAppUrl(WHATSAPP_MESSAGES.HERO_PRIMARY)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full whatsapp-gradient text-white font-black text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
      >
        <MessageSquare className="w-5 h-5 fill-white" />
        <span>Chat on WhatsApp (+91 86009 99829)</span>
      </a>
    </div>
  );
};
