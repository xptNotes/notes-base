import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/notes-base/",

  lang: "zh-CN",
  title: "Offer收割机",
  description: "java程序员的学习、成长之路",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
