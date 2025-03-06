import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.73_markdown-it@14.1.0_sass-embedded@1.85.1_sass-loader@16._bf6230f440ff48204300e1bcac168731/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.80_vuepress@2.0.0-rc.20_@vuepress+bundler-webpack@2.0.0-rc.20_vue@3.5.13_/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { GlobalEncrypt, LocalEncrypt } from "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.73_markdown-it@14.1.0_sass-embedded@1.85.1_sass-loader@16._bf6230f440ff48204300e1bcac168731/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.73_markdown-it@14.1.0_sass-embedded@1.85.1_sass-loader@16._bf6230f440ff48204300e1bcac168731/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.82_vuepress@2.0.0-rc.20_@vuepress+bundler-webpack@2.0.0-rc.20_vue@3.5.13_/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.82_vuepress@2.0.0-rc.20_@vuepress+bundler-webpack@2.0.0-rc.20_vue@3.5.13_/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.82_vuepress@2.0.0-rc.20_@vuepress+bundler-webpack@2.0.0-rc.20_vue@3.5.13_/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.73_markdown-it@14.1.0_sass-embedded@1.85.1_sass-loader@16._bf6230f440ff48204300e1bcac168731/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index !== false;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
