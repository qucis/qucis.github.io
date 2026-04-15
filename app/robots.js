export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'], // Disallow non-public folders if any exist
    },
    sitemap: 'https://qucis.in/sitemap.xml',
  }
}
