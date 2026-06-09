/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Estimator from './components/Estimator';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="app-root-container" className="min-h-screen flex flex-col font-sans bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-gold-500 selection:text-slate-950">
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Content Sections Wrapper */}
      <main className="flex-grow">
        {/* Banner Display hero block */}
        <Hero />

        {/* Our Custom Offerings Service Grid */}
        <Services />

        {/* Filterable Recent Works and Lightbox Panel */}
        <Portfolio />

        {/* Dynamic Interactive Budget Estimator Tool */}
        <Estimator />

        {/* Social Proof Star Testimonials Block */}
        <Testimonials />

        {/* Showroom Map Location & Consultation Booking Form */}
        <Contact />
      </main>

      {/* Global Footer Block */}
      <Footer />
    </div>
  );
}

