"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    dropoff: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBooking = () => {
    if (!form.name || !form.phone || !form.pickup || !form.dropoff) {
      alert("🚨 Please fill in all the details!");
      return;
    }
    alert(`✅ Booking confirmed for ${form.name}! 🚖`);

    // WhatsApp Chat Redirect
    const whatsappMessage = `Hello, I want to book a ride.\n\nName: ${form.name}\nPhone: ${form.phone}\nPickup: ${form.pickup}\nDrop-off: ${form.dropoff}`;
    const whatsappURL = `https://wa.me/9717204925?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center p-6"
        style={{ backgroundImage: "url('/taxi-hero.jpg')" }}
      >
        <h1 className="text-5xl font-bold">Reliable Taxi Service</h1>
        <p className="mt-4 text-lg">Fast, Safe & Affordable Travel in Your City</p>
        <button
          onClick={() => router.push("/contact")}
          className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
        >
          Book a Ride
        </button>
      </div>

      {/* Booking Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-white">
        <h2 className="text-4xl font-bold mb-6">Book Your Ride</h2>
        <form className="max-w-lg mx-auto grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="text"
            name="pickup"
            placeholder="Pickup Location"
            value={form.pickup}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="text"
            name="dropoff"
            placeholder="Drop-off Location"
            value={form.dropoff}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />

          <button
            type="button"
            onClick={handleBooking}
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition w-full"
          >
            Book Now
          </button>
        </form>

        {/* WhatsApp & Call Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/9717204325"
            target="_blank"
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            💬 Chat on WhatsApp
          </a>
          <a
            href="tel:9717204325"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            📞 Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
