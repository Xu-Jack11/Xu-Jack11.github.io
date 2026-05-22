export const SITE = {
  title: "Jack Xu",
  description: "工程笔记、项目思考与日常折腾。",
  author: "Xu-Jack11",
  email: "xjh2723573932@gmail.com",
  github: "https://github.com/Xu-Jack11",
  url: "https://xu-jack11.github.io",
} as const;

export const NAV_ITEMS = [
  { label: "首页", href: "/" },
  { label: "文章", href: "/posts/" },
  { label: "标签", href: "/tags/" },
  { label: "项目", href: "/projects/" },
  { label: "关于", href: "/about/" },
] as const;
