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
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            When Stories Find Their Perfect Audience
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Real connections aren't always easy—
            <br />
            But when fun leads the way, everything just clicks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl mx-auto mb-12"
          >
            {/* <p className="text-lg md:text-xl text-gray-200 mb-6">
              Share moments. Discover voices. Build real bonds.
              <br />
              Whether you're telling your story or finding someone else's,
              <br />
              this is where conversations turn into connections.
            </p> */}
            <p className="text-lg md:text-xl text-primary-300 font-medium">
              ✨ Join the space where stories feel heard—and people feel seen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              href="/about"
              className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-500/30"
            >
              Explore Now
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-display font-bold text-gray-900 mb-6">
                The Blue Lotus Park - A Community Built for Comfort and Harmony
              </h1>
              <p className="text-gray-600 mb-4">
                From the spacious apartments to the friendly management,
                everything about this society is exceptional. My kids love the
                play area, and we enjoy the peaceful environment.
              </p>
              <h4 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Why it's way better
              </h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Premium apartments with modern designs</li>
                <li>Sustainable and eco-friendly community</li>
                <li>Lush landscaped gardens and open spaces</li>
                <li>
                  Amenities including a clubhouse, gym, and
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
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/building-society.jpg')" }} />
              {/* <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-display">
                Our Journey
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Unmatched Amenities for a Better Lifestyle
            </h2>
            <p className="text-xl text-gray-600">
              At Blue Lotus Park, we prioritize your lifestyle needs with
              state-of-the-art facilities:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Fully equipped gym and yoga room",
                // description: 'State-of-the-art sports facilities for all ages and skill levels',
                icon: "🏃‍♂️",
              },
              {
                title: "Landscaped gardens and jogging tracks",
                // description: 'Celebrate diversity with our vibrant cultural festivals',
                icon: "🎪",
              },
              {
                title: "Dedicated children's play areas",
                // description: 'Regular events and activities for the whole family',
                icon: "🎯",
              },
              {
                title: "Dedicated children's play areas",
                // description: 'Regular events and activities for the whole family',
                icon: "🎯",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                {/* <p className="text-gray-600">{feature.description}</p> */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-display font-bold text-primary-900 mb-4">
              Ready to Experience The Blue Lotus Park?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join us for an unforgettable experience
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary-700 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
