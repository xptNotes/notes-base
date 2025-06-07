import { sidebar } from "vuepress-theme-hope";

// import { aboutTheAuthor } from "./about-the-author.js";
// import { books } from "./books.js";
// import { highQualityTechnicalArticles } from "./high-quality-technical-articles.js";
// import { openSourceProject } from "./open-source-project.js";

export default sidebar({
  "/": [
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
                 "jvm-info",
                 "hot-deployment",
                 "java-plugin"

              ],
            },
      ]
    },
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
                       "redis-zset-source"

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
                  "advance-info"
              ],
            },
               {
              text: "MQ",
              icon: "star",
              prefix: "mq/",
              collapsible: true,
              children: [
                  "kafka总结",
                  "mq-question",
                  "rocketmq总结"
              ],
            }

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
        text: "分布式和微服务",
        icon: "fish",
        collapsible: true,
        prefix: "/summary/distributed&micro-service/",
        children:[
          {
            text: "分布式理论",
            icon: "star",
            prefix: "distributed-theory/",
            collapsible: true,
            children: [
               "d-theory-basic"
            ],
          },
           {
            text: "分布式解决方案",
            icon: "star",
            prefix: "distributed-solution/",
            collapsible: true,
            children: [
               "d-solution-baisc"
            ],
          },
            {
            text: "微服务基础",
            icon: "star",
            prefix: "micro-theory/",
            collapsible: true,
            children: [
                "m-theory",
                "service-manage-basic",
                "service-capacity",
            ],
          },
            {
            text: "微服务架构实战",
            icon: "star",
            prefix: "micro-design/",
            collapsible: true,
            children: [
               "online-offline-graceful"
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
       {
        text: "团队协作",
        icon: "fish",
        collapsible: true,
        prefix: "/summary/collaborate-work/",
        children:[
           "work-basic"
        ]
      }
  ],

});