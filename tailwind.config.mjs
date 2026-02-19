/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['"Playfair Display"', 'serif'],
      heading: ['Inter', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-warm': '#F5EFE7',
        'primary-dark': '#1A1A1A',
        background: '#FDFBF7',
        'accent-gold': '#C9A87C',
        'accent-brown': '#8B7355',
        'accent-green': '#2D5C3F',
        'text-primary': '#1A1A1A',
        'text-secondary': '#6B6B6B',
        border: '#E8E8E6',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
        35: '8.75rem',
        40: '10rem',
        50: '12.5rem',     /* 200px — section padding architectural */
        60: '15rem',        /* 240px — section gap ultra */
        88: '22rem',
        112: '28rem',
        128: '32rem',
      },
      maxWidth: {
        narrow: '900px',
        container: '1400px',
      },
      borderRadius: {
        none: '0px',
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        pill: '48px',
        full: '9999px',
      },
      boxShadow: {
        subtle: '0 4px 16px rgba(0,0,0,0.04)',
        medium: '0 8px 32px rgba(0,0,0,0.08)',
        large: '0 16px 48px rgba(0,0,0,0.12)',
        hover: '0 20px 60px rgba(0,0,0,0.15)',
      },
      transitionDuration: {
        fast: '400ms',
        base: '600ms',
        slow: '800ms',
        reveal: '1200ms',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      keyframes: {
        ribbon: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        ribbon: 'ribbon 30s linear infinite',
      },
      aspectRatio: {
        '2/3': '2 / 3',
        '3/4': '3 / 4',
        '4/5': '4 / 5',
        '1/1': '1 / 1',
        '16/9': '16 / 9',
        '16/10': '16 / 10',
        '21/9': '21 / 9',
      },
      fontSize: {
        'hero': ['clamp(56px, 10vw, 130px)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'section': ['clamp(40px, 7vw, 90px)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'subsection': ['clamp(26px, 3.5vw, 48px)', { lineHeight: '1.2', letterSpacing: '-0.005em' }],
      },
      letterSpacing: {
        tightest: '-0.01em',
        tight: '0em',
        normal: '0em',
        wide: '0.1em',
        wider: '0.2em',
        widest: '0.3em',
        ultra: '0.5em',
      },
      gap: {
        'grid-sm': '24px',
        'grid-md': '32px',
        'grid-lg': '48px',
        'grid-xl': '64px',
      },
      zIndex: {
        dropdown: '1000',
        sticky: '1020',
        fixed: '1030',
        'modal-backdrop': '1040',
        modal: '1050',
        popover: '1060',
        tooltip: '1070',
      },
    },
  },
  plugins: [],
};
