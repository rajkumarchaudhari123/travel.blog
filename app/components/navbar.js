"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo & Brand Name */}
        <div className="flex items-center space-x-3">
          <Image src="/travel1.jpg" alt="Travelya Logo" width={40} height={40} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/home" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="text-white hover:text-gray-300">About Us</Link></li>
          <li><Link href="/services" className="text-white hover:text-gray-300">Services</Link></li>
          <li><Link href="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
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
          <li><Link href="/home" className="block hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="block hover:text-gray-300">About Us</Link></li>
          <li><Link href="/services" className="block hover:text-gray-300">Services</Link></li>
          <li><Link href="/contact" className="block hover:text-gray-300">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
