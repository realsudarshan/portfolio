'use client';

import { List, Logo } from 'components/icons';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import { ModeToggle } from './modetoggle';
import { Sheet, SheetTrigger, SheetContent, SheetClose } from './components/ui/sheet';

export function Header() {


  return (
    <header role="banner" className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Brand/Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-base text-slate-900 dark:text-white hover:opacity-80 transition-opacity"
          >
            <Logo width={32} height={32} />
            <span className="hidden sm:inline">Sudarshan Dhakal</span>
          </Link>

          <div className="flex items-center gap-2 md:gap-6">
            {/* Desktop Navigation */}
            <nav
              aria-label="primary"
              className="hidden md:block"
              id="primary-navigation"
            >
              <ul
                className="flex flex-row gap-10 text-sm font-medium uppercase tracking-wide text-slate-600 dark:text-slate-400"
                role="list"
              >
                <li>
                  <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">blog</Link>
                </li>
                <li>
                  <Link href="/aboutpage" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About me</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">contact</Link>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/realsudarshan"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    gitHub
                  </a>
                </li>
              </ul>
            </nav>

            {/* Mobile Nav Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Open navigation menu"
                  className="p-2 ml-2 md:hidden text-slate-600 dark:text-slate-400 z-50"
                >
                  <List className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 p-0">
                <nav aria-label="mobile-navigation" className="h-full flex flex-col">
                  <ul className="flex flex-col gap-8 text-lg font-medium uppercase tracking-wide text-slate-600 dark:text-slate-400 p-8" role="list">
                    <li>
                      <SheetClose asChild>
                        <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          blog
                        </Link>
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose asChild>
                        <Link href="/aboutpage" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          About me
                        </Link>
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose asChild>
                        <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          contact
                        </Link>
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose asChild>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/realsudarshan"
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          gitHub
                        </a>
                      </SheetClose>
                    </li>
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Theme Toggle Button */}
            <ModeToggle/>
          </div>
        </div>
      </div>
    </header>
  );
}