import React, { useEffect, useState } from 'react';
import { UtensilsCrossed } from 'lucide-react';
import { restaurantConfig } from '../config/restaurant';

interface InitialLoaderProps {
  onLoaded: () => void;
}

export const InitialLoader: React.FC<InitialLoaderProps> = ({ onLoaded }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Show for 850ms to establish royal atmosphere then smoothly fade out
    const timer1 = setTimeout(() => {
      setFading(true);
    }, 750);

    const timer2 = setTimeout(() => {
      onLoaded();
    }, 1100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onLoaded]);

  return (
    <div
      id="initial-loader"
      className={`fixed inset-0 z-50 bg-[#0B0907] flex flex-col items-center justify-center transition-opacity duration-400 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center space-y-4 px-4 animate-in fade-in zoom-in-95 duration-500">
        
        {/* Emblem */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/20 via-amber-900/30 to-black flex items-center justify-center text-amber-400 mx-auto shadow-2xl shadow-amber-500/20">
          <UtensilsCrossed className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400 animate-pulse" />
        </div>

        {/* Brand Name & Urdu Calligraphy */}
        <div className="space-y-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-widest text-white font-serif">
            {restaurantConfig.name}
          </h1>
          <p className="font-urdu text-amber-400 text-lg sm:text-xl">
            {restaurantConfig.urduName}
          </p>
        </div>

        {/* Subtle Progress Line */}
        <div className="w-48 h-0.5 bg-neutral-800 rounded-full overflow-hidden mx-auto mt-4">
          <div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 animate-pulse w-full" />
        </div>

        <span className="text-[10px] tracking-widest uppercase text-amber-500/80 font-mono block">
          Royal Mughal Cuisine • Lahore
        </span>

      </div>
    </div>
  );
};
