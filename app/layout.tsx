import './globals.css'; // Make sure this exists for Tailwind
import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { Analytics } from '@vercel/analytics/react';
import type { Viewport, Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/components/theme-provider';

// Uncomment and adjust paths if you want to use the fonts
/*
const satoshi = localFont({
  src: [
    { path: '../public/fonts/Satoshi-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/Satoshi-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/Satoshi-Medium.woff2', weight: '500', style: 'normal' }
  ],
  variable: '--font-body',
  display: 'swap',
});
*/

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' }, // Fixed hex
    { media: '(prefers-color-scheme: dark)', color: '#111111' }   // Fixed hex
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL('https://sudarshandhakal.com.np'),
  title: {
    default: 'Sudarshan Dhakal',
    template: '%s - Sudarshan Dhakal'
  },
  description: 'Sudarshan Dhakal, a seasoned freelance web developer based in Nepal.',
  alternates: {
    canonical: '/',
    types: { 'application/rss+xml': '/rss.xml' }
  },
  openGraph: {
    title: 'Sudarshan Dhakal',
    description: 'Sudarshan Dhakal, a seasoned freelance web developer based in Nepal.',
    url: 'https://sudarshandhakal.com.np',
    siteName: 'Sudarshan Dhakal',
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'Sudarshan Dhakal',
    card: 'summary_large_image'
  },
  manifest: '/manifest.webmanifest',
  verification: {
    google: '3Ie9_BMzfU7i6S_Jrt7ckAL6MgcW5fmVc8m-RldvYzg',
    yandex: '146231e50e9ee800',
    other: {
      'msvalidate.01': '7C327BDC039D585E5C712E44FBB3FFFD'
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <a 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-white p-4 z-50" 
          href="#main-content"
        >
          Skip to content
        </a>
        
        <Header />
        
        <main id="main-content" tabIndex={-1} className="outline-none">
          {/* Note: You likely don't want an <h1> here if your child pages also have <h1>s */}
          
          {children}
          <Analytics />
        </main>
        
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}