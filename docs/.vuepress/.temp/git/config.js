import { Contributors } from "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.82_vuepress@2.0.0-rc.20_@vuepress+bundler-vite@2.0.0-rc.2_8d6b5d30a267742246b157c4d9e3b482/node_modules/@vuepress/plugin-git/lib/client/components/Contributors.js";
import { Changelog } from "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.82_vuepress@2.0.0-rc.20_@vuepress+bundler-vite@2.0.0-rc.2_8d6b5d30a267742246b157c4d9e3b482/node_modules/@vuepress/plugin-git/lib/client/components/Changelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", Contributors);
    app.component("GitChangelog", Changelog);
  },
};
