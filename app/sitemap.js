export default function sitemap() {
  const baseUrl = 'https://qucis.in';
  
  // Define static routes based on the current website architecture
  const routes = [
    '',
    '/about',
    '/team',
    '/publications',
    '/funding',
    '/contact',
    '/gallery'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
