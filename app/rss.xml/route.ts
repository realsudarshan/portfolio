import { getBlogPosts } from '@/lib/blog';
import { sortPosts } from '@/lib/sort';
import RSS from 'rss';

export const dynamic = 'force-dynamic';

export async function GET() {
  let allPosts = await getBlogPosts();

  const feed = new RSS({
    title: 'Sudarshan Dhakal',
    site_url: 'https://mwtech.vercel.app', //will change later
    feed_url: 'https://mwtech.vercel.app/rss.xml',
    language: 'en_US',
    image_url: 'https://mwtech.vercel.app/favicon.ico'
  });

  sortPosts(allPosts).map(({ slug, metadata }) => {
    feed.item({
      title: metadata.title,
      url: `https://mwtech.vercel.app/blog/${slug}`,
      date: metadata.date,
      description: metadata.description,
      categories: metadata.tags
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'text/xml'
    }
  });
}
