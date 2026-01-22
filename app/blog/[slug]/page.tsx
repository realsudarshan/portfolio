import { CustomMDX } from 'components/mdx';
import { Time } from 'components/time';
import { getBlogPosts } from 'lib/blog';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next/types';

const BASE_URL = 'https://sudarshandhakal.com.np';

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

  if (!post) return;

  const {
    metadata: { title, description, banner, date, tags }
  } = post;

  const ogImage = `${BASE_URL}${banner}`;
  const url = `${BASE_URL}/blog/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: date,
      url: url,
      tags: tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }]
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

  if (!post) notFound();

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
      
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <header className="mb-8 text-center">
          {/* Title */}
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl md:text-5xl">
            {post.metadata.title}
          </h1>

          {/* Metadata Bar */}
          <div className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-between gap-4 border-y border-slate-100 py-4 dark:border-slate-800">
            <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
              <Time time={post.metadata.date} />
            </div>

            {/* Tags */}
            <ul className="flex flex-wrap gap-2" role="list">
              {post.metadata.tags.map((tag) => (
                <li 
                  key={tag} 
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </header>

        {/* Article Body */}
        <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:scroll-mt-20 prose-a:text-blue-600 dark:prose-a:text-blue-400">
          <CustomMDX source={post.content} />
        </div>
      </article>
    </>
  );
}