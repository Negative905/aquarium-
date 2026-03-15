"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const API = process.env.NEXT_PUBLIC_API_URL;

const SERVICE_IMAGES = [
  "/service1.png",
  "/service2.png",
  "/service3.png",
  "/service4.png",
  "/service5.png",
  "/service6.png",
];

// ── Reusable Modal Shell ────────────────────────────────────────────────────
function QuoteModalShell({ onClose, headerGradient, accentColor, title, startingPrice, children }) {
  const router = useRouter();
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        />
        <motion.div
          className="relative w-full max-w-lg bg-[#0d1f3c] border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        >
          <div className={`bg-gradient-to-r ${headerGradient} px-6 py-5 flex items-center justify-between`}>
            <div>
              <p className={`text-${accentColor}-200 text-xs font-medium uppercase tracking-widest mb-0.5`}>
                Quotation
              </p>
              <h2 className="text-white text-xl font-bold">{title}</h2>
              <p className={`text-${accentColor}-100 text-sm mt-0.5`}>Starting Price: {startingPrice}</p>
            </div>
            <button onClick={onClose} className="text-white/60 hover:text-white transition-colors ml-4 flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-6 py-5 space-y-5 max-h-[70vh] overflow-y-auto">
            {children}
          </div>
          <div className="px-6 py-4 border-t border-white/10 bg-white/5 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 border border-white/20 text-white/70 text-sm rounded-lg hover:bg-white/10 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => { onClose(); router.push("/contact"); }}
              className="flex-1 py-2.5 bg-white text-blue-900 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function QuoteRows({ items, dotColor }) {
  return (
    <div>
      <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
        <span className={`w-1.5 h-1.5 rounded-full bg-${dotColor}-400 inline-block`} />
        Quotation Example
      </h3>
      <div className="space-y-2">
        {items.map((item, i) => (
          <motion.div key={i}
            className="flex justify-between items-center bg-white/5 border border-white/10 rounded-lg px-4 py-2.5"
            initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07 + 0.15 }}
          >
            <span className="text-blue-100 text-sm">{item.label}</span>
            <span className="text-white font-semibold text-sm whitespace-nowrap ml-3">{item.price}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function IncludesList({ items }) {
  return (
    <div>
      <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
        Includes
      </h3>
      <div className="grid grid-cols-2 gap-1.5">
        {items.map((item, i) => (
          <motion.div key={i} className="flex items-center gap-2 text-sm text-blue-100"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
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
  );
}

function AddonsList({ items }) {
  return (
    <div>
      <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />
        Optional Add-ons
      </h3>
      <div className="space-y-1.5">
        {items.map((item, i) => (
          <motion.div key={i} className="flex justify-between items-center text-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: i * 0.07 + 0.45 }}
          >
            <span className="text-blue-200 flex items-center gap-2">
              <span className="text-yellow-400">+</span>{item.label}
            </span>
            <span className="text-yellow-300 font-medium">{item.price}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function QuoteModal({ onClose }) {
  return (
    <QuoteModalShell onClose={onClose} headerGradient="from-blue-700 to-blue-500"
      accentColor="blue" title="Custom Aquarium Design" startingPrice="₹25,000+">
      <QuoteRows dotColor="blue" items={[
        { label: "Basic Custom Glass Aquarium (3–4 ft)", price: "₹25,000 – ₹40,000" },
        { label: "Premium Designer Aquarium (5–6 ft)", price: "₹40,000 – ₹80,000" },
        { label: "Luxury Built-in Wall Aquarium", price: "₹80,000 – ₹2,50,000+" },
      ]} />
      <IncludesList items={["Aquarium tank design", "Cabinet & stand", "LED lighting", "Basic filtration system", "Installation"]} />
      <AddonsList items={[
        { label: "Imported décor", price: "₹5,000+" },
        { label: "Automatic feeder", price: "₹3,000+" },
        { label: "Smart lighting system", price: "₹8,000+" },
      ]} />
    </QuoteModalShell>
  );
}

function MarineQuoteModal({ onClose }) {
  return (
    <QuoteModalShell onClose={onClose} headerGradient="from-cyan-700 to-teal-500"
      accentColor="cyan" title="Marine & Reef Setup" startingPrice="₹50,000+">
      <QuoteRows dotColor="cyan" items={[
        { label: "Beginner Saltwater Setup", price: "₹50,000 – ₹90,000" },
        { label: "Reef Aquarium Setup", price: "₹90,000 – ₹1,80,000" },
        { label: "Advanced Coral Reef System", price: "₹1,80,000 – ₹4,00,000+" },
      ]} />
      <IncludesList items={["Marine aquarium tank", "Protein skimmer", "Marine lighting", "Live rock & sand", "Water testing kit", "Initial fish & coral setup"]} />
    </QuoteModalShell>
  );
}

function MaintenanceQuoteModal({ onClose }) {
  return (
    <QuoteModalShell onClose={onClose} headerGradient="from-emerald-700 to-green-500"
      accentColor="emerald" title="Maintenance & Cleaning" startingPrice="₹10,000+">
      <QuoteRows dotColor="emerald" items={[
        { label: "Monthly Maintenance (Small Tank)", price: "₹10,000" },
        { label: "Medium Tank Maintenance", price: "₹15,000" },
        { label: "Large Aquarium Maintenance", price: "₹20,000+" },
      ]} />
      <IncludesList items={["Water change", "Glass cleaning", "Filter maintenance", "Fish health check", "Water parameter testing"]} />
      <AddonsList items={[
        { label: "Emergency visit", price: "₹2,000" },
        { label: "Algae treatment", price: "₹1,500" },
      ]} />
    </QuoteModalShell>
  );
}

function ConsultationQuoteModal({ onClose }) {
  return (
    <QuoteModalShell onClose={onClose} headerGradient="from-violet-700 to-purple-500"
      accentColor="violet" title="Aquarium Consultation" startingPrice="₹5,000+">
      <QuoteRows dotColor="violet" items={[
        { label: "Online Consultation", price: "₹5,000" },
        { label: "On-site Expert Visit", price: "₹8,000" },
        { label: "Full Aquarium Planning Session", price: "₹15,000" },
      ]} />
      <IncludesList items={["Aquarium size recommendation", "Fish compatibility guidance", "Equipment suggestions", "Budget planning"]} />
    </QuoteModalShell>
  );
}

function RelocationQuoteModal({ onClose }) {
  return (
    <QuoteModalShell onClose={onClose} headerGradient="from-orange-700 to-amber-500"
      accentColor="orange" title="Tank Relocation Services" startingPrice="₹25,000+">
      <QuoteRows dotColor="orange" items={[
        { label: "Small Aquarium Relocation", price: "₹25,000" },
        { label: "Medium Aquarium Relocation", price: "₹35,000" },
        { label: "Large Aquarium Relocation", price: "₹50,000+" },
      ]} />
      <IncludesList items={["Safe fish transport", "Tank dismantling", "Water preservation", "Reinstallation & setup"]} />
    </QuoteModalShell>
  );
}

function CoralQuoteModal({ onClose }) {
  return (
    <QuoteModalShell onClose={onClose} headerGradient="from-pink-700 to-rose-500"
      accentColor="pink" title="Coral Frag & Propagation" startingPrice="₹25,000+">
      <QuoteRows dotColor="pink" items={[
        { label: "Coral Frag Starter Pack", price: "₹25,000" },
        { label: "Rare Coral Frag Collection", price: "₹45,000" },
        { label: "Custom Coral Propagation Setup", price: "₹70,000+" },
      ]} />
      <IncludesList items={["Coral cutting & propagation", "Frag rack setup", "Coral health monitoring", "Water chemistry adjustment"]} />
    </QuoteModalShell>
  );
}

// ── Main Page ───────────────────────────────────────────────────────────────
const Services = () => {
  const [quoteOpen, setQuoteOpen] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${API}/products?categories=69b216ed95339271039e5fff`);
        const data = await res.json();
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

  const getQuoteKey = (name) => {
    if (name === "Custom Aquarium Design") return "custom";
    if (name === "Marine & Reef Setup") return "marine";
    if (name === "Maintenance & Cleaning") return "maintenance";
    if (name === "Aquarium Consultation") return "consultation";
    if (name === "Tank Relocation Services") return "relocation";
    if (name === "Coral Frag & Propagation") return "coral";
    return null;
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">

      {/* ── Ocean Background ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #0a2a6e 0%, #0d3580 20%, #0a4a9e 50%, #063070 80%, #051a40 100%)',
        }}
      />

      {/* ── Background Effects ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Light rays */}
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-full"
          style={{
            background: 'linear-gradient(180deg, rgba(100,180,255,0.08) 0%, transparent 60%)',
            transform: 'skewX(-15deg)',
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-0 left-1/2 w-48 h-full"
          style={{
            background: 'linear-gradient(180deg, rgba(100,180,255,0.06) 0%, transparent 50%)',
            transform: 'skewX(10deg)',
          }}
          animate={{ opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-56 h-full"
          style={{
            background: 'linear-gradient(180deg, rgba(80,160,255,0.06) 0%, transparent 55%)',
            transform: 'skewX(-8deg)',
          }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Bubbles */}
        {[
          { left: '8%', size: 10, delay: 0, duration: 8 },
          { left: '20%', size: 6, delay: 1.5, duration: 6 },
          { left: '35%', size: 14, delay: 3, duration: 10 },
          { left: '55%', size: 8, delay: 0.8, duration: 7 },
          { left: '70%', size: 12, delay: 2, duration: 9 },
          { left: '85%', size: 7, delay: 4, duration: 6.5 },
          { left: '92%', size: 10, delay: 1, duration: 8.5 },
          { left: '14%', size: 5, delay: 5, duration: 7.5 },
          { left: '47%', size: 9, delay: 2.5, duration: 11 },
          { left: '78%', size: 6, delay: 3.5, duration: 9 },
        ].map((b, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: b.left,
              bottom: '-20px',
              width: b.size,
              height: b.size,
              background: 'rgba(150,200,255,0.25)',
              border: '1px solid rgba(150,210,255,0.4)',
            }}
            animate={{ y: [0, -900], opacity: [0, 0.7, 0] }}
            transition={{ duration: b.duration, repeat: Infinity, delay: b.delay, ease: 'linear' }}
          />
        ))}

        {/* ── Swimming Fish ── */}

        {/* Fish 1 — blue, left to right */}
        <motion.div
          className="absolute"
          style={{ top: '12%', left: '-80px' }}
          animate={{ x: ['0px', 'calc(100vw + 100px)'] }}
          transition={{ duration: 22, repeat: Infinity, delay: 2, ease: 'linear' }}
        >
          <svg viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="28" className="opacity-70">
            <path d="M4 18 L16 8 L16 28 Z" fill="#4a90d9" opacity="0.8"/>
            <ellipse cx="36" cy="18" rx="22" ry="12" fill="#5aabf0"/>
            <ellipse cx="36" cy="18" rx="22" ry="12" fill="none" stroke="#3a80c0" strokeWidth="0.8"/>
            <path d="M24 10 Q28 5 34 10" stroke="#3a80c0" strokeWidth="1.2" fill="#4a90d9" opacity="0.7"/>
            <path d="M26 26 Q30 31 35 26" stroke="#3a80c0" strokeWidth="1.2" fill="#4a90d9" opacity="0.6"/>
            <circle cx="52" cy="14" r="4" fill="white"/>
            <circle cx="53" cy="14" r="2.5" fill="#1a2a4a"/>
            <circle cx="54" cy="13" r="0.8" fill="white"/>
            <path d="M26 14 Q32 12 40 14" stroke="#3a80c0" strokeWidth="0.8" opacity="0.5"/>
            <path d="M24 18 Q32 16 42 18" stroke="#3a80c0" strokeWidth="0.8" opacity="0.4"/>
          </svg>
        </motion.div>

        {/* Fish 2 — orange, right to left */}
        <motion.div
          className="absolute"
          style={{ top: '28%', right: '-80px' }}
          animate={{ x: ['0px', 'calc(-100vw - 100px)'] }}
          transition={{ duration: 28, repeat: Infinity, delay: 5, ease: 'linear' }}
        >
          <svg viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="26" className="opacity-65" style={{ transform: 'scaleX(-1)' }}>
            <path d="M4 18 L16 8 L16 28 Z" fill="#e07020" opacity="0.8"/>
            <ellipse cx="36" cy="18" rx="22" ry="11" fill="#f08030"/>
            <path d="M22 9 Q28 4 34 9" stroke="#c05010" strokeWidth="1.2" fill="#e07020" opacity="0.7"/>
            <path d="M24 27 Q30 32 35 27" stroke="#c05010" strokeWidth="1.2" fill="#e07020" opacity="0.6"/>
            <path d="M28 12 Q32 18 28 24" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M34 11 Q38 18 34 25" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="52" cy="14" r="4" fill="white"/>
            <circle cx="53" cy="14" r="2.5" fill="#1a1a1a"/>
            <circle cx="54" cy="13" r="0.8" fill="white"/>
          </svg>
        </motion.div>

        {/* Fish 3 — green, left to right */}
        <motion.div
          className="absolute"
          style={{ top: '55%', left: '-60px' }}
          animate={{ x: ['0px', 'calc(100vw + 80px)'] }}
          transition={{ duration: 18, repeat: Infinity, delay: 9, ease: 'linear' }}
        >
          <svg viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="22" className="opacity-60">
            <path d="M3 15 L12 6 L12 24 Z" fill="#3aaa70" opacity="0.8"/>
            <ellipse cx="28" cy="15" rx="18" ry="9" fill="#4acc84"/>
            <path d="M18 8 Q22 3 27 8" stroke="#2a8a55" strokeWidth="1" fill="#3aaa70" opacity="0.7"/>
            <circle cx="41" cy="11" r="3.5" fill="white"/>
            <circle cx="42" cy="11" r="2" fill="#1a2a1a"/>
            <circle cx="43" cy="10" r="0.7" fill="white"/>
          </svg>
        </motion.div>

        {/* Fish 4 — purple, right to left */}
        <motion.div
          className="absolute"
          style={{ top: '42%', right: '-70px' }}
          animate={{ x: ['0px', 'calc(-100vw - 90px)'] }}
          transition={{ duration: 25, repeat: Infinity, delay: 13, ease: 'linear' }}
        >
          <svg viewBox="0 0 56 34" fill="none" xmlns="http://www.w3.org/2000/svg" width="42" height="25" className="opacity-55" style={{ transform: 'scaleX(-1)' }}>
            <path d="M3 17 L14 7 L14 27 Z" fill="#7060c0" opacity="0.8"/>
            <ellipse cx="32" cy="17" rx="20" ry="11" fill="#8878d8"/>
            <path d="M22 9 Q27 4 32 9" stroke="#5848a8" strokeWidth="1.2" fill="#7060c0" opacity="0.7"/>
            <path d="M24 25 Q28 30 33 25" stroke="#5848a8" strokeWidth="1.2" fill="#7060c0" opacity="0.6"/>
            <circle cx="47" cy="13" r="3.5" fill="white"/>
            <circle cx="48" cy="13" r="2" fill="#1a1a2a"/>
            <circle cx="49" cy="12" r="0.7" fill="white"/>
          </svg>
        </motion.div>

        {/* Fish 5 — yellow, left to right near top */}
        <motion.div
          className="absolute"
          style={{ top: '70%', left: '-50px' }}
          animate={{ x: ['0px', 'calc(100vw + 70px)'] }}
          transition={{ duration: 20, repeat: Infinity, delay: 17, ease: 'linear' }}
        >
          <svg viewBox="0 0 44 28" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="20" className="opacity-55">
            <path d="M3 14 L11 6 L11 22 Z" fill="#d0a020" opacity="0.8"/>
            <ellipse cx="26" cy="14" rx="17" ry="9" fill="#f0c030"/>
            <path d="M17 7 Q21 2 26 7" stroke="#a08010" strokeWidth="1" fill="#d0a020" opacity="0.7"/>
            <circle cx="38" cy="10" r="3" fill="white"/>
            <circle cx="39" cy="10" r="1.8" fill="#1a1a00"/>
            <circle cx="40" cy="9" r="0.6" fill="white"/>
          </svg>
        </motion.div>

        {/* Seaweed bottom-left */}
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-64 sm:h-72 opacity-90">
          <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M30 280 Q20 220 40 180 Q55 140 35 100 Q20 60 45 30" stroke="#2d7a4f" strokeWidth="4" fill="none" strokeLinecap="round"/>
            <path d="M35 200 Q10 185 15 160 Q20 140 35 150" stroke="#2d7a4f" strokeWidth="3" fill="#2d7a4f" fillOpacity="0.4"/>
            <path d="M38 160 Q60 145 58 120 Q56 100 40 110" stroke="#3a9060" strokeWidth="3" fill="#3a9060" fillOpacity="0.4"/>
            <path d="M36 120 Q15 108 18 85 Q21 65 36 78" stroke="#2d7a4f" strokeWidth="3" fill="#2d7a4f" fillOpacity="0.35"/>
            <path d="M70 280 Q65 230 80 195 Q92 160 75 125 Q62 95 80 65" stroke="#4aab70" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
            <path d="M77 210 Q55 198 58 175 Q61 158 77 168" stroke="#4aab70" strokeWidth="2.5" fill="#4aab70" fillOpacity="0.4"/>
            <path d="M78 168 Q98 152 95 130 Q92 112 78 122" stroke="#3a9060" strokeWidth="2.5" fill="#3a9060" fillOpacity="0.4"/>
            <path d="M110 280 Q108 245 120 215 Q130 185 115 155" stroke="#5bc080" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M118 230 Q140 218 138 198 Q136 182 118 192" stroke="#5bc080" strokeWidth="2" fill="#5bc080" fillOpacity="0.35"/>
            <path d="M15 280 Q10 255 18 235 Q25 215 15 195" stroke="#6060c0" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M16 250 Q-2 238 0 220 Q2 206 16 214" stroke="#6060c0" strokeWidth="2" fill="#6060c0" fillOpacity="0.4"/>
            <path d="M17 215 Q32 202 30 186 Q28 173 17 181" stroke="#7070d0" strokeWidth="2" fill="#7070d0" fillOpacity="0.35"/>
            <path d="M145 280 Q142 260 148 245" stroke="#a05030" strokeWidth="3" fill="none"/>
            <path d="M148 245 Q140 230 144 218 Q148 208 155 215 Q162 222 158 235 Q155 245 148 245" stroke="#c06040" strokeWidth="2" fill="#c06040" fillOpacity="0.5"/>
          </svg>
        </div>

        {/* Seaweed bottom-right */}
        <div className="absolute bottom-0 right-0 w-48 sm:w-72 h-64 sm:h-80 opacity-90">
          <svg viewBox="0 0 220 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M190 300 Q195 245 178 205 Q164 168 182 130 Q196 95 175 60" stroke="#2d7a4f" strokeWidth="4" fill="none" strokeLinecap="round"/>
            <path d="M182 220 Q205 206 202 182 Q199 163 182 173" stroke="#2d7a4f" strokeWidth="3" fill="#2d7a4f" fillOpacity="0.4"/>
            <path d="M180 175 Q160 160 163 138 Q166 118 180 130" stroke="#3a9060" strokeWidth="3" fill="#3a9060" fillOpacity="0.4"/>
            <path d="M178 130 Q200 115 197 92 Q194 73 178 85" stroke="#2d7a4f" strokeWidth="3" fill="#2d7a4f" fillOpacity="0.35"/>
            <path d="M155 300 Q158 250 142 212 Q128 178 148 142" stroke="#4aab70" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
            <path d="M145 228 Q122 215 125 192 Q128 174 145 185" stroke="#4aab70" strokeWidth="2.5" fill="#4aab70" fillOpacity="0.4"/>
            <path d="M147 185 Q168 168 164 146 Q161 128 147 140" stroke="#3a9060" strokeWidth="2.5" fill="#3a9060" fillOpacity="0.4"/>
            <path d="M115 300 Q112 262 125 230 Q136 200 120 168" stroke="#5bc080" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M122 248 Q144 234 141 213 Q139 196 122 207" stroke="#5bc080" strokeWidth="2" fill="#5bc080" fillOpacity="0.35"/>
            <path d="M210 300 Q214 270 206 248 Q198 228 208 208" stroke="#6060c0" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M207 262 Q225 248 222 230 Q219 215 207 224" stroke="#6060c0" strokeWidth="2" fill="#6060c0" fillOpacity="0.4"/>
          </svg>
        </div>

        {/* Rocks */}
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <ellipse cx="120" cy="60" rx="90" ry="18" fill="#1a2a3a" opacity="0.9"/>
            <ellipse cx="280" cy="62" rx="70" ry="15" fill="#152030" opacity="0.85"/>
            <ellipse cx="420" cy="60" rx="55" ry="14" fill="#1a2a3a" opacity="0.8"/>
            <ellipse cx="600" cy="63" rx="80" ry="16" fill="#152030" opacity="0.9"/>
            <ellipse cx="780" cy="61" rx="65" ry="15" fill="#1a2a3a" opacity="0.85"/>
            <ellipse cx="950" cy="62" rx="75" ry="16" fill="#152030" opacity="0.8"/>
            <ellipse cx="1120" cy="60" rx="60" ry="14" fill="#1a2a3a" opacity="0.9"/>
            <ellipse cx="1300" cy="63" rx="85" ry="17" fill="#152030" opacity="0.85"/>
          </svg>
        </div>
      </div>

      {/* ── Page Content ── */}
      <div className="relative z-10 py-16 px-4 sm:px-6">
        <div className="text-center mb-14 mt-10">
          <h1 className="text-4xl font-bold mb-3">Services</h1>
          <p className="text-blue-200 text-sm">
            Complete aquatic solutions crafted with precision and care.
          </p>
        </div>

        {loading && (
          <div className="text-center text-white/60 py-20">Loading services...</div>
        )}

        {!loading && services.length > 0 && (
          <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pb-24">
            {services.map((service) => (
              <div key={service.id} className="text-center">
                <div className="overflow-hidden w-full rounded-2xl">
                  <Image
                    src={service.src}
                    alt={service.name}
                    width={800}
                    height={650}
                    className="w-full h-[32rem] object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{service.name}</h3>
                <p className="text-blue-200 text-sm mt-2 px-4">{service.description}</p>
                <p className="mt-4 text-sm text-blue-300">STARTS AT</p>
                <p className="text-xl font-bold">₹{service.price.toLocaleString("en-IN")}+</p>
                <button
                  onClick={() => setQuoteOpen(getQuoteKey(service.name))}
                  className="mt-4 bg-white text-black text-sm px-6 py-2 rounded-md hover:bg-blue-100 transition"
                >
                  Get a Quote
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

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