"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  DollarSign,
  Users,
  TrendingUp,
  Calendar,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  DollarSign,
  Users,
  TrendingUp,
  Calendar,
};

interface StatCardProps {
  label: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
  icon: string;
  delay?: number;
}

export default function StatCard({
  label,
  numericValue,
  prefix = "",
  suffix = "",
  icon,
  delay = 0,
}: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  const Icon = iconMap[icon] || TrendingUp;

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = numericValue / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out cubic
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      current = numericValue * eased;

      if (step >= steps) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(parseFloat(current.toFixed(1)));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  const displayValue = numericValue % 1 !== 0 ? count.toFixed(1) : Math.round(count);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group relative glass rounded-2xl p-6 hover:border-maroon/30 transition-all duration-300"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-maroon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-maroon/10 text-maroon">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <p className="text-3xl font-bold text-text-primary tabular-nums">
          {prefix}
          {displayValue}
          {suffix}
        </p>
        <p className="mt-1 text-sm text-text-secondary">{label}</p>
      </div>
    </motion.div>
  );
}
