export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/xupengtao/Documents/note-space/notes-base/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"项目主页","icon":"house"} }],
  ["/portfolio.html", { loader: () => import(/* webpackChunkName: "portfolio.html" */"/Users/xupengtao/Documents/note-space/notes-base/src/.vuepress/.temp/pages/portfolio.html.js"), meta: {"title":"档案主页","icon":"house"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/Users/xupengtao/Documents/note-space/notes-base/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"指南","icon":"lightbulb"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"/Users/xupengtao/Documents/note-space/notes-base/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"主要功能与配置演示","icon":"laptop-code"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "demo_disable.html" */"/Users/xupengtao/Documents/note-space/notes-base/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"title":"布局与功能禁用","icon":"gears","order":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "demo_encrypt.html" */"/Users/xupengtao/Documents/note-space/notes-base/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"title":"密码加密的文章","icon":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "demo_layout.html" */"/Users/xupengtao/Documents/note-space/notes-base/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"title":"布局","icon":"object-group","order":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"/Users/xupengtao/Documents/note-space/notes-base/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"title":"Markdown 展示","icon":"fa6-brands:markdown","order":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "demo_page.html" */"/Users/xupengtao/Documents/note-space/notes-base/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"title":"页面配置","icon":"file","order":3} }],
  ["/guide/bar/", { loader: () => import(/* webpackChunkName: "guide_bar_index.html" */"/Users/xupengtao/Documents/note-space/notes-base/src/.vuepress/.temp/pages/guide/bar/index.html.js"), meta: {"title":"Bar 功能","icon":"lightbulb"} }],
  ["/guide/bar/baz.html", { loader: () => import(/* webpackChunkName: "guide_bar_baz.html" */"/Users/xupengtao/Documents/note-space/notes-base/src/.vuepress/.temp/pages/guide/bar/baz.html.js"), meta: {"title":"Baz","icon":"circle-info"} }],
  ["/guide/foo/", { loader: () => import(/* webpackChunkName: "guide_foo_index.html" */"/Users/xupengtao/Documents/note-space/notes-base/src/.vuepress/.temp/pages/guide/foo/index.html.js"), meta: {"title":"Foo 功能","icon":"lightbulb"} }],
  ["/guide/foo/ray.html", { loader: () => import(/* webpackChunkName: "guide_foo_ray.html" */"/Users/xupengtao/Documents/note-space/notes-base/src/.vuepress/.temp/pages/guide/foo/ray.html.js"), meta: {"title":"Ray","icon":"circle-info"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/xupengtao/Documents/note-space/notes-base/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
