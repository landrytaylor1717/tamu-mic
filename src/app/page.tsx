"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageTransition from "@/components/PageTransition";

function HeroSection() {
  return (
    <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-[85rem] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[65vh]">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 w-full flex flex-col space-y-8"
          >
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-[1.1] bg-gradient-to-r from-[#3a0000] via-[#800000] to-[#500000] bg-clip-text text-transparent"
            >
              Maroon Investment Club
            </h1>

            <div className="flex flex-col gap-10">
              <p className="text-[24px] md:text-[28px] leading-[1.4] text-black font-semibold max-w-[28ch]">
                A student-run investment organization at Texas A&M University.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc2zT90dA5bTKp06khD0VKGgikbXmIQ7OmvHvk9PRyUVthzIQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="box-border h-12 px-8 bg-gradient-to-r from-[#800000] to-[#500000] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  >
                    Apply Now
                  </motion.button>
                </a>

                <Link href="/about" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="box-border h-12 px-8 bg-white border border-gray-200 text-gray-800 font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Logo */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 w-full flex justify-center md:justify-end"
          >
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              <Image
                src="/logo.png"
                alt="Maroon Investment Club Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
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
            Who We Are
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-black leading-relaxed font-medium">
            <p>
              The Maroon Investment Club brings together students interested
              in finance and investing. We manage the Maroon Fund, allowing our members to gain experience in equity research, quantitative analysis, and portfolio management.
            </p>
            <p>
              We operate two divisions: an Equities team focused on
              fundamental research, and a Quant team building
              data-driven trading strategies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white">
        <HeroSection />
        <AboutPreview />
      </main>
    </PageTransition>
  );
}
