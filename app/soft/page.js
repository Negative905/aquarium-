'use client'

import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'zoanthids',
    description: 'Bright and colorful coral with easy care.',
    price: '₹1,500 – ₹4000',
    image: '/coral1.png',
    alt: 'Betta Fish',
  },
  {
    id: 2,
    name: 'Mushroom Coral',
    description: 'Soft, textured coral with unique shapes.',
    price: '₹1,200 – ₹3,500',
    image: '/coral2.png',
    alt: 'Angelfish',
  },
  {
    id: 3,
    name: 'Leather Coral',
    description: 'Flowing Coral that adds natural motion',
    price: '₹2,000 – ₹5,000',
    image: '/coral3.png',
    alt: 'Guppy',
  },
  {
    id: 4,
    name: 'pulsing Xenia',
    description: 'Fascinating coral known for its rhyhtmic movement.',
    price: '₹1,800 – ₹4,500',
    image: '/plant4.png',
    alt: 'Goldfish',
  },
]

export default function FishSpeciesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAquariumsOpen, setIsAquariumsOpen] = useState(false)
  const [sortBy, setSortBy] = useState('')
  const [isSortOpen, setIsSortOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[linear-gradient(180.8deg,#065EB6_0.68%,#000C18_99.32%)]">

      {/* ─── PAGE CONTENT ─── */}
      <div className="pt-16">

        {/* ── HERO ── */}
        <section className="py-10 text-center px-4">
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-2"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Plants & Corals
          </h1>
          <p className="text-[#8fa8c0] text-sm sm:text-base tracking-wide">
            Soft Corals
          </p>
        </section>

        {/* ── PRODUCTS GRID ── */}
        <section className="px-4 sm:px-8 lg:px-16 pb-20">
          <div className="max-w-5xl mx-auto">

            {/* Sort By */}
            <div className="flex justify-end mb-6">
              <div className="relative">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-2 bg-white text-black text-xs px-3 py-2 rounded-sm shadow-sm hover:bg-gray-50 transition-colors"
                >
                  Sort by
                  <svg
                    className={`w-3 h-3 transition-transform ${isSortOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isSortOpen && (
                  <div className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded-sm z-50 min-w-[150px]">
                    {['Price: Low to High', 'Price: High to Low'].map((option) => (
                      <button
                        key={option}
                        onClick={() => { setSortBy(option); setIsSortOpen(false) }}
                        className="block w-full text-left px-4 py-2.5 text-black text-xs hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-24 sm:gap-x-14 sm:gap-y-28">
              {products.map((product) => (
                <div key={product.id} className="bg-[#0a1e38] rounded-sm overflow-hidden shadow-md group">
                  {/* Product Image */}
                  <div className="relative w-full overflow-hidden" style={{ paddingBottom: '105%' }}>
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.style.background = '#0a2a4a'
                      }}
                    />
                    {/* Placeholder background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-teal-900 flex items-center justify-center -z-10">
                      <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 text-center">
                    <h3
                      className="text-sm sm:text-base font-bold text-white mb-1"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-[#8fa8c0] text-xs sm:text-sm mb-2 leading-relaxed">
                      {product.description}
                    </p>
                    <p className="text-white font-bold text-sm sm:text-base mb-3">
                      {product.price}
                    </p>
                    <button className="border border-white/30 text-black bg-white text-xs  mt-3 mb-10 sm:text-sm py-2 px-12 hover:bg-white hover:text-[#0d1e35] transition-colors font-medium tracking-wide rounded-2xl">
                      Add to cart
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