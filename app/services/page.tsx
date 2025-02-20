import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Our Services</h1>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Taxi Cab Services</h2>
          <p className="text-gray-600">We offer a range of taxi cabs to meet your needs, from comfortable 5-seaters to spacious 7-seaters.</p>
          <div className="mt-4">
            <Image src="/taxi.jpg" alt="Taxi" width={600} height={300} className="rounded-lg" />
          </div>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>5-Seater: Comfortable and affordable.</li>
            <li>7-Seater: Spacious and ideal for family trips.</li>
            <li>Luxury Cabs: Premium experience with added amenities.</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-gray-700">Tour Destinations</h2>
          <p className="text-gray-600">Explore breathtaking locations across India, including Uttarakhand, Himachal Pradesh, and more.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <Image src="/uttarakhand.jpg" alt="Uttarakhand" width={300} height={200} className="rounded-lg" />
              <p className="text-center text-gray-700 mt-2">Uttarakhand</p>
            </div>
            <div>
              <Image src="/himachal.jpg" alt="Himachal" width={300} height={200} className="rounded-lg" />
              <p className="text-center text-gray-700 mt-2">Himachal Pradesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
