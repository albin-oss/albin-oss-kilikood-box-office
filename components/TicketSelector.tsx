'use client'

import { useState } from 'react'
import { FiPlus, FiMinus, FiShoppingCart } from 'react-icons/fi'

interface TicketCategory {
  id: string
  name: string
  price: number
  memberPrice: number
  quantity: number
}

interface TicketSelectorProps {
  categories: TicketCategory[]
  isMember: boolean
  onCartUpdate: (cart: CartItem[]) => void
}

export interface CartItem {
  categoryId: string
  categoryName: string
  price: number
  quantity: number
}

export default function TicketSelector({
  categories,
  isMember,
  onCartUpdate,
}: TicketSelectorProps) {
  const [quantities, setQuantities] = useState<Record<string, number>>({})

  const updateQuantity = (categoryId: string, change: number) => {
    setQuantities((prev) => {
      const newQuantities = {
        ...prev,
        [categoryId]: Math.max(0, (prev[categoryId] || 0) + change),
      }
      updateCart(newQuantities)
      return newQuantities
    })
  }

  const updateCart = (qty: Record<string, number>) => {
    const cartItems: CartItem[] = categories
      .filter((cat) => qty[cat.id] > 0)
      .map((cat) => ({
        categoryId: cat.id,
        categoryName: cat.name,
        price: isMember ? cat.memberPrice : cat.price,
        quantity: qty[cat.id],
      }))
    onCartUpdate(cartItems)
  }

  const totalItems = Object.values(quantities).reduce((sum, qty) => sum + qty, 0)
  const totalPrice = categories.reduce((sum, cat) => {
    const qty = quantities[cat.id] || 0
    const price = isMember ? cat.memberPrice : cat.price
    return sum + price * qty
  }, 0)

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white mb-4">Select Tickets</h3>
      <div className="space-y-4">
        {categories.map((category) => {
          const quantity = quantities[category.id] || 0
          const displayPrice = isMember ? category.memberPrice : category.price
          const savings = category.price - category.memberPrice

          return (
            <div
              key={category.id}
              className="bg-dark-black-light rounded-lg p-4 border border-gray-700"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {category.name}
                  </h4>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-primary-yellow">
                      ${displayPrice}
                    </span>
                    {isMember && savings > 0 && (
                      <span className="text-sm text-gray-400 line-through">
                        ${category.price}
                      </span>
                    )}
                    {isMember && savings > 0 && (
                      <span className="text-sm text-green-400 font-semibold">
                        Save ${savings}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateQuantity(category.id, -1)}
                    disabled={quantity === 0}
                    className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors"
                  >
                    <FiMinus className="w-4 h-4" />
                  </button>
                  <span className="text-white font-semibold w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(category.id, 1)}
                    className="w-8 h-8 rounded-full bg-primary-yellow hover:bg-primary-yellow-dark text-black flex items-center justify-center transition-colors"
                  >
                    <FiPlus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {totalItems > 0 && (
        <div className="bg-primary-yellow/20 border border-primary-yellow/30 rounded-lg p-4 mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-semibold">Total Items:</span>
            <span className="text-primary-yellow font-bold">{totalItems}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white font-semibold text-lg">Total Price:</span>
            <span className="text-primary-yellow font-bold text-2xl">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

