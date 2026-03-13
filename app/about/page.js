'use client'

import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180.8deg,#065EB6_0.68%,#000C18_99.32%)] overflow-x-hidden">

      <div className="pt-16">

        {/* ── HERO ── */}
        <section className="py-16 text-center px-4">
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-3"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            About Us
          </h1>
          <p className="text-[#8fa8c0] text-sm sm:text-base tracking-wide">
            Crafting refined aquatic environments with precision , passion and purpose
          </p>
        </section>

        {/* ── INTRO ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <p className="text-[#b0c4d8] text-sm sm:text-base leading-relaxed">
                Ocean Crown was created with a vision to transform ordinary spaces into extraordinary aquatic experiences.
                We specialize in designing custom aquariums that combine elegance, innovation, and natural harmony.
              </p>
              <p className="text-[#b0c4d8] text-sm sm:text-base leading-relaxed">
                With a deep passion for marine life and precision craftsmanship, our team creates underwater ecosystems
                that are not only visually stunning but also scientifically balanced. Every aquarium we build reflects our
                commitment to quality, sustainability, and long-term care.
              </p>
            </div>
            <div className="relative h-72 sm:h-80 rounded-lg overflow-hidden">
              <Image
                src="/about-us1.png"
                alt="Koi fish in crystal aquarium"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── VISION & MISSION ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-stretch gap-0">

            {/* Coral Image */}
            <div className="relative h-72 md:h-auto min-h-[500px] overflow-hidden rounded-2xl">
              <Image
                src="/about-us2.png"
                alt="Coral reef"
                fill
                className="object-cover"
              />
            </div>

            {/* Vision + Mission Text */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-12 py-12 items-center">
              <div>
                <h3
                  className="text-xl font-semibold text-white mb-4"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Our Vision
                </h3>
                <p className="text-[#8fa8c0] text-sm leading-relaxed">
                  To become a leading name in luxury aquarium design by setting new standards in
                  creativity, innovation, and sustainable aquatic practices.
                </p>
              </div>
              <div>
                <h3
                  className="text-xl font-semibold text-white mb-4"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Our Mission
                </h3>
                <p className="text-[#8fa8c0] text-sm leading-relaxed">
                  To design, install, and maintain elegant aquatic environments that inspire calmness and
                  sophistication in homes and businesses alike.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── WHAT MAKES US DIFFERENT ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-8"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                What Makes Us Different
              </h2>
              <ul className="space-y-4">
                {[
                  'Tailor-made aquarium designs',
                  'Advanced filtration & life-support systems',
                  'Expert marine care specialists',
                  'Premium quality materials',
                  'Dedicated maintenance support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#b0c4d8] text-sm sm:text-base">
                    <span className="text-cyan-400 text-lg leading-tight mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden">
              <Image
                src="/about-us3.png"
                alt="Colorful tropical fish"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </section>

        {/* ── OUR COMMITMENT ── */}
        <section className="py-20 px-4 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Our Commitment
          </h2>
          <p className="text-[#8fa8c0] text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-4">
            From concept to installation and beyond, Ocean Crown ensures that every detail is handled with care.
          </p>
          <p className="text-[#8fa8c0] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Our goal is not just to create aquariums — but to craft immersive underwater experiences that last for years.
          </p>
        </section>

      </div>
    </div>
  )
}