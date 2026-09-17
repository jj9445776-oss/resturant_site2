import React from 'react';
import { Award, HeartHandshake, Flame, Sparkles, CheckCircle2 } from 'lucide-react';
import { restaurantConfig } from '../config/restaurant';

export const IntroStory: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0E0B09] border-t border-amber-950/30 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Layered Imagery & Mughal Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-2xl shadow-black/80 aspect-4/3 relative group">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=900&auto=format&fit=crop"
                  alt="Dastaan Royal Dining Hall Lahore"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-mono font-semibold">
                    The Grand Dining Hall • MM Alam Road
                  </span>
                  <p className="text-sm text-neutral-300 mt-1">
                    Echoing the arched marble courtyards of the Lahore Fort.
                  </p>
                </div>
              </div>

              {/* Overlapping Floating Badge Image */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 w-44 sm:w-56 rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-2xl shadow-amber-950/50 bg-[#181410] p-2 hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400&auto=format&fit=crop"
                  alt="Live Charcoal Skewers"
                  className="w-full h-28 object-cover rounded-xl"
                  loading="lazy"
                />
                <div className="p-2 text-center">
                  <span className="text-[11px] font-bold text-amber-300 block uppercase tracking-wider">
                    Live Charcoal Grilling
                  </span>
                  <span className="text-[9px] text-neutral-400">
                    Hand-turned over babool coals
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Story & Philosophy Content */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-mono text-amber-400 font-semibold block">
                ABOUT DASTAAN RESTAURANT
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif leading-tight">
                WHERE CULINARY <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
                  HERITAGE MEETS CRAFT
                </span>
              </h2>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
              Founded on the belief that royal Mughlai and Pakistani gastronomy should be experienced with absolute purity, <strong className="text-white font-semibold">Dastaan</strong> brings centuries-old kitchen techniques to life on Lahore's iconic MM Alam Road.
            </p>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              We reject artificial flavor powders, pre-packaged pastes, and frozen meats. From our hand-ground whole spices sourced from the historic Akbari Mandi to slow-cooked Nihari broths simmered for 10 hours overnight, our kitchen is governed by honesty and warmth.
            </p>

            {/* Checklist of Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero Frozen Meats • Fresh Daily</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Pure Organic Desi Ghee</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Authentic Babool Charcoal Sigri</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Private Family Banquet Suites</span>
              </div>
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {restaurantConfig.stats.map((stat, i) => (
                <div key={i} className="space-y-0.5">
                  <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono block">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-white block uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className="text-[10px] text-neutral-400 block">
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
