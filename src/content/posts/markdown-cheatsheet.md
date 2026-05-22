---
title: "Markdown 写作速查"
description: "本博客支持的常用 Markdown 语法预览，方便写作时对照。"
pubDate: 2026-05-20
tags: ["Markdown", "建站"]
---

这篇用来检验主题对常见 Markdown 元素的渲染效果。

## 标题层级

可以用到 `h3` 即可，文章里**慎用 h4 以下**。

### 这是 h3

## 强调

**加粗**、*斜体*、~~删除线~~、`行内代码`，以及[链接](https://astro.build)。

## 列表

无序：
- 一项
- 另一项
  - 嵌套一层
  - 再来一个

有序：
1. 第一步
2. 第二步
3. 第三步

## 引用

> 简洁比聪明更难 —— 致每一位写作者。

## 代码块

```ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet('world'));
```

```bash
# 启动开发服务器
npm run dev
```

## 表格

| 框架   | 语言       | 类型        |
|--------|------------|-------------|
| Astro  | TypeScript | SSG / SSR   |
| Hugo   | Go         | SSG         |
| Hexo   | Node.js    | SSG         |

## 分隔线

---

到这里基本覆盖日常写作所需。如果发现某个元素渲染奇怪，欢迎反馈。
