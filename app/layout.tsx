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
  metadataBase: new URL('https://www.sudarshandhakal.com.np'),
  title: {
    default: 'Sudarshan Dhakal – Full-stack & AI Engineer',
    template: '%s - Sudarshan Dhakal'
  },
  description: 'Nepal-based Full Stack & AI Engineer building products that ship.',
  alternates: {
    canonical: '/',
    types: { 'application/rss+xml': '/rss.xml' }
  },
  openGraph: {
    title: 'Sudarshan Dhakal – Full-stack & AI Engineer',
    description: 'Nepal-based Full Stack & AI Engineer building products that ship.',
    url: 'https://www.sudarshandhakal.com.np',
    siteName: 'Sudarshan Dhakal',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.sudarshandhakal.com.np/sudarshan.jpg',
        width: 817,
        height: 817,
        alt: 'Sudarshan Dhakal, Full-stack and AI Engineer from Nepal',
      }
    ]
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
    title: 'Sudarshan Dhakal – Full-stack & AI Engineer',
    card: 'summary_large_image',
    images: ['https://www.sudarshandhakal.com.np/sudarshan.jpg']
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
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
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased bg-background text-foreground">
        
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


          {children}
          <Analytics />
        </main>

        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sudarshan Dhakal",
              "url": "https://www.sudarshandhakal.com.np",
              "image": "https://www.sudarshandhakal.com.np/sudarshan.jpg",
              "jobTitle": "Full-stack & AI Engineer",
              "sameAs": [
                "https://github.com/realsudarshan",
                "https://x.com/realsudarsan",
                "https://www.linkedin.com/in/sudarshan-dhakal-5b4522284"
              ]
            })
          }}
        />
        </ThemeProvider>
      </body>
    </html>
  );
}