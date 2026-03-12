"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ShippingPage() {
  const router = useRouter();
  const [shippingMethod, setShippingMethod] = useState("express");
  const [promoCode, setPromoCode] = useState("");

  // ── Form fields ──────────────────────────────────────────
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // ── Order summary from cart ───────────────────────────────
  const [summary, setSummary] = useState({
    subtotal: 0,
    discount: 0,
    promoDiscount: 0,
    promoCode: "",
    deliveryFee: 150,
    total: 0,
  });

  useEffect(() => {
    const saved = localStorage.getItem("orderSummary");
    if (saved) {
      const parsed = JSON.parse(saved);
      setSummary(parsed);
      setPromoCode(parsed.promoCode || "");
    }
  }, []);

  const shippingCost = shippingMethod === "express" ? 10 : 0;
  const adjustedTotal =
    summary.subtotal - summary.discount - summary.promoDiscount + shippingCost;

  const fmt = (n) => `₹${Number(n).toLocaleString("en-IN")}`;

  // ── Validation ────────────────────────────────────────────
  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "Required";
    if (!form.lastName.trim()) newErrors.lastName = "Required";
    if (!form.email.trim()) newErrors.email = "Required";
    if (!form.phone.trim()) newErrors.phone = "Required";
    if (!form.city.trim()) newErrors.city = "Required";
    if (!form.zip.trim()) newErrors.zip = "Required";
    if (!form.address.trim()) newErrors.address = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (!validate()) return;

    // ✅ Save shipping info + updated total to localStorage
    const saved = localStorage.getItem("orderSummary");
    const existing = saved ? JSON.parse(saved) : {};
    localStorage.setItem(
      "orderSummary",
      JSON.stringify({
        ...existing,
        shippingTotal: adjustedTotal,
        shippingMethod,
        shippingAddress1: form.address,
        city: form.city,
        zip: form.zip,
        country: "India",
        phone: form.phone,
        customerName: `${form.firstName} ${form.lastName}`,
        email: form.email,
      }),
    );
    router.push("/payment");
  };

  const inputClass = (field) =>
    `rounded-md px-3 py-2 text-sm bg-white/10 text-white placeholder-white/40 border outline-none focus:border-white/60 transition ${
      errors[field] ? "border-red-400" : "border-white/20"
    }`;

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6 bg-[linear-gradient(180.8deg,#065EB6_0.68%,#000C18_99.32%)]">
      <div className="flex gap-6 w-full max-w-4xl">
        {/* LEFT: Form */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-white text-2xl font-bold mb-2">
            Shipping Address
          </h1>

          {/* First Name / Last Name */}
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-white text-sm">First Name*</label>
              <input
                type="text"
                placeholder="Enter your first name"
                value={form.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className={inputClass("firstName")}
              />
              {errors.firstName && (
                <p className="text-red-400 text-xs">{errors.firstName}</p>
              )}
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-white text-sm">Last Name*</label>
              <input
                type="text"
                placeholder="Enter your last name"
                value={form.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className={inputClass("lastName")}
              />
              {errors.lastName && (
                <p className="text-red-400 text-xs">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email / Phone */}
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-white text-sm">Email*</label>
              <input
                type="email"
                placeholder="Enter your email id"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={inputClass("email")}
              />
              {errors.email && (
                <p className="text-red-400 text-xs">{errors.email}</p>
              )}
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-white text-sm">Phone Number*</label>
              <div
                className={`flex rounded-md overflow-hidden border focus-within:border-white/60 transition ${errors.phone ? "border-red-400" : "border-white/20"}`}
              >
                <select className="bg-white/10 text-white text-sm px-2 py-2 outline-none border-r border-white/20 cursor-pointer">
                  <option value="IND" className="bg-blue-900">
                    IND
                  </option>
                  <option value="US" className="bg-blue-900">
                    US
                  </option>
                  <option value="UK" className="bg-blue-900">
                    UK
                  </option>
                </select>
                <input
                  type="tel"
                  placeholder="+91 9876567898"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="flex-1 bg-white/10 text-white text-sm px-3 py-2 placeholder-white/40 outline-none"
                />
              </div>
              {errors.phone && (
                <p className="text-red-400 text-xs">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* City / State / Zip */}
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-white text-sm">City*</label>
              <input
                type="text"
                placeholder="City"
                value={form.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className={inputClass("city")}
              />
              {errors.city && (
                <p className="text-red-400 text-xs">{errors.city}</p>
              )}
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-white text-sm">State*</label>
              <input
                type="text"
                placeholder="State"
                value={form.state}
                onChange={(e) => handleChange("state", e.target.value)}
                className={inputClass("state")}
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-white text-sm">Zip Code*</label>
              <input
                type="text"
                placeholder="Zip Code"
                value={form.zip}
                onChange={(e) => handleChange("zip", e.target.value)}
                className={inputClass("zip")}
              />
              {errors.zip && (
                <p className="text-red-400 text-xs">{errors.zip}</p>
              )}
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-1">
            <label className="text-white text-sm">Address*</label>
            <textarea
              placeholder="Enter your address"
              rows={4}
              value={form.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className={`${inputClass("address")} resize-none`}
            />
            {errors.address && (
              <p className="text-red-400 text-xs">{errors.address}</p>
            )}
          </div>

          {/* Shipping Method */}
          <h2 className="text-white text-xl font-bold mt-4 mb-1">
            Shipping Method
          </h2>
          <div className="flex gap-4">
            <button
              onClick={() => setShippingMethod("free")}
              className={`flex-1 rounded-xl px-4 py-3 text-left border transition ${shippingMethod === "free" ? "border-blue-300 bg-blue-600/30" : "border-white/20 bg-white/10"}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center shrink-0 ${shippingMethod === "free" ? "border-blue-300" : "border-white/50"}`}
                  >
                    {shippingMethod === "free" && (
                      <span className="w-2 h-2 rounded-full bg-blue-300 block" />
                    )}
                  </span>
                  <span className="text-white text-sm font-medium">
                    Free Shipping
                  </span>
                </div>
                <span className="text-white text-sm font-bold">₹0</span>
              </div>
              <p className="text-white/50 text-xs mt-1 ml-5">7–10 days</p>
            </button>

            <button
              onClick={() => setShippingMethod("express")}
              className={`flex-1 rounded-xl px-4 py-3 text-left border transition ${shippingMethod === "express" ? "border-blue-300 bg-blue-500/40" : "border-white/20 bg-white/10"}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center shrink-0 ${shippingMethod === "express" ? "border-blue-300" : "border-white/50"}`}
                  >
                    {shippingMethod === "express" && (
                      <span className="w-2 h-2 rounded-full bg-blue-300 block" />
                    )}
                  </span>
                  <span className="text-white text-sm font-medium">
                    Express Shipping
                  </span>
                </div>
                <span className="text-white text-sm font-bold">₹10</span>
              </div>
              <p className="text-white/50 text-xs mt-1 ml-5">1–3 days</p>
            </button>
          </div>

          <button
            onClick={handleContinue}
            className="w-full mt-4 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-white/90 transition"
          >
            Continue to Payment
          </button>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="w-80 shrink-0 flex items-start pt-24 pl-6">
          <div
            className="w-full p-7 border border-white/20"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            <h3 className="text-white font-bold text-base mb-5">
              Order Summary
            </h3>

            <div className="flex justify-between items-center mb-3">
              <span className="text-white/80 text-sm">Sub Total</span>
              <span className="text-white text-sm font-semibold">
                {fmt(summary.subtotal)}
              </span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-white/80 text-sm">Discount (20%)</span>
              <span className="text-green-400 text-sm font-semibold">
                -{fmt(summary.discount)}
              </span>
            </div>
            {summary.promoDiscount > 0 && (
              <div className="flex justify-between items-center mb-3">
                <span className="text-white/80 text-sm">
                  Promo ({summary.promoCode})
                </span>
                <span className="text-green-400 text-sm font-semibold">
                  -{fmt(summary.promoDiscount)}
                </span>
              </div>
            )}
            <div className="flex justify-between items-center mb-5">
              <span className="text-white/80 text-sm">Delivery Fee</span>
              <span className="text-white text-sm font-semibold">
                {fmt(shippingCost)}
              </span>
            </div>

            <div className="border-t border-white/20 mb-4" />

            <div className="flex justify-between items-center mb-5">
              <span className="text-white font-bold text-sm">Total</span>
              <span className="text-white font-bold text-sm">
                {fmt(adjustedTotal)}
              </span>
            </div>

            {promoCode ? (
              <div className="bg-green-500/20 border border-green-400/30 rounded px-3 py-2 text-green-300 text-xs font-semibold">
                ✓ Promo "{promoCode}" applied
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
