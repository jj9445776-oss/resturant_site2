import React, { useState } from 'react';
import { Sparkles, Utensils, Users, Moon, Flame } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      id: 'courtyard',
      title: 'The Mughal Courtyard',
      subtitle: 'Central Dining Ambience',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
      description: 'Lined with warm brass pendants, geometric carved stone arches, and soft instrumental sitar melodies. Designed for comfortable long dinners with family and colleagues.',
      features: ['Handcrafted Rosewood Seating', 'Live Spice Fragrance', 'Curated Family Ambience']
    },
    {
      id: 'sigri',
      title: 'Live Sigri & Clay Tandoor',
      subtitle: 'Open Culinary Theater',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop',
      description: 'Witness master grill ustads fan the sigri coals and slap fresh sesame roghni naans onto glowing clay tandoor walls directly before your eyes.',
      features: ['Visible Charcoal Grilling', 'Underground Clay Ovens', 'Freshly Charred Flavors']
    },
    {
      id: 'banquet',
      title: 'Royal Family Suites',
      subtitle: 'Private Celebrations & Dawats',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1000&auto=format&fit=crop',
      description: 'Exclusive private dining halls accommodating 15 to 60 guests with dedicated butler service, customized dawat menus, and customized table decor.',
      features: ['Dedicated Service Team', 'Bespoke Dawat Menus', 'Private Climate Control']
    },
    {
      id: 'terrace',
      title: 'The Rooftop Terrace',
      subtitle: 'Evening Dining Under the Stars',
      icon: Moon,
      image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1000&auto=format&fit=crop',
      description: 'Enjoy Lahore’s evening breeze overlooking the vibrant lights of MM Alam Road with warm charcoal braziers and artisanal Peshawari qehwa teapots.',
      features: ['Open Sky Panoramic View', 'Heated Winter Braziers', 'Cozy Sunset Seating']
    }
  ];

  const [activeExp, setActiveExp] = useState(experiences[0]);

  return (
    <section id="experience" className="py-20 bg-[#120E0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest font-mono text-amber-400 font-semibold block">
            THE DASTAAN EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            A FEAST FOR ALL SENSES
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            More than just dining — an immersion into the regal aesthetics and heartfelt hospitality of historic Lahore.
          </p>
        </div>

        {/* Experience Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {experiences.map((exp) => {
            const IconComponent = exp.icon;
            const isSelected = activeExp.id === exp.id;
            return (
              <button
                key={exp.id}
                onClick={() => setActiveExp(exp)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-amber-500/15 border-amber-400 shadow-lg shadow-amber-950/40 translate-y-[-2px]'
                    : 'bg-[#181410] border-white/5 hover:border-amber-500/30 text-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isSelected ? 'bg-amber-500 text-black' : 'bg-white/5 text-amber-400'
                  }`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />}
                </div>

                <div>
                  <h3 className={`text-sm sm:text-base font-bold font-serif ${
                    isSelected ? 'text-white' : 'text-neutral-300'
                  }`}>
                    {exp.title}
                  </h3>
                  <span className="text-[11px] text-neutral-500 block truncate">
                    {exp.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Feature Showcase */}
        <div className="rounded-3xl bg-[#181410] border border-amber-500/20 overflow-hidden shadow-2xl shadow-black/80 grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Image side */}
          <div className="lg:col-span-7 h-72 sm:h-96 lg:h-[450px] relative overflow-hidden">
            <img
              src={activeExp.image}
              alt={activeExp.title}
              className="w-full h-full object-cover animate-in fade-in duration-500"
              key={activeExp.id}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#181410] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181410] via-transparent to-transparent lg:hidden" />
          </div>

          {/* Content side */}
          <div className="lg:col-span-5 p-6 sm:p-10 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-mono font-semibold">
                {activeExp.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                {activeExp.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              {activeExp.description}
            </p>

            {/* Bullet features */}
            <div className="space-y-2.5 pt-2 border-t border-white/10">
              {activeExp.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#reservation"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider transition-all"
              >
                Reserve in this Setting
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
