import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Flame, 
  Leaf, 
  Sparkles, 
  Plus, 
  Eye, 
  MessageCircle, 
  SlidersHorizontal,
  X
} from 'lucide-react';
import { MenuItem } from '../types';
import { menuCategories } from '../data/menu';
import { restaurantConfig } from '../config/restaurant';

interface MenuSectionProps {
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ items, onSelectItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterVegetarianOnly, setFilterVegetarianOnly] = useState<boolean>(false);
  const [filterChefSpecialOnly, setFilterChefSpecialOnly] = useState<boolean>(false);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category Match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Vegetarian Filter
      if (filterVegetarianOnly && !item.isVegetarian) {
        return false;
      }
      // Chef Special Filter
      if (filterChefSpecialOnly && !item.isChefSpecial) {
        return false;
      }
      // Search Query Match (checks name, urduName, description, ingredients)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesUrdu = item.urduName?.toLowerCase().includes(query) ?? false;
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesIngredient = item.ingredients.some(ing => ing.toLowerCase().includes(query));
        if (!matchesName && !matchesUrdu && !matchesDesc && !matchesIngredient) {
          return false;
        }
      }
      return true;
    });
  }, [items, selectedCategory, searchQuery, filterVegetarianOnly, filterChefSpecialOnly]);

  return (
    <section id="menu" className="py-20 bg-[#0B0907] relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-800/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Heritage Recipes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            EXPLORE THE ROYAL MENU
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Every dish is prepared upon order using 100% farm-fresh Halal meat, stone-ground garam masalas, and authentic traditional cooking vessels.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="menu-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dish, spice, or ingredient (e.g. Karahi, Chapli, Mutton)..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#14100C] border border-amber-500/20 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
                  aria-label="Clear Search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Dietary Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setFilterVegetarianOnly(!filterVegetarianOnly)}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filterVegetarianOnly
                    ? 'bg-emerald-600 text-white border border-emerald-500'
                    : 'bg-[#14100C] text-neutral-300 border border-white/10 hover:border-emerald-500/50'
                }`}
              >
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                <span>Vegetarian Only</span>
              </button>

              <button
                onClick={() => setFilterChefSpecialOnly(!filterChefSpecialOnly)}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filterChefSpecialOnly
                    ? 'bg-amber-600 text-white border border-amber-500'
                    : 'bg-[#14100C] text-neutral-300 border border-white/10 hover:border-amber-500/50'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Chef Specials</span>
              </button>
            </div>

          </div>

          {/* Category Tabs (Scrollable on mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                id={`cat-tab-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 font-bold'
                    : 'bg-[#14100C] text-neutral-400 hover:text-white hover:bg-white/5 border border-white/5'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center rounded-2xl bg-[#14100C]/60 border border-white/10 p-8">
            <p className="text-neutral-400 text-base mb-3">
              No dishes found matching your current filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setFilterVegetarianOnly(false);
                setFilterChefSpecialOnly(false);
              }}
              className="px-4 py-2 rounded-lg bg-amber-500 text-black text-xs font-bold uppercase tracking-wider"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                id={`menu-card-${item.id}`}
                className="group rounded-2xl bg-[#14100C] border border-amber-500/15 hover:border-amber-500/40 p-4 transition-all duration-300 hover:shadow-xl hover:shadow-amber-950/30 flex flex-col justify-between"
              >
                <div>
                  {/* Item Image with tags */}
                  <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-black/50 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />

                    {/* Spice Level Indicator */}
                    {item.spiceLevel > 0 && (
                      <div className="absolute top-2.5 right-2.5 px-2 py-1 rounded-md bg-black/75 backdrop-blur-sm border border-red-500/30 flex items-center gap-0.5">
                        {[...Array(item.spiceLevel)].map((_, i) => (
                          <Flame key={i} className="w-3 h-3 text-red-500 fill-red-500" />
                        ))}
                      </div>
                    )}

                    {/* Veg Badge */}
                    {item.isVegetarian && (
                      <div className="absolute top-2.5 left-2.5 px-2 py-1 rounded-md bg-emerald-950/80 backdrop-blur-sm border border-emerald-500/40 flex items-center gap-1 text-[10px] font-bold text-emerald-400">
                        <Leaf className="w-3 h-3 text-emerald-400" />
                        <span>Vegetarian</span>
                      </div>
                    )}

                    {/* Quick Preview Hover */}
                    <button
                      onClick={() => onSelectItem(item)}
                      className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-black/80 border border-amber-400/80 text-amber-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110 shadow-lg"
                      aria-label={`View ${item.name}`}
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Text Details */}
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-white text-base group-hover:text-amber-400 transition-colors uppercase leading-snug font-serif">
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

                    {/* Ingredients preview */}
                    <div className="pt-2 flex flex-wrap gap-1">
                      {item.ingredients.slice(0, 3).map((ing, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/5"
                        >
                          {ing}
                        </span>
                      ))}
                      {item.ingredients.length > 3 && (
                        <span className="text-[10px] px-1.5 py-0.5 text-neutral-500">
                          +{item.ingredients.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-mono">
                      Serves {item.serves.split(' ')[0]}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-amber-400 font-mono">
                      {restaurantConfig.currencySymbol} {item.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* WhatsApp Order Action */}
                    <a
                      href={restaurantConfig.createWhatsAppOrderLink(item.name, item.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/60 text-xs font-semibold transition-colors"
                      title="Order this dish on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </a>

                    {/* View Details Button */}
                    <button
                      onClick={() => onSelectItem(item)}
                      className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all active:scale-95"
                    >
                      Details
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
