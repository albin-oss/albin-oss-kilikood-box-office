# Kilikood Box Office - Complete Prompt Documentation

## Project Description

Create a modern ticketing platform called **"Kilikood Box Office"** inspired by Netflix Kids design, featuring a yellow and black color theme. The platform allows users to discover events, purchase tickets, and enables event hosts to create and manage their events.

---

## Technical Requirements

### Framework & Stack
- **Next.js 14.2.0** with App Router
- **TypeScript 5.3.3**
- **React 18.2.0**
- **Tailwind CSS 3.4.0** for styling
- **React Icons** (Feather Icons - Fi series) for icons

### Project Structure
```
app/
  ├── layout.tsx              # Root layout
  ├── page.tsx                # Homepage
  ├── globals.css             # Global styles
  ├── create-event/
  │   ├── profile/page.tsx    # Profile creation
  │   └── new/page.tsx        # Event creation
  └── events/[id]/page.tsx    # Event detail page

components/
  ├── Header.tsx              # Navigation
  ├── Hero.tsx                # Hero section
  ├── EventRow.tsx            # Event grid
  ├── Advertisement.tsx       # Promo banner
  ├── Footer.tsx              # Footer
  ├── ImageCarousel.tsx       # Image carousel
  ├── TicketSelector.tsx      # Ticket selection
  └── SponsorsSection.tsx     # Sponsor display
```

---

## Design System

### Color Palette
- **Primary Yellow**: `#FFD700`
- **Primary Yellow Light**: `#FFE873`
- **Primary Yellow Dark**: `#CCAA00`
- **Dark Black**: `#121212` (background)
- **Dark Black Light**: `#1E1E1E` (cards)

### Typography
- System font stack
- Responsive text sizing
- Antialiased rendering

### Layout
- Max container width: `7xl` (1280px)
- Responsive grid: 3-6 columns based on screen size
- Consistent spacing using Tailwind utilities

---

## Homepage Features

### Header Component
- Fixed position with scroll-based background change
- Brand: "Kilikood Box Office" (text only, yellow color)
- Navigation: Home, Events, About
- Right-aligned: "Add Your Event" button, Search, Notifications, User icons
- Responsive design

### Hero Section
- Full-height section (80vh)
- Background image with gradient overlays
- Featured event: "Vineeth Sreenivasan Live in Concert"
- Two buttons:
  - **"Get Tickets"**: Links to `/events/2#tickets` (scrolls to tickets)
  - **"More Info"**: Links to `/events/2` (full event page)
- Event metadata: Age rating, Duration, Starting price

### Event Categories
Three sections displayed in order:

1. **Popular Events** (12 events)
   - Grid layout: 3 columns (mobile) to 6 columns (desktop)
   - 2 rows of events
   - Spacing: `mt-16` before section title

2. **Advertisement Banner**
   - Placed between "Popular Events" and "Coming Soon"
   - Dismissible (X button)
   - Two-column layout (text + image)
   - Special offer: "Get 20% Off Your First Booking!"
   - Yellow/black theme

3. **Coming Soon** (8 events)
   - Same grid layout as Popular Events

4. **Trending Now** (8 events)
   - Same grid layout as Popular Events

### Event Cards
- Aspect ratio: `4:5` (portrait)
- Display:
  - Event image (hover zoom effect)
  - Event title (2-line support, `min-h-[2.5rem] md:min-h-[3rem]`)
  - Price (yellow, bold)
  - Date and venue (gray text)
- Clickable: Links to `/events/[id]`
- Hover effects: Image scale, title color change

### Footer Component
- Four-column layout:
  1. Brand + Social media links
  2. Quick Links
  3. Support links
  4. Contact information
- Yellow/black theme
- Copyright and legal links

---

## Event Detail Page Features

### Route
`/events/[id]` (dynamic route)

### Layout
- Header and Footer
- Back to Home link
- Two-column layout (image + content) on desktop

