import products from "@/lib/products";

export async function generateSitemaps() {
  const totalProducts = products.length;
  const numSitemaps = Math.ceil(totalProducts / 50000);
  return Array.from({ length: numSitemaps }, (_, i) => ({ id: i }));
}

export interface Sitemap {
  url: string;
  lastModified: string;
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<Sitemap[]> {
  // Google's limit is 50,000 URLs per sitemap
  const start = id * 50000;
  const end = start + 50000;
  // Fetch products from the JavaScript file
  const productsForSitemap = products.slice(start, end);
  const WEBSITE_NAME = 'https://onlyfansai.online';

  const sitemapEntries: Sitemap[] = productsForSitemap.map((product) => ({
    url: `${WEBSITE_NAME}/product/${product.id}`,
    lastModified: product.date,
  }));

  return sitemapEntries;
}