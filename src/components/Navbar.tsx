import React, { useState, useEffect } from 'react';
import { 
  Menu as MenuIcon, 
  X, 
  PhoneCall, 
  CalendarDays, 
  UtensilsCrossed, 
  MessageCircle 
} from 'lucide-react';
import { restaurantConfig } from '../config/restaurant';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  setActiveTab, 
  onOpenReservation 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'Our Story' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Location' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B0907]/95 backdrop-blur-md py-3 border-b border-amber-900/30 shadow-xl shadow-black/40' 
          : 'bg-gradient-to-b from-[#0B0907]/90 via-[#0B0907]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <button 
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-10 h-10 rounded-full border border-amber-500/40 bg-gradient-to-br from-amber-500/20 to-amber-900/30 flex items-center justify-center text-amber-400 group-hover:border-amber-400 transition-colors">
              <UtensilsCrossed className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl sm:text-2xl font-bold tracking-widest font-serif text-white group-hover:text-amber-300 transition-colors">
                  {restaurantConfig.name}
                </span>
                <span className="font-urdu text-amber-400 text-sm opacity-90 hidden sm:inline">
                  داستان
                </span>
              </div>
              <span className="text-[10px] tracking-widest uppercase text-amber-500/80 font-medium block">
                Royal Pakistani Dining
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === link.id
                    ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-3">
            {/* WhatsApp Direct Order */}
            <a
              id="nav-whatsapp-btn"
              href={restaurantConfig.orderingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/50 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Order</span>
            </a>

            {/* Reserve Table Modal Button */}
            <button
              id="nav-reserve-btn"
              onClick={onOpenReservation}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all hover:scale-105 active:scale-95"
            >
              <CalendarDays className="w-4 h-4 text-black" />
              <span>Reserve Table</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-reserve-quick-btn"
              onClick={onOpenReservation}
              className="px-2.5 py-1.5 rounded text-xs font-bold text-black bg-amber-500 hover:bg-amber-400"
            >
              Reserve
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6 text-amber-400" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu-drawer"
          className="sm:hidden bg-[#0F0D0B] border-b border-amber-900/40 px-5 pt-3 pb-6 space-y-3 mt-2 animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                  activeTab === link.id
                    ? 'text-amber-400 bg-amber-500/15 font-semibold'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                {activeTab === link.id && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={restaurantConfig.orderingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/40"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Order via WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500"
            >
              <CalendarDays className="w-4 h-4" />
              <span>Reserve a Table</span>
            </button>

            <a
              href={`tel:${restaurantConfig.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs text-neutral-400 hover:text-amber-300"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call: {restaurantConfig.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
