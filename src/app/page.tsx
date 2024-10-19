"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Page() {
  const [isClient, setIsClient] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const contentOpacity = useTransform(scrollY, [0, 300], [0, 1]);

  // Debug: Log scroll position
  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      console.log("Scroll position:", latest);
    });
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  console.log("Greetings from Felix");

  return (
    <div className="min-h-screen bg-cream-100 text-navy-900">
      {/* Fixed Header */}
      <motion.header
        className="fixed inset-0 flex flex-col justify-center items-center bg-cream-100 z-10"
        style={{ opacity: headerOpacity }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Thomas Hildebrandt
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-2">
          Oberbürgermeisterwahl 2024
        </h2>
        <h3 className="text-2xl md:text-4xl font-bold text-red-600">TBD</h3>
      </motion.header>

      {/* Scrollable Content */}
      <motion.main
        className="relative z-20 bg-white"
        style={{ opacity: contentOpacity }}
      >
        <div className="h-screen" />{" "}
        {/* Spacer to ensure content starts below the header */}
        {/* Vision Section */}
        <section className="bg-blue-600 text-white py-16">
          {/* ... (Vision section content remains unchanged) ... */}
        </section>
        {/* Working for Us Section */}
        <section className="py-16">
          {/* ... (Working for Us section content remains unchanged) ... */}
        </section>
        {/* Debug Section */}
        <section className="py-16 bg-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4"></h2>
            <motion.p>{scrollY}</motion.p>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-navy-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Thomas Hildebrandt. All rights reserved.</p>
          </div>
        </footer>
      </motion.main>
    </div>
  );
}
