import React from "react";

export default function AboutUs() {
  return (
    <section className=" py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
            alt="About Travelya"
            className="rounded-3xl shadow-xl w-full object-cover h-[350px] sm:h-[400px]"
          />
        </div>

        {/* Right Side Text */}
        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#FF6600]">
            Discover Our Story
          </h2>
          <p className="text-lg text-white leading-relaxed mb-4">
            At <span className="font-semibold text-[#FF6600]">Travelya</span>,
            we believe travel should be more than just getting from one place to
            another. With a commitment to comfort, safety, and personalized
            service, we've helped thousands of customers reach their destination
            with peace of mind.
          </p>
          <p className="text-base text-white">
            Whether it’s a family vacation, a wedding, or a quick city transfer,
            we’ve got your ride covered with reliable drivers and top-notch
            support. Join the Travelya experience today.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#FF6600] text-white rounded-lg hover:bg-orange-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
