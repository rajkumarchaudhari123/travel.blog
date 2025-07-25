"use client";

import React, { useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentPage = () => {
  const AMOUNT = 5; // INR
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const res = await fetch("/api/create-order", { method: "POST" });
      const data = await res.json();

      if (!data?.orderId) {
        alert("Failed to create Razorpay order");
        setIsProcessing(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "", // ✅ must exist
        amount: AMOUNT * 100,
        currency: "INR",
        name: "Neeraj Travel",
        description: "Test Payment",
        order_id: data.orderId,
        handler: function (response: any) {
          alert("✅ Payment successful!");
          console.log("Payment success:", response);
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "RkCreations Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("❌ Payment Error:", error);
      alert("Payment failed");
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
        <h1 className="text-2xl font-bold mb-4">Razorpay Test Payment</h1>
        <p className="mb-4 text-lg">Amount to Pay: ₹{AMOUNT}</p>
        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className={`px-6 py-2 rounded text-white font-semibold ${
            isProcessing
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {isProcessing ? "Processing..." : "Pay ₹5 Now"}
        </button>
      </div>
    </>
  );
};

export default PaymentPage;
