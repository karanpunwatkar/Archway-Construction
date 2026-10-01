import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { FAQS, getWhatsAppUrl, COMPANY_INFO } from '../config/company';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-14 lg:py-20 bg-slate-50 relative border-b border-slate-200 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold text-slate-950 uppercase tracking-tight leading-tight mb-3">
            FREQUENTLY ASKED <span className="navy-gradient-text">QUESTIONS</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Clear answers regarding Archway Construction services, consultations, and direct communication.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-amber-600 transition-colors uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-500 group-hover:text-amber-600 transition-transform ${
                    isOpen ? 'rotate-180 border-amber-300 text-amber-700 bg-amber-50' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 font-medium animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom Callout */}
        <div className="mt-8 text-center p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-slate-700 text-xs sm:text-sm font-bold">Have a specific question not listed here?</span>
          <a
            href={getWhatsAppUrl("Hello Archway Construction, I have a question about your services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-gradient text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform shadow-sm"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Ask on WhatsApp ({COMPANY_INFO.displayWhatsappNumber})</span>
          </a>
        </div>

      </div>
    </section>
  );
};
