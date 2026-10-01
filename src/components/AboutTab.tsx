import React, { useState } from 'react';
import { MessageSquare, Target, Eye, Heart, CheckCircle2, Shield, Clock, Users, Wrench, Star, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/company';

type View = 'about' | 'mission' | 'values';

const CORE_VALUES = [
  {
    icon: <Star className="w-5 h-5 text-amber-600" />,
    title: 'Quality',
    description: 'We focus on workmanship, materials, detailing, and execution that meet the full requirements of every project.'
  },
  {
    icon: <Shield className="w-5 h-5 text-amber-600" />,
    title: 'Reliability',
    description: 'We aim to deliver dependable site execution and maintain clear communication throughout every project.'
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-amber-600" />,
    title: 'Integrity',
    description: 'We believe in transparent communication, responsible practices, and building lasting client relationships.'
  },
  {
    icon: <Wrench className="w-5 h-5 text-amber-600" />,
    title: 'Safety & Responsibility',
    description: 'We approach construction work with attention to systematic execution, site conditions, and responsible practices.'
  },
  {
    icon: <Clock className="w-5 h-5 text-amber-600" />,
    title: 'Craftsmanship',
    description: 'We value precision and attention to detail from structural work through final finishing of every project.'
  },
  {
    icon: <Users className="w-5 h-5 text-amber-600" />,
    title: 'Client Focus',
    description: 'We listen to project requirements and work toward practical solutions suited to each client\'s needs.'
  }
];

const WHY_US = [
  'Quality-focused workmanship',
  'Experienced site execution',
  'Reliable materials and construction practices',
  'Attention to finishing and detailing',
  'Clear and transparent communication with clients',
  'Residential and commercial project support',
  'Multiple construction services under one roof',
  'Systematic execution with focus on timelines',
];

export const AboutTab: React.FC = () => {
  const [view, setView] = useState<View>('about');

  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Sub-header */}
      <div className="shrink-0 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg font-extrabold text-slate-950 uppercase tracking-tight">
            {view === 'about' ? 'About Archway Construction' : view === 'mission' ? 'Mission, Vision & Commitment' : 'Core Values'}
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Building strong foundations. Creating better spaces.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex p-1 rounded-xl bg-slate-100 border border-slate-200">
            {([
              { id: 'about' as View, label: 'About' },
              { id: 'mission' as View, label: 'Mission' },
              { id: 'values' as View, label: 'Values' },
            ]).map((btn) => (
              <button
                key={btn.id}
                onClick={() => setView(btn.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all ${
                  view === btn.id ? 'navy-gradient-bg text-white shadow' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.ABOUT_CTA)}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-gradient text-white font-bold text-xs uppercase tracking-wider px-3.5 py-2 rounded-xl flex items-center gap-1.5 hover:scale-105 transition-transform shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            Chat
          </a>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-6xl mx-auto">

          {/* ── ABOUT VIEW ── */}
          {view === 'about' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

              {/* Left: image + tagline */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
                    alt="Archway Construction site"
                    className="w-full h-52 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="block text-white font-extrabold text-sm uppercase tracking-wide">Archway Construction</span>
                    <span className="block text-amber-400 text-xs font-bold mt-0.5">Strong Foundations. Better Spaces.</span>
                  </div>
                </div>

                {/* Why Choose Us quick list */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-3">Why Choose Archway</h4>
                  <ul className="space-y-2">
                    {WHY_US.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 font-medium leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: company description */}
              <div className="lg:col-span-8 flex flex-col gap-4">
                {/* Tag */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
                    Company Overview
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 uppercase tracking-tight leading-tight mb-3">
                    BUILDING STRONG FOUNDATIONS.{' '}
                    <span className="navy-gradient-text">CREATING BETTER SPACES.</span>
                  </h2>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium mb-3">
                    Archway Construction is a construction and finishing services company focused on delivering reliable, quality-driven work across residential, commercial, and other construction projects.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium mb-3">
                    From structural construction to the final finishing touches, we provide a wide range of services under one roof, with careful attention to workmanship, materials, timelines, site requirements, and client expectations.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium mb-4">
                    Our approach is built around a simple principle: <strong className="text-slate-900">every project should be strong, practical, durable, and finished to a high standard.</strong> We combine systematic site execution with attention to detail to help clients move confidently from the first stage of construction to a completed, usable space.
                  </p>
                </div>

                {/* Stats / highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { val: '7+', label: 'Services Offered' },
                    { val: '100%', label: 'Quality Focus' },
                    { val: '1 Roof', label: 'All Services' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                      <span className="block text-xl font-black navy-gradient-text">{stat.val}</span>
                      <span className="block text-[11px] text-slate-600 font-bold uppercase tracking-wide mt-0.5">{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <a
                    href={getWhatsAppUrl(WHATSAPP_MESSAGES.ABOUT_CTA)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 whatsapp-gradient text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-transform"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    Discuss Your Project on WhatsApp
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* ── MISSION VIEW ── */}
          {view === 'mission' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Mission */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-3">
                <div className="w-11 h-11 rounded-xl navy-gradient-bg flex items-center justify-center shadow-md">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold uppercase tracking-wider w-fit">
                  Our Mission
                </div>
                <h3 className="text-base font-extrabold text-slate-950 uppercase tracking-wide">What Drives Us</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  To deliver dependable construction and finishing services that combine quality workmanship, durable materials, practical solutions, and professional execution — while building long-term trust with every client and every project.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-3">
                <div className="w-11 h-11 rounded-xl bg-amber-500 flex items-center justify-center shadow-md">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-800 text-[10px] font-bold uppercase tracking-wider w-fit">
                  Our Vision
                </div>
                <h3 className="text-base font-extrabold text-slate-950 uppercase tracking-wide">Where We're Going</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  To build Archway Construction into a trusted and respected construction company known for quality, reliability, transparency, and excellence in every project we undertake.
                </p>
              </div>

              {/* Commitment */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-600 flex items-center justify-center shadow-md">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold uppercase tracking-wider w-fit">
                  Our Commitment
                </div>
                <h3 className="text-base font-extrabold text-slate-950 uppercase tracking-wide">Our Promise to You</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  At Archway Construction, a successful project is not simply about completing construction. It is about getting the foundation right, executing every stage carefully, maintaining quality throughout, and delivering a finished space the client can be proud of.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  From structure to finishing — we provide practical solutions, dependable execution, and quality finishing while building relationships that last beyond the completion of a project.
                </p>
              </div>

              {/* Bottom tagline card */}
              <div className="lg:col-span-3 p-5 rounded-2xl navy-gradient-bg text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-extrabold uppercase tracking-wide mb-1">Strong Foundations. Better Spaces. Reliable Execution.</h4>
                  <p className="text-xs text-blue-200 font-medium">
                    {COMPANY_INFO.name} · Maharashtra, India · {COMPANY_INFO.displayWhatsappNumber}
                  </p>
                </div>
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.LEAD_GEN)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 whatsapp-gradient text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  Start a Project Conversation
                </a>
              </div>
            </div>
          )}

          {/* ── VALUES VIEW ── */}
          {view === 'values' && (
            <div>
              <div className="mb-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <p className="text-sm text-slate-600 leading-relaxed font-medium text-center max-w-2xl mx-auto">
                  Our core values guide every project — from the first consultation to the final finishing stage. They define how we work, how we communicate, and what every client can expect from Archway Construction.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {CORE_VALUES.map((val) => (
                  <div key={val.title} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:border-amber-400 hover:shadow-md transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      {val.icon}
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-950 uppercase tracking-wide mb-2 group-hover:text-amber-600 transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
