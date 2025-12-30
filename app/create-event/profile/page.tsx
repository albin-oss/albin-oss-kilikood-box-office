'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FiUser, FiMail, FiPhone, FiArrowRight, FiCheck } from 'react-icons/fi'

export default function ProfileCreationPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      // Store profile data in sessionStorage
      sessionStorage.setItem('eventCreatorProfile', JSON.stringify(formData))
      router.push('/create-event/new')
    }
  }

  return (
    <div className="min-h-screen bg-dark-black">
      <Header />
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary-yellow text-black flex items-center justify-center font-bold">
                  1
                </div>
                <span className="ml-2 text-white font-semibold">Create Profile</span>
              </div>
              <FiArrowRight className="text-gray-500" />
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-700 text-gray-400 flex items-center justify-center font-bold">
                  2
                </div>
                <span className="ml-2 text-gray-400">Create Event</span>
              </div>
            </div>
            <div className="h-1 bg-gray-700 rounded-full">
              <div className="h-1 bg-primary-yellow rounded-full w-1/2"></div>
            </div>
          </div>

          {/* Main Form */}
          <div className="bg-dark-black-light rounded-lg border border-primary-yellow/20 p-6 md:p-8">
            <h1 className="text-3xl font-bold text-white mb-2">Create Your Profile</h1>
            <p className="text-gray-400 mb-6">
              Let's start by setting up your profile. This information will be used for your event listings.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  <FiUser className="inline mr-2" />
                  Full Name <span className="text-primary-yellow">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg bg-dark-black border ${
                    errors.name ? 'border-red-500' : 'border-gray-600'
                  } text-white focus:outline-none focus:border-primary-yellow transition-colors`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  <FiMail className="inline mr-2" />
                  Email Address <span className="text-primary-yellow">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg bg-dark-black border ${
                    errors.email ? 'border-red-500' : 'border-gray-600'
                  } text-white focus:outline-none focus:border-primary-yellow transition-colors`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  <FiPhone className="inline mr-2" />
                  Phone Number <span className="text-primary-yellow">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg bg-dark-black border ${
                    errors.phone ? 'border-red-500' : 'border-gray-600'
                  } text-white focus:outline-none focus:border-primary-yellow transition-colors`}
                  placeholder="(123) 456-7890"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Organization Name (Optional)
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-dark-black border border-gray-600 text-white focus:outline-none focus:border-primary-yellow transition-colors"
                  placeholder="Your organization or company name"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary-yellow text-black font-bold py-4 px-8 rounded-lg hover:bg-primary-yellow-dark transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Continue to Create Event</span>
                  <FiArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

