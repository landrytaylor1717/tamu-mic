"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageTransition from "@/components/PageTransition";

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/mfphoto.jpeg"
        alt="Maroon Investment Club"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold leading-[1.1] text-white mb-6 drop-shadow-lg"
        >
          Maroon Investment Club
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-200 font-medium mb-10 max-w-2xl mx-auto"
        >
          A student-run investment organization at Texas A&M University.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc2zT90dA5bTKp06khD0VKGgikbXmIQ7OmvHvk9PRyUVthzIQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="h-12 px-8 bg-gradient-to-r from-[#800000] to-[#500000] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Apply Now
            </motion.button>
          </a>

          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="h-12 px-8 bg-white/90 backdrop-blur-sm text-gray-800 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
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

function WhatWeDoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-[85rem] px-6 lg:px-10 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#500000] mb-8">
            What We Do
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-black leading-relaxed font-medium">
            <p>
              Our members gain real-world financial experience through managing the Maroon Fund. 
              We offer comprehensive educational resources and hands-on opportunities in portfolio management, equity research, and quantitative strategies.
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
        <WhatWeDoSection />
      </main>
    </PageTransition>
  );
}
