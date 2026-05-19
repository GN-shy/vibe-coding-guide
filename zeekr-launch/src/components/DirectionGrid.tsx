"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import rawData from "../../public/data/directions.json";
import DirectionCard from "./DirectionCard";
import ExpandedPath from "./ExpandedPath";
import type { Direction, Category } from "./DirectionCard";

type Data = { categories: Category[]; directions: Direction[] };
const data = rawData as unknown as Data;

export default function DirectionGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredDirections = useMemo(() => {
    if (activeCategory === "all") return data.directions;
    return data.directions.filter((d) => d.category === activeCategory);
  }, [activeCategory]);

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
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            选择你的技术方向
          </h2>
          <p className="text-zeekr-text-secondary max-w-xl mx-auto">
            你不缺天赋，你只缺一张 roadmap。
            <br />
            22 条精准学习路线，按语言和框架拆分，点击展开完整学习路径
          </p>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-zeekr-cyan/20 border-zeekr-cyan text-zeekr-cyan shadow-lg shadow-zeekr-cyan/10"
                : "bg-white/5 border-white/10 text-zeekr-text-secondary hover:border-white/30 hover:text-white"
            }`}
          >
            全部 ({data.directions.length})
          </button>
          {data.categories.map((cat) => {
            const count = data.directions.filter((d) => d.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-zeekr-cyan/20 border-zeekr-cyan text-zeekr-cyan shadow-lg shadow-zeekr-cyan/10"
                    : "bg-white/5 border-white/10 text-zeekr-text-secondary hover:border-white/30 hover:text-white"
                }`}
              >
                {cat.icon} {cat.name}
                <span className="ml-1.5 text-xs opacity-50">({count})</span>
              </button>
            );
          })}
        </motion.div>

        {/* Cards grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 transition-all duration-700 ease-in-out ${
            expandedId
              ? "scale-[0.85] opacity-20 blur-sm pointer-events-none"
              : ""
          }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredDirections.map((direction, index) => (
              <motion.div
                key={direction.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <DirectionCard
                  direction={direction}
                  isExpanded={expandedId === direction.id}
                  onToggle={() => handleToggle(direction)}
                  index={index}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filteredDirections.length === 0 && (
          <div className="text-center py-12 text-zeekr-text-secondary">
            该分类暂无方向
          </div>
        )}
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

              {data.directions
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
