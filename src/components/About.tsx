import React from 'react';
import { MessageSquare, Check, Shield, User, Award, Eye } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/company';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Light Panel Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
                alt="Archway Construction Site Quality Inspection"
                className="w-full h-[440px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              {/* Team Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full navy-gradient-bg flex items-center justify-center text-white font-bold shrink-0 shadow-md">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-slate-500 text-xs font-bold uppercase tracking-wider">Expert Team</span>
                    <span className="text-slate-900 font-extrabold text-base sm:text-lg block">Construction & Engineering Team</span>
                    <span className="text-amber-600 text-xs font-semibold">Dedicated Site Management</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Element */}
            <div className="hidden sm:block absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-amber-600 rounded-tl-2xl pointer-events-none" />
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider w-fit mb-4">
              <span>About Archway</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 uppercase tracking-tight leading-tight mb-6">
              BUILT ON TRUST. <br />
              <span className="navy-gradient-text">DRIVEN BY QUALITY.</span>
            </h2>

            {/* Main Statement */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-medium">
              <strong className="text-slate-950 font-bold">Archway Construction</strong> is driven by an experienced team of civil engineers, project managers, and skilled site supervisors dedicated to delivering dependable construction solutions with an emphasis on structural quality, transparency, fine workmanship, and customer satisfaction.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              We approach every project — whether residential homes, commercial developments, or structural renovations — with systematic site execution, high quality material standards, and clear client communication.
            </p>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                <Shield className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wide">Structural Quality</h4>
                  <p className="text-slate-500 text-xs mt-1">High-grade materials and structural execution.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                <Eye className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wide">Complete Transparency</h4>
                  <p className="text-slate-500 text-xs mt-1">Direct communication with zero hidden costs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wide">Precision Workmanship</h4>
                  <p className="text-slate-500 text-xs mt-1">Meticulous attention to structural finishing.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                <Check className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wide">Customer Satisfaction</h4>
                  <p className="text-slate-500 text-xs mt-1">Tailored execution to fit your exact budget.</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA */}
            <div>
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.ABOUT_CTA)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 whatsapp-gradient text-white font-extrabold text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-105 transition-transform"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>DISCUSS YOUR PROJECT → WHATSAPP</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
