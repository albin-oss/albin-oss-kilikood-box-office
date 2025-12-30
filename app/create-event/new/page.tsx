'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FiCalendar, FiClock, FiMapPin, FiImage, FiDollarSign, FiPlus, FiX, FiCheck, FiArrowLeft, FiUpload, FiUsers, FiMail, FiPhone, FiUser, FiCreditCard, FiLock } from 'react-icons/fi'

interface TicketCategory {
  id: string
  name: string
  price: number
  quantity: number
}

interface RegisteredMember {
  id: string
  name: string
  email: string
  phone: string
  memberCount: number
}

export default function CreateEventPage() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [step, setStep] = useState(1)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [showCropModal, setShowCropModal] = useState(false)
  const [cropImage, setCropImage] = useState<string | null>(null)
  const [cropArea, setCropArea] = useState({ x: 0, y: 0, width: 0, height: 0 })
  const [imageError, setImageError] = useState('')

  const [formData, setFormData] = useState({
    eventName: '',
    date: '',
    time: '',
    venue: '',
    description: '',
  })

  const [bankAccount, setBankAccount] = useState({
    accountNumber: '',
    bank: '',
    transitNumber: '',
    institutionNumber: '',
  })

  const [ticketCategories, setTicketCategories] = useState<TicketCategory[]>([
    { id: '1', name: 'General Admission', price: 0, quantity: 0 },
  ])

  const [registeredMembers, setRegisteredMembers] = useState<RegisteredMember[]>([])

  const [errors, setErrors] = useState<Record<string, string>>({})

  const REQUIRED_IMAGE_WIDTH = 800
  const REQUIRED_IMAGE_HEIGHT = 1200
  const ACCEPTABLE_RATIO = REQUIRED_IMAGE_WIDTH / REQUIRED_IMAGE_HEIGHT

  useEffect(() => {
    // Check if profile exists
    const profile = sessionStorage.getItem('eventCreatorProfile')
    if (!profile) {
      router.push('/create-event/profile')
    }
  }, [router])

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check file type
    if (!file.type.startsWith('image/')) {
      setImageError('Please select an image file')
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      const img = new Image()
      img.onload = () => {
        const imageRatio = img.width / img.height
        const tolerance = 0.1

        if (
          Math.abs(imageRatio - ACCEPTABLE_RATIO) > tolerance ||
          img.width < REQUIRED_IMAGE_WIDTH ||
          img.height < REQUIRED_IMAGE_HEIGHT
        ) {
          setImageError(
            `Image dimensions should be ${REQUIRED_IMAGE_WIDTH}x${REQUIRED_IMAGE_HEIGHT} pixels (or same ratio). Current: ${img.width}x${img.height}`
          )
          setCropImage(event.target?.result as string)
          setShowCropModal(true)
        } else {
          setImagePreview(event.target?.result as string)
          setImageFile(file)
          setImageError('')
        }
      }
      img.src = event.target?.result as string
    }
    reader.readAsDataURL(file)
  }

  const handleCrop = () => {
    if (!cropImage) return

    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = REQUIRED_IMAGE_WIDTH
      canvas.height = REQUIRED_IMAGE_HEIGHT
      const ctx = canvas.getContext('2d')

      if (ctx) {
        // Calculate crop area
        const scale = Math.max(
          img.width / REQUIRED_IMAGE_WIDTH,
          img.height / REQUIRED_IMAGE_HEIGHT
        )
        const x = (img.width - REQUIRED_IMAGE_WIDTH * scale) / 2
        const y = (img.height - REQUIRED_IMAGE_HEIGHT * scale) / 2

        ctx.drawImage(
          img,
          x,
          y,
          REQUIRED_IMAGE_WIDTH * scale,
          REQUIRED_IMAGE_HEIGHT * scale,
          0,
          0,
          REQUIRED_IMAGE_WIDTH,
          REQUIRED_IMAGE_HEIGHT
        )

        const croppedDataUrl = canvas.toDataURL('image/jpeg', 0.9)
        setImagePreview(croppedDataUrl)
        setShowCropModal(false)
        setImageError('')
      }
    }
    img.src = cropImage
  }

  const addTicketCategory = () => {
    setTicketCategories([
      ...ticketCategories,
      { id: Date.now().toString(), name: '', price: 0, quantity: 0 },
    ])
  }

  const removeTicketCategory = (id: string) => {
    if (ticketCategories.length > 1) {
      setTicketCategories(ticketCategories.filter((cat) => cat.id !== id))
    }
  }

  const updateTicketCategory = (id: string, field: keyof TicketCategory, value: string | number) => {
    setTicketCategories(
      ticketCategories.map((cat) =>
        cat.id === id ? { ...cat, [field]: value } : cat
      )
    )
  }

  const addRegisteredMember = () => {
    setRegisteredMembers([
      ...registeredMembers,
      { id: Date.now().toString(), name: '', email: '', phone: '', memberCount: 1 },
    ])
  }

  const removeRegisteredMember = (id: string) => {
    setRegisteredMembers(registeredMembers.filter((member) => member.id !== id))
  }

  const updateRegisteredMember = (id: string, field: keyof RegisteredMember, value: string | number) => {
    setRegisteredMembers(
      registeredMembers.map((member) =>
        member.id === id ? { ...member, [field]: value } : member
      )
    )
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.eventName.trim()) newErrors.eventName = 'Event name is required'
    if (!formData.date) newErrors.date = 'Date is required'
    if (!formData.time) newErrors.time = 'Time is required'
    if (!formData.venue.trim()) newErrors.venue = 'Venue is required'
    if (!imagePreview) newErrors.image = 'Event image is required'

    // Bank account validation
    if (!bankAccount.accountNumber.trim()) {
      newErrors.accountNumber = 'Account number is required'
    }
    if (!bankAccount.bank.trim()) {
      newErrors.bank = 'Bank name is required'
    }
    if (!bankAccount.transitNumber.trim()) {
      newErrors.transitNumber = 'Transit number is required'
    } else if (!/^\d{5}$/.test(bankAccount.transitNumber)) {
      newErrors.transitNumber = 'Transit number must be 5 digits'
    }
    if (!bankAccount.institutionNumber.trim()) {
      newErrors.institutionNumber = 'Institution number is required'
    } else if (!/^\d{3}$/.test(bankAccount.institutionNumber)) {
      newErrors.institutionNumber = 'Institution number must be 3 digits'
    }

    ticketCategories.forEach((cat, index) => {
      if (!cat.name.trim()) {
        newErrors[`ticketName_${index}`] = 'Ticket category name is required'
      }
      if (cat.price <= 0) {
        newErrors[`ticketPrice_${index}`] = 'Price must be greater than 0'
      }
      if (cat.quantity <= 0) {
        newErrors[`ticketQuantity_${index}`] = 'Number of tickets must be greater than 0'
      }
    })

    registeredMembers.forEach((member, index) => {
      if (!member.name.trim()) {
        newErrors[`memberName_${index}`] = 'Name is required'
      }
      if (!member.email.trim()) {
        newErrors[`memberEmail_${index}`] = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(member.email)) {
        newErrors[`memberEmail_${index}`] = 'Please enter a valid email'
      }
      if (!member.phone.trim()) {
        newErrors[`memberPhone_${index}`] = 'Phone number is required'
      }
      if (member.memberCount <= 0) {
        newErrors[`memberCount_${index}`] = 'Number of members must be at least 1'
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      // Here you would typically send the data to your backend
      alert('Event created successfully!')
      // Clear session storage and redirect
      sessionStorage.removeItem('eventCreatorProfile')
      router.push('/')
    }
  }

  return (
    <div className="min-h-screen bg-dark-black">
      <Header />
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary-yellow text-black flex items-center justify-center font-bold">
                  <FiCheck className="w-5 h-5" />
                </div>
                <span className="ml-2 text-gray-400 line-through">Create Profile</span>
              </div>
              <FiArrowLeft className="text-gray-500 rotate-180" />
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary-yellow text-black flex items-center justify-center font-bold">
                  2
                </div>
                <span className="ml-2 text-white font-semibold">Create Event</span>
              </div>
            </div>
            <div className="h-1 bg-gray-700 rounded-full">
              <div className="h-1 bg-primary-yellow rounded-full w-full"></div>
            </div>
          </div>

          {/* Main Form */}
          <div className="bg-dark-black-light rounded-lg border border-primary-yellow/20 p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Create Your Event</h1>
                <p className="text-gray-400">
                  Fill in the details below to start selling tickets
                </p>
              </div>
              <button
                onClick={() => router.push('/create-event/profile')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiArrowLeft className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Event Name */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Event Name <span className="text-primary-yellow">*</span>
                </label>
                <input
                  type="text"
                  value={formData.eventName}
                  onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg bg-dark-black border ${
                    errors.eventName ? 'border-red-500' : 'border-gray-600'
                  } text-white focus:outline-none focus:border-primary-yellow transition-colors`}
                  placeholder="e.g., Summer Music Festival 2024"
                />
                {errors.eventName && (
                  <p className="text-red-500 text-sm mt-1">{errors.eventName}</p>
                )}
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <FiCalendar className="inline mr-2" />
                    Date <span className="text-primary-yellow">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg bg-dark-black border ${
                      errors.date ? 'border-red-500' : 'border-gray-600'
                    } text-white focus:outline-none focus:border-primary-yellow transition-colors`}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                  )}
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <FiClock className="inline mr-2" />
                    Time <span className="text-primary-yellow">*</span>
                  </label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg bg-dark-black border ${
                      errors.time ? 'border-red-500' : 'border-gray-600'
                    } text-white focus:outline-none focus:border-primary-yellow transition-colors`}
                  />
                  {errors.time && (
                    <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                  )}
                </div>
              </div>

              {/* Venue */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  <FiMapPin className="inline mr-2" />
                  Venue <span className="text-primary-yellow">*</span>
                </label>
                <input
                  type="text"
                  value={formData.venue}
                  onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg bg-dark-black border ${
                    errors.venue ? 'border-red-500' : 'border-gray-600'
                  } text-white focus:outline-none focus:border-primary-yellow transition-colors`}
                  placeholder="e.g., Grand Theater, 123 Main St, City"
                />
                {errors.venue && (
                  <p className="text-red-500 text-sm mt-1">{errors.venue}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Event Description (Optional)
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-dark-black border border-gray-600 text-white focus:outline-none focus:border-primary-yellow transition-colors"
                  placeholder="Tell people about your event..."
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  <FiImage className="inline mr-2" />
                  Event Image <span className="text-primary-yellow">*</span>
                </label>
                <div className="mb-2">
                  <p className="text-sm text-gray-400 mb-2">
                    Required size: <span className="text-primary-yellow font-semibold">{REQUIRED_IMAGE_WIDTH} x {REQUIRED_IMAGE_HEIGHT} pixels</span>
                    <br />
                    <span className="text-xs">(We'll help you crop if needed)</span>
                  </p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                  className="hidden"
                />
                <div className="space-y-4">
                  {imagePreview ? (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Event preview"
                        className="w-full max-w-md h-auto rounded-lg border-2 border-primary-yellow/50"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setImagePreview(null)
                          setImageFile(null)
                          if (fileInputRef.current) fileInputRef.current.value = ''
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
                      >
                        <FiX className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-primary-yellow transition-colors"
                    >
                      <FiUpload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-white font-semibold">Click to upload image</p>
                      <p className="text-gray-400 text-sm mt-1">
                        {REQUIRED_IMAGE_WIDTH} x {REQUIRED_IMAGE_HEIGHT} pixels recommended
                      </p>
                    </button>
                  )}
                  {imageError && (
                    <p className="text-red-500 text-sm">{imageError}</p>
                  )}
                  {errors.image && (
                    <p className="text-red-500 text-sm">{errors.image}</p>
                  )}
                </div>
              </div>

              {/* Ticket Categories */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  <FiDollarSign className="inline mr-2" />
                  Ticket Categories <span className="text-primary-yellow">*</span>
                </label>
                <p className="text-sm text-gray-400 mb-4">
                  Add different ticket types (e.g., General Admission, VIP, Early Bird)
                </p>
                <div className="space-y-4">
                  {ticketCategories.map((category, index) => (
                    <div
                      key={category.id}
                      className="bg-dark-black rounded-lg p-4 border border-gray-700"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-gray-300 text-sm mb-1">
                              Category Name
                            </label>
                            <input
                              type="text"
                              value={category.name}
                              onChange={(e) =>
                                updateTicketCategory(category.id, 'name', e.target.value)
                              }
                              className={`w-full px-3 py-2 rounded bg-dark-black-light border ${
                                errors[`ticketName_${index}`]
                                  ? 'border-red-500'
                                  : 'border-gray-600'
                              } text-white focus:outline-none focus:border-primary-yellow`}
                              placeholder="e.g., General Admission"
                            />
                            {errors[`ticketName_${index}`] && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors[`ticketName_${index}`]}
                              </p>
                            )}
                          </div>
                          <div>
                            <label className="block text-gray-300 text-sm mb-1">
                              Price ($)
                            </label>
                            <input
                              type="number"
                              min="0"
                              step="0.01"
                              value={category.price}
                              onChange={(e) =>
                                updateTicketCategory(
                                  category.id,
                                  'price',
                                  parseFloat(e.target.value) || 0
                                )
                              }
                              className={`w-full px-3 py-2 rounded bg-dark-black-light border ${
                                errors[`ticketPrice_${index}`]
                                  ? 'border-red-500'
                                  : 'border-gray-600'
                              } text-white focus:outline-none focus:border-primary-yellow`}
                              placeholder="0.00"
                            />
                            {errors[`ticketPrice_${index}`] && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors[`ticketPrice_${index}`]}
                              </p>
                            )}
                          </div>
                          <div>
                            <label className="block text-gray-300 text-sm mb-1">
                              Number of Tickets
                            </label>
                            <input
                              type="number"
                              min="1"
                              value={category.quantity}
                              onChange={(e) =>
                                updateTicketCategory(
                                  category.id,
                                  'quantity',
                                  parseInt(e.target.value) || 0
                                )
                              }
                              className={`w-full px-3 py-2 rounded bg-dark-black-light border ${
                                errors[`ticketQuantity_${index}`]
                                  ? 'border-red-500'
                                  : 'border-gray-600'
                              } text-white focus:outline-none focus:border-primary-yellow`}
                              placeholder="0"
                            />
                            {errors[`ticketQuantity_${index}`] && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors[`ticketQuantity_${index}`]}
                              </p>
                            )}
                          </div>
                        </div>
                        {ticketCategories.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeTicketCategory(category.id)}
                            className="ml-4 text-red-500 hover:text-red-600"
                          >
                            <FiX className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addTicketCategory}
                    className="w-full border-2 border-dashed border-gray-600 rounded-lg p-4 text-center hover:border-primary-yellow transition-colors flex items-center justify-center space-x-2"
                  >
                    <FiPlus className="w-5 h-5 text-primary-yellow" />
                    <span className="text-white">Add Another Ticket Category</span>
                  </button>
                </div>
              </div>

              {/* Registered Members Section */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  <FiUsers className="inline mr-2" />
                  Registered Members (Special Pricing) <span className="text-gray-400 text-sm font-normal">(Optional)</span>
                </label>
                <p className="text-sm text-gray-400 mb-4">
                  Add registered members who will receive special pricing. Include the primary member and number of members under their membership.
                </p>
                <div className="space-y-4">
                  {registeredMembers.length === 0 ? (
                    <div className="text-center py-8 border-2 border-dashed border-gray-600 rounded-lg">
                      <p className="text-gray-400 mb-4">No registered members added yet</p>
                      <button
                        type="button"
                        onClick={addRegisteredMember}
                        className="bg-primary-yellow/20 text-primary-yellow px-6 py-2 rounded-lg hover:bg-primary-yellow/30 transition-colors border border-primary-yellow/50"
                      >
                        <FiPlus className="inline mr-2" />
                        Add First Registered Member
                      </button>
                    </div>
                  ) : (
                    registeredMembers.map((member, index) => (
                      <div
                        key={member.id}
                        className="bg-dark-black rounded-lg p-4 border border-primary-yellow/30"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-white font-semibold">Member #{index + 1}</h4>
                          <button
                            type="button"
                            onClick={() => removeRegisteredMember(member.id)}
                            className="text-red-500 hover:text-red-600"
                          >
                            <FiX className="w-5 h-5" />
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-300 text-sm mb-1">
                              <FiUser className="inline mr-1" />
                              Full Name <span className="text-primary-yellow">*</span>
                            </label>
                            <input
                              type="text"
                              value={member.name}
                              onChange={(e) =>
                                updateRegisteredMember(member.id, 'name', e.target.value)
                              }
                              className={`w-full px-3 py-2 rounded bg-dark-black-light border ${
                                errors[`memberName_${index}`]
                                  ? 'border-red-500'
                                  : 'border-gray-600'
                              } text-white focus:outline-none focus:border-primary-yellow`}
                              placeholder="John Doe"
                            />
                            {errors[`memberName_${index}`] && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors[`memberName_${index}`]}
                              </p>
                            )}
                          </div>
                          <div>
                            <label className="block text-gray-300 text-sm mb-1">
                              <FiMail className="inline mr-1" />
                              Email Address <span className="text-primary-yellow">*</span>
                            </label>
                            <input
                              type="email"
                              value={member.email}
                              onChange={(e) =>
                                updateRegisteredMember(member.id, 'email', e.target.value)
                              }
                              className={`w-full px-3 py-2 rounded bg-dark-black-light border ${
                                errors[`memberEmail_${index}`]
                                  ? 'border-red-500'
                                  : 'border-gray-600'
                              } text-white focus:outline-none focus:border-primary-yellow`}
                              placeholder="john.doe@example.com"
                            />
                            {errors[`memberEmail_${index}`] && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors[`memberEmail_${index}`]}
                              </p>
                            )}
                          </div>
                          <div>
                            <label className="block text-gray-300 text-sm mb-1">
                              <FiPhone className="inline mr-1" />
                              Phone Number <span className="text-primary-yellow">*</span>
                            </label>
                            <input
                              type="tel"
                              value={member.phone}
                              onChange={(e) =>
                                updateRegisteredMember(member.id, 'phone', e.target.value)
                              }
                              className={`w-full px-3 py-2 rounded bg-dark-black-light border ${
                                errors[`memberPhone_${index}`]
                                  ? 'border-red-500'
                                  : 'border-gray-600'
                              } text-white focus:outline-none focus:border-primary-yellow`}
                              placeholder="(123) 456-7890"
                            />
                            {errors[`memberPhone_${index}`] && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors[`memberPhone_${index}`]}
                              </p>
                            )}
                          </div>
                          <div>
                            <label className="block text-gray-300 text-sm mb-1">
                              <FiUsers className="inline mr-1" />
                              Number of Members <span className="text-primary-yellow">*</span>
                            </label>
                            <input
                              type="number"
                              min="1"
                              value={member.memberCount}
                              onChange={(e) =>
                                updateRegisteredMember(
                                  member.id,
                                  'memberCount',
                                  parseInt(e.target.value) || 1
                                )
                              }
                              className={`w-full px-3 py-2 rounded bg-dark-black-light border ${
                                errors[`memberCount_${index}`]
                                  ? 'border-red-500'
                                  : 'border-gray-600'
                              } text-white focus:outline-none focus:border-primary-yellow`}
                              placeholder="1"
                            />
                            <p className="text-gray-500 text-xs mt-1">
                              Total members under this primary membership
                            </p>
                            {errors[`memberCount_${index}`] && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors[`memberCount_${index}`]}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                  {registeredMembers.length > 0 && (
                    <button
                      type="button"
                      onClick={addRegisteredMember}
                      className="w-full border-2 border-dashed border-gray-600 rounded-lg p-4 text-center hover:border-primary-yellow transition-colors flex items-center justify-center space-x-2"
                    >
                      <FiPlus className="w-5 h-5 text-primary-yellow" />
                      <span className="text-white">Add Another Registered Member</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Bank Account Details Section */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  <FiCreditCard className="inline mr-2" />
                  Bank Account Details (Stripe Payments) <span className="text-primary-yellow">*</span>
                </label>
                <div className="bg-primary-yellow/10 border border-primary-yellow/30 rounded-lg p-4 mb-4">
                  <div className="flex items-start space-x-2">
                    <FiLock className="text-primary-yellow mt-0.5" />
                    <p className="text-sm text-gray-300">
                      Your bank account information is securely encrypted and will be used to receive ticket payments through Stripe. 
                      This information is required to process payments for your event.
                    </p>
                  </div>
                </div>
                <div className="bg-dark-black rounded-lg p-4 border border-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-gray-300 text-sm mb-1">
                        Bank Name <span className="text-primary-yellow">*</span>
                      </label>
                      <input
                        type="text"
                        value={bankAccount.bank}
                        onChange={(e) => setBankAccount({ ...bankAccount, bank: e.target.value })}
                        className={`w-full px-3 py-2 rounded bg-dark-black-light border ${
                          errors.bank ? 'border-red-500' : 'border-gray-600'
                        } text-white focus:outline-none focus:border-primary-yellow`}
                        placeholder="e.g., TD Canada Trust, RBC, Scotiabank"
                      />
                      {errors.bank && (
                        <p className="text-red-500 text-xs mt-1">{errors.bank}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">
                        Account Number <span className="text-primary-yellow">*</span>
                      </label>
                      <input
                        type="text"
                        value={bankAccount.accountNumber}
                        onChange={(e) => setBankAccount({ ...bankAccount, accountNumber: e.target.value })}
                        className={`w-full px-3 py-2 rounded bg-dark-black-light border ${
                          errors.accountNumber ? 'border-red-500' : 'border-gray-600'
                        } text-white focus:outline-none focus:border-primary-yellow`}
                        placeholder="Enter account number"
                      />
                      {errors.accountNumber && (
                        <p className="text-red-500 text-xs mt-1">{errors.accountNumber}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">
                        Transit Number <span className="text-primary-yellow">*</span>
                        <span className="text-gray-500 text-xs ml-1">(5 digits)</span>
                      </label>
                      <input
                        type="text"
                        maxLength={5}
                        value={bankAccount.transitNumber}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '').slice(0, 5)
                          setBankAccount({ ...bankAccount, transitNumber: value })
                        }}
                        className={`w-full px-3 py-2 rounded bg-dark-black-light border ${
                          errors.transitNumber ? 'border-red-500' : 'border-gray-600'
                        } text-white focus:outline-none focus:border-primary-yellow`}
                        placeholder="12345"
                      />
                      {errors.transitNumber && (
                        <p className="text-red-500 text-xs mt-1">{errors.transitNumber}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">
                        Institution Number <span className="text-primary-yellow">*</span>
                        <span className="text-gray-500 text-xs ml-1">(3 digits)</span>
                      </label>
                      <input
                        type="text"
                        maxLength={3}
                        value={bankAccount.institutionNumber}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '').slice(0, 3)
                          setBankAccount({ ...bankAccount, institutionNumber: value })
                        }}
                        className={`w-full px-3 py-2 rounded bg-dark-black-light border ${
                          errors.institutionNumber ? 'border-red-500' : 'border-gray-600'
                        } text-white focus:outline-none focus:border-primary-yellow`}
                        placeholder="001"
                      />
                      {errors.institutionNumber && (
                        <p className="text-red-500 text-xs mt-1">{errors.institutionNumber}</p>
                      )}
                      <p className="text-gray-500 text-xs mt-1">
                        Common: TD (004), RBC (003), Scotiabank (002), BMO (001), CIBC (010)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex space-x-4">
                <button
                  type="button"
                  onClick={() => router.push('/create-event/profile')}
                  className="flex-1 bg-gray-700 text-white font-bold py-4 px-8 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary-yellow text-black font-bold py-4 px-8 rounded-lg hover:bg-primary-yellow-dark transition-colors"
                >
                  Create Event & Start Selling
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />

      {/* Crop Modal */}
      {showCropModal && cropImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-dark-black-light rounded-lg border border-primary-yellow/20 p-6 max-w-2xl w-full">
            <h3 className="text-xl font-bold text-white mb-4">
              Crop Your Image
            </h3>
            <p className="text-gray-400 mb-4">
              Your image needs to be cropped to {REQUIRED_IMAGE_WIDTH} x {REQUIRED_IMAGE_HEIGHT} pixels.
              We'll automatically center and crop it for you.
            </p>
            <div className="mb-4">
              <img
                src={cropImage}
                alt="Crop preview"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => {
                  setShowCropModal(false)
                  setCropImage(null)
                  if (fileInputRef.current) fileInputRef.current.value = ''
                }}
                className="flex-1 bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleCrop}
                className="flex-1 bg-primary-yellow text-black font-bold py-3 px-6 rounded-lg hover:bg-primary-yellow-dark transition-colors"
              >
                Crop & Use Image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

