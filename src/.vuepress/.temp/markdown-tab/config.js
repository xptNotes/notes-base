import { CodeTabs } from "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.80_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_381a2c1e132a7b52c8a4f71caeae1836/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.80_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_381a2c1e132a7b52c8a4f71caeae1836/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.80_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_381a2c1e132a7b52c8a4f71caeae1836/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
