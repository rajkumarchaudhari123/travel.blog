"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    text: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: string; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setMessage({ type: "success", text: "✅ Email sent successfully!" });
        setFormData({ name: "", phone: "", subject: "", text: "" });

        // ✅ WhatsApp पर मैसेज भेजने का Redirect
        const whatsappMessage = `Hello, my name is ${formData.name}. I want to discuss: ${formData.subject}. Message: ${formData.text}`;
        const whatsappURL = `https://wa.me/9717204325?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, "_blank");
      } else {
        setMessage({ type: "error", text: `❌ ${data.message || "Failed to send email!"}` });
      }
    } catch (error) {
      setMessage({ type: "error", text: "❌ An unexpected error occurred!" });
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl flex flex-col md:flex-row transition-transform duration-300 hover:scale-105">
        
        {/* Left Section - Contact Info */}
        <div className="md:w-1/3 bg-[#fcffa4] text-gray-900 p-6 rounded-xl md:rounded-l-xl">
          <h2 className="text-xl font-semibold mb-4">📞 Contact Details</h2>
          <p className="mb-2"><strong>Name:</strong> Neeraj Kumar Yadav</p>
          <p className="mb-2"><strong>Phone:</strong> <a href="tel:9717204325" className="underline">9717204325</a></p>
          <p className="mb-2"><strong>Address:</strong> Pocket 12, Sector 82</p>
          <p className="mb-2"><strong>City:</strong> Noida, UP</p>

          {/* ✅ Direct Call Button */}
          <a href="tel:9717204325" className="block mt-4 bg-gray-900 text-white text-center py-2 rounded-lg hover:bg-gray-800 transition">
            📞 Call Now
          </a>

          {/* ✅ WhatsApp Button */}
          <a href="https://wa.me/9717204325" target="_blank" className="block mt-2 bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition">
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-2/3 p-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            ✉ Send an Email
          </h2>

          {message && (
            <div
              className={`text-center mb-4 p-3 rounded-lg ${
                message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-800"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-800"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-800"
            />
            <textarea
              name="text"
              value={formData.text}
              onChange={handleChange}
              placeholder="Message"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 h-32 text-gray-800"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400"
            >
              {loading ? "Sending..." : "Send Email & WhatsApp"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
