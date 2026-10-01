import React from 'react';
import { 
  Home, 
  Building2, 
  Building, 
  Hammer, 
  Layers, 
  MessageSquare, 
  ArrowUpRight 
} from 'lucide-react';
import { SERVICES, getWhatsAppUrl, COMPANY_INFO } from '../config/company';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-7 h-7 text-amber-600" />;
      case 'Building2': return <Building2 className="w-7 h-7 text-amber-600" />;
      case 'Building': return <Building className="w-7 h-7 text-amber-600" />;
      case 'Hammer': return <Hammer className="w-7 h-7 text-amber-600" />;
      case 'Layers': return <Layers className="w-7 h-7 text-amber-600" />;
      case 'MessageSquare': return <MessageSquare className="w-7 h-7 text-amber-600" />;
      default: return <Building className="w-7 h-7 text-amber-600" />;
    }
  };

  return (
    <section id="services" className="py-14 lg:py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Our Offerings</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold text-slate-950 uppercase tracking-tight leading-tight mb-3">
            OUR CONSTRUCTION <span className="navy-gradient-text">SERVICES</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Comprehensive civil and building construction solutions for residential, commercial, and development projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-500/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Holder */}
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-50 transition-all">
                  {getIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-extrabold text-slate-950 uppercase tracking-wide mb-2 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-medium">
                  {service.description}
                </p>
              </div>

              {/* Service WhatsApp CTA */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={getWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full whatsapp-gradient text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm hover:shadow-emerald-500/20 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  <span>Enquire on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-950 uppercase tracking-wide">Have a specific construction requirement?</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">Connect with Archway Construction directly on WhatsApp ({COMPANY_INFO.displayWhatsappNumber}).</p>
          </div>
          <a
            href={getWhatsAppUrl("Hello Archway Construction, I have a custom construction requirement I would like to discuss.")}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-gradient text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shrink-0 flex items-center gap-2 hover:scale-105 transition-transform shadow-sm"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>CUSTOM ENQUIRY ON WHATSAPP</span>
          </a>
        </div>

      </div>
    </section>
  );
};
