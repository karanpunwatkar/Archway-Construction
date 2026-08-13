import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/company';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2">
      
      {/* Tooltip */}
      {showTooltip && (
        <div className="relative bg-white border border-emerald-300 text-slate-800 text-xs py-2.5 px-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce max-w-[250px]">
          <div>
            <span className="font-extrabold text-emerald-700 block text-[11px]">Need a construction quote?</span>
            <span className="text-[11px] text-slate-600 font-medium">Chat with Founder Suraj Badke ({COMPANY_INFO.displayWhatsappNumber})</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-700 shrink-0"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppUrl(WHATSAPP_MESSAGES.HERO_SECONDARY)}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-gradient text-white rounded-full p-3.5 sm:px-5 sm:py-3.5 shadow-2xl shadow-emerald-600/40 flex items-center gap-3 animate-pulse-subtle hover:scale-105 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 sm:w-5 sm:h-5 fill-white shrink-0" />
        <span className="hidden sm:inline font-extrabold text-xs uppercase tracking-wider">
          Chat With Us
        </span>
      </a>

    </div>
  );
};
