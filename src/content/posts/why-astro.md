---
title: "为什么选择 Astro 搭建博客"
description: "聊聊 Astro 在静态博客场景下的几个亮点，以及和 Hugo / Hexo / Next.js 的对比。"
pubDate: 2026-05-21
tags: ["Astro", "建站", "前端"]
---

挑博客框架其实是个老问题了。我这次选了 [Astro](https://astro.build)，这里简单记录下原因。

## 它解决了什么

Astro 默认**零 JavaScript**输出 —— 也就是说，你的博客除非显式声明，否则不会塞客户端 JS 给读者。这件事在内容站点上非常重要：

- 页面更轻、更快
- Lighthouse 分数容易上 100
- 移动端体验更友好

## 和其它方案对比

| 框架 | 优点 | 我感觉的痛点 |
|------|------|--------------|
| Hugo | 构建快，主题多 | Go 模板语法不算友好 |
| Hexo | 中文社区好 | 插件质量参差不齐 |
| Next.js | 生态强 | 对静态博客来说太重 |
| Astro | 现代，灵活，性能默认好 | 中文资料相对少一点 |

## 关键特性

```ts
// content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { posts };
```

Content Collections 帮你做了**类型校验 + 类型推断**，frontmatter 写错了构建就会报错，体验比手写 schema 好很多。

## 结语

选什么框架其实没那么重要，**真正决定博客价值的是内容**。Astro 只是让我后续少踩点坑。
