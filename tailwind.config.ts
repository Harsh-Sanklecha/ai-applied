import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,  // Centers the container by default
        padding: '1rem',
        screens: {
          sm: '640px',  // Custom width for 'sm' breakpoint
          md: '768px',  // Custom width for 'md' breakpoint
          lg: '1024px', // Custom width for 'lg' breakpoint
          xl: '1342px', // Custom width for 'xl' breakpoint
        },
      },
      colors: {
        primary: {
          50: '#E3F7EF',  // Lightest shade
          100: '#C1ECD9', // Lighter
          200: '#8DE0BC', // Light
          300: '#4CCB97', // Base - Lighter
          400: '#28B678', // Base
          500: '#079561', // Primary Color (Base)
          600: '#067B52', // Dark
          700: '#045C3F', // Darker
          800: '#033E2D', // Very Dark
          900: '#01251B', // Darkest
        },
      },
    },
  },
  plugins: [],
};
export default config;
