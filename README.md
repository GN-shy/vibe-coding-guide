# 极氪启程 · Zeekr Launch

> **以代码为钥，解锁你的梦想座驾** — Code your way to the driver's seat.

[![Live Demo](https://img.shields.io/badge/🚀%20Live-zeekr--launch.vercel.app-00E5FF?style=for-the-badge)](https://zeekr-launch.vercel.app)

一个面向编程新手的**技术方向选择与学习路径导航站**。帮助零基础或刚入门的新手了解不同技术方向、每个方向需要学什么、按什么顺序学，并提供精神激励。

极氪 001 不仅是视觉主题，更是贯穿全程的精神图腾——每掌握一项技术，就离目标更近一步。

---

## 特性

- **7 个技术方向**：前端、后端、移动端、AI/ML、全栈、DevOps、UI/UX
- **结构化学习路径**：每个方向拆分为分阶段路线图，包含时长估算和技术要点
- **极氪 001 主题**：暗色系 + 极光青 accent + 全屏汽车壁纸
- **交互动效**：视差滚动、卡片悬停发光、平滑展开路径、车速表动效
- **纯静态**：数据驱动，无需后端，可一键部署

## 技术栈

| 层 | 技术选型 |
|----|---------|
| 框架 | [Next.js](https://nextjs.org) 14 (App Router) |
| 语言 | [TypeScript](https://typescriptlang.org) |
| 样式 | [TailwindCSS](https://tailwindcss.com) |
| 动画 | [Framer Motion](https://framer.com/motion) |
| 部署 | [Vercel](https://vercel.com) |

## 快速开始

```bash
# 安装依赖
cd zeekr-launch
npm install

# 启动开发服务器
npm run dev

# 打开浏览器访问 http://localhost:3000
```

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
zeekr-launch/
├── public/
│   ├── images/
│   │   ├── zeekr-001-hero.jpg    # 首屏主图
│   │   └── zeekr-001-tail.jpg    # 底部尾图
│   └── data/
│       └── directions.json       # 所有方向数据（7个技术方向）
├── src/
│   ├── app/
│   │   ├── globals.css           # 全局样式 + Tailwind
│   │   ├── layout.tsx            # 根布局
│   │   └── page.tsx              # 主页面（组合所有组件）
│   └── components/
│       ├── Navbar.tsx            # 固定导航栏
│       ├── HeroSection.tsx       # 首屏（视差背景 + 标语 + CTA）
│       ├── DirectionGrid.tsx     # 方向卡片网格
│       ├── DirectionCard.tsx     # 单个方向卡片
│       ├── ExpandedPath.tsx      # 路径详情展开
│       ├── QuoteSection.tsx      # 底部激励区
│       └── Footer.tsx            # 页脚
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
└── postcss.config.js
```

## 部署到 Vercel

🔗 **线上地址**: [zeekr-launch.vercel.app](https://zeekr-launch.vercel.app)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/GN-shy/vibe-coding-guide&root-directory=zeekr-launch)

或使用 CLI：

```bash
npm i -g vercel
vercel --prod
```

## 路线图

- **v1.0** — 7 个技术方向的完整学习路径 + 极氪 001 主题视觉 + 单页静态站点
- **v2.0** — 学习进度打卡 (localStorage) + 极氪 001 进度条解锁
- **v3.0** — 用户系统 + 极氪 001 3D 模型展示 (Three.js)

## 许可

MIT
