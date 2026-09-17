import { GalleryImage, SpecialOffer } from '../types';

export const galleryImages: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'Live Sigri Charcoal Seekh Grills',
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
    caption: 'Chef Tariq turning royal mutton seekh skewers over red-hot coals.'
  },
  {
    id: 'gal-2',
    title: 'Grand Royal Dining Courtyard',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    caption: 'Intricate Mughal arches, warm amber pendant lamps, and hand-carved rosewood tables.'
  },
  {
    id: 'gal-3',
    title: 'Aged Basmati Mutton Dum Biryani',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop',
    caption: 'Clay handi opened tableside revealing fragrant saffron steam.'
  },
  {
    id: 'gal-4',
    title: 'Private Family Banquet & Dawat',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop',
    caption: 'Curated royal table setting for anniversary and family celebrations.'
  },
  {
    id: 'gal-5',
    title: 'Shinwari Mutton Karahi in Cast Iron',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop',
    caption: 'Sizzling karahi garnished with fresh coriander, ginger, and green chilies.'
  },
  {
    id: 'gal-6',
    title: 'Artisanal Clay Tandoor Breads',
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop',
    caption: 'Golden sesame Roghni Naans slapped fresh onto underground earthen tandoors.'
  },
  {
    id: 'gal-7',
    title: 'The Terrace Lounge at Dusk',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200&auto=format&fit=crop',
    caption: 'Open-air rooftop seating overlooking the bustling MM Alam lights.'
  },
  {
    id: 'gal-8',
    title: 'Catering & Corporate Dawat Setup',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop',
    caption: 'Buffet dawat with customized copper handis and dedicated grill station.'
  }
];

export const specialOffers: SpecialOffer[] = [
  {
    id: 'weekend-family-dawat',
    title: 'Royal Weekend Family Dawat (Serves 4-5)',
    subtitle: 'Friday to Sunday Feast',
    badge: 'Popular for Families',
    price: 6990,
    originalPrice: 8400,
    description: 'A complete royal feast featuring 1kg Shinwari Mutton Karahi, 4 Mutton Seekh Kababs, 6 Chicken Malai Boti, 1 Handi Dum Biryani, 6 Roghni Naans, Mint Margaritas, and Matka Kheer.',
    validity: 'Friday to Sunday • Dine-in & Takeaway',
    includedItems: [
      '1kg Fresh Shinwari Mutton Karahi',
      '4 Skewers Royal Mutton Seekh Kabab',
      '6 Pcs Creamy Malai Boti',
      '1 Handi Mutton Dum Biryani',
      '6 Roghni / Garlic Naan basket',
      '4 Signature Mint Margaritas',
      '2 Matka Shahi Zafrani Kheer'
    ],
    ctaText: 'Reserve Dawat via WhatsApp'
  },
  {
    id: 'shaam-e-kabab-platter',
    title: 'Shaam-e-Kabab Royal BBQ Platter',
    subtitle: 'Daily 05:00 PM – 08:00 PM',
    badge: 'Grill Master Choice',
    price: 3850,
    originalPrice: 4600,
    description: 'Assorted charcoal grills: 2 Beef Chapli Kababs, 2 Mutton Seekh, 4 Malai Boti, 4 Kastoori Boti with mint raita, tamarind chutney, and 3 sesame Roghni naans.',
    validity: 'Everyday High-Tea & Sunset Hours',
    includedItems: [
      '2 Crisp Peshawari Chapli Kababs',
      '2 Royal Mutton Seekh Kababs',
      '4 Tender Malai Boti pieces',
      '4 Smoky Kastoori Boti pieces',
      'House special chutneys & spicy onion salad',
      '3 Hot Roghni Naans'
    ],
    ctaText: 'Order Platter via WhatsApp'
  }
];
