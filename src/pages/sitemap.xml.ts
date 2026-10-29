import type { APIRoute } from "astro";

// Páginas indexables. Si agregas una página nueva, añádela aquí.
const pages = ["/", "/proyectos", "/diseno", "/edicion", "/sobre-mi", "/privacidad", "/terminos"];

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error('Falta `site` en astro.config.mjs (ej. site: "https://tudominio.com").');
  }

  const base = site.href.replace(/\/$/, "");
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = pages
    .map(
      (path) =>
        `  <url>\n    <loc>${base}${path === "/" ? "/" : path}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
