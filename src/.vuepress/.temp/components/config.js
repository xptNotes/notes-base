import { hasGlobalComponent } from "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.82_vuepress@2.0.0-rc.20_@vuepress+bundler-webpack@2.0.0-rc.20_vue@3.5.13_/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.72_sass-embedded@1.85.1_sass-loader@16.0.5_sass-emb_66994cf1adc6a6da2defbe8b53829a60/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.72_sass-embedded@1.85.1_sass-loader@16.0.5_sass-emb_66994cf1adc6a6da2defbe8b53829a60/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "/Users/xupengtao/Documents/note-space/notes-base/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.82_vuepress@2.0.0-rc.20_@vuepress+bundler-webpack@2.0.0-rc.20_vue@3.5.13_/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
