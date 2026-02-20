'use client'

import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Clown Fish',
    description: 'Iconic reef fish with vibrant personality.',
    price: '₹1,500 – ₹4,000',
    image: '/fish5.png',
    alt: 'Betta Fish',
  },
  {
    id: 2,
    name: 'Blue Tang',
    description: 'Striking blue tones that command attention.',
    price: '₹6,000 – ₹12,000',
    image: '/fish6.png',
    alt: 'Angelfish',
  },
  {
    id: 3,
    name: 'Butterfly Fish',
    description: 'Delicate patterns inspired by coral reefs',
    price: '₹3,000 – ₹8,000',
    image: '/fish7.png',
    alt: 'Guppy',
  },
  {
    id: 4,
    name: 'Royal Gramma',
    description: 'A colorful reef companion with bold contrast.',
    price: '₹2,500 – ₹5,000',
    image: '/fish8.png',
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

      {/* ─── NAVIGATION ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d1e35] border-b border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <span
                className="text-white font-bold text-xs sm:text-sm tracking-widest hidden sm:inline-block"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                OCEAN CROWN
              </span>
            </div>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-[#b0c4d8]">
              <li><a href="/" className="hover:text-white transition-colors font-medium">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors font-medium">About Us</a></li>

              {/* Aquariums Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setIsAquariumsOpen(true)}
                onMouseLeave={() => setIsAquariumsOpen(false)}
              >
                <a href="#" className="hover:text-white transition-colors font-medium flex items-center gap-1">
                  Aquariums
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${isAquariumsOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                {isAquariumsOpen && (
                  <div
                    className="absolute top-full left-0 bg-white shadow-lg rounded-sm z-50"
                    style={{ minWidth: '130px', paddingTop: '4px' }}
                  >
                    <div className="overflow-hidden rounded-sm">
                      <a href="/freshwater" className="block px-4 py-2.5 text-black text-sm hover:bg-gray-50 transition-colors border-b border-gray-100">Freshwater</a>
                      <a href="/saltwater" className="block px-4 py-2.5 text-black text-sm hover:bg-gray-50 transition-colors border-b border-gray-100">Saltwater</a>
                      <a href="/reef" className="block px-4 py-2.5 text-black text-sm hover:bg-gray-50 transition-colors">Reef</a>
                    </div>
                  </div>
                )}
              </li>

              <li><a href="/fish-species" className="text-white font-medium">Fish & Species</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-medium">Plants & Corals</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-medium">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-medium">Contact</a></li>
            </ul>

            {/* Right Icons */}
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2">
                <button className="w-8 h-8 rounded-full bg-[#1a3a5c] border border-cyan-500/40 hover:border-cyan-400 flex items-center justify-center text-cyan-400 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-cyan-500 hover:bg-cyan-400 flex items-center justify-center text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden text-white p-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-white/10">
              <ul className="flex flex-col gap-3 text-[#b0c4d8] mt-4 text-sm">
                {['Home', 'About Us', 'Aquariums', 'Fish & Species', 'Plants & Corals', 'Services', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="block hover:text-white transition-colors font-medium">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* ─── PAGE CONTENT ─── */}
      <div className="pt-16">

        {/* ── HERO ── */}
        <section className="py-10 text-center px-4">
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-2"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Fish & Species
          </h1>
          <p className="text-[#8fa8c0] text-sm sm:text-base tracking-wide">
            Freshwater Fish
          </p>
        </section>

        {/* ── PRODUCTS GRID ── */}
        <section className="px-4 sm:px-8 lg:px-16 pb-20">
          <div className="max-w-4xl mx-auto">

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
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-[#0a1e38] rounded-sm overflow-hidden shadow-md group">
                  {/* Product Image */}
                  <div className="relative w-full overflow-hidden" style={{ paddingBottom: '75%' }}>
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
                    <button className="w-full border border-white/30 bg-transparent text-white text-xs sm:text-sm py-2 px-4 hover:bg-white hover:text-[#0d1e35] transition-colors font-medium tracking-wide">
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="bg-[#060f1e] text-white border-t border-blue-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

              {/* Brand */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 bg-white/10 border border-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </div>
                  <span className="font-bold text-base tracking-widest" style={{ fontFamily: 'Georgia, serif' }}>OCEAN CROWN</span>
                </div>
                <p className="text-blue-300 text-sm leading-relaxed">
                  Elevating spaces with the elegance of the ocean. We design and maintain premium aquariums that bring
                  tranquility, beauty, and life into your environment.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-white mb-5 text-sm">Quick Links</h4>
                <ul className="space-y-3 text-sm text-blue-300">
                  {['Home', 'About Us', 'Aquariums', 'Fish & Species', 'Plants & Corals', 'Services', 'Contact'].map((link) => (
                    <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-bold text-white mb-5 text-sm">Services</h4>
                <ul className="space-y-3 text-sm text-blue-300">
                  {[
                    'Custom Aquarium Design',
                    'Marine & Reef Setup',
                    'Maintenance & Cleaning',
                    'Aquarium Consultation',
                    'Tank Relocation Services',
                  ].map((s) => (
                    <li key={s}><a href="#" className="hover:text-white transition-colors">{s}</a></li>
                  ))}
                </ul>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400 flex items-center justify-center hover:opacity-80 transition-opacity">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-500 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Stay Connected */}
              <div>
                <h4 className="font-bold text-white mb-5 text-sm">Stay Connected</h4>
                <p className="text-blue-300 text-sm mb-4 leading-relaxed">
                  Get updates on new aquarium designs, rare species, and special offers.
                </p>
                <div className="flex mb-6">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="flex-1 px-3 py-2 bg-white text-black text-xs placeholder-gray-400 outline-none min-w-0"
                  />
                  <button className="px-3 py-2 bg-white border-l border-gray-200 text-black text-xs font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <ul className="space-y-2 text-sm text-blue-300">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    oceancrown@gmail.com
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    +91-8907656789
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    Bangalore, India
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-blue-900/50 py-4">
            <p className="text-center text-blue-400 text-sm">
              © 2026, Ocean Crown. All rights reserved.
            </p>
          </div>
        </footer>

      </div>
    </div>
  )
}