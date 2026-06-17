/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.5rem', { lineHeight: '1rem' }], // 8px (was 12px)
        sm: ['0.625rem', { lineHeight: '1.25rem' }], // 10px (was 14px)
        base: ['0.75rem', { lineHeight: '1.5rem' }], // 12px (was 16px)
        lg: ['0.875rem', { lineHeight: '1.75rem' }], // 14px (was 18px)
        xl: ['1rem', { lineHeight: '1.75rem' }], // 16px (was 20px)
        '2xl': ['1.25rem', { lineHeight: '2rem' }], // 20px (was 24px)
        '3xl': ['1.625rem', { lineHeight: '2.25rem' }], // 26px (was 30px)
        '4xl': ['2rem', { lineHeight: '2.5rem' }], // 32px (was 36px)
        '5xl': ['2.75rem', { lineHeight: '1' }], // 44px (was 48px)
        '6xl': ['3.5rem', { lineHeight: '1' }], // 56px (was 60px)
        '7xl': ['4.25rem', { lineHeight: '1' }], // 68px (was 72px)
        '8xl': ['5.75rem', { lineHeight: '1' }], // 92px (was 96px)
        '9xl': ['7.75rem', { lineHeight: '1' }], // 124px (was 128px)
      },
    },
  },
  plugins: [],
}
