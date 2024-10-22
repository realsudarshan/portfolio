'use client';

import { List, Logo } from '@/components/icons';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState } from 'react';
import useSound from 'use-sound';

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
    <header role="banner" className="site-head">
      <div className="wrapper">
        <div className="site-head__inner">
          <Link
            href="/"
            className="[ site-head__brand ] [ font-base fs-300 weight-bold ]"
          >
            <Logo className="margin-inline-end-200" width={48} height={48} />
            <span>Sudarshan Dhakal</span>
          </Link>
          <div className="site-head__navigation">
            <nav
              aria-label="primary"
              id="primary-navigation"
              data-visible={visible}
              tabIndex={-1}
            >
              <ul
                className="[ nav ] [ fs-300 weight-medium ]"
                role="list"
                onClick={() => setVisible(false)}
              >
                <li>
                  <Link href="/blog">blog</Link>
                </li>
                <li>
                  <Link href="/aboutpage">About me</Link>
                </li>
                <li>
                  <Link href="/contact">contact</Link>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/realsudarshan"
                  >
                    gitHub
                  </a>
                </li>
                {/* <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com"
                  >
                    linkedin
                  </a>
                </li> */}
              </ul>
            </nav>
            <button
              type="button"
              aria-controls="primary-navigation"
              aria-expanded={visible}
              className="[ site-head__nav-toggle ] [ margin-inline-start-100 ]"
              onClick={toggleNav}
            >
              <List />
            </button>
            <button
              id="theme-toggle"
              type="button"
              className="[ site-head__theme-toggle ] [ margin-inline-start-400 ]"
              onClick={toggleTheme}
              aria-label={`Switch to ${
                resolvedTheme === 'dark' ? 'light' : 'dark'
              } Theme`}
            ></button>
          </div>
        </div>
      </div>
    </header>
  );
}
