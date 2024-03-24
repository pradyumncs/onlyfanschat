// Import any necessary modules or define functions if needed

// Define a function to fetch products (replace this with your actual data fetching logic)
async function fetchProducts() {
  // Simulated data fetching
  return [
    { id: 1, url: 'https://onlyfansai.online/product/1', lastModified: '2024-03-24' },
    { id: 2, url: 'https://onlyfansai.online/product/2', lastModified: '2024-03-23' },
    // Add more product objects here
  ];
}

export async function generateSitemaps() {
  // Fetch products
  const products = await fetchProducts();

  // Calculate the number of sitemaps needed based on Google's limit
  const numSitemaps = Math.ceil(products.length / 50000);

  // Create an array of sitemap objects with IDs
  const sitemaps = Array.from({ length: numSitemaps }, (_, i) => ({ id: i }));

  return sitemaps;
}

export default async function sitemap({ id }, products) { // Pass products explicitly
  // Google's limit is 50,000 URLs per sitemap
  const start = id * 50000;
  const end = start + 50000;

  // Simulate fetching products based on the calculated indices (remove for actual implementation)
  const productsForSitemap = products.slice(start, Math.min(end, products.length));

  console.log("Products for sitemap:", productsForSitemap);

  return productsForSitemap.map((product) => ({
    url: product.url,
    lastModified: product.lastModified,
  }));
}
