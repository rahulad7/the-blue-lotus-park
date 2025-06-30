"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { MdQrCode2 } from "react-icons/md";

// Dummy festival data (should match main list)
const festivals = [
  { name: "Makar Sankranti", slug: "makar-sankranti" },
  { name: "Republic Day", slug: "republic-day" },
  { name: "Independence Day", slug: "independence-day" },
  { name: "Ganesh Chaturthi", slug: "ganesh-chaturthi" },
  { name: "Rama Navami", slug: "rama-navami" },
  { name: "Bathukamma", slug: "bathukamma" },
  { name: "Dasara / Navaratri", slug: "dasara-navaratri" },
  { name: "Karnataka Rajyoutsava", slug: "karnataka-rajyotsava" },
  { name: "Christmas & New Year", slug: "christmas-new-year" },
  { name: "Holi", slug: "holi" },
  { name: "Onam", slug: "onam" },
  { name: "Ramzan Eid", slug: "ramzan-eid" },
];

export default function FestivalCheckoutPage() {
  const { slug } = useParams();
  const festival = festivals.find(f => f.slug === slug);
  const [amount, setAmount] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left: Donor Details Form */}
        <div className="md:w-2/3 w-full p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-8 font-display text-gray-800">Donor details</h2>
          <form className="space-y-6">
            <div>
              <label className="block font-semibold mb-1" htmlFor="name">Name <span className="text-orange-500">*</span></label>
              <input id="name" type="text" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="flat">Flat Number <span className="text-orange-500">*</span></label>
              <input id="flat" type="text" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="phone">Phone <span className="text-orange-500">*</span></label>
              <input id="phone" type="tel" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="email">Email address <span className="text-orange-500">*</span></label>
              <input id="email" type="email" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
          </form>
        </div>

        {/* Divider with notch */}
        <div className="hidden md:flex flex-col items-center justify-center px-2">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20 H16 L20 24 L24 20 H40" stroke="#222" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Right: Donation Summary */}
        <div className="md:w-1/3 w-full bg-gray-50 p-8 flex flex-col border-l border-gray-200">
          <h3 className="text-lg font-bold mb-6 font-display text-gray-800">Your donation</h3>
          <div className="mb-4 flex justify-between text-base font-medium">
            <span>{festival ? festival.name : "Festival"}</span>
            <span>₹{amount.toFixed(2)}</span>
          </div>
          <div className="mb-4 flex justify-between text-base">
            <span>Donation Amount</span>
            <span>₹{amount.toFixed(2)}</span>
          </div>
          <div className="border-t my-4"></div>
          <div className="flex items-center mb-2">
            <span className="font-semibold">Pay with UPI QR Code</span>
            <MdQrCode2 className="ml-2 text-2xl text-purple-700" />
          </div>
          <div className="bg-gray-100 text-gray-700 text-sm rounded p-3 mb-4">
            It uses UPI apps like BHIM, Paytm, Google Pay, PhonePe or any Banking UPI app to make payment.
          </div>
          <div className="text-xs text-gray-500 mb-6">
            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link href="/privacy" className="underline text-orange-500">privacy policy</Link>.
          </div>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full text-lg transition-all shadow-md">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </div>
    
  );
} 