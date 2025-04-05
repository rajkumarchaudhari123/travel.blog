import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-100 via-white to-green-100 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-3xl w-full border border-green-200 transition-all duration-500 hover:shadow-green-300">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-green-800 mb-6 tracking-wide">
          About Neeraj Kumar Yadav
        </h1>

        {/* Paragraphs */}
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Hello! My name is{" "}
          <span className="font-semibold text-green-700">Neeraj Kumar Yadav</span>, and I am currently pursuing B.Tech at{" "}
          <span className="font-semibold text-green-700">Galgotias University</span>.
          I have started a <span className="text-green-700 font-medium">premium car travel service</span> for both long and short tours, ensuring a smooth and luxurious experience.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          We proudly offer the <span className="text-green-700 font-medium">best travel services</span> in your city. Your comfort and safety are our top priorities. Let’s make your journey extraordinary!
        </p>

        {/* Image Section */}
        <div className="flex justify-center mt-8">
          <div className="overflow-hidden rounded-full shadow-xl hover:scale-105 transition-transform duration-500">
            <Image
              src="/Neeraj.jpg"
              alt="Neeraj Kumar Yadav"
              width={200}
              height={200}
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Extra Info Section */}
        <div className="mt-10 border-t pt-6 text-gray-700">
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              ✅ <span className="font-medium">Clean & Well-Maintained Cars</span> – Our fleet is modern, sanitized, and regularly serviced.
            </li>
            <li>
              ✅ <span className="font-medium">Trained Drivers</span> – Courteous, punctual, and experienced drivers at your service.
            </li>
            <li>
              ✅ <span className="font-medium">Affordable Pricing</span> – Luxury that fits your budget without compromise.
            </li>
            <li>
              ✅ <span className="font-medium">24/7 Support</span> – Anytime, anywhere – we're here for you.
            </li>
          </ul>

          <p className="mt-6 text-center text-green-800 font-semibold text-xl">
            "Travelling with us is not just a ride — it's an experience."
          </p>
        </div>
      </div>
    </div>
  );
}
