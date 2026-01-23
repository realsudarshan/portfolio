import { getBlogPosts } from 'lib/blog';
import { sortPosts } from 'lib/sort';
import RSS from 'rss';

export const dynamic = 'force-dynamic';

export async function GET() {
  let allPosts = await getBlogPosts();

  const feed = new RSS({
    title: 'Sudarshan Dhakal',
    site_url: 'https://sudarshandhakal.com.np', //will change later
    feed_url: 'https://sudarshandhakal.com.np/rss.xml',
    language: 'en_US',
    image_url: 'https://sudarshandhakal.com.np/favicon.ico'
  });

  sortPosts(allPosts).map(({ slug, metadata }:{slug: string, metadata: any}) => {
    feed.item({
      title: metadata.title,
      url: `https://sudarshandhakal.com.np/blog/${slug}`,
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
