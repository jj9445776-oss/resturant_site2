import React from 'react';
import { Award, UtensilsCrossed, Quote, Sparkles } from 'lucide-react';

export const ChefSection: React.FC = () => {
  return (
    <section id="chef" className="py-20 bg-[#0E0B09] border-t border-amber-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Chef Image with Royal Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="aspect-3/4 rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-2xl shadow-black/80 bg-neutral-900 relative group">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop"
                  alt="Ustad Tariq Mahmood - Executive Chef"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-black inline-block mb-1">
                    Master Ustad
                  </span>
                  <h3 className="text-xl font-bold text-white font-serif">
                    Ustad Tariq Mahmood
                  </h3>
                  <span className="text-xs text-amber-300 font-mono">
                    25+ Years of Hearth & Sigri Mastery
                  </span>
                </div>
              </div>

              {/* Decorative Seal */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-amber-500 text-black flex items-center justify-center font-bold text-xs uppercase tracking-tighter shadow-xl">
                <Award className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Chef Biography and Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-mono text-amber-400 font-semibold block">
                THE MASTER OF THE HEARTH
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
                MEET OUR EXECUTIVE CHEF
              </h2>
            </div>

            {/* Philosophy Quote */}
            <div className="p-6 rounded-2xl bg-[#14100C] border border-amber-500/20 relative">
              <Quote className="w-8 h-8 text-amber-500/30 absolute top-4 right-4" />
              <p className="text-sm sm:text-base text-neutral-200 italic font-serif leading-relaxed">
                "Authentic Pakistani cuisine is not about masking ingredients behind overwhelming red chili powder. It is about honoring the meat with gentle heat, pure animal fats, and whole roasted spices that bloom one by one on your palate."
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-amber-400 font-mono">
                <span>— Ustad Tariq Mahmood</span>
                <span>Descendant of Walled City Culinary Lineage</span>
              </div>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
              Trained under the legendary grill masters of Peshawar and old Lahore, Chef Tariq has personally formulated every spice rub and slow-braise technique at Dastaan.
            </p>

            {/* Chef Signature Dishes */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-wider text-amber-400 font-mono font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Chef's Handcrafted Signatures
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-xs font-bold text-white block">
                    Shinwari Mutton Karahi
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    Seared in its own fat with ripe tomatoes & ginger
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-xs font-bold text-white block">
                    Royal Mutton Seekh Kabab
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    Hand-ground mutton, brown onions & babool charcoal smoke
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
