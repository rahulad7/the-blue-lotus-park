"use client";

/**
 * Home Page
 * Route: /
 * Description: The main landing page of The Blue Lotus Park website
 * Features:
 * - Hero section with community introduction
 * - Features and amenities showcase
 * - Community benefits section
 * - Call-to-action section
 */

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Fully equipped gym and yoga room",
    description:
      "State-of-the-art facilities including swimming pool, gym, and sports complex.",
    image: "/assets/gym-fitness-equipment.jpg",
    // icon: "🏊‍♂️",
  },
  {
    title: "Landscaped gardens and jogging tracks",
    description:
      "Lush gardens, walking trails, and dedicated play areas for children.",
    image: "/assets/park-garden.jpg",
    // icon: "🌳",
  },
  {
    title: "Dedicated children’s play areas",
    description:
      "Regular cultural events, festivals, and social gatherings for all residents.",
    image: "/assets/kinderlaa.jpg",
    // icon: "🎉",
  },
  {
    title: "Community Hall for Events",
    description: "24/7 security with CCTV surveillance and trained personnel.",
    image: "/assets/event-hall.jpg",
    // icon: "🔒",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/view-city.jpg')" }}
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl text-white md:text-6xl font-bold mb-6"
          >
            When Stories Find Their Perfect Audience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Discover a community where every story matters, every voice is
            heard, and every connection is meaningful.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/about"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
            >
              Explore Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                The Blue Lotus Park - A Community Built for Comfort and Harmony
              </h2>
              <p className="text-gray-600 mb-4">
                From the spacious apartments to the friendly management,
                everything about this society is exceptional. My kids love the
                play area, and we enjoy the peaceful environment.
              </p>
              <h3 className="text-gray-600 text-2xl font-bold">
                Why it's way better
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Premium apartments with modern designs</li>
                <li>Sustainable and eco-friendly community</li>
                <li>Lush landscaped gardens and open spaces</li>
                <li>
                  Axmenities including a clubhouse, gym, and
                  swimming pool
                </li>
                <li>24/7 security and maintenance services</li>
                <li>Family-friendly environment with dedicated play areas</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/building-society.jpg')" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Features & Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience luxury living with our world-class amenities and
              facilities designed for your comfort and convenience.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-4xl">
                    {/* {feature.icon} */}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Community Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose The Blue Lotus Park?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join a community that values quality living, social connections,
              and sustainable practices.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Quality Living",
                description:
                  "Premium construction and modern amenities for a comfortable lifestyle.",
              },
              {
                title: "Social Connections",
                description:
                  "Regular community events and activities to foster meaningful relationships.",
              },
              {
                title: "Sustainable Living",
                description:
                  "Eco-friendly practices and green spaces for a better tomorrow.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Join Our Community?
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
