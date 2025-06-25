"use client";

import React, { useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentPage = () => {
  const AMOUNT = 5; // Set amount in INR
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const res = await fetch("/api/create-order", { method: "POST" });
      const data = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: AMOUNT * 100, // Razorpay takes amount in paise (5 * 100 = 500)
        currency: "INR",
        name: "Neeraj Travel",
        description: "₹5 Test Payment",
        order_id: data.orderId,
        handler: function (response: any) {
          console.log("✅ Payment successful:", response);
          alert("Payment Successful!");
        },
        prefill: {
          name: "John Doe",
          email: "john@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      if (typeof window !== "undefined" && window.Razorpay) {
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        alert("Razorpay SDK not loaded");
      }
    } catch (error) {
      console.error("❌ Payment Failed:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
        onLoad={() => console.log("✅ Razorpay script loaded")}
      />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
        <p className="mb-4 text-lg">Amount to Pay: ₹{AMOUNT}</p>
        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className={`px-6 py-2 rounded text-white font-semibold ${
            isProcessing
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isProcessing ? "Processing..." : "Pay ₹5 Now"}
        </button>
      </div>
    </>
  );
};

export default PaymentPage;
