/** @type {import('next').NextConfig} */
const nextConfig = {

  sitemap: {
   
    // ... other sitemap properties
    paths: [
      
      'sitemap.ts', 
      'sitemap2.ts',// Add your new sitemap here
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
  
  
  