module.exports = {
  title: "vue-blog",
  description: "vue-blog 开发笔记",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "开发笔记", link: "/note/" },
      { text: "External", link: "https://google.com" },
    ],
    sidebar: {
      "/note/": [
        {
          title: "",
          collapsable: false,
          children: [""],
        },
        {
          title: "第一章",
          collapsable: false,
          children: ["01_env_prepare", "02_project_init"],
        },
      ],
    },
  },
};
