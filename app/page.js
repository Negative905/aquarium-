"use client";

import Image from "next/image";
import { ShieldCheck, Fish, FileText, Wrench } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative w-screen h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-contain scale-[3.8] object-center"
        >
          <source src="/tortoise2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-cyan-400/20 z-[1]" />
        <div className="absolute inset-0 z-[2] flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black mb-4 sm:mb-6 tracking-tight leading-none"
              style={{ fontFamily: "Georgia, serif" }}
            >
              OCEAN CROWN
            </h1>
            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <p
                className="text-black text-sm sm:text-base md:text-lg leading-relaxed"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Elevating spaces with the quiet elegance of the ocean.
              </p>
              <p
                className="text-black text-sm sm:text-base md:text-lg leading-relaxed"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Custom aquariums designed to inspire calm, beauty, and balance.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300 shadow-md text-xs sm:text-sm w-full sm:w-auto"
              >
                Explore Now
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-700 text-white font-medium hover:bg-gray-800 transition-all duration-300 text-xs sm:text-sm w-full sm:w-auto"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <div
        className="relative z-10"
        style={{
          backgroundImage: "url('/home-back1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 8, 24, 0.30)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Crafting Section */}
        <section
          className="relative py-16 sm:py-20 lg:py-24 text-white"
          style={{ zIndex: 1 }}
          id="about"
        >
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Crafting Underwater Masterpieces
              </h2>
              <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
                Discover the art and science behind creating stunning aquatic
                environments that bring the ocean's majesty into your home or
                office.
              </p>
            </div>
            <div className="text-center">
              <button
                onClick={() => router.push("/about")}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black font-medium hover:bg-blue-50 transition-all duration-300 text-xs sm:text-sm"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section
  className="relative py-16 sm:py-20 lg:py-24 text-white"
  style={{ zIndex: 1 }}
  id="aquariums"
>
  <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="h-px bg-white opacity-50 flex-1 max-w-xs"></div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold whitespace-nowrap">
          Featured Categories
        </h2>
        <div className="h-px bg-white opacity-50 flex-1 max-w-xs"></div>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {[
        {
          src: "/grid01.png",
          label: "Aquariums",
          route: "/fresh",
          description: "Custom tanks & builds",
        },
        {
          src: "/grid02.png",
          label: "Fishes & Species",
          route: "/fish-species",
          description: "Exotic & rare species",
        },
        {
          src: "/grid03.png",
          label: "Plants & Corals",
          route: "/plants",
          description: "Live aquatic flora",
        },
        {
          src: "/grid04.png",
          label: "Services",
          route: "/services",
          description: "Setup & maintenance",
        },
      ].map(({ src, label, route, description }) => (
        <div
          key={label}
          className="relative group overflow-hidden cursor-pointer w-full"
          style={{
            height: "520px",
            boxShadow:
              "0 20px 40px rgba(0,0,0,0.35), 0 8px 20px rgba(0,0,0,0.25)",
            filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))",
          }}
          onClick={() => route && router.push(route)}
        >
          <Image
            src={src}
            alt={label}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col items-start">
            <p className="text-blue-200 text-xs tracking-widest uppercase mb-1 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              {description}
            </p>
            <h3
              className="text-white text-lg font-bold mb-3 leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {label}
            </h3>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-white border border-white/60 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all duration-300">
              View More
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Why Choose Section */}
        <section className="relative py-20 text-white" style={{ zIndex: 1 }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Why Choose Ocean Crown ?
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                Your space deserves the elegance and tranquility of a perfectly
                crafted underwater world.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
              <div className="space-y-16 text-center lg:text-right">
                <div className="flex flex-col items-center lg:items-end">
                  <ShieldCheck className="w-10 h-10 mb-4 text-white" />
                  <h3 className="text-xl font-semibold mb-2">
                    Expert Craftsmanship
                  </h3>
                  <p className="text-blue-100 text-sm max-w-xs">
                    Every aquarium is thoughtfully designed for beauty and
                    balance.
                  </p>
                </div>
                <div className="flex flex-col items-center lg:items-end">
                  <Fish className="w-10 h-10 mb-4 text-white" />
                  <h3 className="text-xl font-semibold mb-2">
                    Premium Quality
                  </h3>
                  <p className="text-blue-100 text-sm max-w-xs">
                    We use high-grade equipment and healthy aquatic species.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-1 shadow-[0_0_30px_rgba(0,255,255,0.4)]">
                  <Image
                    src="/grid05.png"
                    alt="Fish"
                    width={450}
                    height={500}
                    className="object-cover"
                  />
                </div>
                <button
                  onClick={() => router.push("/login")}
                  className="mt-8 px-8 py-3 bg-white text-black font-medium hover:bg-blue-50 transition duration-300"
                >
                  Book Now
                </button>
              </div>
              <div className="space-y-16 text-center lg:text-left">
                <div className="flex flex-col items-center lg:items-start">
                  <FileText className="w-10 h-10 mb-4 text-white" />
                  <h3 className="text-xl font-semibold mb-2">
                    Customized Solutions
                  </h3>
                  <p className="text-blue-100 text-sm max-w-xs">
                    Tailor-made designs that perfectly match your space and
                    vision.
                  </p>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <Wrench className="w-10 h-10 mb-4 text-white" />
                  <h3 className="text-xl font-semibold mb-2">
                    Ongoing Support
                  </h3>
                  <p className="text-blue-100 text-sm max-w-xs">
                    Professional maintenance to keep your underwater world
                    thriving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section
          className="relative py-16 sm:py-20 lg:py-24 text-white"
          style={{ zIndex: 1 }}
          id="plants"
        >
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                Our Aquatic Creations
              </h2>
              <p className="text-blue-100 text-sm sm:text-base max-w-3xl mx-auto">
                Explore some of our finest custom aquariums.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {["/grid1.png", "/grid2.png", "/grid3.png", "/grid4.png"].map(
                (src, i) => (
                  <div
                    key={i}
                    className="relative h-64 rounded-lg overflow-hidden group"
                  >
                    <Image
                      src={src}
                      alt={`Aquarium ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ),
              )}
              <div className="sm:col-span-2 relative h-96 rounded-lg overflow-hidden group">
                <Image
                  src="/grid5.png"
                  alt="Featured aquarium"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          className="relative py-16 sm:py-20 lg:py-24 text-white"
          style={{ zIndex: 1 }}
        >
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                What Our Clients Say?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  name: "Ocean M",
                  text: "Ocean Crown delivered a beautiful, perfectly balanced aquarium that brings life and serenity to our space.",
                },
                {
                  name: "Priya M",
                  text: "Exceptional quality and maintenance service. Our tank has become the centerpiece of the space.",
                },
                {
                  name: "Rain Harrison",
                  text: "From consultation to installation, the expertise was evident. Our aquarium is truly breathtaking.",
                },
              ].map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 hover:bg-white/15 transition-all duration-300 shadow-lg shadow-black/40"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-blue-100 text-sm sm:text-base mb-4 italic">
                    "{t.text}"
                  </p>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-blue-200 text-xs sm:text-sm">Client</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="relative py-16 sm:py-20 lg:py-24 text-white"
          style={{ zIndex: 1 }}
          id="contact"
        >
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Get In Touch
              </h2>
              <p className="text-blue-100 text-sm sm:text-base max-w-3xl mx-auto">
                Ready to transform your space with a stunning aquarium? Contact
                us today to discuss your custom aquarium needs.
              </p>
            </div>
            <div className="text-center">
              <button
                onClick={() => router.push("/contact")}
                className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-black font-medium hover:bg-blue-50 transition-all duration-300 text-sm sm:text-base"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}