import React, { useEffect } from 'react';
import { 
  X, 
  Flame, 
  Users, 
  Leaf, 
  ShieldCheck, 
  MessageCircle, 
  Clock, 
  Sparkles,
  Info
} from 'lucide-react';
import { MenuItem } from '../types';
import { restaurantConfig } from '../config/restaurant';

interface FoodModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const FoodModal: React.FC<FoodModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const spiceLabels = ['None', 'Mild & Aromatic', 'Medium Spiced', 'Hot & Tangy', 'Authentic Desi Fiery'];

  return (
    <div 
      id="food-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-[#14100C] border border-amber-500/30 shadow-2xl shadow-black/80 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white hover:text-amber-400 hover:border-amber-400 flex items-center justify-center transition-all hover:scale-110"
          aria-label="Close Food Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14100C] via-transparent to-black/30" />

          {/* Badges on Top */}
          <div className="absolute bottom-4 left-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-black shadow-lg">
              {item.category.toUpperCase()}
            </span>
            {item.isVegetarian && (
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white flex items-center gap-1 shadow-lg">
                <Leaf className="w-3.5 h-3.5" />
                Vegetarian
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/70 border border-amber-500/40 text-amber-300">
              100% Halal
            </span>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Header & Price */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif tracking-tight">
                {item.name}
              </h3>
              {item.urduName && (
                <span className="font-urdu text-base text-amber-400 mt-1 block">
                  {item.urduName}
                </span>
              )}
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-neutral-400 uppercase font-mono block">Price</span>
              <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                {restaurantConfig.currencySymbol} {item.price.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Detailed Description */}
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
            {item.description}
          </p>

          {/* Key Specs Grid (Spice meter, serving, prep) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-black/40 border border-white/5">
            
            {/* Spice Meter */}
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-red-400" />
                Spice Level
              </span>
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <span
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full ${
                      i < item.spiceLevel ? 'bg-red-500 shadow-sm shadow-red-500' : 'bg-neutral-700'
                    }`}
                  />
                ))}
                <span className="text-xs text-neutral-300 ml-1 font-medium">
                  {spiceLabels[item.spiceLevel]}
                </span>
              </div>
            </div>

            {/* Serving Size */}
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                Portion
              </span>
              <p className="text-xs sm:text-sm font-semibold text-white">
                {item.serves}
              </p>
            </div>

            {/* Calories / Nutrition */}
            <div className="space-y-1 col-span-2 sm:col-span-1">
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                Est. Energy
              </span>
              <p className="text-xs sm:text-sm font-semibold text-white">
                {item.calories || 'Freshly Prepared'}
              </p>
            </div>

          </div>

          {/* Handcrafted Ingredients */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-amber-400 font-mono font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Key Spices & Ingredients
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.ingredients.map((ing, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs bg-white/5 border border-amber-500/20 text-neutral-200"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
            {/* WhatsApp Direct Order Button */}
            <a
              id="modal-whatsapp-order-btn"
              href={restaurantConfig.createWhatsAppOrderLink(item.name, item.price)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-600 shadow-xl shadow-emerald-900/30 transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order via WhatsApp ({restaurantConfig.currencySymbol} {item.price.toLocaleString()})</span>
            </a>

            <button
              onClick={onClose}
              className="px-6 py-3.5 rounded-xl text-sm font-semibold text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              Continue Browsing
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
