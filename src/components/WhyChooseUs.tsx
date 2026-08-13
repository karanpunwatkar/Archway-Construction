import React from 'react';
import { 
  ShieldCheck, 
  MessageCircle, 
  Clock, 
  Users, 
  Wrench, 
  Smartphone,
  ArrowRight
} from 'lucide-react';
import { WHY_CHOOSE_US, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/company';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-amber-600" />;
      case 'MessageCircle': return <MessageCircle className="w-6 h-6 text-amber-600" />;
      case 'Clock': return <Clock className="w-6 h-6 text-amber-600" />;
      case 'Users': return <Users className="w-6 h-6 text-amber-600" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-amber-600" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-amber-600" />;
      default: return <ShieldCheck className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Why Partner With Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 uppercase tracking-tight leading-tight mb-4">
            WHY CHOOSE <span className="navy-gradient-text">ARCHWAY CONSTRUCTION</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Built on core principles of structural safety, honest client communication, and dedicated site management.
          </p>
        </div>

        {/* 6 Grid Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((point) => (
            <div
              key={point.id}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-500/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-50 transition-all">
                {getIcon(point.iconName)}
              </div>

              <h3 className="text-lg font-extrabold text-slate-950 uppercase tracking-wide mb-3 group-hover:text-amber-600 transition-colors">
                {point.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-16 text-center">
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.HERO_SECONDARY)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 whatsapp-gradient text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all"
          >
            <span>CONNECT DIRECTLY WITH ARCHWAY CONSTRUCTION ON WHATSAPP (+91 86986 57784)</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
