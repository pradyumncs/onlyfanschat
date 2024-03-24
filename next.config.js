/** @type {import('next').NextConfig} */
const nextConfig = {

  sitemap: {
   
    // ... other sitemap properties
    paths: [
      
      'app/sitemap.ts', 
      'app/asitemap.ts',// Add your new sitemap here
    ],
  },
    images: {
        domains: [
          "res.cloudinary.com",
         
        ],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "cdn.sanity.io",
            port: "",
          },
          {
            protocol: "https",
            hostname: "onlyfansai.online",
            port: "",
          },
        ],
  
      },
  
  
  
  
  }
  
  module.exports = nextConfig
  
  
  