### Image Carousel
- Multiple event images
- Navigation arrows (left/right)
- Dot indicators
- Aspect ratio: `2:3`
- Smooth transitions

### Event Information Section
- **Title**: Large, bold
- **Description**: 
  - Yellow background box (`bg-primary-yellow/20`)
  - Left border (`border-l-4 border-primary-yellow`)
  - Large text (`text-xl md:text-2xl`)
  - Highlighted styling
- **Event Details Grid**:
  - Date (Calendar icon)
  - Time (Clock icon)
  - Venue (MapPin icon)
  - Duration & Age Group

### Member/Non-Member Selection
- Two buttons: "Yes, I'm a Member" / "No, I'm Not a Member"
- Selected state: Yellow background
- Unselected state: Dark background with border

### Member Verification Form
- Appears when "Member" is selected
- Fields:
  - Full Name (required)
  - Email Address (required, validated)
  - Phone Number (required)
- "Verify Membership" button
- Success indicator when verified (green checkmark)

### Ticket Selection Section
- ID: `#tickets` (for anchor linking)
- Shows message if membership not selected
- For each ticket category:
  - Category name
  - Regular price (strikethrough if member)
  - Member price (20% discount, highlighted)
  - Available quantity
  - +/- buttons to add/remove tickets
  - Disabled when sold out

### Shopping Cart
- Appears when items in cart
- Toggle: "View Cart" / "Hide Cart"
- Displays:
  - Cart items with quantities
  - Individual prices
  - Total price (large, yellow)
- "Proceed to Checkout" button

### Sponsors Section
- Grouped by category (Platinum, Gold, Silver, etc.)
- Responsive grid layout
- Sponsor logo/image
- Sponsor name
- Hover effects

---

## Event Creation Workflow

### Step 1: Profile Creation (`/create-event/profile`)

**Form Fields**:
- Full Name (required)
- Email Address (required, email validation)
- Phone Number (required)
- Organization Name (optional)

**Validation**:
- Required field checks
- Email format validation
- Error messages

**Data Storage**: `sessionStorage` as 'eventCreatorProfile'

**Navigation**: Redirects to `/create-event/new` after submission

---

### Step 2: Event Creation (`/create-event/new`)

**Progress Indicator**: Shows steps (Profile → Event Details)

**Event Basic Information**:
- Event Name (required)
- Date (required, date picker)
- Time (required, time picker)
- Venue (required)
- Description (optional, textarea)

**Event Image Upload**:
- Required dimensions: **800x1200 pixels**
- File input with preview
- Validation:
  - Checks image dimensions
  - Acceptable ratio validation
- Crop Modal:
  - Appears if dimensions don't match
  - Shows preview
  - "Crop & Use Image" button
  - Automatic center cropping
- Image preview after selection

**Ticket Categories**:
- Dynamic add/remove
- For each category:
  - Category Name (required, e.g., "General Admission", "VIP")
  - Price (required, number, > 0)
  - Number of Tickets (required, integer, > 0)
- "Add Another Ticket Category" button
- Remove button (X) for each category

**Registered Members** (Optional):
- Section label: "Registered Members (Special Pricing)"
- Dynamic add/remove
- For each member:
  - Full Name (required)
  - Email Address (required, email validation)
  - Phone Number (required)
  - Number of Members (required, integer, > 0)
- "Add First Registered Member" button (if empty)
- "Add Another Registered Member" button

**Bank Account Details** (Required):
- Section: "Bank Account Details (Stripe Payments)"
- Fields:
  - Bank Name (required, text)
  - Account Number (required, text)
  - Transit Number (required, exactly 5 digits, numeric only)
  - Institution Number (required, exactly 3 digits, numeric only)
- Helpful hints:
  - Transit number: "5 digits"
  - Institution number: "3 digits"
  - Common banks: TD (004), RBC (003), CIBC (010), BMO (001), Scotiabank (002)

