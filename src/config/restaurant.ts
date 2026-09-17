/**
 * Central Restaurant Configuration for Dastaan Restaurant
 * Easily change contact info, WhatsApp number, hours, address,
 * and social links in this single file for complete static deployment.
 */

export const restaurantConfig = {
  name: "Dastaan",
  fullName: "Dastaan Royal Pakistani Cuisine",
  urduName: "داستان - ذائقۂ شاہی",
  tagline: "Heritage Flavors. Royal Mughal Craftsmanship. Modern Hospitality.",
  shortDescription: "Experience authentic Pakistani culinary heritage with charcoal-smoked kebabs, aromatic handi karahis, slow-simmered dum biryanis, and warm mehmaan-nawazi on MM Alam Road.",
  
  // Contact numbers
  phone: "+92 42 3575 8899",
  phoneRaw: "+924235758899",
  mobile: "+92 300 845 7722",
  
  // Central WhatsApp number for direct reservations and orders (Include country code without '+')
  whatsAppNumber: "923008457722",
  whatsAppDisplay: "+92 300 845 7722",
  
  // Email & Web
  email: "reservations@dastaanrestaurant.pk",
  supportEmail: "info@dastaanrestaurant.pk",
  websiteUrl: "https://dastaanrestaurant.pk",
  
  // Location
  address: "Plot 14-C, MM Alam Road, Gulberg III",
  city: "Lahore",
  province: "Punjab",
  postalCode: "54000",
  country: "Pakistan",
  landmark: "Near Hussain Chowk, MM Alam Boulevard",
  
  // Currency Settings
  currency: "PKR",
  currencySymbol: "Rs.",
  
  // Timings
  openingHours: {
    weekdays: "Monday – Thursday: 12:00 PM – 12:00 Midnight",
    weekends: "Friday – Sunday: 12:00 PM – 01:00 AM",
    lunchHours: "12:30 PM – 04:00 PM",
    dinnerHours: "07:00 PM – 12:00 AM",
    ramadanHours: "Iftar buffet till Sehri (05:30 PM – 04:30 AM)",
  },

  // Social Channels
  socials: {
    instagram: "https://instagram.com/dastaanrestaurant",
    facebook: "https://facebook.com/dastaanrestaurantpk",
    tiktok: "https://tiktok.com/@dastaanrestaurant",
    youtube: "https://youtube.com/@dastaanpk",
    tripadvisor: "https://tripadvisor.com/Restaurant_Review-dastaan_lahore",
  },
  
  // Google Maps Integration
  googleMaps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.326880816823!2d74.3515!3d31.5126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a1c000001%3A0x6b4db92144b62db!2sMM%20Alam%20Rd%2C%20Gulberg%20III%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
    directionsUrl: "https://maps.google.com/?q=MM+Alam+Road+Gulberg+III+Lahore",
  },
  
  // External or Direct Ordering (Can point to foodpanda, WhatsApp order link, or custom ordering URL)
  orderingUrl: `https://wa.me/923008457722?text=${encodeURIComponent("Salam! I would like to place a food order from Dastaan Restaurant.")}`,
  
  // Key Restaurant Statistics
  stats: [
    { value: "15+", label: "Years of Royal Heritage", sub: "Since 2011" },
    { value: "50+", label: "Master Craft Recipes", sub: "Cooked Fresh Daily" },
    { value: "100K+", label: "Cherished Guests", sub: "98% Positive Feedback" },
    { value: "100%", label: "Halal & Desi Ghee", sub: "Hand-picked spices" },
  ],

  // Brand Pillars
  pillars: [
    {
      title: "100% Halal Angus & Mutton",
      description: "Carefully sourced farm-fresh cuts, marinated with hand-ground desi spices.",
      icon: "ShieldCheck",
    },
    {
      title: "Live Charcoal Angithi",
      description: "Authentic sigri charcoal flame grilling yielding smoky, tender seekh & boti.",
      icon: "Flame",
    },
    {
      title: "Desi Ghee Handi & Karahi",
      description: "Slow-simmered in pure organic butter and traditional cast-iron karahis.",
      icon: "Soup",
    },
    {
      title: "Mehmaan-nawazi Tradition",
      description: "Centuries-old Pakistani hospitality, welcoming families with royal warmth.",
      icon: "HeartHandshake",
    },
  ],

  // Helper generators
  createWhatsAppReservationLink: (details: {
    name: string;
    phone: string;
    guests: string;
    date: string;
    time: string;
    area: string;
    notes?: string;
  }) => {
    const text = `*New Table Reservation Request - Dastaan*\n\n` +
      `*Guest Name:* ${details.name}\n` +
      `*Contact:* ${details.phone}\n` +
      `*Number of Guests:* ${details.guests}\n` +
      `*Date:* ${details.date}\n` +
      `*Time:* ${details.time}\n` +
      `*Preferred Dining Area:* ${details.area}\n` +
      (details.notes ? `*Special Request:* ${details.notes}\n` : '') +
      `\nKindly confirm table availability. Shukriya!`;
    return `https://wa.me/${restaurantConfig.whatsAppNumber}?text=${encodeURIComponent(text)}`;
  },

  createWhatsAppOrderLink: (dishName: string, price: number) => {
    const text = `*New Order Inquiry - Dastaan*\n\n` +
      `I would like to order: *${dishName}* (Rs. ${price.toLocaleString()})\n\n` +
      `Please let me know estimated preparation and delivery/takeaway details.`;
    return `https://wa.me/${restaurantConfig.whatsAppNumber}?text=${encodeURIComponent(text)}`;
  }
};
