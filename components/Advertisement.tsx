'use client'

import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface AdContent {
  badge: string
  title: string
  description: string
  code?: string
  buttonText: string
  image: string
  link?: string
}

const adContents: AdContent[] = [
  {
    badge: 'Special Offer',
    title: 'Get 20% Off Your First Booking!',
    description: 'Use code KILIKOOD20 at checkout and enjoy exclusive discounts on all kids events.',
    code: 'KILIKOOD20',
    buttonText: 'Claim Offer',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop&q=80&auto=format',
    link: '/events',
  },
  {
    badge: 'New Member Bonus',
    title: 'Join Now & Save 30%!',
    description: 'Become a registered member today and unlock exclusive member pricing on all events.',
    buttonText: 'Join Now',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop&q=80&auto=format',
    link: '/create-event/profile',
  },
  {
    badge: 'Limited Time',
    title: 'Early Bird Special - 15% Off!',
    description: 'Book your tickets early and save! Limited seats available at discounted prices.',
    buttonText: 'Book Now',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop&q=80&auto=format',
    link: '/events',
  },
  {
    badge: 'Flash Sale',
    title: 'Last 24 Hours - 25% Off!',
    description: 'Don\'t miss out! Get amazing discounts on selected events. Sale ends soon!',
    buttonText: 'Shop Now',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=80&auto=format',
    link: '/events',
  },
]

export default function Advertisement() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoPlaying || !isVisible || adContents.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % adContents.length)
    }, 4000) // Change ad every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, isVisible])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + adContents.length) % adContents.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % adContents.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  if (!isVisible) return null

  const currentAd = adContents[currentIndex]

  return (
    <div 
      className="mb-12"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-primary-yellow/20 via-primary-yellow/10 to-transparent border border-primary-yellow/30 rounded-lg overflow-hidden">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 z-20 text-gray-400 hover:text-white transition-colors bg-black/30 rounded-full p-1"
            aria-label="Close advertisement"
          >
            <FiX className="w-5 h-5" />
          </button>

          {/* Navigation Arrows */}
          {adContents.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                aria-label="Previous advertisement"
              >
                <FiChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                aria-label="Next advertisement"
              >
                <FiChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6 transition-all duration-500">
            <div className="flex flex-col justify-center space-y-3">
              <div className="inline-block">
                <span className="px-3 py-1 bg-primary-yellow text-black text-xs font-bold rounded uppercase tracking-wider">
                  {currentAd.badge}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {currentAd.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {currentAd.code ? (
                  <>
                    Use code <span className="font-bold text-primary-yellow">{currentAd.code}</span> at checkout
                    {currentAd.description.includes('and') ? ' and ' : '. '}
                    {currentAd.description.split(currentAd.code)[1]?.trim() || currentAd.description}
                  </>
                ) : (
                  currentAd.description
                )}
              </p>
              <div className="flex items-center space-x-4 pt-1">
                {currentAd.link ? (
                  <Link
                    href={currentAd.link}
                    className="px-5 py-2 bg-primary-yellow text-black font-semibold rounded hover:bg-primary-yellow-dark transition-colors text-sm"
                  >
                    {currentAd.buttonText}
                  </Link>
                ) : (
                  <button className="px-5 py-2 bg-primary-yellow text-black font-semibold rounded hover:bg-primary-yellow-dark transition-colors text-sm">
                    {currentAd.buttonText}
                  </button>
                )}
                <span className="text-primary-yellow text-xs font-semibold">
                  Limited Time Only
                </span>
              </div>
            </div>
            <div className="relative h-32 md:h-40 rounded-lg overflow-hidden">
              <img
                src={currentAd.image}
                alt={currentAd.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          {/* Dot Indicators */}
          {adContents.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
              {adContents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary-yellow w-6'
                      : 'bg-white/50 hover:bg-white/70 w-2'
                  }`}
                  aria-label={`Go to advertisement ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

