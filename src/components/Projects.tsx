import React, { useState, useEffect } from 'react';
import { MapPin, MessageSquare, ArrowUpRight, Maximize2, Layers, Image as ImageIcon } from 'lucide-react';
import { PROJECTS, GALLERY_ITEMS, getWhatsAppUrl, COMPANY_INFO } from '../config/company';
import { ImageLightbox } from './ImageLightbox';
import { GalleryItem } from '../types';

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'gallery'>('projects');
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Sync tab with URL hash if linked directly to #gallery or #projects
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#gallery') {
        setActiveTab('gallery');
      } else if (window.location.hash === '#projects') {
        setActiveTab('projects');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const galleryCategories = ['All', 'Structural', 'Exterior', 'Interior', 'Site Work'];

  const filteredGalleryItems = selectedGalleryCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedGalleryCategory);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! === 0 ? filteredGalleryItems.length - 1 : prev! - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! === filteredGalleryItems.length - 1 ? 0 : prev! + 1));
  };

  const currentLightboxItem: GalleryItem | null = lightboxIndex !== null ? filteredGalleryItems[lightboxIndex] : null;

  return (
    <section id="projects" className="py-14 lg:py-20 bg-slate-50 relative border-b border-slate-200 scroll-mt-16">
      {/* Invisible anchor target for #gallery */}
      <div id="gallery" className="absolute -top-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Portfolio & Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold text-slate-950 uppercase tracking-tight leading-tight mb-3">
            OUR WORK & <span className="navy-gradient-text">PROJECT SHOWCASE</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Explore our featured construction developments and on-site structural execution visuals.
          </p>
        </div>

        {/* View Toggle Switcher (Reduces vertical scrolling by organizing into tabs) */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all ${
                activeTab === 'projects'
                  ? 'navy-gradient-bg text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Featured Projects ({PROJECTS.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all ${
                activeTab === 'gallery'
                  ? 'navy-gradient-bg text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>On-Site Gallery ({GALLERY_ITEMS.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Featured Projects Grid */}
        {activeTab === 'projects' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-500/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative h-56 sm:h-60 overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                      
                      {/* Category Pill */}
                      <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-md bg-white/90 backdrop-blur-md text-amber-800 text-[11px] font-black uppercase tracking-wider border border-amber-200 shadow-sm">
                        {project.category}
                      </div>

                      {/* Location Badge */}
                      <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 text-slate-100 text-xs font-bold bg-slate-950/70 backdrop-blur-sm px-2.5 py-1 rounded-md">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        <span>{project.location}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-extrabold text-slate-950 uppercase tracking-wide mb-1.5 group-hover:text-amber-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Card WhatsApp CTA */}
                  <div className="p-5 pt-0">
                    <a
                      href={getWhatsAppUrl(project.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full whatsapp-gradient text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm hover:shadow-emerald-500/20 transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white" />
                      <span>START YOUR PROJECT →</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Switch Callout */}
            <div className="mt-8 text-center">
              <button
                onClick={() => setActiveTab('gallery')}
                className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-700 hover:text-amber-600 bg-white border border-slate-200 px-5 py-2.5 rounded-xl shadow-sm transition-all hover:border-amber-400"
              >
                <ImageIcon className="w-4 h-4 text-amber-600" />
                <span>View All 6 On-Site Construction Visuals In Gallery →</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: On-Site Visual Gallery */}
        {activeTab === 'gallery' && (
          <div>
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedGalleryCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all border ${
                    selectedGalleryCategory === cat
                      ? 'navy-gradient-bg text-white border-blue-900 shadow-md'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-950'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredGalleryItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer border border-slate-200 hover:border-amber-500/50 shadow-sm hover:shadow-lg transition-all duration-300 bg-slate-100"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-amber-800 text-[11px] font-bold uppercase tracking-wider">
                    {item.category}
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-3.5 right-3.5 p-2 rounded-full bg-white/90 text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-3.5 h-3.5 text-amber-600" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-sm sm:text-base font-extrabold text-white uppercase tracking-wide mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-200 line-clamp-1">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Gallery Footer CTA */}
            <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getWhatsAppUrl("Hello Archway Construction, I viewed your project gallery and would like to enquire about a construction project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 whatsapp-gradient text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-sm hover:scale-105 transition-transform"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>DISCUSS GALLERY WORK ON WHATSAPP ({COMPANY_INFO.displayWhatsappNumber})</span>
              </a>

              <button
                onClick={() => setActiveTab('projects')}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-amber-600 bg-white border border-slate-200 px-5 py-3 rounded-xl shadow-sm"
              >
                <Layers className="w-3.5 h-3.5 text-amber-600" />
                <span>Back to Featured Projects</span>
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        item={currentLightboxItem}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
