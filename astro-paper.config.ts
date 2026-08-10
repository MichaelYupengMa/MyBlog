import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://blog.mayupeng.workers.dev/",
    title: "Michael's Blog",
    description:
      "马宇鹏 / Michael Ma 的个人博客 — 记录技术、思考与生活。",
    author: "Michael Ma",
    profile: "https://github.com/MichaelYupengMa",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Pacific/Auckland",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/MichaelYupengMa/MyBlog/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/MichaelYupengMa" },
    { name: "x", url: "https://x.com/michaelhorse12" },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/michael-ma-b99685180/",
    },
    {
      name: "facebook",
      url: "https://www.facebook.com/profile.php?id=100092512600734",
    },
    { name: "mail", url: "mailto:michaelfromxian@gmail.com" },
    {
      name: "wechat",
      url: "/about/#wechat",
      linkTitle: "WeChat: m521Yp365Yp",
    },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
