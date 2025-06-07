import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/notes-base/",

  lang: "zh-CN",
  title: "老徐学习总结",
  description: "这是本人的学习总结,只是读书摘抄和自己工作的一些经验,不做商业用途",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
