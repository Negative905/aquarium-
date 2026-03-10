"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getCart, removeFromCart, updateQty } from "../../components/Cart";

const DISCOUNT_RATE = 0.2;
const DELIVERY_FEE = 150;

const PROMO_CODES = {
  "OCEAN10": { discount: 0.10, label: "10% off", description: "Welcome offer" },
  "AQUA20":  { discount: 0.20, label: "20% off", description: "Aqua lovers deal" },
  "CROWN15": { discount: 0.15, label: "15% off", description: "Crown member discount" },
  "FISH5":   { discount: 0.05, label: "5% off",  description: "First order bonus" },
};

// ── Animation variants ──────────────────────────────────────────────────────

const pageVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.12 } },
};

const headingVariant = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const columnVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: {
    opacity: 0, x: 60, height: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const summaryRowVariant = {
  hidden: { opacity: 0, x: 16 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.07, duration: 0.35, ease: "easeOut" },
  }),
};

const promoVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 8 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, scale: 0.95, y: -8, transition: { duration: 0.2 } },
};

const emptyVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const badgeVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 400, damping: 20 } },
  exit: { opacity: 0, scale: 0 },
};

// ───────────────────────────────────────────────────────────────────────────

export default function CartPage() {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [promo, setPromo] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState("");
  const [promoSuccess, setPromoSuccess] = useState("");

  useEffect(() => {
    setItems(getCart());
    const handleCartUpdate = () => setItems(getCart());
    window.addEventListener("cart-updated", handleCartUpdate);
    return () => window.removeEventListener("cart-updated", handleCartUpdate);
  }, []);

  const handleRemove = (id, source) => {
    const updated = removeFromCart(id, source);
    setItems(updated);
  };

  const handleUpdateQty = (id, source, delta) => {
    const updated = updateQty(id, source, delta);
    setItems(updated);
  };

  const handleApplyPromo = () => {
    const code = promo.trim().toUpperCase();
    if (!code) { setPromoError("Please enter a promo code."); setPromoSuccess(""); return; }
    if (PROMO_CODES[code]) {
      setAppliedPromo({ code, ...PROMO_CODES[code] });
      setPromoError("");
      setPromoSuccess(`"${code}" applied — ${PROMO_CODES[code].label} extra discount!`);
    } else {
      setAppliedPromo(null);
      setPromoError("Invalid promo code. Please try again.");
      setPromoSuccess("");
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null); setPromo(""); setPromoError(""); setPromoSuccess("");
  };

  const subtotal      = items.reduce((sum, i) => sum + i.numericPrice * i.qty, 0);
  const discount      = Math.round(subtotal * DISCOUNT_RATE);
  const afterDiscount = subtotal - discount;
  const promoDiscount = appliedPromo ? Math.round(afterDiscount * appliedPromo.discount) : 0;
  const total         = afterDiscount - promoDiscount + (items.length > 0 ? DELIVERY_FEE : 0);

  const fmt = (n) => `₹${n.toLocaleString("en-IN")}`;

  const summaryRows = [
    { label: "Sub Total",      value: fmt(subtotal),      color: "text-white" },
    { label: "Discount (20%)", value: `-${fmt(discount)}`, color: "text-green-400" },
    ...(appliedPromo ? [{ label: `Promo (${appliedPromo.code})`, value: `-${fmt(promoDiscount)}`, color: "text-green-400" }] : []),
    { label: "Delivery Fee",   value: fmt(DELIVERY_FEE),  color: "text-white" },
  ];

  return (
    <motion.div
      className="min-h-screen bg-[linear-gradient(180.8deg,#065EB6_0.68%,#000C18_99.32%)] flex items-center justify-center p-6 font-sans"
      variants={pageVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full max-w-4xl mt-24">
        <motion.h1
          className="text-4xl font-bold text-white mb-6"
          variants={headingVariant}
        >
          Your Cart
        </motion.h1>

        <AnimatePresence mode="wait">
          {items.length === 0 ? (
            <motion.div
              key="empty"
              className="text-center py-24"
              variants={emptyVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* Animated cart icon */}
              <motion.div
                className="flex justify-center mb-6"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-20 h-20 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </motion.div>
              <p className="text-white/60 text-lg mb-2">Your cart is empty.</p>
              <p className="text-blue-300 text-sm">Browse our aquariums, fish, plants & corals to add items!</p>

              <motion.button
                onClick={() => router.push('/#aquariums')}
                className="mt-8 px-6 py-2.5 bg-white/15 border border-white/20 text-white text-sm rounded hover:bg-white/25 transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Continue Shopping →
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="cart"
              className="flex flex-col lg:flex-row gap-6"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              {/* ── Cart Items ── */}
              <motion.div
                className="flex-1 bg-white/15 border border-white/20 flex flex-col overflow-hidden"
                variants={columnVariant}
              >
                <AnimatePresence initial={false}>
                  {items.map((item, index) => (
                    <motion.div
                      key={`${item.id}-${item.source}`}
                      variants={itemVariant}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      layout
                    >
                      <div className="p-5 flex items-center gap-5">
                        {/* Product image with hover zoom */}
                        <motion.img
                          src={item.image}
                          alt={item.name}
                          className="w-28 h-24 rounded-lg object-cover flex-shrink-0 bg-[#0a2a4a]"
                          onError={(e) => { e.target.style.display = 'none' }}
                          whileHover={{ scale: 1.06 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />

                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <h3 className="text-white font-semibold text-base leading-snug">{item.name}</h3>

                            {/* Delete button */}
                            <motion.button
                              onClick={() => handleRemove(item.id, item.source)}
                              className="text-white/50 hover:text-red-400 ml-2 flex-shrink-0 mt-0.5 transition-colors"
                              whileHover={{ scale: 1.15, rotate: 8 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6l-1 14H6L5 6" />
                                <path d="M10 11v6M14 11v6" />
                                <path d="M9 6V4h6v2" />
                              </svg>
                            </motion.button>
                          </div>

                          <p className="text-white/70 text-sm mt-1"><span className="font-medium">Size:</span> {item.size}</p>
                          <p className="text-white/70 text-sm mt-1"><span className="font-medium">Color:</span> {item.color}</p>

                          <div className="flex justify-between items-center mt-3">
                            <motion.span
                              key={item.numericPrice * item.qty}
                              className="text-white font-bold text-base"
                              initial={{ scale: 1.15, color: "#67e8f9" }}
                              animate={{ scale: 1, color: "#ffffff" }}
                              transition={{ duration: 0.3 }}
                            >
                              {fmt(item.numericPrice)}
                            </motion.span>

                            {/* Qty controls */}
                            <div className="flex items-center gap-4 text-white text-base">
                              <motion.button
                                onClick={() => handleUpdateQty(item.id, item.source, -1)}
                                className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors leading-none text-lg"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.85 }}
                              >
                                -
                              </motion.button>

                              <AnimatePresence mode="wait">
                                <motion.span
                                  key={item.qty}
                                  initial={{ opacity: 0, y: -6 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 6 }}
                                  transition={{ duration: 0.18 }}
                                  className="w-4 text-center"
                                >
                                  {item.qty}
                                </motion.span>
                              </AnimatePresence>

                              <motion.button
                                onClick={() => handleUpdateQty(item.id, item.source, 1)}
                                className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors leading-none text-lg"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.85 }}
                              >
                                +
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {index < items.length - 1 && (
                        <div className="px-5"><div className="border-t border-white/20" /></div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* ── Order Summary ── */}
              <motion.div
                className="w-full lg:w-80 bg-white/15 border border-white/20 p-6 flex flex-col gap-3 h-fit"
                variants={columnVariant}
              >
                <h2 className="text-white font-bold text-base">Order Summary</h2>

                <div className="flex flex-col gap-2.5 text-sm">
                  {summaryRows.map(({ label, value, color }, i) => (
                    <motion.div
                      key={label}
                      className="flex justify-between"
                      custom={i}
                      variants={summaryRowVariant}
                      initial="hidden"
                      animate="visible"
                    >
                      <span className="text-white/70">{label}</span>
                      <motion.span
                        key={value}
                        className={`font-semibold ${color}`}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        {value}
                      </motion.span>
                    </motion.div>
                  ))}

                  <div className="border-t border-white/20 pt-2.5 flex justify-between font-bold text-white text-sm">
                    <span>Total</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={total}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        transition={{ duration: 0.25, type: "spring", stiffness: 300 }}
                      >
                        {fmt(total)}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Promo code */}
                <AnimatePresence mode="wait">
                  {!appliedPromo ? (
                    <motion.div
                      key="promo-input"
                      variants={promoVariant}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="flex flex-col gap-1"
                    >
                      <div className="flex gap-0 border border-white/20 rounded overflow-hidden">
                        <input
                          type="text"
                          value={promo}
                          onChange={(e) => { setPromo(e.target.value); setPromoError(""); }}
                          onKeyDown={(e) => e.key === "Enter" && handleApplyPromo()}
                          placeholder="Add promo code"
                          className="flex-1 px-3 py-2 text-sm outline-none bg-transparent text-white placeholder-white/40"
                        />
                        <motion.button
                          onClick={handleApplyPromo}
                          className="bg-white text-gray-800 px-3 py-2 text-sm font-medium hover:bg-gray-100 transition-colors whitespace-nowrap"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          Apply
                        </motion.button>
                      </div>

                      <AnimatePresence>
                        {promoError && (
                          <motion.p
                            className="text-red-400 text-xs px-1"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.2 }}
                          >
                            {promoError}
                          </motion.p>
                        )}
                      </AnimatePresence>

                      {/* Available codes */}
                      <div className="mt-1 bg-white/10 rounded p-2.5">
                        <p className="text-white/60 text-xs mb-1.5 font-medium">Available Promo Codes:</p>
                        <div className="flex flex-col gap-1">
                          {Object.entries(PROMO_CODES).map(([code, info], i) => (
                            <motion.div
                              key={code}
                              className="flex justify-between items-center"
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.06 }}
                            >
                              <motion.button
                                onClick={() => setPromo(code)}
                                className="text-cyan-300 text-xs font-mono hover:text-cyan-100 transition-colors"
                                whileHover={{ scale: 1.05, x: 2 }}
                                whileTap={{ scale: 0.97 }}
                              >
                                {code}
                              </motion.button>
                              <span className="text-white/50 text-xs">{info.label} — {info.description}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="promo-applied"
                      variants={promoVariant}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="flex flex-col gap-1"
                    >
                      <div className="flex items-center justify-between bg-green-500/20 border border-green-400/30 rounded px-3 py-2">
                        <div>
                          <p className="text-green-300 text-xs font-semibold">{promoSuccess}</p>
                          <p className="text-white/50 text-xs">{appliedPromo.description}</p>
                        </div>
                        <motion.button
                          onClick={handleRemovePromo}
                          className="text-white/50 hover:text-white text-lg leading-none ml-2"
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          ×
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Checkout button */}
                <motion.button
                  onClick={() => {
                    localStorage.setItem("orderSummary", JSON.stringify({
                      subtotal, discount, promoDiscount,
                      promoCode: appliedPromo?.code || "",
                      deliveryFee: DELIVERY_FEE, total,
                    }));
                    router.push('/shipping');
                  }}
                  className="w-full bg-white text-gray-800 py-2.5 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.02, boxShadow: "0 4px 24px rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  Go to Checkout →
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}