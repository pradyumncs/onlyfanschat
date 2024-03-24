export async function generateSitemaps() {
  // Define an array of example product URLs (replace with your actual product data)
  const products = [
    { id: 1, url: 'https://onlyfansai.online/product/1', lastModified: '2024-03-24' },
    { id: 2, url: 'https://onlyfansai.online/product/2', lastModified: '2024-03-23' },
    // ... Add more product objects here
  ];

  // Calculate the number of sitemaps needed based on Google's limit
  const numSitemaps = Math.ceil(products.length / 50000);

  // Create an array of sitemap objects with IDs
  const sitemaps = Array.from({ length: numSitemaps }, (_, i) => ({ id: i }));

  return sitemaps;
}

export default async function sitemap({ id }, products) { // Pass products as a parameter
  // Google's limit is 50,000 URLs per sitemap
  const start = id * 50000;
  const end = start + 50000;

  // Simulate fetching products based on the calculated indices (remove for actual implementation)
  const productsForSitemap = generateProductsSlice(products, start, end);

  console.log("Products for sitemap:", productsForSitemap);

  return productsForSitemap.map((product) => ({
    url: product.url,
    lastModified: product.lastModified,
  }));
}

// Helper function to simulate product slicing (replace with your actual data fetching logic)
function generateProductsSlice(products, start, end) {
  return products.slice(start, Math.min(end, products.length));
}
