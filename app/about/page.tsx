import Image from "next/image"; // No need to import React manually

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Main Content Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl">
        <h1 className="text-2xl font-serif text-center mb-4 text-green-700">
          About Neeraj Kumar Yadav
        </h1>
        <p className="text-gray-700 text-justify leading-relaxed">
          Hello! My name is <strong>Neeraj Kumar Yadav</strong>, and I am a B.Tech student at{" "}
          <strong>Galgotias University</strong>.  
          I have started a premium car travel service for both long and short tours, ensuring a smooth and luxurious experience.
        </p>

        <p className="text-gray-700 text-justify mt-4 leading-relaxed">
          We provide the best travel services in your city. Your comfort and safety are our top priorities!
        </p>

        {/* Image Section */}
        <div className="flex justify-center mt-6">
          <Image 
            src="/Neeraj.jpg" 
            alt="Neeraj Kumar Yadav"
            className="rounded-lg shadow-md"
            width={200}
            height={200}
            priority
          />
        </div>
      </div>
    </div>
  );
}
