import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Our Services</h1>

        {/* Taxi Services Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">🚖 Taxi Cab Services</h2>
          <p className="text-gray-600">
            We offer a range of taxi cabs to meet your needs, from comfortable 5-seaters to spacious 7-seaters.
          </p>
          <div className="mt-4 relative group">
            <Image
              src="/taxi.jpg"
              alt="Taxi"
              width={600}
              height={300}
              className="rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-1">
            <li>🚗 <strong>5-Seater:</strong> Comfortable and affordable.</li>
            <li>🚙 <strong>7-Seater:</strong> Spacious and ideal for family trips.</li>
            <li>✨ <strong>Luxury Cabs:</strong> Premium experience with added amenities.</li>
          </ul>
        </div>

        {/* Tour Destinations Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">🌍 Tour Destinations</h2>
          <p className="text-gray-600">
            Explore breathtaking locations across India, including Uttarakhand, Himachal Pradesh, and more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[
              { src: "/uttarakhand.jpg", name: "Uttarakhand" },
              { src: "/himachal.jpg", name: "Himachal Pradesh" },
            ].map((place, index) => (
              <div key={index} className="relative group">
                <Image
                  src={place.src}
                  alt={place.name}
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                <p className="text-center text-gray-700 mt-2 text-lg font-semibold group-hover:text-blue-600 transition-colors">
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
