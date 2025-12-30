'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiSearch, FiBell, FiUser } from 'react-icons/fi'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-black shadow-lg'
          : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-primary-yellow hover:text-primary-yellow-light transition-colors">
              Kilikood Box Office
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link
                href="/"
                className="text-white hover:text-primary-yellow transition-colors"
              >
                Home
              </Link>
              <Link
                href="/events"
                className="text-white hover:text-primary-yellow transition-colors"
              >
                Events
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-primary-yellow transition-colors"
              >
                About
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/create-event/profile"
              className="text-white hover:text-primary-yellow transition-colors bg-primary-yellow/20 px-4 py-2 rounded hover:bg-primary-yellow/30 border border-primary-yellow/50 text-sm font-semibold"
            >
              Add Your Event
            </Link>
            <button className="text-white hover:text-primary-yellow transition-colors">
              <FiSearch className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-primary-yellow transition-colors">
              <FiBell className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-primary-yellow transition-colors">
              <FiUser className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

