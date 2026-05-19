"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    text: "代码不欺人，你写多少，它就回报多少。",
    author: "极氪启程",
  },
  {
    text: "别让梦想只停留在收藏夹里，把它写进你的简历。",
    author: "极氪启程",
  },
  {
    text: "每一个 commit，都是你向理想生活的一次提交。",
    author: "极氪启程",
  },
];

export default function QuoteSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-zeekr-blue" />
        <div className="absolute inset-0 bg-gradient-to-b from-zeekr-blue via-zeekr-blue/95 to-zeekr-blue" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zeekr-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {quotes.map((quote, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="mb-8 last:mb-0"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white/90 leading-relaxed">
              &ldquo;{quote.text}&rdquo;
            </p>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-zeekr-cyan/20 bg-zeekr-cyan/5">
            <span className="text-zeekr-cyan text-sm font-mono">
              Don&apos;t just dream it — code it.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
