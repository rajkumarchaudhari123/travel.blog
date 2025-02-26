"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#fcffa4] p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo & Brand Name */}
        <div className="flex items-center space-x-3">
          <Image src="/travel1.jpg" alt="Travelya Logo" width={40} height={40} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/home" className="text-[#333333] hover:text-[#b8860b]">Home</Link></li>
          <li><Link href="/about" className="text-[#333333] hover:text-[#b8860b]">About Us</Link></li>
          <li><Link href="/services" className="text-[#333333] hover:text-[#b8860b]">Services</Link></li>
          <li><Link href="/contact" className="text-[#333333] hover:text-[#b8860b]">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#333333] focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#222222] text-[#fff8dc] space-y-4 p-4 text-center">
          <li><Link href="/home" className="block hover:text-[#b8860b]">Home</Link></li>
          <li><Link href="/about" className="block hover:text-[#b8860b]">About Us</Link></li>
          <li><Link href="/services" className="block hover:text-[#b8860b]">Services</Link></li>
          <li><Link href="/contact" className="block hover:text-[#b8860b]">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
