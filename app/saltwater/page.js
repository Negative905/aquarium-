'use client'

import { useState, useEffect, useRef } from 'react'

const products = [
  {
    id: 1,
    name: 'Premium Marine Glass Tank',
    description: 'High-clarity marine tank built for 80 liter water species',
    price: '₹30,000 – ₹60,000',
    image: '/saltwater1.png',
    alt: 'kgf',
  },
  {
    id: 2,
    name: 'Rimless Marine Display',
    description: 'Ultra-clear glass with modern Open-Top design',
    price: '₹45,000 – ₹85,000',
    image: '/saltwater2.png',
    alt:'kgf',
  },
  {
    id: 3,
    name: 'Fish-Only Marine Setup',
    description: 'Ideal marine tank designed for vibrant ocean fish',
    price: '₹35,000 – ₹35,000',
    image: '/saltwater3.png',
    alt: 'Bow Front Aquarium',
  },
  {
    id: 4,
    name: 'Large Oceanic Tank',
    description: 'Spaciuos marine display for luxury interiors',
    price: '₹80,000 – ₹2,00,000',
    image: '/saltwater4.png',
    alt: 'Cube Nano Tank',
  },
]

export default function AquariumsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAquariumsOpen, setIsAquariumsOpen] = useState(false)
  const [sortBy, setSortBy] = useState('')
  const [isSortOpen, setIsSortOpen] = useState(false)

  const aquariumsDropdownRef = useRef(null)
  const sortDropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (aquariumsDropdownRef.current && !aquariumsDropdownRef.current.contains(event.target)) {
        setIsAquariumsOpen(false)
      }
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
        setIsSortOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

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
            Aquariums
          </h1>
          <p className="text-[#8fa8c0] text-sm sm:text-base tracking-wide">
            Saltwater Aquariums
          </p>
        </section>

        {/* ── PRODUCTS GRID ── */}
        <section className="px-4 sm:px-8 lg:px-16 pb-20">
          <div className="max-w-5xl mx-auto">

            {/* Sort By */}
            <div className="flex justify-end mb-6">
              <div ref={sortDropdownRef} className="relative">
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
                    {['Price: Low to High', 'Price: High to Low', 'Newest First'].map((option) => (
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
                <div key={product.id} className="rounded-sm overflow-hidden shadow-md group">
                  {/* Product Image */}
                  <div className="relative w-full" style={{ paddingBottom: '105%' }}>
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback placeholder if image doesn't exist
                        e.target.style.display = 'none'
                        e.target.parentElement.style.background = '#c8dbe8'
                      }}
                    />
                    {/* Placeholder background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center -z-10">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
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
                    <p className="text-white text-xs sm:text-sm mb-2 leading-relaxed">
                      {product.description}
                    </p>
                    <p className="text-white font-bold text-sm sm:text-base mb-3">
                      {product.price}
                    </p>
                    <button className="border border-white text-black bg-white rounded-3xl text-xs sm:text-sm py-2 px-12 hover:bg-[#1a3a5c] hover:text-white transition-colors font-medium tracking-wide">
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
