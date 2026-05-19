"use client";

import { motion } from "framer-motion";
import type { Direction } from "./DirectionCard";

type Props = {
  direction: Direction;
};

const phaseColors: Record<string, { dot: string; bg: string; border: string; text: string }> = {
  green: {
    dot: "bg-green-400 shadow-green-400/30",
    bg: "bg-green-400/5",
    border: "border-green-400/20",
    text: "text-green-400",
  },
  yellow: {
    dot: "bg-yellow-400 shadow-yellow-400/30",
    bg: "bg-yellow-400/5",
    border: "border-yellow-400/20",
    text: "text-yellow-400",
  },
  orange: {
    dot: "bg-orange-400 shadow-orange-400/30",
    bg: "bg-orange-400/5",
    border: "border-orange-400/20",
    text: "text-orange-400",
  },
  red: {
    dot: "bg-red-400 shadow-red-400/30",
    bg: "bg-red-400/5",
    border: "border-red-400/20",
    text: "text-red-400",
  },
};

const phaseLabels = ["", "第1步 · ", "第2步 · ", "第3步 · ", "第4步 · ", "第5步 · ", "第6步 · "];

// Map direction id to human-readable names for related paths
const pathNameMap: Record<string, string> = {
  "react-frontend": "React 前端",
  "vue-frontend": "Vue 前端",
  "java-backend": "Java 后端",
  "python-backend": "Python 后端",
  "go-backend": "Go 后端",
  "node-backend": "Node.js 后端",
  "cpp-backend": "C++/Rust 后端",
  "ios-mobile": "iOS 开发",
  "android-mobile": "Android 开发",
  "flutter-mobile": "Flutter",
  "rn-mobile": "React Native",
  "ts-fullstack": "TS 全栈",
  "vue-java-fullstack": "Vue+Java 全栈",
  "react-py-fullstack": "React+Python 全栈",
  "ai-algorithm": "AI 算法",
  "ai-agent": "AI Agent",
  nlp: "NLP",
  cv: "计算机视觉",
  data: "数据分析",
  devops: "DevOps",
  security: "网络安全",
  uiux: "UI/UX 设计",
};

const pathIconMap: Record<string, string> = {
  "react-frontend": "⚛️",
  "vue-frontend": "💚",
  "java-backend": "☕",
  "python-backend": "🐍",
  "go-backend": "🔵",
  "node-backend": "💚",
  "cpp-backend": "⚡",
  "ios-mobile": "🍎",
  "android-mobile": "🤖",
  "flutter-mobile": "🦋",
  "rn-mobile": "📲",
  "ts-fullstack": "🔷",
  "vue-java-fullstack": "☕💚",
  "react-py-fullstack": "⚛️🐍",
  "ai-algorithm": "🧠",
  "ai-agent": "🤖",
  nlp: "📝",
  cv: "👁️",
  data: "📊",
  devops: "🔧",
  security: "🛡️",
  uiux: "🎨",
};

