/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, MessageSquare, Quote, ShieldAlert, BadgeCheck } from 'lucide-react';
import { REVIEWS } from '../data';
import { ReviewItem } from '../types';
import ScrollReveal from './ScrollReveal';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-slate-900 relative scroll-mt-12">
      {/* Background ambient lighting glow */}
      <div className="absolute top-[30%] left-[10%] w-72 h-72 bg-gold-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-gold-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal id="testimonials-header" className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold-400 font-semibold mb-2">
            Social Proof of Trust
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-white mb-4 italic">
            Customer <span className="text-gold-500 not-italic font-bold">Testimonials</span>
          </h2>
          <div className="h-0.5 w-16 bg-gold-500/30 mb-6" />
          <p className="font-sans text-slate-350 text-sm font-light leading-relaxed">
            Read authentic reviews from families and business owners in Jalandhar. Backed by our flawless 5.0 Star Rating across 189+ independent platforms.
          </p>
        </ScrollReveal>

        {/* Master Rating Stat Bar Badge */}
        <ScrollReveal duration={800} className="card-glass rounded-3xl p-6 md:p-8 max-w-4xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-left select-none">
          <div className="flex flex-col items-start gap-1">
            <span className="font-mono text-[10px] tracking-widest text-gold-400 uppercase font-semibold">
              OVERALL SCORE
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl font-extrabold text-white">5.0</span>
              <span className="text-sm font-sans text-slate-400">/ 5.0 Stars</span>
            </div>
            <div className="flex text-gold-500 mt-1">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
          </div>

          <div className="flex flex-col items-start gap-1 border-t md:border-t-0 md:border-l md:border-r border-white/5 pt-6 md:pt-0 md:px-8">
            <span className="font-mono text-[10px] tracking-widest text-gold-400 uppercase font-semibold">
              AUTHENTIC METRIC
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-3xl font-bold text-white">189+</span>
              <span className="text-xs text-slate-300 font-sans font-medium">Verified Reviews</span>
            </div>
            <span className="text-[11px] text-slate-400 font-sans mt-0.5 leading-normal">
              100% active, checkable client submissions near Basti Sheikh and Jalandhar city.
            </span>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 border border-gold-500/20 text-gold-400">
              <BadgeCheck className="w-5.5 h-5.5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display text-xs font-bold text-white">Perfect Record Excellence</span>
              <span className="text-[11px] text-slate-450 font-sans mt-0.5 leading-relaxed">
                Reputed for honest dealing, smart material rates, and flawless on-budget project delivery.
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonials Masonry Cards Grid */}
        <div id="testimonials-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {REVIEWS.map((review: ReviewItem, idx: number) => (
            <ScrollReveal
              key={review.id}
              delay={(idx % 2) * 150}
              duration={750}
              className="h-full"
            >
              <div
                id={`review-card-${review.id}`}
                className="card-glass rounded-3xl p-6 md:p-8 flex flex-col justify-between text-left shadow-xl relative h-full"
              >
                {/* Decorative Quote Icon */}
                <div className="absolute top-6 right-6 opacity-[0.03]">
                  <Quote className="w-16 h-16 text-white" />
                </div>

                <div className="flex flex-col gap-5">
                  {/* Visual Stars */}
                  <div className="flex text-gold-500">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current animate-pulse" />
                    ))}
                  </div>

                  {/* Review Text block */}
                  <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                {/* Reviewer Profile Card info */}
                <div className="flex items-center gap-3 border-t border-white/5 pt-5 mt-6">
                  <div className="w-10 h-10 rounded-full bg-gold-500/15 flex items-center justify-center text-gold-400 border border-gold-500/20 font-display text-sm font-semibold select-none">
                    {review.author.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-medium text-xs text-slate-100">
                      {review.author}
                    </span>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                      <span className="text-gold-400">{review.location}</span>
                      <span>•</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
