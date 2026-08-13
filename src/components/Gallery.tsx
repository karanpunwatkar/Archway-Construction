import React, { useState } from 'react';
import { Maximize2, MessageSquare } from 'lucide-react';
import { GALLERY_ITEMS, getWhatsAppUrl } from '../config/company';
import { ImageLightbox } from './ImageLightbox';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Structural', 'Exterior', 'Interior', 'Site Work'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! === filteredItems.length - 1 ? 0 : prev! + 1));
  };

  const currentLightboxItem: GalleryItem | null = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
            <span>On-Site Visuals</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 uppercase tracking-tight leading-tight mb-4">
            PROJECT <span className="navy-gradient-text">GALLERY</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Click on any image to expand and view our construction execution, structural framing, exterior elevations, and finishing details.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all border ${
                selectedCategory === cat
                  ? 'navy-gradient-bg text-white border-blue-900 shadow-md'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-950'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer border border-slate-200 hover:border-amber-500/50 shadow-md hover:shadow-xl transition-all duration-300 bg-slate-100"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Category Pill */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-white/90 backdrop-blur-md text-amber-800 text-xs font-bold uppercase tracking-wider">
                {item.category}
              </div>

              {/* Hover Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <Maximize2 className="w-4 h-4 text-amber-600" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <h3 className="text-base font-extrabold text-white uppercase tracking-wide mb-1">
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
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppUrl("Hello Archway Construction, I viewed your project gallery and would like to enquire about a construction project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 whatsapp-gradient text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md hover:scale-105 transition-transform"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>DISCUSS GALLERY WORK ON WHATSAPP (+91 86986 57784)</span>
          </a>
        </div>

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
