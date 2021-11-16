import prisma from "/components/client";

const Sitemap = () => {};

export const getServerSideProps = async ({res}) => {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://bichtrampham.com",
  }[process.env.NODE_ENV];

  const staticPages = [`${baseUrl}/`, `${baseUrl}/about`];
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
                <loc>${baseUrl}/project/${id}/</loc>
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
