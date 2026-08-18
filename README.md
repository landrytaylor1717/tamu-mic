# Maroon Investment Club — Web Platform

The official web platform for the **Maroon Investment Club (MIC)** at Texas A&M University. A production-ready Next.js application showcasing the club's dual-division investment fund, leadership, and application portal.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)

## Features

- **Home** — Hero section with animated gradient, club statistics with count-up animations, division previews, and sponsor ticker
- **About** — Interactive timeline, leadership team grid, and tiered corporate sponsors
- **Maroon Fund** — Fund overview with recharts performance chart, sector allocation bars, and investment philosophy
- **Equities Division** — Sector coverage (TMT, Healthcare, Energy), 5-step investment pipeline, and sample stock pitch
- **Quant Division** — Terminal-inspired UI, Python code blocks, strategy performance metrics, and backtesting results table
- **Apply** — Application form with client-side validation, division radio selection, and animated success state

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js](https://nextjs.org) (App Router) | Framework & routing |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling & design system |
| [Framer Motion](https://www.framer.com/motion/) | Animations & page transitions |
| [Recharts](https://recharts.org) | Fund performance charts |
| [Lucide React](https://lucide.dev) | Icon system |

## Getting Started

### Prerequisites

- Node.js 18.17+
- npm 9+

### Local Development

```bash
# Clone the repository
git clone <repository-url>
cd tamu-mic

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Deployment (Vercel)

This project is optimized for deployment on [Vercel](https://vercel.com).

### Option 1: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to your Vercel account
vercel login

# Deploy to production
vercel --prod
```

### Option 2: Git Integration

1. Push this repository to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel auto-detects Next.js — click **Deploy**

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (NavBar, Footer, fonts)
│   ├── page.tsx            # Home (/)
│   ├── about/              # About (/about)
│   ├── maroon-fund/        # Fund Overview (/maroon-fund)
│   │   ├── equities/       # Equities Division (/maroon-fund/equities)
│   │   └── quant/          # Quant Division (/maroon-fund/quant)
│   └── apply/              # Apply (/apply)
├── components/             # Shared UI components
│   ├── NavBar.tsx           # Sticky nav with dropdown & mobile menu
│   ├── Footer.tsx           # Multi-column footer
│   ├── StatCard.tsx         # Animated statistics card
│   ├── MemberProfile.tsx    # Leadership profile card
│   ├── PerformanceChart.tsx # Recharts fund performance chart
│   ├── DivisionHero.tsx     # Division hero (equities/quant variants)
│   ├── SectionHeading.tsx   # Consistent section title
│   └── PageTransition.tsx   # Framer Motion page wrapper
└── data/                   # Dummy data layer
    ├── leadership.ts
    ├── fund-metrics.ts
    ├── sponsors.ts
    ├── sectors.ts
    └── quant-strategies.ts
```

## License

© 2025 Maroon Investment Club. All rights reserved.
