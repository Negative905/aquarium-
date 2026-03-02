"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCart, removeFromCart, updateQty } from "../../components/Cart";

const DISCOUNT_RATE = 0.2;
const DELIVERY_FEE = 150;

export default function CartPage() {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [promo, setPromo] = useState("");

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

  const subtotal = items.reduce((sum, i) => sum + i.numericPrice * i.qty, 0);
  const discount = Math.round(subtotal * DISCOUNT_RATE);
  const total = subtotal - discount + (items.length > 0 ? DELIVERY_FEE : 0);

  const fmt = (n) => `₹${n.toLocaleString("en-IN")}`;

  return (
    <div className="min-h-screen bg-[linear-gradient(180.8deg,#065EB6_0.68%,#000C18_99.32%)] flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-6">Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-white/60 text-lg mb-2">Your cart is empty.</p>
            <p className="text-blue-300 text-sm">Browse our aquariums, fish, plants & corals to add items!</p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">

            {/* ── Cart Items ── */}
            <div className="flex-1 bg-white/15 border border-white/20 flex flex-col">
              {items.map((item, index) => (
                <div key={`${item.id}-${item.source}`}>
                  <div className="p-5 flex items-center gap-5">
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-28 h-24 rounded-lg object-cover flex-shrink-0 bg-[#0a2a4a]"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h3 className="text-white font-semibold text-base leading-snug">{item.name}</h3>
                        <button
                          onClick={() => handleRemove(item.id, item.source)}
                          className="text-white/70 hover:text-white ml-2 flex-shrink-0 mt-0.5"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6l-1 14H6L5 6" />
                            <path d="M10 11v6M14 11v6" />
                            <path d="M9 6V4h6v2" />
                          </svg>
                        </button>
                      </div>

                      <p className="text-white/70 text-sm mt-1">
                        <span className="font-medium">Size:</span> {item.size}
                      </p>
                      <p className="text-white/70 text-sm mt-1">
                        <span className="font-medium">Color:</span> {item.color}
                      </p>

                      <div className="flex justify-between items-center mt-3">
                        <span className="text-white font-bold text-base">{fmt(item.numericPrice)}</span>
                        <div className="flex items-center gap-4 text-white text-base">
                          <button onClick={() => handleUpdateQty(item.id, item.source, -1)} className="hover:opacity-70 leading-none text-lg">-</button>
                          <span>{item.qty}</span>
                          <button onClick={() => handleUpdateQty(item.id, item.source, 1)} className="hover:opacity-70 leading-none text-lg">+</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Inset divider — not shown after last item */}
                  {index < items.length - 1 && (
                    <div className="px-5">
                      <div className="border-t border-white/20" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ── Order Summary ── */}
            <div className="w-full lg:w-80 bg-white/15 border border-white/20 p-6 flex flex-col gap-3 h-fit">
              <h2 className="text-white font-bold text-base">Order Summary</h2>

              <div className="flex flex-col gap-2.5 text-sm">
                <div className="flex justify-between text-white/70">
                  <span>Sub Total</span>
                  <span className="font-semibold text-white">{fmt(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Discount (20%)</span>
                  <span className="text-green-400 font-semibold">-{fmt(discount)}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Delivery Fee</span>
                  <span className="font-semibold text-white">{fmt(DELIVERY_FEE)}</span>
                </div>
                <div className="border-t border-white/20 pt-2.5 flex justify-between font-bold text-white text-sm">
                  <span>Total</span>
                  <span>{fmt(total)}</span>
                </div>
              </div>

              {/* Promo code */}
              <div className="flex gap-0 border border-white/20 rounded overflow-hidden">
                <input
                  type="text"
                  value={promo}
                  onChange={(e) => setPromo(e.target.value)}
                  placeholder="Add promo code"
                  className="flex-1 px-3 py-2 text-sm outline-none bg-transparent text-white placeholder-white/40"
                />
                <button className="bg-white text-gray-800 px-3 py-2 text-sm font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
                  Apply
                </button>
              </div>

              <button
                onClick={() => router.push('/shipping')}
                className="w-full bg-white text-gray-800 py-2.5 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Go to Checkout →
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}