const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

// Popis URL-ova vašeg sajta
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/home', changefreq: 'monthly', priority: 0.8 },
  { url: '/usluge', changefreq: 'monthly', priority: 0.8 },
  { url: '/galerija', changefreq: 'monthly', priority: 0.8 },
  { url: '/mladenacki-sto', changefreq: 'monthly', priority: 0.8 },
  { url: '/cvjetni', changefreq: 'monthly', priority: 0.8 },
  { url: '/cvjetici', changefreq: 'monthly', priority: 0.8 },
  { url: '/kutija', changefreq: 'monthly', priority: 0.8 },
  { url: '/pozadina', changefreq: 'monthly', priority: 0.8 },
  { url: '/efekti', changefreq: 'monthly', priority: 0.8 },
  { url: '/tabla', changefreq: 'monthly', priority: 0.8 },
  { url: '/zahvalnice', changefreq: 'monthly', priority: 0.8 },
  { url: '/kontakt', changefreq: 'monthly', priority: 0.8 },
  // Dodajte sve ostale URL-ove vašeg sajta ovde
];

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://www.weddingsparkle.me' });
  const writeStream = createWriteStream(resolve(__dirname, 'dist/sitemap.xml'));

  sitemap.pipe(writeStream);

  links.forEach(link => sitemap.write(link));

  sitemap.end();

  await streamToPromise(sitemap);
})();
