import React from 'react';
import { Sparkles, Check, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { SpecialOffer } from '../types';
import { restaurantConfig } from '../config/restaurant';

interface SpecialOffersProps {
  offers: SpecialOffer[];
}

export const SpecialOffers: React.FC<SpecialOffersProps> = ({ offers }) => {
  return (
    <section id="offers" className="py-20 bg-[#0B0907] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest font-mono text-amber-400 font-semibold block">
            LIMITED TIME SPECIALS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            EXCLUSIVE DAWAT FEASTS
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Carefully curated feasts designed for family gatherings and weekend reunions.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offers.map((offer) => {
            const savings = offer.originalPrice - offer.price;
            return (
              <div
                key={offer.id}
                id={`offer-card-${offer.id}`}
                className="rounded-3xl bg-[#14100C] border border-amber-500/25 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-amber-400/50 transition-all duration-300"
              >
                {/* Background decorative accent */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  
                  {/* Top Bar: Badge & Validity */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-black shadow-md">
                      {offer.badge}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-amber-400/90 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      {offer.validity}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <span className="text-xs text-neutral-400 uppercase font-mono block">
                      {offer.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif tracking-tight mt-1">
                      {offer.title}
                    </h3>
                  </div>

                  {/* Pricing Box */}
                  <div className="flex items-baseline gap-3 py-2 border-y border-white/5">
                    <span className="text-3xl sm:text-4xl font-black text-amber-400 font-mono">
                      {restaurantConfig.currencySymbol} {offer.price.toLocaleString()}
                    </span>
                    <span className="text-base text-neutral-500 line-through font-mono">
                      {restaurantConfig.currencySymbol} {offer.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 font-bold border border-emerald-500/30">
                      Save {restaurantConfig.currencySymbol} {savings.toLocaleString()}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
                    {offer.description}
                  </p>

                  {/* What's Included */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs uppercase tracking-wider text-amber-400 font-mono font-bold block">
                      Included in this Feast:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {offer.includedItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Action CTA Button */}
                <div className="pt-6 mt-6 border-t border-white/10 relative z-10">
                  <a
                    href={`https://wa.me/${restaurantConfig.whatsAppNumber}?text=${encodeURIComponent(
                      `Salam! I would like to book the "${offer.title}" (${restaurantConfig.currencySymbol} ${offer.price.toLocaleString()}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-xl shadow-amber-500/20 transition-all active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 text-black" />
                    <span>{offer.ctaText}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
