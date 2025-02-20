import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#116a52] p-4">
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row mt-3 bg-white shadow-lg rounded-lg p-6 max-w-3xl">
        {/* Text Section */}
        <div className="md:w-2/3">
          <h1 className="text-2xl font-serif text-center md:text-left mb-4 text-green-700">
            Neeraj Kumar Yadav - Premium Car Travel Services
          </h1>
          <p className="text-gray-700 text-justify leading-relaxed">
            Hello! My name is <strong>Neeraj Kumar Yadav</strong>, and I am a B.Tech student at <strong>Galgotias University</strong>.  
            I have started a premium car travel service for both long and short tours, ensuring a smooth and luxurious experience.
          </p>
          <p className="text-gray-700 text-justify mt-4 leading-relaxed">
            We provide the best travel services in your city. Your comfort and safety are our top priorities!
          </p>

          {/* Special Offer */}
          <div className="bg-green-100 p-4 rounded-lg mt-4">
            <h2 className="text-lg font-semibold text-green-800">🔥 Limited-Time Offer!</h2>
            <p className="text-gray-700">Book now and get <strong>20% OFF</strong> on your first ride.</p>
          </div>

          {/* Call to Action */}
          <div className="mt-6">
            <button   className="bg-green-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-800 transition">
              Book Your Ride Now 🚗
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 flex items-center justify-center mt-6 md:mt-0">
          <img
            src="Neeraj.jpg"
            alt="Neeraj Kumar Yadav"
            className="rounded-lg shadow-md max-h-60"
          />
        </div>
      </div>

     

      {/* Customer Testimonials */}
      <div className="mt-8 bg-white shadow-lg rounded-lg p-6 max-w-3xl">
        <h2 className="text-xl font-serif text-green-700 mb-4 text-center">
          What Our Customers Say ❤️
        </h2>
        <div className="text-gray-700 leading-relaxed">
          <p className="italic">"The best travel experience! The car was clean, the ride was smooth, and the service was excellent!"</p>
          <p className="text-right font-semibold">- Rohan Sharma</p>
        </div>
        <div className="border-t my-4"></div>
        <div className="text-gray-700 leading-relaxed">
          <p className="italic">"Highly recommend! Affordable prices and amazing service. Will definitely book again!"</p>
          <p className="text-right font-semibold">- Priya Verma</p>
        </div>
      </div>
    </div>
  );
}
