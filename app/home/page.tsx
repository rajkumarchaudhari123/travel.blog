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
      <main className="relative w-full h-screen overflow-hidden">
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
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-900 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center drop-shadow-lg">
                {image.text}
              </div>
              {/* WhatsApp and Call Buttons */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <a
                  href="https://wa.me/919717204325?text=Hello%20I%20want%20to%20book%20a%20ride."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
                >
                  WhatsApp Us
                </a>
                <a
                  href="tel:+919717204325"
                  className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
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
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-70 transition"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-70 transition"
        >
          ❯
        </button>

        {/* Dots Indicators */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-gray-900" : "bg-gray-500"
              } transition`}
            />
          ))}
        </div>
      </main>

      {/* Services Section */}
      <div className="flex flex-col items-center bg-gray-100 p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
          Our Latest Services
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
              className="flex flex-col items-center bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <span className="text-4xl sm:text-5xl mb-3">{service.icon}</span>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
