"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/taxi-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-6">
          <h1 className="text-5xl font-bold">Reliable Taxi Service</h1>
          <p className="mt-4 text-lg">Fast, Safe & Affordable Travel in Your City</p>
          <button onClick={() => router.push('/contact')} className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition">
            Book a Ride
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/Airport Transfer.jpg" alt="Airport Transfer" className="w-full h-48 object-cover rounded" />
            <h3 className="mt-4 text-2xl font-semibold">Airport Transfers</h3>
            <p className="mt-2 text-gray-600">Timely pickups and drop-offs for stress-free travel.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/city-taxi.jpg" alt="City Taxi" className="w-full h-48 object-cover rounded" />
            <h3 className="mt-4 text-2xl font-semibold">City Rides</h3>
            <p className="mt-2 text-gray-600">Fast and affordable travel within the city.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/outstation-taxi.jpg" alt="Outstation Taxi" className="w-full h-48 object-cover rounded" />
            <h3 className="mt-4 text-2xl font-semibold">Outstation Trips</h3>
            <p className="mt-2 text-gray-600">Comfortable rides for long-distance travel.</p>
          </div>
        </div>
      </div>

      {/* Fleet Section */}
      <div className="py-16 bg-gray-200 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Fleet</h2>
        <div className="grid md:grid-cols-3 gap-6 px-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/sedan.jpg" alt="Sedan" className="w-full h-48 object-cover rounded" />
            <h3 className="mt-4 text-2xl font-semibold">Sedan</h3>
            <p className="mt-2 text-gray-600">Comfortable rides for solo and small groups.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/suv.jpg" alt="SUV" className="w-full h-48 object-cover rounded" />
            <h3 className="mt-4 text-2xl font-semibold">SUV</h3>
            <p className="mt-2 text-gray-600">Spacious rides for families and groups.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/luxury.jpg" alt="Luxury Car" className="w-full h-48 object-cover rounded" />
            <h3 className="mt-4 text-2xl font-semibold">Luxury</h3>
            <p className="mt-2 text-gray-600">Premium cars for a luxurious experience.</p>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="py-16 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold mb-6">Book Your Ride</h2>
        <form className="max-w-lg mx-auto grid gap-4">
          <input type="text" placeholder="Your Name" className="p-3 border rounded-lg w-full" />
          <input type="tel" placeholder="Phone Number" className="p-3 border rounded-lg w-full" />
          <input type="text" placeholder="Pickup Location" className="p-3 border rounded-lg w-full" />
          <input type="text" placeholder="Drop-off Location" className="p-3 border rounded-lg w-full" />
          <button type="button" onClick={() => router.push('/contact')} className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition w-full">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}
