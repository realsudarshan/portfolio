import Link from 'next/link';
import { Rss, Github } from 'components/icons';
import { NewsletterForm } from 'components/newsletter-form';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 md:py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <nav
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          aria-label="secondary"
          tabIndex={-1}
        >
          {/* Copyright & Brand */}
          <div className="space-y-3">
            <strong className="block text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              © 2022 – {currentYear}
            </strong>
            <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Sudarshan Dhakal
            </Link>
          </div>

          {/* Contact Link */}
          <div className="space-y-3">
            <strong className="block text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Contact
            </strong>
            <Link href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize">
              Get in touch
            </Link>
          </div>
          {/* Social Links */}
          <div className="space-y-3">
            <strong className="block text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Social
            </strong>
            <div className="flex flex-col gap-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/realsudarsan_"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
              >
                Twitter
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/realsudarshan"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/realsudarshan"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4 lg:col-span-1">
            <div>
              <strong className="block text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Newsletter
              </strong>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Get notified of new posts
              </p>
            </div>
            <div className="max-w-xs">
              <NewsletterForm
                placeholder="email@example.com"
                buttonText="Subscribe"
              />
            </div>
          </div>
        </nav>

        {/* Bottom Bar: Icons */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center gap-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/realsudarshan"
            className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/rss.xml"
            className="text-slate-500 hover:text-orange-500 dark:text-slate-400 dark:hover:text-orange-400 transition-colors"
          >
            <Rss className="w-6 h-6" />
            <span className="sr-only">RSS</span>
          </a>
        </div>
      </div>
    </footer>
  );
}