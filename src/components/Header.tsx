/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Star } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Estimator', href: '#estimator' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/5 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo and Brand */}
        <a href="#home" id="logo-link" className="flex items-center gap-3 select-none group">
          <div className="w-9 h-9 bg-gold-500 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-gold-500/15">
            <span className="font-display text-slate-950 font-bold text-lg leading-none">B</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg md:text-xl font-bold tracking-widest text-white group-hover:text-gold-300 transition-colors uppercase leading-[1.1]">
              British Interiors
            </span>
            <span className="font-mono text-[8px] tracking-[0.25em] uppercase text-gold-400 font-semibold leading-none mt-0.5">
              JALANDHAR'S ELITE DECORATOR
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              id={`nav-${link.href.replace('#', '')}`}
              href={link.href}
              className="font-sans text-sm font-semibold text-slate-300 hover:text-gold-300 transition-colors uppercase tracking-[0.2em] text-[10px]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1.5 bg-slate-900 border border-white/5 px-3.5 py-1.5 rounded-full select-none">
            <div className="flex text-gold-500">
              <Star className="w-3 text-gold-500 fill-current" />
              <Star className="w-3 text-gold-500 fill-current" />
              <Star className="w-3 text-gold-500 fill-current" />
              <Star className="w-3 text-gold-500 fill-current" />
              <Star className="w-3 text-gold-500 fill-current" />
            </div>
            <span className="font-mono text-[9px] text-slate-300 font-bold tracking-wider">
              5.0 (189 REVIEWS)
            </span>
          </div>

          <a
            id="mobile-call-action-desktop"
            href="tel:09815010422"
            className="btn-premium flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-slate-950 font-sans text-[11px] font-bold uppercase tracking-widest px-6 py-3 rounded-full shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20"
          >
            <Phone className="w-3.5 h-3.5 text-slate-950 fill-current" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          id="mobile-menu-backdrop"
          className="fixed inset-0 top-[70px] bg-slate-950/95 backdrop-blur-lg z-40 flex flex-col justify-between py-12 px-8 border-t border-white/5 md:hidden"
        >
          <nav id="mobile-nav" className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                id={`mobile-nav-${link.href.replace('#', '')}`}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display text-2xl font-medium text-slate-100 hover:text-gold-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 text-center items-center">
            <div className="flex items-center gap-1.5 bg-slate-900 border border-white/5 px-4 py-2 rounded-full select-none mb-4">
              <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
              <span className="font-mono text-xs text-slate-200 font-semibold tracking-wider">
                5.0 Stars Rated By 189 Customers
              </span>
            </div>

            <a
              id="mobile-call-action-phone"
              href="tel:09815010422"
              onClick={() => setIsOpen(false)}
              className="btn-premium flex items-center justify-center gap-3 w-full max-w-sm bg-gold-500 text-slate-950 font-sans text-sm font-bold uppercase tracking-widest py-4 rounded-full shadow-lg hover:bg-gold-400"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call 098150 10422</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