export default function ExpandedPath({ direction }: Props) {
  return (
    <div className="p-6 sm:p-8 lg:p-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-start gap-4 mb-10"
      >
        <span className="text-4xl">{direction.icon}</span>
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {direction.name}{" "}
            <span className="text-lg font-normal text-zeekr-text-secondary">
              学习路径
            </span>
          </h2>
          <p className="text-zeekr-text-secondary text-sm sm:text-base mb-3">
            {direction.description}
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-full bg-zeekr-cyan/10 text-zeekr-cyan border border-zeekr-cyan/20">
              🎯 {direction.salaryRange}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 text-zeekr-text-secondary border border-white/10">
              📅 {direction.estimatedMonths}个月
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 text-zeekr-text-secondary border border-white/10">
              👤 {direction.suitableFor}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Related paths */}
      {direction.relatedPaths && direction.relatedPaths.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-10 p-4 rounded-xl bg-gradient-to-r from-zeekr-cyan/5 to-transparent border border-zeekr-cyan/10"
        >
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-4 h-4 text-zeekr-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span className="text-sm font-medium text-white">关联方向</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {direction.relatedPaths.map((pid) => (
              <span
                key={pid}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-white/5 text-zeekr-text-secondary border border-white/10 hover:bg-white/10 hover:text-white transition-colors cursor-default"
              >
                <span>{pathIconMap[pid] || "📌"}</span>
                {pathNameMap[pid] || pid}
              </span>
            ))}
          </div>
          <p className="text-xs text-zeekr-text-secondary/60 mt-2">
            这些方向与本路线有技术交集，适合交叉学习
          </p>
        </motion.div>
      )}

      {/* Timeline */}
      <div className="relative mb-10">
        {/* Vertical line */}
        <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-zeekr-cyan/30 via-white/10 to-transparent" />

        <div className="space-y-10">
          {direction.steps.map((step, stepIndex) => {
            const colors = phaseColors[step.color] || phaseColors.green;
            return (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + stepIndex * 0.12 }}
                className="relative pl-10"
              >
                {/* Dot with pulse */}
                <div className="absolute left-0 top-2">
                  <div className={`w-[22px] h-[22px] rounded-full ${colors.dot} shadow-lg ring-4 ring-zeekr-blue`} />
                  <div className={`absolute inset-0 w-[22px] h-[22px] rounded-full ${colors.dot} animate-ping opacity-20`} />
                </div>

                {/* Phase header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-mono font-bold ${colors.text}`}>
                    {phaseLabels[step.phase] || `第${step.phase}步 `}
                    {step.title}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-zeekr-text-secondary border border-white/10">
                    {step.duration}
                  </span>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {step.skills.map((skill, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-xl border ${colors.border} ${colors.bg} hover:bg-white/[0.07] transition-colors`}
                    >
                      <div className="text-sm font-medium text-white flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} flex-shrink-0`} />
                        {skill.name}
                      </div>
                      <div className="text-xs text-zeekr-text-secondary mt-1 leading-relaxed pl-[18px]">
                        {skill.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom section: Resources + Milestone */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="lg:col-span-3 p-5 rounded-xl border border-white/10 bg-white/[0.03]"
        >
          <h4 className="text-sm font-semibold text-zeekr-text-secondary mb-4 uppercase tracking-wider flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            推荐学习资源
          </h4>
          <div className="flex flex-wrap gap-2">
            {direction.resources.map((resource, i) => (
              <a
                key={i}
                href={resource.url || "#"}
                target={resource.url ? "_blank" : undefined}
                rel={resource.url ? "noopener noreferrer" : undefined}
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs rounded-lg border transition-all ${
                  resource.free
                    ? "bg-green-400/5 border-green-400/20 text-green-400 hover:bg-green-400/10"
                    : "bg-amber-400/5 border-amber-400/20 text-amber-400 hover:bg-amber-400/10"
                } ${!resource.url ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
              >
                {resource.name}
                {resource.url && resource.free && (
                  <span className="px-1 py-0.5 text-[10px] rounded bg-green-400/20 text-green-400 font-bold">
                    FREE
                  </span>
                )}
                {!resource.free && (
                  <span className="px-1 py-0.5 text-[10px] rounded bg-amber-400/20 text-amber-400 font-bold">
                    $
                  </span>
                )}
                {!resource.url && (
                  <span className="px-1 py-0.5 text-[10px] rounded bg-white/10 text-zeekr-text-secondary">
                    书籍
                  </span>
                )}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Milestone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="lg:col-span-2 p-5 rounded-xl bg-gradient-to-br from-zeekr-cyan/[0.08] to-transparent border border-zeekr-cyan/20"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🎯</span>
            <span className="text-sm font-bold text-zeekr-cyan">里程碑项目</span>
          </div>
          <p className="text-sm text-white/90 leading-relaxed mb-3">
            {direction.milestoneProject}
          </p>
          <div className="flex items-center gap-2 text-xs text-zeekr-text-secondary">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            完成后可写入简历
          </div>
        </motion.div>
      </div>

      {/* Bottom spacer for close button area */}
      <div className="h-8" />
    </div>
  );
}
