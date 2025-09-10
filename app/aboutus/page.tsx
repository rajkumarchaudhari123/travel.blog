"use client";
import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left Side Image */}
        <div className="w-full md:w-1/2 group overflow-hidden rounded-3xl shadow-2xl">
          <div className="relative w-full h-[350px] sm:h-[420px] rounded-3xl shadow-2xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dpfdj5xc0/image/upload/v1757316584/Chat/ChatFiles/jg2ayriwp85dnaqedmrr.jpg"
              alt="Founder Neeraj Yadav"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Right Side Text */}
        <div className="w-full md:w-1/2 text-gray-200 animate-fadeIn">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-[#FF6600] leading-tight">
            Discover Our Story
          </h2>

          <p className="text-lg leading-relaxed mb-4 text-gray-300">
            Hi, I’m <span className="font-semibold text-white">Neeraj Yadav</span>,
            a passionate <span className="text-white">B.Tech student</span> with an engineering background.
            On <span className="text-white">1st March 2025</span>, I founded
            <span className="font-semibold text-[#FF6600]"> Travelya</span> with the dream of
            redefining how people experience travel.
          </p>

          <p className="text-lg leading-relaxed mb-4 text-gray-300">
            My vision is clear: to deliver the <span className="text-white">best possible journeys</span>,
            where comfort, safety, and customer happiness are at the heart of everything we do.
          </p>

          <p className="text-lg leading-relaxed mb-4 text-gray-300">
            At <span className="font-semibold text-[#FF6600]">Travelya</span>,
            we believe travel isn’t just about reaching a place —
            it’s about creating <span className="font-medium text-white">memorable experiences</span>
            that stay with you forever.
          </p>

          <p className="text-base text-gray-400 mb-6">
            Be it a <span className="text-white">family vacation</span>,
            a <span className="text-white">wedding celebration</span>,
            or even a quick <span className="text-white">city transfer</span>,
            our expert drivers and dedicated team ensure your journey is
            smooth, stress-free, and enjoyable.
          </p>

          <button className="mt-4 px-8 py-3 bg-gradient-to-r from-[#FF6600] to-orange-500 text-white font-semibold rounded-lg hover:scale-105 shadow-lg transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
}
