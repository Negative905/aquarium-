"use client";
import { useState } from "react";

const initialItems = [
  {
    id: 1,
    name: "Premium Marine Glass Tank",
    size: "Large",
    color: "White",
    price: 60000,
    qty: 1,
    img: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=120&q=80",
  },
  {
    id: 2,
    name: "Royal Gramma",
    size: "Large",
    color: "White",
    price: 60000,
    qty: 1,
    img: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=120&q=80",
  },
  {
    id: 3,
    name: "Torch Coral",
    size: "Large",
    color: "Orange",
    price: 4500,
    qty: 1,
    img: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=120&q=80",
  },
];

const DISCOUNT_RATE = 0.2;
const DELIVERY_FEE = 150;

export default function CartPage() {
  const [items, setItems] = useState(initialItems);
  const [promo, setPromo] = useState("");

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev
        .map((item) => item.id === id ? { ...item, qty: item.qty + delta } : item)
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const discount = Math.round(subtotal * DISCOUNT_RATE);
  const total = subtotal - discount + DELIVERY_FEE;

  const fmt = (n) => `₹${n.toLocaleString("en-IN")}`;

  return (
    <div className="min-h-screen bg-[linear-gradient(180.8deg,#065EB6_0.68%,#000C18_99.32%)] flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-6">Your Cart</h1>

        <div className="flex flex-col lg:flex-row gap-6">

          {/* ── Cart Items ── */}
          <div className="flex-1 flex flex-col gap-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white/15 p-5 flex items-center gap-5 border border-white/20"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-28 h-24 rounded-lg object-cover flex-shrink-0"
                />

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="text-white font-semibold text-base leading-snug">
                      {item.name}
                    </h3>
                    {/* Trash icon — top right */}
                    <button
                      onClick={() => removeItem(item.id)}
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

                  {/* Price + Qty controls */}
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-white font-bold text-base">
                      {fmt(item.price)}
                    </span>
                    {/* Qty: plain - qty + like screenshot */}
                    <div className="flex items-center gap-4 text-white text-base">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="hover:opacity-70 leading-none"
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="hover:opacity-70 leading-none"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Order Summary ── */}
          <div className="w-full lg:w-80 bg-white/15 border border-white/20 p-6 flex flex-col gap-3 h-fit">
            <h2 className="text-white font-bold text-base">Order Summary</h2>

            <div className="flex flex-col gap-2.5 text-sm">
              <div className="flex justify-between text-white/70">
                <span>Sub Total</span>
                <span className="font-medium text-white">{fmt(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Discount</span>
                <span className="text-green-400 font-medium">-{fmt(discount)}</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Delivery Fee</span>
                <span className="font-medium text-white">{fmt(DELIVERY_FEE)}</span>
              </div>

              {/* Divider before Total */}
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

            {/* Checkout button */}
            <button className="w-full bg-white text-gray-800 py-2.5 rounded text-sm font-medium hover:bg-gray-100 transition-colors">
              Go to Checkout →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}