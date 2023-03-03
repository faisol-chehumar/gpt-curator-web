const colors = require('./src/styles/tokens/colors.json');
const spaces = require('./src/styles/tokens/spaces.json');
const fonSizes = require('./src/styles/tokens/font-sizes.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': colors.charcoal_gray,
      },
      spacing: {
        xxs: spaces.xxs,
        xs: spaces.xs,
        sm: spaces.sm,
        md: spaces.md,
        lg: spaces.lg,
        xl: spaces.xl,
        xxl: spaces.xxl,
      },
      maxWidth: {
        'screen-xxl': 1440,
      },
      fontSize: {
        'hero-headline': [fonSizes.hero_headline, 1],
        'hero-tagline': [fonSizes.hero_tagline, 1],
      },
    },
  },
  plugins: [],
};
