import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "极氪启程 · 程序员成长指南 | Zeekr Launch",
  description:
    "以代码为钥，解锁你的无限可能 — 面向编程新手的全方位学习路径导航站",
  openGraph: {
    title: "极氪启程 · 程序员成长指南",
    description: "每一行代码，都让你离梦想更近一步",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
