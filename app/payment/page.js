"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [showCvv, setShowCvv] = useState(false);

  const [finalTotal, setFinalTotal] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("orderSummary");
    if (saved) {
      const parsed = JSON.parse(saved);
      // shippingTotal is saved by the shipping page before navigating
      const total = parsed.shippingTotal ?? parsed.total ?? 0;
      setFinalTotal(total);
    }
  }, []);

  const fmt = (n) => `₹${Number(n).toLocaleString("en-IN")}`;

  const formatCardNumber = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiry = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2);
    return digits;
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-[linear-gradient(180.8deg,#065EB6_0.68%,#000C18_99.32%)]">
      <div className="w-full max-w-lg">
        <h1 className="text-white text-2xl font-bold mb-6">Payment Details</h1>

        {/* Payment Method Buttons */}
        <div className="flex gap-3 mb-5">

          {/* Google Pay */}
          <button className="flex-1 flex items-center justify-center py-2.5 px-4 rounded-md border border-white/30 bg-white/10 hover:bg-white/20 transition">
            <span className="flex items-center gap-1.5">
              <svg width="22" height="22" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
                <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5671 35.7669L38.5703 41.0508L39.0544 41.0979C43.5258 36.9976 46 31.0584 46 24.0287Z" fill="#4285F4"/>
                <path d="M23.4694 47C29.8061 47 35.1071 44.9991 39.0544 41.0979L31.5957 35.5731C29.6551 36.9669 27.0998 37.9306 23.4694 37.9306C17.268 37.9306 12.0276 33.8303 10.1918 28.2109L10.0114 28.2268L2.72046 33.7175L2.62109 33.8927C6.54271 41.7677 14.4322 47 23.4694 47Z" fill="#34A853"/>
                <path d="M10.1918 28.2109C9.71286 26.7421 9.43681 25.1762 9.43681 23.5C9.43681 21.8238 9.71286 20.2579 10.1918 18.7891L10.1783 18.5745L2.79888 12.9979L2.62109 13.1073C1.07678 16.1822 0.187378 19.7412 0.187378 23.5C0.187378 27.2588 1.07678 30.8178 2.62109 33.8927L10.1918 28.2109Z" fill="#FBBC05"/>
                <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1934 6.11C35.0815 2.33917 29.8061 0 23.4694 0C14.4322 0 6.54271 5.23233 2.62109 13.1073L10.1918 18.7891C12.0276 13.1697 17.268 9.07688 23.4694 9.07688Z" fill="#EA4335"/>
              </svg>
              <span className="text-white font-medium text-sm tracking-wide">Pay</span>
            </span>
          </button>

          {/* Apple Pay */}
          <button className="flex-1 flex items-center justify-center py-2.5 px-4 rounded-md border border-white/30 bg-white/10 hover:bg-white/20 transition">
            <span className="flex items-center gap-1.5">
              <svg width="16" height="20" viewBox="0 0 814 1000" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.1 134.5-317 267.4-317 104.6 0 171.5 67.9 228.5 67.9 54.4 0 131.9-71.4 248.6-71.4zm-11-131.1c-52.1 62.2-140.5 107.6-228.8 107.6-13.1 0-26.1-1.3-39.2-3.2-3.2-1.3-6.4-5.1-6.4-9.6 0-62.8 56.2-130.3 103.7-170.5 52.7-44.8 135.5-78.7 209.3-78.7 3.2 0 9.6 0 12.8.6 3.2 1.9 6.4 5.1 6.4 9.6 0 65.4-42.8 136-57.8 144.2z"/>
              </svg>
              <span className="text-white font-medium text-sm tracking-wide">Pay</span>
            </span>
          </button>

          {/* PayPal */}
          <button className="flex-1 flex items-center justify-center py-2.5 px-4 rounded-md border border-white/30 bg-white/10 hover:bg-white/20 transition">
            <span className="flex items-center gap-0">
              <span style={{ color: "#009CDE" }} className="font-bold text-base">Pay</span>
              <span style={{ color: "#012169" }} className="font-bold text-base">Pal</span>
            </span>
          </button>
        </div>

        {/* Or with divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-white/25" />
          <span className="text-white/60 text-sm">Or with</span>
          <div className="flex-1 h-px bg-white/25" />
        </div>

        {/* Card Number + Card Holder */}
        <div className="flex gap-4 mb-4">
          <div className="flex-1 flex flex-col gap-1">
            <label className="text-white text-sm">Card Number*</label>
            <div className="flex items-center rounded-md border border-white/20 bg-white/10 px-3 py-2 focus-within:border-white/60 transition">
              <input
                type="text"
                placeholder="5788 •••• •••• 1267"
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                className="flex-1 bg-transparent text-white text-sm placeholder-white/40 outline-none"
              />
              <button className="text-white/50 hover:text-white/80 transition ml-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-1">
            <label className="text-white text-sm">Card Holder Name*</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              className="rounded-md px-3 py-2 text-sm bg-white/10 text-white placeholder-white/40 border border-white/20 outline-none focus:border-white/60 transition"
            />
          </div>
        </div>

        {/* Expiry + CVV */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col gap-1 w-36">
            <label className="text-white text-sm">Expiry date*</label>
            <input
              type="text"
              placeholder="mm/yy"
              value={expiry}
              onChange={(e) => setExpiry(formatExpiry(e.target.value))}
              className="rounded-md px-3 py-2 text-sm bg-white/10 text-white placeholder-white/40 border border-white/20 outline-none focus:border-white/60 transition"
            />
          </div>
          <div className="flex flex-col gap-1 w-28">
            <label className="text-white text-sm">CVV/CVV2*</label>
            <input
              type={showCvv ? "text" : "password"}
              placeholder="XXX"
              maxLength={4}
              value={cvv}
              onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
              className="rounded-md px-3 py-2 text-sm bg-white/10 text-white placeholder-white/40 border border-white/20 outline-none focus:border-white/60 transition"
            />
          </div>
        </div>

        {/* Total Amount */}
        <div className="flex justify-between items-center mb-4 border-t border-white/10 pt-5">
          <span className="text-white text-sm">Total amount</span>
          <span className="text-white text-xl font-bold">{fmt(finalTotal)}</span>
        </div>

        {/* Pay Button */}
        <button className="w-full py-3 rounded-md bg-white text-black font-bold text-sm hover:bg-white/90 transition">
          Pay {fmt(finalTotal)}
        </button>
      </div>
    </div>
  );
}