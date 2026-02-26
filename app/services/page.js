'use client'

import Image from "next/image";

const Services = () => {
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
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="text-center">
          <div className="overflow-hidden w-full">
            <Image
              src="/service1.png"
              alt="Custom Aquarium Design"
              width={800}
              height={650}
              className="w-full h-[32rem] object-contain"
            />
          </div>
          <h3 className="mt-6 text-lg font-semibold">
            Custom Aquarium Design
          </h3>
          <p className="text-blue-200 text-sm mt-2 px-4">
            We design fully customized aquariums that match your interior style,
            space dimensions, and personal vision — from concept to installation.
          </p>
          <p className="mt-4 text-sm text-blue-300">STARTS AT</p>
          <p className="text-xl font-bold">₹25,000+</p>
          <button className="mt-4 bg-white text-black text-sm px-6 py-2 rounded-md hover:bg-blue-100 transition">
            Get a Quote
          </button>
        </div>

        {/* Card 2 */}
        <div className="text-center">
          <div className="overflow-hidden w-full">
            <Image
              src="/service2.png"
              alt="Marine & Reef Setup"
              width={800}
              height={650}
              className="w-full h-[32rem] object-contain"
            />
          </div>
          <h3 className="mt-6 text-lg font-semibold">
            Marine & Reef Setup
          </h3>
          <p className="text-blue-200 text-sm mt-2 px-4">
            Professional marine and reef installations with advanced filtration,
            lighting systems, and carefully selected marine species.
          </p>
          <p className="mt-4 text-sm text-blue-300">STARTS AT</p>
          <p className="text-xl font-bold">₹50,000+</p>
          <button className="mt-4 bg-white text-black text-sm px-6 py-2 rounded-md hover:bg-blue-100 transition">
            Get a Quote
          </button>
        </div>

        {/* Card 3 */}
        <div className="text-center">
          <div className="overflow-hidden w-full">
            <Image
              src="/service3.png"
              alt="Maintenance & Cleaning"
              width={800}
              height={650}
              className="w-full h-[32rem] object-contain"
            />
          </div>
          <h3 className="mt-6 text-lg font-semibold">
            Maintenance & Cleaning
          </h3>
          <p className="text-blue-200 text-sm mt-2 px-4">
            Regular servicing, water testing, cleaning, and ecosystem balancing
            to ensure long-term health and beauty of your aquarium.
          </p>
          <p className="mt-4 text-sm text-blue-300">STARTS AT</p>
          <p className="text-xl font-bold">₹10,000+</p>
          <button className="mt-4 bg-white text-black text-sm px-6 py-2 rounded-md hover:bg-blue-100 transition">
            Get a Quote
          </button>
        </div>

        {/* Card 4 */}
        <div className="text-center">
          <div className="overflow-hidden w-full">
            <Image
              src="/service4.png"
              alt="Aquarium Consultation"
              width={800}
              height={650}
              className="w-full h-[32rem] object-contain"
            />
          </div>
          <h3 className="mt-6 text-lg font-semibold">
            Aquarium Consultation
          </h3>
          <p className="text-blue-200 text-sm mt-2 px-4">
            Personalized consultation for aquarium planning, species selection,
            equipment upgrades, and problem-solving support.
          </p>
          <p className="mt-4 text-sm text-blue-300">STARTS AT</p>
          <p className="text-xl font-bold">₹25,000+</p>
          <button className="mt-4 bg-white text-black text-sm px-6 py-2 rounded-md hover:bg-blue-100 transition">
            Get a Quote
          </button>
        </div>

        {/* Card 5 */}
        <div className="text-center">
          <div className="overflow-hidden w-full">
            <Image
              src="/service5.png"
              alt="Tank Relocation Services"
              width={800}
              height={650}
              className="w-full h-[32rem] object-contain"
            />
          </div>
          <h3 className="mt-6 text-lg font-semibold">
            Tank Relocation Services
          </h3>
          <p className="text-blue-200 text-sm mt-2 px-4">
            Professional dismantling, transport, and reinstallation services
            to ensure your aquatic life remains safe during relocation.
          </p>
          <p className="mt-4 text-sm text-blue-300">STARTS AT</p>
          <p className="text-xl font-bold">₹25,000+</p>
          <button className="mt-4 bg-white text-black text-sm px-6 py-2 rounded-md hover:bg-blue-100 transition">
            Get a Quote
          </button>
        </div>

        {/* Card 6 */}
        <div className="text-center">
          <div className="overflow-hidden w-full">
            <Image
              src="/service6.png"
              alt="Coral Frag & Propagation"
              width={800}
              height={650}
              className="w-full h-[32rem] object-contain"
            />
          </div>
          <h3 className="mt-6 text-lg font-semibold">
            Coral Frag & Propagation
          </h3>
          <p className="text-blue-200 text-sm mt-2 px-4">
            Professional coral fragging and propagation to expand and maintain
            a healthy reef ecosystem.
          </p>
          <p className="mt-4 text-sm text-blue-300">STARTS AT</p>
          <p className="text-xl font-bold">₹25,000+</p>
          <button className="mt-4 bg-white text-black text-sm px-6 py-2 rounded-md hover:bg-blue-100 transition">
            Get a Quote
          </button>
        </div>

      </div>
    </div>
  );
};

export default Services;