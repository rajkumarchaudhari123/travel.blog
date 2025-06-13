"use client";

import React from "react";
import {
  FaCarSide,
  FaClock,
  FaUserShield,
  FaMapMarkedAlt,
  FaPlaneArrival,
  FaCrown,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const services = [
    {
      icon: <FaCarSide className="text-yellow-500 text-5xl mx-auto mb-4" />,
      title: "City Transfers",
      desc: "Fast and comfortable rides within the city. Reliable and always on time.",
    },
    {
      icon: <FaClock className="text-green-500 text-5xl mx-auto mb-4" />,
      title: "Hourly Packages",
      desc: "Need a car for a few hours? Our hourly rental service is flexible and affordable.",
    },
    {
      icon: <FaUserShield className="text-blue-500 text-5xl mx-auto mb-4" />,
      title: "Safety Assured",
      desc: "Safety is our top priority. Sanitized vehicles and verified drivers always.",
    },
    {
      icon: (
        <FaPlaneArrival className="text-purple-500 text-5xl mx-auto mb-4" />
      ),
      title: "Airport Transfers",
      desc: "On-time pick-ups and drop-offs to and from all major airports.",
    },
    {
      icon: <FaMapMarkedAlt className="text-red-500 text-5xl mx-auto mb-4" />,
      title: "Outstation Rides",
      desc: "Travel to nearby cities in comfort with our affordable outstation services.",
    },
    {
      icon: <FaCrown className="text-pink-500 text-5xl mx-auto mb-4" />,
      title: "Premium Rides",
      desc: "Travel in luxury with our premium fleet of high-end vehicles and top-rated chauffeurs.",
    },
  ];

  return (
    <div className="py-24 px-4 bg-gray-950 text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-400">
          Our Best Services
        </h1>
        <p className="mt-3 text-gray-300 max-w-xl mx-auto">
          We are committed to delivering exceptional travel services with
          comfort, safety, and reliability at the heart of everything we do.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white text-gray-900 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300"
          >
            {service.icon}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-16">
        <button
          onClick={() => router.push("/contact")}
          className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
        >
          🚖 Book Your Ride Now
        </button>
      </div>
    </div>
  );
}
