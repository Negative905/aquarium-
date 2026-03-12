"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getCart } from "./Cart";

const navbarVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const logoVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

const navLinksContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};

const navLinkItem = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

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
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const dropdownItem = {
  hidden: { opacity: 0, x: -6 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.2 },
  }),
};

const mobileMenuVariant = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const iconButtonVariant = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.45 + i * 0.08,
      duration: 0.35,
      type: "spring",
      stiffness: 260,
      damping: 18,
    },
  }),
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAquariumsOpen, setIsAquariumsOpen] = useState(false);
  const [isFishOpen, setIsFishOpen] = useState(false);
  const [isPlantsOpen, setIsPlantsOpen] = useState(false);
  const [mobileAquariumsOpen, setMobileAquariumsOpen] = useState(false);
  const [mobileFishOpen, setMobileFishOpen] = useState(false);
  const [mobilePlantsOpen, setMobilePlantsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ new
  const router = useRouter();

  // Sync cart count
  useEffect(() => {
    const updateCount = () => {
      const cart = getCart();
      const total = cart.reduce((sum, item) => sum + item.qty, 0);
      setCartCount(total);
    };
    updateCount();
    window.addEventListener("cart-updated", updateCount);
    return () => window.removeEventListener("cart-updated", updateCount);
  }, []);

  // Check if user is logged in
  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  const aquariumSubs = [
    { label: "Freshwater", href: "/fresh" },
    { label: "Saltwater", href: "/saltwater" },
    { label: "Reef", href: "/reef" },
  ];
  const fishSubs = [
    { label: "Freshwater Fish", href: "/fish-species" },
    { label: "Marine Fish", href: "/marine-fish" },
    { label: "Exotic Fish", href: "/exotic" },
  ];
  const plantsSubs = [
    { label: "Aquatic Plants", href: "/plants" },
    { label: "Hard Corals", href: "/hard" },
    { label: "Soft Corals", href: "/soft" },
  ];

  const DropdownArrow = ({ isOpen }) => (
    <motion.svg
      className="w-3 h-3 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.25 }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </motion.svg>
  );

  const CartIcon = ({ size = "sm:w-5 sm:h-5", base = "w-4 h-4" }) => (
    <div className="relative">
      <svg
        className={`${base} ${size}`}
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
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.span
            key={cartCount}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="absolute -top-2 -right-2 bg-red-400 text-black text-[10px] font-bold rounded-full min-w-[16px] h-4 flex items-center justify-center px-0.5 leading-none"
          >
            {cartCount > 99 ? "99+" : cartCount}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );

  const ProfileSVG = ({ size = "w-4 h-4 sm:w-5 sm:h-5" }) => (
    <svg className={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30"
      variants={navbarVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
            variants={logoVariant}
            initial="hidden"
            animate="visible"
            onClick={() => router.push("/")}
          >
            <motion.div
              className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: 8 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </motion.div>
            <span className="text-black font-bold text-sm tracking-widest hidden sm:inline-block">
              OCEAN CROWN
            </span>
          </motion.div>

          {/* Desktop Nav Links */}
          <motion.ul
            className="hidden lg:flex items-center gap-6 xl:gap-8 text-black text-sm"
            variants={navLinksContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.li variants={navLinkItem}>
              <motion.a
                href="/"
                className="hover:opacity-70 transition-opacity font-medium whitespace-nowrap"
                whileHover={{ y: -1 }}
              >
                Home
              </motion.a>
            </motion.li>
            <motion.li variants={navLinkItem}>
              <motion.a
                href="/about"
                className="hover:opacity-70 transition-opacity font-medium whitespace-nowrap"
                whileHover={{ y: -1 }}
              >
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
                className="hover:opacity-70 transition-opacity font-medium flex items-center gap-1 whitespace-nowrap"
                whileHover={{ y: -1 }}
              >
                Aquariums <DropdownArrow isOpen={isAquariumsOpen} />
              </motion.a>
              <AnimatePresence>
                {isAquariumsOpen && (
                  <motion.div
                    className="absolute top-full left-0 bg-white shadow-lg rounded-sm z-50 mt-1"
                    style={{ minWidth: "140px" }}
                    variants={dropdownVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {aquariumSubs.map(({ label, href }, i) => (
                      <motion.a
                        key={label}
                        href={href}
                        className={`block px-5 py-2.5 text-black text-sm font-normal hover:bg-gray-50 transition-colors ${i < aquariumSubs.length - 1 ? "border-b border-gray-100" : ""}`}
                        variants={dropdownItem}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {label}
                      </motion.a>
                    ))}
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
                className="hover:opacity-70 transition-opacity font-medium flex items-center gap-1 whitespace-nowrap"
                whileHover={{ y: -1 }}
              >
                Fish & Species <DropdownArrow isOpen={isFishOpen} />
              </motion.a>
              <AnimatePresence>
                {isFishOpen && (
                  <motion.div
                    className="absolute top-full left-0 bg-white shadow-lg rounded-sm z-50 mt-1"
                    style={{ minWidth: "160px" }}
                    variants={dropdownVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {fishSubs.map(({ label, href }, i) => (
                      <motion.a
                        key={label}
                        href={href}
                        className={`block px-5 py-2.5 text-black text-sm font-normal hover:bg-gray-50 transition-colors ${i < fishSubs.length - 1 ? "border-b border-gray-100" : ""}`}
                        variants={dropdownItem}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {label}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>

            {/* Plants & Corals Dropdown */}
            <motion.li
              className="relative"
              variants={navLinkItem}
              onMouseEnter={() => setIsPlantsOpen(true)}
              onMouseLeave={() => setIsPlantsOpen(false)}
            >
              <motion.a
                href="#plants"
                className="hover:opacity-70 transition-opacity font-medium flex items-center gap-1 whitespace-nowrap"
                whileHover={{ y: -1 }}
              >
                Plants & Corals <DropdownArrow isOpen={isPlantsOpen} />
              </motion.a>
              <AnimatePresence>
                {isPlantsOpen && (
                  <motion.div
                    className="absolute top-full left-0 bg-white shadow-lg rounded-sm z-50 mt-1"
                    style={{ minWidth: "160px" }}
                    variants={dropdownVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {plantsSubs.map(({ label, href }, i) => (
                      <motion.a
                        key={label}
                        href={href}
                        className={`block px-5 py-2.5 text-black text-sm font-normal hover:bg-gray-50 transition-colors ${i < plantsSubs.length - 1 ? "border-b border-gray-100" : ""}`}
                        variants={dropdownItem}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {label}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>

            <motion.li variants={navLinkItem}>
              <motion.a
                href="/services"
                className="hover:opacity-70 transition-opacity font-medium whitespace-nowrap"
                whileHover={{ y: -1 }}
              >
                Services
              </motion.a>
            </motion.li>
            <motion.li variants={navLinkItem}>
              <motion.a
                href="/contact"
                className="hover:opacity-70 transition-opacity font-medium whitespace-nowrap"
                whileHover={{ y: -1 }}
              >
                Contact
              </motion.a>
            </motion.li>
          </motion.ul>

          {/* Right Icons */}
          <div className="flex items-center gap-2">
            {/* Desktop Icons */}
            <div className="hidden lg:flex items-center gap-2">
              {/* ✅ Desktop profile/logout button */}
              {isLoggedIn ? (
                <motion.button
                  onClick={handleLogout}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-green-600 hover:bg-red-600 transition-colors flex items-center justify-center text-white"
                  variants={iconButtonVariant}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Logout"
                >
                  <ProfileSVG />
                </motion.button>
              ) : (
                <motion.button
                  onClick={() => router.push("/login")}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black hover:bg-gray-800 transition-colors flex items-center justify-center text-white"
                  variants={iconButtonVariant}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Login"
                >
                  <ProfileSVG />
                </motion.button>
              )}

              {/* Cart button */}
              <motion.button
                onClick={() => router.push("/cart")}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black hover:bg-gray-800 transition-colors flex items-center justify-center text-white relative"
                variants={iconButtonVariant}
                initial="hidden"
                animate="visible"
                custom={1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <CartIcon />
              </motion.button>
            </div>

            {/* Mobile Icons */}
            <div className="flex lg:hidden items-center gap-1.5">
              {/* ✅ Mobile profile/logout button */}
              {isLoggedIn ? (
                <motion.button
                  onClick={handleLogout}
                  className="w-8 h-8 rounded-full bg-green-600 hover:bg-red-600 transition-colors flex items-center justify-center text-white"
                  whileTap={{ scale: 0.9 }}
                  title="Logout"
                >
                  <ProfileSVG size="w-4 h-4" />
                </motion.button>
              ) : (
                <motion.button
                  onClick={() => router.push("/login")}
                  className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white"
                  whileTap={{ scale: 0.9 }}
                  title="Login"
                >
                  <ProfileSVG size="w-4 h-4" />
                </motion.button>
              )}

              {/* Mobile cart */}
              <motion.button
                onClick={() => router.push("/cart")}
                className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white relative"
                whileTap={{ scale: 0.9 }}
              >
                <CartIcon base="w-4 h-4" size="" />
              </motion.button>
            </div>

            {/* Hamburger */}
            <motion.button
              className="lg:hidden text-black p-1 ml-1"
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
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </motion.svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden pb-5 border-t border-black/10 overflow-hidden"
              variants={mobileMenuVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="flex flex-col mt-3 text-black text-sm divide-y divide-black/5">
                {[
                  { label: "Home", href: "/" },
                  { label: "About us", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Contact", href: "/contact" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="block py-3 font-medium hover:opacity-70 transition-opacity"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label}
                    </a>
                  </li>
                ))}

                {/* Aquariums accordion */}
                <li>
                  <button
                    className="w-full flex items-center justify-between py-3 font-medium hover:opacity-70 transition-opacity"
                    onClick={() => setMobileAquariumsOpen(!mobileAquariumsOpen)}
                  >
                    Aquariums
                    <motion.svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      animate={{ rotate: mobileAquariumsOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {mobileAquariumsOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pl-4 pb-2 space-y-2"
                      >
                        {aquariumSubs.map(({ label, href }) => (
                          <li key={label}>
                            <a
                              href={href}
                              className="block text-sm text-gray-700 hover:opacity-70 py-1"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {label}
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                {/* Fish accordion */}
                <li>
                  <button
                    className="w-full flex items-center justify-between py-3 font-medium hover:opacity-70 transition-opacity"
                    onClick={() => setMobileFishOpen(!mobileFishOpen)}
                  >
                    Fish & Species
                    <motion.svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      animate={{ rotate: mobileFishOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {mobileFishOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pl-4 pb-2 space-y-2"
                      >
                        {fishSubs.map(({ label, href }) => (
                          <li key={label}>
                            <a
                              href={href}
                              className="block text-sm text-gray-700 hover:opacity-70 py-1"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {label}
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                {/* Plants accordion */}
                <li>
                  <button
                    className="w-full flex items-center justify-between py-3 font-medium hover:opacity-70 transition-opacity"
                    onClick={() => setMobilePlantsOpen(!mobilePlantsOpen)}
                  >
                    Plants & Corals
                    <motion.svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      animate={{ rotate: mobilePlantsOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {mobilePlantsOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pl-4 pb-2 space-y-2"
                      >
                        {plantsSubs.map(({ label, href }) => (
                          <li key={label}>
                            <a
                              href={href}
                              className="block text-sm text-gray-700 hover:opacity-70 py-1"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {label}
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
