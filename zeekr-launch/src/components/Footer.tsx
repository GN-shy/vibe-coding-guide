"use client";

const directions = [
  { name: "前端开发", id: "frontend" },
  { name: "后端开发", id: "backend" },
  { name: "移动端开发", id: "mobile" },
  { name: "AI 算法", id: "ai-algorithm" },
  { name: "AI Agent", id: "ai-agent" },
  { name: "NLP 自然语言处理", id: "nlp" },
  { name: "计算机视觉", id: "cv" },
  { name: "全栈开发", id: "fullstack" },
  { name: "DevOps/SRE", id: "devops" },
  { name: "UI/UX 设计", id: "uiux" },
  { name: "数据分析", id: "data" },
  { name: "网络安全", id: "security" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-zeekr-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-2">
              <span className="text-white">极氪</span>
              <span className="text-zeekr-cyan">启程</span>
            </h3>
            <p className="text-sm text-zeekr-text-secondary leading-relaxed">
              以代码为钥，解锁你的无限可能。
              <br />
              Every line of code brings your dream closer.
            </p>
          </div>

          {/* Technical directions */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-zeekr-text-secondary uppercase tracking-wider mb-4">
              技术方向
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {directions.map((d) => (
                <button
                  key={d.id}
                  onClick={() => {
                    const el = document.querySelector(`#${d.id}`);
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-zeekr-text-secondary hover:text-zeekr-cyan transition-colors text-left"
                >
                  {d.name}
                </button>
              ))}
            </div>
          </div>

          {/* Motivational */}
          <div className="flex flex-col justify-center">
            <p className="text-sm text-zeekr-text-secondary italic mb-2">
              &ldquo;代码不欺人，你写多少，它就回报多少。&rdquo;
            </p>
            <p className="text-xs text-zeekr-text-secondary/60 font-mono">
              Zeekr Launch v2.0
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zeekr-text-secondary/40">
            &copy; {new Date().getFullYear()} 极氪启程 · Zeekr Launch. All rights reserved.
          </p>
          <p className="text-xs text-zeekr-text-secondary/30 font-mono">
            Your future is in your hands — and on your keyboard.
          </p>
        </div>
      </div>
    </footer>
  );
}
