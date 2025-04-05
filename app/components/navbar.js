"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 p-4 shadow-xl border-b border-yellow-400">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo & Brand Name */}
        <div className="flex items-center space-x-3">
          <Image
            src="/travel1.jpg"
            alt="Travelya Logo"
            width={44}
            height={44}
            className="rounded-full shadow-md"
          />
          <span className="text-xl font-bold text-yellow-800 tracking-wide">Travelya</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "About Us", "Services", "Contact"].map((item, index) => (
            <li key={index}>
              <Link
                href={`/${item.toLowerCase().replace(" ", "")}`}
                className="text-yellow-900 hover:text-yellow-600 transition duration-300 font-medium text-lg hover:underline underline-offset-4"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-yellow-100 border-t border-yellow-300 shadow-inner mt-2 text-center space-y-4 py-4 rounded-b-xl">
          {["Home", "About Us", "Services", "Contact"].map((item, index) => (
            <li key={index}>
              <Link
                href={`/${item.toLowerCase().replace(" ", "")}`}
                className="block text-yellow-900 hover:text-yellow-600 text-lg font-semibold transition-all duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
