import React from 'react';
import { MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PROJECTS, getWhatsAppUrl } from '../config/company';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 uppercase tracking-tight leading-tight mb-4">
            PROJECTS & <span className="navy-gradient-text">OUR WORK</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            A showcase of civil and building construction work across residential and commercial developments.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-500/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-white/90 backdrop-blur-md text-amber-800 text-xs font-black uppercase tracking-wider border border-amber-200 shadow-sm">
                    {project.category}
                  </div>

                  {/* Location Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-slate-100 text-xs font-bold bg-slate-950/70 backdrop-blur-sm px-2.5 py-1 rounded-md">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-slate-950 uppercase tracking-wide mb-2 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card WhatsApp CTA */}
              <div className="p-6 pt-0">
                <a
                  href={getWhatsAppUrl(project.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full whatsapp-gradient text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-emerald-500/20 transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>START YOUR PROJECT →</span>
                  <ArrowUpRight className="w-4 h-4 ml-auto" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
