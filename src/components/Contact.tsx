/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Calendar, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'media-wall',
    remarks: '',
  });

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormError('Please enter your name and phone/WhatsApp number so we can reach you.');
      return;
    }

    setIsLoading(true);
    setFormError(null);

    // Simulate sending inquiry to showroom
    setTimeout(() => {
      setIsLoading(false);
      setFormSubmitted(true);
      // Cache request in localStorage for persistence checks
      try {
        const storedInquiries = JSON.parse(localStorage.getItem('british_inquiries') || '[]');
        storedInquiries.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('british_inquiries', JSON.stringify(storedInquiries));
      } catch (err) {
        console.error('LocalStorage write failed:', err);
      }
    }, 1200);
  };

  const handleResetForm = () => {
    setFormData({ name: '', phone: '', service: 'media-wall', remarks: '' });
    setFormSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900 relative scroll-mt-12">
      <div className="absolute top-[10%] left-1/4 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column Information & Map Mockup (Span 5) */}
          <ScrollReveal direction="left" duration={800} className="lg:col-span-5 flex flex-col gap-8 text-left">
            <div className="flex flex-col items-start">
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold-400 font-semibold mb-2">
                Visit or Talk
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-normal text-white italic">
                Showroom <span className="text-gold-500 not-italic font-bold">Location & Contact</span>
              </h2>
              <div className="h-0.5 w-16 bg-gold-500/30 mt-4 mb-3" />
              <p className="font-sans text-sm text-slate-350 font-light leading-relaxed">
                We are open 6 days a week. Feel free to drop by our exclusive Jalandhar showroom to see active design templates, textured wallpaper sample books, and high-quality material laminates.
              </p>
            </div>

            {/* Address cards */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-5 bg-slate-950/60 rounded-2xl border border-white/5 hover:border-gold-500/10 transition-colors">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-display font-bold text-xs text-slate-300">Showroom Address</span>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed">
                    3581, Model House Rd, near Sood Hospital, Tej Mohan Nagar, Basti Sheikh, Dashmesh Nagar, Jalandhar, Punjab 144002
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-slate-950/60 rounded-2xl border border-white/5 hover:border-gold-500/10 transition-colors">
                <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-display font-bold text-xs text-slate-300">Direct Showroom Hotlines</span>
                  <a href="tel:09815010422" className="font-mono text-sm font-bold text-white hover:text-gold-300 transition-colors">
                    098150 10422
                  </a>
                  <span className="text-[10px] text-slate-500 font-sans">Tap coordinates to call immediately</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-slate-950/60 rounded-2xl border border-white/5 hover:border-gold-500/10 transition-colors">
                <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-display font-bold text-xs text-slate-300">Business Showroom Hours</span>
                  <span className="font-sans text-xs text-slate-400">
                    Monday – Saturday: <strong className="text-white font-medium">9:00 AM – 8:00 PM</strong>
                  </span>
                  <span className="font-sans text-xs text-slate-500">
                    Sundays: <strong className="text-gold-200">By Special Advance Appointment only</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Highly customized visual map mockup */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] tracking-wider text-slate-500 uppercase font-semibold">
                MAP LOCATION PREVIEW (TEJ MOHAN NAGAR, JALANDHAR)
              </span>
              <a
                href="https://maps.google.com/?q=British+Interiors+Model+House+Rd+near+Sood+Hospital+Jalandhar"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-video rounded-3xl border border-white/10 overflow-hidden bg-slate-950 shadow-inner hover:border-gold-500/30 transition-all cursor-pointer"
              >
                {/* Visual grid mockup representing Jalandhar maps */}
                <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Customized SVG Map Vector elements */}
                <svg className="absolute inset-0 w-full h-full z-10 p-4" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Streets */}
                  <path d="M 20 20 L 380 180" stroke="#1e293b" strokeWidth="6" />
                  <path d="M 380 40 L 20 180" stroke="#1e293b" strokeWidth="4" />
                  <path d="M 120 10 L 120 190" stroke="#10172a" strokeWidth="8" />
                  <path d="M 50 120 L 350 120" stroke="#1e293b" strokeWidth="6" strokeDasharray="4 4" />
                  
                  {/* Landmarks text */}
                  <text x="128" y="30" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Model House Rd</text>
                  <text x="60" y="80" fill="#475569" fontSize="7" fontFamily="sans-serif">Tej Mohan Nagar</text>
                  
                  {/* Sood Hospital */}
                  <rect x="180" y="70" width="60" height="30" rx="4" fill="#0f172a" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.4" />
                  <text x="186" y="84" fill="#ef4444" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Sood Hospital</text>
                  <text x="186" y="94" fill="#64748b" fontSize="6" fontFamily="sans-serif">(Landmark)</text>
                  
                  {/* British Interiors Point */}
                  <circle cx="150" cy="115" r="25" fill="#f59e0b" fillOpacity="0.1" />
                  <circle cx="150" cy="115" r="6" fill="#f59e0b" />
                  <circle cx="150" cy="115" r="1.5" fill="#fff" />
                  <text x="115" y="148" fill="#fff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">BRITISH INTERIORS</text>
                  <text x="135" y="158" fill="#d97706" fontSize="7" fontWeight="bold" fontFamily="sans-serif">⭐ 5.0 Rating</text>
                </svg>

                {/* Floating GPS instructions */}
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/10 transition-colors z-20 flex items-center justify-center">
                  <div className="bg-slate-900/90 border border-white/10 px-4 py-2 rounded-xl text-center shadow-lg group-hover:scale-105 transition-transform flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
                    <span className="font-sans text-xs text-slate-100 font-semibold tracking-wide">
                      Open in Google Maps
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </ScrollReveal>

          {/* Right Column Consultation Request Form (Span 7) */}
          <ScrollReveal direction="right" delay={150} duration={800} className="lg:col-span-7 w-full">
            <div className="card-glass rounded-3xl p-6 md:p-8 shadow-2xl relative">
              
              {formSubmitted ? (
                /* Success booking display card */
                <div id="booking-success-card" className="py-12 px-4 text-center flex flex-col items-center gap-5 justify-center">
                  <div className="w-16 h-16 bg-gold-500/10 text-gold-400 border border-gold-500/30 rounded-full flex items-center justify-center animate-pulse">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-2xl font-bold text-white">Inquiry Received Successfully!</h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-300 font-light max-w-md mx-auto leading-relaxed">
                      Thank you <strong className="text-white font-medium">{formData.name}</strong>. Mr. kunwar (Showroom Owner) & our design team will contact you back shortly on info line <strong className="text-gold-200 font-semibold font-mono">{formData.phone}</strong>.
                    </p>
                  </div>

                  <div className="bg-slate-950/60 rounded-2xl p-4 border border-white/5 text-left max-w-md w-full flex flex-col gap-2.5 mt-2">
                    <div className="flex justify-between font-mono text-[10px] text-slate-400">
                      <span>INQUIRY CODE:</span>
                      <span className="font-semibold text-gold-400">#BI-{Math.floor(1000 + Math.random() * 9000)}</span>
                    </div>
                    <div className="flex justify-between font-mono text-[10px] text-slate-400 border-t border-white/5 pt-2">
                      <span>CHOSEN OPTION:</span>
                      <span className="text-slate-200">{formData.service.replace('-', ' ').toUpperCase()}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleResetForm}
                    className="mt-4 px-6 py-2.5 bg-slate-900 hover:bg-slate-850 border border-white/5 hover:border-gold-500/20 rounded-xl font-sans text-xs font-semibold uppercase tracking-wider text-slate-300 transition-colors cursor-pointer"
                  >
                    Send Another Consult Card
                  </button>
                </div>
              ) : (
                /* Normal Interactive Form layout */
                <form id="consultation-form" onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-8 h-8 bg-gold-500/10 text-gold-400 rounded-lg flex items-center justify-center border border-gold-500/20">
                      <Calendar className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">Book Design Appointment</h3>
                  </div>

                  {formError && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 font-sans text-xs flex items-start gap-2">
                      <span className="font-bold">⚠️ Error:</span>
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Input Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-name" className="font-mono text-[9px] tracking-widest text-slate-400 uppercase font-semibold">
                        Your Full Name *
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Suku Phull"
                        value={formData.name}
                        onChange={handleChange}
                        className="input-premium bg-slate-950/80 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 font-sans"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-phone" className="font-mono text-[9px] tracking-widest text-slate-400 uppercase font-semibold">
                        Punjab Phone / WhatsApp Number *
                      </label>
                      <input
                        id="form-phone"
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 098150 10422"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-premium bg-slate-950/80 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 font-mono"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-service" className="font-mono text-[9px] tracking-widest text-slate-400 uppercase font-semibold">
                      Design Space of Interest
                    </label>
                    <select
                      id="form-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="input-premium bg-slate-950/80 rounded-xl px-4 py-3 text-sm text-slate-100 font-sans cursor-pointer"
                    >
                      <option value="media-wall">Custom TV Media Wall Solution</option>
                      <option value="pvc-ceiling">Damp-Proof PVC Ceiling Install</option>
                      <option value="balcony">Balcony Transformation with Grass</option>
                      <option value="wallpaper- Wainscot">Wainscoting French Trim & Wallpapers</option>
                      <option value="partition-wall">Architectural Backlit Partition</option>
                      <option value="budget-friendly">General Budget-Friendly Makeover</option>
                    </select>
                  </div>

                  {/* Remarks and Details */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <label htmlFor="contact-remarks" className="font-mono text-[9px] tracking-widest text-slate-400 uppercase font-semibold">
                        Project Specifications & Dimensions
                      </label>
                      <span className="font-mono text-[9px] tracking-wider text-slate-500">
                        Optional
                      </span>
                    </div>
                    <textarea
                      id="contact-remarks"
                      name="remarks"
                      rows={4}
                      placeholder="e.g. Living room TV media wall width 12ft, height 9ft with white marble tiles background..."
                      value={formData.remarks}
                      onChange={handleChange}
                      className="input-premium bg-slate-950/80 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-100 placeholder-slate-500 font-sans resize-none"
                    />
                  </div>

                  {/* Informational reassurance lines */}
                  <p className="text-[11px] text-slate-500 font-sans leading-relaxed">
                    By submitting, your data is saved in your local workspace sandbox cache. No promotional emails, we strictly contact via WhatsApp/phone as Jalandhar showroom neighbors.
                  </p>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-premium w-full mt-2 py-4 bg-gold-500 hover:bg-gold-400 disabled:opacity-50 text-slate-950 font-sans text-xs font-bold uppercase tracking-[0.15em] rounded-2xl shadow-lg shadow-gold-500/10 flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    {isLoading ? (
                      <span className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                        <span>Send Free Consultation Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
