import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  Phone, 
  Mail, 
  User, 
  MessageCircle, 
  Sparkles, 
  CheckCircle,
  PhoneCall,
  MapPin
} from 'lucide-react';
import { restaurantConfig } from '../config/restaurant';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '08:30 PM',
    guests: '4 Guests',
    area: 'Royal Mughal Courtyard',
    specialRequest: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate pre-filled WhatsApp reservation link directly from central config
    const whatsappUrl = restaurantConfig.createWhatsAppReservationLink({
      name: formData.name || 'Guest',
      phone: formData.phone || 'Not provided',
      guests: formData.guests,
      date: formData.date,
      time: formData.time,
      area: formData.area,
      notes: formData.specialRequest,
    });

    setSubmitted(true);
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="reservation" className="py-20 bg-[#0E0B09] border-t border-amber-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest font-mono text-amber-400 font-semibold block">
            ROYAL TABLE BOOKINGS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            RESERVE YOUR EXPERIENCE
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Book in advance for family dawats, weekend dinners, or private banquet halls. Confirmed instantly on WhatsApp.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl bg-[#14100C] border border-amber-500/25 p-6 sm:p-10 shadow-2xl shadow-black/80">
          {submitted ? (
            <div className="text-center py-12 space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                Reservation Details Prepared!
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 max-w-md mx-auto">
                Your reservation request has been formatted for WhatsApp for instant confirmation with our host team at {restaurantConfig.whatsAppDisplay}.
              </p>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 max-w-md mx-auto text-left text-xs text-neutral-300 space-y-1 font-mono">
                <p><strong>Guest:</strong> {formData.name}</p>
                <p><strong>Date & Time:</strong> {formData.date} at {formData.time}</p>
                <p><strong>Party Size:</strong> {formData.guests} ({formData.area})</p>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={restaurantConfig.createWhatsAppReservationLink({
                    name: formData.name,
                    phone: formData.phone,
                    guests: formData.guests,
                    date: formData.date,
                    time: formData.time,
                    area: formData.area,
                    notes: formData.specialRequest,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Conversation</span>
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-sm font-semibold border border-white/10"
                >
                  Edit Information
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="res-name" className="text-xs uppercase font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    Guest Name *
                  </label>
                  <input
                    id="res-name"
                    type="text"
                    required
                    placeholder="e.g. Bilal Khan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-amber-500/20 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label htmlFor="res-phone" className="text-xs uppercase font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="res-phone"
                    type="tel"
                    required
                    placeholder="e.g. 0300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-amber-500/20 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="res-email" className="text-xs uppercase font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    Email (Optional)
                  </label>
                  <input
                    id="res-email"
                    type="email"
                    placeholder="e.g. bilal@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-amber-500/20 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  />
                </div>

                {/* Number of Guests */}
                <div className="space-y-1.5">
                  <label htmlFor="res-guests" className="text-xs uppercase font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    Party Size *
                  </label>
                  <select
                    id="res-guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#181410] border border-amber-500/20 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  >
                    <option value="2 Guests">2 Guests (Couple / Pair)</option>
                    <option value="4 Guests">4 Guests (Small Family)</option>
                    <option value="6 Guests">6 Guests (Family Table)</option>
                    <option value="8 Guests">8 Guests (Large Dawat)</option>
                    <option value="12+ Guests">12+ Guests (VIP Private Suite)</option>
                    <option value="25+ Banquet">25+ Guests (Full Banquet Hall)</option>
                  </select>
                </div>

                {/* Date */}
                <div className="space-y-1.5">
                  <label htmlFor="res-date" className="text-xs uppercase font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Date *
                  </label>
                  <input
                    id="res-date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-amber-500/20 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  />
                </div>

                {/* Time Slot */}
                <div className="space-y-1.5">
                  <label htmlFor="res-time" className="text-xs uppercase font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Time Slot *
                  </label>
                  <select
                    id="res-time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#181410] border border-amber-500/20 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  >
                    <option value="01:00 PM">01:00 PM (Lunch)</option>
                    <option value="02:30 PM">02:30 PM (Late Lunch)</option>
                    <option value="07:30 PM">07:30 PM (Early Dinner)</option>
                    <option value="08:30 PM">08:30 PM (Prime Dinner)</option>
                    <option value="09:30 PM">09:30 PM (Late Dinner)</option>
                    <option value="10:30 PM">10:30 PM (Night Dawat)</option>
                  </select>
                </div>

              </div>

              {/* Dining Area Preference */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Dining Ambience Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {['Royal Mughal Courtyard', 'Family Hall (Quiet)', 'Rooftop Terrace'].map((area) => (
                    <button
                      key={area}
                      type="button"
                      onClick={() => setFormData({ ...formData, area })}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        formData.area === area
                          ? 'bg-amber-500 text-black border-amber-400 shadow-md font-bold'
                          : 'bg-black/40 text-neutral-300 border-white/10 hover:border-amber-500/40'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-1.5">
                <label htmlFor="res-notes" className="text-xs uppercase font-mono text-neutral-400">
                  Special Occasion or Dietary Preferences (Optional)
                </label>
                <textarea
                  id="res-notes"
                  rows={2}
                  placeholder="e.g. Birthday cake arrangement, anniversary setting, high chairs for infants..."
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-amber-500/20 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Submit & Alternative Contact */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                <div className="text-xs text-neutral-400 flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Instant phone reservation: <strong className="text-white">{restaurantConfig.phone}</strong></span>
                </div>

                <button
                  id="submit-reservation-btn"
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-xl shadow-amber-500/25 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Request Table via WhatsApp</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
