'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiPlay, FiInfo, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface FeaturedEvent {
  id: number
  title: string
  description: string
  image: string
  price: number
  date: string
  venue: string
  duration: string
  ageGroup: string
}

interface HeroCarouselProps {
  events: FeaturedEvent[]
}

export default function HeroCarousel({ events }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoPlaying || events.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, events.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  if (events.length === 0) return null

  const currentEvent = events[currentIndex]

  return (
    <div 
      className="relative h-[80vh] w-full overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${currentEvent.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/20 via-transparent to-primary-yellow/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
              {currentEvent.title}
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-200 drop-shadow-md line-clamp-2">
              {currentEvent.description}
            </p>
            <div className="flex space-x-4">
              <Link
                href={`/events/${currentEvent.id}#tickets`}
                className="flex items-center space-x-2 bg-primary-yellow text-black px-8 py-3 rounded font-semibold hover:bg-primary-yellow-dark transition-colors"
              >
                <FiPlay className="w-5 h-5" />
                <span>Get Tickets</span>
              </Link>
              <Link
                href={`/events/${currentEvent.id}`}
                className="flex items-center space-x-2 bg-dark-black-light/70 text-white px-8 py-3 rounded font-semibold hover:bg-dark-black-light transition-colors border border-primary-yellow/30"
              >
                <FiInfo className="w-5 h-5" />
                <span>More Info</span>
              </Link>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm">
              <span className="px-3 py-1 bg-green-500 rounded">{currentEvent.ageGroup}</span>
              <span className="text-gray-300">Duration: {currentEvent.duration}</span>
              <span className="text-gray-300">Starting at ${currentEvent.price}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {events.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
            aria-label="Previous event"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
            aria-label="Next event"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {events.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-yellow w-8'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

