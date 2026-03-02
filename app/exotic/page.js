'use client'

import { useState } from 'react'
import { addToCart } from '../../components/Cart'

const products = [
  { id: 9, name: 'Seahorse', description: 'A graceful and unique marine marvel.', price: '₹4,000 – ₹10,000', numericPrice: 7000, image: '/fish9.png', alt: 'Seahorse', size: 'Standard', color: 'N/A' },
  { id: 10, name: 'Starfish', description: 'Natural beauty resting on the ocean floor.', price: '₹2,000 – ₹6,000', numericPrice: 4000, image: '/fish10.png', alt: 'Starfish', size: 'Standard', color: 'N/A' },
  { id: 11, name: 'Cleaner Shrimp', description: 'Functional elegance that supports tank health', price: '₹1,500 – ₹3,500', numericPrice: 2500, image: '/fish11.png', alt: 'Cleaner Shrimp', size: 'Standard', color: 'N/A' },
  { id: 12, name: 'Freshwater Stingray', description: 'A rare and captivating showpiece species.', price: '₹15,000 – ₹50,000', numericPrice: 32500, image: '/fish12.png', alt: 'Freshwater Stingray', size: 'Large', color: 'N/A' },
]

export default function ExoticSpeciesPage() {
  const [added, setAdded] = useState({})
  const [sortBy, setSortBy] = useState('')
  const [isSortOpen, setIsSortOpen] = useState(false)

  const handleAddToCart = (product) => {
    addToCart({ ...product, source: 'exotic-species' })
    setAdded(prev => ({ ...prev, [product.id]: true }))
    setTimeout(() => setAdded(prev => ({ ...prev, [product.id]: false })), 1500)
  }

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.numericPrice - b.numericPrice
    if (sortBy === 'Price: High to Low') return b.numericPrice - a.numericPrice
    return 0
  })

  return (
    <div className="min-h-screen bg-[linear-gradient(180.8deg,#065EB6_0.68%,#000C18_99.32%)]">
      <div className="pt-16">
        <section className="py-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>Fish & Species</h1>
          <p className="text-[#8fa8c0] text-sm sm:text-base tracking-wide">Exotic Species</p>
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
                    {['Price: Low to High', 'Price: High to Low'].map((option) => (
                      <button key={option} onClick={() => { setSortBy(option); setIsSortOpen(false) }} className="block w-full text-left px-4 py-2.5 text-black text-xs hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">{option}</button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-24 sm:gap-x-14 sm:gap-y-28">
              {sortedProducts.map((product) => (
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
                      className={`border text-xs sm:text-sm py-2 px-12 transition-all duration-300 font-medium tracking-wide rounded-3xl ${added[product.id] ? 'bg-green-500 border-green-500 text-white' : 'border-white text-black bg-white hover:bg-[#1a3a5c] hover:text-white'}`}
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