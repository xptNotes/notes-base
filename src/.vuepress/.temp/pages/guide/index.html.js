import comp from "/Users/xupengtao/Documents/note-space/notes-base/src/.vuepress/.temp/pages/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/\",\"title\":\"指南\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"指南\",\"icon\":\"lightbulb\",\"gitInclude\":[],\"description\":\"功能亮点 Bar ... Foo ...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/guide/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"文档演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"指南\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"功能亮点 Bar ... Foo ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"指南\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Hope\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"readingTime\":{\"minutes\":0.06,\"words\":17},\"filePathRelative\":\"guide/README.md\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
