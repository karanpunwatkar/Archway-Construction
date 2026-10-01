import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  MessageCircle, 
  Clock, 
  Users, 
  Wrench, 
  Smartphone, 
  ArrowRight,
  Workflow,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { PROCESS_STEPS, WHY_CHOOSE_US, getWhatsAppUrl, WHATSAPP_MESSAGES, COMPANY_INFO } from '../config/company';

export const ProcessAndTrust: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'process' | 'trust'>('process');

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#why-us') {
        setActiveTab('trust');
      } else if (window.location.hash === '#process') {
        setActiveTab('process');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const getTrustIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      case 'MessageCircle': return <MessageCircle className="w-5 h-5 text-amber-600" />;
      case 'Clock': return <Clock className="w-5 h-5 text-amber-600" />;
      case 'Users': return <Users className="w-5 h-5 text-amber-600" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-amber-600" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-amber-600" />;
      default: return <ShieldCheck className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="process" className="py-14 lg:py-20 bg-white relative border-b border-slate-200 scroll-mt-16">
      {/* Invisible anchor target for #why-us */}
      <div id="why-us" className="absolute -top-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Execution & Reliability</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold text-slate-950 uppercase tracking-tight leading-tight mb-3">
            CONSTRUCTION PROCESS & <span className="navy-gradient-text">WHY CHOOSE US</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            A transparent 4-step execution workflow backed by uncompromising commitments to structural durability, client communication, and site safety.
          </p>
        </div>

        {/* View Toggle Switcher */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab('process')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all ${
                activeTab === 'process'
                  ? 'navy-gradient-bg text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Workflow className="w-4 h-4" />
              <span>4-Step Construction Process</span>
            </button>

            <button
              onClick={() => setActiveTab('trust')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all ${
                activeTab === 'trust'
                  ? 'navy-gradient-bg text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Why Choose Us (6 Core Strengths)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: 4-Step Process */}
        {activeTab === 'process' && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
              {PROCESS_STEPS.map((step, idx) => (
                <div
                  key={step.step}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-amber-500/50 shadow-sm hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-slate-300 group-hover:text-amber-600 transition-colors mb-3 font-mono">
                      {step.step}
                    </div>

                    <h3 className="text-base sm:text-lg font-extrabold text-slate-950 uppercase tracking-wide mb-2 group-hover:text-amber-600 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>

                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-20 text-slate-300 pointer-events-none">
                      <ArrowRight className="w-5 h-5 text-amber-500/60" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Process CTAs */}
            <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.HERO_SECONDARY)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 whatsapp-gradient text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md hover:scale-105 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>START A PROJECT CONVERSATION ({COMPANY_INFO.displayWhatsappNumber})</span>
              </a>

              <button
                onClick={() => setActiveTab('trust')}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-amber-600 bg-slate-50 border border-slate-200 px-5 py-3 rounded-xl shadow-sm hover:border-amber-400"
              >
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Learn Why Clients Choose Archway →</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: Why Choose Us (6 Trust Points) */}
        {activeTab === 'trust' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {WHY_CHOOSE_US.map((point) => (
                <div
                  key={point.id}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-500/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-50 transition-all">
                    {getTrustIcon(point.iconName)}
                  </div>

                  <h3 className="text-base font-extrabold text-slate-950 uppercase tracking-wide mb-2 group-hover:text-amber-600 transition-colors">
                    {point.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust CTAs */}
            <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.HERO_SECONDARY)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 whatsapp-gradient text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md hover:scale-105 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>CONNECT DIRECTLY ON WHATSAPP ({COMPANY_INFO.displayWhatsappNumber})</span>
              </a>

              <button
                onClick={() => setActiveTab('process')}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-amber-600 bg-slate-50 border border-slate-200 px-5 py-3 rounded-xl shadow-sm hover:border-amber-400"
              >
                <Workflow className="w-4 h-4 text-amber-600" />
                <span>Review 4-Step Execution Process →</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
