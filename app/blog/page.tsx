import { Time } from 'components/time';
import { getBlogPosts } from 'lib/blog';
import { sortPosts } from 'lib/sort';
import Link from 'next/link';
import type { Metadata } from 'next/types';
import { NewsletterInline } from 'components/newsletter-inline';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'My blog is a site where I share ideas, tips, and other random and interesting things about web development.'
};

export default async function BlogPage() {
  let allPosts = await getBlogPosts();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
        Blog
      </h1>

      <div className="mb-12">
        <NewsletterInline />
      </div>

      <div className="mt-12">
        <ul className="divide-y divide-slate-200 dark:divide-slate-800" role="list">
          {sortPosts(allPosts).map(({ slug, metadata }) => {
            const permalink = slug.replaceAll(' ', '-');
            return (
              <li className="py-10 first:pt-0" key={slug}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 
                      className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors" 
                      id={permalink}
                    >
                      <Link href={`/blog/${slug}`} className="block">
                        {metadata.title}
                      </Link>
                    </h2>
                    
                    <div className="flex items-center text-sm font-medium text-slate-500 dark:text-slate-400">
                      <Time time={metadata.date} />
                      <a href={`#${permalink}`} className="ml-2 opacity-0 hover:opacity-100 focus:opacity-100 transition-opacity">
                        <span className="sr-only">permalink</span>
                        <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">#</span>
                      </a>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {metadata.description}
                  </p>

                  <Link 
                    href={`/blog/${slug}`}
                    className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Read article →
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}