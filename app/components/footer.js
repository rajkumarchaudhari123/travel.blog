import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-8 relative overflow-hidden">
      {/* 🔔 Marquee Section */}
      <div className="absolute top-0 w-full bg-yellow-500 text-black py-1">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="6"
          className="text-sm font-medium"
        >
          📢 Special Offer: Get 20% off on your first ride! | 🚖 Outstation Cabs
          Available 24/7 | 💼 Corporate Travel Solutions
        </marquee>
      </div>

      <div className="container mx-auto px-4 mt-6 text-center">
        {/* Title */}
        <p className="text-xl font-bold mb-2 text-yellow-400">
          🚗 Explore the World with Us
        </p>

        {/* Legal */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Travelya Cab Co. All Rights Reserved.
        </p>

        {/* Links */}
        <div className="flex justify-center space-x-6 mt-4 text-sm font-medium">
          <a href="#" className="hover:text-yellow-400 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Contact Us
          </a>
        </div>

        {/* Social Icons (Optional) */}
        {/* <div className="flex justify-center space-x-4 mt-4">
          <a href="#"><img src="/facebook-icon.svg" alt="Facebook" className="w-5" /></a>
          <a href="#"><img src="/instagram-icon.svg" alt="Instagram" className="w-5" /></a>
          <a href="#"><img src="/twitter-icon.svg" alt="Twitter" className="w-5" /></a>
        </div> */}
      </div>
    </footer>
  );
}
