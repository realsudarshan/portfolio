import { CustomMDX } from '@/components/mdx';
import { Time } from '@/components/time';
import { getBlogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next/types';

const BASE_URL = 'https://sudarshandhakal.com.np';

// Pre-render all blog posts at build time for faster page loads
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = (await getBlogPosts()).find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  const {
    metadata: { title, description, banner, date, tags }
  } = post;

  const ogImage = `${BASE_URL}${banner}`;
  const url = `${BASE_URL}/blog/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: date,
      url: url,
      tags: tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  };
}

export default async function PostPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post = (await getBlogPosts()).find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.metadata.title,
    description: post.metadata.description,
    image: `${BASE_URL}${post.metadata.banner}`,
    datePublished: post.metadata.date,
    author: {
      '@type': 'Person',
      name: 'Sudarshan Dhakal',
      url: BASE_URL
    },
    publisher: {
      '@type': 'Person',
      name: 'Sudarshan Dhakal'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${slug}`
    },
    keywords: post.metadata.tags.join(', ')
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="[ wrapper flow ] [ region ]">
        <header className="headline" data-align="center">
          <h1>{post.metadata.title}</h1>
          <div className="measure-short margin-inline-auto">
            <div
              className="[ cluster ] [ flex-wrap ] [ margin-block-start-500 ]"
              data-align="between"
            >
              <Time time={post.metadata.date} />
              <ul className="flex-row" role="list">
                {post.metadata.tags.map((tag) => (
                  <li key={tag} className="[ pill ] [ margin-inline-end-100 ]">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </header>
        <div className="[ post ] [ flow ]">
          <hr />
          <CustomMDX source={post.content} />
        </div>
      </article>
    </>
  );
}
