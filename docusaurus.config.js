const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Ziqx Docs",
  tagline: "Ziqx Documentation",
  url: "https://docs.ziqx.in",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Ziqx", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Ziqx Docs",
      logo: {
        alt: "Ziqx",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Getting Started",
        },
        {
          type: "doc",
          docId: "apps",
          position: "left",
          label: "Apps",
        },
        {
          type: "doc",
          docId: "z-auth",
          position: "left",
          label: "ZAuth",
        },
        {
          type: "doc",
          docId: "ziqx-drive",
          position: "left",
          label: "Drive",
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: "https://github.com/Ziqx/docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Connect Us",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/ziqx_cr",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/ziqx.cr/",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/ziqx.cc",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/ziqx_cr",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Ziqx Home",
              to: "https://ziqx.cc",
            },
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/ziqx",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ziqx`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/Ziqx/docs/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
