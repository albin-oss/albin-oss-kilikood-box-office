# Kilikood Box Office - Kids Events Ticketing Platform

A modern ticketing platform inspired by Netflix's Kids section design, built with Next.js, React, and Tailwind CSS.

## Features

- 🎫 Event browsing with Netflix-inspired card layout
- 🎨 Dark theme UI matching Netflix's aesthetic
- 📱 Fully responsive design
- 🎭 Multiple event categories
- 🔍 Event detail pages with ticket purchasing
- ⚡ Fast and optimized with Next.js 14

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   └── events/
│       └── [id]/
│           └── page.tsx    # Event detail page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx           # Hero section
│   └── EventRow.tsx       # Horizontal scrolling event row
└── package.json
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Icons** - Icon library

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

