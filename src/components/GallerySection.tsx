import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { GalleryImage } from '../types';

interface GallerySectionProps {
  images: GalleryImage[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ images }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'food', label: 'Culinary Craft' },
    { id: 'grills', label: 'Sigri Charcoal' },
    { id: 'interior', label: 'Architecture & Dining' },
    { id: 'events', label: 'Dawats & Banquets' },
  ];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

  return (
    <section id="gallery" className="py-20 bg-[#0B0907] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest font-mono text-amber-400 font-semibold block">
            VISUAL CHRONICLES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            MOMENTS AT DASTAAN
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Glimpses into our clay tandoors, bustling charcoal hearths, and regal banquet spaces.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 font-bold'
                  : 'bg-[#14100C] text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              id={`gallery-item-${img.id}`}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-square bg-neutral-900 border border-white/10 hover:border-amber-400/50 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 block">
                  {img.category.toUpperCase()}
                </span>
                <h4 className="text-sm font-bold text-white font-serif leading-snug">
                  {img.title}
                </h4>
                <p className="text-xs text-neutral-300 line-clamp-1 mt-1 font-light">
                  {img.caption}
                </p>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm text-amber-400 flex items-center justify-center">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-amber-400 flex items-center justify-center transition-all"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
            }}
            className="absolute left-4 sm:left-8 z-20 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-amber-500 hover:text-black flex items-center justify-center transition-all"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
            }}
            className="absolute right-4 sm:right-8 z-20 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-amber-500 hover:text-black flex items-center justify-center transition-all"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Center Image and Caption Container */}
          <div
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].image}
              alt={filteredImages[lightboxIndex].title}
              className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-white font-serif">
                {filteredImages[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
                {filteredImages[lightboxIndex].caption}
              </p>
              <span className="text-[11px] text-amber-400 font-mono block">
                {lightboxIndex + 1} of {filteredImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
