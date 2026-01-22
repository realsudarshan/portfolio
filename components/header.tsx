'use client';

import { List, Logo } from 'components/icons';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState } from 'react';
import useSound from 'use-sound';
import { ModeToggle } from './modetoggle';

export function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [play] = useSound('/audio/click.mp3');
  const [visible, setVisible] = useState(false);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    play();
  };

  const toggleNav = () => {
    setVisible((x) => !x);
  };

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
              className={`
                fixed inset-0 bg-white dark:bg-slate-950 p-10 pt-24 transition-transform duration-300 md:static md:p-0 md:bg-transparent md:dark:bg-transparent md:translate-x-0
                ${visible ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
              `}
              id="primary-navigation"
              tabIndex={-1}
            >
              <ul
                className="flex flex-col md:flex-row gap-8 md:gap-10 text-lg md:text-sm font-medium uppercase tracking-wide text-slate-600 dark:text-slate-400"
                role="list"
                onClick={() => setVisible(false)}
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

            {/* Mobile Nav Toggle */}
            <button
              type="button"
              aria-controls="primary-navigation"
              aria-expanded={visible}
              className="p-2 ml-2 md:hidden text-slate-600 dark:text-slate-400 z-50"
              onClick={toggleNav}
            >
              <List className="w-6 h-6" />
            </button>

            {/* Theme Toggle Button */}
          <ModeToggle/>
          </div>
        </div>
      </div>
    </header>
  );
}