"use client";

import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

export default function TravelSeriesPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white pt-28 pb-14 text-black text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-extrabold text-[#500000] mb-6"
        >
          Travel Series
        </motion.h1>
        <p className="text-gray-600 text-lg">Coming soon...</p>
      </main>
    </PageTransition>
  );
}
