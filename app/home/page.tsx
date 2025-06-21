"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1749838065282-32db54bed154?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "First Slide",
    text: "Best Service in Town",
  },
  {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1121&auto=format&fit=crop",
    alt: "Second Slide",
    text: "Your Happiness, Our Goal",
  },
  {
    src: "https://images.unsplash.com/photo-1599831069477-b2acdc0bcb91?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Third Slide",
    text: "We Are Here For You",
  },
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
            <div key={index} className="relative min-w-full h-screen">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-4 bg-black/30 backdrop-blur-md rounded-xl shadow-lg text-white text-center transition-all duration-500 animate-fade-in">
                <h1 className="text-3xl sm:text-5xl font-bold drop-shadow-md">
                  {image.text}
                </h1>
              </div>

              {/* CTA Buttons */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919717204325?text=Hello%20I%20want%20to%20book%20a%20ride."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 transition text-white font-semibold rounded-full shadow-md"
                >
                  💬 WhatsApp Us
                </a>
                <a
                  href="tel:+919717204325"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-full shadow-md"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white transition"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white transition"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </main>

      {/* Intro Text */}
      <div className="text-center px-6 mt-12 py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold text-orange-500 font-serif leading-relaxed">
          Experience every journey the Travelya way — smooth, safe, and stylish.
          Whether it’s an airport pickup, a city tour, or a special event, we
          deliver comfort and elegance that makes your travel truly memorable.
        </h1>
        <h2 className="mt-4 text-xl italic font-[cursive] text-gray-700">
          – Neeraj
        </h2>
      </div>

      {/* Services */}
      <section className=" py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            🚗 Our Premium Services
          </h1>
          <p className="text-gray-300 mt-3 text-lg">
            We provide luxury, reliability, and comfort — always on time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "💍",
              title: "Wedding Ceremony",
              description: "Luxurious wedding car services for your big day.",
            },
            {
              icon: "🚕",
              title: "City Transfer",
              description: "Fast, reliable city transfer at your service.",
            },
            {
              icon: "✈️",
              title: "Airport Transfer",
              description: "Timely pickups and drops for all flights.",
            },
            {
              icon: "🌆",
              title: "Whole City Tour",
              description: "Explore city attractions in comfort and style.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-transform duration-300 hover:scale-105 text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
