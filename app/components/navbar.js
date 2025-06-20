"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About Us", "Services", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-md border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/travelya.png"
            alt="Travelya Logo"
            width={44}
            height={44}
            className="rounded-full shadow-md"
          />
          <span className="text-2xl font-bold tracking-wide text-[#FF6600]">
            Travelya
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={`/${link.toLowerCase().replace(" ", "")}`}
                className="text-gray-700 font-medium text-lg hover:text-[#FF6600] transition duration-200"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg py-4 px-6">
          <ul className="space-y-4 text-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={`/${link.toLowerCase().replace(" ", "")}`}
                  className="block text-gray-800 font-semibold text-base hover:text-[#FF6600] transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
