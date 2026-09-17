import React from 'react';
import { 
  Star, 
  Utensils, 
  CalendarDays, 
  Flame, 
  ShieldCheck, 
  Sparkles, 
  Soup, 
  Award,
  ChevronDown,
  MessageCircle
} from 'lucide-react';
import { restaurantConfig } from '../config/restaurant';
import { Hero3DCanvas } from './Hero3DCanvas';

interface HeroProps {
  onViewMenu: () => void;
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewMenu, onOpenReservation }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-24 pb-12 lg:pt-32 lg:pb-16 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#0F0D0B] via-[#0B0907] to-[#120E0B]"
    >
      {/* Background Ambience & Mughal Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-800/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle Mughal Jaali Grid Overlay */}
      <div className="absolute inset-0 bg-mughal-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
            
            {/* Top Sub-eyebrow & Urdu Calligraphy */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
                Authentic Pakistani & Royal Mughal Dining
              </span>
              <span className="font-urdu text-amber-200 text-sm hidden sm:inline">
                ذائقۂ شاہی
              </span>
            </div>

            {/* Main Brand Title & Punchy Headline (inspired by reference layout) */}
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber-500/90 font-mono">
                  EST. 2011 • LAHORE
                </span>
                <span className="w-8 h-[1px] bg-amber-500/40" />
                <span className="text-xs text-neutral-400">MM ALAM ROAD</span>
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-serif">
                ROYAL FLAVORS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
                  DONE RIGHT
                </span>
              </h1>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              100% Halal prime cuts, hand-ground heirloom spices, smoky charcoal sigri grills, and authentic slow-simmered handi karahis that celebrate timeless Pakistani hospitality.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              {/* View Menu CTA */}
              <button
                id="hero-view-menu-btn"
                onClick={onViewMenu}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-xl shadow-amber-600/20 hover:shadow-amber-500/40 transition-all hover:scale-105 active:scale-95"
              >
                <Utensils className="w-4 h-4 text-black" />
                <span>View Full Menu</span>
              </button>

              {/* Reserve Table CTA */}
              <button
                id="hero-reserve-table-btn"
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-amber-200 bg-white/5 hover:bg-white/10 border border-amber-500/30 hover:border-amber-400 transition-all hover:scale-105 active:scale-95"
              >
                <CalendarDays className="w-4 h-4 text-amber-400" />
                <span>Reserve a Table</span>
              </button>

              {/* WhatsApp Quick Order */}
              <a
                id="hero-whatsapp-order-btn"
                href={restaurantConfig.orderingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-xs text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Order</span>
              </a>
            </div>

            {/* Reviews Rating Proof (inspired by reference image) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs sm:text-sm text-neutral-300 font-medium">
                <span className="font-bold text-white">4.9 / 5.0</span>{' '}
                <span className="text-neutral-400">(3,200+ Verified Foodie Reviews)</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Presentation + Stamp Badge */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Circular Heritage Quality Stamp (inspired by the Burger Factory reference badge) */}
            <div className="absolute -top-4 right-4 sm:top-2 sm:right-6 z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-dashed border-amber-400/80 bg-[#14100C]/90 backdrop-blur-md p-2 flex flex-col items-center justify-center text-center shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-300">
              <ShieldCheck className="w-5 h-5 text-amber-400 mb-0.5" />
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-amber-300 leading-tight">
                100% FRESH
              </span>
              <span className="text-[9px] uppercase tracking-tighter text-white font-bold">
                HALAL MEATS
              </span>
              <span className="text-[8px] text-amber-400/80 uppercase font-mono">
                NEVER FROZEN
              </span>
            </div>

            {/* 3D Interactive Hero Canvas */}
            <div className="w-full relative">
              <Hero3DCanvas />
            </div>

          </div>

        </div>
      </div>

      {/* Feature Value Bar (Horizontal 4-grid inspired by user reference banner) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8 lg:mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#14100C]/90 border border-amber-500/20 backdrop-blur-md shadow-2xl shadow-black/60">
          
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                PREMIUM QUALITY
              </h4>
              <p className="text-[11px] sm:text-xs text-neutral-400">
                100% Halal fresh Angus beef & goat mutton.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                CHARCOAL SIGRI
              </h4>
              <p className="text-[11px] sm:text-xs text-neutral-400">
                Smoky skewers grilled over authentic coals.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Soup className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                DESI GHEE HANDI
              </h4>
              <p className="text-[11px] sm:text-xs text-neutral-400">
                Pure country butter & clay pot simmering.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                15+ YEARS HERITAGE
              </h4>
              <p className="text-[11px] sm:text-xs text-neutral-400">
                Celebrated recipes honed by master ustads.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
