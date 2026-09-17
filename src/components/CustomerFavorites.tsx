import React from 'react';
import { Plus, ArrowRight, Eye, Sparkles, Flame, MessageCircle } from 'lucide-react';
import { MenuItem } from '../types';
import { restaurantConfig } from '../config/restaurant';

interface CustomerFavoritesProps {
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
  onViewAllMenu: () => void;
  onReadStory: () => void;
}

export const CustomerFavorites: React.FC<CustomerFavoritesProps> = ({
  items,
  onSelectItem,
  onViewAllMenu,
  onReadStory,
}) => {
  // Select 4 iconic favorites
  const favoriteItems = items.filter(item => item.isBestseller).slice(0, 4);

  return (
    <section id="favorites" className="py-16 sm:py-20 bg-[#120E0B] border-t border-amber-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (inspired directly by reference image) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-white/10 gap-4">
          <div>
            <span className="text-sm font-serif italic text-amber-400 block mb-1">
              Our Royal Menu
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-serif">
              CUSTOMER FAVORITES
            </h2>
          </div>

          <button
            id="favorites-view-all-btn"
            onClick={onViewAllMenu}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400 hover:text-white border border-amber-500/30 hover:border-amber-400 bg-amber-500/5 hover:bg-amber-500/10 transition-all self-start sm:self-auto group"
          >
            <span>VIEW FULL MENU</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4-Column Grid of Premium Food Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favoriteItems.map((item) => (
            <div
              key={item.id}
              id={`favorite-card-${item.id}`}
              className="group relative rounded-2xl bg-[#181410] border border-amber-500/15 hover:border-amber-500/40 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-950/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-black/40">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181410] via-transparent to-transparent opacity-80" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-black shadow-md">
                    Bestseller
                  </span>
                  {item.isChefSpecial && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 text-amber-300 border border-amber-400/40">
                      Royal
                    </span>
                  )}
                </div>

                {/* Quick Details Overlay on Hover */}
                <button
                  onClick={() => onSelectItem(item)}
                  className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-black/70 border border-amber-400/60 text-amber-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110 shadow-lg"
                  aria-label={`View details of ${item.name}`}
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-white text-base sm:text-lg group-hover:text-amber-300 transition-colors uppercase leading-snug">
                      {item.name}
                    </h3>
                  </div>
                  {item.urduName && (
                    <span className="font-urdu text-xs text-amber-400/80 block">
                      {item.urduName}
                    </span>
                  )}
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Price and Action Button (Matching design pattern from reference) */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-neutral-400 block font-mono">Price</span>
                    <span className="text-lg font-bold text-amber-400 font-mono">
                      {restaurantConfig.currencySymbol} {item.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Direct WhatsApp Order */}
                    <a
                      href={restaurantConfig.createWhatsAppOrderLink(item.name, item.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/60 transition-colors"
                      title="Order on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>

                    {/* Quick View Button (+) */}
                    <button
                      onClick={() => onSelectItem(item)}
                      className="w-9 h-9 rounded-xl bg-amber-500 text-black hover:bg-amber-400 flex items-center justify-center transition-all hover:rotate-90 active:scale-95 shadow-md shadow-amber-500/20"
                      aria-label={`Inspect ${item.name}`}
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Dual Promotional Banner Under Favorites (Inspired directly by the lower banner in reference image) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: "Make it a Royal Dawat Combo!" */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-r from-[#17130F] to-[#201812] border border-amber-500/25 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
            <div className="space-y-3 z-10 text-center sm:text-left">
              <span className="text-xs font-serif italic text-amber-400 uppercase tracking-widest block">
                Upgrade Any Main
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-serif">
                MAKE IT A <br />
                <span className="text-amber-400">ROYAL DAWAT!</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-xs">
                Add 2 Sesame Roghni Naans & 2 Mint Margaritas for just
              </p>
              <div className="text-2xl font-extrabold text-amber-300 font-mono">
                + {restaurantConfig.currencySymbol} 490
              </div>
            </div>

            <div className="relative shrink-0 z-10">
              <img
                src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=300&auto=format&fit=crop"
                alt="Mint Margarita & Roghni Naan"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover border-2 border-amber-500/30 shadow-2xl"
              />
            </div>
          </div>

          {/* Right: "Flavors Built on Passion" */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 p-6 sm:p-8 flex flex-col justify-between text-black shadow-xl relative overflow-hidden">
            <div className="space-y-3 z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-950 block">
                Heritage Story
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight">
                FLAVORS BUILT <br />ON HONEST PASSION
              </h3>
              <p className="text-xs sm:text-sm text-amber-950/90 max-w-md font-medium leading-relaxed">
                We started with a single sigri grill and a sacred family principle: never compromise on raw cuts, pure desi ghee, and genuine Pakistani hospitality.
              </p>
            </div>

            <div className="pt-4 z-10">
              <button
                onClick={onReadStory}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black text-amber-300 text-xs font-bold uppercase tracking-wider hover:bg-neutral-900 transition-colors shadow-lg"
              >
                <span>OUR STORY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
