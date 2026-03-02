'use client'

import { useState } from 'react'
import { addToCart } from '../../components/Cart'

const products = [
  {
    id: 1,
    name: 'Betta Fish',
    description: 'A bold and elegant centerpiece for any tank.',
    price: '₹300 – ₹1,500',
    numericPrice: 900,
    image: '/fish1.png',
    alt: 'Betta Fish',
    size: 'Standard',
    color: 'N/A',
  },
  {
    id: 2,
    name: 'Angelfish',
    description: 'Graceful swimmers with timeless charm.',
    price: '₹250 – ₹1,200',
    numericPrice: 725,
    image: '/fish2.png',
    alt: 'Angelfish',
    size: 'Standard',
    color: 'N/A',
  },
  {
    id: 3,
    name: 'Guppy',
    description: 'Small, colorful, and perfect for lively aquariums',
    price: '₹100 – ₹500 (per pair)',
    numericPrice: 300,
    image: '/fish3.png',
    alt: 'Guppy',
    size: 'Standard',
    color: 'N/A',
  },
  {
    id: 4,
    name: 'Goldfish',
    description: 'A classic favorite with lasting appeal.',
    price: '₹200 – ₹2,000',
    numericPrice: 1100,
    image: '/fish4.png',
    alt: 'Goldfish',
    size: 'Standard',
    color: 'N/A',
  },
]

export default function FreshwaterFishPage() {
  const [added, setAdded] = useState({})
  const [sortBy, setSortBy] = useState('')
  const [isSortOpen, setIsSortOpen] = useState(false)

  const handleAddToCart = (product) => {
    addToCart({ ...product, source: 'freshwater-fish' })
    setAdded(prev => ({ ...prev, [product.id]: true }))
    setTimeout(() => setAdded(prev => ({ ...prev, [product.id]: false })), 1500)
  }

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'Price: low to high') return a.numericPrice - b.numericPrice
    if (sortBy === 'Price: high to low') return b.numericPrice - a.numericPrice
    return 0
  })

  return (
    <div className="min-h-screen bg-[linear-gradient(180.8deg,#065EB6_0.68%,#000C18_99.32%)]">
      <div className="pt-16">
        <section className="py-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            Fish & Species
          </h1>
          <p className="text-[#8fa8c0] text-sm sm:text-base tracking-wide">Freshwater Fish</p>
        </section>

        <section className="px-4 sm:px-8 lg:px-16 pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-end mb-6">
              <div className="relative">
                <button onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-2 bg-white text-black text-xs px-3 py-2 rounded-sm shadow-sm hover:bg-gray-50 transition-colors">
                  Sort by
                  <svg className={`w-3 h-3 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isSortOpen && (
                  <div className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded-sm z-50 min-w-[150px]">
                    {['Price: low to high', 'Price: high to low'].map((option) => (
                      <button key={option} onClick={() => { setSortBy(option); setIsSortOpen(false) }}
                        className="block w-full text-left px-4 py-2.5 text-black text-xs hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-10 gap-y-24 sm:gap-x-14 sm:gap-y-28">
              {sortedProducts.map((product) => (
                <div key={product.id} className="rounded-sm overflow-hidden shadow-md group">
                  <div className="relative w-full overflow-hidden" style={{ paddingBottom: '105%' }}>
                    <img src={product.image} alt={product.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.background = '#0a2a4a' }} />
                    <div className="absolute inset-0 flex items-center justify-center -z-10">
                      <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4 text-center bg-transparent">
                    <h3 className="text-sm sm:text-base font-bold text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>{product.name}</h3>
                    <p className="text-[#8fa8c0] text-xs sm:text-sm mb-2 leading-relaxed">{product.description}</p>
                    <p className="text-white font-bold text-sm sm:text-base mb-3">{product.price}</p>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`border text-xs mt-3 mb-10 sm:text-sm py-2 px-12 transition-all duration-300 font-medium tracking-wide rounded-2xl ${
                        added[product.id]
                          ? 'bg-green-500 border-green-500 text-white scale-95'
                          : 'border-white/30 text-black bg-white hover:bg-gray-100'
                      }`}
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