**Form Validation**:
- All required fields
- Email format validation
- Numeric validation for prices and quantities
- Length validation for transit/institution numbers
- Field-specific error messages

**Submit**:
- Validates all fields
- Success message
- Clears sessionStorage
- Redirects to homepage

---

## Data Models

### Event
```typescript
{
  id: number
  title: string
  images: string[]              // Array of image URLs
  price: number                 // Base price
  date: string                  // YYYY-MM-DD
  time: string                  // HH:MM AM/PM
  venue: string
  description: string
  duration: string              // "120 minutes"
  ageGroup: string              // "All Ages", "18+"
  ticketCategories: TicketCategory[]
  sponsors: Sponsor[]
}
```

### Ticket Category
```typescript
{
  id: string
  name: string                  // "General Admission", "VIP"
  price: number                 // Regular price
  memberPrice: number           // Member price (20% discount)
  quantity: number             // Available tickets
}
```

### Sponsor
```typescript
{
  id: string
  category: string              // "Platinum", "Gold", "Silver"
  name: string
  image: string                // Logo URL
}
```

### Cart Item
```typescript
{
  categoryId: string
  categoryName: string
  quantity: number
  price: number                // Current price (member or regular)
}
```

---

## Key Features Implementation

### Smooth Scrolling
- CSS: `scroll-behavior: smooth` in `globals.css`
- Anchor links: `#tickets`, `#member-selection`
- Scroll offset: `scroll-mt-24` for fixed header

### Image Processing
- Client-side dimension validation
- Canvas-based cropping
- Automatic center crop to 800x1200
- Image preview

