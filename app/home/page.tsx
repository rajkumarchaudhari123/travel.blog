"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/bg_1.jpg", alt: "First Slide", text: "Best Service in Town" },
  { src: "/bg_2.jpg", alt: "Second Slide", text: "Your Happiness Our Goal" },
  { src: "/bg_3.jpg", alt: "Third Slide", text: "We are here for you" },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {/* Hero Section */}
      <main className="relative w-full h-screen overflow-hidden font-sans">
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative min-w-full h-screen"
              data-aos="fade-in"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                {image.text}
              </div>
              {/* WhatsApp and Call Buttons */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <a
                  href="https://wa.me/919717204325?text=Hello%20I%20want%20to%20book%20a%20ride."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition"
                >
                  WhatsApp Us
                </a>
                <a
                  href="tel:+919717204325"
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
                >
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 p-3 rounded-full text-black hover:bg-opacity-90 transition"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 p-3 rounded-full text-black hover:bg-opacity-90 transition"
        >
          ❯
        </button>

        {/* Dots Indicators */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full border-2 border-white ${
                currentIndex === index ? "bg-white" : "bg-transparent"
              } transition`}
            />
          ))}
        </div>
      </main>

      {/* Services Section */}
      <div className="flex flex-col items-center bg-gradient-to-br from-yellow-50 to-blue-50 p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900">
          ✨ Our Latest Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "💍",
              title: "Wedding Ceremony",
              description:
                "Luxurious wedding car services for your special day.",
            },
            {
              icon: "🚕",
              title: "City Transfer",
              description: "Fast and reliable city transfer services.",
            },
            {
              icon: "✈️",
              title: "Airport Transfer",
              description: "Hassle-free airport transfers with professional drivers.",
            },
            {
              icon: "🌆",
              title: "Whole City Tour",
              description: "Explore the city with guided tours in comfort.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span className="text-5xl mb-4">{service.icon}</span>
              <h2 className="text-xl font-bold mb-2 text-center text-blue-700">
                {service.title}
              </h2>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}