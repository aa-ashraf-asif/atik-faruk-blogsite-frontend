// ...
const siteUrl =
  process.env.NEXTJS_PUBLIC_FRONTEND_URL || "https://www.atikfaruk.com";

module.exports = {
  siteUrl,
  exclude: ["/404"],
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404"],
      },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/server-sitemap.xml`,
    ],
  },
};
// ...
