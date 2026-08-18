export const siteConfig = {
  resident: {
    name: "松果",
    role: "小镇修理师",
    plot: {
      town: "像素小镇",
      number: "23",
      coordinates: "X23, Y05",
      type: "工坊地块",
      phase: "试营业",
    },
    status: "正在修理一台老式像素收音机",
    introduction:
      "这是用于 Desktop 与 VS Code 路线技术预演的虚构居民资料。",
  },
  navigation: [
    { label: "首页", href: "/" },
    { label: "文章", href: "/#posts" },
    { label: "建站指南", href: "/guide/" },
  ],
  links: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "返回像素小镇", href: "https://example.com/" },
  ],
  seo: {
    title: "松果的像素工坊",
    description: "建站指南 Desktop 路线的公开技术预演网站。",
  },
} as const;

export type SiteConfig = typeof siteConfig;
