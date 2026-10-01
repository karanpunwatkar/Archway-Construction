import React, { useState } from 'react';
import {
  Home, Building2, Building, Hammer, Layers, MessageSquare,
  ArrowUpRight, ShieldCheck, MessageCircle, Clock, Users, Wrench, Smartphone
} from 'lucide-react';
import { SERVICES, WHY_CHOOSE_US, getWhatsAppUrl, COMPANY_INFO } from '../config/company';

type View = 'services' | 'why';

const getServiceIcon = (name: string) => {
  switch (name) {
    case 'Home': return <Home className="w-6 h-6 text-amber-600" />;
    case 'Building2': return <Building2 className="w-6 h-6 text-amber-600" />;
    case 'Building': return <Building className="w-6 h-6 text-amber-600" />;
    case 'Hammer': return <Hammer className="w-6 h-6 text-amber-600" />;
    case 'Layers': return <Layers className="w-6 h-6 text-amber-600" />;
    case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-amber-600" />;
    default: return <Building className="w-6 h-6 text-amber-600" />;
  }
};

const getTrustIcon = (name: string) => {
  switch (name) {
    case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-amber-600" />;
    case 'MessageCircle': return <MessageCircle className="w-5 h-5 text-amber-600" />;
    case 'Clock': return <Clock className="w-5 h-5 text-amber-600" />;
    case 'Users': return <Users className="w-5 h-5 text-amber-600" />;
    case 'Wrench': return <Wrench className="w-5 h-5 text-amber-600" />;
    case 'Smartphone': return <Smartphone className="w-5 h-5 text-amber-600" />;
    default: return <ShieldCheck className="w-5 h-5 text-amber-600" />;
  }
};

export const ServicesTab: React.FC = () => {
  const [view, setView] = useState<View>('services');

  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Sub-header */}
      <div className="shrink-0 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg font-extrabold text-slate-950 uppercase tracking-tight">
            {view === 'services' ? 'Our Construction Services' : 'Why Choose Archway'}
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            {view === 'services'
              ? 'Comprehensive civil & building solutions for every project type'
              : '6 core strengths that make us the right construction partner'}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex p-1 rounded-xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setView('services')}
              className={`px-4 py-1.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all ${
                view === 'services' ? 'navy-gradient-bg text-white shadow' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setView('why')}
              className={`px-4 py-1.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all ${
                view === 'why' ? 'navy-gradient-bg text-white shadow' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Why Us
            </button>
          </div>
          <a
            href={getWhatsAppUrl(`Hello ${COMPANY_INFO.name}, I would like to enquire about your construction services.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-gradient text-white font-bold text-xs uppercase tracking-wider px-3.5 py-2 rounded-xl flex items-center gap-1.5 hover:scale-105 transition-transform shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            Enquire
          </a>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-5">
        {view === 'services' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3 group-hover:bg-amber-50 group-hover:scale-110 transition-all border border-slate-200">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-950 uppercase tracking-wide mb-1.5 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100">
                  <a
                    href={getWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full whatsapp-gradient text-white font-bold text-xs uppercase tracking-wider py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 hover:shadow-emerald-500/20 transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    Enquire on WhatsApp
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {view === 'why' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {WHY_CHOOSE_US.map((point) => (
              <div
                key={point.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-3 group-hover:bg-amber-50 group-hover:scale-110 transition-all shadow-sm">
                  {getTrustIcon(point.iconName)}
                </div>
                <h3 className="text-sm font-extrabold text-slate-950 uppercase tracking-wide mb-1.5 group-hover:text-amber-600 transition-colors">
                  {point.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
