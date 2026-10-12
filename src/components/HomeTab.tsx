import React, { useState } from 'react';
import {
  MessageSquare, Phone, ArrowRight, ShieldCheck, CheckCircle2,
  Home, Building2, Layers, MessageCircle, MapPin, Clock,
  CheckCircle, CalendarClock, Star, ChevronLeft, ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES, PROJECTS, TESTIMONIALS } from '../config/company';
import { TabId } from '../App';
import { ProjectStatus } from '../types';

interface HomeTabProps {
  onTabChange: (tab: TabId) => void;
}

// ─── Status badge config ──────────────────────────────────────────────────────
const STATUS_CONFIG: Record<ProjectStatus, { label: string; dotColor: string; bg: string; text: string; icon: React.ReactNode }> = {
  completed: {
    label: 'Completed',
    dotColor: 'bg-emerald-500',
    bg: 'bg-emerald-50 border-emerald-200',
    text: 'text-emerald-800',
    icon: <CheckCircle className="w-3 h-3" />,
  },
  ongoing: {
    label: 'In Progress',
    dotColor: 'bg-amber-500',
    bg: 'bg-amber-50 border-amber-200',
    text: 'text-amber-800',
    icon: <Clock className="w-3 h-3" />,
  },
  upcoming: {
    label: 'Upcoming',
    dotColor: 'bg-blue-500',
    bg: 'bg-blue-50 border-blue-200',
    text: 'text-blue-800',
    icon: <CalendarClock className="w-3 h-3" />,
  },
};

