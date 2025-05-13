import { colors, fontFamily, breakpoints } from './src/styles/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: colors.background,
        text: colors.text,
        accent: colors.accent,
      },
      fontFamily: {
        sans: fontFamily.primary.split(', '),
        mono: fontFamily.mono.split(', '),
      },
      screens: {
        sm: breakpoints.sm,
        md: breakpoints.md,
        lg: breakpoints.lg,
        xl: breakpoints.xl,
        '2xl': breakpoints['2xl'],
      },
    },
  },
  plugins: [],
}

