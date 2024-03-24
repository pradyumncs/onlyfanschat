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
  try {
    // Fetch products (handle potential errors)
    const products = await fetchProducts();

    // Calculate the number of sitemaps needed based on Google's limit
    const numSitemaps = Math.ceil(products.length / 50000);

    // Create an array of sitemap objects with IDs
    const sitemaps = Array.from({ length: numSitemaps }, (_, i) => ({ id: i }));

    return sitemaps;
  } catch (error) {
    console.error("Error fetching products for sitemaps:", error);
    // Consider returning an empty array or error response here
  }
}

export default async function sitemap({ id }, products) {
  // Handle potential undefined products here
  if (!products) {
    console.error("Products data is missing for sitemap generation");
    // Consider returning an empty array or error response here
    return []; // Example: Return an empty array to prevent further errors
  }

  // Google's limit is 50,000 URLs per sitemap
  const start = id * 50000;
  const end = Math.min(start + 50000, products.length); // Ensure end doesn't exceed array length

  // Filter products for the current sitemap using a loop
  const productsForSitemap = [];
  for (let i = start; i < end; i++) {
    productsForSitemap.push(products[i]);
  }

  console.log("Products for sitemap:", productsForSitemap);

  return productsForSitemap.map((product) => ({
    url: product.url,
    lastModified: product.lastModified,
  }));
}
