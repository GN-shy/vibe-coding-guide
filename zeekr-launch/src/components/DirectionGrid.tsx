"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../public/data/directions.json";
import DirectionCard from "./DirectionCard";
import ExpandedPath from "./ExpandedPath";
import type { Direction } from "./DirectionCard";

export default function DirectionGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const directions = data as Direction[];

  const handleToggle = (direction: Direction) => {
    setExpandedId((prev) => (prev === direction.id ? null : direction.id));
  };

  const handleClose = () => setExpandedId(null);

  return (
    <section id="directions" className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      {/* Section background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-zeekr-cyan/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            选择你的技术方向
          </h2>
          <p className="text-zeekr-text-secondary max-w-xl mx-auto">
            你不缺天赋，你只缺一张 roadmap。
            <br />
            点击任意方向，展开从 0 到进大厂的完整学习路径
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 transition-all duration-700 ease-in-out ${
            expandedId
              ? "scale-[0.85] opacity-20 blur-sm pointer-events-none"
              : ""
          }`}
        >
          {directions.map((direction, index) => (
            <DirectionCard
              key={direction.id}
              direction={direction}
              isExpanded={expandedId === direction.id}
              onToggle={() => handleToggle(direction)}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Modal overlay */}
      <AnimatePresence>
        {expandedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
            onClick={handleClose}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 60 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 60 }}
              transition={{ type: "spring", damping: 25, stiffness: 180, mass: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[88vh] overflow-y-auto rounded-2xl border border-zeekr-cyan/20 bg-gradient-to-b from-[#0d1f3c] to-zeekr-blue shadow-2xl shadow-zeekr-cyan/5"
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="sticky top-4 z-10 float-right mr-4 mt-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/60 hover:text-white border border-white/10 hover:border-white/30 transition-all backdrop-blur-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {directions
                .filter((d) => d.id === expandedId)
                .map((d) => (
                  <ExpandedPath key={d.id} direction={d} />
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
