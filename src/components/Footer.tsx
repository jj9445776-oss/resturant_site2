import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  ArrowUp,
  ShieldCheck,
  X
} from 'lucide-react';
import { restaurantConfig } from '../config/restaurant';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#080605] border-t border-amber-950/40 text-neutral-400 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-amber-500/40 bg-amber-500/10 flex items-center justify-center text-amber-400">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold tracking-widest font-serif text-white">
                    {restaurantConfig.name}
                  </span>
                  <span className="font-urdu text-amber-400 text-sm">
                    {restaurantConfig.urduName.split('-')[0]}
                  </span>
                </div>
                <span className="text-[10px] tracking-widest uppercase text-amber-500/80 font-medium block">
                  Royal Pakistani Dining
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
              Celebrating Pakistan’s rich culinary architecture with charcoal-smoked skewers, hand-ground heirloom spices, and pure desi ghee handis in the heart of Lahore.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-amber-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Halal Certified Meats & Organic Ghee</span>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={restaurantConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-amber-500 hover:text-black text-neutral-300 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={restaurantConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-amber-500 hover:text-black text-neutral-300 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${restaurantConfig.whatsAppNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/60 text-xs font-semibold"
              >
                WhatsApp Concierge
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-mono text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home Experience</a></li>
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Royal Menu</a></li>
              <li><a href="#favorites" className="hover:text-amber-400 transition-colors">Customer Favorites</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">Heritage Story</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Visual Gallery</a></li>
              <li><a href="#reservation" className="hover:text-amber-400 transition-colors">Table Booking</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Get Directions</a></li>
            </ul>
          </div>

          {/* Opening Hours Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-mono text-white font-bold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Service Hours
            </h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <p>
                <strong className="text-neutral-200 block">Monday – Thursday:</strong>
                12:00 PM – 12:00 Midnight
              </p>
              <p>
                <strong className="text-amber-300 block">Friday – Sunday (Weekends):</strong>
                12:00 PM – 01:00 AM
              </p>
              <p>
                <strong className="text-neutral-200 block">Takeaway & Valet:</strong>
                Available throughout open hours
              </p>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-mono text-white font-bold">
              Lahore Location
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{restaurantConfig.address}, {restaurantConfig.city}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${restaurantConfig.phoneRaw}`} className="text-white hover:underline">{restaurantConfig.phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${restaurantConfig.email}`} className="text-white hover:underline">{restaurantConfig.email}</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {restaurantConfig.fullName}. All rights reserved. Crafted for static hosting.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-amber-400 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-amber-400 transition-colors"
            >
              Dining Policy
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-amber-400 transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Static Privacy Policy & Terms Modal */}
      {legalModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setLegalModal(null)}
        >
          <div 
            className="relative max-w-lg w-full bg-[#14100C] border border-amber-500/30 rounded-2xl p-6 space-y-4 text-neutral-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white font-serif">
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Dining & Reservation Policy'}
              </h3>
              <button 
                onClick={() => setLegalModal(null)}
                className="text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs space-y-3 max-h-80 overflow-y-auto leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    At {restaurantConfig.name}, we value your privacy. As a static frontend website, we do not harvest or store personal information in a centralized cloud tracking database.
                  </p>
                  <p>
                    Any details you provide when requesting a table reservation or sending a contact message are transferred directly through your device's configured WhatsApp client or email software.
                  </p>
                  <p>
                    We do not sell, rent, or trade customer information with external brokers.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Table Holding:</strong> Reserved tables are held for up to 20 minutes past the scheduled arrival time before being released to waiting walk-in guests during peak weekend hours.
                  </p>
                  <p>
                    <strong>Food Freshness:</strong> All charcoal items and karahis are prepared fresh to order. Normal cooking time for handi and dum items is approximately 25-35 minutes.
                  </p>
                  <p>
                    <strong>Halal Standards:</strong> We operate an exclusively 100% Halal certified kitchen. No outside food or beverages are permitted in the main dining halls.
                  </p>
                </>
              )}
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 rounded-lg bg-amber-500 text-black text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
