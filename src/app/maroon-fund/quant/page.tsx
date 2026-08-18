"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

export default function QuantPage() {
  const models = [
    {
      title: "Dip Detection Model",
      description: "A dual model trading system that uses machine learning to predict buy and sell opportunities in stock trading. The buy side model identifies entry opportunities during price dips, while the sell side model identifies exit opportunities near price peaks."
    },
    {
      title: "Portfolio Allocation Algorithm",
      description: "An algorithm that allocates capital to trades based on confidence of returns to allow for optimal risk-adjusted returns."
    },
    {
      title: "Quantile Regression Neural Network",
      description: "LSTM (Long Short-Term Memory) quantile regression model that predicts price distributions, not just point estimate, enabling probalistic trading strategies and options market analysis."
    }
  ];

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
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] bg-gradient-to-r from-[#3a0000] via-[#800000] to-[#500000] bg-clip-text text-transparent mb-12">
              Quantitative Models
            </h1>
            
            <div className="space-y-10">
              {models.map((model, index) => (
                <div key={index} className="space-y-3">
                  <h2 className="text-2xl font-bold text-[#500000]">
                    {model.title}
                  </h2>
                  <p className="text-lg md:text-xl text-black leading-relaxed font-medium">
                    {model.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
}
