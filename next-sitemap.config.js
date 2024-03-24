/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://onlyfansai.online',
    generateRobotsTxt: true,
    sitemapSize: 4000,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
        
      ],
 
    },
  }