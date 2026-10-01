import React, { useState } from 'react';
import {
  MessageSquare, Send, CheckCircle2, AlertCircle,
  Phone, Mail, MapPin, ShieldCheck, ArrowRight, ChevronDown
} from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES, FAQS } from '../config/company';

export const ContactTab: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '', phone: '', projectType: 'Residential Construction',
    location: '', budget: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setError('Please fill in your Full Name and Phone Number.');
      return;
    }
    const msg = `*New Website Enquiry*%0A` +
      `*Name:* ${formData.fullName}%0A*Phone:* ${formData.phone}%0A` +
      `*Project:* ${formData.projectType}%0A*Location:* ${formData.location || 'N/A'}%0A` +
      `*Budget:* ${formData.budget || 'N/A'}%0A*Message:* ${formData.message || 'Interested in discussing a project.'}`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Sub-header */}
      <div className="shrink-0 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-3">
        <h2 className="text-lg font-extrabold text-slate-950 uppercase tracking-tight">Get A Consultation</h2>
        <p className="text-xs text-slate-500 font-medium">Reach out directly via WhatsApp, call, or submit the form below</p>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* LEFT: Contact info */}
          <div className="lg:col-span-4 flex flex-col gap-4">

            {/* WhatsApp primary */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-white to-slate-50 border border-emerald-300/70 shadow-md">
              <div className="flex items-center gap-2 text-emerald-800 text-xs font-extrabold uppercase tracking-wider mb-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Instant Discussion
              </div>
              <h3 className="text-base font-black text-slate-950 uppercase mb-1.5">Chat on WhatsApp</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium mb-3">
                Share plans, drawings, or project details directly with our construction team.
              </p>
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.LEAD_GEN)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full whatsapp-gradient text-white font-extrabold text-xs uppercase tracking-wider py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] transition-transform"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                START WHATSAPP CHAT
                <ArrowRight className="w-4 h-4 ml-auto" />
              </a>
            </div>

            {/* Direct contacts */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-3">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Direct Contact</span>
              <a href={`tel:${COMPANY_INFO.phoneNumber.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-500 uppercase">Call Us</span>
                  <span className="text-xs font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">{COMPANY_INFO.displayWhatsappNumber}</span>
                </div>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-500 uppercase">Email</span>
                  <span className="text-xs font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">{COMPANY_INFO.email}</span>
                </div>
              </a>
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-500 uppercase">Location</span>
                  <span className="text-xs font-bold text-slate-900">{COMPANY_INFO.address}</span>
                </div>
              </div>
            </div>

            {/* FAQ accordion — compact */}
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-100">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">Common Questions</span>
              </div>
              <div className="divide-y divide-slate-100">
                {FAQS.slice(0, 4).map((faq) => (
                  <div key={faq.id}>
                    <button
                      onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between gap-3 group"
                    >
                      <span className="text-xs font-bold text-slate-800 group-hover:text-amber-600 transition-colors leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${openFaq === faq.id ? 'rotate-180 text-amber-600' : ''}`} />
                    </button>
                    {openFaq === faq.id && (
                      <div className="px-4 pb-3 text-xs text-slate-600 leading-relaxed font-medium border-t border-slate-100 pt-2">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="lg:col-span-8">
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-md">
              <div className="mb-4 pb-3 border-b border-slate-200">
                <h3 className="text-base font-extrabold text-slate-950 uppercase tracking-wide">Project Enquiry Form</h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Fill your details — we'll prepare a structured WhatsApp brief for you.</p>
              </div>

              {submitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-950 uppercase mb-1.5">Enquiry Sent via WhatsApp!</h3>
                  <p className="text-slate-600 text-xs mb-4 font-medium max-w-sm">
                    Your details have been sent directly to Archway Construction ({COMPANY_INFO.displayWhatsappNumber}).
                  </p>
                  <button onClick={() => setSubmitted(false)} className="text-xs text-amber-700 font-bold uppercase tracking-wider underline">
                    Submit another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {error && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2 font-semibold">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-slate-700 tracking-wider mb-1">Full Name *</label>
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                        placeholder="Your full name" required
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 text-xs transition-colors font-medium" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-slate-700 tracking-wider mb-1">Phone Number *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="Contact number" required
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 text-xs transition-colors font-medium" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-slate-700 tracking-wider mb-1">Project Type</label>
                      <select name="projectType" value={formData.projectType} onChange={handleChange}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-600 text-xs transition-colors font-medium">
                        <option>Residential Construction</option>
                        <option>Commercial Construction</option>
                        <option>Building Construction</option>
                        <option>Renovation & Remodeling</option>
                        <option>Civil & Structural Work</option>
                        <option>Project Consultation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-slate-700 tracking-wider mb-1">Project Location</label>
                      <input type="text" name="location" value={formData.location} onChange={handleChange}
                        placeholder="City / Area"
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 text-xs transition-colors font-medium" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold uppercase text-slate-700 tracking-wider mb-1">Budget (Optional)</label>
                    <input type="text" name="budget" value={formData.budget} onChange={handleChange}
                      placeholder="e.g. ₹25 Lakhs / Flexible"
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 text-xs transition-colors font-medium" />
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold uppercase text-slate-700 tracking-wider mb-1">Message / Requirements</label>
                    <textarea name="message" rows={3} value={formData.message} onChange={handleChange}
                      placeholder="Describe your requirement, plot size, timeline..."
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 text-xs transition-colors resize-none font-medium" />
                  </div>

                  <button type="submit"
                    className="w-full navy-gradient-bg text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform">
                    <Send className="w-4 h-4" />
                    SEND ENQUIRY VIA WHATSAPP
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
