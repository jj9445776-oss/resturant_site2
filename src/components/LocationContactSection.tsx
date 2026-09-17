import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  Send, 
  CheckCircle, 
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { restaurantConfig } from '../config/restaurant';

export const LocationContactSection: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Static Form Submission handler
  // Supports Netlify Forms, Formspree, or mailto fallback
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a static website, we provide a clean feedback state and route via mailto or WhatsApp as fallback
    const subject = encodeURIComponent(`Inquiry from Website: ${contactForm.name}`);
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nPhone: ${contactForm.phone}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
    );
    
    setFormSubmitted(true);

    // Optional mailto direct trigger
    window.location.href = `mailto:${restaurantConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#0B0907] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest font-mono text-amber-400 font-semibold block">
            VISIT & REACH OUT
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            LOCATION & CONTACT
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Conveniently located on MM Alam Road, Gulberg III, Lahore with valet parking available.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Details & Opening Hours & Interactive Map */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-[#14100C] border border-amber-500/20 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase font-mono">
                  Restaurant Location
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {restaurantConfig.address}, {restaurantConfig.city}, {restaurantConfig.country}
                </p>
                <span className="text-[11px] text-amber-400/80 block">
                  {restaurantConfig.landmark}
                </span>
              </div>

              {/* Direct Phone & WhatsApp Card */}
              <div className="p-5 rounded-2xl bg-[#14100C] border border-amber-500/20 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase font-mono">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-neutral-300">
                  Landline: <a href={`tel:${restaurantConfig.phoneRaw}`} className="text-white hover:underline">{restaurantConfig.phone}</a>
                </p>
                <p className="text-xs text-neutral-300">
                  WhatsApp: <a href={`https://wa.me/${restaurantConfig.whatsAppNumber}`} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">{restaurantConfig.whatsAppDisplay}</a>
                </p>
                <p className="text-xs text-neutral-400 truncate">
                  {restaurantConfig.email}
                </p>
              </div>

            </div>

            {/* Operating Hours Card */}
            <div className="p-6 rounded-2xl bg-[#14100C] border border-amber-500/20 space-y-3">
              <div className="flex items-center gap-2 text-amber-400">
                <Clock className="w-5 h-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider font-mono">
                  Dine-In & Takeaway Timings
                </h3>
              </div>
              <div className="space-y-1.5 text-xs text-neutral-300">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-400">Monday – Thursday:</span>
                  <span className="font-semibold text-white">12:00 PM – 12:00 Midnight</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-400">Friday – Sunday (Weekends):</span>
                  <span className="font-semibold text-amber-300">12:00 PM – 01:00 AM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-400">Lunch & Dinner Service:</span>
                  <span className="font-semibold text-white">Continuous all day</span>
                </div>
              </div>
            </div>

            {/* Google Map Container with Get Directions */}
            <div className="rounded-2xl overflow-hidden border border-amber-500/20 bg-black/60 shadow-xl relative group">
              <iframe
                title="Dastaan Restaurant Google Maps Location"
                src={restaurantConfig.googleMaps.embedUrl}
                width="100%"
                height="240"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-3 bg-[#14100C] border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-neutral-300">
                  Valet parking available at entrance
                </span>
                <a
                  href={restaurantConfig.googleMaps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-black text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Static Contact Form (with instructions for Formspree / Netlify Forms) */}
          <div className="lg:col-span-6 rounded-3xl bg-[#14100C] border border-amber-500/25 p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-mono tracking-wider text-amber-400 font-bold block mb-1">
                SEND A DIRECT MESSAGE
              </span>
              <h3 className="text-2xl font-bold text-white font-serif mb-2">
                Have an Event or Inquiry?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6 font-light">
                Fill out the form below. As a static website, this connects directly to our email mailbox and official WhatsApp concierge.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white font-serif">
                    Message Dispatched
                  </h4>
                  <p className="text-xs text-neutral-300 max-w-sm mx-auto">
                    Your inquiry has been formulated for dispatch to our team at {restaurantConfig.email}. You may also ping us on WhatsApp for an immediate response.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/${restaurantConfig.whatsAppNumber}?text=${encodeURIComponent(
                        `Salam! I am ${contactForm.name}. I sent an inquiry: "${contactForm.message}"`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp Instead</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form 
                  onSubmit={handleContactSubmit}
                  className="space-y-4"
                  // Optional Netlify Form attributes (ready for hostinger or netlify):
                  name="contact"
                  method="POST"
                  data-netlify="true"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="text-xs uppercase font-mono text-neutral-400">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Tariq Jamil"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-amber-500/20 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="text-xs uppercase font-mono text-neutral-400">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="tariq@example.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-amber-500/20 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="contact-phone" className="text-xs uppercase font-mono text-neutral-400">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="0321 9876543"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-amber-500/20 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-msg" className="text-xs uppercase font-mono text-neutral-400">
                      Message / Special Inquiry *
                    </label>
                    <textarea
                      id="contact-msg"
                      required
                      rows={4}
                      placeholder="Tell us about your event, catering inquiry, feedback, or special dining question..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-amber-500/20 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <button
                    id="submit-contact-btn"
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  <p className="text-[11px] text-neutral-500 text-center font-mono">
                    Static form ready • Connects to Formspree, Netlify Forms, or mailto.
                  </p>
                </form>
              )}
            </div>

            {/* Quick WhatsApp Concierge Link */}
            <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-neutral-400">
                Prefer immediate chat?
              </span>
              <a
                href={`https://wa.me/${restaurantConfig.whatsAppNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold hover:underline"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
