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
                      "data-types",
                    ],
                  },
                  {
                    text: "redis进阶",
                    icon: "star",
                    prefix: "advance/",
                    collapsible: true,
                    children: [
                       "redis-best-practies",
                       "redis-distributed",

                    ],
                  },
              ],
            },
            {
              text: "MySQL",
              icon: "star",
              prefix: "mysql/",
              collapsible: true,
              children: [
                  "basic-info",
                  "advance-info",
                  "lock-types-analysis",
                  "mysql-interview-summary"
              ],
            },
            "mq-basic",
            "kafka-basic"

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
                "design-pattern"
              ],
            },
            {
              text: "并发",
              icon: "star",
              prefix: "concurrent/",
              collapsible: true,
              children: [
                 "concurrent-summary"
              ],
            },
            {
                text: "jvm",
                icon: "star",
                prefix: "jvm/",
                collapsible: true,
                children: [
                   "jvm-basic"
                ],
              },
        ]
      },
      {
        text: "开源框架",
        icon: "fish",
        collapsible: true,
        prefix: "/summary/open-source-framework/",
        children:[
            {
              text: "spring",
              icon: "star",
              prefix: "spring/",
              collapsible: true,
              children: [
                "spring-basic"
              ],
            },

            {
                text: "spring-boot",
                icon: "star",
                prefix: "spring-boot/",
                collapsible: true,
                children: [
                ],
              },
              {
                text: "spring-cloud",
                icon: "star",
                prefix: "spring-cloud/",
                collapsible: true,
                children: [
                ],
              },
        ]
      },
      //优化和问题排查
      {
        text: "问题排查和优化",
        icon: "fish",
        collapsible: true,
        prefix: "/summary/optimization-problem/",
        children:[
          "normal-problem",
          "jvm-problem",
        ]
      },
      {
        text: "分布式",
        icon: "fish",
        collapsible: true,
        prefix: "/summary/distributed/",
        children:[
          {
            text: "分布式解决方案",
            icon: "star",
            prefix: "solution/",
            collapsible: true,
            children: [
               "distributed-transaction"
            ],
          },
        ]
      },
      {
        text: "系统功能设计",
        icon: "fish",
        collapsible: true,
        prefix: "/summary/system-function-problem/",
        children:[
        ]
      },
            {
        text: "架构设计",
        icon: "fish",
        collapsible: true,
        prefix: "/summary/system-design/",
        children:[
          {
            text: "理论知识",
            icon: "star",
            prefix: "theory/",
            collapsible: true,
            children: [
              {
                text: "DDD",
                icon: "star",
                prefix: "ddd/",
                collapsible: true,
                children: [
                    "basic"
                
                ],
              },
              
            ],
          },
        ]
      },
      {
        text: "操作系统和网络",
        icon: "fish",
        collapsible: true,
        prefix: "/summary/operating-system-network/",
        children:[
           "network-basic"
        ]
      },
      {
        text: "微服务",
        icon: "fish",
        collapsible: true,
        prefix: "/summary/micro-service/",
        children:[
           {
            text: "基础知识",
            icon: "star",
            prefix: "basic/",
            collapsible: true,
            children: [
              "distribute-service-framework",
              "micro-service-construct"
            ],
          },
          "micro-service-summary",
        ]
      },
      {
        text: "业务",
        icon: "fish",
        collapsible: true,
        prefix: "/summary/business/",
        children:[
          "user-growth",
        ]
      },
      {
        text: "开发最佳实践",
        icon: "fish",
        collapsible: true,
        prefix: "/summary/engineering-efficiency/",
        children:[
          {
            text: "maven工程",
            icon: "star",
            prefix: "maven/",
            collapsible: true,
            children: [
              "maven",
            ],
          },
          {
            text: "mybatis",
            icon: "star",
            prefix: "mybatis/",
            collapsible: true,
            children: [
              "mybatis-plus-generator",
            ],
          }
        ]
      },
  ],

});