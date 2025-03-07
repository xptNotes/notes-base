import { sidebar } from "vuepress-theme-hope";

// import { aboutTheAuthor } from "./about-the-author.js";
// import { books } from "./books.js";
// import { highQualityTechnicalArticles } from "./high-quality-technical-articles.js";
// import { openSourceProject } from "./open-source-project.js";

export default sidebar({
  // 应该把更精确的路径放置在前边
//   "/open-source-project/": openSourceProject,
//   "/books/": books,
//   "/about-the-author/": aboutTheAuthor,
//   "/high-quality-technical-articles/": highQualityTechnicalArticles,
//   "/zhuanlan/": [
//     "java-mian-shi-zhi-bei",
//     "back-end-interview-high-frequency-system-design-and-scenario-questions",
//     "handwritten-rpc-framework",
//     "source-code-reading",
//   ],
// 图标选择 https://fontawesome.com/search?o=r&c=animals&s=solid&ip=classic
  // 必须放在最后面
  "/": [
      {
        text: "基础组件",
        icon: "hippo",
        collapsible: true,
        prefix: "summary/base-components/",
        children:[
            {
              text: "Redis",
              icon: "star",
              prefix: "redis/",
              collapsible: true,
              children: [
                {
                    text: "基础知识",
                    icon: "star",
                    prefix: "basic/",
                    collapsible: true,
                    children: [
                      "redis-stand-alone",
                      "redis-distributed",
                    ],
                  },
                  {
                    text: "redis进阶",
                    icon: "star",
                    prefix: "advance/",
                    collapsible: true,
                    children: [
                      "data-types",
                    ],
                  },
              ],
            },

        ]
      },
      // java
      {
        text: "java",
        icon: "fish",
        collapsible: true,
        prefix: "/summary/java/",
        children:[
            {
              text: "java基础",
              icon: "star",
              prefix: "basic/",
              collapsible: true,
              children: [
                
              ],
            },

            {
                text: "jvm",
                icon: "star",
                prefix: "jvm/",
                collapsible: true,
                children: [
                   "java-auto-memory-management"
                ],
              },
        ]
      },
  ],
});