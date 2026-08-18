"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageTransition from "@/components/PageTransition";

function HeroSection() {
  return (
    <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-[85rem] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[50vh]">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col space-y-8"
          >
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-[1.1] bg-gradient-to-r from-[#3a0000] via-[#800000] to-[#500000] bg-clip-text text-transparent"
            >
              The Maroon Fund
            </h1>

            <div className="flex flex-col gap-10">
              <p className="text-[24px] md:text-[28px] leading-[1.4] text-black font-semibold max-w-[40ch]">
                A student-managed investment portfolio focused on fundamental research and quantitative strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/maroon-fund/equities" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="box-border h-12 px-8 bg-gradient-to-r from-[#800000] to-[#500000] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  >
                    Equities Division
                  </motion.button>
                </Link>

                <Link href="/maroon-fund/quant" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="box-border h-12 px-8 bg-white border border-gray-200 text-gray-800 font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto"
                  >
                    Quant Division
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-[85rem] px-6 lg:px-10 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#500000] mb-8">
            Overview
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-black leading-relaxed font-medium">
            <p>
              The Maroon Fund employs a research-intensive approach to investing,
              combining fundamental analysis with quantitative techniques. Our investment process emphasizes understanding businesses, managing risk, and maintaining a long-term perspective.
            </p>
            <p>
              Investment ideas go through a structured process from initial screening and research to a formal pitch. This mirrors the process at institutional asset managers and prepares our members for careers in the industry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function MaroonFundPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white">
        <HeroSection />
        <PhilosophySection />
      </main>
    </PageTransition>
  );
}
