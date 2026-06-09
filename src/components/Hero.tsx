/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden bg-radial from-slate-900 via-slate-950 to-black"
    >
      {/* Background Image Overlay with parallax and premium blur */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/80 to-[#0c0f12] z-10" />
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury living room background"
          className="w-full h-full object-cover object-center scale-105 pointer-events-none opacity-40 filter blur-[1px]"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Left Column Text */}
        <div id="hero-text-block" className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Tagline / Location Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/5 px-3.5 py-1.5 rounded-full select-none">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-gold-400 font-semibold">
              Showroom Jalandhar, Punjab
            </span>
          </div>

          {/* Master Display Heading */}
          <h1 className="font-display text-4.5xl sm:text-5.5.5xl md:text-6xl font-normal text-white leading-[1.1] mb-2 italic">
            Transforming Spaces with <span className="text-gold-500 not-italic font-bold block sm:inline">Classic Elegance</span>
          </h1>

          {/* Subheadline detailing unique value & rating */}
          <p className="font-sans text-sm sm:text-base text-slate-300 font-light max-w-xl leading-relaxed">
            Experience Jalandhar's premier showroom for breathtaking custom <strong className="text-white font-medium">Media Walls</strong>, damp-proof PVC ceiling designs, and artificial balcony oases. Reputed for honest dealings, smart pricing, and direct owner craftsmanship.
          </p>

          {/* Key Quick Bullet Selling Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg mt-1">
            <div className="flex items-center gap-2.5 text-slate-300 font-sans text-xs">
              <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
              <span>Damp-Proof PVC Creative Work</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-300 font-sans text-xs">
              <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
              <span>Budget-Friendly Custom Layouts</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-300 font-sans text-xs">
              <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
              <span>Hassle-Free 1 to 5 Day Completion</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-300 font-sans text-xs">
              <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
              <span>Direct Showroom Owner Guarantee</span>
            </div>
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-6">
            <a
              id="hero-cta-consultation"
              href="#contact"
              className="group btn-premium flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-slate-950 font-sans text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-full shadow-xl shadow-gold-500/10"
            >
              <span>Free Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              id="hero-cta-portfolio"
              href="#portfolio"
              className="btn-premium flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-gold-500 text-gold-500 hover:text-gold-400 font-sans text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-full"
            >
              <span>View Portfolio</span>
            </a>
          </div>
        </div>

        {/* Hero Right Column Card Frame / Trust badge visual */}
        <div id="hero-showcase-card" className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm bg-slate-950/60 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-xl shadow-2xl flex flex-col gap-6 select-none">
            {/* Glowing gold backlighting block */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gold-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 flex items-center justify-center border border-gold-500/30">
                <ShieldCheck className="w-6 h-6 text-gold-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] tracking-widest text-gold-400 uppercase font-semibold">
                  Unmatched Rating
                </span>
                <span className="font-display font-bold text-lg text-white">Punjab's Most Trusted</span>
              </div>
            </div>

            <div className="border-t border-b border-white/5 py-4 my-2 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-xs font-sans">Reviews Rating</span>
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-sm font-bold text-white">5.0</span>
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-xs font-sans">Verified Reviews</span>
                <span className="font-mono text-sm font-bold text-white">189+ Authentic</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-xs font-sans">Showroom Location</span>
                <span className="font-sans text-xs text-slate-300 font-medium truncate max-w-[190px]">
                  Model House Rd, Jalandhar
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1 text-center bg-slate-900/50 rounded-2xl p-4 border border-white/5">
              <span className="font-display text-2xl font-bold text-gold-300">100% Honest Deals</span>
              <span className="text-[11px] text-slate-400 font-sans tracking-wide">
                Direct owner interaction. Best dealing skills & clear budget estimations.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative chevron pointing downwards */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
        <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500">Explore Services</span>
        <ChevronDown className="w-4 h-4 text-slate-400 animate-bounce" />
      </div>
    </section>
  );
}
