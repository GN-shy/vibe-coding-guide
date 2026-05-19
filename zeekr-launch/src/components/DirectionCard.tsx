"use client";

import { motion } from "framer-motion";

export type Direction = {
  id: string;
  category: string;
  name: string;
  icon: string;
  description: string;
  difficulty: number;
  demand: number;
  estimatedMonths: string;
  suitableFor: string;
  relatedPaths: string[];
  steps: Step[];
  resources: Resource[];
  milestoneProject: string;
  salaryRange: string;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
};

type Step = {
  phase: number;
  title: string;
  duration: string;
  color: string;
  skills: { name: string; detail: string }[];
};

type Resource = {
  name: string;
  url: string;
  free: boolean;
};

type Props = {
  direction: Direction;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
};

const difficultyStars = (n: number) =>
  Array.from({ length: n })
    .map(() => "⭐")
    .join("");

const phaseNames = ["基础", "核心", "进阶", "高阶", "架构", "面试"];

export default function DirectionCard({
  direction,
  isExpanded,
  onToggle,
  index,
}: Props) {
  const totalSkills = direction.steps.reduce((acc, s) => acc + s.skills.length, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <button
        onClick={onToggle}
        className="group w-full text-left h-full"
      >
        <div
          className={`relative overflow-hidden rounded-2xl border bg-gradient-to-b from-zeekr-card/60 to-zeekr-card/30 p-6 card-glow transition-all duration-500 h-full flex flex-col ${
            isExpanded
              ? "border-zeekr-cyan/40 shadow-lg shadow-zeekr-cyan/10 scale-[1.02]"
              : "border-white/10 hover:border-white/20"
          }`}
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-zeekr-cyan/40 to-transparent" />

          {/* Header: Icon + Title + Difficulty */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{direction.icon}</span>
              <div>
                <h3 className="text-lg font-bold text-white">{direction.name}</h3>
                <span className="text-xs text-zeekr-text-secondary">
                  难度 {difficultyStars(direction.difficulty)}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-zeekr-text-secondary mb-4 leading-relaxed">
            {direction.description}
          </p>

          {/* Demand + duration badges */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-zeekr-text-secondary">需求</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < direction.demand ? "bg-zeekr-cyan" : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </div>
            <span className="text-xs px-2 py-0.5 rounded-full bg-zeekr-cyan/10 text-zeekr-cyan border border-zeekr-cyan/20">
              {direction.estimatedMonths}个月
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-zeekr-text-secondary border border-white/10">
              {direction.steps.length}阶段
            </span>
          </div>

          {/* Phase tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {direction.steps.slice(0, 5).map((step, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-[11px] rounded-md bg-white/5 text-zeekr-text-secondary border border-white/5"
              >
                {step.title}
              </span>
            ))}
          </div>

          {/* Skills count + salary */}
          <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/5">
            <span className="text-xs text-zeekr-text-secondary/60 font-mono">
              {totalSkills}+ 技术点
            </span>
            <span className="text-xs font-mono font-semibold text-zeekr-cyan/80">
              {direction.salaryRange.split(" ")[0]}
            </span>
          </div>

          {/* Hover indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-zeekr-cyan/0 to-transparent group-hover:via-zeekr-cyan/50 transition-all duration-500" />
        </div>
      </button>
    </motion.div>
  );
}
