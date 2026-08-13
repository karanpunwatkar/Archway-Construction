import React from 'react';
import { X, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { GalleryItem } from '../types';
import { getWhatsAppUrl } from '../config/company';

interface ImageLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  item,
  onClose,
  onPrev,
  onNext
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-xl p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        
        {/* Header Bar */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block">{item.category}</span>
            <h4 className="text-white font-extrabold text-base sm:text-lg uppercase">{item.title}</h4>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-amber-500 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image Preview Container */}
        <div className="relative bg-black flex items-center justify-center min-h-[300px] max-h-[70vh]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="max-h-[70vh] w-auto max-w-full object-contain"
          />

          {/* Navigation Controls */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 border border-slate-800 text-slate-200 hover:text-amber-400 hover:scale-110 transition-all"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 border border-slate-800 text-slate-200 hover:text-amber-400 hover:scale-110 transition-all"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Footer & Caption */}
        <div className="p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-300 font-normal">
            {item.caption}
          </p>

          <a
            href={getWhatsAppUrl(`Hello Archway Construction, I am interested in work similar to: ${item.title}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto whatsapp-gradient text-white font-bold text-xs uppercase tracking-wider py-3 px-5 rounded-xl flex items-center justify-center gap-2 shrink-0 hover:scale-105 transition-transform"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
