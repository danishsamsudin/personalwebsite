# Modern Futuristic Personal Portfolio

A high-end, professional, and modern personal website that balances "Business Executive" with "High-Performance Adventurer." Built with a minimalist-futuristic aesthetic featuring clean lines, subtle glassmorphism, and smooth transitions.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Geist Sans
- **Language:** TypeScript

## Features

- **Dark Mode First:** Deep slate/black backgrounds with electric blue accents
- **Glassmorphism:** Subtle backdrop blur effects and border glows
- **Smooth Animations:** Scroll reveals, staggered entrances, and micro-interactions
- **Responsive Design:** Mobile-first approach with full desktop optimization
- **Floating Navigation:** Glassmorphism dock with active section indicators
- **Interactive Elements:** Magnetic buttons, 3D hover effects, and animated backgrounds

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with font and navigation
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles and theme
├── components/
│   ├── Hero.tsx            # Hero section with interactive background
│   ├── BusinessSection.tsx # Business & Experience cards
│   ├── AchievementsSection.tsx # Win Wall with stats
│   ├── StudiesSection.tsx  # Knowledge Stack
│   ├── AdventurerSection.tsx # Lifestyle gallery
│   ├── FloatingNav.tsx    # Navigation dock
│   ├── SectionShell.tsx   # Reusable section wrapper
│   ├── BentoCard.tsx      # Glassmorphism card component
│   └── AnimatedGridBackground.tsx # Interactive grid
└── public/                 # Static assets
```

## Customization

### Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --background: #020617;
  --foreground: #f8fafc;
  --accent: #38bdf8;
  --muted: #1e293b;
  --border: rgba(56, 189, 248, 0.1);
}
```

### Content

Update placeholder content in each component file:
- `components/Hero.tsx` - Headlines and CTAs
- `components/BusinessSection.tsx` - Experience data
- `components/AchievementsSection.tsx` - Stats and awards
- `components/StudiesSection.tsx` - Education and certifications
- `components/AdventurerSection.tsx` - Adventure interests

## Design Principles

- **Minimalist-Futuristic:** Clean lines, subtle effects, sophisticated
- **Performance First:** Fast loading, smooth animations
- **Mobile Responsive:** Touch-friendly, adaptive layouts
- **Accessible:** Semantic HTML, proper contrast ratios

## License

Private project - All rights reserved.
