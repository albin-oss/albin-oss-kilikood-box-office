# Kilikood Box Office - Complete Platform Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technical Stack](#technical-stack)
3. [Project Structure](#project-structure)
4. [Design System & Theme](#design-system--theme)
5. [Core Features](#core-features)
6. [Component Documentation](#component-documentation)
7. [Page Documentation](#page-documentation)
8. [User Flows](#user-flows)
9. [Data Models](#data-models)
10. [Deployment Guide](#deployment-guide)
11. [Development Guide](#development-guide)
12. [Future Enhancements](#future-enhancements)

---

## Project Overview

**Kilikood Box Office** is a modern, Netflix Kids-inspired ticketing platform built with Next.js 14. The platform enables users to discover, browse, and purchase tickets for various events while providing event hosts with an intuitive interface to create and manage their events.

### Key Highlights
- **Netflix-inspired UI/UX**: Dark theme with yellow/black color scheme
- **Responsive Design**: Fully responsive across all device sizes
- **Event Discovery**: Browse events by categories (Popular Events, Coming Soon, Trending Now)
- **Event Hosting**: Complete event creation workflow for non-technical users
- **Member Benefits**: Special pricing for registered members
- **Shopping Cart**: Intuitive ticket selection and cart management
- **Sponsor Showcase**: Elegant sponsor display on event pages

---

## Technical Stack

### Core Technologies
- **Framework**: Next.js 14.2.0 (App Router)
- **Language**: TypeScript 5.3.3
- **UI Library**: React 18.2.0
- **Styling**: Tailwind CSS 3.4.0
- **Icons**: React Icons (Feather Icons - Fi series)

### Development Tools
- **Build Tool**: Next.js built-in webpack
- **CSS Processing**: PostCSS with Autoprefixer
- **Type Checking**: TypeScript
- **Package Manager**: npm

### Deployment
- **Platform**: Vercel (recommended)
- **Configuration**: `vercel.json` included
- **Build Command**: `npm run build`
- **Node Version**: Compatible with Node.js 18+

---

## Project Structure

```
kilikood-box-office/
├── app/                          # Next.js App Router directory
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── create-event/
│   │   ├── profile/
│   │   │   └── page.tsx         # Event host profile creation
│   │   └── new/
│   │       └── page.tsx         # Event creation form
│   └── events/
│       └── [id]/
│           └── page.tsx         # Dynamic event detail page
├── components/                   # Reusable React components
│   ├── Header.tsx               # Navigation header
│   ├── Hero.tsx                 # Hero section with featured event
│   ├── EventRow.tsx             # Event grid display component
│   ├── Advertisement.tsx        # Promotional banner
│   ├── Footer.tsx               # Site footer
│   ├── ImageCarousel.tsx        # Image carousel for events
│   ├── TicketSelector.tsx       # Ticket selection component
│   ├── SponsorsSection.tsx      # Sponsor display component
│   └── KilikoodLogo.tsx         # Logo component (optional)
├── public/                      # Static assets (if any)
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
├── vercel.json                  # Vercel deployment config
└── README.md                    # Project readme
```

---

## Design System & Theme

### Color Palette

The platform uses a **Yellow and Black** theme inspired by Netflix Kids:

#### Primary Colors
- **Primary Yellow**: `#FFD700` (Golden Yellow)
- **Primary Yellow Light**: `#FFE873`
- **Primary Yellow Dark**: `#CCAA00`

#### Background Colors
- **Dark Black**: `#121212` (Main background)
- **Dark Black Light**: `#1E1E1E` (Card backgrounds)

#### Accent Colors
- **Green**: Used for age ratings and success messages
- **Gray Scale**: Various shades for text and borders

### Typography
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', etc.)
- **Font Smoothing**: Antialiased for better readability
- **Responsive Sizing**: Uses Tailwind's responsive text utilities

### Spacing & Layout
- **Container**: Max width `7xl` (1280px) with responsive padding
- **Grid System**: Tailwind's responsive grid (1-6 columns based on screen size)
- **Gap System**: Consistent spacing using Tailwind's gap utilities

### Components Styling
- **Cards**: Rounded corners, dark backgrounds, yellow accents
- **Buttons**: Primary (yellow) and secondary (dark) variants
- **Forms**: Dark inputs with yellow focus states
- **Hover Effects**: Smooth transitions on interactive elements

---

## Core Features

### 1. Event Discovery
- **Homepage**: Featured hero event with call-to-action buttons
- **Event Categories**: 
  - Popular Events (12 events)
  - Coming Soon (8 events)
  - Trending Now (8 events)
- **Event Grid**: Responsive 2-row grid layout (3-6 columns based on screen size)
- **Event Cards**: Display image, title, price, date, and venue

### 2. Event Detail Pages
- **Image Carousel**: Multiple event images with navigation
- **Event Information**: Title, description, date, time, venue, duration, age group
- **Member/Non-Member Selection**: Choose membership status
- **Membership Verification**: Form to verify registered members
- **Ticket Selection**: Multiple ticket categories with member discounts
- **Shopping Cart**: Add/remove tickets, view cart, calculate totals
- **Sponsor Showcase**: Display sponsors by category

### 3. Event Creation Workflow
- **Profile Creation**: Event host profile setup (name, email, phone, organization)
- **Event Details**: Name, date, time, venue, description
- **Image Upload**: 
  - Required dimensions: 800x1200 pixels
  - Automatic cropping if needed
  - Image validation
- **Ticket Categories**: 
  - Multiple categories (General, VIP, Premium, etc.)
  - Price per category
  - Number of tickets per category
- **Registered Members**: 
  - Add members for special pricing
  - Fields: Name, Email, Phone, Number of members
- **Bank Account Details**: 
  - Account Number
  - Bank Name
  - Transit Number (5 digits)
  - Institution Number (3 digits)

### 4. User Interface Features
- **Responsive Header**: Fixed navigation with scroll effects
- **Hero Section**: Large featured event with gradient overlays
- **Advertisement Banner**: Promotional section between event categories
- **Footer**: Links, contact info, social media
- **Smooth Scrolling**: Anchor links with smooth scroll behavior
- **Loading States**: Visual feedback during interactions

---

## Component Documentation

### Header Component (`components/Header.tsx`)
**Purpose**: Main navigation bar

**Features**:
- Fixed position with scroll-based background change
- Brand logo/text: "Kilikood Box Office"
- Navigation links: Home, Events, About
- Action buttons: Add Your Event, Search, Notifications, User Profile
- Responsive design (mobile menu on small screens)

**Props**: None (uses internal state for scroll detection)

**State**:
- `scrolled`: Boolean to track scroll position

---

### Hero Component (`components/Hero.tsx`)
**Purpose**: Featured event showcase section

**Features**:
- Full-height hero section (80vh)
- Background image with gradient overlays
- Event title and description
- Call-to-action buttons:
  - "Get Tickets" → Links to event detail page with #tickets anchor
  - "More Info" → Links to full event detail page
- Event metadata: Age rating, duration, starting price

**Props**: None (hardcoded for Vineeth Sreenivasan event)

**Styling**:
- Multiple gradient overlays for text readability
- Yellow accent gradients
- Responsive typography

---

### EventRow Component (`components/EventRow.tsx`)
**Purpose**: Display grid of event cards

**Features**:
- Responsive grid layout (3-6 columns)
- Event cards with:
  - Image (aspect ratio 4:5)
  - Event title (2-line support)
  - Price (highlighted in yellow)
  - Date and venue
- Hover effects: Image zoom, title color change
- Clickable cards linking to event detail pages

**Props**:
```typescript
interface EventRowProps {
  title: string              // Section title (e.g., "Popular Events")
  events: Event[]            // Array of event objects
}
```

**Event Interface**:
```typescript
interface Event {
  id: number
  title: string
  image: string
  price: number
  date: string
  venue: string
}
```

---

### Advertisement Component (`components/Advertisement.tsx`)
**Purpose**: Promotional banner section

**Features**:
- Dismissible banner (X button)
- Two-column layout (text + image)
- Special offer highlighting
- Call-to-action button
- Yellow/black theme matching

**Props**: None

**State**:
- `isVisible`: Boolean to control visibility

---

### Footer Component (`components/Footer.tsx`)
**Purpose**: Site footer with links and information

**Features**:
- Four-column layout:
  1. Brand section with social media links
  2. Quick Links navigation
  3. Support links
  4. Contact information
- Social media icons (Facebook, Twitter, Instagram, YouTube)
- Copyright and legal links
- Responsive grid layout

**Props**: None

---

### ImageCarousel Component (`components/ImageCarousel.tsx`)
**Purpose**: Display multiple event images in a carousel

**Features**:
- Image navigation (previous/next buttons)
- Dot indicators for current image
- Aspect ratio: 2:3 (portrait)
- Smooth transitions
- Responsive design

**Props**:
```typescript
interface ImageCarouselProps {
  images: string[]          // Array of image URLs
  title: string            // Event title for alt text
}
```

**State**:
- `currentIndex`: Number tracking current image

---

### TicketSelector Component (`components/TicketSelector.tsx`)
**Purpose**: Ticket category selection with cart functionality

**Features**:
- Display multiple ticket categories
- Show regular and member prices
- Quantity selector (+/- buttons)
- Available ticket count
- Member discount indicator (20% off)
- Real-time cart updates
- Disabled state when sold out

**Props**:
```typescript
interface TicketSelectorProps {
  categories: TicketCategory[]
  isMember: boolean
  onCartUpdate: (items: CartItem[]) => void
}
```

**Interfaces**:
```typescript
interface TicketCategory {
  id: string
  name: string
  price: number
  memberPrice: number
  quantity: number
}

interface CartItem {
  categoryId: string
  categoryName: string
  quantity: number
  price: number
}
```

---

### SponsorsSection Component (`components/SponsorsSection.tsx`)
**Purpose**: Display event sponsors elegantly

**Features**:
- Group sponsors by category (Platinum, Gold, Silver, etc.)
- Responsive grid layout
- Sponsor logo/image display
- Sponsor name
- Hover effects
- Category headers

**Props**:
```typescript
interface SponsorsSectionProps {
  sponsors: Sponsor[]
}
```

**Sponsor Interface**:
```typescript
interface Sponsor {
  id: string
  category: string
  name: string
  image: string
}
```

---

## Page Documentation

### Homepage (`app/page.tsx`)
**Route**: `/`

**Purpose**: Main landing page with event discovery

**Features**:
- Header component
- Hero section with featured event
- Event categories:
  - Popular Events (12 events)
  - Advertisement banner
  - Coming Soon (8 events)
  - Trending Now (8 events)
- Footer component

**Layout**:
- Full-width hero section
- Content sections with max-width container
- Proper spacing between sections

---

### Event Detail Page (`app/events/[id]/page.tsx`)
**Route**: `/events/[id]` (dynamic route)

**Purpose**: Display complete event information and ticket purchase

**Features**:
1. **Image Carousel**: Multiple event images
2. **Event Information**:
   - Title
   - Description (highlighted in yellow box)
   - Date, Time, Venue, Duration, Age Group
3. **Member Selection**:
   - Choose "Member" or "Non-Member"
   - Member verification form (Name, Email, Phone)
   - Verification status indicator
4. **Ticket Selection**:
   - Multiple ticket categories
   - Member pricing (20% discount)
   - Add/remove tickets
   - Available quantity display
5. **Shopping Cart**:
   - View/Hide cart toggle
   - Cart items with quantities
   - Total price calculation
   - Proceed to Checkout button
6. **Sponsors Section**: Display all event sponsors

**State Management**:
- `isMember`: 'member' | 'non-member' | null
- `showMemberForm`: Boolean
- `memberDetails`: { name, email, phone }
- `memberVerified`: Boolean
- `cart`: CartItem[]
- `showCart`: Boolean

**URL Anchors**:
- `#tickets`: Scrolls to ticket selection section
- `#member-selection`: Scrolls to membership selection

---

### Profile Creation Page (`app/create-event/profile/page.tsx`)
**Route**: `/create-event/profile`

**Purpose**: Create event host profile before creating events

**Features**:
- Form fields:
  - Full Name (required)
  - Email Address (required, validated)
  - Phone Number (required)
  - Organization Name (optional)
- Form validation
- Session storage for profile data
- Navigation to event creation page

**Validation**:
- Email format validation
- Required field checks
- Error messages display

**Data Storage**:
- Profile data stored in `sessionStorage` as 'eventCreatorProfile'

---

### Event Creation Page (`app/create-event/new/page.tsx`)
**Route**: `/create-event/new`

**Purpose**: Complete event creation form

**Features**:

1. **Event Basic Information**:
   - Event Name (required)
   - Date & Time (required)
   - Venue (required)
   - Description (optional)

2. **Event Image**:
   - File upload
   - Required dimensions: 800x1200 pixels
   - Automatic dimension validation
   - Crop modal if dimensions don't match
   - Image preview

3. **Ticket Categories**:
   - Add multiple categories
   - For each category:
     - Category Name (required)
     - Price (required, > 0)
     - Number of Tickets (required, > 0)
   - Add/remove categories dynamically

4. **Registered Members** (Optional):
   - Add multiple registered members
   - For each member:
     - Full Name (required)
     - Email Address (required, validated)
     - Phone Number (required)
     - Number of Members (required, > 0)
   - Add/remove members dynamically

5. **Bank Account Details** (Required):
   - Bank Name (required)
   - Account Number (required)
   - Transit Number (required, exactly 5 digits)
   - Institution Number (required, exactly 3 digits)
   - Helpful hints for common banks

**Validation**:
- Comprehensive form validation
- Field-specific error messages
- Email format validation
- Numeric validation for prices and quantities
- Length validation for transit/institution numbers

**Image Processing**:
- Client-side dimension checking
- Automatic cropping to required dimensions
- Canvas-based image manipulation

**Data Flow**:
- Reads profile from sessionStorage
- Validates all fields before submission
- Success message on completion
- Redirects to homepage after creation

---

## User Flows

### Flow 1: Browse and Purchase Tickets

1. **Landing on Homepage**
   - User sees hero section with featured event
   - Scrolls to see event categories
   - Clicks on an event card

2. **Viewing Event Details**
   - User lands on event detail page
   - Views event images in carousel
   - Reads event description and details

3. **Selecting Membership Status**
   - User chooses "Member" or "Non-Member"
   - If member: Fills verification form
   - System verifies membership

4. **Selecting Tickets**
   - User views available ticket categories
   - Sees member pricing if verified
   - Adds tickets to cart using +/- buttons

5. **Reviewing Cart**
   - User clicks "View Cart"
   - Reviews selected tickets and total
   - Clicks "Proceed to Checkout"

### Flow 2: Create and Host an Event

1. **Starting Event Creation**
   - User clicks "Add Your Event" in header
   - Redirected to profile creation page

2. **Creating Profile**
   - User fills profile form
   - Submits profile
   - Profile saved to sessionStorage

3. **Creating Event**
   - User redirected to event creation page
   - Fills event basic information
   - Uploads event image (validated and cropped if needed)

4. **Setting Up Tickets**
   - User adds ticket categories
   - Sets prices and quantities for each

5. **Adding Members** (Optional)
   - User adds registered members for special pricing
   - Fills member details

6. **Adding Bank Details**
   - User enters bank account information
   - System validates transit/institution numbers

7. **Submitting Event**
   - User reviews all information
   - Submits event
   - Receives success confirmation
   - Redirected to homepage

---

## Data Models

### Event Model
```typescript
interface Event {
  id: number
  title: string
  images: string[]                    // Array of image URLs
  price: number                       // Base/starting price
  date: string                        // Format: YYYY-MM-DD
  time: string                        // Format: HH:MM AM/PM
  venue: string
  description: string
  duration: string                    // e.g., "120 minutes"
  ageGroup: string                    // e.g., "All Ages", "18+"
  ticketCategories: TicketCategory[]
  sponsors: Sponsor[]
}
```

### Ticket Category Model
```typescript
interface TicketCategory {
  id: string
  name: string                        // e.g., "General Admission", "VIP"
  price: number                       // Regular price
  memberPrice: number                 // Member discounted price
  quantity: number                    // Available tickets
}
```

### Sponsor Model
```typescript
interface Sponsor {
  id: string
  category: string                    // e.g., "Platinum", "Gold", "Silver"
  name: string
  image: string                       // Sponsor logo URL
}
```

### Cart Item Model
```typescript
interface CartItem {
  categoryId: string
  categoryName: string
  quantity: number
  price: number                       // Current price (member or regular)
}
```

### Event Host Profile Model
```typescript
interface EventHostProfile {
  name: string
  email: string
  phone: string
  organization?: string
}
```

### Registered Member Model
```typescript
interface RegisteredMember {
  id: string
  name: string
  email: string
  phone: string
  memberCount: number                 // Number of members under primary membership
}
```

### Bank Account Model
```typescript
interface BankAccount {
  accountNumber: string
  bank: string
  transitNumber: string               // 5 digits
  institutionNumber: string           // 3 digits
}
```

---

## Deployment Guide

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git repository initialized
- Vercel account (for deployment)

### Local Development Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Access at: `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Start Production Server**
   ```bash
   npm start
   ```

### Vercel Deployment

#### Option 1: Vercel CLI
```bash
# Login to Vercel
npx vercel login

# Deploy to preview
npx vercel

# Deploy to production
npx vercel --prod
```

#### Option 2: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login
3. Click "Add New Project"
4. Import Git repository
5. Vercel auto-detects Next.js
6. Click "Deploy"

### Environment Variables
Currently, no environment variables are required. For production, you may want to add:
- `NEXT_PUBLIC_API_URL` (if using backend API)
- `STRIPE_PUBLIC_KEY` (for payment integration)
- Other service keys as needed

### Build Configuration
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node Version**: 18.x (recommended)

---

## Development Guide

### Adding New Events

Events are currently hardcoded in `app/events/[id]/page.tsx`. To add new events:

1. Add event object to `events` array
2. Include all required fields (see Event Model)
3. Add event to homepage categories in `app/page.tsx`

### Modifying Theme Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  'primary-yellow': '#FFD700',
  'primary-yellow-light': '#FFE873',
  'primary-yellow-dark': '#CCAA00',
  'dark-black': '#121212',
  'dark-black-light': '#1E1E1E',
}
```

### Adding New Components

1. Create component file in `components/` directory
2. Use TypeScript with proper interfaces
3. Follow existing component patterns
4. Import and use in pages

### Styling Guidelines

- Use Tailwind utility classes
- Follow existing color scheme
- Maintain responsive design
- Use consistent spacing (Tailwind spacing scale)
- Add hover states for interactive elements
- Use transitions for smooth animations

### Code Structure Best Practices

- **Components**: Reusable, single responsibility
- **Pages**: Route-specific logic
- **Types**: Define interfaces for all data structures
- **State**: Use React hooks (useState, useEffect)
- **Validation**: Client-side validation with error messages
- **Accessibility**: Use semantic HTML, ARIA labels where needed

---

## Future Enhancements

### Backend Integration
- [ ] API endpoints for events
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] User authentication system
- [ ] Payment processing (Stripe integration)
- [ ] Email notifications

### Features
- [ ] User accounts and profiles
- [ ] Event search and filtering
- [ ] Event categories/tags
- [ ] User reviews and ratings
- [ ] Event favorites/wishlist
- [ ] Social sharing
- [ ] Email ticket delivery
- [ ] QR code generation for tickets
- [ ] Event analytics dashboard
- [ ] Multi-language support

### UI/UX Improvements
- [ ] Loading skeletons
- [ ] Error boundaries
- [ ] Toast notifications
- [ ] Image lazy loading
- [ ] Infinite scroll for events
- [ ] Advanced filtering UI
- [ ] Dark/light theme toggle

### Performance
- [ ] Image optimization (Next.js Image component)
- [ ] Code splitting optimization
- [ ] Caching strategies
- [ ] CDN integration
- [ ] Service worker for offline support

### Security
- [ ] Input sanitization
- [ ] CSRF protection
- [ ] Rate limiting
- [ ] Secure payment processing
- [ ] Data encryption

---

## Troubleshooting

### Common Issues

1. **Build Errors**
   - Check TypeScript errors: `npm run build`
   - Verify all imports are correct
   - Check for missing dependencies

2. **Styling Issues**
   - Clear `.next` cache: `rm -rf .next`
   - Rebuild: `npm run build`
   - Check Tailwind config

3. **Image Upload Issues**
   - Verify image dimensions
   - Check browser console for errors
   - Ensure file size is reasonable

4. **Deployment Issues**
   - Check `vercel.json` configuration
   - Verify build command
   - Check Node.js version compatibility

---

## Support & Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

### Project Files
- `package.json`: Dependencies and scripts
- `tailwind.config.js`: Tailwind configuration
- `tsconfig.json`: TypeScript configuration
- `next.config.js`: Next.js configuration
- `vercel.json`: Deployment configuration

---

## Version History

### Version 1.0.0 (Current)
- Initial release
- Complete event discovery and detail pages
- Event creation workflow
- Member/non-member ticket pricing
- Shopping cart functionality
- Sponsor showcase
- Responsive design
- Yellow/black theme

---

## License

This project is private and proprietary.

---

## Contact

For questions or support regarding Kilikood Box Office, please refer to the contact information in the Footer component or reach out through the platform's support channels.

---

**Document Version**: 1.0.0  
**Last Updated**: 2024  
**Platform**: Kilikood Box Office  
**Framework**: Next.js 14.2.0

