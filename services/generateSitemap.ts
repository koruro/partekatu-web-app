import { getParsedLocationUrlName } from "../models/euskaltegi/Euskaltegi";
import { articleRepository, euskaltegiRepository } from "./bootstrap";

export async function generateSitemap() {
  const [articles, categories, locations] = await Promise.all([
    articleRepository.getArticles({ limit: 300 }),
    articleRepository.getCategories(),
    euskaltegiRepository.getAllLocations(),
  ]);

  const DOMAIN = "partekatu.com";
  const now = new Date();
  const serializeDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
  http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
  <url>
  <loc>https://${DOMAIN}/</loc>
  <lastmod>${serializeDate(now)}</lastmod>
</url>

<url>
  <loc>https://${DOMAIN}/articulos</loc>
  <lastmod>${serializeDate(now)}</lastmod>
</url>

<url>
		<loc>https://${DOMAIN}/cookies</loc>
		<lastmod>${serializeDate(now)}</lastmod>
	</url>

	<url>
		<loc>https://${DOMAIN}/legal</loc>
		<lastmod>${serializeDate(now)}</lastmod>
	</url>

	<url>
		<loc>https://${DOMAIN}/privacidad</loc>
		<lastmod>${serializeDate(now)}</lastmod>
	</url>
  <url>
    <loc>https://${DOMAIN}/quienes-somos</loc>
    <lastmod>${serializeDate(now)}</lastmod>
  </url>
  <url>
    <loc>https://${DOMAIN}/curso-euskera-online</loc>
    <lastmod>${serializeDate(now)}</lastmod>
  </url>
  ${categories
    .map((category) => {
      return `
    <url>
		<loc>https://${DOMAIN}/categorias/${category.slug}</loc>
		<lastmod>${serializeDate(new Date(category.updated_at))}</lastmod>
	</url>
    `;
    })
    .join("")}

    ${articles
      .map((article) => {
        return `
      <url>
      <loc>https://${DOMAIN}/${article.slug}</loc>
      <lastmod>${serializeDate(new Date(article.publishedAt))}</lastmod>
    </url>
      `;
      })
      .join("")}

  <url>
    <loc>https://${DOMAIN}/euskaltegi/buscador</loc>
    <lastmod>${serializeDate(now)}</lastmod>
  </url>
  ${locations
    .filter((location) => location.toIndex)
    .map((location) => {
      return `
    <url>
    <loc>https://${DOMAIN}/euskaltegi/${getParsedLocationUrlName(
        location.name
      )}</loc>
    <lastmod>${serializeDate(now)}</lastmod>
  </url>
    `;
    })
    .join("")}
  </urlset>
  `;

  return xml;
}
