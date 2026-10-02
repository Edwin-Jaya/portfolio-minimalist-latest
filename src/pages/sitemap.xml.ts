import { projects } from "../data/projects";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET({ site }: { site?: URL }) {
  const base = site ?? new URL("https://edwinlionajaya.com");
  const urls = [
    new URL("/", base).href,
    ...projects.map((project) =>
      new URL(`/projects/${project.slug}/`, base).href
    ),
  ];

  const entries = urls
    .map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
