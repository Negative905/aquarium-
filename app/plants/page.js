'use client'

import { useState } from 'react'
import { addToCart } from '../../components/Cart'

const products = [
  { id: 401, name: 'Anubias', description: 'Low maintenance plant perfect for beginners.', price: '₹300 – ₹900', numericPrice: 600, image: '/plant1.png', alt: 'Anubias', size: 'Standard', color: 'Green' },
  { id: 402, name: 'Java Fern', description: 'Hardy and elegant plant for freshwater tanks.', price: '₹250 – ₹800', numericPrice: 525, image: '/plant2.png', alt: 'Java Fern', size: 'Standard', color: 'Green' },
  { id: 403, name: 'Amazon Sword', description: 'Broad-leaf beauty ideal for background decor', price: '₹400 – ₹1,200', numericPrice: 800, image: '/plant3.png', alt: 'Amazon Sword', size: 'Standard', color: 'Green' },
  { id: 404, name: 'Dwarf Hairgrass', description: 'Creates a lush green carpet effect.', price: '₹500 – ₹1,500', numericPrice: 1000, image: '/plant4.png', alt: 'Dwarf Hairgrass', size: 'Standard', color: 'Green' },
]

export default function AquaticPlantsPage() {
  const [added, setAdded] = useState({})
  const [sortBy, setSortBy] = useState('')
  const [isSortOpen, setIsSortOpen] = useState(false)

  const handleAddToCart = (product) => {
    addToCart({ ...product, source: 'aquatic-plants' })
    setAdded(prev => ({ ...prev, [product.id]: true }))
    setTimeout(() => setAdded(prev => ({ ...prev, [product.id]: false })), 1500)
  }

  const getSortedProducts = () => {
    const sorted = [...products]
    if (sortBy === 'Price: low to high') {
      return sorted.sort((a, b) => a.numericPrice - b.numericPrice)
    } else if (sortBy === 'Price: high to low') {
      return sorted.sort((a, b) => b.numericPrice - a.numericPrice)
    }
    return sorted
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180.8deg,#065EB6_0.68%,#000C18_99.32%)]">
      <div className="pt-16">
        <section className="py-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>Plants & Corals</h1>
          <p className="text-[#8fa8c0] text-sm sm:text-base tracking-wide">Aquatic Plants</p>
        </section>
        <section className="px-4 sm:px-8 lg:px-16 pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-end mb-6">
              <div className="relative">
                <button onClick={() => setIsSortOpen(!isSortOpen)} className="flex items-center gap-2 bg-white text-black text-xs px-3 py-2 rounded-sm shadow-sm hover:bg-gray-50 transition-colors">
                  Sort by
                  <svg className={`w-3 h-3 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isSortOpen && (
                  <div className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded-sm z-50 min-w-[150px]">
                    {['Price: low to high', 'Price: high to low'].map((option) => (
                      <button key={option} onClick={() => { setSortBy(option); setIsSortOpen(false) }} className="block w-full text-left px-4 py-2.5 text-black text-xs hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">{option}</button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-24 sm:gap-x-14 sm:gap-y-28">
              {getSortedProducts().map((product) => (
                <div key={product.id} className="bg-[#0a1e38] rounded-sm overflow-hidden shadow-md group">
                  <div className="relative w-full overflow-hidden" style={{ paddingBottom: '105%' }}>
                    <img src={product.image} alt={product.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.background = '#0a2a4a' }} />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-teal-900 flex items-center justify-center -z-10" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-sm sm:text-base font-bold text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>{product.name}</h3>
                    <p className="text-[#8fa8c0] text-xs sm:text-sm mb-2 leading-relaxed">{product.description}</p>
                    <p className="text-white font-bold text-sm sm:text-base mb-3">{product.price}</p>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`border text-xs mt-3 mb-10 sm:text-sm py-2 px-12 transition-all duration-300 font-medium tracking-wide rounded-2xl ${added[product.id] ? 'bg-green-500 border-green-500 text-white' : 'border-white/30 text-black bg-white hover:bg-gray-100 hover:text-[#0d1e35]'}`}
                    >
                      {added[product.id] ? '✓ Added!' : 'Add to cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
