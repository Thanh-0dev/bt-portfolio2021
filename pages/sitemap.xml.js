import prisma from "/components/client";
import fs from "fs";

const Sitemap = () => {};

export const getServerSideProps = async ({res}) => {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://bichtrampham.com",
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync(
      {
        development: "pages",
        production: "./.next/pages/",
      }[process.env.NODE_ENV]
    )
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "_error.js",
        "sitemap.xml.js",
        "robots.txt",
        "project",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const dynamicPage = await prisma.project.findMany({select: {id: true}});

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
      ${dynamicPage
        .map(({id}) => {
          /* Project 6 is down */
          if (id !== 6) {
            return `
              <url>
                <loc>${baseUrl}/project/${id}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `;
          }
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
