'use client'

import { useState } from 'react'
import { addToCart } from '../../components/Cart'

const products = [
  { id: 101, name: 'Classic Rectangular Glass Tank', description: 'A timeless freshwater setup ideal for beginners and homes.', price: '₹8,000 – ₹15,000', numericPrice: 11500, image: '/freshwater-1.png', alt: 'Classic Rectangular Glass Tank', size: 'Large', color: 'White' },
  { id: 102, name: 'Rimless Designer Tank', description: 'Sleek, modern rimless tank for a clean aesthetic look', price: '₹18,000 – ₹30,000', numericPrice: 24000, image: '/freshwater-2.png', alt: 'Rimless Designer Tank', size: 'Large', color: 'White' },
  { id: 103, name: 'Bow Front Aquarium', description: 'Curved glass design offering a wider viewing experience.', price: '₹20,000 – ₹35,000', numericPrice: 27500, image: '/freshwater-3.png', alt: 'Bow Front Aquarium', size: 'Large', color: 'White' },
  { id: 104, name: 'Cube Nano Tank', description: 'Compact and stylish tank perfect for small spaces', price: '₹7,000 – ₹14,000', numericPrice: 10500, image: '/freshwater-4.png', alt: 'Cube Nano Tank', size: 'Small', color: 'White' },
]

export default function FreshwaterAquariumsPage() {
  const [added, setAdded] = useState({})
  const [sortBy, setSortBy] = useState('')
  const [isSortOpen, setIsSortOpen] = useState(false)

  const handleAddToCart = (product) => {
    addToCart({ ...product, source: 'freshwater-aquariums' })
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
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>Aquariums</h1>
          <p className="text-[#8fa8c0] text-sm sm:text-base tracking-wide">Freshwater Aquariums</p>
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
                <div key={product.id} className="rounded-sm overflow-hidden shadow-md group">
                  <div className="relative w-full" style={{ paddingBottom: '105%' }}>
                    <img src={product.image} alt={product.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.background = '#c8dbe8' }} />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center -z-10" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-sm sm:text-base font-bold text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>{product.name}</h3>
                    <p className="text-white text-xs sm:text-sm mb-2 leading-relaxed">{product.description}</p>
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