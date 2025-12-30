'use client'

import { FiX } from 'react-icons/fi'
import { useState } from 'react'

export default function Advertisement() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="mb-12 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto bg-gradient-to-r from-primary-yellow/20 via-primary-yellow/10 to-transparent border border-primary-yellow/30 rounded-lg overflow-hidden">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 z-10 text-gray-400 hover:text-white transition-colors"
          aria-label="Close advertisement"
        >
          <FiX className="w-5 h-5" />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block">
              <span className="px-3 py-1 bg-primary-yellow text-black text-xs font-bold rounded uppercase tracking-wider">
                Special Offer
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Get 20% Off Your First Booking!
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              Use code <span className="font-bold text-primary-yellow">KILIKOOD20</span> at checkout
              and enjoy exclusive discounts on all kids events.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <button className="px-6 py-2 bg-primary-yellow text-black font-semibold rounded hover:bg-primary-yellow-dark transition-colors">
                Claim Offer
              </button>
              <span className="text-primary-yellow text-sm font-semibold">
                Limited Time Only
              </span>
            </div>
          </div>
          <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop&q=80&auto=format"
              alt="Special offer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  )
}

