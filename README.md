# Zeitona Homepage

A modern, high-performance, and lightweight landing page for **Zeitona** — reimagined with a minimalist Vanilla architecture and a premium Light Theme aesthetic.

## 🚀 Overview

This repository contains the official Zeitona homepage. Originally built on a React/Tailwind stack, the project was migrated to **Pure HTML5, CSS3, and Vanilla JavaScript** to ensure maximum performance, instant load times, and effortless hosting on platforms like GitHub Pages.

## ✨ Key Features

- **Performance First**: Zero external JavaScript frameworks or heavy CSS libraries.
- **Premium Design System**:
  - **Light Theme**: A clean `#FFFFFF` background with high-contrast `#013D2F` (Dark Green) typography.
  - **Brand Palette**: Integrated use of Zeitona's colors (`#013D2F`, `#7FA800`, `#EB0008`, `#328217`).
  - **Glassmorphism**: Sophisticated frosted-glass navigation and UI elements.
  - **Fluid Animations**: Custom scroll-triggered fade-up effects and interactive hero blobs.
- **Fully Responsive**: Optimized for every screen size using CSS Grid and Flexbox.
- **SEO Optimized**: Standardized heading hierarchy and semantic HTML.
- **Direct Contact**: Integrated "mailto" links and LinkedIn social connectivity.

## 🛠️ Technology Stack

- **Structure**: Semantic HTML5
- **Styling**: Vanilla CSS3 (CSS Variables, Flexbox, Grid)
- **Typography**: [Open Sans](https://fonts.google.com/specimen/Open+Sans) via Google Fonts
- **Interactions**: Vanilla JavaScript (`IntersectionObserver` for animations)
- **Icons**: Optimized Inline SVGs

## 📁 Project Structure

```text
/
├── assets/          # Branding assets (Logos, Favicons)
├── index.html       # Main entrance and structure
├── style.css        # Modular design system and theme variables
└── script.js       # Interaction logic and scroll effects
```

## ⚙️ Development & Maintenance

### Running Locally
Simply open `index.html` in any modern web browser. No build steps required.

### Updating Brand Colors
All core colors are managed via CSS Variables in `style.css` under the `:root` block:

```css
:root {
  --brand-dark-green: #013D2F;
  --brand-olive: #7FA800;
  /* ... */
}
```

### Changing Assets
Replace files in the `/assets` directory. Ensure the filenames match those referenced in `index.html`.

## 📬 Contact

For inquiries, reach out to us at:
- **Email**: [contact@zeitona.pt](mailto:contact@zeitona.pt)
- **LinkedIn**: [Zeitona Digital](https://www.linkedin.com/company/zeitona/)

---

*&copy; 2026 Zeitona. All rights reserved.*
