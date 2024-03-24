
import products from "@/lib/products";

export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
}
 
export default async function sitemap({ id }) {
  // Google's limit is 50,000 URLs per sitemap
  const start = id * 50000;
  const end = start + 50000;
  const productsForSitemap = products.slice(start, end);

  return productsForSitemap.map((product) => ({
    url: `https://onlyfansai.online/product/${product.id}`,
    lastModified: product.date,
  }));
}