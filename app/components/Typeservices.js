"use client";
import React from "react";
import Image from "next/image";

export default function Typeservices() {
  const services = [
    {
      title: "Family Travel",
      desc: "Explore kid-friendly destinations with comfort and fun.",
      image: "/gallery1.jpg", // Update path to public folder
    },
    {
      title: "Adventure Trips",
      desc: "Thrilling outdoor adventures in breathtaking locations.",
      image: "/gallery2.jpg",
    },
    {
      title: "Luxury Tours",
      desc: "Premium travel experiences with first-class amenities.",
      image: "/gallery3.jpg",
    },
  ];

  return (
    <main className="py-20 px-4 text-white">
      <div className="text-center mb-12">
        <h3 className="text-xl text-yellow-500 font-semibold uppercase">
          Travel in style
        </h3>
        <h2 className="text-4xl font-bold mt-2">
          Find travel inspiration by style
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
          >
            <div className="relative w-full h-96"> {/* Fix height of the image container */}
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover" // Ensure the image covers the container without distortion
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">{service.title}</h1>
              <p className="text-sm sm:text-base">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
