import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/company';

export const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    projectType: 'Residential Construction',
    location: '',
    budget: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setError('Please fill in your Full Name and Phone Number.');
      return;
    }

    // Format enquiry details into a clean WhatsApp message
    const formattedMsg = `*New Website Project Enquiry*%0A` +
      `*Name:* ${formData.fullName}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Project Type:* ${formData.projectType}%0A` +
      `*Location:* ${formData.location || 'N/A'}%0A` +
      `*Budget:* ${formData.budget || 'N/A'}%0A` +
      `*Message:* ${formData.message || 'Interested in discussing a construction project.'}`;

    // Redirect to real WhatsApp number: +91 86986 57784
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${formattedMsg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 lg:py-20 bg-white relative border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Direct Lead & Consultation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold text-slate-950 uppercase tracking-tight leading-tight mb-3">
            GET A CONSULTATION & <span className="navy-gradient-text">CONTACT US</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Have a project in mind? Reach out directly via WhatsApp/Call or submit your project parameters below.
          </p>
        </div>

        {/* 2-Column Responsive Section: Consultation Channels (Left) + Enquiry Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Consultation Hub */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Primary WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-white to-slate-50 border border-emerald-300/80 shadow-md">
              <div className="flex items-center gap-2.5 text-emerald-800 text-xs font-extrabold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Instant Project Discussion</span>
              </div>
              <h3 className="text-xl font-black text-slate-950 uppercase mb-2">Chat on WhatsApp</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-medium">
                The fastest way to share plans, drawings, or discuss your residential & commercial construction requirements.
              </p>
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.LEAD_GEN)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full whatsapp-gradient text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] transition-transform"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>START WHATSAPP CHAT</span>
                <ArrowRight className="w-4 h-4 ml-auto" />
              </a>
            </div>

            {/* Direct Call & Email Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col gap-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">Direct Contact Information</h4>
              
              <a
                href={`tel:${COMPANY_INFO.phoneNumber.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-slate-500 uppercase">Call Our Team Directly</span>
                  <span className="text-sm font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {COMPANY_INFO.displayWhatsappNumber}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-slate-500 uppercase">Official Email</span>
                  <span className="text-sm font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {COMPANY_INFO.email}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-slate-500 uppercase">Office Location</span>
                  <span className="text-xs font-bold text-slate-900">
                    {COMPANY_INFO.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Consultation Assurance Badge */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 font-medium">
              <span className="font-extrabold block mb-1 uppercase tracking-wide text-amber-800">Prompt Engineering Response</span>
              All project inquiries are reviewed directly by the core Archway Construction team with transparent cost estimates and site feasibility planning.
            </div>

          </div>

          {/* Right Column: Interactive Quick Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md">
              
              <div className="mb-6 pb-4 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-950 uppercase tracking-wide">Project Enquiry Form</h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Fill out your parameters to generate a structured WhatsApp brief.</p>
                </div>
              </div>

              {submitted ? (
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-950 uppercase mb-2">Enquiry Prepared for WhatsApp!</h3>
                  <p className="text-slate-600 max-w-md text-xs sm:text-sm mb-6 font-medium">
                    Your enquiry details have been generated for direct WhatsApp transmission to Archway Construction ({COMPANY_INFO.displayWhatsappNumber}).
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-amber-700 font-bold uppercase tracking-wider underline hover:text-amber-800"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {error && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2.5 font-semibold">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-[11px] font-extrabold uppercase text-slate-700 tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 text-xs sm:text-sm transition-colors shadow-sm font-medium"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-[11px] font-extrabold uppercase text-slate-700 tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter contact number"
                        required
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 text-xs sm:text-sm transition-colors shadow-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Project Type */}
                    <div>
                      <label htmlFor="projectType" className="block text-[11px] font-extrabold uppercase text-slate-700 tracking-wider mb-1.5">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-600 text-xs sm:text-sm transition-colors shadow-sm font-medium"
                      >
                        <option value="Residential Construction">Residential Construction</option>
                        <option value="Commercial Construction">Commercial Construction</option>
                        <option value="Building Construction">Building Construction</option>
                        <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                        <option value="Civil & Structural Work">Civil & Structural Work</option>
                        <option value="Project Consultation">Project Consultation</option>
                      </select>
                    </div>

                    {/* Project Location */}
                    <div>
                      <label htmlFor="location" className="block text-[11px] font-extrabold uppercase text-slate-700 tracking-wider mb-1.5">
                        Project Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City / Area"
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 text-xs sm:text-sm transition-colors shadow-sm font-medium"
                      />
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-[11px] font-extrabold uppercase text-slate-700 tracking-wider mb-1.5">
                      Approximate Budget (Optional)
                    </label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g. ₹25 Lakhs / Flexible"
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 text-xs sm:text-sm transition-colors shadow-sm font-medium"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-[11px] font-extrabold uppercase text-slate-700 tracking-wider mb-1.5">
                      Message / Requirement Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your construction requirement, plot size, timeline, or questions..."
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 text-xs sm:text-sm transition-colors resize-none shadow-sm font-medium"
                    />
                  </div>

                  {/* Form Submit Button */}
                  <button
                    type="submit"
                    className="w-full navy-gradient-bg hover:opacity-95 text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND ENQUIRY VIA WHATSAPP</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
