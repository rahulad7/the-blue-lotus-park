'use client';

/**
 * Festival Page
 * Route: /festival
 * Description: Displays all festivals celebrated in The Blue Lotus Park community
 * Features:
 * - Hero section with community description
 * - Grid of festival cards with descriptions
 * - Animated transitions and hover effects
 */

import { motion } from 'framer-motion';
import Image from 'next/image';

const festivals = [
  {
    name: 'Makar Sankranti',
    image: '/assets/festivals/makar-sankranti.jpg',
    description: 'Celebrate the harvest festival with kite flying and traditional sweets'
  },
  {
    name: 'Republic Day',
    image: '/assets/festivals/republic-day.jpg',
    description: 'Honoring our nation\'s constitution with cultural programs'
  },
  {
    name: 'Independence Day',
    image: '/assets/festivals/independence-day.jpg',
    description: 'Commemorating India\'s freedom with flag hoisting and cultural events'
  },
  {
    name: 'Ganesh Chaturthi',
    image: '/assets/festivals/ganesh-chaturthi.jpg',
    description: 'Welcoming Lord Ganesha with grand celebrations and cultural programs'
  },
  {
    name: 'Rama Navami',
    image: '/assets/festivals/rama-navami.jpg',
    description: 'Celebrating the birth of Lord Rama with devotional programs'
  },
  {
    name: 'Bathukamma',
    image: '/assets/festivals/bathukamma.jpg',
    description: 'Telangana\'s floral festival celebrating womanhood and nature'
  },
  {
    name: 'Dasara / Navaratri',
    image: '/assets/festivals/dasara.jpg',
    description: 'Nine nights of cultural celebrations and traditional dance'
  },
  {
    name: 'Karnataka Rajyoutsava',
    image: '/assets/festivals/rajyotsava.jpg',
    description: 'Celebrating Karnataka\'s formation day with cultural events'
  },
  {
    name: 'Christmas & New Year',
    image: '/assets/festivals/christmas.jpg',
    description: 'Festive celebrations with carols and community gatherings'
  },
  {
    name: 'Holi',
    image: '/assets/festivals/holi.jpg',
    description: 'Festival of colors with music, dance, and community celebrations'
  },
  {
    name: 'Onam',
    image: '/assets/festivals/onam.jpg',
    description: 'Kerala\'s harvest festival with traditional feasts and cultural programs'
  },
  {
    name: 'Ramzan Eid',
    image: '/assets/festivals/ramzan.jpg',
    description: 'Celebrating the end of Ramadan with community prayers and feasts'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Festival() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/90" />
        <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Blue Lotus Park
            <span className="block text-3xl md:text-4xl mt-2 text-primary-200">
              A Community Built for Comfort and Harmony
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Stay tuned for regular inter-society competitions, fitness challenges, and family-friendly sports days. 
            We encourage everyone, from kids to senior residents, to participate and make the most of our sports facilities.
          </p>
        </motion.div>
      </section>

      {/* Festivals Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Festivals We Celebrate
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These are the categories of sports (for men & women)
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {festivals.map((festival, index) => (
              <motion.div
                key={festival.name}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 relative h-64">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-primary-900/40 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {festival.name}
                    </h3>
                    <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {festival.description}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
} 