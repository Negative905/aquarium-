'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white relative overflow-x-hidden">

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
            animate={{ y: [0, -1800], opacity: [0, 0.7, 0] }}
            transition={{ duration: b.duration, repeat: Infinity, delay: b.delay, ease: 'linear' }}
          />
        ))}

        {/* ── Swimming Fish ── */}

        {/* Fish 1 — blue, left to right */}
        <motion.div
          className="absolute"
          style={{ top: '18%', left: '-80px' }}
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
          style={{ top: '32%', right: '-80px' }}
          animate={{ x: ['0px', 'calc(-100vw - 100px)'] }}
          transition={{ duration: 28, repeat: Infinity, delay: 6, ease: 'linear' }}
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
          style={{ top: '62%', left: '-60px' }}
          animate={{ x: ['0px', 'calc(100vw + 80px)'] }}
          transition={{ duration: 18, repeat: Infinity, delay: 10, ease: 'linear' }}
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
          style={{ top: '50%', right: '-70px' }}
          animate={{ x: ['0px', 'calc(-100vw - 90px)'] }}
          transition={{ duration: 25, repeat: Infinity, delay: 14, ease: 'linear' }}
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
          style={{ top: '8%', left: '-50px' }}
          animate={{ x: ['0px', 'calc(100vw + 70px)'] }}
          transition={{ duration: 20, repeat: Infinity, delay: 18, ease: 'linear' }}
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
      <div className="relative z-10 pt-16">

        {/* ── HERO ── */}
        <section className="py-16 text-center px-4">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-white mb-3"
            style={{ fontFamily: 'Georgia, serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-[#8fa8c0] text-sm sm:text-base tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Crafting refined aquatic environments with precision, passion and purpose
          </motion.p>
        </section>

        {/* ── INTRO ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[#b0c4d8] text-sm sm:text-base leading-relaxed">
                Ocean Crown was created with a vision to transform ordinary spaces into extraordinary aquatic experiences.
                We specialize in designing custom aquariums that combine elegance, innovation, and natural harmony.
              </p>
              <p className="text-[#b0c4d8] text-sm sm:text-base leading-relaxed">
                With a deep passion for marine life and precision craftsmanship, our team creates underwater ecosystems
                that are not only visually stunning but also scientifically balanced. Every aquarium we build reflects our
                commitment to quality, sustainability, and long-term care.
              </p>
            </motion.div>
            <motion.div
              className="relative h-72 sm:h-80 rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image src="/about-us1.png" alt="Koi fish in crystal aquarium" fill className="object-cover" />
            </motion.div>
          </div>
        </section>

        {/* ── VISION & MISSION ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-stretch gap-20">
            <motion.div
              className="relative h-72 md:h-auto min-h-[500px] overflow-hidden rounded-2xl"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image src="/about-us2.png" alt="Coral reef" fill className="object-cover" />
            </motion.div>
            <motion.div
              className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-12 py-12 items-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Our Vision
                </h3>
                <p className="text-[#8fa8c0] text-sm leading-relaxed">
                  To become a leading name in luxury aquarium design by setting new standards in
                  creativity, innovation, and sustainable aquatic practices.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Our Mission
                </h3>
                <p className="text-[#8fa8c0] text-sm leading-relaxed">
                  To design, install, and maintain elegant aquatic environments that inspire calmness and
                  sophistication in homes and businesses alike.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── WHAT MAKES US DIFFERENT ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                What Makes Us Different
              </h2>
              <ul className="space-y-4">
                {[
                  'Tailor-made aquarium designs',
                  'Advanced filtration & life-support systems',
                  'Expert marine care specialists',
                  'Premium quality materials',
                  'Dedicated maintenance support',
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3 text-[#b0c4d8] text-sm sm:text-base"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="text-cyan-400 text-lg leading-tight mt-0.5">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="relative h-80 sm:h-96 rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image src="/about-us3.png" alt="Colorful tropical fish" fill className="object-cover" />
            </motion.div>
          </div>
        </section>

        {/* ── OUR COMMITMENT ── */}
        <section className="py-20 px-4 text-center pb-28">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: 'Georgia, serif' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Our Commitment
          </motion.h2>
          <motion.p
            className="text-[#8fa8c0] text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            From concept to installation and beyond, Ocean Crown ensures that every detail is handled with care.
          </motion.p>
          <motion.p
            className="text-[#8fa8c0] text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Our goal is not just to create aquariums — but to craft immersive underwater experiences that last for years.
          </motion.p>
        </section>

      </div>
    </div>
  )
}