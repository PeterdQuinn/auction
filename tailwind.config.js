module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':
          "url('/sports-shoe-illustration-men-fashion-generated-by-ai.webp')",
      },
      fontSize: {
        h1: 'clamp(1.25rem, calc(1.375rem + (1.75 - 1.25) * ((100vw - 40rem) / (64 - 40))), 1.75rem)',
        h2: 'clamp(1.1rem, calc(1.2rem + (1.2 - 1.1) * ((100vw - 40rem) / (64 - 40))), 1.2rem)',
        base: 'clamp(1rem, calc(1.05rem + (1.05 - 1) * ((100vw - 40rem) / (64 - 40))), 1.05rem)',
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: ['light'],
  },
};
