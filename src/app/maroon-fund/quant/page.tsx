"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

export default function QuantPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white text-black pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] bg-gradient-to-r from-[#3a0000] via-[#800000] to-[#500000] bg-clip-text text-transparent mb-10">
              Quant Division
            </h1>
            <p className="text-lg md:text-xl text-black leading-relaxed font-medium">
              The Quant Team develops, backtests, and implements systematic trading strategies for the student-run fund. Members leverage programming languages like Python, statistical methods, and mathematical modeling to identify market anomalies, optimize asset allocation, and manage portfolio risk. The team focuses on building quantitative frameworks that enhance decision-making and provides members with hands-on experience in quantitative research and analysis.
            </p>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
}
