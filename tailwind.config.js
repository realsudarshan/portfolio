/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-bullets': theme('colors.slate.500'),
            'ul > li::marker': {
              color: 'var(--tw-prose-bullets)',
            },
            h1: {
              fontSize: '2.25em',
              fontWeight: '800',
              marginBottom: '0.8888889em',
            },
            h2: {
              fontSize: '1.8em',
              fontWeight: '700',
              marginTop: '1.5em',
              marginBottom: '0.8em',
            },
            h3: {
              fontSize: '1.5em',
              fontWeight: '600',
              marginTop: '1.2em',
              marginBottom: '0.6em',
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-bullets': theme('colors.slate.400'),
          },
        },
      }),
    },
  },
  plugins: [
    require('tw-animate-css'),
    require('@tailwindcss/typography')
  ],
};
