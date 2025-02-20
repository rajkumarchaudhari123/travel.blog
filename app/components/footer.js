import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">🚗 Explore the World with Us</p>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Car Travel Co. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400">Terms of Service</a>
          <a href="#" className="hover:text-blue-400">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
