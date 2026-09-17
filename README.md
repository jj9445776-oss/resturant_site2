# Dastaan — Premium Static Pakistani Restaurant Website

A production-ready, ultra-fast **static restaurant website** built for a high-end Pakistani restaurant featuring authentic Mughal flavors, live charcoal sigri grills, interactive 3D hero presentation, and zero server-side dependencies.

Designed specifically for direct static deployment to:
* **Hostinger Shared Hosting** (upload to `public_html/`)
* **Netlify**
* **GitHub Pages**

---

## 1. Project Overview

* **Brand Name:** Dastaan (داستان - ذائقۂ شاہی)
* **Architecture:** 100% Client-Side Static Single Page Application (SPA).
* **Backend Requirements:** **NONE**. No Node.js server, no database, no Firebase, no MongoDB, no server-side auth or payment credentials required.
* **Key Features:**
  * Interactive 3D Royal Charcoal & Karahi Platter with Three.js (including automatic WebGL fallback).
  * Dynamic Customer Favorites section inspired by modern bold culinary presentation.
  * Comprehensive interactive menu with live search, category tabs, and spice/vegetarian filters.
  * Interactive Food Detail Modal with spice meters, portion sizes, ingredients, and 1-click WhatsApp order.
  * Dining Experience showcase (Mughal Courtyard, Sigri Tandoor Theater, Family Suites, Rooftop Terrace).
  * Filterable photo gallery with full-screen Lightbox.
  * Authentic Guest Reviews slider.
  * Static Table Reservation form routing directly to WhatsApp with formatted booking text.
  * Static Contact Form with email/Formspree/Netlify integration points.
  * Floating WhatsApp Concierge Widget with quick prompts.
  * Full static SEO with Open Graph, Twitter Cards, Schema.org `Restaurant` & `LocalBusiness` JSON-LD, `robots.txt`, and `sitemap.xml`.

---

## 2. Technology Used

* **Framework:** React 19 + TypeScript
* **Build Tool:** Vite 6
* **Styling:** Tailwind CSS v4 + Custom Mughal motifs & luxury gold palettes
* **3D Visuals:** Three.js (Optimized scene with ambient particles, embers, and mouse tilt parallax)
* **Icons:** Lucide React
* **Typography:** Cinzel (royal serif display headings), Plus Jakarta Sans (clean modern body), and Amiri (Urdu calligraphy)

---

## 3. How to Install & Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/your-username/dastaan-restaurant.git
cd dastaan-restaurant

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 4. How to Edit Restaurant Information

All primary business information is located in a single central file:
📁 **`src/config/restaurant.ts`**

You can update:
* **Restaurant Name & Tagline:** `restaurantConfig.name`, `restaurantConfig.fullName`, `restaurantConfig.tagline`
* **WhatsApp Number:** `restaurantConfig.whatsAppNumber` (e.g., `'923008457722'` without leading `+` or spaces)
* **Phone Numbers:** `restaurantConfig.phone`, `restaurantConfig.mobile`
* **Address:** `restaurantConfig.address`, `restaurantConfig.city`
* **Opening Hours:** `restaurantConfig.openingHours`
* **Social Media Links:** `restaurantConfig.socials`
* **Google Maps Embed & Directions:** `restaurantConfig.googleMaps`

---

## 5. How to Edit Menu Items & Prices

The entire menu is cleanly stored in:
📁 **`src/data/menu.ts`**

Each dish contains:
```typescript
{
  id: 'mutton-seekh-kebab',
  name: 'Royal Mutton Seekh Kabab',
  urduName: 'شاہی مٹن سیخ کباب',
  category: 'bbq', // 'starters' | 'bbq' | 'pakistani' | 'chinese' | 'continental' | 'desserts' | 'drinks'
  description: 'Fresh prime mutton minced with roasted cumin...',
  price: 1850, // in PKR
  image: 'https://...', // URL or /images/dish.jpg
  tags: ['Signature', 'Charcoal Grills', 'Halal'],
  spiceLevel: 2, // 0 to 4
  ingredients: ['Prime minced mutton', 'Fresh coriander', ...],
  serves: '2-3 Persons',
}
```

Simply edit dish names, prices, descriptions, or add new items. The menu filter, search, and detail modal will automatically reflect your changes.

---

## 6. How to Replace Images

You can either:
1. Place your own high-resolution food and interior photos in the `public/` directory (e.g. `public/images/biryani.jpg`), and reference them in `src/data/menu.ts` and `src/data/gallery.ts` as `/images/biryani.jpg`.
2. Or use any high-speed image CDN / Unsplash URL directly.

---

## 7. How to Build the Production Static Version

Run the build command:
```bash
npm run build
```

This will compile the website into the **`dist/`** directory.
The generated `dist/` directory contains:
* `index.html`
* `assets/` (bundled JavaScript and CSS)
* `robots.txt`
* `sitemap.xml`

**No Node.js or backend server is required after this step!**

---

## 8. How to Deploy to Hostinger Shared Hosting

1. Run `npm run build` on your computer.
2. Log into your **Hostinger hPanel** control panel.
3. Open **File Manager** and navigate to your website's folder:
   ```text
   public_html/
   ```
4. Upload all contents from the local **`dist/`** folder directly into `public_html/`.
   *(Ensure `index.html` is directly inside `public_html/`, not inside a nested subfolder).*
5. Your website is immediately live at your domain with SSL.

---

## 9. How to Deploy to Netlify

1. Push your repository to GitHub.
2. Log in to [Netlify](https://www.netlify.com).
3. Click **"Add new site"** → **"Import an existing project"** → Select your GitHub repository.
4. Set Build Settings:
   * **Build command:** `npm run build`
   * **Publish directory:** `dist`
5. Click **Deploy Site**. Netlify will automatically build and publish your static website with free SSL and global CDN.

---

## 10. How to Deploy via GitHub Pages

1. In `vite.config.ts`, ensure `base: './'` if deploying to a repository subpath.
2. Push your code to GitHub.
3. In your GitHub repository settings, go to **Pages** → Build and deployment → Source: **GitHub Actions** (choose the Vite template).
4. GitHub Pages will build and host the site automatically.

---

## 11. WhatsApp Integration

Because this website targets Pakistan, prominent WhatsApp CTAs are placed across the website:
* **Floating Concierge Widget:** One-click customer service.
* **Food Modal Direct Order:** Automatically pre-fills the dish name and PKR price into WhatsApp.
* **Table Reservation Form:** Formats the guest name, party size, date, time, and dining area into a structured WhatsApp confirmation message.

To change the WhatsApp number across the entire site, change **only one value**:
```typescript
// in src/config/restaurant.ts
whatsAppNumber: "923008457722", // Country code 92 followed by 10 digits without '+'
whatsAppDisplay: "+92 300 845 7722",
```

---

## 12. License & Ownership

Created for Dastaan Restaurant. 100% open for customization, white-labeling, and commercial deployment.
