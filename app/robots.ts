import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/'
    },
    host: 'https://sudarshandhakal.com.np',
    sitemap: 'https://sudarshandhakal.com.np/sitemap.xml'
  };
}
