'use client'

import { use, useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ImageCarousel from '@/components/ImageCarousel'
import TicketSelector, { CartItem } from '@/components/TicketSelector'
import SponsorsSection from '@/components/SponsorsSection'
import { FiCalendar, FiMapPin, FiClock, FiArrowLeft, FiShoppingCart, FiUser, FiMail, FiPhone, FiCheck, FiCreditCard, FiLock, FiFileText } from 'react-icons/fi'

interface TicketCategory {
  id: string
  name: string
  price: number
  memberPrice: number
  quantity: number
}

interface Sponsor {
  id: string
  category: string
  name: string
  image: string
}

interface Event {
  id: number
  title: string
  images: string[]
  price: number
  date: string
  time: string
  venue: string
  description: string
  fullDescription?: string
  duration: string
  ageGroup: string
  gateOpenTime?: string
  ticketCategories: TicketCategory[]
  sponsors: Sponsor[]
}

const events: Event[] = [
  {
    id: 1,
    title: 'Winter Bells Christmas Show',
    images: [
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=1200&fit=crop&q=80&auto=format',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=1200&fit=crop&q=80&auto=format',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop&q=80&auto=format',
    ],
    price: 35,
    date: '2024-12-27',
    time: '7:30 PM',
    venue: 'Chinese Cultural Centre',
    description:
      'Join us for an unforgettable Christmas mega show! A spectacular tribute performance featuring amazing acts, music, and entertainment for the whole family. Experience the magic of the holiday season with incredible performances, festive music, and joyful celebrations.',
    duration: '120 minutes',
    ageGroup: 'All Ages',
    ticketCategories: [
      { id: '1', name: 'General Admission', price: 35, memberPrice: 28, quantity: 200 },
      { id: '2', name: 'VIP', price: 60, memberPrice: 48, quantity: 50 },
      { id: '3', name: 'Premium', price: 85, memberPrice: 68, quantity: 25 },
    ],
    sponsors: [
      {
        id: '1',
        category: 'Mega Sponsor',
        name: 'Metropolis Realty',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=200&fit=crop',
      },
      {
        id: '2',
        category: 'Gold Sponsor',
        name: 'Levitate Entertainment',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop',
      },
      {
        id: '3',
        category: 'Silver Sponsor',
        name: 'Team Garudanz',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=200&h=200&fit=crop',
      },
    ],
  },
  {
    id: 2,
    title: 'Vineeth Sreenivasan Live in Concert',
    images: [
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=1200&fit=crop&q=80&auto=format',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=1200&fit=crop&q=80&auto=format',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=1200&fit=crop&q=80&auto=format',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=1200&fit=crop&q=80&auto=format',
    ],
    price: 45,
    date: 'Saturday, June 20, 2026',
    time: '6:00 PM – 10:00 PM',
    venue: 'Canada Event Centre - 300 Water St, Whitby, ON L1N 9B6',
    description:
      'Get ready for the biggest Malayalam music concert of 2026! Vineeth Sreenivasan, one of India\'s most celebrated singers, songwriters, and performers, is coming to Canada with his full band for an electrifying live concert.',
    fullDescription: `🎶 Vineeth Sreenivasan Live in Concert Toronto, Canada Tour 2026 🎤
📅 Date: Saturday, June 20, 2026
🕕 Time: 6:00 PM – 10:00 PM
📍 Venue: Canada Event Centre -300 Water St, Whitby, ON L1N 9B6

Get ready for the biggest Malayalam music concert of 2026! Vineeth Sreenivasan, one of India's most celebrated singers, songwriters, and performers, is coming to Canada with his full band for an electrifying live concert. Experience an unforgettable evening of music, culture, and celebration as Vineeth performs his greatest hits, fan favorites, and soulful melodies in an immersive live setting.

This is more than just a concert – it's a once-in-a-lifetime opportunity for the Malayalam music community in Canada to come together and sing along to the songs they love.

🎟 Early Bird ticket holders will enjoy priority seating, while remaining seats will be available on a first-come, first-served basis within each ticket category.

👨‍👩‍👧 Families are welcome — children 10 years and under can attend free of charge (no separate ticket required).`,
    duration: '4 hours',
    ageGroup: 'All Ages',
    gateOpenTime: '4:30 PM',
    ticketCategories: [
      { id: '1', name: 'Early Bird', price: 65, memberPrice: 52, quantity: 200 },
      { id: '2', name: 'General Admission', price: 75, memberPrice: 60, quantity: 500 },
      { id: '3', name: 'VIP', price: 120, memberPrice: 96, quantity: 100 },
      { id: '4', name: 'Premium', price: 150, memberPrice: 120, quantity: 50 },
    ],
    sponsors: [
      {
        id: '1',
        category: 'Platinum Sponsor',
        name: 'Metropolis Realty Group',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop&q=80&auto=format',
      },
      {
        id: '2',
        category: 'Gold Sponsor',
        name: 'Levitate Entertainment',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop&q=80&auto=format',
      },
      {
        id: '3',
        category: 'Silver Sponsor',
        name: 'Team Garudanz',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=200&fit=crop&q=80&auto=format',
      },
      {
        id: '4',
        category: 'Media Partner',
        name: 'Canadian Malayalam Media',
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=300&h=200&fit=crop&q=80&auto=format',
      },
      {
        id: '5',
        category: 'Community Partner',
        name: 'Toronto Malayalee Association',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=200&fit=crop&q=80&auto=format',
      },
      {
        id: '6',
        category: 'Venue Partner',
        name: 'Canada Event Centre',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&h=200&fit=crop&q=80&auto=format',
      },
    ],
  },
  {
    id: 3,
    title: 'London Vibez',
    images: [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=1200&fit=crop&q=80&auto=format',
    ],
    price: 15,
    date: '2024-02-09',
    time: '8:00 PM',
    venue: 'Maple Sports & Rec',
    description:
      'Every second Friday of the month! Enjoy 100% pub vibe with karaoke nights, belly dancing, DJ nights, and special performances. A night of fun, music, and great company.',
    duration: '240 minutes',
    ageGroup: '18+',
    ticketCategories: [
      { id: '1', name: 'General Entry', price: 15, memberPrice: 12, quantity: 150 },
    ],
    sponsors: [
      {
        id: '1',
        category: 'Venue Partner',
        name: 'Maple Sports & Rec',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=200&h=200&fit=crop',
      },
    ],
  },
]

export default function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const event = events.find((e) => e.id === parseInt(id))
  const [isMember, setIsMember] = useState<'member' | 'non-member' | null>(null)
  const [showMemberForm, setShowMemberForm] = useState(false)
  const [memberDetails, setMemberDetails] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [memberVerified, setMemberVerified] = useState(false)
  const [cart, setCart] = useState<CartItem[]>([])
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {
    // Check if URL has #tickets hash and scroll to it
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      if (hash === '#tickets') {
        setTimeout(() => {
          const element = document.getElementById('tickets')
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
    }
  }, [])

  if (!event) {
    return (
      <div className="min-h-screen bg-dark-black">
        <Header />
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
            <Link
              href="/"
              className="text-primary-yellow hover:text-primary-yellow-light hover:underline transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const handleMemberTypeSelect = (type: 'member' | 'non-member') => {
    setIsMember(type)
    if (type === 'member') {
      setShowMemberForm(true)
      setMemberVerified(false)
    } else {
      setShowMemberForm(false)
      setMemberVerified(false)
    }
  }

  const handleMemberVerification = () => {
    // In a real app, this would verify with backend
    // For now, we'll just check if fields are filled
    if (memberDetails.name && memberDetails.email && memberDetails.phone) {
      setMemberVerified(true)
    }
  }

  const handleCartUpdate = (items: CartItem[]) => {
    setCart(items)
  }

  const totalCartPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-dark-black">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-primary-yellow mb-6 transition-colors"
          >
            <FiArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>

          {/* Image Carousel */}
          <div className="mb-8">
            <ImageCarousel images={event.images} title={event.title} />
          </div>

          {/* Event Name and Description */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {event.title}
            </h1>
            <div className="bg-primary-yellow/20 border-l-4 border-primary-yellow p-6 rounded-lg my-6">
              <div className="text-white leading-relaxed font-medium whitespace-pre-line">
                {event.fullDescription ? (
                  <div className="text-base md:text-lg space-y-3">
                    {event.fullDescription.split('\n').map((line, index) => (
                      <p key={index} className={line.trim().startsWith('🎶') || line.trim().startsWith('📅') || line.trim().startsWith('🕕') || line.trim().startsWith('📍') || line.trim().startsWith('🎟') || line.trim().startsWith('👨') ? 'font-semibold text-primary-yellow' : ''}>
                        {line}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-xl md:text-2xl">{event.description}</p>
                )}
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="flex items-center space-x-3 text-gray-300 bg-dark-black-light p-4 rounded-lg">
              <FiCalendar className="w-5 h-5 text-primary-yellow" />
              <div>
                <p className="text-xs text-gray-400">Date</p>
                <p className="text-white font-semibold">{event.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 bg-dark-black-light p-4 rounded-lg">
              <FiClock className="w-5 h-5 text-primary-yellow" />
              <div>
                <p className="text-xs text-gray-400">Time</p>
                <p className="text-white font-semibold">{event.time}</p>
                {event.gateOpenTime && (
                  <p className="text-xs text-primary-yellow mt-1">Gate opens: {event.gateOpenTime}</p>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 bg-dark-black-light p-4 rounded-lg">
              <FiMapPin className="w-5 h-5 text-primary-yellow" />
              <div>
                <p className="text-xs text-gray-400">Venue</p>
                <p className="text-white font-semibold">{event.venue}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 bg-dark-black-light p-4 rounded-lg">
              <div>
                <p className="text-xs text-gray-400">Duration</p>
                <p className="text-white font-semibold">{event.duration}</p>
                <p className="text-xs text-primary-yellow mt-1">{event.ageGroup}</p>
              </div>
            </div>
          </div>

          {/* Member/Non-Member Selection */}
          <div id="member-selection" className="bg-dark-black-light rounded-lg p-6 mb-8 border border-primary-yellow/20 scroll-mt-24">
            <h3 className="text-xl font-bold text-white mb-4">
              Are you a registered member?
            </h3>
            <p className="text-gray-400 mb-4 text-sm">
              Members receive special discounted pricing on all tickets
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleMemberTypeSelect('member')}
                className={`flex-1 px-6 py-4 rounded-lg font-semibold transition-all ${
                  isMember === 'member'
                    ? 'bg-primary-yellow text-black border-2 border-primary-yellow'
                    : 'bg-dark-black text-white border-2 border-gray-600 hover:border-primary-yellow'
                }`}
              >
                Yes, I'm a Member
              </button>
              <button
                onClick={() => handleMemberTypeSelect('non-member')}
                className={`flex-1 px-6 py-4 rounded-lg font-semibold transition-all ${
                  isMember === 'non-member'
                    ? 'bg-primary-yellow text-black border-2 border-primary-yellow'
                    : 'bg-dark-black text-white border-2 border-gray-600 hover:border-primary-yellow'
                }`}
              >
                No, I'm Not a Member
              </button>
            </div>

            {/* Member Verification Form */}
            {showMemberForm && !memberVerified && (
              <div className="mt-6 p-6 bg-dark-black rounded-lg border border-primary-yellow/30">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Verify Your Membership
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Please enter your registered membership details to access member pricing
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-1">
                      <FiUser className="inline mr-1" />
                      Full Name <span className="text-primary-yellow">*</span>
                    </label>
                    <input
                      type="text"
                      value={memberDetails.name}
                      onChange={(e) =>
                        setMemberDetails({ ...memberDetails, name: e.target.value })
                      }
                      className="w-full px-4 py-2 rounded bg-dark-black-light border border-gray-600 text-white focus:outline-none focus:border-primary-yellow"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-1">
                      <FiMail className="inline mr-1" />
                      Email Address <span className="text-primary-yellow">*</span>
                    </label>
                    <input
                      type="email"
                      value={memberDetails.email}
                      onChange={(e) =>
                        setMemberDetails({ ...memberDetails, email: e.target.value })
                      }
                      className="w-full px-4 py-2 rounded bg-dark-black-light border border-gray-600 text-white focus:outline-none focus:border-primary-yellow"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-1">
                      <FiPhone className="inline mr-1" />
                      Phone Number <span className="text-primary-yellow">*</span>
                    </label>
                    <input
                      type="tel"
                      value={memberDetails.phone}
                      onChange={(e) =>
                        setMemberDetails({ ...memberDetails, phone: e.target.value })
                      }
                      className="w-full px-4 py-2 rounded bg-dark-black-light border border-gray-600 text-white focus:outline-none focus:border-primary-yellow"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <button
                    onClick={handleMemberVerification}
                    className="w-full bg-primary-yellow hover:bg-primary-yellow-dark text-black font-bold py-3 px-6 rounded transition-colors"
                  >
                    Verify Membership
                  </button>
                </div>
              </div>
            )}

            {memberVerified && (
              <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center space-x-2">
                <FiCheck className="text-green-400" />
                <span className="text-green-400 font-semibold">
                  Membership verified! You now have access to member pricing.
                </span>
              </div>
            )}
          </div>

          {/* Ticket Selection */}
          <div id="tickets" className="bg-dark-black-light rounded-lg p-6 mb-8 border border-primary-yellow/20 scroll-mt-24">
            {isMember === null ? (
              <div className="text-center py-8">
                <p className="text-gray-400 mb-4">
                  Please select whether you are a member or non-member above to view ticket options
                </p>
                <Link
                  href="#member-selection"
                  className="inline-block bg-primary-yellow hover:bg-primary-yellow-dark text-black font-semibold px-6 py-2 rounded transition-colors"
                >
                  Select Membership Status
                </Link>
              </div>
            ) : (
              <TicketSelector
                categories={event.ticketCategories}
                isMember={memberVerified}
                onCartUpdate={handleCartUpdate}
              />
            )}
          </div>

          {/* Cart and Checkout */}
          {totalCartItems > 0 && (
            <div className="bg-primary-yellow/20 border border-primary-yellow/30 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <FiShoppingCart className="w-6 h-6 text-primary-yellow" />
                  <h3 className="text-xl font-bold text-white">
                    Cart ({totalCartItems} {totalCartItems === 1 ? 'item' : 'items'})
                  </h3>
                </div>
                <button
                  onClick={() => setShowCart(!showCart)}
                  className="text-primary-yellow hover:text-primary-yellow-light transition-colors"
                >
                  {showCart ? 'Hide' : 'View'} Cart
                </button>
              </div>

              {showCart && (
                <div className="space-y-3 mb-4">
                  {cart.map((item) => (
                    <div
                      key={item.categoryId}
                      className="bg-dark-black rounded-lg p-4 flex items-center justify-between"
                    >
                      <div>
                        <p className="text-white font-semibold">{item.categoryName}</p>
                        <p className="text-gray-400 text-sm">
                          {item.quantity} x ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <p className="text-primary-yellow font-bold text-lg">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-primary-yellow/30">
                <span className="text-white font-semibold text-xl">Total:</span>
                <span className="text-primary-yellow font-bold text-3xl">
                  ${totalCartPrice.toFixed(2)}
                </span>
              </div>
            </div>
          )}

          {/* Payment Processing Section */}
          {totalCartItems > 0 && (
            <div className="bg-dark-black-light rounded-lg p-6 mb-8 border border-primary-yellow/20">
              <div className="flex items-center space-x-3 mb-6">
                <FiCreditCard className="w-6 h-6 text-primary-yellow" />
                <h3 className="text-2xl font-bold text-white">Secure Payment</h3>
              </div>
              <div className="bg-dark-black rounded-lg p-6 mb-6 border border-gray-700">
                <div className="flex items-center space-x-2 mb-4">
                  <FiLock className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-semibold">Secure Payment Processing</span>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Your payment is processed securely through Stripe. We accept all major credit cards, debit cards, and digital wallets.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-white/10 rounded p-3 text-center">
                    <span className="text-xs text-gray-400">Visa</span>
                  </div>
                  <div className="bg-white/10 rounded p-3 text-center">
                    <span className="text-xs text-gray-400">Mastercard</span>
                  </div>
                  <div className="bg-white/10 rounded p-3 text-center">
                    <span className="text-xs text-gray-400">Amex</span>
                  </div>
                  <div className="bg-white/10 rounded p-3 text-center">
                    <span className="text-xs text-gray-400">PayPal</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div>
                    <p className="text-white font-semibold text-lg">Order Total</p>
                    <p className="text-gray-400 text-sm">Including all fees</p>
                  </div>
                  <span className="text-primary-yellow font-bold text-2xl">
                    ${totalCartPrice.toFixed(2)}
                  </span>
                </div>
              </div>
              <button 
                onClick={() => {
                  // In a real app, this would redirect to Stripe checkout
                  alert('Redirecting to secure payment gateway...\n\nIn production, this would connect to Stripe for payment processing.')
                }}
                className="w-full bg-primary-yellow hover:bg-primary-yellow-dark text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg flex items-center justify-center space-x-2"
              >
                <FiCreditCard className="w-5 h-5" />
                <span>Proceed to Secure Payment</span>
              </button>
              <p className="text-gray-400 text-xs text-center mt-4">
                🔒 Your payment information is encrypted and secure
              </p>
            </div>
          )}

          {/* Terms & Conditions Section */}
          <div className="bg-dark-black-light rounded-lg p-6 mb-8 border border-primary-yellow/20">
            <div className="flex items-center space-x-3 mb-6">
              <FiFileText className="w-6 h-6 text-primary-yellow" />
              <h3 className="text-2xl font-bold text-white">Terms & Conditions</h3>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Ticket Purchase & Entry</h4>
                <ul className="space-y-2 text-sm list-disc list-inside ml-2">
                  <li>All sales are final. No refunds, exchanges, or cancellations will be permitted unless the event is officially canceled.</li>
                  <li>Each ticket is valid for one entry only and must be presented at the venue for admission.</li>
                  <li>Children 10 years and under do not require a ticket but must be accompanied by a ticketed adult.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Seating & Access</h4>
                <ul className="space-y-2 text-sm list-disc list-inside ml-2">
                  <li>The gate opens by {event.gateOpenTime || '4:30 PM'}. The event features tiered seating categories.</li>
                  <li>Early Bird ticket holders will receive priority seating in their designated section.</li>
                  <li>All other ticket holders will be seated on a first-come, first-served basis within their respective ticket category.</li>
                  <li>The organizer recommends arriving early to secure preferred seating.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Event Policies</h4>
                <ul className="space-y-2 text-sm list-disc list-inside ml-2">
                  <li>The organizer reserves the right to refuse entry or remove any person whose behavior is deemed disruptive or unsafe.</li>
                  <li>Outside food, drinks, and professional recording equipment are not allowed.</li>
                  <li>Photography and videography may be restricted in certain areas or segments of the show.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Event Changes</h4>
                <ul className="space-y-2 text-sm list-disc list-inside ml-2">
                  <li>The organizer reserves the right to make changes to the event date, time, venue, lineup, or program due to unforeseen circumstances.</li>
                  <li>If the event is postponed, tickets will remain valid for the rescheduled date.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Liability</h4>
                <ul className="space-y-2 text-sm list-disc list-inside ml-2">
                  <li>Attendees assume all risks associated with attending the event. The organizer is not responsible for loss of personal belongings, injury, or other incidents beyond its control.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Consent for Media</h4>
                <ul className="space-y-2 text-sm list-disc list-inside ml-2">
                  <li>By attending, you consent to photography, video, and audio recording that may be used for promotional purposes by the event organizer.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sponsors Section */}
          <SponsorsSection sponsors={event.sponsors} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
