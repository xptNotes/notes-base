import { hasGlobalComponent } from "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.80_vuepress@2.0.0-rc.20_@vuepress+bundler-webpack@2.0.0-rc.20_vue@3.5.13_/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/@vueuse+core@12.8.2/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0-rc.80_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuepress+bun_4698f36d9249eace71598d633f7d0a21/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "fa6-solid:",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
