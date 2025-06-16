"use client";
import React from "react";
import Image from "next/image";

export default function Typeservices() {
  const services = [
    {
      title: "Family Travel",
      desc: "Explore kid-friendly destinations with comfort and fun.",
      image:
        "https://images.unsplash.com/photo-1506836467174-27f1042aa48c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Adventure Trips",
      desc: "Thrilling outdoor adventures in breathtaking locations.",
      image:
        "https://images.unsplash.com/photo-1715312889999-1898f3f8fbbc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Luxury Tours",
      desc: "Premium travel experiences with first-class amenities.",
      image:
        "https://images.unsplash.com/photo-1584869603969-428540799c2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <main className="py-20 px-4 text-white bg-gray-900">
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
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={800}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
              <h1 className="text-2xl font-bold mb-2">{service.title}</h1>
              <p className="text-sm">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
