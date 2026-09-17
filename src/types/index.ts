export interface MenuItem {
  id: string;
  name: string;
  urduName?: string;
  category: 'starters' | 'bbq' | 'pakistani' | 'chinese' | 'continental' | 'desserts' | 'drinks';
  description: string;
  price: number;
  image: string;
  tags: string[];
  spiceLevel: 0 | 1 | 2 | 3 | 4; // 0: None, 1: Mild, 2: Medium, 3: Hot, 4: Desi Fiery
  isVegetarian?: boolean;
  isChefSpecial?: boolean;
  isBestseller?: boolean;
  ingredients: string[];
  serves: string;
  calories?: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  city: string;
  avatar: string;
  rating: number;
  date: string;
  dishRecommended: string;
  review: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'all' | 'food' | 'interior' | 'grills' | 'events';
  image: string;
  caption: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  price: number;
  originalPrice: number;
  description: string;
  validity: string;
  includedItems: string[];
  ctaText: string;
}
