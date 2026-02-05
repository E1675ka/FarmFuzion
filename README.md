# FarmFuzion - Next.js Landing Page

A modern landing page built with Next.js, React, and Tailwind CSS for FarmFuzion - a platform connecting farmers, cooperatives, and service providers.

## Features

- 📱 Mobile-first responsive design
- ⚡ Fast performance with Next.js 14
- 🎨 Beautiful UI with Tailwind CSS
- 🔧 TypeScript support
- 🧹 ESLint configured

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
└── components/
    ├── Header.tsx      # Navigation header
    ├── Hero.tsx        # Hero section
    ├── Partners.tsx    # Partners section
    ├── About.tsx       # About section
    ├── Mobile.tsx      # Mobile app section
    ├── CoreOfferings.tsx # Services/offerings
    ├── CTA.tsx         # Call to action
    ├── ComingSoon.tsx  # Coming soon devices
    └── Footer.tsx      # Footer
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Build

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **ESLint** - Code quality

## Color Scheme

- Primary Green: `#1a5f3f`
- Light Green: `#87cc3f`
- Dark: `#0d3a24`

## Customization

Edit the tailwind config in `tailwind.config.ts` to customize colors and add more utilities.

Components are located in `src/components/` and can be easily customized to match your brand.
