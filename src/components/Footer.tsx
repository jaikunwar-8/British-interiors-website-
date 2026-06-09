/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Phone, Clock, ArrowUp, ShieldCheck, Award } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-slate-950 border-t border-white/5 pt-16 pb-8 px-6 text-slate-300">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Upper footer grids wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 text-left">
          
          {/* Brand Col (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-white tracking-tight">
                British Interiors
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-gold-400 font-medium mt-0.5">
                Elite Jalandhar Showroom
              </span>
            </div>
            
            <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-sm">
              Creating breathtaking bespoke spaces across Punjab for over 15 years. We specialize in custom backlit media panels, artificial balcony transformations, and damp-proof designer false ceilings. Honesty is our motto!
            </p>

            <div className="flex items-center gap-2 bg-slate-900 border border-white/5 py-1.5 px-3 rounded-xl select-none">
              <Award className="w-4 h-4 text-gold-400" />
              <span className="font-mono text-[10px] text-slate-300 tracking-wider font-semibold">
                ⭐ Rated 5.0 by 189 Customers
              </span>
            </div>
          </div>

          {/* Quick Menu Col (Span 2) */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
              Explore Links
            </span>
            <div className="flex flex-col gap-2.5 font-sans text-xs sm:text-sm">
              <a href="#home" className="hover:text-gold-300 transition-colors">Home Banner</a>
              <a href="#services" className="hover:text-gold-300 transition-colors">What We Do</a>
              <a href="#portfolio" className="hover:text-gold-300 transition-colors">Recent Works</a>
              <a href="#estimator" className="hover:text-gold-300 transition-colors">Live Estimator</a>
              <a href="#testimonials" className="hover:text-gold-300 transition-colors">Customer Words</a>
              <a href="#contact" className="hover:text-gold-300 transition-colors">Get Appointed</a>
            </div>
          </div>

          {/* Core Services Links Col (Span 3) */}
          <div className="lg:col-span-3 flex flex-col items-start gap-4">
            <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
              Popular Services
            </span>
            <div className="flex flex-col gap-2.5 font-sans text-xs text-slate-400">
              <span className="hover:text-white transition-colors">Marble Backlit Media Walls</span>
              <span className="hover:text-white transition-colors">Waterproof PVC False Ceilings</span>
              <span className="hover:text-white transition-colors">Artificial Grass Balcony Designs</span>
              <span className="hover:text-white transition-colors">Polyurethane Wainscoting Trim</span>
              <span className="hover:text-white transition-colors">Textured Wallpaper Panel Sheets</span>
              <span className="hover:text-white transition-colors">Mint-Blue Translucent Acrylics</span>
            </div>
          </div>

          {/* Office/Map Detail Col (Span 3) */}
          <div className="lg:col-span-3 flex flex-col items-start gap-4 font-sans text-xs">
            <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
              Jalandhar Showroom
            </span>
            
            <div className="flex flex-col gap-3.5 text-slate-400">
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  3581, Model House Rd, near Sood Hospital, Tej Mohan Nagar, Basti Sheikh, Jalandhar, PB 144002
                </span>
              </div>

              <div className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:09815010422" className="text-white hover:text-gold-300 transition-colors font-medium">
                  098150 10422
                </a>
              </div>

              <div className="flex gap-2.5 items-start">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Open Mon – Sat: 9am – 8pm<br />(Closed on Sundays)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower footer copyright & scroll top bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left select-none">
            <span className="font-sans text-[11px] text-slate-500">
              © {new Date().getFullYear()} British Interiors. All Rights Reserved.
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="font-sans text-[10px] text-slate-500 hover:text-slate-400 flex items-center gap-1.5 uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>100% Honest Pricing Guaranteed</span>
            </span>
          </div>

          {/* Back to top scroll button */}
          <button
            onClick={handleScrollToTop}
            className="group p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-white/5 hover:border-gold-500/20 text-slate-400 hover:text-white transition-all cursor-pointer flex items-center gap-2 text-xs font-semibold uppercase tracking-wider select-none"
            aria-label="Scroll to top"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4 text-slate-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
