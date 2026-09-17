import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CustomerFavorites } from './components/CustomerFavorites';
import { MenuSection } from './components/MenuSection';
import { ExperienceSection } from './components/ExperienceSection';
import { IntroStory } from './components/IntroStory';
import { GallerySection } from './components/GallerySection';
import { ChefSection } from './components/ChefSection';
import { SpecialOffers } from './components/SpecialOffers';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { FoodModal } from './components/FoodModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { InitialLoader } from './components/InitialLoader';

import { menuData } from './data/menu';
import { customerReviews } from './data/reviews';
import { galleryImages, specialOffers } from './data/gallery';
import { MenuItem } from './types';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedFoodItem, setSelectedFoodItem] = useState<MenuItem | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0907] text-[#EDE8DF] font-sans antialiased selection:bg-amber-500 selection:text-black relative">
      
      {/* Initial Premium Loader */}
      {loading && <InitialLoader onLoaded={() => setLoading(false)} />}

      {/* Main Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenReservation={() => scrollToSection('reservation')}
      />

      {/* Main Page Sections */}
      <main className="relative">
        {/* 1. 3D Hero Section */}
        <Hero
          onViewMenu={() => scrollToSection('menu')}
          onOpenReservation={() => scrollToSection('reservation')}
        />

        {/* 2. Customer Favorites (Inspired by reference design) */}
        <CustomerFavorites
          items={menuData}
          onSelectItem={(item) => setSelectedFoodItem(item)}
          onViewAllMenu={() => scrollToSection('menu')}
          onReadStory={() => scrollToSection('about')}
        />

        {/* 3. Comprehensive Interactive Menu Section */}
        <MenuSection
          items={menuData}
          onSelectItem={(item) => setSelectedFoodItem(item)}
        />

        {/* 4. The Dining Experience Section */}
        <ExperienceSection />

        {/* 5. Special Promotional Offers & Dawats */}
        <SpecialOffers offers={specialOffers} />

        {/* 6. Heritage Story & Philosophy */}
        <IntroStory />

        {/* 7. Executive Chef Section */}
        <ChefSection />

        {/* 8. Responsive Gallery with Lightbox */}
        <GallerySection images={galleryImages} />

        {/* 9. Guest Reviews & Testimonials Carousel */}
        <ReviewsSection reviews={customerReviews} />

        {/* 10. Static Reservation Interface */}
        <ReservationSection />

        {/* 11. Location, Timings, Google Maps & Static Contact Form */}
        <LocationContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Detail Food Modal */}
      <FoodModal
        item={selectedFoodItem}
        onClose={() => setSelectedFoodItem(null)}
      />

      {/* Persistent Floating WhatsApp Concierge Widget */}
      <FloatingWhatsApp />

    </div>
  );
}
