"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { addToCart, removeFromCart, updateQty } from "../../components/Cart";

const API = process.env.NEXT_PUBLIC_API_URL;

const FRESHWATER_IMAGES = [
  { src: "/freshwater-1.png", alt: "Classic Rectangular Glass Tank" },
  { src: "/freshwater-2.png", alt: "Rimless Designer Tank" },
  { src: "/freshwater-3.png", alt: "Bow Front Aquarium" },
  { src: "/freshwater-4.png", alt: "Cube Nano Tank" },
];

const SOURCE = "freshwater-aquariums";

const qtyVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 350, damping: 22 },
  },
  exit: { opacity: 0, scale: 0.85, transition: { duration: 0.15 } },
};

export default function FreshwaterAquariumsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({});
  const [sortBy, setSortBy] = useState("");
  const [isSortOpen, setIsSortOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${API}/products?categories=69b23d31da5543e64646dce3`,
        );
        const data = await res.json();
        const mapped = data.map((item, index) => ({
          ...item,
          id: item._id,
          numericPrice: Number(item.price),
          price: `₹${Number(item.price).toLocaleString("en-IN")}`,
          image: FRESHWATER_IMAGES[index]?.src || "/freshwater-1.png",
          alt: FRESHWATER_IMAGES[index]?.alt || item.name,
        }));
        setProducts(mapped);
      } catch (err) {
        console.error("Failed to fetch freshwater aquariums:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart({ ...product, source: SOURCE, quantity: 1 });
    setQuantities((prev) => ({ ...prev, [product.id]: 1 }));
  };

  const handleIncrease = (product) => {
    updateQty(product.id, SOURCE, 1);
    setQuantities((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 1) + 1,
    }));
  };

  const handleDecrease = (product) => {
    const current = quantities[product.id] || 0;
    if (current <= 1) {
      removeFromCart(product.id, SOURCE);
      setQuantities((prev) => {
        const u = { ...prev };
        delete u[product.id];
        return u;
      });
    } else {
      updateQty(product.id, SOURCE, -1);
      setQuantities((prev) => ({ ...prev, [product.id]: current - 1 }));
    }
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "Price: Low to High") return a.numericPrice - b.numericPrice;
    if (sortBy === "Price: High to Low") return b.numericPrice - a.numericPrice;
    return 0;
  });

  return (
    <div className="min-h-screen bg-[linear-gradient(180.8deg,#065EB6_0.68%,#000C18_99.32%)]">
      <div className="pt-16">
        {/* ── Hero ── */}
        <section className="py-10 text-center px-4">
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-2"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Aquariums
          </h1>
          <p className="text-[#8fa8c0] text-sm sm:text-base tracking-wide">
            Freshwater Aquariums
          </p>
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
                  <svg
                    className={`w-3 h-3 transition-transform ${isSortOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
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
                      {["Price: Low to High", "Price: High to Low"].map(
                        (option) => (
                          <button
                            key={option}
                            onClick={() => {
                              setSortBy(option);
                              setIsSortOpen(false);
                            }}
                            className="block w-full text-left px-4 py-2.5 text-black text-xs hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                          >
                            {option}
                          </button>
                        ),
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Loading */}
            {loading && (
              <div className="text-center text-white/60 py-20">
                Loading products...
              </div>
            )}

            {!loading && products.length === 0 && (
              <div className="text-center text-white/60 py-20">
                No products found.
              </div>
            )}

            {/* Grid */}
            {!loading && sortedProducts.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 sm:gap-y-24">
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-sm bg-[#0a1e38] shadow-md group"
                  >
                    {/* ✅ overflow-hidden moved here so zoom stays inside image box */}
                    <div className="relative w-full h-56 sm:h-0 sm:pb-[105%] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.alt}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.style.background = "#c8dbe8";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center -z-10" />
                    </div>

                    <div className="p-4 text-center">
                      <h3
                        className="text-sm sm:text-base font-bold text-white mb-1"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-white text-xs sm:text-sm mb-2 leading-relaxed">
                        {product.description}
                      </p>
                      <p className="text-white font-bold text-sm sm:text-base mb-3">
                        {product.price}
                      </p>

                      <div className="flex justify-center">
                        <AnimatePresence mode="wait">
                          {quantities[product.id] ? (
                            <motion.div
                              key="qty"
                              variants={qtyVariant}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="flex items-center mx-auto w-fit backdrop-blur-md bg-white/20 border border-white/30 rounded-xl overflow-hidden"
                            >
                              <button
                                onClick={() => handleDecrease(product)}
                                className="text-white text-lg font-bold px-4 py-2 hover:bg-white/20 transition-all duration-200 leading-none"
                              >
                                −
                              </button>
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
                              <button
                                onClick={() => handleIncrease(product)}
                                className="text-white text-lg font-bold px-4 py-2 hover:bg-white/20 transition-all duration-200 leading-none"
                              >
                                +
                              </button>
                            </motion.div>
                          ) : (
                            <motion.button
                              key="add"
                              variants={qtyVariant}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              onClick={() => handleAddToCart(product)}
                              className="text-xs sm:text-sm py-2 px-8 sm:px-12 transition-all duration-300 font-medium tracking-wide rounded-xl backdrop-blur-md border bg-white/20 border-white/30 text-white hover:bg-white/30 w-full sm:w-auto"
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
            )}
          </div>
        </section>
      </div>
    </div>
  );
}