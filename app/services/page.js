"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const API = process.env.NEXT_PUBLIC_API_URL;

// ✅ Hardcoded images in order
const SERVICE_IMAGES = [
  "/service1.png",
  "/service2.png",
  "/service3.png",
  "/service4.png",
  "/service5.png",
  "/service6.png",
];

function QuoteModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <motion.div
          className="relative w-full max-w-lg bg-[#0d1f3c] border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        >
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-blue-200 text-xs font-medium uppercase tracking-widest mb-0.5">
                Quotation
              </p>
              <h2 className="text-white text-xl font-bold">
                Custom Aquarium Design
              </h2>
              <p className="text-blue-100 text-sm mt-0.5">
                Starting Price: ₹25,000+
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors ml-4 flex-shrink-0"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="px-6 py-5 space-y-5 max-h-[70vh] overflow-y-auto">
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                Quotation Example
              </h3>
              <div className="space-y-2">
                {[
                  {
                    label: "Basic Custom Glass Aquarium (3–4 ft)",
                    price: "₹25,000 – ₹40,000",
                  },
                  {
                    label: "Premium Designer Aquarium (5–6 ft)",
                    price: "₹40,000 – ₹80,000",
                  },
                  {
                    label: "Luxury Built-in Wall Aquarium",
                    price: "₹80,000 – ₹2,50,000+",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex justify-between items-center bg-white/5 border border-white/10 rounded-lg px-4 py-2.5"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.15 }}
                  >
                    <span className="text-blue-100 text-sm">{item.label}</span>
                    <span className="text-white font-semibold text-sm whitespace-nowrap ml-3">
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Includes
              </h3>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  "Aquarium tank design",
                  "Cabinet & stand",
                  "LED lighting",
                  "Basic filtration system",
                  "Installation",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 text-sm text-blue-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.06 + 0.3 }}
                  >
                    <svg
                      className="w-4 h-4 text-green-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />
                Optional Add-ons
              </h3>
              <div className="space-y-1.5">
                {[
                  { label: "Imported décor", price: "₹5,000+" },
                  { label: "Automatic feeder", price: "₹3,000+" },
                  { label: "Smart lighting system", price: "₹8,000+" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex justify-between items-center text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.07 + 0.45 }}
                  >
                    <span className="text-blue-200 flex items-center gap-2">
                      <span className="text-yellow-400">+</span>
                      {item.label}
                    </span>
                    <span className="text-yellow-300 font-medium">
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-white/10 bg-white/5 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 border border-white/20 text-white/70 text-sm rounded-lg hover:bg-white/10 transition-colors"
            >
              Close
            </button>
            <button className="flex-1 py-2.5 bg-white text-blue-900 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Contact Us
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function MarineQuoteModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <motion.div
          className="relative w-full max-w-lg bg-[#0d1f3c] border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        >
          <div className="bg-gradient-to-r from-cyan-700 to-teal-500 px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-cyan-200 text-xs font-medium uppercase tracking-widest mb-0.5">
                Quotation
              </p>
              <h2 className="text-white text-xl font-bold">
                Marine & Reef Setup
              </h2>
              <p className="text-cyan-100 text-sm mt-0.5">
                Starting Price: ₹50,000+
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors ml-4 flex-shrink-0"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="px-6 py-5 space-y-5 max-h-[70vh] overflow-y-auto">
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
                Quotation Example
              </h3>
              <div className="space-y-2">
                {[
                  {
                    label: "Beginner Saltwater Setup",
                    price: "₹50,000 – ₹90,000",
                  },
                  {
                    label: "Reef Aquarium Setup",
                    price: "₹90,000 – ₹1,80,000",
                  },
                  {
                    label: "Advanced Coral Reef System",
                    price: "₹1,80,000 – ₹4,00,000+",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex justify-between items-center bg-white/5 border border-white/10 rounded-lg px-4 py-2.5"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.15 }}
                  >
                    <span className="text-blue-100 text-sm">{item.label}</span>
                    <span className="text-white font-semibold text-sm whitespace-nowrap ml-3">
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Includes
              </h3>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  "Marine aquarium tank",
                  "Protein skimmer",
                  "Marine lighting",
                  "Live rock & sand",
                  "Water testing kit",
                  "Initial fish & coral setup",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 text-sm text-blue-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.06 + 0.3 }}
                  >
                    <svg
                      className="w-4 h-4 text-green-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-white/10 bg-white/5 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 border border-white/20 text-white/70 text-sm rounded-lg hover:bg-white/10 transition-colors"
            >
              Close
            </button>
            <button className="flex-1 py-2.5 bg-white text-blue-900 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Contact Us
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function MaintenanceQuoteModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <motion.div
          className="relative w-full max-w-lg bg-[#0d1f3c] border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        >
          <div className="bg-gradient-to-r from-emerald-700 to-green-500 px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-emerald-200 text-xs font-medium uppercase tracking-widest mb-0.5">
                Quotation
              </p>
              <h2 className="text-white text-xl font-bold">
                Maintenance & Cleaning
              </h2>
              <p className="text-emerald-100 text-sm mt-0.5">
                Starting Price: ₹10,000+
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors ml-4 flex-shrink-0"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="px-6 py-5 space-y-5 max-h-[70vh] overflow-y-auto">
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                Quotation Example
              </h3>
              <div className="space-y-2">
                {[
                  {
                    label: "Monthly Maintenance (Small Tank)",
                    price: "₹10,000",
                  },
                  { label: "Medium Tank Maintenance", price: "₹15,000" },
                  { label: "Large Aquarium Maintenance", price: "₹20,000+" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex justify-between items-center bg-white/5 border border-white/10 rounded-lg px-4 py-2.5"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.15 }}
                  >
                    <span className="text-blue-100 text-sm">{item.label}</span>
                    <span className="text-white font-semibold text-sm whitespace-nowrap ml-3">
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Includes
              </h3>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  "Water change",
                  "Glass cleaning",
                  "Filter maintenance",
                  "Fish health check",
                  "Water parameter testing",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 text-sm text-blue-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.06 + 0.3 }}
                  >
                    <svg
                      className="w-4 h-4 text-green-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />
                Optional
              </h3>
              <div className="space-y-1.5">
                {[
                  { label: "Emergency visit", price: "₹2,000" },
                  { label: "Algae treatment", price: "₹1,500" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex justify-between items-center text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.07 + 0.45 }}
                  >
                    <span className="text-blue-200 flex items-center gap-2">
                      <span className="text-yellow-400">+</span>
                      {item.label}
                    </span>
                    <span className="text-yellow-300 font-medium">
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-white/10 bg-white/5 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 border border-white/20 text-white/70 text-sm rounded-lg hover:bg-white/10 transition-colors"
            >
              Close
            </button>
            <button className="flex-1 py-2.5 bg-white text-blue-900 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Contact Us
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ConsultationQuoteModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <motion.div
          className="relative w-full max-w-lg bg-[#0d1f3c] border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        >
          <div className="bg-gradient-to-r from-violet-700 to-purple-500 px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-violet-200 text-xs font-medium uppercase tracking-widest mb-0.5">
                Quotation
              </p>
              <h2 className="text-white text-xl font-bold">
                Aquarium Consultation
              </h2>
              <p className="text-violet-100 text-sm mt-0.5">
                Starting Price: ₹5,000+
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors ml-4 flex-shrink-0"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="px-6 py-5 space-y-5 max-h-[70vh] overflow-y-auto">
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 inline-block" />
                Quotation Example
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Online Consultation", price: "₹5,000" },
                  { label: "On-site Expert Visit", price: "₹8,000" },
                  { label: "Full Aquarium Planning Session", price: "₹15,000" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex justify-between items-center bg-white/5 border border-white/10 rounded-lg px-4 py-2.5"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.15 }}
                  >
                    <span className="text-blue-100 text-sm">{item.label}</span>
                    <span className="text-white font-semibold text-sm whitespace-nowrap ml-3">
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Includes
              </h3>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  "Aquarium size recommendation",
                  "Fish compatibility guidance",
                  "Equipment suggestions",
                  "Budget planning",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 text-sm text-blue-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.06 + 0.3 }}
                  >
                    <svg
                      className="w-4 h-4 text-green-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-white/10 bg-white/5 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 border border-white/20 text-white/70 text-sm rounded-lg hover:bg-white/10 transition-colors"
            >
              Close
            </button>
            <button className="flex-1 py-2.5 bg-white text-blue-900 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Contact Us
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function RelocationQuoteModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <motion.div
          className="relative w-full max-w-lg bg-[#0d1f3c] border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        >
          <div className="bg-gradient-to-r from-orange-700 to-amber-500 px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-orange-200 text-xs font-medium uppercase tracking-widest mb-0.5">
                Quotation
              </p>
              <h2 className="text-white text-xl font-bold">
                Tank Relocation Services
              </h2>
              <p className="text-orange-100 text-sm mt-0.5">
                Starting Price: ₹25,000+
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors ml-4 flex-shrink-0"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="px-6 py-5 space-y-5 max-h-[70vh] overflow-y-auto">
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block" />
                Quotation Example
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Small Aquarium Relocation", price: "₹25,000" },
                  { label: "Medium Aquarium Relocation", price: "₹35,000" },
                  { label: "Large Aquarium Relocation", price: "₹50,000+" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex justify-between items-center bg-white/5 border border-white/10 rounded-lg px-4 py-2.5"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.15 }}
                  >
                    <span className="text-blue-100 text-sm">{item.label}</span>
                    <span className="text-white font-semibold text-sm whitespace-nowrap ml-3">
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Includes
              </h3>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  "Safe fish transport",
                  "Tank dismantling",
                  "Water preservation",
                  "Reinstallation & setup",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 text-sm text-blue-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.06 + 0.3 }}
                  >
                    <svg
                      className="w-4 h-4 text-green-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-white/10 bg-white/5 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 border border-white/20 text-white/70 text-sm rounded-lg hover:bg-white/10 transition-colors"
            >
              Close
            </button>
            <button className="flex-1 py-2.5 bg-white text-blue-900 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Contact Us
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function CoralQuoteModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <motion.div
          className="relative w-full max-w-lg bg-[#0d1f3c] border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        >
          <div className="bg-gradient-to-r from-pink-700 to-rose-500 px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-pink-200 text-xs font-medium uppercase tracking-widest mb-0.5">
                Quotation
              </p>
              <h2 className="text-white text-xl font-bold">
                Coral Frag & Propagation
              </h2>
              <p className="text-pink-100 text-sm mt-0.5">
                Starting Price: ₹25,000+
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors ml-4 flex-shrink-0"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="px-6 py-5 space-y-5 max-h-[70vh] overflow-y-auto">
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 inline-block" />
                Quotation Example
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Coral Frag Starter Pack", price: "₹25,000" },
                  { label: "Rare Coral Frag Collection", price: "₹45,000" },
                  {
                    label: "Custom Coral Propagation Setup",
                    price: "₹70,000+",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex justify-between items-center bg-white/5 border border-white/10 rounded-lg px-4 py-2.5"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.15 }}
                  >
                    <span className="text-blue-100 text-sm">{item.label}</span>
                    <span className="text-white font-semibold text-sm whitespace-nowrap ml-3">
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Includes
              </h3>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  "Coral cutting & propagation",
                  "Frag rack setup",
                  "Coral health monitoring",
                  "Water chemistry adjustment",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 text-sm text-blue-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.06 + 0.3 }}
                  >
                    <svg
                      className="w-4 h-4 text-green-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-white/10 bg-white/5 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 border border-white/20 text-white/70 text-sm rounded-lg hover:bg-white/10 transition-colors"
            >
              Close
            </button>
            <button className="flex-1 py-2.5 bg-white text-blue-900 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Contact Us
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const Services = () => {
  const [quoteOpen, setQuoteOpen] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch services from backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(
          `${API}/products?categories=69b216ed95339271039e5fff`,
        );
        const data = await res.json();
        // ✅ Map backend data + keep local images by order
        const mapped = data.map((item, index) => ({
          ...item,
          id: item._id,
          src: SERVICE_IMAGES[index] || "/service1.png",
        }));
        setServices(mapped);
      } catch (err) {
        console.error("Failed to fetch services:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <div
      className="min-h-screen text-white py-16 px-2"
      style={{
        background:
          "linear-gradient(160deg, #1a4fa0 0%, #1a3a7a 40%, #0f2550 100%)",
      }}
    >
      <div className="text-center mb-14 mt-20">
        <h1 className="text-4xl font-bold mb-3">Services</h1>
        <p className="text-blue-200 text-sm">
          Complete aquatic solutions crafted with precision and care.
        </p>
      </div>

      {loading && (
        <div className="text-center text-white/60 py-20">
          Loading services...
        </div>
      )}

      {!loading && services.length > 0 && (
        <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.id} className="text-center">
              <div className="overflow-hidden w-full rounded-2xl">
                <Image
                  src={service.src}
                  alt={service.name}
                  width={800}
                  height={650}
                  className="w-full h-[32rem] object-cover rounded-2xl"
                />
              </div>
              {/* ✅ name and description from backend */}
              <h3 className="mt-6 text-lg font-semibold">{service.name}</h3>
              <p className="text-blue-200 text-sm mt-2 px-4">
                {service.description}
              </p>
              <p className="mt-4 text-sm text-blue-300">STARTS AT</p>
              {/* ✅ price from backend */}
              <p className="text-xl font-bold">
                ₹{service.price.toLocaleString("en-IN")}+
              </p>
              <button
                onClick={() => {
                  if (service.name === "Custom Aquarium Design")
                    setQuoteOpen("custom");
                  else if (service.name === "Marine & Reef Setup")
                    setQuoteOpen("marine");
                  else if (service.name === "Maintenance & Cleaning")
                    setQuoteOpen("maintenance");
                  else if (service.name === "Aquarium Consultation")
                    setQuoteOpen("consultation");
                  else if (service.name === "Tank Relocation Services")
                    setQuoteOpen("relocation");
                  else if (service.name === "Coral Frag & Propagation")
                    setQuoteOpen("coral");
                }}
                className="mt-4 bg-white text-black text-sm px-6 py-2 rounded-md hover:bg-blue-100 transition"
              >
                Get a Quote
              </button>
            </div>
          ))}
        </div>
      )}

      {quoteOpen === "custom" && (
        <QuoteModal onClose={() => setQuoteOpen(null)} />
      )}
      {quoteOpen === "marine" && (
        <MarineQuoteModal onClose={() => setQuoteOpen(null)} />
      )}
      {quoteOpen === "maintenance" && (
        <MaintenanceQuoteModal onClose={() => setQuoteOpen(null)} />
      )}
      {quoteOpen === "consultation" && (
        <ConsultationQuoteModal onClose={() => setQuoteOpen(null)} />
      )}
      {quoteOpen === "relocation" && (
        <RelocationQuoteModal onClose={() => setQuoteOpen(null)} />
      )}
      {quoteOpen === "coral" && (
        <CoralQuoteModal onClose={() => setQuoteOpen(null)} />
      )}
    </div>
  );
};

export default Services;
