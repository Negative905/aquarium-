"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ShippingPage() {
  const router = useRouter();
  const [shippingMethod, setShippingMethod] = useState("express");
  const [promoCode, setPromoCode] = useState("");

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-6 bg-[linear-gradient(180.8deg,#065EB6_0.68%,#000C18_99.32%)]"
    >
      <div className="flex gap-6 w-full max-w-4xl">
        {/* LEFT: Form */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-white text-2xl font-bold mb-2">Shipping Address</h1>

          {/* First Name / Last Name */}
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-white text-sm">First Name*</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="rounded-md px-3 py-2 text-sm bg-white/10 text-white placeholder-white/40 border border-white/20 outline-none focus:border-white/60 transition"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-white text-sm">Last Name*</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="rounded-md px-3 py-2 text-sm bg-white/10 text-white placeholder-white/40 border border-white/20 outline-none focus:border-white/60 transition"
              />
            </div>
          </div>

          {/* Email / Phone */}
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-white text-sm">Email*</label>
              <input
                type="email"
                placeholder="Enter your email id"
                className="rounded-md px-3 py-2 text-sm bg-white/10 text-white placeholder-white/40 border border-white/20 outline-none focus:border-white/60 transition"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-white text-sm">Phone Number *</label>
              <div className="flex rounded-md overflow-hidden border border-white/20 focus-within:border-white/60 transition">
                <select className="bg-white/10 text-white text-sm px-2 py-2 outline-none border-r border-white/20 cursor-pointer">
                  <option value="IND" className="bg-blue-900">IND</option>
                  <option value="US" className="bg-blue-900">US</option>
                  <option value="UK" className="bg-blue-900">UK</option>
                </select>
                <input
                  type="tel"
                  placeholder="+91 9876567898"
                  className="flex-1 bg-white/10 text-white text-sm px-3 py-2 placeholder-white/40 outline-none"
                />
              </div>
            </div>
          </div>

          {/* City / State / Zip */}
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-white text-sm">City*</label>
              <input
                type="text"
                placeholder="City"
                className="rounded-md px-3 py-2 text-sm bg-white/10 text-white placeholder-white/40 border border-white/20 outline-none focus:border-white/60 transition"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-white text-sm">State*</label>
              <input
                type="text"
                placeholder="State"
                className="rounded-md px-3 py-2 text-sm bg-white/10 text-white placeholder-white/40 border border-white/20 outline-none focus:border-white/60 transition"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-white text-sm">Zip Code*</label>
              <input
                type="text"
                placeholder="Zip Code"
                className="rounded-md px-3 py-2 text-sm bg-white/10 text-white placeholder-white/40 border border-white/20 outline-none focus:border-white/60 transition"
              />
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-1">
            <label className="text-white text-sm">Address*</label>
            <textarea
              placeholder="Enter your address"
              rows={4}
              className="rounded-md px-3 py-2 text-sm bg-white/10 text-white placeholder-white/40 border border-white/20 outline-none focus:border-white/60 transition resize-none"
            />
          </div>

          {/* Shipping Method */}
          <h2 className="text-white text-xl font-bold mt-4 mb-1">Shipping Method</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setShippingMethod("free")}
              className={`flex-1 rounded-xl px-4 py-3 text-left border transition ${
                shippingMethod === "free"
                  ? "border-blue-300 bg-blue-600/30"
                  : "border-white/20 bg-white/10"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center shrink-0 ${shippingMethod === "free" ? "border-blue-300" : "border-white/50"}`}>
                    {shippingMethod === "free" && <span className="w-2 h-2 rounded-full bg-blue-300 block" />}
                  </span>
                  <span className="text-white text-sm font-medium">Free Shipping</span>
                </div>
                <span className="text-white text-sm font-bold">₹0</span>
              </div>
              <p className="text-white/50 text-xs mt-1 ml-5">7–10 days</p>
            </button>

            <button
              onClick={() => setShippingMethod("express")}
              className={`flex-1 rounded-xl px-4 py-3 text-left border transition ${
                shippingMethod === "express"
                  ? "border-blue-300 bg-blue-500/40"
                  : "border-white/20 bg-white/10"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center shrink-0 ${shippingMethod === "express" ? "border-blue-300" : "border-white/50"}`}>
                    {shippingMethod === "express" && <span className="w-2 h-2 rounded-full bg-blue-300 block" />}
                  </span>
                  <span className="text-white text-sm font-medium">Express Shipping</span>
                </div>
                <span className="text-white text-sm font-bold">₹10</span>
              </div>
              <p className="text-white/50 text-xs mt-1 ml-5">1–3 days</p>
            </button>
          </div>

          {/* ✅ THIS is the fixed button */}
          <button
            onClick={() => router.push('/payment')}
            className="w-full mt-4 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-white/90 transition"
          >
            Continue to Payment
          </button>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="w-80 shrink-0 flex items-start pt-24 pl-6">
          <div
            className="w-full p-7 border border-white/20"
            style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)" }}
          >
            <h3 className="text-white font-bold text-base mb-5">Order Summary</h3>
            <div className="flex justify-between items-center mb-3">
              <span className="text-white/80 text-sm">Sub Total</span>
              <span className="text-white text-sm font-semibold">₹67,000</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-white/80 text-sm">Discount</span>
              <span className="text-green-400 text-sm font-semibold">-₹13,400</span>
            </div>
            <div className="flex justify-between items-center mb-5">
              <span className="text-white/80 text-sm">Delivery Fee</span>
              <span className="text-white text-sm font-semibold">₹150</span>
            </div>
            <div className="border-t border-white/20 mb-4" />
            <div className="flex justify-between items-center mb-5">
              <span className="text-white font-bold text-sm">Total</span>
              <span className="text-white font-bold text-sm">₹53,750</span>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 min-w-0 px-3 py-2 text-xs bg-white text-gray-700 placeholder-gray-400 outline-none"
              />
              <button className="bg-white text-gray-800 px-3 py-2 text-sm font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}