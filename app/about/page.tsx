"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export default function Page() {
  const testimonials = [
    { text: "The best travel experience! The car was clean, the ride was smooth, and the service was excellent!", name: "Rohan Sharma" },
    { text: "Highly recommend! Affordable prices and amazing service. Will definitely book again!", name: "Priya Verma" },
    { text: "Loved the professionalism. The journey was comfortable and safe!", name: "Amit Patel" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleBooking = () => {
    window.location.href = "https://wa.me/+919717204925?text=Hi, I want to book a ride!";
  };

  return (
    <>
      <Head>
        <title>Premium Car Travel Services - Neeraj Kumar Yadav</title>
        <meta name="description" content="Book premium car travel services with Neeraj Kumar Yadav. Safe, luxurious, and affordable travel." />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-[#116a52] p-4">
        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6 max-w-3xl">
          {/* Text Section */}
          <div className="md:w-2/3">
            <h1 className="text-2xl font-serif text-center md:text-left mb-4 text-green-700">
              Neeraj Kumar Yadav - Premium Car Travel Services
            </h1>
            <p className="text-gray-700 text-justify leading-relaxed">
              Hello! My name is <strong>Neeraj Kumar Yadav</strong>, and I am a B.Tech student at
              <strong> Galgotias University</strong>. I have started a premium car travel service
              for both long and short tours, ensuring a smooth and luxurious experience.
            </p>
            <p className="text-gray-700 text-justify mt-4 leading-relaxed">
              We provide the best travel services in your city. Your comfort and safety are our top priorities!
            </p>

            {/* Special Offer */}
            <div className="bg-green-100 p-4 rounded-lg mt-4">
              <h2 className="text-lg font-semibold text-green-800">🔥 Limited-Time Offer!</h2>
              <p className="text-gray-700">Book now and get <strong>20% OFF</strong> on your first ride.</p>
            </div>

            {/* Call to Action */}
            <div className="mt-6">
              <button 
                onClick={handleBooking} 
                className="bg-green-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-800 transition flex items-center gap-2"
              >
                <FaWhatsapp /> Book Your Ride Now
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/3 flex items-center justify-center mt-6 md:mt-0">
            <Image
              src="/Neeraj.jpg" 
              alt="Neeraj Kumar Yadav - Travel Service Owner"
              className="rounded-lg shadow-md"
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Customer Testimonials Slider */}
        <div className="mt-8 bg-white shadow-lg rounded-lg p-6 max-w-3xl text-center relative">
          <h2 className="text-xl font-serif text-green-700 mb-4">What Our Customers Say ❤️</h2>
          <div className="text-gray-700 leading-relaxed relative">
            <BsArrowLeftCircle 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-green-700"
              size={24} onClick={() => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)}
            />
            <p className="italic">"{testimonials[currentIndex].text}"</p>
            <p className="text-right font-semibold">- {testimonials[currentIndex].name}</p>
            <BsArrowRightCircle 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-green-700"
              size={24} onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
