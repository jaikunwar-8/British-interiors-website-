/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Layout, Layers, Leaf, Sparkles, Compass, Home, ChevronRight } from 'lucide-react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';
import ScrollReveal from './ScrollReveal';

export default function Services() {
  // Simple icon selector based on dynamic string representation
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-gold-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-gold-400" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-gold-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-gold-400" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-gold-400" />;
      case 'Home':
        return <Home className="w-6 h-6 text-gold-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-gold-400" />;
    }
  };

  return (
    <section id="services" className="py-24 px-6 bg-slate-900 relative scroll-mt-12">
      {/* Background radial highlight */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal id="services-header" className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold-400 font-semibold mb-2">
            Tailored Craftsmanship
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-white mb-4 italic">
            Services & <span className="text-gold-500 not-italic font-bold">Custom Solutions</span>
          </h2>
          <div className="h-0.5 w-16 bg-gold-500/30 mb-6" />
          <p className="font-sans text-slate-350 text-sm font-light leading-relaxed">
            Enhancing comfort, protecting structures, and adding luxury touches that stand the test of time. Discover Jalandhar's top custom collections.
          </p>
        </ScrollReveal>

        {/* Services Grid Layout */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: ServiceItem, idx: number) => (
            <ScrollReveal
              key={service.id}
              delay={(idx % 3) * 150}
              duration={700}
              className="h-full"
            >
              <div
                id={`service-card-${service.id}`}
                className="group relative card-glass rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl h-full"
              >
                {/* Card visual elements */}
                <div className="flex flex-col gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center border border-white/10 group-hover:bg-gold-500/10 group-hover:border-gold-500/40 transition-colors">
                    {renderIcon(service.iconName)}
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-gold-100 transition-colors">
                      {service.title}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-gold-400 font-medium">
                      {service.tagline}
                    </span>
                    <p className="font-sans text-sm text-slate-400 font-light leading-relaxed mt-1">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullets lists */}
                  <ul className="flex flex-col gap-2 mt-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-300 font-sans text-xs">
                        <span className="w-1 h-1 bg-gold-400 rounded-full shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom footer cost & trigger */}
                <div className="flex items-center justify-between border-t border-white/5 pt-5 mt-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-sans uppercase tracking-wider text-slate-400">
                      Est. Investment
                    </span>
                    <span className="font-mono text-sm font-bold text-white group-hover:text-gold-200 transition-colors">
                      {service.typicalCost}
                    </span>
                  </div>

                  <a
                    href="#estimator"
                    className="flex items-center gap-1.5 text-slate-300 group-hover:text-gold-200 font-sans text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <span>Estimate</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
