# Kilikood Box Office

A modern, Netflix Kids-inspired ticketing platform built with Next.js 14, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

## 🎯 Features

- **Event Discovery**: Browse events by categories (Popular Events, Coming Soon, Trending Now)
- **Event Details**: Comprehensive event pages with image carousels, ticket selection, and sponsor showcase
- **Member Benefits**: Special pricing for registered members (20% discount)
- **Shopping Cart**: Intuitive ticket selection and cart management
- **Event Hosting**: Complete event creation workflow for non-technical users
- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Yellow and black theme inspired by Netflix Kids

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/albin-oss/kilikood-box-office.git

# Navigate to project directory
cd kilikood-box-office

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
kilikood-box-office/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── create-event/      # Event creation pages
│   └── events/            # Event detail pages
├── components/             # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── EventRow.tsx
│   └── ...
├── public/                 # Static assets
└── ...
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.0 (App Router)
- **Language**: TypeScript 5.3.3
- **Styling**: Tailwind CSS 3.4.0
- **Icons**: React Icons (Feather Icons)

## 📖 Documentation

- **[Platform Documentation](./PLATFORM_DOCUMENTATION.md)** - Complete technical documentation
- **[Prompt Documentation](./PROMPT_DOCUMENTATION.md)** - Quick reference guide
- **[GitHub Upload Guide](./GITHUB_UPLOAD_GUIDE.md)** - How to upload to GitHub
- **[Deployment Guide](./DEPLOY_INSTRUCTIONS.md)** - Deploy to Vercel

## 🎨 Design System

### Colors
- **Primary Yellow**: `#FFD700`
- **Dark Black**: `#121212`
- **Dark Black Light**: `#1E1E1E`

### Typography
- System font stack with antialiased rendering
- Responsive text sizing

## 🚢 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or use the [Vercel Dashboard](https://vercel.com/dashboard).

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🎫 Key Features

### For Users
- Browse and discover events
- View detailed event information
- Select tickets with member/non-member pricing
- Manage shopping cart
- View event sponsors

### For Event Hosts
- Create event host profile
- Add event details and images
- Set up ticket categories and pricing
- Add registered members for special pricing
- Configure bank account for payments

## 🔒 Security

- Client-side form validation
- Secure image upload handling
- Input sanitization
- Environment variable protection

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 👤 Author

**Albin K. Johny**
- GitHub: [@albin-oss](https://github.com/albin-oss)
- Vercel: albin-2675

## 🙏 Acknowledgments

- Design inspired by Netflix Kids
- Built with Next.js and Tailwind CSS
- Icons from React Icons

---

**Made with ❤️ for Kilikood Box Office**
