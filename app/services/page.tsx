import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-yellow-50 min-h-screen flex justify-center items-center">
      <div className="max-w-5xl w-full bg-white p-8 rounded-2xl shadow-2xl border border-yellow-100">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10 tracking-wide drop-shadow-sm">
          🌟 Our Services
        </h1>

        {/* Taxi Services Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-yellow-800 mb-3 tracking-wide">
            🚖 Taxi Cab Services
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            We offer a range of taxi cabs to meet your needs, from comfortable 5-seaters to spacious 7-seaters.
          </p>
          <div className="mt-5 relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/taxi.jpg"
              alt="Taxi"
              width={600}
              height={300}
              className="rounded-xl transform group-hover:scale-105 transition duration-500 ease-in-out"
              priority
            />
          </div>
          <ul className="list-disc list-inside mt-5 text-gray-800 space-y-2 text-[17px]">
            <li>🚗 <strong>5-Seater:</strong> Comfortable and affordable.</li>
            <li>🚙 <strong>7-Seater:</strong> Spacious and ideal for family trips.</li>
            <li>✨ <strong>Luxury Cabs:</strong> Premium experience with added amenities.</li>
          </ul>
        </div>

        {/* Tour Destinations Section */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-800 mb-3 tracking-wide">
            🌍 Tour Destinations
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Explore breathtaking locations across India, including Uttarakhand, Himachal Pradesh, and more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[
              { src: "/uttarakhand.jpg", name: "Uttarakhand" },
              { src: "/himachal.jpg", name: "Himachal Pradesh" },
            ].map((place, index) => (
              <div
                key={index}
                className="relative group bg-white rounded-xl p-3 shadow-md hover:shadow-xl transition-all duration-500"
              >
                <Image
                  src={place.src}
                  alt={place.name}
                  width={400}
                  height={250}
                  className="rounded-lg group-hover:scale-105 transition duration-500"
                  priority
                />
                <p className="text-center text-lg font-semibold text-gray-800 mt-3 group-hover:text-blue-600 transition">
                  {place.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
