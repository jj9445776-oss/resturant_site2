import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { CustomerReview } from '../types';

interface ReviewsSectionProps {
  reviews: CustomerReview[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const current = reviews[currentIndex];

  return (
    <section id="reviews" className="py-20 bg-[#120E0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest font-mono text-amber-400 font-semibold block">
            VOICES OF MEHMAAN
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            GUEST EXPERIENCES
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Loved by families, connoisseurs, and international food travelers visiting Lahore.
          </p>
        </div>

        {/* Highlight Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-[#181410] border border-amber-500/20 p-8 sm:p-12 shadow-2xl shadow-black/80 transition-all duration-300">
            <Quote className="w-12 h-12 text-amber-500/20 absolute top-6 right-8" />

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              
              {/* Avatar & Badges */}
              <div className="shrink-0 text-center">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-amber-400/60 shadow-xl mx-auto"
                />
                <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[10px] font-bold text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Guest</span>
                </div>
              </div>

              {/* Review Content */}
              <div className="flex-1 space-y-4 text-center sm:text-left">
                {/* Stars */}
                <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-neutral-400 font-mono ml-2">
                    {current.date}
                  </span>
                </div>

                {/* Review text */}
                <p className="text-base sm:text-lg text-neutral-200 font-serif leading-relaxed italic">
                  "{current.review}"
                </p>

                {/* Author & City */}
                <div className="pt-2 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-white text-base">
                      {current.name}
                    </h3>
                    <span className="text-xs text-amber-400 font-mono">
                      {current.city}
                    </span>
                  </div>

                  <div className="inline-block px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-neutral-300">
                    <span className="text-neutral-500 mr-1">Loved:</span>
                    <strong className="text-amber-300">{current.dishRecommended}</strong>
                  </div>
                </div>

              </div>

            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-8 bg-amber-400' : 'w-2 bg-neutral-700 hover:bg-neutral-600'
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevReview}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-amber-500 hover:text-black text-white border border-white/10 flex items-center justify-center transition-all"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextReview}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-amber-500 hover:text-black text-white border border-white/10 flex items-center justify-center transition-all"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
