"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  { src: "/bg_1.jpg", alt: "First Slide", text: "Best Service in Town" },
  { src: "/bg_2.jpg", alt: "Second Slide", text: "Your Happiness Our Goal" },
  { src: "/bg_3.jpg", alt: "Third Slide", text: "We are here for you" },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="flex items-center justify-center w-full ">
        <div className="relative w-full h-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                className="min-w-full h-full relative"
                key={index}
                data-aos="fade-in"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1920}
                  height={1080}
                  className="object-cover w-full h-full"
                  layout="intrinsic"
                  priority
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center shadow-md">
                  {image.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="flex flex-col items-center bg-gray-100 p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
          Our Latest Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[ 
            { icon: "🚗", title: "Wedding Ceremony", description: "Luxurious wedding car services for your special day." },
            { icon: "🏙️", title: "City Transfer", description: "Fast and reliable city transfer services." },
            { icon: "✈️", title: "Airport Transfer", description: "Hassle-free airport transfers with professional drivers." },
            { icon: "🌆", title: "Whole City Tour", description: "Explore the city with guided tours in comfort." }
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <i className="text-4xl sm:text-5xl mb-3">{service.icon}</i>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center">{service.title}</h2>
              <p className="text-gray-600 text-sm sm:text-base text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}