// ─── Star rating component ────────────────────────────────────────────────────
const StarRating: React.FC<{ rating: number; size?: 'sm' | 'md' }> = ({ rating, size = 'sm' }) => {
  const sz = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${sz} ${star <= rating ? 'text-amber-500 fill-amber-500' : 'text-slate-300 fill-slate-200'}`}
        />
      ))}
    </div>
  );
};

// ─── Project status filter tabs ───────────────────────────────────────────────
type ProjectFilter = 'all' | ProjectStatus;
const PROJECT_FILTERS: { key: ProjectFilter; label: string; icon: React.ReactNode }[] = [
  { key: 'all',       label: 'All Projects',       icon: <Layers className="w-3.5 h-3.5" /> },
  { key: 'completed', label: 'Completed',           icon: <CheckCircle className="w-3.5 h-3.5" /> },
  { key: 'ongoing',   label: 'In Progress',         icon: <Clock className="w-3.5 h-3.5" /> },
  { key: 'upcoming',  label: 'Upcoming',            icon: <CalendarClock className="w-3.5 h-3.5" /> },
];

// ─── Main component ───────────────────────────────────────────────────────────
export const HomeTab: React.FC<HomeTabProps> = ({ onTabChange }) => {
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>('all');
  const [testimonialPage, setTestimonialPage] = useState(0);

  const filteredProjects = projectFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.status === projectFilter);

  // Show 3 testimonials per page on desktop, 1 on mobile (handled via CSS)
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / testimonialsPerPage);
  const visibleTestimonials = TESTIMONIALS.slice(
    testimonialPage * testimonialsPerPage,
    testimonialPage * testimonialsPerPage + testimonialsPerPage
  );

  const avgRating = (TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / TESTIMONIALS.length).toFixed(1);
  const fiveStarCount = TESTIMONIALS.filter(t => t.rating === 5).length;

  return (
    <div className="h-full overflow-y-auto">

      {/* ─── Hero ──────────────────────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-8 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1920&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover filter grayscale"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 flex flex-col items-center text-center">
          <div className="mb-4 p-3 rounded-2xl bg-white shadow-lg border border-slate-200/80 inline-flex items-center justify-center">
            <img src="/logo.png" alt="Archway Construction" className="h-14 sm:h-18 w-auto object-contain" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold tracking-wide mb-3 uppercase shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            Expert Civil & Building Construction Team
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 uppercase leading-tight mb-3 max-w-3xl">
            BUILDING STRONG FOUNDATIONS.{' '}
            <span className="navy-gradient-text">CREATING BETTER SPACES.</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed mb-6 font-medium">
            {COMPANY_INFO.subtagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4 w-full max-w-lg">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.HERO_PRIMARY)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto whatsapp-gradient text-white font-black text-sm uppercase tracking-wider px-6 py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:scale-105 transition-all group"
            >
              <MessageSquare className="w-4 h-4 fill-white group-hover:rotate-12 transition-transform" />
              Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`tel:${COMPANY_INFO.phoneNumber.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto bg-white border border-slate-300 text-slate-900 font-extrabold text-sm uppercase tracking-wider px-6 py-3 rounded-xl shadow-sm flex items-center justify-center gap-2 hover:border-amber-500 transition-all"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              {COMPANY_INFO.displayWhatsappNumber}
            </a>
          </div>

          <p className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Direct WhatsApp chat with Archway Construction team
          </p>
        </div>
      </div>

      {/* ─── Quick-Access Cards ────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {[
            { icon: <Home className="w-5 h-5 text-amber-600" />, title: 'About Us', sub: 'Mission, Vision & Values', tab: 'about' as TabId },
            { icon: <Building2 className="w-5 h-5 text-amber-600" />, title: 'Services', sub: 'RCC, Tiles, Electrical…', tab: 'services' as TabId },
            { icon: <Layers className="w-5 h-5 text-amber-600" />, title: 'Projects', sub: 'View Our Work', tab: 'projects' as TabId },
            { icon: <MessageCircle className="w-5 h-5 text-amber-600" />, title: 'Contact', sub: 'Get a Quote Today', tab: 'contact' as TabId },
          ].map((card) => (
            <button
              key={card.title}
              onClick={() => onTabChange(card.tab)}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-md transition-all text-left group"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <span className="block text-xs font-extrabold text-slate-900 uppercase tracking-wide group-hover:text-amber-600 transition-colors">{card.title}</span>
              <span className="block text-[11px] text-slate-500 font-medium mt-0.5">{card.sub}</span>
            </button>
          ))}
        </div>

        {/* About strip */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col lg:flex-row items-start lg:items-center gap-5">
          <div className="shrink-0 hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
              alt="Construction site"
              className="w-32 h-24 object-cover rounded-xl border border-slate-200"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-extrabold text-amber-700 uppercase tracking-widest">About Archway</span>
            </div>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-950 uppercase mb-1.5">
              BUILT ON TRUST. <span className="navy-gradient-text">DRIVEN BY QUALITY.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Archway Construction is driven by an experienced team of civil engineers, project managers, and skilled site supervisors delivering dependable construction with emphasis on structural quality, transparency, and customer satisfaction.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-2">
            {[
              { label: 'Quality Workmanship' },
              { label: 'Complete Transparency' },
              { label: 'On-Time Delivery' },
            ].map((pt) => (
              <div key={pt.label} className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                {pt.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Projects Showcase ────────────────────────────────────────────── */}
      <div className="bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-extrabold text-amber-500 uppercase tracking-widest block mb-1">
                Our Work
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase leading-tight">
                PROJECTS <span className="text-amber-400">&amp;</span> MILESTONES
              </h2>
              <p className="text-slate-400 text-sm font-medium mt-1.5 max-w-xl">
                From completed structures to projects in progress — a snapshot of Archway Construction's growing portfolio across Maharashtra.
              </p>
            </div>
            <button
              onClick={() => onTabChange('projects')}
              className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider hover:border-amber-500 hover:text-amber-400 transition-all"
            >
              View Full Portfolio
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Summary counters */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { count: PROJECTS.filter(p => p.status === 'completed').length, label: 'Completed', color: 'text-emerald-400', icon: <CheckCircle className="w-4 h-4 text-emerald-400" /> },
              { count: PROJECTS.filter(p => p.status === 'ongoing').length,   label: 'In Progress', color: 'text-amber-400',   icon: <Clock className="w-4 h-4 text-amber-400" /> },
              { count: PROJECTS.filter(p => p.status === 'upcoming').length,  label: 'Upcoming',    color: 'text-blue-400',    icon: <CalendarClock className="w-4 h-4 text-blue-400" /> },
            ].map((stat) => (
              <div key={stat.label} className="bg-slate-900 border border-slate-800 rounded-xl p-3 sm:p-4 flex flex-col items-center text-center gap-1">
                {stat.icon}
                <span className={`text-2xl sm:text-3xl font-extrabold ${stat.color}`}>{stat.count}</span>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setProjectFilter(f.key)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all border ${
                  projectFilter === f.key
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow'
                    : 'bg-slate-900 text-slate-400 border-slate-700 hover:border-slate-500 hover:text-slate-200'
                }`}
              >
                {f.icon}
                {f.label}
                <span className={`ml-0.5 px-1.5 py-0.5 rounded-md text-[10px] font-black ${
                  projectFilter === f.key ? 'bg-slate-950/30 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  {f.key === 'all' ? PROJECTS.length : PROJECTS.filter(p => p.status === f.key).length}
                </span>
              </button>
            ))}
          </div>

          {/* Project cards */}
          {filteredProjects.length === 0 ? (
            <p className="text-slate-500 text-sm text-center py-8">No projects found for this filter.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProjects.map((project) => {
                const statusCfg = STATUS_CONFIG[project.status];
                return (
                  <div
                    key={project.id}
                    className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                      {/* Status badge */}
                      <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider border ${statusCfg.bg} ${statusCfg.text}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${statusCfg.dotColor} ${project.status === 'ongoing' ? 'animate-pulse' : ''}`} />
                        {statusCfg.icon}
                        {statusCfg.label}
                      </div>

                      {/* Category */}
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-slate-950/80 text-slate-300 text-[10px] font-bold uppercase">
                        {project.category}
                      </div>

                      {/* Location */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-slate-200 text-[11px] font-bold">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        {project.location}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="text-sm font-extrabold text-white uppercase tracking-wide mb-1 group-hover:text-amber-400 transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed font-medium flex-1 mb-3">
                        {project.description}
                      </p>

                      {/* Date tag */}
                      {(project.completionDate || project.expectedDate) && (
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-bold mb-3">
                          <Clock className="w-3 h-3 text-slate-600" />
                          {project.status === 'completed'
                            ? `Completed: ${project.completionDate}`
                            : `Expected: ${project.expectedDate}`}
                        </div>
                      )}

                      <a
                        href={getWhatsAppUrl(project.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full whatsapp-gradient text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded-xl flex items-center justify-center gap-1.5 hover:scale-105 transition-transform"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-white" />
                        Discuss This Project
                        <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* View all CTA */}
          <div className="mt-6 text-center">
            <button
              onClick={() => onTabChange('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-black text-sm uppercase tracking-wider hover:bg-amber-400 transition-all shadow-lg"
            >
              <Layers className="w-4 h-4" />
              Explore Full Portfolio & Gallery
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ─── Reviews & Testimonials ────────────────────────────────────────── */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-8">
            <span className="text-[11px] font-extrabold text-amber-700 uppercase tracking-widest block mb-1">
              What Our Clients Say
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 uppercase leading-tight mb-2">
              REVIEWS &amp; <span className="navy-gradient-text">TESTIMONIALS</span>
            </h2>
            <p className="text-slate-500 text-sm font-medium max-w-lg mx-auto">
              Honest feedback from clients across Maharashtra who trusted Archway Construction with their projects.
            </p>
          </div>

          {/* Aggregate rating banner */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-2xl mx-auto">
            <div className="text-center">
              <span className="text-5xl font-extrabold text-slate-950">{avgRating}</span>
              <span className="text-lg font-bold text-slate-400 ml-1">/ 5</span>
              <div className="flex items-center justify-center mt-1 gap-1">
                <StarRating rating={5} size="md" />
              </div>
              <span className="text-xs text-slate-500 font-medium mt-0.5 block">Overall Rating</span>
            </div>
            <div className="w-px h-12 bg-slate-200 hidden sm:block" />
            <div className="flex flex-col gap-1.5 text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-extrabold text-slate-900">{fiveStarCount} Five-Star Reviews</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-extrabold text-slate-900">{TESTIMONIALS.length} Verified Client Reviews</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-extrabold text-slate-900">Projects Across Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Testimonial cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {visibleTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white border border-slate-200 hover:border-amber-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col gap-3"
              >
                {/* Rating + date */}
                <div className="flex items-center justify-between">
                  <StarRating rating={t.rating} />
                  <span className="text-[10px] text-slate-400 font-bold">{t.date}</span>
                </div>

                {/* Review text */}
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-medium flex-1">
                  "{t.review}"
                </p>

                {/* Divider */}
                <div className="border-t border-slate-100" />

                {/* Reviewer info */}
                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shrink-0 shadow-sm">
                    <span className="text-sm font-extrabold text-white">
                      {t.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-extrabold text-slate-950 truncate">{t.name}</span>
                    <span className="block text-[10px] text-slate-500 font-medium truncate">{t.location}</span>
                  </div>
                  <div className="ml-auto shrink-0">
                    <span className="px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold uppercase">
                      {t.projectType}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mb-8">
              <button
                onClick={() => setTestimonialPage(p => Math.max(0, p - 1))}
                disabled={testimonialPage === 0}
                className="p-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:border-amber-400 hover:text-amber-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialPage(i)}
                  className={`w-8 h-8 rounded-lg text-xs font-extrabold transition-all ${
                    testimonialPage === i
                      ? 'navy-gradient-bg text-white shadow'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-amber-400'
                  }`}
                  aria-label={`Page ${i + 1}`}
                  aria-current={testimonialPage === i ? 'page' : undefined}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setTestimonialPage(p => Math.min(totalPages - 1, p + 1))}
                disabled={testimonialPage === totalPages - 1}
                className="p-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:border-amber-400 hover:text-amber-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* CTA strip */}
          <div className="rounded-2xl navy-gradient-bg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-white uppercase mb-1">
                Ready to Build with Us?
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-medium">
                Join our growing list of satisfied clients across Maharashtra. Get a free consultation today.
              </p>
            </div>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.FINAL_CTA)}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 whatsapp-gradient text-white font-black text-sm uppercase tracking-wider px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 hover:scale-105 transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* ─── Footer ────────────────────────────────────────────────────────── */}
      <div className="border-t border-slate-200 bg-white py-3 px-4 text-center text-xs text-slate-500 font-medium pb-20 sm:pb-3">
        © {COMPANY_INFO.copyrightYear} {COMPANY_INFO.name} · Maharashtra, India ·{' '}
        <a href={`mailto:${COMPANY_INFO.email}`} className="text-amber-600 hover:underline">{COMPANY_INFO.email}</a>
      </div>
    </div>
  );
};
