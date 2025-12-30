'use client'

import Link from 'next/link'
import { FiPlay, FiInfo } from 'react-icons/fi'

export default function Hero() {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&h=1080&fit=crop&q=80&auto=format')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/20 via-transparent to-primary-yellow/10" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
              Vineeth Sreenivasan
              <br />
              Live in Concert
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-200 drop-shadow-md">
              Experience the magic of live music! Join us for an electrifying
              concert featuring your favorite hits and unforgettable performances.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/events/2"
                className="flex items-center space-x-2 bg-primary-yellow text-black px-8 py-3 rounded font-semibold hover:bg-primary-yellow-dark transition-colors"
              >
                <FiPlay className="w-5 h-5" />
                <span>Get Tickets</span>
              </Link>
              <button className="flex items-center space-x-2 bg-dark-black-light/70 text-white px-8 py-3 rounded font-semibold hover:bg-dark-black-light transition-colors border border-primary-yellow/30">
                <FiInfo className="w-5 h-5" />
                <span>More Info</span>
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm">
              <span className="px-3 py-1 bg-green-500 rounded">All Ages</span>
              <span className="text-gray-300">Duration: 180 min</span>
              <span className="text-gray-300">Starting at $45</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

