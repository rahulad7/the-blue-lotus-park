"use client";

import { useParams, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useRef } from "react";
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
  const searchParams = useSearchParams();
  const router = useRouter();
  const festival = festivals.find(f => f.slug === slug);
  const initialAmount = Number(searchParams.get("amount")) || 1;
  const [amount, setAmount] = useState(initialAmount);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showModal, setShowModal] = useState<null | 'success' | 'failure'>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
    const flat = (form.elements.namedItem("flat") as HTMLInputElement)?.value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const newErrors: { [key: string]: string } = {};
    if (!name) newErrors.name = "Billing Name is a required field.";
    if (!flat) newErrors.flat = "Billing Flat Number is a required field.";
    if (!phone) newErrors.phone = "Billing Phone is a required field.";
    if (!email) newErrors.email = "Billing Email address is a required field.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Fake payment: randomly succeed or fail
      const isSuccess = Math.random() > 0.5;
      if (isSuccess) {
        // Send to API
        try {
          await fetch("/api/donate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              flat,
              phone,
              email,
              amount,
              festival: festival ? festival.name : "Festival",
            }),
          });
          setShowModal("success");
          formRef.current?.reset();
        } catch (err) {
          setShowModal("failure");
        }
      } else {
        setShowModal("failure");
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl mb-8 flex items-center">
        <button
          onClick={() => router.back()}
          className="flex items-center text-orange-500 hover:text-orange-700 font-semibold mr-4 px-3 py-2 rounded transition-colors border border-orange-200 bg-white shadow-sm"
        >
          ← Back
        </button>
        <h1 className="text-3xl font-bold text-gray-900 font-display">Checkout</h1>
      </div>
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-2/3 w-full p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-8 font-display text-gray-800">Donor details</h2>
          <form id="checkout-form" className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
            <div>
              <label className="block font-semibold mb-1" htmlFor="name">Name <span className="text-orange-500">*</span></label>
              <input 
                id="name" 
                name="name" 
                type="text" 
                required 
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="flat">Flat Number <span className="text-orange-500">*</span></label>
              <input 
                id="flat" 
                name="flat" 
                type="text" 
                required 
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                  errors.flat ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.flat && <div className="text-red-500 text-sm mt-1">{errors.flat}</div>}
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="phone">Phone <span className="text-orange-500">*</span></label>
              <input 
                id="phone" 
                name="phone" 
                type="tel" 
                required 
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="email">Email address <span className="text-orange-500">*</span></label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
            </div>
          </form>
        </div>

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
          <div>
            <button 
              type="submit" 
              form="checkout-form"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-full text-lg transition-all shadow-md"
            >
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
      {showModal === "success" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Payment Successful!</h2>
            <p className="mb-4">Thank you for your donation.</p>
            <button onClick={() => setShowModal(null)} className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded">Close</button>
          </div>
        </div>
      )}
      {showModal === "failure" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-red-600">Payment Failed</h2>
            <p className="mb-4">There was a problem processing your payment. Please try again.</p>
            <button onClick={() => setShowModal(null)} className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded">Close</button>
          </div>
        </div>
      )}
    </div>
  );
} 