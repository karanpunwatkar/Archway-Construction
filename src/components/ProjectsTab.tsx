import React, { useState } from 'react';
import { MapPin, MessageSquare, ArrowUpRight, Maximize2, Layers, Image as ImageIcon } from 'lucide-react';
import { PROJECTS, GALLERY_ITEMS, getWhatsAppUrl, COMPANY_INFO } from '../config/company';
import { ImageLightbox } from './ImageLightbox';
import { GalleryItem } from '../types';

type View = 'projects' | 'gallery';

const GALLERY_CATS = ['All', 'Structural', 'Exterior', 'Interior', 'Site Work'];

export const ProjectsTab: React.FC = () => {
  const [view, setView] = useState<View>('projects');
  const [galleryFilter, setGalleryFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = galleryFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(i => i.category === galleryFilter);

  const handlePrev = () => setLightboxIndex(p => p === 0 ? filtered.length - 1 : p! - 1);
  const handleNext = () => setLightboxIndex(p => p === filtered.length - 1 ? 0 : p! + 1);
  const currentItem: GalleryItem | null = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Sub-header */}
      <div className="shrink-0 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg font-extrabold text-slate-950 uppercase tracking-tight">
            {view === 'projects' ? 'Featured Projects' : 'On-Site Gallery'}
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            {view === 'projects' ? 'Our completed construction showcase' : 'Real site execution visuals'}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex p-1 rounded-xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setView('projects')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all ${
                view === 'projects' ? 'navy-gradient-bg text-white shadow' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setView('gallery')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all ${
                view === 'gallery' ? 'navy-gradient-bg text-white shadow' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              Gallery ({GALLERY_ITEMS.length})
            </button>
          </div>
          <a
            href={getWhatsAppUrl(`Hello ${COMPANY_INFO.name}, I saw your projects and would like to discuss a construction project.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-gradient text-white font-bold text-xs uppercase tracking-wider px-3.5 py-2 rounded-xl flex items-center gap-1.5 hover:scale-105 transition-transform shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            Discuss
          </a>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-5">

        {/* Featured Projects */}
        {view === 'projects' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-md transition-all group flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-amber-800 text-[11px] font-black uppercase tracking-wider border border-amber-200">
                    {project.category}
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-slate-100 text-[11px] font-bold bg-slate-950/70 px-2 py-1 rounded-md">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {project.location}
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-sm font-extrabold text-slate-950 uppercase tracking-wide mb-1 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium flex-1 mb-3">
                    {project.description}
                  </p>
                  <a
                    href={getWhatsAppUrl(project.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full whatsapp-gradient text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded-xl flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    Start Your Project
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Gallery */}
        {view === 'gallery' && (
          <div className="max-w-6xl mx-auto">
            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {GALLERY_CATS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setGalleryFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all border ${
                    galleryFilter === cat
                      ? 'navy-gradient-bg text-white border-blue-900 shadow'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative h-48 sm:h-52 rounded-2xl overflow-hidden cursor-pointer border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-md transition-all bg-slate-100"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-white/90 text-amber-800 text-[10px] font-bold uppercase">
                    {item.category}
                  </div>
                  <div className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3 h-3 text-amber-600" />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-3">
                    <h3 className="text-xs font-extrabold text-white uppercase tracking-wide">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <ImageLightbox item={currentItem} onClose={() => setLightboxIndex(null)} onPrev={handlePrev} onNext={handleNext} />
    </div>
  );
};
