'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen relative">
      {/* Background GIF - Now Scrollable */}
      <div className="fixed inset-0 -z-10 h-screen overflow-hidden">
        <div className="w-full h-full relative">
          <Image
            src="/tortoise.gif"
            alt="Sea turtle swimming"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
        {/* Lighter overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-teal-400/20 to-cyan-500/30"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <span className="text-black font-bold text-xs sm:text-sm md:text-base tracking-widest hidden sm:inline-block">
                OCEAN CROWN
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center gap-4 lg:gap-6 text-black">
              <li>
                <a
                  href="#home"
                  className="hover:opacity-70 transition-opacity text-xs lg:text-sm font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:opacity-70 transition-opacity text-xs lg:text-sm font-medium"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#aquariums"
                  className="hover:opacity-70 transition-opacity text-xs lg:text-sm font-medium"
                >
                  Aquariums
                </a>
              </li>
              <li>
                <a
                  href="#fish"
                  className="hover:opacity-70 transition-opacity text-xs lg:text-sm font-medium"
                >
                  Fish & Species
                </a>
              </li>
              <li>
                <a
                  href="#plants"
                  className="hover:opacity-70 transition-opacity text-xs lg:text-sm font-medium"
                >
                  Plants & Corals
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:opacity-70 transition-opacity text-xs lg:text-sm font-medium"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:opacity-70 transition-opacity text-xs lg:text-sm font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Right Section - Icons & Mobile Menu Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Desktop Icons */}
              <div className="hidden md:flex items-center gap-2 lg:gap-3">
                <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black hover:bg-gray-800 transition-colors flex items-center justify-center text-white">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </button>
                <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black hover:bg-gray-800 transition-colors flex items-center justify-center text-white">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-black p-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-black/10">
              <ul className="flex flex-col gap-3 text-black mt-4">
                <li>
                  <a href="#home" className="block hover:opacity-70 transition-opacity text-sm font-medium">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="block hover:opacity-70 transition-opacity text-sm font-medium">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#aquariums" className="block hover:opacity-70 transition-opacity text-sm font-medium">
                    Aquariums
                  </a>
                </li>
                <li>
                  <a href="#fish" className="block hover:opacity-70 transition-opacity text-sm font-medium">
                    Fish & Species
                  </a>
                </li>
                <li>
                  <a href="#plants" className="block hover:opacity-70 transition-opacity text-sm font-medium">
                    Plants & Corals
                  </a>
                </li>
                <li>
                  <a href="#services" className="block hover:opacity-70 transition-opacity text-sm font-medium">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="block hover:opacity-70 transition-opacity text-sm font-medium">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Scrollable Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-20">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              {/* Main Heading */}
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black mb-4 sm:mb-6 tracking-tight leading-none text-pretty"
                style={{
                  fontFamily: 'Georgia, serif',
                }}
              >
                OCEAN CROWN
              </h1>

              {/* Subtitle */}
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <p
                  className="text-black text-sm sm:text-base md:text-lg leading-relaxed font-normal text-pretty"
                  style={{
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  Elevating spaces with the quiet elegance of the ocean.
                </p>
                <p
                  className="text-black text-sm sm:text-base md:text-lg leading-relaxed font-normal text-pretty"
                  style={{
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  Custom aquariums designed to inspire calm, beauty, and balance.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300 shadow-md text-xs sm:text-sm w-full sm:w-auto">
                  Explore Now
                </button>
                <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-700 text-white font-medium hover:bg-gray-800 transition-all duration-300 text-xs sm:text-sm w-full sm:w-auto">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Crafting Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-blue-600 to-blue-700 text-white" id="about">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-pretty">
                Crafting Underwater Masterpieces
              </h2>
              <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-pretty">
                Discover the art and science behind creating stunning aquatic environments that bring the ocean's majesty into your home or office.
              </p>
            </div>
            <div className="text-center">
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black font-medium hover:bg-blue-50 transition-all duration-300 text-xs sm:text-sm">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section
          className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-blue-700 to-blue-800 text-white"
          id="aquariums"
        >
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            
            {/* Heading with decorative lines */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px bg-white opacity-50 flex-1 max-w-xs"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold whitespace-nowrap">
                  Featured Categories
                </h2>
                <div className="h-px bg-white opacity-50 flex-1 max-w-xs"></div>
              </div>
            </div>

            {/* Cards Grid with proper spacing and shadows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1 - Aquariums */}
              <div 
                className="relative group overflow-hidden rounded-lg" 
                style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)' }}
              >
                <Image
                  src="/grid01.png"
                  alt="Aquariums"
                  width={500}
                  height={500}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
                  <h3 className="text-lg font-semibold mb-3">Aquariums</h3>
                  <button className="bg-white text-black text-xs px-4 py-1 rounded hover:bg-gray-100 transition">
                    View More
                  </button>
                </div>
              </div>

              {/* Card 2 - Fishes & Species */}
              <div 
                className="relative group overflow-hidden rounded-lg" 
                style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)' }}
              >
                <Image
                  src="/grid02.png"
                  alt="Fishes & Species"
                  width={500}
                  height={500}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
                  <h3 className="text-lg font-semibold mb-3">Fishes & Species</h3>
                  <button className="bg-white text-black text-xs px-4 py-1 rounded hover:bg-gray-100 transition">
                    View More
                  </button>
                </div>
              </div>

              {/* Card 3 - Plants & Corals */}
              <div 
                className="relative group overflow-hidden rounded-lg" 
                style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)' }}
              >
                <Image
                  src="/grid03.png"
                  alt="Plants & Corals"
                  width={500}
                  height={500}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
                  <h3 className="text-lg font-semibold mb-3">Plants & Corals</h3>
                  <button className="bg-white text-black text-xs px-4 py-1 rounded hover:bg-gray-100 transition">
                    View More
                  </button>
                </div>
              </div>

              {/* Card 4 - Services */}
              <div 
                className="relative group overflow-hidden rounded-lg" 
                style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)' }}
              >
                <Image
                  src="/grid04.png"
                  alt="Services"
                  width={500}
                  height={500}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
                  <h3 className="text-lg font-semibold mb-3">Services</h3>
                  <button className="bg-white text-black text-xs px-4 py-1 rounded hover:bg-gray-100 transition">
                    View More
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* Why Choose Section */}
      

