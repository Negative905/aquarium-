"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CiLogout } from "react-icons/ci";
import { getCart } from "./Cart";

const navbarVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const logoVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 } },
};
const navLinksContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};
const navLinkItem = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};
const dropdownVariant = {
  hidden: { opacity: 0, y: -8, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -6, scale: 0.96, transition: { duration: 0.15, ease: "easeIn" } },
};
const dropdownItem = {
  hidden: { opacity: 0, x: -6 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.05, duration: 0.2 } }),
};
const profileDropdownVariant = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, scale: 0.95, transition: { duration: 0.18, ease: "easeIn" } },
};
const profileItemVariant = {
  hidden: { opacity: 0, x: -8 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.045, duration: 0.2, ease: [0.22, 1, 0.36, 1] } }),
};
const mobileMenuVariant = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.25, ease: "easeIn" } },
};
const iconButtonVariant = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i) => ({
    opacity: 1, scale: 1,
    transition: { delay: 0.45 + i * 0.08, duration: 0.35, type: "spring", stiffness: 260, damping: 18 },
  }),
};

const UserSilhouette = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
  </svg>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAquariumsOpen, setIsAquariumsOpen] = useState(false);
  const [isFishOpen, setIsFishOpen] = useState(false);
  const [isPlantsOpen, setIsPlantsOpen] = useState(false);
  const [mobileAquariumsOpen, setMobileAquariumsOpen] = useState(false);
  const [mobileFishOpen, setMobileFishOpen] = useState(false);
  const [mobilePlantsOpen, setMobilePlantsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });
  const profileRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const updateCount = () => {
      const token = localStorage.getItem("token") || sessionStorage.getItem("token");
      if (!token) {
        setCartCount(0);
        return;
      }
      const cart = getCart();
      const total = cart.reduce((sum, item) => sum + item.qty, 0);
      setCartCount(total);
    };
    updateCount();
    window.addEventListener("cart-updated", updateCount);
    window.addEventListener("auth-updated", updateCount);
    return () => {
      window.removeEventListener("cart-updated", updateCount);
      window.removeEventListener("auth-updated", updateCount);
    };
  }, []);

  const loadAuth = () => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    setIsLoggedIn(!!token);
    if (token) {
      const name = localStorage.getItem("userName") || sessionStorage.getItem("userName") || "";
      const email = localStorage.getItem("userEmail") || sessionStorage.getItem("userEmail") || "";
      setUser({ name, email });
    } else {
      setUser({ name: "", email: "" });
    }
  };

  useEffect(() => {
    loadAuth();
    window.addEventListener("auth-updated", loadAuth);
    return () => window.removeEventListener("auth-updated", loadAuth);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setIsProfileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("ocean_crown_cart"); // ✅ clears actual cart data
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setIsProfileOpen(false);
    setIsMenuOpen(false);
    setCartCount(0);
    setUser({ name: "", email: "" });
    window.dispatchEvent(new Event("auth-updated"));
    window.location.href = "/login";
  }, []);

  const getInitials = (name) => {
    if (!name) return null;
    return name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
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
  const profileMenuItems = [
    { icon: "👤", label: "My Profile", href: "/profile" },
    { icon: "📦", label: "My Orders", href: "/orders" },
    { icon: "🛒", label: "My Cart", href: "/cart" },
    { icon: "❤️", label: "Wishlist", href: "/wishlist" },
    { icon: "📊", label: "Dashboard", href: "/dashboard" },
  ];

  const DropdownArrow = ({ isOpen }) => (
    <motion.svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor"
      viewBox="0 0 24 24" strokeWidth={2.5}
      animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </motion.svg>
  );

  const CartIcon = ({ size = "sm:w-5 sm:h-5", base = "w-4 h-4" }) => (
    <div className="relative">
      <svg className={`${base} ${size}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <AnimatePresence>
        {isLoggedIn && cartCount > 0 && (
          <motion.span key={cartCount} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="absolute -top-2 -right-2 bg-red-400 text-black text-[10px] font-bold rounded-full min-w-[16px] h-4 flex items-center justify-center px-0.5 leading-none">
            {cartCount > 99 ? "99+" : cartCount}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );

  const ProfileSVG = ({ size = "w-4 h-4" }) => (
    <svg className={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );

  const ProfileButton = ({ isMobile = false }) => {
    const btnSize = isMobile ? "w-8 h-8" : "w-9 h-9";
    const initials = getInitials(user.name);

    if (!isLoggedIn) {
      return (
        <motion.button
          onClick={() => router.push("/login")}
          className={`${btnSize} rounded-full bg-black hover:bg-gray-800 transition-colors flex items-center justify-center text-white flex-shrink-0`}
          variants={isMobile ? undefined : iconButtonVariant}
          initial={isMobile ? undefined : "hidden"}
          animate={isMobile ? undefined : "visible"}
          custom={0}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Login"
        >
          <ProfileSVG size="w-4 h-4" />
        </motion.button>
      );
    }

    return (
      <div className="relative flex-shrink-0" ref={profileRef}>
        <motion.button
          onClick={() => setIsProfileOpen((v) => !v)}
          className={`${btnSize} rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold text-xs shadow-md flex-shrink-0`}
          variants={isMobile ? undefined : iconButtonVariant}
          initial={isMobile ? undefined : "hidden"}
          animate={isMobile ? undefined : "visible"}
          custom={0}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Profile"
        >
          {initials ?? <UserSilhouette className="w-4 h-4" />}
        </motion.button>

        <AnimatePresence>
          {isProfileOpen && (
            <motion.div
              className="absolute right-0 top-full mt-3 w-[calc(100vw-2rem)] sm:w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[999]"
              style={{ maxWidth: "224px", minWidth: "180px" }}
              variants={profileDropdownVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* User header */}
              <motion.div
                className="flex items-center gap-3 px-4 py-3.5 bg-gradient-to-r from-blue-50 to-teal-50 border-b border-gray-100"
                variants={profileItemVariant} custom={0} initial="hidden" animate="visible"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow">
                  {initials ?? <UserSilhouette className="w-5 h-5" />}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-gray-800 truncate leading-tight">{user.name || "User"}</p>
                  <p className="text-xs text-gray-500 truncate leading-tight">{user.email}</p>
                </div>
              </motion.div>

              {/* Menu items */}
              <div className="py-1.5">
                {profileMenuItems.map(({ icon, label, href }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    onClick={() => setIsProfileOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                    variants={profileItemVariant} custom={i + 1} initial="hidden" animate="visible"
                    whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-base w-5 text-center flex-shrink-0">{icon}</span>
                    <span className="truncate">{label}</span>
                  </motion.a>
                ))}
              </div>

              {/* Logout */}
              <div className="border-t border-gray-100 py-1.5">
                <motion.button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
                  variants={profileItemVariant} custom={profileMenuItems.length + 1}
                  initial="hidden" animate="visible"
                  whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-base w-5 text-center flex-shrink-0"><CiLogout /></span>
                  <span>Logout</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30"
      variants={navbarVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">

          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 flex-shrink-0 cursor-pointer min-w-0"
            variants={logoVariant} initial="hidden" animate="visible"
            onClick={() => router.push("/")}
          >
            <motion.div
              className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: 8 }} whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <svg viewBox="0 0 50 50" className="w-5 h-5" fill="none">
                <ellipse cx="25" cy="25" rx="16" ry="11" stroke="white" strokeWidth="1.8" fill="none" />
                <path d="M13 22 Q19 17 25 22 Q31 27 37 22" stroke="white" strokeWidth="1.4" fill="none" />
                <circle cx="33" cy="21" r="1.8" fill="white" />
              </svg>
            </motion.div>
            <span className="text-black font-bold text-xs sm:text-sm tracking-widest hidden sm:inline-block truncate">
              OCEAN CROWN
            </span>
          </motion.div>

          {/* Desktop Nav Links */}
          <motion.ul
            className="hidden lg:flex items-center gap-5 xl:gap-8 text-black text-sm flex-shrink-0"
            variants={navLinksContainer} initial="hidden" animate="visible"
          >
            <motion.li variants={navLinkItem}>
              <motion.a href="/" className="hover:opacity-70 transition-opacity font-medium whitespace-nowrap" whileHover={{ y: -1 }}>Home</motion.a>
            </motion.li>
            <motion.li variants={navLinkItem}>
              <motion.a href="/about" className="hover:opacity-70 transition-opacity font-medium whitespace-nowrap" whileHover={{ y: -1 }}>About us</motion.a>
            </motion.li>

            {/* Aquariums */}
            <motion.li className="relative" variants={navLinkItem}
              onMouseEnter={() => setIsAquariumsOpen(true)} onMouseLeave={() => setIsAquariumsOpen(false)}>
              <motion.a href="#aquariums" className="hover:opacity-70 transition-opacity font-medium flex items-center gap-1 whitespace-nowrap" whileHover={{ y: -1 }}>
                Aquariums <DropdownArrow isOpen={isAquariumsOpen} />
              </motion.a>
              <AnimatePresence>
                {isAquariumsOpen && (
                  <motion.div className="absolute top-full left-0 bg-white shadow-lg rounded-sm z-50 mt-1" style={{ minWidth: "140px" }}
                    variants={dropdownVariant} initial="hidden" animate="visible" exit="exit">
                    {aquariumSubs.map(({ label, href }, i) => (
                      <motion.a key={label} href={href}
                        className={`block px-5 py-2.5 text-black text-sm font-normal hover:bg-gray-50 transition-colors ${i < aquariumSubs.length - 1 ? "border-b border-gray-100" : ""}`}
                        variants={dropdownItem} custom={i} initial="hidden" animate="visible"
                        whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 300 }}>
                        {label}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>

            {/* Fish & Species */}
            <motion.li className="relative" variants={navLinkItem}
              onMouseEnter={() => setIsFishOpen(true)} onMouseLeave={() => setIsFishOpen(false)}>
              <motion.a href="#fish" className="hover:opacity-70 transition-opacity font-medium flex items-center gap-1 whitespace-nowrap" whileHover={{ y: -1 }}>
                Fish & Species <DropdownArrow isOpen={isFishOpen} />
              </motion.a>
              <AnimatePresence>
                {isFishOpen && (
                  <motion.div className="absolute top-full left-0 bg-white shadow-lg rounded-sm z-50 mt-1" style={{ minWidth: "160px" }}
                    variants={dropdownVariant} initial="hidden" animate="visible" exit="exit">
                    {fishSubs.map(({ label, href }, i) => (
                      <motion.a key={label} href={href}
                        className={`block px-5 py-2.5 text-black text-sm font-normal hover:bg-gray-50 transition-colors ${i < fishSubs.length - 1 ? "border-b border-gray-100" : ""}`}
                        variants={dropdownItem} custom={i} initial="hidden" animate="visible"
                        whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 300 }}>
                        {label}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>

            {/* Plants & Corals */}
            <motion.li className="relative" variants={navLinkItem}
              onMouseEnter={() => setIsPlantsOpen(true)} onMouseLeave={() => setIsPlantsOpen(false)}>
              <motion.a href="#plants" className="hover:opacity-70 transition-opacity font-medium flex items-center gap-1 whitespace-nowrap" whileHover={{ y: -1 }}>
                Plants & Corals <DropdownArrow isOpen={isPlantsOpen} />
              </motion.a>
              <AnimatePresence>
                {isPlantsOpen && (
                  <motion.div className="absolute top-full left-0 bg-white shadow-lg rounded-sm z-50 mt-1" style={{ minWidth: "160px" }}
                    variants={dropdownVariant} initial="hidden" animate="visible" exit="exit">
                    {plantsSubs.map(({ label, href }, i) => (
                      <motion.a key={label} href={href}
                        className={`block px-5 py-2.5 text-black text-sm font-normal hover:bg-gray-50 transition-colors ${i < plantsSubs.length - 1 ? "border-b border-gray-100" : ""}`}
                        variants={dropdownItem} custom={i} initial="hidden" animate="visible"
                        whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 300 }}>
                        {label}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>

            <motion.li variants={navLinkItem}>
              <motion.a href="/services" className="hover:opacity-70 transition-opacity font-medium whitespace-nowrap" whileHover={{ y: -1 }}>Services</motion.a>
            </motion.li>
            <motion.li variants={navLinkItem}>
              <motion.a href="/contact" className="hover:opacity-70 transition-opacity font-medium whitespace-nowrap" whileHover={{ y: -1 }}>Contact</motion.a>
            </motion.li>
          </motion.ul>

          {/* Right Icons */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <div className="hidden lg:flex items-center gap-2">
              {ProfileButton({ isMobile: false })}
              <motion.button onClick={() => router.push("/cart")}
                className="w-9 h-9 rounded-full bg-black hover:bg-gray-800 transition-colors flex items-center justify-center text-white relative flex-shrink-0"
                variants={iconButtonVariant} initial="hidden" animate="visible" custom={1}
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <CartIcon />
              </motion.button>
            </div>

            <div className="flex lg:hidden items-center gap-1.5">
              {ProfileButton({ isMobile: true })}
              <motion.button onClick={() => router.push("/cart")}
                className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white relative flex-shrink-0"
                whileTap={{ scale: 0.9 }}>
                <CartIcon base="w-4 h-4" size="" />
              </motion.button>
            </div>

            <motion.button
              className="lg:hidden text-black p-1 ml-0.5 flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              aria-label="Toggle menu"
            >
              <motion.svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                animate={{ rotate: isMenuOpen ? 90 : 0 }} transition={{ duration: 0.25 }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </motion.svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden pb-5 border-t border-black/10 overflow-hidden max-h-[80vh] overflow-y-auto"
              variants={mobileMenuVariant} initial="hidden" animate="visible" exit="exit"
            >
              <ul className="flex flex-col mt-3 text-black text-sm divide-y divide-black/5">
                {[
                  { label: "Home", href: "/" },
                  { label: "About us", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Contact", href: "/contact" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="block py-3 font-medium hover:opacity-70 transition-opacity"
                      onClick={() => setIsMenuOpen(false)}>{label}</a>
                  </li>
                ))}

                {/* Aquariums accordion */}
                <li>
                  <button className="w-full flex items-center justify-between py-3 font-medium hover:opacity-70"
                    onClick={() => setMobileAquariumsOpen(!mobileAquariumsOpen)}>
                    Aquariums
                    <motion.svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}
                      animate={{ rotate: mobileAquariumsOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {mobileAquariumsOpen && (
                      <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
                        className="overflow-hidden pl-4 pb-2 space-y-1">
                        {aquariumSubs.map(({ label, href }) => (
                          <li key={label}>
                            <a href={href} className="block text-sm text-gray-600 hover:text-black hover:opacity-70 py-1.5"
                              onClick={() => setIsMenuOpen(false)}>{label}</a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                {/* Fish accordion */}
                <li>
                  <button className="w-full flex items-center justify-between py-3 font-medium hover:opacity-70"
                    onClick={() => setMobileFishOpen(!mobileFishOpen)}>
                    Fish & Species
                    <motion.svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}
                      animate={{ rotate: mobileFishOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {mobileFishOpen && (
                      <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
                        className="overflow-hidden pl-4 pb-2 space-y-1">
                        {fishSubs.map(({ label, href }) => (
                          <li key={label}>
                            <a href={href} className="block text-sm text-gray-600 hover:text-black hover:opacity-70 py-1.5"
                              onClick={() => setIsMenuOpen(false)}>{label}</a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                {/* Plants accordion */}
                <li>
                  <button className="w-full flex items-center justify-between py-3 font-medium hover:opacity-70"
                    onClick={() => setMobilePlantsOpen(!mobilePlantsOpen)}>
                    Plants & Corals
                    <motion.svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}
                      animate={{ rotate: mobilePlantsOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {mobilePlantsOpen && (
                      <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
                        className="overflow-hidden pl-4 pb-2 space-y-1">
                        {plantsSubs.map(({ label, href }) => (
                          <li key={label}>
                            <a href={href} className="block text-sm text-gray-600 hover:text-black hover:opacity-70 py-1.5"
                              onClick={() => setIsMenuOpen(false)}>{label}</a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                {/* Mobile profile section */}
                {isLoggedIn ? (
                  <li className="pt-3">
                    <div className="flex items-center gap-3 pb-3 border-b border-black/5">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        {getInitials(user.name) ?? <UserSilhouette className="w-4 h-4" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-gray-800 truncate leading-tight">{user.name || "User"}</p>
                        <p className="text-xs text-gray-500 truncate leading-tight">{user.email}</p>
                      </div>
                    </div>
                    <div className="pt-2 space-y-0.5">
                      {profileMenuItems.map(({ icon, label, href }) => (
                        <a key={label} href={href}
                          className="flex items-center gap-3 py-2.5 text-sm text-gray-700 hover:opacity-70 transition-opacity"
                          onClick={() => setIsMenuOpen(false)}>
                          <span className="w-5 text-center flex-shrink-0">{icon}</span>
                          <span className="truncate">{label}</span>
                        </a>
                      ))}
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 py-2.5 text-sm text-red-500 hover:opacity-70 w-full transition-opacity"
                      >
                        <CiLogout className="text-base w-5 flex-shrink-0" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </li>
                ) : (
                  <li className="pt-3">
                    <a href="/login" className="flex items-center gap-2 py-2.5 text-sm font-medium text-black hover:opacity-70 transition-opacity">
                      <span>🔑</span><span>Login</span>
                    </a>
                  </li>
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}