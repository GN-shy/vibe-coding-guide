"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const speedValue = useTransform(scrollYProgress, [0, 1], [0, 280]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-[120%] bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/zeekr-001-hero.jpg')`,
            backgroundColor: "#0A1628",
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-zeekr-blue/70 via-zeekr-blue/60 to-zeekr-blue/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-zeekr-blue/40 to-transparent" />
      </motion.div>

      {/* Speedometer overlay */}
      <motion.div
        style={{ opacity }}
        className="absolute top-1/4 right-[10%] z-10 hidden lg:block"
      >
        <div className="text-right">
          <motion.div
            className="text-6xl font-mono font-bold text-zeekr-cyan/20"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [0.15, 0]) }}
          >
            <motion.span>{speedValue}</motion.span>
            <span className="text-2xl"> km/h</span>
          </motion.div>
          <div className="text-xs text-zeekr-text-secondary/30 mt-1 tracking-widest uppercase">
            Towards your dream future
          </div>
        </div>
      </motion.div>

      {/* Hero content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        {/* Main slogan */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4"
        >
          <span className="text-gradient">以代码为钥，</span>
          <br />
          <span className="text-white">解锁你的无限可能</span>
        </motion.h1>

        {/* English subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-zeekr-cyan/80 font-mono mb-3"
        >
          Code your way to a better future.
        </motion.p>

        {/* Chinese subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-sm sm:text-base text-zeekr-text-secondary max-w-xl mx-auto mb-10"
        >
          每一行代码，都让你离梦想更近一步
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button
            onClick={() => {
              document
                .getElementById("directions")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-zeekr-cyan/10 border border-zeekr-cyan/30 rounded-full text-zeekr-cyan hover:bg-zeekr-cyan/20 hover:border-zeekr-cyan/60 transition-all duration-300 text-lg font-medium"
          >
            选择你的方向
            <svg
              className="w-5 h-5 group-hover:translate-y-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-zeekr-text-secondary/60 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="w-5 h-5 text-zeekr-cyan/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M12 5v14m0 0l-6-6m6 6l6-6" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
