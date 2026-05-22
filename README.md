# Xu-Jack11.github.io

个人博客源码，使用 [Astro](https://astro.build) 构建，部署在 GitHub Pages：
👉 <https://xu-jack11.github.io>

## 本地开发

```bash
npm install
npm run dev      # 启动开发服务器 http://localhost:4321
npm run build    # 构建到 ./dist
npm run preview  # 本地预览构建产物
```

需要 Node.js 18+（推荐 20 / 22）。

## 写一篇新文章

在 `src/content/posts/` 下新建一个 `.md` 文件，frontmatter 示例：

```yaml
---
title: "文章标题"
description: "一句话简介，会出现在卡片和 SEO 里。"
pubDate: 2026-05-22
updatedDate: 2026-05-23   # 可选
tags: ["标签1", "标签2"]
draft: false              # 设为 true 不会发布
---

正文用 Markdown 写。
```

保存后开发服务器会热更新，文件名（去掉 `.md`）即为 URL 的 slug：
`/posts/<文件名>/`。

## 目录结构

```
.
├── astro.config.mjs         # Astro 配置
├── src/
│   ├── consts.ts            # 站点信息（标题/邮箱/GitHub 等）
│   ├── content.config.ts    # 内容集合 schema
│   ├── styles/global.css    # 全局样式（深色主题变量）
│   ├── layouts/             # 页面与文章布局
│   ├── components/          # Header / Footer / 卡片等
│   ├── pages/               # 路由
│   │   ├── index.astro      # 首页
│   │   ├── posts/           # 文章列表与详情
│   │   ├── tags/            # 标签索引与详情
│   │   ├── about.astro
│   │   ├── projects.astro
│   │   ├── rss.xml.ts       # RSS 输出
│   │   └── 404.astro
│   └── content/posts/       # 文章 Markdown
├── public/                  # 静态资源（favicon 等）
└── .github/workflows/deploy.yml  # GitHub Actions 部署
```

## 自定义

- 站点标题、作者、邮箱、GitHub 链接：`src/consts.ts`
- 主题颜色、字体：`src/styles/global.css` 中的 CSS 变量
- 导航栏菜单：`src/consts.ts` 的 `NAV_ITEMS`
- 项目列表：`src/pages/projects.astro` 顶部的 `projects` 数组

## 部署

推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动构建并部署到 GitHub Pages。

**首次部署需要在仓库设置中启用 Pages：**
`Settings → Pages → Build and deployment → Source` 选择 **GitHub Actions**。
