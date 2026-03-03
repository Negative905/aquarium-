'use client'

import Image from "next/image";

const services = [
  {
    src: "/service1.png",
    alt: "Custom Aquarium Design",
    title: "Custom Aquarium Design",
    description: "We design fully customized aquariums that match your interior style, space dimensions, and personal vision — from concept to installation.",
    price: "₹25,000+",
  },
  {
    src: "/service2.png",
    alt: "Marine & Reef Setup",
    title: "Marine & Reef Setup",
    description: "Professional marine and reef installations with advanced filtration, lighting systems, and carefully selected marine species.",
    price: "₹50,000+",
  },
  {
    src: "/service3.png",
    alt: "Maintenance & Cleaning",
    title: "Maintenance & Cleaning",
    description: "Regular servicing, water testing, cleaning, and ecosystem balancing to ensure long-term health and beauty of your aquarium.",
    price: "₹10,000+",
  },
  {
    src: "/service4.png",
    alt: "Aquarium Consultation",
    title: "Aquarium Consultation",
    description: "Personalized consultation for aquarium planning, species selection, equipment upgrades, and problem-solving support.",
    price: "₹25,000+",
  },
  {
    src: "/service5.png",
    alt: "Tank Relocation Services",
    title: "Tank Relocation Services",
    description: "Professional dismantling, transport, and reinstallation services to ensure your aquatic life remains safe during relocation.",
    price: "₹25,000+",
  },
  {
    src: "/service6.png",
    alt: "Coral Frag & Propagation",
    title: "Coral Frag & Propagation",
    description: "Professional coral fragging and propagation to expand and maintain a healthy reef ecosystem.",
    price: "₹25,000+",
  },
];

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
            <button className="mt-4 bg-white text-black text-sm px-6 py-2 rounded-md hover:bg-blue-100 transition">
              Get a Quote
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Services;