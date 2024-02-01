import { fontFamily } from 'tailwindcss/defaultTheme';

const responsiveVariants = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  safelist: [
    {
      pattern: /^(m|mx|my|mt|mr|mb|ml)-([0-9]|[1-9][0-9]|base|xl|2xl|4xl)/,
      variants: responsiveVariants,
    },
    {
      pattern: /^(p|px|py|pt|pr|pb|pl)-([0-9]|[1-9][0-9]|base|xl|2xl|4xl)/,
      variants: responsiveVariants,
    },
    {
      pattern: /^(gap|gap-x|gap-y)-(px|[0-9]+(\.[0-5])?|96)/,
      variants: responsiveVariants,
    },
    {
      pattern: /^w-(\d+(\.\d)?|px|full|screen|min|max|fit|\d+\/\d+)$/,
      variants: responsiveVariants,
    },
    {
      pattern: /^h-(\d+(\.\d)?|px|full|screen|min|max|fit|\d+\/\d+)$/,
      variants: responsiveVariants,
    },
    {
      pattern: /^h-(\d+(\.\d)?|px|full|screen|min|max|fit|\d+\/\d+)$/,
      variants: responsiveVariants,
    },
    {
      pattern: /^(space-x|space-y)-([0-9]+(\.[0-5])?|96)/,
      variants: responsiveVariants,
    },
    {
      pattern: /^(divide-x|divide-y)|(divide-x|divide-y)-([0-9])/,
      variants: responsiveVariants,
    },
    {
      pattern: /^(flex-row|flex-col)/,
      variants: responsiveVariants,
    },
    {
      pattern: /^text-(left|right|center)/,
    },
    {
      pattern: /^font-(bold|normal)/,
    },
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
