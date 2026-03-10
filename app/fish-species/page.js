'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { addToCart } from '../../components/Cart'

const products = [
  { id: 1, name: 'Betta Fish', description: 'A bold and elegant centerpiece for any tank.', price: '₹300 – ₹1,500', numericPrice: 900, image: '/fish1.png', alt: 'Betta Fish', size: 'Standard', color: 'N/A' },
  { id: 2, name: 'Angelfish', description: 'Graceful swimmers with timeless charm.', price: '₹250 – ₹1,200', numericPrice: 725, image: '/fish2.png', alt: 'Angelfish', size: 'Standard', color: 'N/A' },
  { id: 3, name: 'Guppy', description: 'Small, colorful, and perfect for lively aquariums', price: '₹100 – ₹500 (per pair)', numericPrice: 300, image: '/fish3.png', alt: 'Guppy', size: 'Standard', color: 'N/A' },
  { id: 4, name: 'Goldfish', description: 'A classic favorite with lasting appeal.', price: '₹200 – ₹2,000', numericPrice: 1100, image: '/fish4.png', alt: 'Goldfish', size: 'Standard', color: 'N/A' },
]

const qtyVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 350, damping: 22 } },
  exit: { opacity: 0, scale: 0.85, transition: { duration: 0.15 } },
}

export default function FreshwaterFishPage() {
  const [quantities, setQuantities] = useState({})
  const [sortBy, setSortBy] = useState('')
  const [isSortOpen, setIsSortOpen] = useState(false)

  const handleAddToCart = (product) => {
    addToCart({ ...product, source: 'freshwater-fish', quantity: 1 })
    setQuantities(prev => ({ ...prev, [product.id]: 1 }))
  }

  const handleIncrease = (product) => {
    const newQty = (quantities[product.id] || 0) + 1
    setQuantities(prev => ({ ...prev, [product.id]: newQty }))
    addToCart({ ...product, source: 'freshwater-fish', quantity: newQty })
  }

  const handleDecrease = (product) => {
    const current = quantities[product.id] || 0
    if (current <= 1) {
      setQuantities(prev => { const updated = { ...prev }; delete updated[product.id]; return updated })
    } else {
      const newQty = current - 1
      setQuantities(prev => ({ ...prev, [product.id]: newQty }))
      addToCart({ ...product, source: 'freshwater-fish', quantity: newQty })
    }
  }

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'Price: low to high') return a.numericPrice - b.numericPrice
    if (sortBy === 'Price: high to low') return b.numericPrice - a.numericPrice
    return 0
  })

  return (
    <div className="min-h-screen bg-[linear-gradient(180.8deg,#065EB6_0.68%,#000C18_99.32%)]">
      <div className="pt-16">

        {/* ── Hero ── */}
        <section className="py-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            Fish & Species
          </h1>
          <p className="text-[#8fa8c0] text-sm sm:text-base tracking-wide">Freshwater Fish</p>
        </section>

        {/* ── Products ── */}
        <section className="px-4 sm:px-8 lg:px-16 pb-20">
          <div className="max-w-6xl mx-auto">

            {/* Sort */}
            <div className="flex justify-end mb-6">
              <div className="relative">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-2 bg-white text-black text-xs px-3 py-2 rounded-sm shadow-sm hover:bg-gray-50 transition-colors"
                >
                  Sort by
                  <svg className={`w-3 h-3 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {isSortOpen && (
                    <motion.div
                      className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded-sm z-50 min-w-[150px]"
                      initial={{ opacity: 0, y: -6, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                    >
                      {['Price: low to high', 'Price: high to low'].map((option) => (
                        <button key={option} onClick={() => { setSortBy(option); setIsSortOpen(false) }}
                          className="block w-full text-left px-4 py-2.5 text-black text-xs hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                          {option}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Grid:
                mobile: 1 column, fixed-height image
                sm+:    original 2-column layout, unchanged
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 sm:gap-x-14 sm:gap-y-28">
              {sortedProducts.map((product) => (
                <div key={product.id} className="rounded-sm bg-[#0a1e38] overflow-hidden shadow-md group">

                  {/* Image:
                      mobile → fixed h-56
                      sm+    → original pb-[105%] portrait ratio
                  */}
                  <div className="relative w-full h-56 sm:h-0 sm:pb-[105%] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.background = '#0a2a4a' }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center -z-10">
                      <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4 text-center bg-transparent">
                    <h3 className="text-sm sm:text-base font-bold text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>{product.name}</h3>
                    <p className="text-[#8fa8c0] text-xs sm:text-sm mb-2 leading-relaxed">{product.description}</p>
                    <p className="text-white font-bold text-sm sm:text-base mb-3">{product.price}</p>

                    <div className="flex justify-center">
                      <AnimatePresence mode="wait">
                        {quantities[product.id] ? (
                          <motion.div
                            key="qty"
                            variants={qtyVariant}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex items-center mx-auto w-fit backdrop-blur-md bg-white/20 border border-white/30 rounded-xl overflow-hidden mt-3 mb-10"
                          >
                            <button onClick={() => handleDecrease(product)} className="text-white text-lg font-bold px-4 py-2 hover:bg-white/20 transition-all duration-200 leading-none">−</button>
                            <AnimatePresence mode="wait">
                              <motion.span
                                key={quantities[product.id]}
                                className="text-white text-sm font-semibold px-3 py-2 border-x border-white/30 min-w-[36px] text-center"
                                initial={{ opacity: 0, y: -6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 6 }}
                                transition={{ duration: 0.15 }}
                              >
                                {quantities[product.id]}
                              </motion.span>
                            </AnimatePresence>
                            <button onClick={() => handleIncrease(product)} className="text-white text-lg font-bold px-4 py-2 hover:bg-white/20 transition-all duration-200 leading-none">+</button>
                          </motion.div>
                        ) : (
                          <motion.button
                            key="add"
                            variants={qtyVariant}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={() => handleAddToCart(product)}
                            className="text-xs sm:text-sm mt-3 mb-10 py-2 px-8 sm:px-12 transition-all duration-300 font-medium tracking-wide rounded-xl backdrop-blur-md border bg-white/20 border-white/30 text-white hover:bg-white/30 w-full sm:w-auto"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            🛒 Add to cart
                          </motion.button>
                        )}
                      </AnimatePresence>
                    </div>
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