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
    // Yahan aap backend API ya navigation add kar sakte hain
    router.push("/contact");
  };

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/taxi-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-6">
          <h1 className="text-5xl font-bold">Reliable Taxi Service</h1>
          <p className="mt-4 text-lg">Fast, Safe & Affordable Travel in Your City</p>
          <button 
            onClick={() => router.push("/contact")} 
            className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
          >
            Book a Ride
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: "/Airport Transfer.jpg", title: "Airport Transfers", desc: "Timely pickups and drop-offs for stress-free travel." },
            { img: "/city-taxi.jpg", title: "City Rides", desc: "Fast and affordable travel within the city." },
            { img: "/outstation-taxi.jpg", title: "Outstation Trips", desc: "Comfortable rides for long-distance travel." },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <Image src={service.img} alt={service.title} width={400} height={250} className="w-full h-48 object-cover rounded" />
              <h3 className="mt-4 text-2xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fleet Section */}
      <div className="py-16 bg-gray-200 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Fleet</h2>
        <div className="grid md:grid-cols-3 gap-6 px-6">
          {[
            { img: "/sedan.jpg", title: "Sedan", desc: "Comfortable rides for solo and small groups." },
            { img: "/suv.jpg", title: "SUV", desc: "Spacious rides for families and groups." },
            { img: "/luxury.jpg", title: "Luxury", desc: "Premium cars for a luxurious experience." },
          ].map((car, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <Image src={car.img} alt={car.title} width={400} height={250} className="w-full h-48 object-cover rounded" />
              <h3 className="mt-4 text-2xl font-semibold">{car.title}</h3>
              <p className="mt-2 text-gray-600">{car.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Section */}
      <div className="py-16 px-6 text-center bg-white">
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
      </div>
    </div>
  );
}
