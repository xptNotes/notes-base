import CodeDemo from "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.72_markdown-it@14.1.0_sass-embedded@1.85.1_sass-loa_1c0cc9710157d01d9a83346e553c91b7/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.72_markdown-it@14.1.0_sass-embedded@1.85.1_sass-loa_1c0cc9710157d01d9a83346e553c91b7/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