<section className="py-20 bg-gradient-to-b from-blue-800 to-blue-900 text-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
        Why Choose Ocean Crown ?
      </h2>
      <p className="text-blue-200 max-w-2xl mx-auto">
        Your space deserves the elegance and tranquility of a perfectly crafted underwater world.
      </p>
    </div>

    {/* 3 Column Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">

      {/* LEFT FEATURES */}
      <div className="space-y-16 text-center lg:text-right">

        <div>
          <h3 className="text-xl font-semibold mb-2">Expert Craftsmanship</h3>
          <p className="text-blue-200 text-sm">
            Every aquarium is thoughtfully designed for beauty and balance.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
          <p className="text-blue-200 text-sm">
            We use high-grade equipment and healthy aquatic species.
          </p>
        </div>

      </div>

      {/* CENTER IMAGE */}
      <div className="flex flex-col items-center">
        <div className=" p-1 shadow-2xl">
          <Image
            src="/grid05.png"
            alt="Fish"
            width={450}
            height={500}
            className="object-cover"
          />
        </div>

        <button className="mt-8 px-8 py-3 bg-white text-black font-medium hover:bg-blue-50 transition duration-300">
          Book Nigger
        </button>
      </div>

      {/* RIGHT FEATURES */}
      <div className="space-y-16 text-center lg:text-left">

        <div>
          <h3 className="text-xl font-semibold mb-2">Customized Solutions</h3>
          <p className="text-blue-200 text-sm">
            Tailor-made designs that perfectly match your space and vision.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
          <p className="text-blue-200 text-sm">
            Professional maintenance to keep your underwater world thriving.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>


        {/* Our Aquatic Creations Gallery */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-blue-900 to-blue-950 text-white" id="plants">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-pretty">
                Our Aquatic Creations
              </h2>
              <p className="text-blue-100 text-sm sm:text-base max-w-3xl mx-auto text-pretty">
                Explore some of our finest custom aquariums.
              </p>
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Top Row */}
              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="/grid1.png"
                  alt="Rocky aquascape with plants"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="/grid2.png"
                  alt="Underwater ocean reef"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Middle Row */}
              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="/grid3.png"
                  alt="Large aquarium room installation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="/grid4.png"
                  alt="Home aquarium setup"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Bottom Full Width */}
              <div className="sm:col-span-2 relative h-96 rounded-lg overflow-hidden group">
                <Image
                  src="/grid5.png"
                  alt="Detailed reef aquarium with plants and fish"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

            </div>

          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-blue-950 to-blue-900 text-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-pretty">
                What Our Clients Say?
              </h2>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  name: 'Ocean M',
                  title: 'Client',
                  text: 'Ocean Crown delivered a beautiful, perfectly balanced aquarium that brings life and serenity to our space.',
                  rating: 5
                },
                {
                  name: 'Priya M',
                  title: 'Client',
                  text: 'Exceptional quality and maintenance service. Our tank has become the centerpiece of the space.',
                  rating: 5
                },
                {
                  name: 'Rain Harrison',
                  title: 'Client',
                  text: 'From consultation to installation, the expertise was evident. Our aquarium is truly breathtaking.',
                  rating: 5
                }
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 hover:bg-white/15 transition-all duration-300"
                >
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-blue-100 text-sm sm:text-base mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Name */}
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-blue-300 text-xs sm:text-sm">{testimonial.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-blue-900 to-blue-950 text-white" id="contact">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-pretty">
                Get In Touch
              </h2>
              <p className="text-blue-100 text-sm sm:text-base max-w-3xl mx-auto text-pretty">
                Ready to transform your space with a stunning aquarium? Contact us today to discuss your custom aquarium needs.
              </p>
            </div>
            <div className="text-center">
              <button className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-black font-medium hover:bg-blue-50 transition-all duration-300 text-sm sm:text-base">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-950 text-white py-8 sm:py-12 border-t border-blue-900">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Brand */}
              <div>
                <h3 className="font-bold mb-4">Ocean Crown</h3>
                <p className="text-blue-300 text-sm">Crafting underwater masterpieces since day one.</p>
              </div>
              
              {/* Quick Links */}
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-blue-300">
                  <li><a href="#home" className="hover:text-white transition">Home</a></li>
                  <li><a href="#about" className="hover:text-white transition">About</a></li>
                  <li><a href="#aquariums" className="hover:text-white transition">Categories</a></li>
                </ul>
              </div>
              
              {/* Services */}
              <div>
                <h4 className="font-bold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-blue-300">
                  <li><a href="#" className="hover:text-white transition">Design</a></li>
                  <li><a href="#" className="hover:text-white transition">Installation</a></li>
                  <li><a href="#" className="hover:text-white transition">Maintenance</a></li>
                </ul>
              </div>
              
              {/* Contact */}
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <p className="text-sm text-blue-300">Email: info@oceancrown.com</p>
                <p className="text-sm text-blue-300">Phone: +1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="border-t border-blue-900 pt-8">
              <p className="text-center text-blue-400 text-sm">
                © 2024 Ocean Crown. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
