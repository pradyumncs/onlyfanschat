const BASE_URL = 'https://onlyfansai.online'; // Define base URL here

import products from '@/lib/products'; // Import the products array

export async function generateSitemaps() {
  // Calculate the number of sitemaps needed based on product count and limit
  const numSitemaps = Math.ceil(products.length / 4000); // Google's limit is 50,000 URLs per sitemap
  const sitemaps = [];
  for (let i = 0; i < numSitemaps; i++) {
    sitemaps.push({ id: i });
  }
  return sitemaps;
}

export default async function sitemap({ id }) {
  // Calculate start and end indexes for products in this sitemap
  const start = id * 4000;
  const end = Math.min(start + 4000, products.length); // Ensure end doesn't exceed product count

  // Slice the products array to get products for this sitemap
  const retrievedProducts = products.slice(start, end);

  return retrievedProducts.map((product) => ({
    url: `${BASE_URL}/onlyfans-leak/${product.url}`,
    lastModified: product.date,
    changeFrequency: "monthly",
    priority: 0.5,

  }));
}
