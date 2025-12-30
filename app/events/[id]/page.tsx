'use client'

import { use } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FiCalendar, FiMapPin, FiDollarSign, FiArrowLeft } from 'react-icons/fi'

interface Event {
  id: number
  title: string
  image: string
  price: number
  date: string
  venue: string
  description: string
  duration: string
  ageGroup: string
}

const events: Event[] = [
  {
    id: 1,
    title: 'Winter Bells Christmas Show',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=1200&fit=crop&q=80&auto=format',
    price: 35,
    date: '2024-12-27',
    venue: 'Chinese Cultural Centre',
    description:
      'Join us for an unforgettable Christmas mega show! A spectacular tribute performance featuring amazing acts, music, and entertainment for the whole family.',
    duration: '120 minutes',
    ageGroup: 'All Ages',
  },
  {
    id: 2,
    title: 'Vineeth Srinivasan Live',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=1200&fit=crop&q=80&auto=format',
    price: 45,
    date: '2024-06-19',
    venue: 'Niagara Falls',
    description:
      'Experience the magic of live music with Vineeth Srinivasan! An electrifying concert featuring your favorite hits and unforgettable performances.',
    duration: '180 minutes',
    ageGroup: 'All Ages',
  },
  {
    id: 3,
    title: 'London Vibez',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=1200&fit=crop&q=80&auto=format',
    price: 15,
    date: '2024-02-09',
    venue: 'Maple Sports & Rec',
    description:
      'Every second Friday of the month! Enjoy 100% pub vibe with karaoke nights, belly dancing, DJ nights, and special performances.',
    duration: '240 minutes',
    ageGroup: '18+',
  },
]

export default function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const event = events.find((e) => e.id === parseInt(id))

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative">
              <div className="aspect-[2/3] rounded-lg overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  {event.title}
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {event.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <FiCalendar className="w-5 h-5 text-primary-yellow" />
                  <span className="text-lg">{event.date}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <FiMapPin className="w-5 h-5 text-primary-yellow" />
                  <span className="text-lg">{event.venue}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <FiDollarSign className="w-5 h-5 text-primary-yellow" />
                  <span className="text-lg">Starting at ${event.price}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-green-500 rounded text-sm font-semibold">
                    {event.ageGroup}
                  </span>
                  <span className="text-gray-300">{event.duration}</span>
                </div>
              </div>

              <div className="pt-6">
                <button className="w-full bg-primary-yellow hover:bg-primary-yellow-dark text-black font-bold py-4 px-8 rounded transition-colors text-lg">
                  Purchase Tickets
                </button>
              </div>

              <div className="pt-6 border-t border-primary-yellow/20">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Ticket Information
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Children under 2: Free (lap seating)</li>
                  <li>• Children 2-12: ${event.price}</li>
                  <li>• Adults: ${event.price + 5}</li>
                  <li>• Senior (65+): ${event.price - 5}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

