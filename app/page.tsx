import { PortfolioGrid } from '@/components/portfolio-grid';
import { Time } from 'components/time';
import { getBlogPosts } from 'lib/blog';
import { sortPosts } from 'lib/sort';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {
  let allPosts = await getBlogPosts();

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-blue-950 tracking-tight">
            Hi👋, I&rsquo;m Sudarshan.
          </h1>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
            I'm a Nepal-based{' '}
            <strong className="text-blue-600 font-semibold">full stack web developer</strong>. 
            I find joy in problem solving and building web projects. I also pen
            down my thoughts about the web on my{' '}
            <Link href="/blog" className="text-blue-600 underline hover:text-blue-800 transition-colors">
              blog
            </Link>.
          </p>
          <div className="pt-4">
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-transform active:scale-95 shadow-lg shadow-blue-200"
            >
              Collaborate with me
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <header className="flex flex-row justify-between items-end mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Recent Posts</h2>
            <Link href="/blog" className="text-blue-600 dark:text-blue-400 font-medium hover:underline capitalize">
              see all posts
            </Link>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortPosts(allPosts)
              .slice(0, 3)
              .map(({ slug, metadata }) => (
                <article 
                  className="group bg-white dark:bg-slate-950 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow" 
                  key={slug}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={metadata.banner}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={metadata.title}
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <Link href={`/blog/${slug}`}>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {metadata.title}
                      </h3>
                    </Link>
                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">
                      {metadata.description}
                    </p>
                    <div className="pt-4 text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      <Time time={metadata.date} />
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <header className="flex flex-row justify-between items-end mb-10">
            <h2 className="text-3xl md:text-4xl font-bold ">Featured Projects</h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/realsudarshan"
              className="text-blue-600 font-medium hover:underline capitalize"
            >
              see all projects
            </a>
          </header>
          <PortfolioGrid/>
          {/* Add your project cards here */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Placeholder for projects */}
          </div>
        </div>
      </section>
    </>
  );
}