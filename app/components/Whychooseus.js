"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { FaStar, FaMoneyBillWave, FaHeadset } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Whychooseus() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const features = [
    {
      title: "Unforgettable Experience",
      description:
        "We craft personalized, comfortable, and safe rides tailored to your needs. Our drivers are professional and punctual, ensuring a hassle-free journey every time.",
      icon: <FaStar className="text-yellow-400 text-3xl" />,
      image:
        "https://images.unsplash.com/photo-1579689217062-f66443381e24?q=80&w=920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Value For Money",
      description:
        "We offer competitive and transparent pricing with no hidden charges. High-quality service at an affordable rate — making every ride worth it.",
      icon: <FaMoneyBillWave className="text-green-400 text-3xl" />,
      image:
        "https://images.unsplash.com/photo-1598665070070-82eaf00ad214?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "24/7 Customer Support",
      description:
        "Our support team is always available to assist you with your queries and ride needs — day or night, we're here for you.",
      icon: <FaHeadset className="text-blue-400 text-3xl" />,
      image:
        "https://images.unsplash.com/photo-1520923642038-b4259acecbd7?q=80&w=1119&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <main className="py-16 px-4 bg-gray-950 text-white">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h3 className="text-yellow-400 text-xl font-semibold tracking-wide">
          What Makes Us Different
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Why Book With Us
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Experience unmatched comfort, reliability, and value with our premier
          taxi services tailored just for you.
        </p>
      </div>

      {/* Feature Blocks */}
      <div className="space-y-16 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-10"
          >
            {/* Text on Left */}
            <div data-aos="fade-right" className="space-y-4 order-2 md:order-1">
              <div className="flex items-center gap-3">
                {feature.icon}
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-300 text-lg">{feature.description}</p>
            </div>

            {/* Image on Right */}
            <div data-aos="fade-left" className="order-1 md:order-2">
              <Image
                src={feature.image}
                alt={feature.title}
                width={500}
                height={300}
                className="rounded-2xl shadow-2xl h-auto max-h-[300px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
