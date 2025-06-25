"use client";

import Script from "next/script";
import React, { useState } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const ContactPage = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const res = await fetch("/api/create-order", { method: "POST" });
      const data = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: 100 * 100, // ₹100 in paise
        currency: "INR",
        name: "Neeraj Travel",
        description: "Taxi Booking ₹100",
        order_id: data.orderId,
        handler: function (response: any) {
          alert("✅ Booking Confirmed!");
          console.log(response);
        },
        prefill: {
          name: "Your Customer",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#f59e0b", // amber
        },
      };

      if (window.Razorpay) {
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        alert("❌ Razorpay SDK not loaded!");
      }
    } catch (err) {
      console.error("❌ Payment Error:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-indigo-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-2xl rounded-3xl w-full max-w-5xl overflow-hidden grid grid-cols-1 md:grid-cols-2 transition hover:scale-[1.01]">
          {/* Left - Contact Info */}
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">📞 Contact Neeraj</h2>
              <p className="mb-2">
                <strong>Phone:</strong>{" "}
                <a href="tel:+918368273091" className="underline">
                  +91 83682 73091
                </a>
              </p>
              <p className="mb-2">
                <strong>Location:</strong> Pocket 12, Sector 82, Noida, UP
              </p>
              <p className="mt-6 text-sm text-indigo-200">
                Call us now or book your taxi online with secure payment.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href="tel:+918368273091"
                className="block bg-white text-indigo-700 text-center py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/918368273091"
                target="_blank"
                className="block bg-green-500 text-white text-center py-2 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right - Razorpay Booking */}
          <div className="p-8 bg-white flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              🚕 Book Your Taxi Now
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Secure your ride instantly by paying just ₹100.
            </p>

            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className={`px-6 py-2 rounded text-white font-semibold transition ${
                isProcessing
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-amber-500 hover:bg-amber-600"
              }`}
            >
              {isProcessing ? "Processing..." : "🚕 Book Taxi Now – Pay ₹100"}
            </button>

            {/* Google Map (optional) */}
            <div className="mt-8 w-full">
              <iframe
                className="w-full h-48 rounded-xl border"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.25526932181!2d77.38612185!3d28.5704515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefe5d3b35b47%3A0x6498eeb8e2dbff54!2sSector%2082%2C%20Noida!5e0!3m2!1sen!2sin!4v1719329232203!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
