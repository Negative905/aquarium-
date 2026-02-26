'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Animation Variants ───────────────────────────────────────────────────────

const navbarVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const logoVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
}

const navLinksContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
}

const navLinkItem = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

const dropdownVariant = {
  hidden: { opacity: 0, y: -8, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.96,
    transition: { duration: 0.15, ease: 'easeIn' },
  },
}

const dropdownItem = {
  hidden: { opacity: 0, x: -6 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.2 },
  }),
}

const mobileMenuVariant = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
}

const mobileLinkItem = {
  hidden: { opacity: 0, x: -12 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.06, duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  }),
}

const iconButtonVariant = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.45 + i * 0.08, duration: 0.35, type: 'spring', stiffness: 260, damping: 18 },
  }),
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAquariumsOpen, setIsAquariumsOpen] = useState(false)
  const [isFishOpen, setIsFishOpen] = useState(false)
  const [isPlantsOpen, setIsPlantsOpen] = useState(false)
  const router = useRouter()

  const mobileLinks = [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ]
  const aquariumSubs = [
    { label: 'Freshwater', href: '/fresh' },
    { label: 'Saltwater', href: '/saltwater' },
    { label: 'Reef', href: '/reef' },
  ]
  const fishSubs = [
    { label: 'Freshwater Fish', href: '/fish-species' },
    { label: 'Marine Fish', href: '/marine-fish' },
    { label: 'Exotic Fish', href: '/exotic' },
  ]
  const plantsSubs = [
    { label: 'Aquatic Plants', href: '/plants' },
    { label: 'Hard Corals', href: '/hard' },
    { label: 'Soft Corals', href: '/soft' },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      variants={navbarVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full px-4 sm:px-6 bg-white/30 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo ── */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
            variants={logoVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 8 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </motion.div>
            <span className="text-black font-bold text-xs sm:text-sm md:text-base tracking-widest hidden sm:inline-block">
              OCEAN CROWN
            </span>
          </motion.div>

          {/* ── Desktop Nav Links ── */}
          <motion.ul
            className="hidden md:flex items-center gap-6 lg:gap-10 lg:text-xl text-black text-sm"
            variants={navLinksContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.li variants={navLinkItem}>
              <motion.a href="/" className="hover:opacity-70 transition-opacity font-medium" whileHover={{ y: -1 }}>
                Home
              </motion.a>
            </motion.li>

            <motion.li variants={navLinkItem}>
              <motion.a href="/about" className="hover:opacity-70 transition-opacity font-medium" whileHover={{ y: -1 }}>
                About us
              </motion.a>
            </motion.li>

            {/* Aquariums Dropdown */}
            <motion.li
              className="relative"
              variants={navLinkItem}
              onMouseEnter={() => setIsAquariumsOpen(true)}
              onMouseLeave={() => setIsAquariumsOpen(false)}
            >
              <motion.a
                href="#aquariums"
                className="hover:opacity-70 transition-opacity font-medium flex items-center gap-1"
                whileHover={{ y: -1 }}
              >
                Aquariums
                <motion.svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  animate={{ rotate: isAquariumsOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.a>

              <AnimatePresence>
                {isAquariumsOpen && (
                  <motion.div
                    className="absolute top-full left-0 bg-white shadow-lg rounded-sm z-50"
                    style={{ minWidth: '140px', paddingTop: '4px' }}
                    variants={dropdownVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="overflow-hidden rounded-sm">
                      {aquariumSubs.map(({ label, href }, i) => (
                        <motion.a
                          key={label}
                          href={href}
                          className={`block px-5 py-2.5 text-black text-sm font-normal hover:bg-gray-50 transition-colors ${i < aquariumSubs.length - 1 ? 'border-b border-gray-100' : ''}`}
                          variants={dropdownItem}
                          custom={i}
                          initial="hidden"
                          animate="visible"
                          whileHover={{ x: 3 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          {label}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>

            {/* Fish & Species Dropdown */}
            <motion.li
              className="relative"
              variants={navLinkItem}
              onMouseEnter={() => setIsFishOpen(true)}
              onMouseLeave={() => setIsFishOpen(false)}
            >
              <motion.a
                href="#fish"
                className="hover:opacity-70 transition-opacity font-medium flex items-center gap-1"
                whileHover={{ y: -1 }}
              >
                Fish & Species
                <motion.svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  animate={{ rotate: isFishOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.a>

              <AnimatePresence>
                {isFishOpen && (
                  <motion.div
                    className="absolute top-full left-0 bg-white shadow-lg rounded-sm z-50"
                    style={{ minWidth: '160px', paddingTop: '4px' }}
                    variants={dropdownVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="overflow-hidden rounded-sm">
                      {fishSubs.map(({ label, href }, i) => (
                        <motion.a
                          key={label}
                          href={href}
                          className={`block px-5 py-2.5 text-black text-sm font-normal hover:bg-gray-50 transition-colors ${i < fishSubs.length - 1 ? 'border-b border-gray-100' : ''}`}
                          variants={dropdownItem}
                          custom={i}
                          initial="hidden"
                          animate="visible"
                          whileHover={{ x: 3 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          {label}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>

            <motion.li
              className="relative"
              variants={navLinkItem}
              onMouseEnter={() => setIsPlantsOpen(true)}
              onMouseLeave={() => setIsPlantsOpen(false)}
            >
              <motion.a
                href="#plants"
                className="hover:opacity-70 transition-opacity font-medium flex items-center gap-1"
                whileHover={{ y: -1 }}
              >
                Plants & Corals
                <motion.svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  animate={{ rotate: isPlantsOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.a>

              <AnimatePresence>
                {isPlantsOpen && (
                  <motion.div
                    className="absolute top-full left-0 bg-white shadow-lg rounded-sm z-50"
                    style={{ minWidth: '160px', paddingTop: '4px' }}
                    variants={dropdownVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="overflow-hidden rounded-sm">
                      {plantsSubs.map(({ label, href }, i) => (
                        <motion.a
                          key={label}
                          href={href}
                          className={`block px-5 py-2.5 text-black text-sm font-normal hover:bg-gray-50 transition-colors ${i < plantsSubs.length - 1 ? 'border-b border-gray-100' : ''}`}
                          variants={dropdownItem}
                          custom={i}
                          initial="hidden"
                          animate="visible"
                          whileHover={{ x: 3 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          {label}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
            <motion.li variants={navLinkItem}>
              <motion.a href="/services" className="hover:opacity-70 transition-opacity font-medium" whileHover={{ y: -1 }}>
                Services
              </motion.a>
            </motion.li>
            <motion.li variants={navLinkItem}>
              <motion.a href="/contact" className="hover:opacity-70 transition-opacity font-medium" whileHover={{ y: -1 }}>
                Contact
              </motion.a>
            </motion.li>
          </motion.ul>

          {/* ── Right Section ── */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Icons */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              {[
                {
                  onClick: () => router.push('/login'),
                  icon: (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  ),
                },
                {
                  onClick: () => router.push('/cart'),
                  icon: (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
              ].map(({ onClick, icon }, i) => (
                <motion.button
                  key={i}
                  onClick={onClick}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black hover:bg-gray-800 transition-colors flex items-center justify-center text-white"
                  variants={iconButtonVariant}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden text-black p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </motion.svg>
            </motion.button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden pb-4 border-t border-black/10 overflow-hidden"
              variants={mobileMenuVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.ul className="flex flex-col gap-3 text-black mt-4">
                {mobileLinks.map(({ label, href }, i) => (
                  <motion.li key={label} variants={mobileLinkItem} custom={i} initial="hidden" animate="visible">
                    <a href={href} className="block hover:opacity-70 transition-opacity text-sm font-medium">
                      {label}
                    </a>
                  </motion.li>
                ))}

                {/* Aquariums with sub-links */}
                <motion.li variants={mobileLinkItem} custom={2} initial="hidden" animate="visible">
                  <a href="#aquariums" className="block hover:opacity-70 transition-opacity text-sm font-medium">
                    Aquariums
                  </a>
                  <ul className="ml-4 mt-2 space-y-2">
                    {aquariumSubs.map(({ label, href }, i) => (
                      <motion.li
                        key={label}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.06, duration: 0.25 }}
                      >
                        <a href={href} className="block text-sm text-gray-700 hover:opacity-70">
                          {label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.li>

                {/* Fish & Species with sub-links */}
                <motion.li variants={mobileLinkItem} custom={3} initial="hidden" animate="visible">
                  <a href="#fish" className="block hover:opacity-70 transition-opacity text-sm font-medium">
                    Fish & Species
                  </a>
                  <ul className="ml-4 mt-2 space-y-2">
                    {fishSubs.map(({ label, href }, i) => (
                      <motion.li
                        key={label}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.06, duration: 0.25 }}
                      >
                        <a href={href} className="block text-sm text-gray-700 hover:opacity-70">
                          {label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.li>
                {/* Plants & Corals with sub-links */}
                <motion.li variants={mobileLinkItem} custom={4} initial="hidden" animate="visible">
                  <a href="#plants" className="block hover:opacity-70 transition-opacity text-sm font-medium">
                    Plants & Corals
                  </a>
                  <ul className="ml-4 mt-2 space-y-2">
                    {plantsSubs.map(({ label, href }, i) => (
                      <motion.li
                        key={label}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.06, duration: 0.25 }}
                      >
                        <a href={href} className="block text-sm text-gray-700 hover:opacity-70">
                          {label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}