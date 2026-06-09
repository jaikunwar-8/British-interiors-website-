/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, Info, Layers, Tag } from 'lucide-react';
import { PORTFOLIO } from '../data';
import { PortfolioItem } from '../types';
import ScrollReveal from './ScrollReveal';

const getUnsplashFallback = (id: string, size: number = 600) => {
  const mappings: Record<string, string> = {
    '1': `https://images.unsplash.com/photo-1593696130897-30e1d2bcf366?auto=format&fit=crop&q=80&w=${size}`,
    '2': `https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=${size}`,
    '3': `https://images.unsplash.com/photo-1558603668-6570496b66f8?auto=format&fit=crop&q=80&w=${size}`,
    '4': `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=${size}`,
    '5': `https://images.unsplash.com/photo-1565538810844-1e1191b20c07?auto=format&fit=crop&q=80&w=${size}`,
    '6': `https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=${size}`,
    '7': `https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=${size}`,
    '8': `https://images.unsplash.com/photo-1530731141654-5993c3016c77?auto=format&fit=crop&q=80&w=${size}`,
    '9': `https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=${size}`,
  };
  return mappings[id] || `https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=${size}`;
};

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showFileNames, setShowFileNames] = useState<boolean>(true);

  // Filter portfolio items
  const filteredItems = selectedCategory === 'all'
    ? PORTFOLIO
    : PORTFOLIO.filter(item => item.category === selectedCategory);

  // Categories list
  const categories = [
    { value: 'all', label: 'All Works' },
    { value: 'media-wall', label: 'Media Walls' },
    { value: 'ceiling', label: 'PVC Ceilings' },
    { value: 'balcony-outdoor', label: 'Balcony & Grass' },
    { value: 'wall-accent', label: 'Wall Accents' },
    { value: 'bedroom-interior', label: 'Bedroom' },
  ];

  // Lightbox handlers
  const openLightbox = (id: string) => {
    const index = PORTFOLIO.findIndex(item => item.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (lightboxIndex === null) return;
    let nextIndex = direction === 'next' ? lightboxIndex + 1 : lightboxIndex - 1;

    // Boundary constraints
    if (nextIndex >= PORTFOLIO.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = PORTFOLIO.length - 1;

    setLightboxIndex(nextIndex);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  // Current active lightbox item
  const currentItem: PortfolioItem | null = lightboxIndex !== null ? PORTFOLIO[lightboxIndex] : null;

  return (
    <section id="portfolio" className="py-24 px-6 bg-slate-900 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal duration={850} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col items-start text-left">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold-400 font-semibold mb-2">
              Recent Projects
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-normal text-white italic">
              Signature <span className="text-gold-500 not-italic font-bold">Work Gallery</span>
            </h2>
            <div className="h-0.5 w-16 bg-gold-500/30 mt-4 mb-3" />
            <p className="font-sans text-sm text-slate-350 font-light max-w-xl">
              Authentic luxury transformations crafted by British Interiors in Jalandhar. Hover or click on any project card to inspect design, materials, and build timelines.
            </p>
          </div>

          {/* Toggle File Name helper for original mapping */}
          <div className="flex items-center gap-3 self-start md:self-end bg-slate-900/60 border border-white/10 px-4 py-2.5 rounded-full select-none">
            <label htmlFor="filename-toggle" className="font-mono text-[10px] tracking-wider text-slate-300 font-medium cursor-pointer">
              SHOW SRC FILENAMES:
            </label>
            <button
              id="filename-toggle"
              onClick={() => setShowFileNames(!showFileNames)}
              className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                showFileNames ? 'bg-gold-500' : 'bg-slate-700'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-slate-950 shadow-lg ring-0 transition duration-200 ease-in-out ${
                  showFileNames ? 'translate-x-4' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </ScrollReveal>

        {/* Filter Categories Bar */}
        <ScrollReveal delay={150} duration={700} id="portfolio-categories" className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.value}
              id={`portfolio-cat-filter-${cat.value}`}
              onClick={() => setSelectedCategory(cat.value)}
              className={`font-sans text-xs font-bold uppercase tracking-[0.15em] px-6 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.value
                  ? 'bg-gold-500 text-slate-950 shadow-lg shadow-gold-500/10'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-100 hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </ScrollReveal>

        {/* Portfolio Masonry/Grid Layout */}
        <div id="portfolio-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item: PortfolioItem, idx: number) => (
            <ScrollReveal
              key={item.id}
              delay={(idx % 3) * 100}
              duration={750}
              className="h-full"
            >
              <div
                id={`portfolio-item-card-${item.id}`}
                onClick={() => openLightbox(item.id)}
                className="group relative card-glass rounded-3xl overflow-hidden cursor-pointer shadow-xl h-full"
              >
                {/* Image Frame Container */}
                <div className="relative aspect-square w-full img-zoom-container bg-slate-900 flex items-center justify-center">
                  {/* Fallback pattern when offline/loading */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-80" />
                  
                  {/* Simulated original layout attachment names overlay */}
                  {showFileNames && (
                    <div className="absolute top-3 left-3 z-30 bg-slate-950/90 border border-gold-500/30 text-gold-300 font-mono text-[9px] tracking-wider uppercase px-2.5 py-1 rounded">
                      src="{item.imageSrc}"
                    </div>
                  )}

                  <div className="absolute top-3 right-3 z-30 bg-black/60 backdrop-blur-md text-slate-200 font-sans text-[10px] tracking-wider uppercase px-2 py-1 rounded-full flex items-center gap-1 leading-none">
                    <Tag className="w-3 h-3 text-gold-400" />
                    <span>{item.categoryLabel}</span>
                  </div>

                  <img
                    src={item.imageSrc}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = getUnsplashFallback(item.id, 600);
                    }}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />

                  {/* Hover Visual Reveal Overlay */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-center items-center gap-3">
                    <div className="w-12 h-12 bg-gold-500 text-white rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-5 h-5 text-slate-950" />
                    </div>
                    <span className="font-sans text-xs uppercase tracking-widest text-slate-200">
                      Inspect Design Details
                    </span>
                  </div>
                </div>

                {/* Title & Info Footer of Card */}
                <div className="p-5 text-left flex flex-col gap-1.5 border-t border-white/5">
                  <h3 className="font-display text-base font-bold text-white group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-4 text-[11px] text-slate-400 font-mono">
                    <span>Build: <strong className="text-slate-200 font-normal">{item.duration}</strong></span>
                    <span className="w-1.5 h-1.5 bg-slate-700 rounded-full" />
                    <span className="truncate">{item.materials[0]}...</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Lightbox Modal Popup Overlay */}
        {currentItem && (
          <div
            id="portfolio-lightbox-overlay"
            className="fixed inset-0 bg-slate-950/98 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-6"
          >
            {/* Background click dismiss */}
            <div className="absolute inset-0 -z-10" onClick={closeLightbox} />

            {/* Core Box */}
            <div
              id="lightbox-frame-modal"
              className="relative bg-[#0d1115] border border-white/10 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] lg:max-h-[85vh]"
            >
              {/* Close Button top-right */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-40 p-2.5 rounded-full bg-slate-900 border border-white/15 text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Column Left (Span 7) */}
              <div className="relative lg:col-span-7 bg-black min-h-[300px] h-full flex items-center justify-center group overflow-hidden">
                <img
                  src={currentItem.imageSrc}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = getUnsplashFallback(currentItem.id, 1200);
                  }}
                  alt={currentItem.alt}
                  className="w-full h-full object-contain pointer-events-none"
                  referrerPolicy="no-referrer"
                />

                {/* Left Arrow Navigation */}
                <button
                  onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 border border-white/5 hover:border-gold-500/20 text-slate-300 hover:text-white focus:outline-none hover:bg-slate-800 transition"
                  aria-label="Previous Project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow Navigation */}
                <button
                  onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 border border-white/5 hover:border-gold-500/20 text-slate-300 hover:text-white focus:outline-none hover:bg-slate-800 transition"
                  aria-label="Next Project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Indicator Overlay */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-950/80 border border-white/10 px-3.5 py-1.5 rounded-full text-[10px] font-mono text-slate-300 select-none">
                  IMAGE {lightboxIndex + 1} OF {PORTFOLIO.length}
                </div>
              </div>

              {/* Info Column Right (Span 5) */}
              <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto text-left h-full max-h-[450px] lg:max-h-full">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gold-400 font-semibold flex items-center gap-1.5 leading-none">
                      <Tag className="w-3.5 h-3.5" />
                      <span>{currentItem.categoryLabel}</span>
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                      {currentItem.title}
                    </h3>
                  </div>

                  {showFileNames && (
                    <div className="bg-slate-950 border border-gold-500/10 rounded-xl p-3 flex flex-col gap-1 select-all">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 leading-none">
                        IMAGE FILENAME IN CODEPATH:
                      </span>
                      <code className="font-mono text-[10px] text-gold-300 font-semibold whitespace-pre-wrap break-all leading-relaxed">
                        src="{currentItem.imageSrc}"
                      </code>
                    </div>
                  )}

                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-semibold">
                      Architectural Overview
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {currentItem.description}
                    </p>
                  </div>

                  {/* Materials tags */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-semibold">
                      Materials & Finishes Used
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentItem.materials.map((mat, idx) => (
                        <span key={idx} className="bg-slate-900 border border-white/5 rounded-lg px-2.5 py-1 text-[11px] text-slate-300 font-sans leading-none">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-semibold">
                      Design Highlights
                    </span>
                    <ul className="flex flex-col gap-1.5 text-xs text-slate-300 font-sans">
                      {currentItem.highlights.map((high, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-gold-400 rounded-full" />
                          <span>{high}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Box Footer Timeline & Action */}
                <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-8">
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 leading-none mb-1">
                      Setup Timeline
                    </span>
                    <span className="font-display font-medium text-base text-white">
                      {currentItem.duration} Completion
                    </span>
                  </div>

                  <a
                    href="#contact"
                    onClick={closeLightbox}
                    className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-slate-950 font-sans text-[11px] font-bold uppercase tracking-[0.15em] px-6 py-3 rounded-full shadow-lg transition-colors"
                  >
                    <span>Request Similar</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
