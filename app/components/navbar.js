"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = ["Home", "About Us", "Services", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/travelya1.png"
            alt="Travelya Logo"
            width={44}
            height={44}
            className="rounded-full shadow-md"
          />
          <span className="text-2xl font-bold tracking-tight text-[#FF6600]">
            Travelya
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">
          {navLinks.map((link, index) => {
            const href = `/${link.toLowerCase().replace(/\s/g, "")}`;
            const isActive = pathname === href;
            return (
              <li key={index}>
                <Link
                  href={href}
                  className={`text-[17px] font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#FF6600]"
                      : "text-gray-700 hover:text-[#FF6600]"
                  }`}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800 hover:text-[#FF6600] transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu with animation */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } bg-white shadow-md rounded-b-lg px-6`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link, index) => {
            const href = `/${link.toLowerCase().replace(/\s/g, "")}`;
            return (
              <li key={index}>
                <Link
                  href={href}
                  className="block text-gray-800 font-medium text-base hover:text-[#FF6600] transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
