
"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Car Travels</h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="home" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="about" className="text-white hover:text-gray-300">About Us</a></li>
          <li><a href="services" className="text-white hover:text-gray-300">Services</a></li>
          <li><a href="contact" className="text-white hover:text-gray-300">Contact</a></li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-700 text-white space-y-4 p-4 text-center">
          <li><a href="home" className="block hover:text-gray-300">Home</a></li>
          <li><a href="about" className="block hover:text-gray-300">About Us</a></li>
          <li><a href="services" className="block hover:text-gray-300">Services</a></li>
          <li><a href="contact" className="block hover:text-gray-300">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
