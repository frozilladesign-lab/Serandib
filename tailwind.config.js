

/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        /* ── Serandib brand palette ──────────────────────────────
           Legacy semantic tokens are remapped onto the new teal/gold
           system so existing utilities pick up the rebrand. New
           semantic tokens are added below for precise brand roles.
           Keep these in sync with the CSS variables in src/index.css. */

        /* Legacy tokens (remapped) */
        primary: '#1D514E',   // Dark Teal — headings, dark sections, footer, primary surfaces
        secondary: '#2B7772', // Primary Teal — links, active states, focus, selected controls
        accent: '#B4A266',    // Brand Gold — decorative accents, premium highlights
        light: '#F7FAF9',     // Main background
        dark: '#17211F',      // Primary text (near-black)
        success: '#16A34A',   // Functional green (unchanged)
        cream: '#F3F8F7',     // Pale Teal — soft alternating sections
        sand: '#DCEBE9',      // Light Teal — soft panels & dividers
        ivory: '#FFFFFF',     // Surface / card background
        tea: '#24645F',       // Medium Teal — secondary branded elements
        muted: '#53615E',     // Secondary text

        /* New semantic brand tokens */
        teal: {
          DEFAULT: '#2B7772', // Primary Teal
          dark: '#1D514E',    // Dark Teal
          medium: '#24645F',  // Medium Teal
          light: '#DCEBE9',   // Light Teal
          soft: '#F3F8F7',    // Pale Teal
        },
        gold: {
          DEFAULT: '#B4A266', // Brand Gold
          dark: '#96854F',    // Dark Gold
          light: '#F0EBD9',   // Light Gold
        },
        ink: '#17211F',       // Primary text
        subtle: '#53615E',    // Secondary text
        hairline: '#D7E0DE',  // Borders & dividers
        canvas: '#F7FAF9',    // Main background
        surface: '#FFFFFF',   // Card / surface background
      },
      fontFamily: {
        heading: ['Fraunces', 'Georgia', 'serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': 'clamp(3rem, 8vw, 7rem)',
        'display-sm': 'clamp(2.5rem, 6vw, 5rem)',
      },
      letterSpacing: {
        'luxury': '0.02em',
      },
      boxShadow: {
        'soft': '0 2px 16px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 24px -4px rgba(0, 0, 0, 0.05)',
        'lift': '0 12px 32px -8px rgba(0, 0, 0, 0.06)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.03)',
        'glass-strong': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}

