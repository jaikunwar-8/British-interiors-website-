/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Calculator, HelpCircle, Check, HelpCircleIcon, Layers, Sliders } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface SpaceTier {
  id: string;
  name: string;
  baseRatePerSqFt: number; // in INR
  minSqFt: number;
}

export default function Estimator() {
  const [selectedSpace, setSelectedSpace] = useState<string>('media-wall');
  const [width, setWidth] = useState<number>(10);
  const [height, setHeight] = useState<number>(8);
  const [materialTier, setMaterialTier] = useState<'budget' | 'premium' | 'luxury'>('premium');
  const [includeLighting, setIncludeLighting] = useState<boolean>(true);
  const [totalEstimate, setTotalEstimate] = useState<number>(0);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  // Configuration map for Indian market rates equivalent to British Interiors budget deals
  const baseRates: Record<string, number> = {
    'media-wall': 280,       // INR per sq ft
    'ceiling': 120,          // INR per sq ft
    'balcony': 160,          // INR per sq ft
    'wallpaper-molding': 140, // INR per sq ft
    'partition-wall': 380,   // INR per sq ft
  };

  // Material multipliers
  const tierMultipliers = {
    budget: 0.9,       // Compact smart budget layout
    premium: 1.4,      // High end standard
    luxury: 2.3,       // CNC layouts, marble slabs, backlights
  };

  const calculateEstimate = () => {
    const area = width * height;
    const baseRate = baseRates[selectedSpace] || 150;
    const multiplier = tierMultipliers[materialTier];
    
    let subtotal = area * baseRate * multiplier;
    
    // Additional options
    if (includeLighting) {
      // Backlights addition based on linear feet periphery approximately (2*(W+H))
      const perimeter = 2 * (width + height);
      subtotal += perimeter * 180; // Lights cost per linear foot
    }

    // Direct installation flat buffer
    subtotal += 3500; 

    setTotalEstimate(Math.round(subtotal));
  };

  // Re-run estimator whenever variables alter
  useEffect(() => {
    calculateEstimate();
  }, [selectedSpace, width, height, materialTier, includeLighting]);

  const handleApplyToForm = () => {
    // Populate simple local states or update form field directly
    const formElement = document.getElementById('contact-remarks') as HTMLTextAreaElement;
    if (formElement) {
      formElement.value = `Hi British Interiors! I designed an estimate using your calculator:\n- Space: ${selectedSpace.replace('-', ' ').toUpperCase()}\n- Sizing: ${width}ft x ${height}ft (${width * height} sq.ft)\n- Quality Tier: ${materialTier.toUpperCase()}\n- Lighting: ${includeLighting ? 'Include LEDs' : 'None'}\n- Indicated Budget: ₹${totalEstimate.toLocaleString('en-IN')}\nLet's discuss my custom design plan!`;
      
      const formSection = document.getElementById('contact');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
        // Pulse animation target visually
        formElement.classList.add('ring-2', 'ring-gold-400');
        setTimeout(() => {
          formElement.classList.remove('ring-2', 'ring-gold-400');
        }, 2000);
      }
    }
  };

  return (
    <section id="estimator" className="py-24 px-6 bg-slate-900 relative scroll-mt-12">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text/Intro Col (Span 5) */}
          <ScrollReveal direction="left" duration={800} className="lg:col-span-5 flex flex-col items-start text-left gap-4">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold-400 font-semibold mb-1 flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              <span>Smart Planning Tool</span>
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-normal text-white italic">
              Budget <span className="text-gold-500 not-italic font-bold">Planner</span>
            </h2>
            <div className="h-0.5 w-16 bg-gold-500/30 my-2" />
            <p className="font-sans text-sm text-slate-350 font-light leading-relaxed">
              We believe in honest deals, crystal-clear pricing, and no surprise charges. Select your intended room parameters to obtain a realistic price guideline based on current materials in Punjab.
            </p>

            <div className="flex flex-col gap-3 mt-4 w-full">
              <div className="flex gap-3 items-start bg-slate-950/60 p-4 rounded-2xl border border-white/5">
                <div className="w-8 h-8 rounded-full bg-gold-500/15 flex items-center justify-center shrink-0 border border-gold-500/30 text-gold-400 font-mono text-xs font-bold">1</div>
                <div className="flex flex-col">
                  <span className="font-display font-semibold text-xs text-white">Select Your Room Space</span>
                  <span className="text-[11px] text-slate-400 font-sans">Choose between media walls, false ceiling options, or plant designs.</span>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-slate-950/60 p-4 rounded-2xl border border-white/5">
                <div className="w-8 h-8 rounded-full bg-gold-500/15 flex items-center justify-center shrink-0 border border-gold-500/30 text-gold-400 font-mono text-xs font-bold">2</div>
                <div className="flex flex-col">
                  <span className="font-display font-semibold text-xs text-white">Slide Sizing Dimensions</span>
                  <span className="text-[11px] text-slate-400 font-sans">Toggle width and height guidelines corresponding to your specific room walls.</span>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-slate-950/60 p-4 rounded-2xl border border-white/5">
                <div className="w-8 h-8 rounded-full bg-gold-500/15 flex items-center justify-center shrink-0 border border-gold-500/30 text-gold-400 font-mono text-xs font-bold">3</div>
                <div className="flex flex-col">
                  <span className="font-display font-semibold text-xs text-white">Lock Estimate to Booking Form</span>
                  <span className="text-[11px] text-slate-400 font-sans">Click apply to auto-paste calculated values straight into the request form.</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Calculator Widget Col (Span 7) */}
          <ScrollReveal direction="right" duration={800} delay={150} className="lg:col-span-7">
            <div className="card-glass rounded-3xl p-6 md:p-8 shadow-2xl relative">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Space Selector Left */}
                <div className="flex flex-col gap-4 text-left">
                  <label className="font-mono text-[10px] tracking-wider text-slate-400 uppercase font-semibold">
                    1. CHOOSE SPACE CATEGORY
                  </label>
                  <div className="flex flex-col gap-2">
                    {[
                      { id: 'media-wall', label: 'Custom TV Media Wall' },
                      { id: 'ceiling', label: 'PVC False Drop Ceiling' },
                      { id: 'balcony', label: 'Balcony Wood/Grass Makeover' },
                      { id: 'wallpaper-molding', label: 'Classic Wainscot/Wallpaper' },
                      { id: 'partition-wall', label: 'Backlit Arched Partition' },
                    ].map((sp) => (
                      <button
                        key={sp.id}
                        type="button"
                        onClick={() => setSelectedSpace(sp.id)}
                        className={`btn-premium w-full py-2.5 px-4 rounded-xl font-sans text-xs font-medium text-left flex items-center justify-between border ${
                          selectedSpace === sp.id
                            ? 'bg-gold-500/10 border-gold-500/40 text-white shadow-inner font-semibold'
                            : 'bg-slate-900/50 border-white/5 text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                        }`}
                      >
                        <span>{sp.label}</span>
                        {selectedSpace === sp.id && <Check className="w-3.5 h-3.5 text-gold-400" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Controls Right */}
                <div className="flex flex-col gap-5 text-left">
                  {/* Space Dimension Sliders */}
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase font-semibold">
                        2. WIDTH RANGE
                      </span>
                      <span className="font-mono text-sm font-bold text-white bg-slate-900 px-2 py-0.5 rounded border border-white/5">
                        {width} Feet
                      </span>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="30"
                      value={width}
                      onChange={(e) => setWidth(parseInt(e.target.value))}
                      className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase font-semibold">
                        3. HEIGHT RANGE
                      </span>
                      <span className="font-mono text-sm font-bold text-white bg-slate-900 px-2 py-0.5 rounded border border-white/5">
                        {height} Feet
                      </span>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="18"
                      value={height}
                      onChange={(e) => setHeight(parseInt(e.target.value))}
                      className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
                    />
                  </div>

                  {/* Material Tier Radios */}
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase font-semibold">
                      4. MATERIAL QUALITY TIER
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {(['budget', 'premium', 'luxury'] as const).map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setMaterialTier(tier)}
                          className={`btn-premium py-2 px-1 text-center font-sans text-[10px] font-bold uppercase tracking-wider rounded-xl border ${
                            materialTier === tier
                              ? 'bg-gold-500 text-slate-950 border-gold-500 font-semibold shadow-lg shadow-gold-500/10'
                              : 'bg-slate-900/50 border-white/5 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Extras lighting switch */}
                  <div className="flex items-center justify-between bg-slate-900/50 rounded-2xl p-4 border border-white/5 mt-1">
                    <div className="flex flex-col">
                      <span className="font-display font-semibold text-xs text-white">Include Cove Profile LEDs</span>
                      <span className="text-[9px] text-slate-400 font-sans">Warm indirect ambient strips on board edges</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIncludeLighting(!includeLighting)}
                      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        includeLighting ? 'bg-gold-400' : 'bg-slate-700'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-slate-950 shadow-lg ring-0 transition duration-200 ease-in-out ${
                          includeLighting ? 'translate-x-4' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                </div>

              </div>

              {/* Estimate Results banner */}
              <div className="bg-slate-950/80 border border-gold-500/10 rounded-2xl p-6 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 select-all">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase leading-none mb-1">
                    ESTIMATED BUDGET GUIDE (MATERIAL + LABOUR)
                  </span>
                  <span className="font-sans text-[11px] text-gold-400 font-light">
                    Jalandhar Showroom Rate • Verified Transparent Deal
                  </span>
                </div>

                <div className="flex flex-col items-center md:items-end">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    ₹{totalEstimate.toLocaleString('en-IN')}*
                  </span>
                  <span className="text-[9px] text-slate-500 font-sans tracking-wide leading-none mt-1">
                    *Taxes & customized designs may vary slightly
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleApplyToForm}
                className="btn-premium w-full mt-6 py-4 bg-gold-400 hover:bg-gold-300 text-slate-950 font-sans text-xs font-bold uppercase tracking-[0.15em] rounded-2xl shadow-lg shadow-gold-500/10 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sliders className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                <span>Apply & Formulate Inquiry Card</span>
              </button>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
