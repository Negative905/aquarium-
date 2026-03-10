'use client'

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    src: "/service1.png",
    alt: "Custom Aquarium Design",
    title: "Custom Aquarium Design",
    description: "We design fully customized aquariums that match your interior style, space dimensions, and personal vision — from concept to installation.",
    price: "₹25,000+",
    hasQuote: true,
  },
  {
    src: "/service2.png",
    alt: "Marine & Reef Setup",
    title: "Marine & Reef Setup",
    description: "Professional marine and reef installations with advanced filtration, lighting systems, and carefully selected marine species.",
    price: "₹50,000+",
    hasQuote: true,
  },
  {
    src: "/service3.png",
    alt: "Maintenance & Cleaning",
    title: "Maintenance & Cleaning",
    description: "Regular servicing, water testing, cleaning, and ecosystem balancing to ensure long-term health and beauty of your aquarium.",
    price: "₹10,000+",
    hasQuote: true,
  },
  {
    src: "/service4.png",
    alt: "Aquarium Consultation",
    title: "Aquarium Consultation",
    description: "Personalized consultation for aquarium planning, species selection, equipment upgrades, and problem-solving support.",
    price: "₹5,000+",
    hasQuote: true,
  },
  {
    src: "/service5.png",
    alt: "Tank Relocation Services",
    title: "Tank Relocation Services",
    description: "Professional dismantling, transport, and reinstallation services to ensure your aquatic life remains safe during relocation.",
    price: "₹25,000+",
    hasQuote: true,
  },
  {
    src: "/service6.png",
    alt: "Coral Frag & Propagation",
    title: "Coral Frag & Propagation",
    description: "Professional coral fragging and propagation to expand and maintain a healthy reef ecosystem.",
    price: "₹25,000+",
    hasQuote: true,
  },
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
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-lg bg-[#0d1f3c] border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-blue-200 text-xs font-medium uppercase tracking-widest mb-0.5">Quotation</p>
              <h2 className="text-white text-xl font-bold">Custom Aquarium Design</h2>
              <p className="text-blue-100 text-sm mt-0.5">Starting Price: ₹25,000+</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors ml-4 flex-shrink-0"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-6 py-5 space-y-5 max-h-[70vh] overflow-y-auto">

            {/* Quotation Examples */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                Quotation Example
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Basic Custom Glass Aquarium (3–4 ft)", price: "₹25,000 – ₹40,000" },
                  { label: "Premium Designer Aquarium (5–6 ft)", price: "₹40,000 – ₹80,000" },
                  { label: "Luxury Built-in Wall Aquarium", price: "₹80,000 – ₹2,50,000+" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex justify-between items-center bg-white/5 border border-white/10 rounded-lg px-4 py-2.5"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.15 }}
                  >
                    <span className="text-blue-100 text-sm">{item.label}</span>
                    <span className="text-white font-semibold text-sm whitespace-nowrap ml-3">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Includes */}
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
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Optional Add-ons */}
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
                    <span className="text-yellow-300 font-medium">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
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
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-lg bg-[#0d1f3c] border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-700 to-teal-500 px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-cyan-200 text-xs font-medium uppercase tracking-widest mb-0.5">Quotation</p>
              <h2 className="text-white text-xl font-bold">Marine & Reef Setup</h2>
              <p className="text-cyan-100 text-sm mt-0.5">Starting Price: ₹50,000+</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors ml-4 flex-shrink-0"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-6 py-5 space-y-5 max-h-[70vh] overflow-y-auto">

            {/* Quotation Examples */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
                Quotation Example
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Beginner Saltwater Setup", price: "₹50,000 – ₹90,000" },
                  { label: "Reef Aquarium Setup", price: "₹90,000 – ₹1,80,000" },
                  { label: "Advanced Coral Reef System", price: "₹1,80,000 – ₹4,00,000+" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex justify-between items-center bg-white/5 border border-white/10 rounded-lg px-4 py-2.5"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.15 }}
                  >
                    <span className="text-blue-100 text-sm">{item.label}</span>
                    <span className="text-white font-semibold text-sm whitespace-nowrap ml-3">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Includes */}
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
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
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
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-700 to-green-500 px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-emerald-200 text-xs font-medium uppercase tracking-widest mb-0.5">Quotation</p>
              <h2 className="text-white text-xl font-bold">Maintenance & Cleaning</h2>
              <p className="text-emerald-100 text-sm mt-0.5">Starting Price: ₹10,000+</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors ml-4 flex-shrink-0"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-6 py-5 space-y-5 max-h-[70vh] overflow-y-auto">

            {/* Quotation Examples */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                Quotation Example
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Monthly Maintenance (Small Tank)", price: "₹10,000" },
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
                    <span className="text-white font-semibold text-sm whitespace-nowrap ml-3">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Includes */}
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
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Optional */}
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
                    <span className="text-yellow-300 font-medium">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
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
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-700 to-purple-500 px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-violet-200 text-xs font-medium uppercase tracking-widest mb-0.5">Quotation</p>
              <h2 className="text-white text-xl font-bold">Aquarium Consultation</h2>
              <p className="text-violet-100 text-sm mt-0.5">Starting Price: ₹5,000+</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors ml-4 flex-shrink-0"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-6 py-5 space-y-5 max-h-[70vh] overflow-y-auto">

            {/* Quotation Examples */}
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
                    <span className="text-white font-semibold text-sm whitespace-nowrap ml-3">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Includes */}
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
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
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
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-700 to-amber-500 px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-orange-200 text-xs font-medium uppercase tracking-widest mb-0.5">Quotation</p>
              <h2 className="text-white text-xl font-bold">Tank Relocation Services</h2>
              <p className="text-orange-100 text-sm mt-0.5">Starting Price: ₹25,000+</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors ml-4 flex-shrink-0"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-6 py-5 space-y-5 max-h-[70vh] overflow-y-auto">

            {/* Quotation Examples */}
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
                    <span className="text-white font-semibold text-sm whitespace-nowrap ml-3">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Includes */}
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
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
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
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-700 to-rose-500 px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-pink-200 text-xs font-medium uppercase tracking-widest mb-0.5">Quotation</p>
              <h2 className="text-white text-xl font-bold">Coral Frag & Propagation</h2>
              <p className="text-pink-100 text-sm mt-0.5">Starting Price: ₹25,000+</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors ml-4 flex-shrink-0"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-6 py-5 space-y-5 max-h-[70vh] overflow-y-auto">

            {/* Quotation Examples */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 inline-block" />
                Quotation Example
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Coral Frag Starter Pack", price: "₹25,000" },
                  { label: "Rare Coral Frag Collection", price: "₹45,000" },
                  { label: "Custom Coral Propagation Setup", price: "₹70,000+" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex justify-between items-center bg-white/5 border border-white/10 rounded-lg px-4 py-2.5"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.15 }}
                  >
                    <span className="text-blue-100 text-sm">{item.label}</span>
                    <span className="text-white font-semibold text-sm whitespace-nowrap ml-3">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Includes */}
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
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
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
  const [quoteOpen, setQuoteOpen] = useState(null); // 'custom' | 'marine' | null

  return (
    <div className="min-h-screen text-white py-16 px-2" style={{ background: 'linear-gradient(160deg, #1a4fa0 0%, #1a3a7a 40%, #0f2550 100%)' }}>

      {/* Heading */}
      <div className="text-center mb-14 mt-20">
        <h1 className="text-4xl font-bold mb-3">Services</h1>
        <p className="text-blue-200 text-sm">
          Complete aquatic solutions crafted with precision and care.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service) => (
          <div key={service.title} className="text-center">
            <div className="overflow-hidden w-full rounded-2xl">
              <Image
                src={service.src}
                alt={service.alt}
                width={800}
                height={650}
                className="w-full h-[32rem] object-cover rounded-2xl"
              />
            </div>
            <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
            <p className="text-blue-200 text-sm mt-2 px-4">{service.description}</p>
            <p className="mt-4 text-sm text-blue-300">STARTS AT</p>
            <p className="text-xl font-bold">{service.price}</p>
            <button
              onClick={() => {
                if (service.title === "Custom Aquarium Design") setQuoteOpen("custom");
                else if (service.title === "Marine & Reef Setup") setQuoteOpen("marine");
                else if (service.title === "Maintenance & Cleaning") setQuoteOpen("maintenance");
                else if (service.title === "Aquarium Consultation") setQuoteOpen("consultation");
                else if (service.title === "Tank Relocation Services") setQuoteOpen("relocation");
                else if (service.title === "Coral Frag & Propagation") setQuoteOpen("coral");
              }}
              className="mt-4 bg-white text-black text-sm px-6 py-2 rounded-md hover:bg-blue-100 transition"
            >
              Get a Quote
            </button>
          </div>
        ))}
      </div>

      {/* Quote Modals */}
      {quoteOpen === "custom" && <QuoteModal onClose={() => setQuoteOpen(null)} />}
      {quoteOpen === "marine" && <MarineQuoteModal onClose={() => setQuoteOpen(null)} />}
      {quoteOpen === "maintenance" && <MaintenanceQuoteModal onClose={() => setQuoteOpen(null)} />}
      {quoteOpen === "consultation" && <ConsultationQuoteModal onClose={() => setQuoteOpen(null)} />}
      {quoteOpen === "relocation" && <RelocationQuoteModal onClose={() => setQuoteOpen(null)} />}
      {quoteOpen === "coral" && <CoralQuoteModal onClose={() => setQuoteOpen(null)} />}

    </div>
  );
};

export default Services;