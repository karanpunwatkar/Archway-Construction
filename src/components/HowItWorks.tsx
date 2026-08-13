import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/company';

export const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Seamless Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 uppercase tracking-tight leading-tight mb-4">
            HOW IT <span className="navy-gradient-text">WORKS</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            A straightforward 4-step process from initial enquiry to final site completion.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-amber-500/50 shadow-md hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl font-black text-slate-300 group-hover:text-amber-600 transition-colors mb-4 font-mono">
                  {step.step}
                </div>

                <h3 className="text-xl font-extrabold text-slate-950 uppercase tracking-wide mb-3 group-hover:text-amber-600 transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>

              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-20 text-slate-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}

        </div>

        {/* Process CTA */}
        <div className="mt-16 text-center">
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.HERO_SECONDARY)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 whatsapp-gradient text-white font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            <span>START A CONVERSATION (+91 86986 57784)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
