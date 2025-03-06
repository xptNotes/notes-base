import comp from "/Users/xupengtao/Documents/note-space/notes-base/src/.vuepress/.temp/pages/guide/foo/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/foo/\",\"title\":\"Foo 功能\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Foo 功能\",\"icon\":\"lightbulb\",\"gitInclude\":[],\"description\":\"介绍 我们支持 foo 功能，... 详情 ...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/guide/foo/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"文档演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Foo 功能\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"介绍 我们支持 foo 功能，... 详情 ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Foo 功能\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Hope\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"readingTime\":{\"minutes\":0.07,\"words\":21},\"filePathRelative\":\"guide/foo/README.md\",\"autoDesc\":true}")
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
