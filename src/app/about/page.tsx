"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageTransition from "@/components/PageTransition";
import { User } from "lucide-react";
import Image from "next/image";
import { leadership } from "@/data/leadership";

function HeroSection() {
  return (
    <section className="pt-28 pb-14 md:pt-36 md:pb-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-6xl font-extrabold leading-[1.1] bg-gradient-to-r from-[#3a0000] via-[#800000] to-[#500000] bg-clip-text text-transparent mb-6"
        >
          About Us
        </motion.h1>
      </div>
    </section>
  );
}

function StorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <div className="space-y-6 text-lg md:text-xl text-black leading-relaxed font-medium">
            <p>
              The Maroon Investment Club provides a platform for Texas A&M
              students to engage directly with financial markets. We research
              companies, build financial models, and manage real capital.
            </p>
            <p>
              The club operates the Maroon Fund, consisting of an Equities
              division focused on fundamental research, and a Quant division
              focused on data-driven strategies. Our members come from various
              backgrounds and majors, but share a common interest in investing.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ShowcaseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const photos = [
    {
      src: "/about/atm_wall.jpg",
      alt: "TAMU Maroon Investment Club members in front of the ATM sign",
      title: "Our Members",
      description: "Maroon Investment Club members.",
    },
    {
      src: "/about/group_advisor.jpg",
      alt: "Maroon Investment Club members and faculty advisor outdoors",
      title: "Team & Advisors",
      description: "Members and advisor of the Maroon Fund.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#500000] mb-4">
            Club in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Bridging academic excellence with real-world investment management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Visual Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Text Info */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#800000] transition-colors duration-300">
                    {photo.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base font-medium">
                    {photo.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#500000]">
            Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 place-items-center">
            {leadership.map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full shadow-lg ring-1 ring-gray-200 bg-gray-50 flex items-center justify-center text-gray-300 overflow-hidden relative">
                  {member.image ? (
                    <Image src={member.image} alt={member.name} fill sizes="(max-width: 768px) 192px, 224px" className="object-cover" />
                  ) : (
                    <User className="w-16 h-16" />
                  ) }
                </div>
                <div className="mt-6">
                  <p className="text-xl font-semibold text-black">
                    {member.name} {member.detail && <span className="font-normal text-gray-600 block text-base mt-1">{member.detail}</span>}
                  </p>
                  <p className="mt-2 text-lg text-gray-700">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white text-black">
        <HeroSection />
        <StorySection />
        <ShowcaseSection />
        <LeadershipSection />
      </main>
    </PageTransition>
  );
}