### Member Pricing
- 20% discount for verified members
- Price calculation: `memberPrice = price * 0.8`
- Visual indicators: Strikethrough regular price, green "20% Off" badge

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`
- Grid columns: 3 (mobile) → 5 (tablet) → 6 (desktop)
- Flexible layouts

### Form Validation
- Real-time validation
- Error messages below fields
- Red border on invalid fields
- Yellow border on focus
- Submit button disabled until valid

---

## Styling Guidelines

### Buttons
- **Primary**: Yellow background (`bg-primary-yellow`), black text
- **Secondary**: Dark background, white text, yellow border
- Hover: Darker shade transition
- Padding: `px-6 py-3` or `px-8 py-4` for larger buttons

### Cards
- Background: `bg-dark-black-light`
- Border: `border border-primary-yellow/20` or `border-gray-700`
- Rounded: `rounded-lg`
- Padding: `p-4` or `p-6`

### Inputs
- Background: `bg-dark-black-light`
- Border: `border-gray-600`
- Focus: `focus:border-primary-yellow`
- Text: White
- Padding: `px-4 py-2`

### Text Colors
- Primary: White (`text-white`)
- Secondary: Gray (`text-gray-300`, `text-gray-400`)
- Accent: Yellow (`text-primary-yellow`)
- Error: Red (`text-red-500`)
- Success: Green (`text-green-400`)

---

## Navigation Flow

### User Journey: Browse & Purchase
1. Homepage → Click event card → Event detail page
2. Event detail → Select member/non-member → Verify (if member)
3. Select tickets → Add to cart → View cart → Checkout

### User Journey: Create Event
1. Header → "Add Your Event" → Profile creation
2. Profile form → Submit → Event creation page
3. Fill event details → Upload image → Add tickets → Add members (optional) → Add bank details
4. Submit → Success → Homepage

---

## Component Props & Interfaces

### EventRow
```typescript
interface EventRowProps {
  title: string
  events: Event[]
}
```

### ImageCarousel
```typescript
interface ImageCarouselProps {
  images: string[]
  title: string
}
```

### TicketSelector
```typescript
interface TicketSelectorProps {
  categories: TicketCategory[]
  isMember: boolean
  onCartUpdate: (items: CartItem[]) => void
}
```

### SponsorsSection
```typescript
interface SponsorsSectionProps {
  sponsors: Sponsor[]
}
```

---

## Deployment

### Local Development
```bash
npm install
npm run dev
# Access: http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
```

### Vercel Deployment
```bash
npx vercel login
npx vercel --prod
```

Or use Vercel Dashboard:
1. Import Git repository
2. Auto-detects Next.js
3. Deploy

---

## Important Notes

1. **Image Dimensions**: Event images must be 800x1200 pixels. System validates and crops automatically.

2. **Member Discount**: Fixed at 20% (`price * 0.8`).

3. **Session Storage**: Profile data stored temporarily during event creation flow.

4. **Validation**: All forms have comprehensive client-side validation.

5. **Responsive**: All components are fully responsive.

6. **Theme**: Consistent yellow/black theme throughout.

7. **Accessibility**: Semantic HTML, ARIA labels where needed.

8. **Performance**: Optimized images, efficient rendering.

---

## Sample Event Data Structure

```typescript
const event = {
  id: 2,
  title: 'Vineeth Srinivasan Live',
  images: [
    'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=1200&fit=crop',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=1200&fit=crop',
  ],
  price: 45,
  date: '2024-06-19',
  time: '8:00 PM',
  venue: 'Niagara Falls',
  description: 'Experience the magic of live music...',
  duration: '180 minutes',
  ageGroup: 'All Ages',
  ticketCategories: [
    { id: '1', name: 'General Admission', price: 45, memberPrice: 36, quantity: 500 },
    { id: '2', name: 'VIP', price: 85, memberPrice: 68, quantity: 100 },
  ],
  sponsors: [
    {
      id: '1',
      category: 'Presented By',
      name: 'Premier Event Productions',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop',
    },
  ],
}
```

---

## Complete Feature Checklist

### Homepage
- ✅ Header with navigation
- ✅ Hero section with featured event
- ✅ "Get Tickets" button (links to event with #tickets anchor)
- ✅ "More Info" button (links to full event page)
- ✅ Popular Events section (12 events, 2-row grid)
- ✅ Advertisement banner (dismissible)
- ✅ Coming Soon section (8 events)
- ✅ Trending Now section (8 events)
- ✅ Footer with links and contact info

### Event Detail Page
- ✅ Image carousel with navigation
- ✅ Event title and description (highlighted)
- ✅ Event details (date, time, venue, duration, age)
- ✅ Member/Non-member selection
- ✅ Member verification form
- ✅ Ticket categories with member pricing
- ✅ Shopping cart functionality
- ✅ Sponsor showcase section
- ✅ Smooth scrolling to sections

### Event Creation
- ✅ Profile creation page
- ✅ Event creation form
- ✅ Image upload with validation (800x1200)
- ✅ Image cropping modal
- ✅ Dynamic ticket categories
- ✅ Registered members section
- ✅ Bank account details form
- ✅ Comprehensive validation
- ✅ Success handling

### Design
- ✅ Yellow/black theme
- ✅ Responsive design
- ✅ Hover effects
- ✅ Smooth transitions
- ✅ Consistent styling

---

## Quick Reference

### Color Classes
- `bg-primary-yellow` - Yellow background
- `text-primary-yellow` - Yellow text
- `bg-dark-black` - Dark background
- `bg-dark-black-light` - Card background
- `border-primary-yellow/20` - Yellow border (20% opacity)

### Common Patterns
- Cards: `bg-dark-black-light rounded-lg p-6 border border-primary-yellow/20`
- Buttons: `bg-primary-yellow text-black px-6 py-3 rounded font-semibold hover:bg-primary-yellow-dark`
- Inputs: `bg-dark-black-light border border-gray-600 text-white focus:border-primary-yellow`

### Grid Layouts
- Event grid: `grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3`
- Footer: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`

---

**This documentation serves as a complete guide for understanding, maintaining, or recreating the Kilikood Box Office platform.**

