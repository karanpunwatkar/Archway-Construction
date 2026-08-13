import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../config/company';

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
    <section id="contact" className="py-20 lg:py-28 bg-white relative border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Direct Lead Channel</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 uppercase tracking-tight leading-tight mb-4">
            QUICK <span className="navy-gradient-text">ENQUIRY FORM</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Submit your project parameters below or connect directly with the Archway Construction team on WhatsApp.
          </p>
        </div>

        {/* Form Box */}
        <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
          
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-950 uppercase mb-2">Enquiry Prepared for WhatsApp!</h3>
              <p className="text-slate-600 max-w-md text-sm mb-6 font-medium">
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
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {error && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-center gap-3 font-semibold">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-extrabold uppercase text-slate-700 tracking-wider mb-2">
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
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 text-sm transition-colors shadow-sm font-medium"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-extrabold uppercase text-slate-700 tracking-wider mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your contact number"
                    required
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 text-sm transition-colors shadow-sm font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-xs font-extrabold uppercase text-slate-700 tracking-wider mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-amber-600 text-sm transition-colors shadow-sm font-medium"
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
                  <label htmlFor="location" className="block text-xs font-extrabold uppercase text-slate-700 tracking-wider mb-2">
                    Project Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City / Area"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 text-sm transition-colors shadow-sm font-medium"
                  />
                </div>
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-xs font-extrabold uppercase text-slate-700 tracking-wider mb-2">
                  Approximate Budget (Optional)
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="e.g. ₹25 Lakhs / Flexible"
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 text-sm transition-colors shadow-sm font-medium"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-extrabold uppercase text-slate-700 tracking-wider mb-2">
                  Message / Requirement Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your construction requirement, plot size, timeline, or questions..."
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 text-sm transition-colors resize-none shadow-sm font-medium"
                />
              </div>

              {/* Form Submit Button */}
              <button
                type="submit"
                className="w-full navy-gradient-bg hover:opacity-95 text-white font-black text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                <span>SEND ENQUIRY VIA WHATSAPP</span>
              </button>

            </form>
          )}

          {/* WhatsApp Direct Alternative Option */}
          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-600 mb-3 font-medium">Prefer WhatsApp Chat?</p>
            <a
              href={getWhatsAppUrl("Hello Archway Construction, I would like to chat directly about a construction project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-700 font-extrabold text-sm uppercase tracking-wider hover:text-emerald-800 transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-600 text-emerald-600" />
              <span>Chat directly with us on WhatsApp ({COMPANY_INFO.displayWhatsappNumber}) →</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
