"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Festival data (should match the main festival list)
const festivals = [
  {
    name: "Makar Sankranti",
    slug: "makar-sankranti",
    image: "/assets/makar-sankranti.jpg",
    description: "Celebrate the harvest festival with kite flying and traditional sweets",
    category: "Harvest Festival",
  },
  {
    name: "Republic Day",
    slug: "republic-day",
    image: "/assets/india-republic.jpg",
    description: "Honoring our nation's constitution with cultural programs",
    category: "National Festival",
  },
  {
    name: "Independence Day",
    slug: "independence-day",
    image: "/assets/india-independence.jpg",
    description: "Commemorating India's freedom with flag hoisting and cultural events",
    category: "National Festival",
  },
  {
    name: "Ganesh Chaturthi",
    slug: "ganesh-chaturthi",
    image: "/assets/ganesh-chaturti.jpg",
    description: "Welcoming Lord Ganesha with grand celebrations and cultural programs",
    category: "Religious Festival",
  },
  {
    name: "Rama Navami",
    slug: "rama-navami",
    image: "/assets/ramnavami.jpg",
    description: "Celebrating the birth of Lord Rama with devotional programs",
    category: "Religious Festival",
  },
  {
    name: "Bathukamma",
    slug: "bathukamma",
    image: "/assets/navaratri-image.jpg",
    description: "Telangana's floral festival celebrating womanhood and nature",
    category: "Regional Festival",
  },
  {
    name: "Dasara / Navaratri",
    slug: "dasara-navaratri",
    image: "/assets/navaratri-image.jpg",
    description: "Nine nights of cultural celebrations and traditional dance",
    category: "Religious Festival",
  },
  {
    name: "Karnataka Rajyoutsava",
    slug: "karnataka-rajyotsava",
    image: "/assets/cityscape.jpg",
    description: "Celebrating Karnataka's formation day with cultural events",
    category: "Regional Festival",
  },
  {
    name: "Christmas & New Year",
    slug: "christmas-new-year",
    image: "/assets/christmas-image.jpg",
    description: "Festive celebrations with carols and community gatherings",
    category: "Religious Festival",
  },
  {
    name: "Holi",
    slug: "holi",
    image: "/assets/holi-image.jpg",
    description: "Festival of colors with music, dance, and community celebrations",
    category: "Religious Festival",
  },
  {
    name: "Onam",
    slug: "onam",
    image: "/assets/onam-image.jpg",
    description: "Kerala's harvest festival with traditional feasts and cultural programs",
    category: "Regional Festival",
  },
  {
    name: "Ramzan Eid",
    slug: "ramzan-eid",
    image: "/assets/ramadam-eid.jpg",
    description: "Celebrating the end of Ramadan with community prayers and feasts",
    category: "Religious Festival",
  },
];

export default function FestivalDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const festival = festivals.find(f => f.slug === slug);

  if (!festival) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Festival Not Found</h1>
        <Link href="/festival" className="text-blue-600 underline">Back to Festivals</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left: Festival Image */}
        <div className="md:w-1/2 w-full flex items-center justify-center bg-[#fdf6e3] p-6 md:p-10">
          <div className="relative w-full h-80 md:h-[32rem] max-w-lg mx-auto">
            <Image
              src={festival.image}
              alt={festival.name}
              fill
              className="object-contain object-center rounded-xl shadow-md"
              priority
            />
          </div>
        </div>
        {/* Right: Festival Content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center p-8 md:p-12">
          <div className="text-orange-500 font-semibold mb-2 text-lg">Festival</div>
          <h1 className="text-4xl font-bold mb-4 font-display text-gray-800">{festival.name}</h1>
          <p className="text-lg text-gray-700 mb-6">{festival.description}</p>

          {/* Donation Form */}
          <form
            className="mb-8"
            onSubmit={e => {
              e.preventDefault();
              router.push(`/festival/${slug}/checkout`);
            }}
          >
            <label className="block text-gray-700 font-medium mb-2" htmlFor="contribution">
              Your Contribution <span className="text-orange-500">*</span>
            </label>
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-2">₹</span>
              <input
                id="contribution"
                type="number"
                min="1"
                defaultValue={1}
                className="w-24 px-3 py-2 border border-gray-300 rounded text-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full text-lg transition-all shadow-md"
            >
              DONATE »
            </button>
          </form>

          <div className="border-t pt-4 text-gray-500 text-base">
            Category: <span className="text-orange-500 font-medium">{festival.category}</span>
          </div>
          <Link href="/festival" className="mt-6 inline-block text-blue-600 underline">Back to Festivals</Link>
        </div>
      </div>
    </div>
  );
} 