const sidebarDepth = 1;
const getSidebar = require("./getSidebar");
const sidebar = getSidebar();
console.log(sidebar);

const title = "Jewelry Blog";
const description = "dev blog";

module.exports = {
  title,
  description,
  head: [
    ['script', {}, `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NG6SBMZL');`],
    ["link", { rel: "icon", href: "/images/logo.png" }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    ["meta", { property: "og:title", content: title }],
    ["meta", { property: "og:description", content: description }],
    [
      "meta",
      {
        name: "naver-site-verification",
        property: "naver-site-verification",
        content: "5b2f37c7b4199869388745a2b48d71230f79701b"
      }
    ],
  ],
  themeConfig: {
    nav: [{ text: "About", link: "/about" }],
    sidebar,
    sidebarDepth,
    smoothScroll: true
  },
  plugins: [
    "@vuepress/medium-zoom",
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-139862624-2"
      }
    ],
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
    [
      "sitemap",
      {
        hostname: "https://jewelism.github.io"
      }
    ]
  ]
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@': '/assets'
  //     }
  //   }
  // }
};
